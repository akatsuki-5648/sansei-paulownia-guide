/* 京都皇帝早生桐 ショールームQ&A ── 中身はこの1本だけ直す。
   形：window.KK_QA = [ { id, icon, title:{ja,en}, items:[ 問い ] } ]
   問い：{ id, q:{ja,en}, a:{ja,en}, table?, blocks?:[ 部品 ], note?:{ja,en}, more?:[ 問い ] }
   more に入れると、開いた中にさらにトグルが増える（何段でも）。
   id は他と重ねない。URL の末尾に #id を付けると、その答えが開く。
   部品（blocks）：
     {type:"image", src:"img/x.jpg", alt:{ja,en}, caption:{ja,en}}
     {type:"video", youtube:"動画のID", title:{ja,en}}  または {type:"video", src:"img/x.mp4"}
     {type:"table", head:{ja:[…],en:[…]}, rows:[{ja:[…],en:[…]}]}
     {type:"link",  href:"https://…", label:{ja,en}}
     {type:"note",  text:{ja,en}} */
window.KK_VERSION = "2026-11-11";
/* 画面の決まり文句 */
window.KK_UI = {
  eyebrow:{ja:"ショールーム Q&A", en:"Showroom Q&A"},
  title:{ja:"京都皇帝早生桐", en:"Kyoto Emperor Paulownia"},
  lead:{ja:"知りたいことを押すと、答えが開きます。さらに詳しいことは、答えの下を開いてください。",
        en:"Tap a question to open the answer. Open the items below an answer for more detail."},
  search:{ja:"キーワードで探す（例：苗、CO₂）", en:"Search by keyword (e.g. seedlings, CO₂)"},
  found:{ja:"{n}件見つかりました", en:"{n} found"},
  none:{ja:"見つかりませんでした。無理にお答えせず、ご質問とご連絡先を控えて本社へお知らせください。", en:"No results. Please do not guess; note the question and contact details and pass them to the head office."},
  tel:{ja:"お電話でのご相談 075-748-9188", en:"Call us: +81-75-748-9188"},
  foot:{ja:"株式会社SANSEI｜数字は目安で、保証するものではありません。", en:"SANSEI Co., Ltd. | Figures are guides, not guarantees."},
  ver:{ja:"初期版 ", en:"First version "}
};
/* はじめの写真。並べた順に出る。pos は切り抜く時に見せる位置 */
window.KK_SLIDES = [
  {src:"img/showroom-1.jpg", pos:"50% 6%", alt:{ja:"ショールームの入口と「京都 皇帝桐」の看板", en:"Showroom entrance with the Kyoto Emperor Paulownia sign"}},
  {src:"img/showroom-2.jpg", alt:{ja:"灯りの下で育つ桐の苗", en:"Paulownia seedlings growing under lights"}},
  {src:"img/showroom-3.jpg", alt:{ja:"鉢に植えた桐の苗", en:"Potted paulownia seedlings"}},
  {src:"img/showroom-4.jpg", alt:{ja:"棚に並ぶ桐の苗", en:"Rows of paulownia seedlings on a shelf"}},
  {src:"img/showroom-5.jpg", alt:{ja:"桐の苗の葉", en:"Leaves of paulownia seedlings"}},
  {src:"img/showroom-6.jpg", alt:{ja:"大きさの違う鉢の桐の苗", en:"Paulownia seedlings in pots of different sizes"}},
  {src:"img/showroom-7.jpg", alt:{ja:"灯りの下の鉢植えの桐", en:"Potted paulownia under lights"}},
  {src:"img/showroom-8.jpg", alt:{ja:"棚で育つ桐の苗", en:"Paulownia seedlings growing on a shelf"}}
];
window.KK_QA = [
{
  id:"about", icon:"桐",
  title:{ja:"京都皇帝早生桐とは", en:"About the tree"},
  items:[
    {id:"what",
      q:{ja:"どんな木ですか？", en:"What kind of tree is this?"},
      a:{ja:"成長がとても早い桐です。当社が扱う品種を、クローン培養で増やしています。本格的に製品にできるのは植えて3年目ごろから、成木になるのは5〜6年が目安です。伐ったあとも切り株からまた育ちます。",
         en:"It is a very fast-growing paulownia. We propagate the variety we handle by clone culture. It can be used for products in earnest from about the third year, and becomes a mature tree in about five to six years. After harvest it grows back from the stump."},
      note:{ja:"品種の成り立ちやクローン培養の詳しい方法につきましては、弊社の機密事項にあたるため、お答えいたしかねる場合がございます。", en:"The origin of the variety and the details of our clone culture are confidential company information, so we may be unable to answer questions about them."},
      more:[
        {id:"what-name",
          q:{ja:"「早生桐（そうせいぎり）」とは？", en:"What does \"Soseigiri\" mean?"},
          a:{ja:"「早生」は早く育つこと、「桐」は日本で古くから使われてきた木です。早く育つ桐という意味です。",
             en:"\"Sosei\" means early growing, and \"kiri\" is paulownia, a tree long used in Japan. Together: fast-growing paulownia."}},
        {id:"what-read",
          q:{ja:"「早生桐」「早生樹」はどう読みますか？", en:"How do you read \"早生桐\" and \"早生樹\"?"},
          a:{ja:"「早生桐」の読み方は、決まった定めがありません。「そうせいぎり」「そうせいきり」「わせぎり」など、どの読みでも構いません。ただし当社の「京都皇帝早生桐」は「きょうとこうていそうせいぎり」の読みで商標登録しています。当社のサイト souseikiri.jp の綴りどおり、はじめは「そうせいきり」とも読んでいましたが、口に出すと言いにくいため、今は自然に「そうせいぎり」と呼んでいます。「早生樹」は「そうせいじゅ」と読みます。早く育つ木をまとめて呼ぶ言葉です。",
             en:"There is no fixed reading for \"早生桐\"; \"Soseigiri\", \"Soseikiri\" and \"Wasegiri\" are all fine. Our \"京都皇帝早生桐\" is registered as a trademark with the reading \"Kyoto Kotei Soseigiri\". We used to say \"Soseikiri\", as our website souseikiri.jp is spelled, but it is hard to say in Japanese, so we now naturally call it \"Soseigiri\". \"早生樹\" is read \"Soseiju\", a general word for fast-growing trees."}},
        {id:"what-history",
          q:{ja:"桐は日本とどんな関わりがありますか？", en:"How is paulownia connected to Japan?"},
          a:{ja:"桐箪笥や琴、下駄など、暮らしの中で長く使われてきました。昔は「娘が生まれたら桐を植え、嫁入りの時に伐って箪笥を作る」といわれたほど、早く育つ木として知られています。「五七の桐」は日本政府の紋章としても使われています。",
             en:"Paulownia has long been part of daily life in Japan, in chests of drawers, koto harps and geta sandals. People used to say, \"When a daughter is born, plant a paulownia, and make a chest from it when she marries.\" The \"go-shichi no kiri\" crest is also used as an emblem of the Government of Japan."}}
      ]},
    {id:"diff",
      q:{ja:"普通の桐と、何が違いますか？", en:"How is it different from ordinary paulownia?"},
      a:{ja:"いちばんの違いは、成木になるまでの早さです。普通の桐が成木になるまで15〜20年ほどとされるのに対し、京都皇帝早生桐は5〜6年が目安です（製品には3年目ごろから使えます）。木としての性質（軽い、湿気を吸ったり放したりする、虫が寄りにくい）は、桐の仲間のものです。",
         en:"The main difference is how fast it matures. Ordinary paulownia is said to take about 15 to 20 years to become a mature tree; Kyoto Emperor Paulownia is about five to six years (usable for products from about the third year). Its qualities as timber (light, takes in and releases moisture, resists insects) are those of paulownia in general."},
      note:{ja:"普通の桐の年数は一般的な目安です。当社の木で実測した最長の記録は3年です。成木の年数は、同じ系統の早生桐の記録を含む目安です（「5年でどのくらいになりますか？」の答えをご覧ください）。", en:"The ordinary-paulownia years are a general guide. The longest measured record for our own trees is three years; the years to maturity are a guide that includes records of fast-growing paulownia of the same lineage (see the answer to \"How big will it be at five years?\")."},
      more:[
        {id:"diff-early",
          q:{ja:"普通の桐にも、早生タイプがあるのですか？", en:"Does ordinary paulownia also have fast-growing types?"},
          a:{ja:"はい。桐の中にも、成長の早いタイプと遅いタイプがあります。成木までの目安は、早いタイプで約15年、標準〜遅いタイプで約20年です。京都皇帝早生桐は、それよりさらに早い、5〜6年を目安にしています（製品には3年目ごろから）。",
             en:"Yes. Paulownia has faster and slower types. The guide to maturity is about 15 years for the faster type and about 20 years for standard to slow types. Kyoto Emperor Paulownia aims at five to six years, faster still (usable for products from about the third year)."},
          note:{ja:"年数は目安で、土地や育て方で変わります。", en:"Years are a guide and vary with site and care."}},
        {id:"diff-strength",
          q:{ja:"強さや丈夫さは、普通の桐と違いますか？", en:"Is it different in strength from ordinary paulownia?"},
          a:{ja:"桐は蜂の巣のような細胞の構造を持ち、軽いわりに丈夫な木です。早く育つ品種でも、この構造は変わらないと報告されています。ただ、当社の木と普通の桐の強さを並べて測った数字は、この案内にはありません。",
             en:"Paulownia has a honeycomb-like cell structure that makes it strong for its weight. Reports say this structure stays the same in fast-growing varieties. However, this guide has no figures from measuring our trees and ordinary paulownia side by side."}},
        {id:"diff-origin",
          q:{ja:"この品種はどうやって生まれたのですか？ 開発した方は？", en:"How did this variety originate, and who developed it?"},
          a:{ja:"品種の成り立ち（開発の経緯や開発者）につきましては、弊社の機密事項にあたるため、お答えいたしかねる場合がございます。あらかじめご了承ください。",
             en:"The origin of the variety (how and by whom it was developed) is confidential company information, so we may be unable to answer questions about it. Thank you for your understanding."},
          note:{ja:"スタッフの方へ：経緯を聞かれても、推測でお答えしないでください。上の言い方でお伝えください。本社へ回す必要はありません。商標登録は済み、種苗登録は申請中です（2026年8月時点・現在の状況は本社で確認）。", en:"For staff: if asked, please do not guess about the origin. Answer as above; there is no need to pass the question to the head office. The trademark is registered and the plant variety registration is pending (as of August 2026; check the current status with the head office)."}},
        {id:"diff-mother",
          q:{ja:"親木（マザー）はひとつの個体だけですか？ 親木の成長記録はありますか？", en:"Is there only one mother tree? Are there growth records of the mother tree?"},
          a:{ja:"親木（マザー）の個体数やクローンの作り方、親木の記録などにつきましては、弊社の機密事項にあたるため、お答えいたしかねる場合がございます。あらかじめご了承ください。",
             en:"The number of mother trees, how the clones are made, records of the mother tree and similar matters are confidential company information, so we may be unable to answer questions about them. Thank you for your understanding."},
          note:{ja:"スタッフの方へ：親木があるか・いくつあるかを含め、推測でお答えしないでください。上の言い方でお伝えください。本社へ回す必要はありません。", en:"For staff: please do not guess, including whether a mother tree exists or how many. Answer as above; there is no need to pass the question to the head office."}}
      ]},
    {id:"why",
      q:{ja:"なぜ今、桐なのですか？", en:"Why paulownia now?"},
      a:{ja:"スギは30〜40年、ヒノキは40〜50年かかります。早生桐は3年目ごろから製品に使え、5〜6年で成木になるので、植えた人の代で結果を見られます。伐ったあとも植え直さずに育つので、同じ土地で何度も収穫できます。",
         en:"Japanese cedar takes 30 to 40 years and cypress 40 to 50. Fast-growing paulownia is usable for products from about the third year and matures in five to six years, so the person who plants it can see the result. It grows back without replanting, so the same land can be harvested again and again."},
      note:{ja:"スギ・ヒノキの年数：地方自治体の林業資料による、標準的な伐採の時期。", en:"Cedar and cypress years: standard harvest age in local government forestry materials."},
      more:[
        {id:"demand",
          q:{ja:"桐は今も求められていますか？", en:"Is there still demand for paulownia?"},
          a:{ja:"はい。国産の桐は、いちばん多かった時の約2%まで減りましたが、桐を使いたい人が減ったわけではありません。足りない分は、海外で育った桐で補われています。短い年数で育つ桐を、もう一度国内で育てる意味はここにあります。",
             en:"Yes. Japan's paulownia output has fallen to about 2% of its peak, but people still want it. The shortfall is filled by paulownia grown overseas. That is why growing a fast paulownia in Japan again makes sense."},
          note:{ja:"日本特用林産振興会・日本木材総合情報センターの公表資料より。", en:"From published materials of Japanese forest product associations."}}
      ]}
  ]
},
{
  id:"growth", icon:"育",
  title:{ja:"育ち方", en:"Growth"},
  items:[
    {id:"speed",
      q:{ja:"どのくらいの早さで育ちますか？", en:"How fast does it grow?"},
      a:{ja:"徳島県吉野川市の圃場では、植えて3年で高さ8m、幹回り72cm（直径約23cm）を実測しました。",
         en:"In a field in Yoshinogawa, Tokushima, we measured 8 m in height and a 72 cm trunk girth (about 23 cm in diameter) three years after planting."},
      more:[
        {id:"speed-5",
          q:{ja:"5年でどのくらいになりますか？", en:"How big will it be at five years?"},
          a:{ja:"同じ系統の早生桐では、植えて6〜7年で高さ15mに育ったことが測られています。当社の木の記録は3年が最長で、5年の大きさはまだ測っていません。徳島の圃場の3年間のペースが続いた場合の計算では、5年で幹回り約120cm（直径約38cm）です。こちらは実測ではなく計算です。",
             en:"In fast-growing paulownia of the same lineage, trees were measured reaching 15 m in height six to seven years after planting. Our own longest record is three years, and we have not yet measured a five-year tree. If the three-year pace of the Tokushima field continues, the girth at five years would be about 120 cm (about 38 cm in diameter). This is a calculation, not a measurement."},
          note:{ja:"同じ系統の記録は、他社の植林地（福島県）で行われた研究によるものです。当社の木の記録は、いちばん古いもので3年です。当社の幹回りは、測った高さを記録していません（今後は地上1.3mで測ります）。", en:"The same-lineage record comes from a study on another company's plantations (Fukushima). Our oldest record for our own trees is three years. For our girth figures, the measuring height was not recorded (we will measure at 1.3 m above ground from now on)."},
          blocks:[
            {type:"note", text:{ja:"【スタッフ専用の参考資料】お客様には案内しないでください。", en:"[Staff-only references] Do not show these to customers."}},
            {type:"link", label:{ja:"【スタッフ専用】学会の要旨（成蹊大学・2021年）：福島県3か所・年2回・各20本を測定し伐って計量、6・7年で高さ15m", en:"[Staff only] Conference abstract (Seikei Univ., 2021): 3 sites in Fukushima, measured twice a year, 20 trees each, felled and weighed; 15 m at 6–7 years"}, href:"https://pub.confit.atlas.jp/ja/event/mmij2021a/presentation/3K0408-14-02"},
            {type:"link", label:{ja:"【スタッフ専用】ナリコー早生桐（公式）：5〜6年で15〜17mは会社の説明／実測は2年3ヶ月で平均5.9m／萌芽は1年目で6m超えることがある", en:"[Staff only] Narikoh (official): 15–17 m in 5–6 years is the company's claim; measured 5.9 m average at 2 yrs 3 mos; coppice shoots may exceed 6 m in year 1"}, href:"https://www.narikoh.co.jp/souseigiri"}
          ]},
        {id:"size-max",
          q:{ja:"最大で、どのくらいの高さ・太さになりますか？", en:"How tall and thick can it get at most?"},
          a:{ja:"当社の木で実測した中でいちばん大きいのは、徳島県吉野川市の3年生で、高さ8m・幹回り72cm（直径約23cm）です。それより長く育てた当社の木の記録は、まだありません。同じ系統の早生桐では、6〜7年で高さ15mに育った記録があります。海外の長期の研究では、ネパールで12年で幹の直径30cm、20年で平均37cm（太いもので55cm）と報告されています。",
             en:"The largest measured on our own trees is a three-year-old in Yoshinogawa, Tokushima: 8 m tall with a 72 cm girth (about 23 cm in diameter). We have no records of our trees grown longer. In fast-growing paulownia of the same lineage, there is a record of 15 m in height at six to seven years. In a long-term overseas study in Nepal, trunk diameter was reported as 30 cm at 12 years and 37 cm on average at 20 years (up to 55 cm)."},
          note:{ja:"海外の数字は、別の系統・別の土地のものです。「最大でこの大きさになる」とお約束できる数字はありません。", en:"Overseas figures are from other lines and other land. We cannot promise any maximum size."}},
        {id:"size-fell",
          q:{ja:"伐る時の大きさは、高さ15mが基準ですか？", en:"Is a height of 15 m the standard size for felling?"},
          a:{ja:"「15mで伐る」という決まりは、当社の記録にはありません。伐る時期は、使い道に必要な太さや長さと、収穫を回す周期で決める目安です。ご案内の流れでは、成木になる5〜6年目ごろに最初の伐採をし、その後は5〜8年ごとに伐ります。参考に、桐の原木市場の取引例（令和5年7月）に、長さ3.80m・末口（細い方の端の直径）62cm・材積1.461㎥の原木があります。",
             en:"There is no \"fell at 15 m\" rule in our records. The time to fell is a guide set by the thickness and length needed for the use and by the harvest cycle. In our standard flow, the first harvest is around year five or six, when the tree matures, then every five to eight years. For reference, a paulownia log market example (July 2023) includes a log 3.80 m long, 62 cm in diameter at the small end, 1.461 m³ in volume."},
          note:{ja:"原木市場の例は桐全般のもので、当社の木の取引ではありません。", en:"The market example is for paulownia in general, not a sale of our trees."}},
        {id:"speed-other",
          q:{ja:"ほかの場所の記録はありますか？", en:"Are there records from other places?"},
          a:{ja:"大分県豊後大野市：2025年5月に植え、3か月半で全ての木が1.7m超、1年で高さ5〜6m。\n京都府：植えて2年で高さ7m、幹回り46cm（直径約15cm）。\n北海道札幌市：当社の苗をご購入いただいた方に伺ったところ、2025年夏に植え、2026年6月時点で高さ2mとのことです。\n滋賀県（失敗例）：植えて2年で高さ4m。",
             en:"Bungo-Ono, Oita: planted May 2025; all trees over 1.7 m in three and a half months, and 5 to 6 m in one year.\nKyoto Prefecture: 7 m tall with a 46 cm girth (about 15 cm in diameter) two years after planting.\nSapporo, Hokkaido: according to a customer who bought our seedlings, planted summer 2025 and 2 m tall as of June 2026.\nShiga Prefecture (a failed case): 4 m tall two years after planting."},
          note:{ja:"育ち方は、土づくりと気候で変わります。スタッフの方へ：うまく育った例・失敗例は、写真付きで後日載せます。滋賀の例の写真：（空欄）／失敗の原因：（空欄）。聞かれたら「正確な情報が降りてきておりませんので、後日確認してお知らせ致します」とお伝えください。", en:"Growth varies with soil preparation and climate. For staff: successful and failed cases will be added later with photos. Shiga case photo: (blank) / cause of failure: (blank). If asked, say: \"We have not yet received accurate information, so we will confirm and let you know at a later date.\""}}
      ]},
    {id:"regrow",
      q:{ja:"伐ったあとはどうなりますか？", en:"What happens after harvesting?"},
      a:{ja:"植え直さず、切り株から新しい芽が伸びて再び育ちます。これを「萌芽更新（ほうがこうしん）」といいます。5〜8年ごとに伐りながら、同じ根で育て続けます。",
         en:"There is no need to replant. New shoots rise from the stump and grow again. This is called coppicing. The same roots keep growing, with a harvest every five to eight years."},
      note:{ja:"当社の木で伐採を重ねた実績は、これから積み上げていく段階です。", en:"We are still building our own record of repeated harvests."},
      more:[
        {id:"regrow-why",
          q:{ja:"なぜ、年数が来たら伐るのですか？ 長く育てた方が良くないのですか？", en:"Why fell after a set number of years? Wouldn't longer growth be better?"},
          a:{ja:"桐は伐ったあとも切り株から育つので、植え直さずに何度も収穫できます。そのため、大きくなるまで待つより、決めた周期（5〜8年ごと）で伐って回す考え方をとります。長く育てるほど得になるとは限りません。海外（ネパール）の研究では、幹の直径が12年で30cmになり、それ以上育てても採算は上がらないと報告されています。スギ・ヒノキにも、地域ごとに「標準伐期齢」という標準的な伐採の年齢が決められています。",
             en:"Paulownia regrows from the stump, so it can be harvested many times without replanting. So rather than waiting until it is very large, we think in terms of a fixed cycle (every five to eight years). Longer is not always better: in an overseas study in Nepal, trunk diameter reached 30 cm at 12 years and growing longer did not improve profitability. Cedar and cypress also have a \"standard felling age\" set by region."},
          note:{ja:"長く育てると木に良くない、という記録は確認できていません。伐る時期は、使い道に必要な太さと、収穫を回す周期で決める目安です。", en:"We have not confirmed any record that longer growth harms the tree. The felling time is a guide based on the size needed and the harvest cycle."}},
        {id:"regrow-vigor",
          q:{ja:"一般的な桐の萌芽更新と比べて、何か良いところはありますか？", en:"Does its regrowth from the stump have any advantage over ordinary paulownia?"},
          a:{ja:"桐は切り株から新しい芽が出る力がとても強い木で、京都皇帝早生桐もこの力を活かして育てます。伐採後は植え直さず、すでに張っている根から栄養を受け取って育つため、苗から植え直すよりも早い段階から成長が始まります。同じ系統の早生桐では、萌芽した芽が1年目で6mを超えることがあると報告されています。根が最初から張っているので、成長も早まる見込みで、早生桐としての回転率も上がると想定しています。植え直しの手間と苗代のコストはかからなくなり、2回目以降の手間とコストはぐんと減ります（芽かきなどの手入れは要ります）。",
             en:"Paulownia has a very strong ability to sprout from the stump, and Kyoto Emperor Paulownia makes use of it. After harvesting there is no replanting: new shoots draw nutrients from roots that are already established, so growth starts earlier than when replanting seedlings. In fast-growing paulownia of the same lineage, shoots from the stump are reported to sometimes exceed 6 m in the first year. Because the roots are already in place, we expect growth to be faster, and we anticipate a higher turnover as a fast-growing paulownia. The labour of replanting and the cost of seedlings disappear, and labour and cost from the second cycle drop sharply (care such as thinning shoots is still needed)."},
          note:{ja:"「成長も早まる」「回転率が上がる」は当社の見込みと想定で、実測した数字はまだありません。一般の桐との比較は、実測を進めながら確認していきます。材の品質は、そのままだと品質は若干落ちるという報告がございますが、手入れ次第でほぼ同等の品質を保つこともできます。", en:"\"Faster growth\" and \"higher turnover\" are our expectation and assumption; we have no measured figures yet. Comparison with ordinary paulownia will be confirmed as we measure. On wood quality: Left as it is, quality is reported to drop slightly, but with proper care it can be kept almost the same."},
          blocks:[
            {type:"note", text:{ja:"【スタッフ専用の参考資料】お客様には案内しないでください。", en:"[Staff-only references] Do not show these to customers."}},
            {type:"link", label:{ja:"【スタッフ専用】ナリコー早生桐（公式）：5〜6年で15〜17mは会社の説明／実測は2年3ヶ月で平均5.9m／萌芽は1年目で6m超えることがある", en:"[Staff only] Narikoh (official): 15–17 m in 5–6 years is the company's claim; measured 5.9 m average at 2 yrs 3 mos; coppice shoots may exceed 6 m in year 1"}, href:"https://www.narikoh.co.jp/souseigiri"}
          ]},
        {id:"regrow-times",
          q:{ja:"何回くらい収穫できますか？", en:"How many times can it be harvested?"},
          a:{ja:"同じ根で何回伐れるかは、育てる環境や手入れによりますが、外部の資料の数字の平均では、5〜6回ほどとなっております。根の寿命を70〜100年とする資料もあります。ただ、どの資料にも出典や実際に測った記録が示されていないため、目安としてお考えください。",
             en:"How many times the same roots can be harvested depends on the growing environment and care, but the average of figures in outside materials is about five to six times. Some materials put root life at 70 to 100 years. However, none of them show a source or measured records, so please treat this as a guide."},
          note:{ja:"スタッフの方へ：回数は、外部の資料の数字の平均（約5.5回）です。", en:"For staff: the number is the average of figures in outside materials (about 5.5)."},
          blocks:[
            {type:"note", text:{ja:"【スタッフ専用の参考資料】お客様には案内しないでください。", en:"[Staff-only references] Do not show these to customers."}},
            {type:"link", label:{ja:"【スタッフ専用】paulownia.pro（スペインの苗木業者）：根の寿命70〜100年・4〜8/9回・出典なし", en:"[Staff only] paulownia.pro (Spanish grower): root life 70–100 yrs, 4–8/9 cycles, no source"}, href:"https://paulownia.pro/en/paulownia/"},
            {type:"link", label:{ja:"【スタッフ専用】GREEMAP（スペインの業者）：根の寿命70〜100年・4〜8/9回、萌芽は最大6回・出典なし", en:"[Staff only] GREEMAP (Spanish company): root life 70–100 yrs, 4–8/9 cycles, up to 6 sprouts, no source"}, href:"https://greemap.es/en/paulownia-2/paulownia-characteristics-of-wood/"},
            {type:"link", label:{ja:"【スタッフ専用】Dealin.Green（欧州の炭素プログラム計画書・2025年12月）：30年以上で4〜5回／40年で4回（計画の想定）", en:"[Staff only] Dealin.Green (EU carbon program document, Dec 2025): 4–5 times over 30+ years; 4 times in 40 years (planning assumption)"}, href:"https://proba.earth/hubfs/26908810/Master%20POD%20Dealin.Green%20-%20Paulownia%20in%20Continental%20Europe.pdf?hsLang=en"},
            {type:"link", label:{ja:"【スタッフ専用】SUMIDA（ジャパロニア）：再発芽4〜5回／FAQでは4〜6回", en:"[Staff only] SUMIDA (Japalonia): regrowth 4–5 times; 4–6 times in FAQ"}, href:"https://sumida-eco.jp/soseikiri/"},
            {type:"link", label:{ja:"【スタッフ専用】エンザミンパワー横浜：再発芽5〜6回", en:"[Staff only] Enzamin Power Yokohama: regrowth 5–6 times"}, href:"https://enzamin-power.yokohama/?page_id=25347"},
            {type:"link", label:{ja:"【スタッフ専用】BioEconomy Solutions（米国の業者）：4〜8回", en:"[Staff only] BioEconomy Solutions (US company): 4–8 times"}, href:"https://bioeconomysolutions.com/the-phoenix-tree-paulownias-remarkable-regrowth-after-harvest/"}
          ]},
        {id:"regrow-care",
          q:{ja:"2回目からの手入れは？", en:"What care is needed after the first harvest?"},
          a:{ja:"切り株からは芽がいくつも出ます。そのままだと細い幹が何本もでき、曲がって伸びて製品になりません。1本に絞る手入れ（芽かき）が要ります。そのままだと品質は若干落ちるという報告がございますが、手入れ次第でほぼ同等の品質を保つこともできます。",
             en:"Several shoots rise from the stump. Left alone, they become many thin, crooked trunks that cannot be used as products. They need to be thinned to one (shoot pruning). Left as it is, quality is reported to drop slightly, but with proper care it can be kept almost the same."},
          blocks:[
            {type:"note", text:{ja:"【スタッフ専用の参考資料】お客様には案内しないでください。", en:"[Staff-only references] Do not show these to customers."}},
            {type:"link", label:{ja:"【スタッフ専用】書籍『桐（地域資源を活かす生活工芸双書）』（農文協・2024）69ページ「台切り法」：植えた翌春に地際で伐り、萌芽を1本だけ残すと、その年に4〜5m伸び、まっすぐな幹が取れる（普通の桐の栽培法）", en:"[Staff only] Book \"Kiri\" (Rural Culture Association Japan, 2024), p.69 cut-back method: cutting at ground level the spring after planting and keeping one sprout gives 4–5 m of growth that year and a straight trunk (standard paulownia practice)"}, href:"https://www.amazon.co.jp/dp/B0DB4Y83YX"},
            {type:"link", label:{ja:"【スタッフ専用】北イタリアの研究（Forests 2022）：台切りして芽を1本に絞り、5mまで枝打ちした木は、直径以外すべて最高等級（Po-A）", en:"[Staff only] Northern Italy study (Forests 2022): trees cut back, thinned to one shoot and pruned to 5 m graded best class (Po-A) except diameter"}, href:"https://www.mdpi.com/1999-4907/13/11/1841"}
          ]}
      ]},
    {id:"where",
      q:{ja:"どんな場所に植えられますか？", en:"Where can it be planted?"},
      a:{ja:"いちばん大事なのは水はけです。水が溜まる土地では根が腐ってしまいます。あとは日当たりの良さです。日本なら、水やりをしなくても自然の雨で育つとされています。大分の試験圃場は、もとは15年以上使われていなかった休耕田で、土の対策をして植えました。植える場所のご相談は、ホームページのお問い合わせからお願いします。",
         en:"Drainage matters most: roots rot where water collects. Good sunlight comes next. In Japan it is said to grow on natural rainfall without watering. Our trial field in Oita was a rice paddy left unused for over 15 years; we improved the soil before planting. For advice on a planting site, please use the inquiry form on our website."},
      more:[
        {id:"where-land",
          q:{ja:"使っていない田畑にも植えられますか？", en:"Can it be planted on unused farmland?"},
          a:{ja:"水はけなどの条件が合えば、育てられる可能性があります。ただ、手入れの仕方によっては法律上「農地」のままの扱いになり、「森林」にはなりません。また草や雑木の処理で、はじめの費用はかえって高くなることがあります。植える前に、土地の区分と手続きを確認します。",
             en:"If conditions such as drainage are right, it may be possible. However, depending on how the land is managed, it can legally stay farmland rather than become forest. Clearing weeds and brush can also raise the initial cost. We check the land category and procedures before planting."}},
        {id:"where-density",
          q:{ja:"どのくらいの間隔で植えますか？", en:"How far apart are they planted?"},
          a:{ja:"約3mの間隔で植えます。",
             en:"About 3 m apart."}},
        {id:"where-care",
          q:{ja:"植えたら放っておいても育ちますか？", en:"Will it grow if left alone?"},
          a:{ja:"いいえ。放っておくと枝が分かれて、幹がまっすぐ伸びません。木材として価値が出るのはまっすぐな幹なので、育ち始めの時期から枝を切ったり、余分な芽を取ったりする手入れがいります。早く育つ分、手入れも早めに必要な木です。",
             en:"No. Left alone it branches out and the trunk does not grow straight. Timber value lies in a straight trunk, so pruning and removing extra shoots are needed from early on. Because it grows fast, it also needs care early."}},
        {id:"where-cold",
          q:{ja:"寒い土地でも育ちますか？", en:"Will it grow in cold regions?"},
          a:{ja:"早生桐には系統があり、合う気候が違います。寒さに強い系統の報告は主に海外のものです。当社の苗をご購入いただいた方に伺ったところ、札幌市でも育っています。土地ごとに確認します。",
             en:"There are different lines of fast-growing paulownia suited to different climates. Reports of cold-hardy lines come mainly from overseas. According to a customer who bought our seedlings, it is also growing in Sapporo. We check each site individually."}},
        {id:"where-sick",
          q:{ja:"病気の心配はありますか？", en:"Are there disease concerns?"},
          a:{ja:"桐には「てんぐ巣病」という病気が知られています。日本の湿気の多い気候でどこまで強いかは、地域ごとに確かめていく必要があります。",
             en:"Paulownia is known to get witches' broom disease. How well it resists in Japan's humid climate needs to be confirmed region by region."}},
        {id:"where-spread",
          q:{ja:"周りに広がってしまいませんか？", en:"Could it spread into the surroundings?"},
          a:{ja:"桐の仲間を外来種として注意している国や地域があります。海外では種を作らない品種も開発されています。国や地域によって決まりが違います。海外でのご検討は、本社の別の部署の管轄です。",
             en:"Some countries and regions treat paulownia species as invasive. Non-seeding varieties have been developed overseas. Rules differ by country and region, and overseas plans fall under a different department at our head office."}}
      ]}
  ]
},
{
  id:"wood", icon:"材",
  title:{ja:"木材と使いみち", en:"Timber and uses"},
  items:[
    {id:"wood-feature",
      q:{ja:"木材の特徴は？", en:"What is the timber like?"},
      a:{ja:"日本の木の中で最も軽い部類です。湿度が変わっても形がほとんど変わらず、周りの湿気を吸ったり放したりします。桐箪笥が着物を守ってきたのは、この性質があるからです。",
         en:"It is among the lightest woods in Japan. It hardly changes shape as humidity changes, and it takes in and releases moisture. This is why paulownia chests have protected kimono."},
      more:[
        {id:"wood-strong",
          q:{ja:"軽いと弱くないですか？", en:"Doesn't light mean weak?"},
          a:{ja:"桐は蜂の巣のような細胞の構造を持っていて、同じ重さで比べると強い木です。ただ、同じ大きさで比べれば金属の方がずっと強いので、使う場所を選びます。",
             en:"Paulownia has a honeycomb-like cell structure, so it is strong for its weight. Size for size, metal is far stronger, so the right use matters."}},
        {id:"wood-fire",
          q:{ja:"燃えにくいのですか？", en:"Is it fire resistant?"},
          a:{ja:"火がつきにくいわけではありません。熱が中に伝わりにくいのが特徴です。表面が焦げて炭になると、中まで燃え進みにくくなります。昔の金庫の内箱に桐が使われていたのも、このためです。",
             en:"It does not resist catching fire. Its strength is that heat travels slowly inside it. Once the surface chars, fire struggles to go deeper. This is why paulownia was once used for the inner boxes of safes."}},
        {id:"wood-bug",
          q:{ja:"虫には強いですか？", en:"Does it resist insects?"},
          a:{ja:"タンニンやパウロニンという天然の成分が含まれていて、薬を使わなくても虫が寄りにくいとされています。",
             en:"It contains natural substances, tannin and paulownin, and is said to keep insects away without chemicals."}},
        {id:"wood-water",
          q:{ja:"向いていない使い方はありますか？", en:"What is it not suited to?"},
          a:{ja:"雨に直接当たる屋外、地面に触れる部分、水回りの構造材には向きません。ずっと濡れていると腐りやすい木です。やわらかいので、傷もつきやすいです。乾いた室内で使うのが向いています。",
             en:"It is not suited to outdoor use in direct rain, parts touching the ground, or structural parts in wet areas. It rots if kept wet, and it is soft, so it scratches easily. It suits dry indoor use."}}
      ]},
    {id:"wood-use",
      q:{ja:"何に使えますか？", en:"What can it be used for?"},
      a:{ja:"家具・箪笥、桐箱、琴やギターなどの楽器、下駄、床や天井などの内装、合板などです。当社の桐では、角材、一枚板、額縁のほか、お寺の七夕に寄付した短冊300枚をつくりました。",
         en:"Furniture and chests, paulownia boxes, instruments such as koto and guitars, geta sandals, interior floors and ceilings, and plywood. From our own paulownia we have made square timber, single-plank boards and picture frames, and 300 tanzaku strips donated to a temple for Tanabata."},
      more:[
        {id:"wood-other",
          q:{ja:"幹のほかにも使えますか？", en:"Can other parts be used?"},
          a:{ja:"はい。桐は捨てるところがない木といわれます。枝や端材は燃料のペレットに、樹皮やのこ屑は土に混ぜる炭（バイオ炭）にできます。葉は家畜のえさとしての利用が検討されています。世の中では、花は香水の原料、葉は女性用育毛剤の原料に使われている例もあります。",
             en:"Yes. Paulownia is said to waste nothing. Branches and offcuts can become fuel pellets, and bark and sawdust can become biochar for soil. The leaves are being studied as animal feed. Elsewhere, flowers are used as a perfume ingredient and leaves as an ingredient in women's hair-growth products."},
          note:{ja:"使われている例のご紹介です。効能・効果をうたうものではありません。えさとして使う場合は、安全性の確認が別に必要です。", en:"These are examples of use, not claims of any effect. Use as feed needs separate safety checks."}}
      ]},
    {id:"wood-sell",
      q:{ja:"育てた木は売れますか？", en:"Can the grown trees be sold?"},
      a:{ja:"桐は原木市場でも「キリ」として取引されています。成木のまま、または加工して製品として売ることができ、売り先の紹介や加工先の案内も、場合によって行わせて頂く場合もございます。桐は一般の木材価格の統計に載らない木なので、値段はその都度の確認になります。",
         en:"Paulownia is traded on log markets as \"kiri\". Trees can be sold as logs or processed into products. In some cases, we may also introduce buyers or processors. Paulownia is not listed in general timber price statistics, so prices are checked case by case."},
      note:{ja:"販売価格や収益をお約束するものではありません。", en:"We do not promise any sale price or income."}}
  ]
},
{
  id:"compare", icon:"比",
  title:{ja:"スギ・ヒノキとの比較", en:"Compared with cedar and cypress"},
  items:[
    {id:"cmp-table",
      q:{ja:"比べるとどう違いますか？", en:"How do they compare?"},
      a:{ja:"いちばんの違いは、成木になるまでの年数と、伐ったあとに植え直しがいらないことです。",
         en:"The main differences are the years to maturity and that no replanting is needed after harvest."},
      table:{
        head:{ja:["","早生桐","スギ","ヒノキ"], en:["","Fast-growing paulownia","Cedar","Cypress"]},
        rows:[
          {ja:["成木まで","5〜6年（製品は3年目ごろから）","30〜40年","40〜50年"], en:["Years to maturity","5–6 (products from about year 3)","30–40","40–50"]},
          {ja:["伐ったあと","切り株からまた育つ","植え直し","植え直し"], en:["After harvest","Regrows from stump","Replant","Replant"]},
          {ja:["木の軽さ（水を1とした重さ）","0.29（桐）","0.38","0.44"], en:["Weight (water = 1)","0.29 (paulownia)","0.38","0.44"]}
        ]},
      note:{ja:"年数：地方自治体の林業資料による標準的な伐採の時期。重さ：乾いた状態の値（気乾比重）。日本木材総合情報センターの公表値（桐全般の値）。", en:"Years: standard harvest age in local government forestry materials. Weight: air-dry specific gravity, published values for paulownia in general."}},
    {id:"cmp-quality",
      q:{ja:"早く育つと、木の質は落ちませんか？", en:"Does fast growth lower the quality?"},
      a:{ja:"桐はもともと蜂の巣のような細胞の構造を持ち、軽いわりに丈夫な木です。早く育つ品種でも、この構造は変わらないと報告されています。",
         en:"Paulownia has a honeycomb-like cell structure that makes it strong for its weight. Reports say this structure stays the same in fast-growing varieties."},
      more:[
        {id:"cmp-second",
          q:{ja:"2回目以降の木はどうですか？", en:"What about later harvests?"},
          a:{ja:"そのままだと品質は若干落ちるという報告がございますが、手入れ次第でほぼ同等の品質を保つこともできます。2回目以降は切り株から芽がいくつも出るので、芽かきで1本に絞るなどの手入れが要ります。手入れをしないと幹が曲がって伸び、製品として使えなくなります。",
             en:"Left as it is, quality is reported to drop slightly, but with proper care it can be kept almost the same. From the second cycle, several shoots rise from each stump, so care such as thinning them to one is needed. Without care, the trunk grows crooked and cannot be used as a product."},
          note:{ja:"仕上がりは、土地の環境やその年の天候によって変わります。", en:"Results vary with the site's environment and each year's weather."},
          blocks:[
            {type:"note", text:{ja:"【スタッフ専用の参考資料】お客様には案内しないでください。", en:"[Staff-only references] Do not show these to customers."}},
            {type:"link", label:{ja:"【スタッフ専用】北イタリアの研究（Forests 2022）：植えて1年後に台切りして芽を1本に絞り、5mまで枝打ちした木は、直径以外すべて最高等級（Po-A）。台切りの跡に腐れなし", en:"[Staff only] Northern Italy study (Forests 2022): trees cut back one year after planting, thinned to one shoot and pruned to 5 m graded best class (Po-A) on all points except diameter; no rot at the cut"}, href:"https://www.mdpi.com/1999-4907/13/11/1841"},
            {type:"link", label:{ja:"【スタッフ専用】書籍『桐（地域資源を活かす生活工芸双書）』（農文協・2024）69ページ「台切り法」：植えた翌春に地際で伐り、萌芽を1本だけ残すと、その年に4〜5m伸び、まっすぐな幹が取れる（普通の桐の栽培法）", en:"[Staff only] Book \"Kiri\" (Rural Culture Association Japan, 2024), p.69 cut-back method: cutting at ground level the spring after planting and keeping one sprout gives 4–5 m of growth that year and a straight trunk (standard paulownia practice)"}, href:"https://www.amazon.co.jp/dp/B0DB4Y83YX"}
          ]}
      ]}
  ]
},
{
  id:"env", icon:"環",
  title:{ja:"環境とCO₂", en:"Environment and CO₂"},
  items:[
    {id:"co2",
      q:{ja:"CO₂はどのくらい吸収しますか？", en:"How much CO₂ does it absorb?"},
      a:{ja:"日本で実際に測った早生桐の数字を、参考としてお伝えします。1本が1年に吸うCO₂は約42kgです。1ヘクタールに約1,100本植えたとして計算すると、1年に約46トンです。",
         en:"As a reference, here are figures actually measured on fast-growing paulownia in Japan. One tree absorbs about 42 kg of CO₂ a year. With about 1,100 trees per hectare, that comes to about 46 tonnes a year."},
      table:{
        head:{ja:["1年あたり","早生桐（参考）","スギ"], en:["Per year","Paulownia (reference)","Cedar"]},
        rows:[
          {ja:["1本","約42kg","約8.8kg"], en:["One tree","About 42 kg","About 8.8 kg"]},
          {ja:["1ヘクタール","約46トン","約8.8トン"], en:["One hectare","About 46 t","About 8.8 t"]}
        ]},
      note:{ja:"特定の土地・樹齢で測った参考値で、当社の木で測った数字ではありません。土地や育て方で変わり、実際の量は植えて測るまで分かりません。お約束する数字ではありません。スギは林野庁の公表値（36〜40年生、1本は1ヘクタール1,000本として計算）。", en:"Reference values measured at a specific site and age, not on our own trees. Amounts vary by site and care, and are only known once trees are planted and measured. These are not promised figures. Cedar: Forestry Agency of Japan (36 to 40 years old; per-tree value assumes 1,000 trees per hectare)."},
      more:[
        {id:"co2-how",
          q:{ja:"どうやって測った数字ですか？", en:"How was this measured?"},
          a:{ja:"当社が測った数字ではありません。福島県の3か所の植林地で行われた研究で、木の高さと幹回りを年2回測り、実際に木を伐って重さを量って出した数字です。樹齢7.5年の木1本が吸ったCO₂は合計約319kg、1年あたりにすると約42kgです。この数字は国土交通省の資料にも載っています。",
             en:"This is not a figure measured by our company. In a study carried out at three plantation sites in Fukushima, tree height and trunk girth were measured twice a year, and trees were actually felled and weighed. A 7.5-year-old tree had absorbed about 319 kg of CO₂ in total, or about 42 kg a year. The figure also appears in a document of the Ministry of Land, Infrastructure, Transport and Tourism."},
          note:{ja:"スタッフの方へ：この数字は京都皇帝早生桐で測ったものではなく、同系統の早生桐で測った数字です。", en:"For staff: this figure was not measured on Kyoto Emperor Paulownia but on a fast-growing paulownia of the same lineage."},
          blocks:[
            {type:"note", text:{ja:"【スタッフ専用の参考資料】お客様には案内しないでください。", en:"[Staff-only references] Do not show these to customers."}},
            {type:"link", label:{ja:"【スタッフ専用】ナリコー早生桐（公式）：5〜6年で15〜17mは会社の説明／実測は2年3ヶ月で平均5.9m／萌芽は1年目で6m超えることがある", en:"[Staff only] Narikoh (official): 15–17 m in 5–6 years is the company's claim; measured 5.9 m average at 2 yrs 3 mos; coppice shoots may exceed 6 m in year 1"}, href:"https://www.narikoh.co.jp/souseigiri"},
            {type:"link", label:{ja:"【スタッフ専用】成田空港×ナリコー（2022年11月）：42.5kgは成蹊大学の2021年3月の学会発表の数値", en:"[Staff only] Narita Airport x Narikoh (Nov 2022): 42.5 kg is from Seikei University's March 2021 conference paper"}, href:"https://www.narita-airport.jp/files/0e54fca95ae7873d64944a914e4b3faf3925957ddb68a14301399cd4dd6043dd"},
            {type:"link", label:{ja:"【スタッフ専用】国土交通省の資料 19ページ：7.5年で0.319t、46.8tは1,100本を想定した試算", en:"[Staff only] MLIT document p.19: 0.319 t at 7.5 years; 46.8 t is an estimate assuming 1,100 trees/ha"}, href:"https://www.mlit.go.jp/koku/content/001475068.pdf"},
            {type:"link", label:{ja:"【スタッフ専用】学会の要旨（成蹊大学・2021年）：福島県3か所・年2回・各20本を測定し伐って計量、6・7年で高さ15m", en:"[Staff only] Conference abstract (Seikei Univ., 2021): 3 sites in Fukushima, measured twice a year, 20 trees each, felled and weighed; 15 m at 6–7 years"}, href:"https://pub.confit.atlas.jp/ja/event/mmij2021a/presentation/3K0408-14-02"}
          ]},
        {id:"co2-why",
          q:{ja:"木がCO₂を吸うとはどういうことですか？", en:"What does it mean for a tree to absorb CO₂?"},
          a:{ja:"木は光合成で空気中のCO₂から炭素を取り出し、幹や枝、根にして体に残します。木の体は、もともと空気だった炭素でできています。だから木の重さを量ると、吸ったCO₂の量が分かります。",
             en:"Through photosynthesis a tree takes carbon from CO₂ in the air and builds it into its trunk, branches and roots. The tree's body is made of carbon that was once in the air. That is why weighing a tree shows how much CO₂ it absorbed."}},
        {id:"co2-cedar",
          q:{ja:"スギの何倍ですか？", en:"How many times more than cedar?"},
          a:{ja:"同じ「1ヘクタール・1年」で並べると、約5〜6倍です。ただ、木の年齢も測り方も同じではないので、おおよその目安としてお考えください。",
             en:"Per hectare per year, it is about five to six times. However, tree age and measuring methods differ, so please treat this as a rough guide."}},
        {id:"co2-big",
          q:{ja:"もっと大きな数字を見たことがあります", en:"I have seen much bigger numbers."},
          a:{ja:"大きな数字の多くは、条件が全部そろった時の計算上の上限です。ほかに、何年分もの合計が1年分として広まった例もあります。ここでは、日本で実際に測った数字だけをお伝えしています。",
             en:"Most big numbers are calculated upper limits under ideal conditions. In other cases, a total built up over many years spread as a one-year figure. Here we share only figures actually measured in Japan."}}
      ]},
    {id:"env-soil",
      q:{ja:"土や水にはどんな働きがありますか？", en:"What does it do for soil and water?"},
      a:{ja:"根は地下4.5m以上まで伸びるとされ、硬い土をほぐして水がしみ込みやすくします。根が土を押さえるので、雨で土が流れるのも防ぎます。",
         en:"Its roots are said to reach over 4.5 m deep, loosening hard soil so water soaks in. They also hold the soil, helping prevent it from washing away in rain."},
      note:{ja:"海外の報告を含みます。日本の土地で同じ結果になるとお約束するものではありません。", en:"This includes overseas reports. We do not promise the same results on land in Japan."}},
    {id:"credit",
      q:{ja:"カーボンクレジットになりますか？", en:"Can it generate carbon credits?"},
      a:{ja:"現時点で、クレジットとして認定されたものではありません。お約束できる段階ではありません。これより詳しいことは、本社の別の部署の管轄ですので、お返事は部署への問い合わせをさせて頂いております。",
         en:"At present it has not been certified for carbon credits. We cannot make promises at this stage. Anything further falls under a different department at our head office, so we handle replies by making an inquiry to that department."},
      more:[
        {id:"credit-why",
          q:{ja:"なぜすぐに認定されないのですか？", en:"Why isn't it certified yet?"},
          a:{ja:"日本の制度（J-クレジット）は、何十年もかけて育てる木を前提に作られています。早生桐は、まだ国の造林の対象の木に入っていません。数年で伐ること、植え直さずに切り株から育つことも、今の制度が考えている形とは違います。木が劣っているのではなく、まず土地ごとに育ち方を測って、記録を積み上げる段階です。",
             en:"Japan's J-Credit scheme assumes trees grown over decades. Fast-growing paulownia is not yet on the list of trees for national reforestation planning. Harvesting within a few years and regrowing from stumps also differ from what the scheme expects. This is not a weakness of the tree: the next step is measuring growth site by site and building up records."},
          note:{ja:"2026年8月時点で確認できた内容です。制度は変わることがあります。", en:"As confirmed in August 2026. The scheme may change."}}
      ]},
    {id:"pollen",
      q:{ja:"花粉症対策になりますか？", en:"Does it help with hay fever?"},
      a:{ja:"国は、花粉の出るスギの人工林を2033年度までに約2割減らす目標を立てています。スギを伐ったあとの土地の使い道の一つとして、桐を考えることができます。",
         en:"Japan aims to cut cedar plantations that produce pollen by about 20% by fiscal 2033. Paulownia is one option for land after cedar is felled."},
      note:{ja:"桐を植えること自体が花粉症を減らすとお約束するものではありません。合う木は土地によって変わります。", en:"We do not claim that planting paulownia itself reduces hay fever. The right tree depends on the land."}},
    {id:"sdgs",
      q:{ja:"SDGsとの関わりは？", en:"How does it relate to the SDGs?"},
      a:{ja:"主に、気候変動（目標13）、陸の豊かさ（目標15）、つくる責任つかう責任（目標12）、働きがいと経済成長（目標8）、住み続けられるまちづくり（目標11）、クリーンなエネルギー（目標7）に関わる取り組みと考えています。",
         en:"We see it as relating mainly to climate action (Goal 13), life on land (Goal 15), responsible production (Goal 12), decent work and economic growth (Goal 8), sustainable cities (Goal 11) and clean energy (Goal 7)."}}
  ]
},
{
  id:"buy", icon:"苗",
  title:{ja:"苗・山林のご案内", en:"Seedlings and forests"},
  items:[
    {id:"buy-one",
      q:{ja:"苗は買えますか？", en:"Can I buy seedlings?"},
      a:{ja:"はい、1本からご購入いただけます。価格は本数と地域に応じてお見積もりします。",
         en:"Yes, from a single seedling. We quote prices according to quantity and region."},
      more:[
        {id:"buy-care",
          q:{ja:"植樹やお手入れも頼めますか？", en:"Can you plant and maintain them?"},
          a:{ja:"はい、苗代とは別料金でお引き受けします。",
             en:"Yes, as a service charged separately from the seedlings."}},
        {id:"buy-flow",
          q:{ja:"ご相談の流れは？", en:"How does it work?"},
          a:{ja:"ご相談は、苗の販売ページのお見積もりフォームから、または当社のメール（info@sansei-japan.com）に件名「【京都皇帝早生桐LP｜苗の販売】お見積もり依頼」を付けてお送りください。本数と植える場所をお書き添えください。",
             en:"Please use the quote form on our seedling sales page, or email us at info@sansei-japan.com with the subject \"【京都皇帝早生桐LP｜苗の販売】お見積もり依頼\" (seedling quote request). Please include the number of seedlings and the planting site."},
          blocks:[
            {type:"link", label:{ja:"苗の販売ページのフォームへ", en:"Go to the seedling sales form"}, href:"https://sansei-japan.com/nae/#contact"},
            {type:"link", label:{ja:"件名つきでメールを書く", en:"Write an email with the subject"}, href:"mailto:info@sansei-japan.com?subject=%E3%80%90%E4%BA%AC%E9%83%BD%E7%9A%87%E5%B8%9D%E6%97%A9%E7%94%9F%E6%A1%90LP%EF%BD%9C%E8%8B%97%E3%81%AE%E8%B2%A9%E5%A3%B2%E3%80%91%E3%81%8A%E8%A6%8B%E7%A9%8D%E3%82%82%E3%82%8A%E4%BE%9D%E9%A0%BC"}
          ]}
      ]},
    {id:"buy-forest",
      q:{ja:"山ごと購入できますか？", en:"Can I buy a whole forest?"},
      a:{ja:"はい。木材を大量にお使いの企業さま向けに、植林と手入れを終えた山をお譲りしています。ご相談は、山林の販売ページの商談フォームから、または当社のメール（info@sansei-japan.com）に件名「【京都皇帝早生桐LP｜山林の販売】商談のお申し込み」を付けてお送りください。",
         en:"Yes. For companies that use a lot of timber, we offer forests already planted and maintained. Please use the business inquiry form on our forest sales page, or email us at info@sansei-japan.com with the subject \"【京都皇帝早生桐LP｜山林の販売】商談のお申し込み\" (forest business inquiry)."},
      blocks:[
        {type:"link", label:{ja:"山林の販売ページのフォームへ", en:"Go to the forest sales form"}, href:"https://sansei-japan.com/sanrin/#contact"},
        {type:"link", label:{ja:"件名つきでメールを書く", en:"Write an email with the subject"}, href:"mailto:info@sansei-japan.com?subject=%E3%80%90%E4%BA%AC%E9%83%BD%E7%9A%87%E5%B8%9D%E6%97%A9%E7%94%9F%E6%A1%90LP%EF%BD%9C%E5%B1%B1%E6%9E%97%E3%81%AE%E8%B2%A9%E5%A3%B2%E3%80%91%E5%95%86%E8%AB%87%E3%81%AE%E3%81%8A%E7%94%B3%E3%81%97%E8%BE%BC%E3%81%BF"}
      ]},
    {id:"buy-invest",
      q:{ja:"投資として儲かりますか？", en:"Is it a profitable investment?"},
      a:{ja:"収益や利回りをお約束するものではありません。個別の内容は、本社の別の部署の管轄ですので、お返事は部署への問い合わせをさせて頂いております。",
         en:"We do not promise any return or yield. Individual details fall under a different department at our head office, so we handle replies by making an inquiry to that department."}},
    {id:"buy-abroad",
      q:{ja:"海外でも植えられますか？", en:"Can it be planted overseas?"},
      a:{ja:"海外でのご希望は、本社の別の部署の管轄ですので、お返事は部署への問い合わせをさせて頂いております。国や地域、ご希望の内容をお知らせください。",
         en:"Overseas requests fall under a different department at our head office, so we handle replies by making an inquiry to that department. Please tell us your country or region and what you have in mind."}}
  ]
},
{
  id:"company", icon:"社",
  title:{ja:"会社とお問い合わせ", en:"Company and contact"},
  items:[
    {id:"co-clone",
      q:{ja:"苗はどう作っていますか？", en:"How are the seedlings produced?"},
      a:{ja:"当社が扱う品種を、メリクロン（組織培養）というクローン培養で増やし、培養の棚から育苗ハウスへ移して育てます。一本一本が同じ性質を受け継いだ苗なので、育ちがそろい、手入れや収穫の計画が立てやすくなります。培養の詳しい方法や研究の内容につきましては、弊社の機密事項にあたるため、お答えいたしかねる場合がございます。",
         en:"We propagate the variety we handle by meristem (tissue) culture, a form of clone culture, then move the plants from culture shelves to nursery greenhouses. Each seedling inherits the same characteristics, so growth is even and care and harvests are easier to plan. The details of our culture methods and research are confidential company information, so we may be unable to answer questions about them."}},
    {id:"co-contact",
      q:{ja:"連絡先は？", en:"How can I contact you?"},
      a:{ja:"株式会社SANSEI\n〒600-8813 京都府京都市下京区中堂寺南町134番地 KRP2号館 2階201号室\nTEL・FAX：075-748-9188\nMAIL：info@sansei-japan.com",
         en:"SANSEI Co., Ltd.\nKRP Building 2, 2F Room 201, 134 Chudoji Minamimachi, Shimogyo-ku, Kyoto 600-8813, Japan\nTel/Fax: +81-75-748-9188\nEmail: info@sansei-japan.com"}},
    {id:"co-unknown",
      q:{ja:"ここに答えがない時は？", en:"What if the answer is not here?"},
      a:{ja:"無理にお答えせず、ご質問とご連絡先を控えて、本社へお知らせください。お客様には「本社の別の部署の管轄ですので、お返事は部署への問い合わせをさせて頂いております」とお伝えします。ただし、苗の培養や研究、親木（マザー）、品種の成り立ちについてのご質問は、「弊社の機密事項にあたるため、お答えいたしかねる場合がございます」とお伝えし、本社へ回す必要はありません。",
         en:"Please do not guess. Note the question and contact details and pass them to the head office. To the customer, say: \"This falls under a different department at our head office, so we handle replies by making an inquiry to that department.\" However, for questions about seedling culture or research, the mother trees, or the origin of the variety, say: \"As this is confidential company information, we may be unable to answer,\" and there is no need to pass them to the head office."}}
  ]
}
];
