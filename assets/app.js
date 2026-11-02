/* 画面の動き。中身は qa-data.js。同じ段で開くのは1つだけ（name 属性）。
   URL の末尾に #問いのid を付けると、その答えが開いた状態で始まる（展示品のQRなどに使える）。
   新しい部品は BLOCKS に1つ足すと、qa-data.js の blocks から使える。 */
(function () {
  "use strict";
  var UI = window.KK_UI, DATA = window.KK_QA, PFX = "kkqa-";
  var lang = "ja", restoring = false;
  try { if (localStorage.getItem("kkqa-lang") === "en") lang = "en"; } catch (e) {}
  function $(id) { return document.getElementById(PFX + id); }
  var list = $("list"), nav = $("nav"), input = $("q"), count = $("count");

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function t(o) { return o ? (o[lang] != null ? o[lang] : o.ja) : ""; }

  /* 部品。qa-data.js の blocks:[{type:"image",…}] で呼ぶ */
  var BLOCKS = {
    table: function (b) {
      var wrap = el("div", "kkqa-table-wrap"), tb = el("table", "kkqa-table"), th = el("thead"), tr = el("tr"), body = el("tbody");
      t(b.head).forEach(function (c) { tr.appendChild(el("th", "kkqa-table__cell kkqa-table__cell--head", c)); });
      th.appendChild(tr); tb.appendChild(th);
      b.rows.forEach(function (r) {
        var row = el("tr");
        t(r).forEach(function (c, i) {
          row.appendChild(el(i ? "td" : "th", "kkqa-table__cell " + (i === 0 ? "kkqa-table__cell--row" : i === 1 ? "kkqa-table__cell--main" : ""), c));
        });
        body.appendChild(row);
      });
      tb.appendChild(body); wrap.appendChild(tb);
      return wrap;
    },
    note: function (b) { return el("p", "kkqa-note", t(b.text)); },
    image: function (b) {
      var f = el("figure", "kkqa-figure"), i = el("img", "kkqa-figure__img");
      i.src = b.src; i.alt = t(b.alt); i.loading = "lazy";
      f.appendChild(i);
      if (b.caption) f.appendChild(el("figcaption", "kkqa-figure__cap", t(b.caption)));
      return f;
    },
    video: function (b) {
      if (b.youtube) {
        var f = el("iframe", "kkqa-video");
        f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(b.youtube);
        f.title = t(b.title); f.loading = "lazy"; f.allowFullscreen = true;
        return f;
      }
      var v = el("video", "kkqa-video");
      v.src = b.src; v.controls = true; v.preload = "none"; v.playsInline = true;
      return v;
    },
    link: function (b) {
      var a = el("a", "kkqa-link", t(b.label));
      a.href = b.href;
      if (/^https?:/.test(b.href)) { a.target = "_blank"; a.rel = "noopener"; }
      return a;
    }
  };

  /* 開いたら、その見出しが画面の上に隠れないようにする */
  function keepInView(d) {
    d.addEventListener("toggle", function () {
      if (!d.open || restoring) return;
      var top = d.getBoundingClientRect().top;
      if (top < 64) window.scrollBy({top: top - 72});
    });
  }
  function itemEl(item, group, from, nested) {
    var d = el("details", "kkqa-item kkqa-item--" + item.id), s = el("summary", "kkqa-item__head");
    d.id = PFX + item.id;
    d.setAttribute("name", group);
    var label = el("span", "kkqa-item__title");
    if (from) label.appendChild(el("span", "kkqa-item__from", from));
    label.appendChild(document.createTextNode(t(item.q)));
    s.appendChild(label);
    d.appendChild(s);

    var a = el("div", "kkqa-item__body");
    a.appendChild(el("p", "kkqa-item__answer", t(item.a)));
    if (item.table) a.appendChild(BLOCKS.table(item.table));
    (item.blocks || []).forEach(function (b) {
      if (BLOCKS[b.type]) a.appendChild(BLOCKS[b.type](b));
    });
    if (item.note) a.appendChild(BLOCKS.note({text: item.note}));
    if (item.more && nested !== false) {
      var m = el("div", "kkqa-item__more");
      item.more.forEach(function (x) { m.appendChild(itemEl(x, group + "-" + item.id)); });
      a.appendChild(m);
    }
    d.appendChild(a);
    keepInView(d);
    return d;
  }
  function render() {
    list.textContent = "";
    DATA.forEach(function (c) {
      var d = el("details", "kkqa-cat kkqa-cat--" + c.id), s = el("summary", "kkqa-cat__head"), b = el("div", "kkqa-cat__body");
      d.id = PFX + c.id;
      d.setAttribute("name", "kkqa-cats");
      s.appendChild(el("span", "kkqa-cat__mark", c.icon));
      s.appendChild(el("span", "kkqa-cat__title", t(c.title)));
      d.appendChild(s);
      c.items.forEach(function (i) { b.appendChild(itemEl(i, "kkqa-" + c.id)); });
      d.appendChild(b);
      keepInView(d);
      list.appendChild(d);
    });
    nav.textContent = "";
    DATA.forEach(function (c) {
      var b = el("button", "kkqa-nav__btn", t(c.title));
      b.type = "button";
      b.addEventListener("click", function () { input.value = ""; count.textContent = ""; openId(c.id); });
      nav.appendChild(b);
    });
  }
  /* id の答えを、親のトグルごと開く */
  function openId(id) {
    if (!$(id)) render();
    var d = $(id);
    if (!d) return false;
    for (var n = d; n; n = n.parentElement && n.parentElement.closest("details")) n.open = true;
    d.scrollIntoView({block: "start"});
    return true;
  }

  /* 検索：問い・答え・注・表・部品の説明を、日英どちらの語でも探す */
  function strings(o, out) {
    if (typeof o === "string") { out.push(o); return out; }
    if (Array.isArray(o)) { o.forEach(function (x) { strings(x, out); }); return out; }
    if (o && typeof o === "object") {
      Object.keys(o).forEach(function (k) {
        if (["id", "type", "src", "href", "youtube", "more"].indexOf(k) < 0) strings(o[k], out);
      });
    }
    return out;
  }
  function norm(s) { return s.toLowerCase().replace(/co2/g, "co₂"); }
  function flat() {
    var out = [];
    function walk(i, c) { out.push({item: i, cat: c}); (i.more || []).forEach(function (m) { walk(m, c); }); }
    DATA.forEach(function (c) { c.items.forEach(function (i) { walk(i, c); }); });
    return out;
  }
  function search() {
    var raw = input.value.trim();
    if (!raw) { count.textContent = ""; return false; }
    var words = norm(raw).split(/[\s　]+/);
    var hits = flat().filter(function (x) {
      var s = norm(strings(x.item, []).join(" "));
      return words.every(function (w) { return s.indexOf(w) >= 0; });
    });
    list.textContent = "";
    count.textContent = hits.length ? t(UI.found).replace("{n}", hits.length) : "";
    if (!hits.length) { list.appendChild(el("p", "kkqa-empty", t(UI.none))); return true; }
    hits.forEach(function (x) { list.appendChild(itemEl(x.item, "kkqa-hits", t(x.cat.title), false)); });
    return true;
  }
  function paint() {
    /* 言語を替えても、開いていた答えはそのまま（お客様に同じ答えを見せられる） */
    var open = [].map.call(list.querySelectorAll("details[open]"), function (d) { return d.id; });
    if (search()) return;
    render();
    restoring = true;
    open.forEach(function (id) { var d = document.getElementById(id); if (d) d.open = true; });
    setTimeout(function () { restoring = false; }, 60);
  }
  function setLang(l) {
    lang = l;
    try { localStorage.setItem("kkqa-lang", l); } catch (e) {}
    document.documentElement.lang = l;
    document.title = t(UI.title) + " Q&A | SANSEI";
    ["eyebrow", "title", "lead", "foot", "tel"].forEach(function (k) { $(k).textContent = t(UI[k]); });
    $("ver").textContent = t(UI.ver) + window.KK_VERSION;
    slideAlts();
    input.placeholder = t(UI.search);
    $("q-label").textContent = t(UI.search);
    document.querySelectorAll(".kkqa-lang__btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-kkqa-lang") === l));
    });
    paint();
  }
  /* はじめの写真。指で横に送れる。自動で切り替わり、触ったらその写真で止まる */
  var slides = [];
  function slideAlts() { slides.forEach(function (s) { s.img.alt = t(s.data.alt); }); }
  function slider() {
    var data = window.KK_SLIDES || [], root = $("slider");
    if (!data.length) return;
    var track = el("div", "kkqa-slider__track"), dots = el("div", "kkqa-slider__dots"), timer = null;
    var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function now() { return Math.round(track.scrollLeft / track.clientWidth); }
    function go(i) { track.scrollTo({left: i * track.clientWidth, behavior: still ? "auto" : "smooth"}); }
    function stop() { clearInterval(timer); }
    data.forEach(function (d, i) {
      var f = el("figure", "kkqa-slider__slide"), img = el("img", "kkqa-slider__img"), b = el("button", "kkqa-slider__dot");
      img.src = d.src; img.width = 768; img.height = 1024;
      if (i) img.loading = "lazy";
      if (d.pos) img.style.objectPosition = d.pos;
      f.appendChild(img); track.appendChild(f);
      b.type = "button";
      b.setAttribute("aria-label", String(i + 1));
      b.addEventListener("click", function () { stop(); go(i); });
      dots.appendChild(b);
      slides.push({data: d, img: img, dot: b});
    });
    function mark() {
      var n = now();
      slides.forEach(function (s, i) { s.dot.setAttribute("aria-current", String(i === n)); });
    }
    track.addEventListener("scroll", mark, {passive: true});
    track.addEventListener("pointerdown", stop, {passive: true});
    track.addEventListener("wheel", stop, {passive: true});
    root.appendChild(track); root.appendChild(dots);
    mark();
    if (!still) timer = setInterval(function () {
      if (!document.hidden) go((now() + 1) % data.length);
    }, 4000);
  }
  function fromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (id) openId(id);
  }

  document.querySelectorAll(".kkqa-lang__btn").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-kkqa-lang")); });
  });
  input.addEventListener("input", function () { if (!search()) render(); });
  window.addEventListener("hashchange", fromHash);
  slider();
  setLang(lang);
  fromHash();

  /* 外から足す時の口 */
  window.KKQA = {blocks: BLOCKS, render: render, setLang: setLang, open: openId};
})();
