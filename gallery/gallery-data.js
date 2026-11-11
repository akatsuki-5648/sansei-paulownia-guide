/* 京都皇帝早生桐 写真ギャラリー ── 中身はこの1本だけ直す。
   形：window.KKG = [ 段 ]
   段：{ id, chip?:{ja,en}（上の見出しボタンの短い名前）, kicker:{ja,en}, title:{ja,en}, lead:{ja,en}, plan?:true（植林の予定と歩みを出す）, groups:[ { label:{ja,en}, items:[ 写真 ] } ] }
   写真：{ f:"img の名前（-l/-m/-t を除く）", cap:{ja,en} }
   写真は img/<f>-l.jpg（大）／-m.jpg（中）／-t.jpg（小）の3つ。並べた順に出る。1枚目が最初に大きく出る。
   id は他と重ねない。URL の末尾に #id を付けると、その段へ飛ぶ。
   🚨 使わない写真（記録＝写真台帳）：種まきトレイの背景・粒の培地の瓶・Zoom の画面・育成灯の下の苗の棚（セルトレイ）・
      お寺の短冊（了解を確かめていない）・開発者の圃場。足す前に台帳を見る。 */
window.KKG_VERSION = "2026-11-11";
window.KKG_UI = {
  back:{ja:"Q&A に戻る", en:"Back to Q&A"},
  eyebrow:{ja:"写真ギャラリー", en:"Photo gallery"},
  title:{ja:"京都皇帝早生桐", en:"Kyoto Emperor Paulownia"},
  lead:{ja:"ガラス瓶の中の小さな芽から、山に植えた苗まで。写真を押すと大きく見られます。",
        en:"From a tiny shoot in a glass jar to seedlings planted on the mountain. Tap a photo to see it larger."},
  jump:{ja:"見たい所へ", en:"Jump to"},
  prev:{ja:"前の写真", en:"Previous photo"}, next:{ja:"次の写真", en:"Next photo"},
  zoom:{ja:"大きく見る", en:"View larger"}, close:{ja:"閉じる", en:"Close"},
  photos:{ja:"{n}枚", en:"{n} photos"},
  plan:{ja:"植林の予定", en:"Planting plan"},
  steps:{ja:"プロジェクトの歩み", en:"Project timeline"},
  now:{ja:"今ここ", en:"Now"},
  tel:{ja:"お電話でのご相談 075-748-9188", en:"Call us: +81-75-748-9188"},
  foot:{ja:"株式会社SANSEI", en:"SANSEI Co., Ltd."}
};
/* 植林の予定（本数の帯） */
window.KKG_PLAN = [
  {done:true, name:{ja:"第一期", en:"Phase 1"}, n:1000, when:{ja:"2026年11月6日 完了", en:"Completed 6 Nov 2026"}},
  {name:{ja:"第二期", en:"Phase 2"}, n:4000, when:{ja:"2027年3月 予定", en:"Planned Mar 2027"}, sum:{ja:"累計 5,000本", en:"5,000 in total"}},
  {name:{ja:"秋", en:"Autumn"}, n:2000, when:{ja:"2027年秋 予定", en:"Planned autumn 2027"}, sum:{ja:"累計 7,000本", en:"7,000 in total"}}
];
/* プロジェクトの歩み（go＝押すとその写真の組へ） */
window.KKG_STEPS = [
  {when:{ja:"2023年8月", en:"Aug 2023"}, what:{ja:"伐採開始（皆伐直後）", en:"Felling begins"}, go:2},
  {when:{ja:"2023年9月", en:"Sep 2023"}, what:{ja:"伐採が本格化", en:"Felling in full swing"}, go:2},
  {when:{ja:"2024年", en:"2024"}, what:{ja:"用地確定（奈良県御杖村／三重県嬉野）", en:"Sites secured (Mitsue, Nara / Ureshino, Mie)"}},
  {when:{ja:"2025年", en:"2025"}, what:{ja:"既存木の伐採完了", en:"Existing trees felled"}},
  {when:{ja:"2026年", en:"2026"}, what:{ja:"地拵え（植栽に向けた地面整備）", en:"Ground preparation for planting"}},
  {when:{ja:"2026年10月26日", en:"26 Oct 2026"}, what:{ja:"植林開始", en:"Planting begins"}, go:0},
  {now:true, when:{ja:"2026年11月6日", en:"6 Nov 2026"}, what:{ja:"第一期 1,000本 植林完了", en:"Phase 1: 1,000 trees planted"}, go:0},
  {when:{ja:"2027年3月", en:"Mar 2027"}, what:{ja:"第二期 4,000本 予定（累計 5,000本）", en:"Phase 2: 4,000 trees planned (5,000 in total)"}},
  {when:{ja:"2027年秋", en:"Autumn 2027"}, what:{ja:"2,000本 予定（累計 7,000本）", en:"2,000 trees planned (7,000 in total)"}},
  {when:{ja:"2031年", en:"2031"}, what:{ja:"初回収穫の予定", en:"First harvest planned"}}
];
window.KKG = [
{
  id:"project", plan:true, chip:{ja:"植林の進み具合", en:"Planting progress"},
  kicker:{ja:"奈良県 御杖村｜植林プロジェクト", en:"Mitsue, Nara | Planting project"},
  title:{ja:"第一期植林 1,000本 完了", en:"Phase 1: 1,000 trees planted"},
  lead:{ja:"伐採と地拵えを終えた斜面に、苗を一本ずつ植えました。苗はすべて、獣から守る網の防護筒の中で育っています。2026年10月26日に植林を始め、11月6日に第一期の1,000本を植え終えました。",
        en:"On slopes that had been felled and prepared, we planted the seedlings one by one. Every seedling grows inside a mesh guard that protects it from animals. Planting began on 26 October 2026, and the first 1,000 trees were in the ground on 6 November."},
  groups:[
    {label:{ja:"第一期植林　第一弾", en:"Phase 1 planting — set 1"}, items:[
      {f:"p1-01", cap:{ja:"防護筒の中で、苗が葉を広げています", en:"A seedling spreading its leaves inside the guard"}},
      {f:"p1-02", cap:{ja:"植え付けの作業", en:"Planting work"}},
      {f:"p1-03", cap:{ja:"集落から見た植栽地", en:"The planted slope seen from the village"}},
      {f:"p1-04", cap:{ja:"防護筒の中の苗", en:"A seedling inside the guard"}},
      {f:"p1-05", cap:{ja:"杉林の際の植栽列", en:"A planted row along the edge of the cedar forest"}},
      {f:"p1-06", cap:{ja:"切り株の斜面に並ぶ防護筒", en:"Guards lined up on a slope of stumps"}},
      {f:"p1-07", cap:{ja:"杉林を背にした防護筒", en:"Guards with the cedar forest behind"}},
      {f:"p1-08", cap:{ja:"斜面の全景", en:"The whole slope"}},
      {f:"p1-09", cap:{ja:"急な斜面の植栽列", en:"A planted row on a steep slope"}},
      {f:"p1-10", cap:{ja:"杉林沿いの植栽列", en:"A planted row along the cedar forest"}},
      {f:"p1-11", cap:{ja:"作業道沿いの植栽列", en:"A planted row along the work road"}},
      {f:"p1-12", cap:{ja:"作業道と植栽列", en:"The work road and planted rows"}},
      {f:"p1-13", cap:{ja:"斜面の上部", en:"The upper part of the slope"}},
      {f:"p1-14", cap:{ja:"道路を望む植栽地", en:"The planted slope looking toward the road"}},
      {f:"p1-15", cap:{ja:"切り株の残る斜面", en:"A slope with stumps remaining"}},
      {f:"p1-16", cap:{ja:"斜面の上の防護筒", en:"Guards on the slope above"}}
    ]},
    {label:{ja:"第一期植林　第二弾", en:"Phase 1 planting — set 2"}, items:[
      {f:"p1-b01", cap:{ja:"作業道と杉林の際の植栽地", en:"Planted ground by the work road and the cedar forest"}},
      {f:"p1-b02", cap:{ja:"切り株の並ぶ斜面", en:"A slope lined with stumps"}},
      {f:"p1-b03", cap:{ja:"防護筒と杉林", en:"Guards and the cedar forest"}},
      {f:"p1-b04", cap:{ja:"谷の道路を見下ろす植栽地", en:"Planted ground above the valley road"}},
      {f:"p1-b05", cap:{ja:"谷の集落と植栽地", en:"The valley village and the planted ground"}},
      {f:"p1-b06", cap:{ja:"杉林の中の急斜面", en:"A steep slope inside the cedar forest"}},
      {f:"p1-b07", cap:{ja:"杉林沿いの急斜面", en:"A steep slope along the cedar forest"}},
      {f:"p1-b08", cap:{ja:"防護筒の脇から見た斜面", en:"The slope seen from beside a guard"}}
    ]},
    {label:{ja:"伐採のころ（2023年）", en:"Felling (2023)"}, items:[
      {f:"cut-01", cap:{ja:"2023年8月　皆伐直後", en:"Aug 2023: just after clear-felling"}},
      {f:"cut-02", cap:{ja:"2023年9月上旬　皆伐初期", en:"Early Sep 2023: early felling"}},
      {f:"cut-03", cap:{ja:"2023年9月上旬　皆伐初期", en:"Early Sep 2023: early felling"}},
      {f:"cut-04", cap:{ja:"2023年9月上旬　皆伐初期", en:"Early Sep 2023: early felling"}},
      {f:"cut-05", cap:{ja:"2023年9月下旬　皆伐中", en:"Late Sep 2023: felling under way"}},
      {f:"cut-06", cap:{ja:"2023年9月下旬　皆伐中", en:"Late Sep 2023: felling under way"}},
      {f:"cut-07", cap:{ja:"2023年9月下旬　皆伐中", en:"Late Sep 2023: felling under way"}},
      {f:"cut-08", cap:{ja:"2023年9月下旬　皆伐中旬（空から）", en:"Late Sep 2023: from the air"}},
      {f:"cut-09", cap:{ja:"2023年9月下旬　皆伐中旬（空から）", en:"Late Sep 2023: from the air"}},
      {f:"cut-10", cap:{ja:"2023年9月下旬　皆伐中旬", en:"Late Sep 2023: felling under way"}},
      {f:"cut-11", cap:{ja:"2023年9月下旬　皆伐中旬（空から）", en:"Late Sep 2023: from the air"}},
      {f:"cut-12", cap:{ja:"2023年9月下旬　皆伐中旬（空から）", en:"Late Sep 2023: from the air"}}
    ]}
  ]
},
{
  id:"lab",
  kicker:{ja:"01　MERICLONE LAB", en:"01　MERICLONE LAB"},
  title:{ja:"メリクロンラボ", en:"Mericlone lab"},
  lead:{ja:"メリクロンラボでは、京都皇帝早生桐の芽を、ガラス瓶の中で育てています。光を当てる棚や装置の中で、瓶の中の芽が少しずつ伸びていきます。一本の木になる前の、いちばん小さな姿が、この瓶の中にあります。",
        en:"In our mericlone lab, we grow shoots of Kyoto Emperor Paulownia inside glass jars. On lit shelves and in growth units, the shoots slowly lengthen. The very smallest form of the tree, before it becomes a tree, is inside these jars."},
  groups:[{label:{ja:"ラボ", en:"Lab"}, items:[
    {f:"lab-01", cap:{ja:"ガラス瓶の中で芽を伸ばす京都皇帝早生桐の苗", en:"A Kyoto Emperor Paulownia shoot growing in a glass jar"}},
    {f:"lab-02", cap:{ja:"棚に並ぶ、苗の入ったガラス瓶", en:"Glass jars with shoots on a shelf"}},
    {f:"lab-03", cap:{ja:"光を当てて苗を育てる培養装置", en:"Growth units that grow the shoots under light"}},
    {f:"lab-04", cap:{ja:"育成ライトの棚に並ぶ培養瓶", en:"Culture jars on a lit shelf"}},
    {f:"lab-05", cap:{ja:"透明な囲いのある作業台が並ぶラボの室内", en:"Inside the lab: work benches with clear enclosures"}},
    {f:"lab-06", cap:{ja:"ラボの室内", en:"Inside the lab"}}
  ]}]
},
{
  id:"house",
  kicker:{ja:"02　IKUBYO HOUSE", en:"02　NURSERY HOUSE"},
  title:{ja:"育苗ハウス", en:"Nursery house"},
  lead:{ja:"瓶の中で育った苗は、そのままでは屋外の環境に耐えられません。ポットに移し、風と日ざしに少しずつ慣らしていく。そのための場所が育苗ハウスです。日が落ちてからも、ハウスには育成灯の光が残ります。",
        en:"Seedlings grown in jars cannot cope with the outdoors straight away. We move them into pots and let them get used to wind and sunlight little by little. The nursery house is the place for that. Even after dark, the grow lights stay on inside."},
  groups:[{label:{ja:"育苗ハウス", en:"Nursery house"}, items:[
    {f:"house-01", cap:{ja:"育苗ハウスの棚に並ぶ苗", en:"Seedlings on the shelves of the nursery house"}},
    {f:"house-02", cap:{ja:"棚に沿って並ぶ早生桐の苗", en:"Paulownia seedlings lined up along a shelf"}},
    {f:"house-03", cap:{ja:"育成灯の下で育つ早生桐の苗", en:"Paulownia seedlings growing under grow lights"}},
    {f:"house-04", cap:{ja:"葉を広げた早生桐の苗", en:"Paulownia seedlings with leaves spread"}},
    {f:"house-05", cap:{ja:"育苗ハウスのトレイに並ぶ早生桐の苗", en:"Paulownia seedlings in a nursery tray"}},
    {f:"house-06", cap:{ja:"夜の育苗ハウス。幕ごしに育成灯の光が透ける", en:"The nursery house at night, the grow lights glowing through the film"}},
    {f:"house-07", cap:{ja:"育苗ハウスの正面。扉と換気窓", en:"Front of the nursery house: door and vent"}},
    {f:"house-08", cap:{ja:"育苗ハウスの側面", en:"Side of the nursery house"}}
  ]}]
},
{
  id:"showroom",
  kicker:{ja:"03　SHOWROOM", en:"03　SHOWROOM"},
  title:{ja:"ショールーム", en:"Showroom"},
  lead:{ja:"ショールームでは、京都皇帝早生桐の苗を照明の棚で育てています。小さな苗も、葉を大きく広げた株も、ここで育っています。一本の苗が、やがて一本の木になる。その途中の姿が、この棚の上に並んでいます。",
        en:"In the showroom we grow Kyoto Emperor Paulownia seedlings on lit shelves. Small seedlings and plants with large leaves both grow here. One seedling will one day become one tree; the stages in between are lined up on these shelves."},
  groups:[{label:{ja:"ショールーム", en:"Showroom"}, items:[
    {f:"show-01", cap:{ja:"看板を掲げたショールームの入口", en:"The showroom entrance with its sign"}},
    {f:"show-02", cap:{ja:"LED照明の棚に並ぶポットの苗", en:"Potted seedlings on an LED-lit shelf"}},
    {f:"show-03", cap:{ja:"LED照明の下で葉を広げる苗", en:"Seedlings spreading their leaves under LED light"}},
    {f:"show-04", cap:{ja:"番号を書いたポットで育つ苗", en:"Seedlings growing in numbered pots"}},
    {f:"show-05", cap:{ja:"棚の上にまとめて並べたポットの苗", en:"Potted seedlings grouped on a shelf"}},
    {f:"show-06", cap:{ja:"鉢で大きく育った株", en:"A plant grown large in a pot"}},
    {f:"show-07", cap:{ja:"支柱を添えた鉢の株", en:"A potted plant with a support stake"}},
    {f:"show-08", cap:{ja:"支柱を立てた鉢と育成棚の照明", en:"Staked pots under the shelf lights"}}
  ]}]
},
{
  id:"products",
  kicker:{ja:"04　PRODUCTS", en:"04　PRODUCTS"},
  title:{ja:"製品", en:"Products"},
  lead:{ja:"育った京都皇帝早生桐は、板や道具に姿を変えます。一枚板、角材、額縁、そして株式会社SANSEIの表札。どれにも「京都皇帝早生桐」の焼き印が入っています。",
        en:"Grown Kyoto Emperor Paulownia becomes boards and goods: a single board, square timber, a picture frame and the SANSEI name plate. Each carries the \"京都皇帝早生桐\" brand mark."},
  groups:[{label:{ja:"製品", en:"Products"}, items:[
    {f:"prod-01", cap:{ja:"京都皇帝早生桐の一枚板", en:"A single board of Kyoto Emperor Paulownia"}},
    {f:"prod-02", cap:{ja:"京都皇帝早生桐の角材", en:"Square timber of Kyoto Emperor Paulownia"}},
    {f:"prod-03", cap:{ja:"京都皇帝早生桐で作った額縁", en:"A picture frame made of Kyoto Emperor Paulownia"}},
    {f:"prod-04", cap:{ja:"京都皇帝早生桐の木の見本", en:"A wood sample of Kyoto Emperor Paulownia"}},
    {f:"prod-05", cap:{ja:"京都皇帝早生桐で作った株式会社SANSEIの表札", en:"The SANSEI name plate made of Kyoto Emperor Paulownia"}}
  ]}]
},
{
  id:"grown",
  kicker:{ja:"05　大分県 豊後大野市", en:"05　Bungo-ono, Oita"},
  title:{ja:"育った木", en:"Grown trees"},
  lead:{ja:"大分県豊後大野市の試験圃場は、長く使われていなかった休耕田でした。土の対策をして2025年5月に植え、1年3か月後（2026年8月）の姿です。",
        en:"Our trial field in Bungo-ono, Oita, was a rice paddy that had long been left unused. We improved the soil and planted in May 2025; these photos show it 1 year and 3 months later (August 2026)."},
  groups:[
    {label:{ja:"試験圃場（2026年8月）", en:"Trial field (Aug 2026)"}, items:[
      {f:"oita-01", cap:{ja:"大分県豊後大野市の試験圃場。植えて1年3か月", en:"The trial field in Bungo-ono, Oita, 1 year 3 months after planting"}},
      {f:"oita-02", cap:{ja:"看板の数倍の高さに育った木が並ぶ", en:"Trees grown several times taller than the sign"}},
      {f:"oita-03", cap:{ja:"試験圃場の林の中。幹がまっすぐ並んでいる", en:"Inside the grove: straight trunks in rows"}},
      {f:"oita-04", cap:{ja:"植えて1年3か月の幹。大人の手が回りきらない", en:"A trunk 1 year 3 months after planting: an adult hand cannot reach around it"}}
    ]},
    {label:{ja:"桐の花", en:"Paulownia flowers"}, items:[
      {f:"flower-01", cap:{ja:"青空を背にした桐の花", en:"Paulownia flowers against the blue sky"}}
    ]}
  ]
}
];
