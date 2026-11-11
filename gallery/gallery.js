/* 京都皇帝早生桐 写真ギャラリー ── 画面の動き。中身は gallery-data.js。
   言語は Q&A と同じ置き場（localStorage の kkqa-lang）を読む＝行き来しても同じ言語。 */
(function () {
  "use strict";
  var UI = window.KKG_UI, DATA = window.KKG, PLAN = window.KKG_PLAN, STEPS = window.KKG_STEPS;
  var lang = "ja";
  try { if (localStorage.getItem("kkqa-lang") === "en") lang = "en"; } catch (e) {}
  var list = document.getElementById("kkg-list"), jump = document.getElementById("kkg-jump-in");
  var state = {};   /* 段ごとの今の写真の番号 */
  var lbSec = null; /* 大きく見ている段 */

  function t(o) { return o ? (o[lang] != null ? o[lang] : o.ja) : ""; }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function src(f, s) { return "img/" + f + "-" + s + ".jpg"; }
  function flat(sec) { var a = []; sec.groups.forEach(function (g, gi) { g.items.forEach(function (it) { a.push({it: it, g: gi}); }); }); return a; }
  function num(n) { return lang === "ja" ? n.toLocaleString("ja-JP") : n.toLocaleString("en-US"); }

  function setPhoto(sec, i, instant) {
    var a = flat(sec), box = document.getElementById("kkg-" + sec.id);
    i = (i + a.length) % a.length; state[sec.id] = i;
    var it = a[i].it, img = box.querySelector(".kkg-fig__img"), cap = box.querySelector(".kkg-fig__cap"), cnt = box.querySelector(".kkg-fig__count");
    function swap() {
      img.onload = function () { img.classList.toggle("is-wide", img.naturalWidth > img.naturalHeight); img.classList.remove("is-fading"); };
      img.src = src(it.f, "m"); img.srcset = src(it.f, "m") + " 1x, " + src(it.f, "l") + " 2x";
      img.alt = t(it.cap); cap.textContent = t(it.cap); cnt.textContent = (i + 1) + " / " + a.length;
    }
    if (instant) swap(); else { img.classList.add("is-fading"); setTimeout(swap, 120); }
    var ths = box.querySelectorAll(".kkg-th");
    for (var k = 0; k < ths.length; k++) {
      var on = k === i; ths[k].setAttribute("aria-current", on ? "true" : "false");
      if (on) { var row = ths[k].parentNode; if (row.scrollWidth > row.clientWidth) row.scrollTo({left: ths[k].offsetLeft - row.offsetLeft - row.clientWidth / 2 + ths[k].clientWidth / 2, behavior: "smooth"}); }
    }
    if (lbSec === sec) showLb();
  }

  function swipe(target, fn) {
    var x0 = null, y0 = 0;
    target.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, {passive: true});
    target.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) fn(dx < 0 ? 1 : -1);
      x0 = null;
    });
  }

  function renderPlan(sec, wrap) {
    var p = el("div", "kkg-plan");
    p.appendChild(el("p", "kkg-plan__label", t(UI.plan)));
    var bar = el("div", "kkg-bar-n"); bar.setAttribute("aria-hidden", "true");
    PLAN.forEach(function (ph, k) { var s = el("span", "s" + (k + 1)); s.style.flex = String(ph.n); bar.appendChild(s); });
    p.appendChild(bar);
    var ol = el("ol", "kkg-phases");
    PLAN.forEach(function (ph) {
      var li = el("li", "kkg-phase" + (ph.done ? " is-done" : ""));
      li.appendChild(el("b", null, t(ph.name)));
      var n = el("span", "kkg-phase__n", num(ph.n)); n.appendChild(el("small", null, lang === "ja" ? "本" : " trees")); li.appendChild(n);
      li.appendChild(el("span", "kkg-phase__when", t(ph.when)));
      if (ph.sum) li.appendChild(el("span", "kkg-phase__sum", t(ph.sum)));
      ol.appendChild(li);
    });
    p.appendChild(ol);
    p.appendChild(el("p", "kkg-plan__label", t(UI.steps))).style.marginTop = "22px";
    var st = el("ol", "kkg-steps"), past = true;
    STEPS.forEach(function (s) {
      var li = el("li", "kkg-step " + (s.now ? "is-now" : past ? "is-past" : "is-future"));
      if (s.now) past = false;
      li.appendChild(el("span", "kkg-step__when", t(s.when)));
      li.appendChild(el("span", "kkg-step__what", t(s.what)));
      if (s.now) li.appendChild(el("span", "kkg-step__now", t(UI.now)));
      if (s.go != null) {
        var b = el("button", "kkg-step__go", lang === "ja" ? "写真" : "Photos"); b.type = "button";
        b.addEventListener("click", function () {
          var a = flat(sec), first = 0; for (var k = 0; k < a.length; k++) { if (a[k].g === s.go) { first = k; break; } }
          setPhoto(sec, first);
          document.getElementById("kkg-" + sec.id).querySelector(".kkg-stage").scrollIntoView({behavior: "smooth", block: "center"});
        });
        li.appendChild(b);
      }
      st.appendChild(li);
    });
    p.appendChild(st);
    wrap.appendChild(p);
  }

  function renderSec(sec) {
    var s = el("section", "kkg-sec kkg-sec--" + sec.id); s.id = sec.id;
    var w = el("div", "kkg-wrap"); w.id = "kkg-" + sec.id;
    var h = el("div", "kkg-head");
    h.appendChild(el("p", "kkg-kicker", t(sec.kicker)));
    h.appendChild(el("h2", "kkg-title", t(sec.title)));
    h.appendChild(el("p", "kkg-lead", t(sec.lead)));
    w.appendChild(h);

    var stg = el("div", "kkg-stage"), fig = el("figure", "kkg-fig");
    var img = el("img", "kkg-fig__img"); img.decoding = "async";
    fig.appendChild(img);
    fig.appendChild(el("figcaption", "kkg-fig__cap"));
    fig.appendChild(el("span", "kkg-fig__count"));
    [["prev", "‹", -1], ["next", "›", 1]].forEach(function (b) {
      var bt = el("button", "kkg-btn kkg-btn--" + b[0], b[1]); bt.type = "button"; bt.setAttribute("aria-label", t(UI[b[0]]));
      bt.addEventListener("click", function (e) { e.stopPropagation(); setPhoto(sec, state[sec.id] + b[2]); });
      fig.appendChild(bt);
    });
    var z = el("button", "kkg-btn kkg-btn--zoom", "⤢"); z.type = "button"; z.setAttribute("aria-label", t(UI.zoom));
    z.addEventListener("click", function (e) { e.stopPropagation(); openLb(sec); });
    fig.appendChild(z);
    fig.addEventListener("click", function () { openLb(sec); });
    swipe(fig, function (d) { setPhoto(sec, state[sec.id] + d); });
    stg.appendChild(fig); w.appendChild(stg);

    var tw = el("div", "kkg-thumbs-wrap"), idx = 0;
    sec.groups.forEach(function (g) {
      var gr = el("div", "kkg-group");
      var lab = el("p", "kkg-group__label", t(g.label)); lab.appendChild(el("small", null, t(UI.photos).replace("{n}", g.items.length)));
      gr.appendChild(lab);
      var row = el("div", "kkg-thumbs");
      g.items.forEach(function (it) {
        var my = idx++, b = el("button", "kkg-th"); b.type = "button"; b.setAttribute("aria-label", t(it.cap));
        var im = el("img"); im.src = src(it.f, "t"); im.alt = ""; im.loading = "lazy"; im.decoding = "async"; b.appendChild(im);
        b.addEventListener("click", function () { setPhoto(sec, my); });
        row.appendChild(b);
      });
      gr.appendChild(row); tw.appendChild(gr);
    });
    w.appendChild(tw);
    if (sec.plan) renderPlan(sec, w);
    s.appendChild(w);
    return s;
  }

  /* 大きく見る */
  var lb = document.getElementById("kkg-lb"), lbImg = lb.querySelector(".kkg-lb__img"), lbCap = lb.querySelector(".kkg-lb__cap"), lbCnt = lb.querySelector(".kkg-lb__count"), lastFocus = null;
  function showLb() { var a = flat(lbSec), i = state[lbSec.id], it = a[i].it; lbImg.src = src(it.f, "l"); lbImg.alt = t(it.cap); lbCap.textContent = t(it.cap); lbCnt.textContent = (i + 1) + " / " + a.length; }
  function openLb(sec) { lbSec = sec; showLb(); lastFocus = document.activeElement; lb.hidden = false; document.body.classList.add("kkg-lock"); lb.querySelector(".kkg-btn--close").focus(); }
  function closeLb() { lb.hidden = true; lbSec = null; document.body.classList.remove("kkg-lock"); if (lastFocus) lastFocus.focus(); }
  lb.querySelector(".kkg-btn--close").addEventListener("click", closeLb);
  lb.querySelector(".kkg-btn--prev").addEventListener("click", function (e) { e.stopPropagation(); setPhoto(lbSec, state[lbSec.id] - 1, true); });
  lb.querySelector(".kkg-btn--next").addEventListener("click", function (e) { e.stopPropagation(); setPhoto(lbSec, state[lbSec.id] + 1, true); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  swipe(lb, function (d) { setPhoto(lbSec, state[lbSec.id] + d, true); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") setPhoto(lbSec, state[lbSec.id] - 1, true);
    else if (e.key === "ArrowRight") setPhoto(lbSec, state[lbSec.id] + 1, true);
  });

  /* 見たい所へ（今見ている段に印） */
  var chips = [];
  function renderJump() {
    jump.innerHTML = ""; chips = [];
    DATA.forEach(function (sec) {
      var a = el("a", "kkg-chip", t(sec.chip || sec.title)); a.href = "#" + sec.id;
      a.appendChild(el("small", null, String(flat(sec).length)));
      jump.appendChild(a); chips.push(a);
    });
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        chips.forEach(function (c) { var on = c.getAttribute("href") === "#" + e.target.id; c.setAttribute("aria-current", on ? "true" : "false");
          if (on && c.parentNode.scrollWidth > c.parentNode.clientWidth) c.parentNode.scrollTo({left: c.offsetLeft - 16, behavior: "smooth"}); });
      });
    }, {rootMargin: "-45% 0px -50% 0px"});
  }

  function render() {
    document.documentElement.lang = lang;
    document.title = t(UI.eyebrow) + "｜" + t(UI.title) + "｜" + (lang === "ja" ? "株式会社SANSEI" : "SANSEI");
    document.getElementById("kkg-back").textContent = t(UI.back);
    document.getElementById("kkg-eyebrow").textContent = t(UI.eyebrow);
    document.getElementById("kkg-title").textContent = t(UI.title);
    document.getElementById("kkg-lead").textContent = t(UI.lead);
    document.getElementById("kkg-jump").setAttribute("aria-label", t(UI.jump));
    document.getElementById("kkg-tel").textContent = t(UI.tel);
    document.getElementById("kkg-foot").textContent = t(UI.foot);
    lb.querySelector(".kkg-btn--close").setAttribute("aria-label", t(UI.close));
    lb.querySelector(".kkg-btn--prev").setAttribute("aria-label", t(UI.prev));
    lb.querySelector(".kkg-btn--next").setAttribute("aria-label", t(UI.next));
    renderJump();
    list.innerHTML = "";
    DATA.forEach(function (sec) { list.appendChild(renderSec(sec)); setPhoto(sec, state[sec.id] || 0, true); if (io) io.observe(document.getElementById(sec.id)); });
    var bs = document.querySelectorAll("[data-kkg-lang]");
    for (var k = 0; k < bs.length; k++) bs[k].setAttribute("aria-pressed", String(bs[k].getAttribute("data-kkg-lang") === lang));
  }
  function setLang(l) { lang = l; try { localStorage.setItem("kkqa-lang", l); } catch (e) {} render(); }
  var lbs = document.querySelectorAll("[data-kkg-lang]");
  for (var k = 0; k < lbs.length; k++) (function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-kkg-lang")); }); })(lbs[k]);

  render();
  if (location.hash) { var target = document.getElementById(location.hash.slice(1)); if (target) setTimeout(function () { target.scrollIntoView(); }, 0); }
  window.KKGALLERY = {render: render, setLang: setLang, show: setPhoto};
})();
