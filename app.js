const chapters = [
  {
    "id": "overview",
    "title": "試験戦略・全体像",
    "tag": "必読",
    "source": "第1回資料の評価方法・授業予定を基準に構成。第2回・第4回は補完版。",
    "body": "\n<section class=\"hero-panel\">\n  <div>\n    <p class=\"eyebrow\">CHEMISTRY I / EXAM PREP</p>\n    <h1>化学1 試験対策用・統合教科書</h1>\n    <p class=\"lead\">アップロード済みの第1・3・5・6回資料を軸に、第2回「原子の構造②」と第4回「化学結合①」を補完した、演習中心のHTML教材です。小テスト範囲である1章・2章を厚めにし、100問超の問題演習、反応式バランサー、分子量計算、電子配置チェッカーを入れています。</p>\n  </div>\n  <div class=\"score-card glass\">\n    <div class=\"score-ring\"><span id=\"totalQuestionsBadge\">150+</span><small>questions</small></div>\n    <p>問題は章別・難易度別に切替可能。演習履歴はブラウザに保存されます。</p>\n  </div>\n</section>\n<div class=\"grid two\">\n  <article class=\"card important\">\n    <h3>評価の読み方</h3>\n    <p>期末試験50点、小テスト25点、課題25点という構成。期末は教科書の1〜8章、場合により9章から各章1問ずつ、5問選択で採点される形式なので、各章の「例題・章末問題レベル」を解けることが重要です。</p>\n    <ul>\n      <li><strong>小テスト：</strong>第1章・第2章中心。物質分類、原子構造、電子配置、周期表、化学結合が得点源。</li>\n      <li><strong>期末：</strong>化学量論、三態、反応速度、酸塩基、酸化還元、熱力学まで広がる可能性。</li>\n      <li><strong>課題：</strong>演習型。式と単位を省略せず、途中式の読みやすさを意識。</li>\n    </ul>\n  </article>\n  <article class=\"card\">\n    <h3>この教材の使い方</h3>\n    <ol class=\"steps\">\n      <li>まず「第1〜第6回」タブを通読し、赤い<strong>試験ポイント</strong>だけ暗記。</li>\n      <li>「Tools」で電子配置・分子量・反応式を手で解いた後に検算。</li>\n      <li>「Quiz」で章別に20問ずつ解き、間違えた問題をブックマーク。</li>\n      <li>最後に「25問模試」を3回。80%以上なら小テスト範囲はかなり固い。</li>\n    </ol>\n  </article>\n</div>\n<div class=\"card\">\n  <h3>出題されやすい横断テーマ</h3>\n  <div class=\"chips large\">\n    <span>分類：混合物/純物質/単体/化合物</span><span>同位体・質量数</span><span>閉殻構造</span><span>電子配置</span><span>周期表と価電子</span><span>イオン化エネルギー</span><span>電子親和力</span><span>点電子式</span><span>VSEPR</span><span>混成軌道</span><span>σ/π結合</span><span>物質量mol</span><span>化学反応式</span><span>量的関係</span>\n  </div>\n</div>\n"
  },
  {
    "id": "ch1",
    "title": "第1回 化学の基礎・原子の構造①",
    "tag": "実ファイル",
    "source": "第1回資料：化学の基礎、原子・分子・イオン、ボーアモデル、単原子イオン。",
    "body": "\n<div class=\"chapter-title\"><span>01</span><div><h2>化学の基礎・原子の構造①</h2><p>最初の山は「用語の分類」と「原子の数え方」。ここであいまいにすると、後のイオン式・組成式・物質量で必ず崩れます。</p></div></div>\n<div class=\"grid two\">\n  <section class=\"card\">\n    <h3>物質の分類</h3>\n    <p>物質は、まず<strong>混合物</strong>と<strong>純物質</strong>に分ける。純物質はさらに<strong>単体</strong>と<strong>化合物</strong>に分ける。</p>\n    <table><thead><tr><th>分類</th><th>意味</th><th>例</th></tr></thead><tbody>\n      <tr><td>混合物</td><td>複数の純物質が混ざったもの</td><td>空気、食塩水、石油、牛乳、塩酸</td></tr>\n      <tr><td>純物質</td><td>1種類の物質として扱えるもの</td><td>鉄、水、酸素、二酸化炭素</td></tr>\n      <tr><td>単体</td><td>1種類の元素だけからなる純物質</td><td>H<sub>2</sub>, O<sub>2</sub>, O<sub>3</sub>, Cl<sub>2</sub>, Fe</td></tr>\n      <tr><td>化合物</td><td>複数の元素からなる純物質</td><td>H<sub>2</sub>O, CO<sub>2</sub>, NH<sub>3</sub>, NaCl</td></tr>\n    </tbody></table>\n    <div class=\"callout danger\"><strong>ひっかけ：</strong>「酸素」は文脈で単体O<sub>2</sub>を指すことも、元素Oを指すこともある。「水は水素と酸素からできている」の水素・酸素は元素の意味。</div>\n  </section>\n  <section class=\"card\">\n    <h3>覚えるべき分子・イオン</h3>\n    <div class=\"mini-grid\">\n      <div><h4>有名分子</h4><p>H<sub>2</sub>, N<sub>2</sub>, O<sub>2</sub>, O<sub>3</sub>, F<sub>2</sub>, Cl<sub>2</sub>, CO, CO<sub>2</sub>, HCl, H<sub>2</sub>O, H<sub>2</sub>S, CH<sub>4</sub>, NH<sub>3</sub></p></div>\n      <div><h4>陽イオン</h4><p>H<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>, Mg<sup>2+</sup>, Ca<sup>2+</sup>, Cu<sup>+</sup>, Cu<sup>2+</sup>, Fe<sup>2+</sup>, Fe<sup>3+</sup>, NH<sub>4</sub><sup>+</sup>, H<sub>3</sub>O<sup>+</sup></p></div>\n      <div><h4>陰イオン</h4><p>F<sup>-</sup>, Cl<sup>-</sup>, Br<sup>-</sup>, I<sup>-</sup>, O<sup>2-</sup>, S<sup>2-</sup>, N<sup>3-</sup>, P<sup>3-</sup>, OH<sup>-</sup>, NO<sub>3</sub><sup>-</sup>, CO<sub>3</sub><sup>2-</sup>, SO<sub>4</sub><sup>2-</sup>, PO<sub>4</sub><sup>3-</sup></p></div>\n      <div><h4>組成式の作り方</h4><p>電荷の総和が0になる最小整数比にする。例：Al<sup>3+</sup>とSO<sub>4</sub><sup>2-</sup>なら Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>。</p></div>\n    </div>\n  </section>\n</div>\n<section class=\"card\">\n  <h3>原子の構造</h3>\n  <div class=\"atom-visual\">\n    <div class=\"nucleus\">p<sup>+</sup><br>n</div><span class=\"orbit o1\"></span><span class=\"orbit o2\"></span><span class=\"electron e1\">e<sup>-</sup></span><span class=\"electron e2\">e<sup>-</sup></span><span class=\"electron e3\">e<sup>-</sup></span>\n  </div>\n  <p>原子は原子核と電子からなる。原子核には陽子と中性子がある。<strong>陽子数=原子番号</strong>で元素が決まり、<strong>陽子数+中性子数=質量数</strong>で同位体を区別する。中性原子では陽子数=電子数。電子数が変わると単原子イオンになる。</p>\n  <div class=\"formula-cards\">\n    <div><b>原子番号 Z</b><span>陽子の数</span></div><div><b>質量数 A</b><span>陽子数+中性子数</span></div><div><b>中性子数</b><span>A - Z</span></div><div><b>イオンの電荷</b><span>陽子数 - 電子数</span></div>\n  </div>\n</section>\n<section class=\"card\">\n  <h3>電子殻と閉殻構造</h3>\n  <p>古典的な電子殻では、K殻2個、L殻8個、M殻18個、N殻32個、一般に2n<sup>2</sup>個まで入る。ただし第3殻以降は、安定性を正しく扱うために原子軌道が必要になる。</p>\n  <table><thead><tr><th>殻</th><th>n</th><th>最大収容電子数</th><th>例</th></tr></thead><tbody><tr><td>K</td><td>1</td><td>2</td><td>He: K(2)</td></tr><tr><td>L</td><td>2</td><td>8</td><td>Ne: K(2)L(8)</td></tr><tr><td>M</td><td>3</td><td>18</td><td>ArはK(2)L(8)M(8)で安定</td></tr><tr><td>N</td><td>4</td><td>32</td><td>KやCaでは4sが先に関係</td></tr></tbody></table>\n  <div class=\"callout\"><strong>試験ポイント：</strong>Li, Na, Mg, Alは電子を放出して陽イオンになりやすい。F, O, N, Cl, S, Pは電子を受け取って陰イオンになりやすい。</div>\n</section>\n"
  },
  {
    "id": "ch2",
    "title": "第2回 原子の構造②（補完）",
    "tag": "補完",
    "source": "第2回ファイル未提出のため、第1回の予告と第3回の復習・演習内容から補完。",
    "body": "\n<div class=\"chapter-title\"><span>02</span><div><h2>原子の構造②：原子軌道・量子数・電子配置</h2><p>第2回ファイルは未提出のため、第1回終盤の「次回学ぶ内容」と第3回の復習・理解度チェックから補完しています。小テストで最も出やすい領域です。</p></div></div>\n<div class=\"grid two\">\n  <section class=\"card\">\n    <h3>原子モデルの流れ</h3>\n    <ol class=\"timeline\">\n      <li><b>トムソンモデル</b><span>電子の存在を踏まえた初期モデル。</span></li>\n      <li><b>ラザフォードモデル</b><span>原子核の存在。原子はほぼ空間。</span></li>\n      <li><b>ボーアモデル</b><span>電子殻とエネルギー準位。</span></li>\n      <li><b>ド・ブロイ</b><span>電子の波動性。</span></li>\n      <li><b>シュレーディンガー</b><span>波動方程式。波動関数の二乗が存在確率。</span></li>\n    </ol>\n  </section>\n  <section class=\"card\">\n    <h3>量子数</h3>\n    <table><thead><tr><th>記号</th><th>名称</th><th>意味</th><th>範囲</th></tr></thead><tbody>\n      <tr><td>n</td><td>主量子数</td><td>殻・大まかなエネルギー</td><td>1,2,3,...</td></tr>\n      <tr><td>l</td><td>副量子数</td><td>軌道の種類</td><td>0〜n-1</td></tr>\n      <tr><td>m</td><td>磁気量子数</td><td>軌道の向き</td><td>-l〜+l（2l+1個）</td></tr>\n      <tr><td>s</td><td>スピン量子数</td><td>電子のスピン</td><td>+1/2 または -1/2</td></tr>\n    </tbody></table>\n    <div class=\"callout\"><strong>軌道名：</strong>l=0がs、l=1がp、l=2がd、l=3がf。1pや2dは存在しない。</div>\n  </section>\n</div>\n<section class=\"card\">\n  <h3>原子軌道の収容数</h3>\n  <div class=\"orbital-strip\"><span>s<br><b>2</b></span><span>p<br><b>6</b></span><span>d<br><b>10</b></span><span>f<br><b>14</b></span><span>g<br><b>18</b></span></div>\n  <p>1つの軌道には最大2個の電子が入り、それぞれのスピンは逆向きになる。p軌道は3つの向きがあるため最大6個、d軌道は5つで最大10個。</p>\n</section>\n<section class=\"card\">\n  <h3>電子配置の3ルール</h3>\n  <div class=\"grid three\">\n    <div class=\"rule\"><b>1. 構成原理</b><p>エネルギーの低い軌道から順に入る。代表的順序：1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p...</p></div>\n    <div class=\"rule\"><b>2. パウリの排他原理</b><p>同一軌道に入る2電子はスピンが逆向き。同じ4つの量子数を持つ電子は存在できない。</p></div>\n    <div class=\"rule\"><b>3. フントの規則</b><p>同じエネルギーの軌道には、まず1個ずつ平行スピンで入る。</p></div>\n  </div>\n  <div class=\"callout danger\"><strong>注意：</strong>Cr, Cuなどの例外配置は資料上「本授業の試験では問わない」とされている。基本配置を優先。</div>\n</section>\n<section class=\"card\">\n  <h3>4sが3dより先に入る理由</h3>\n  <p>s電子は原子核近傍にも電子密度を持つため、内側電子による遮蔽を受けにくく、有効核電荷を大きく感じる。したがって4s軌道は3d軌道より低エネルギーになりやすい。ただし遷移金属のイオン化では4s電子から抜ける点に注意。</p>\n  <div class=\"formula-cards\"><div><b>Z<sub>eff</sub></b><span>有効核電荷</span></div><div><b>遮蔽</b><span>内側電子が核電荷を弱める</span></div><div><b>貫入</b><span>s軌道が核近くに入り込む</span></div></div>\n</section>\n"
  },
  {
    "id": "ch3",
    "title": "第3回 元素の性質と周期表",
    "tag": "実ファイル",
    "source": "第3回資料：電子配置、周期表、ブロック分類、典型/遷移、IE/EA。",
    "body": "\n<div class=\"chapter-title\"><span>03</span><div><h2>元素の性質と周期表</h2><p>周期表は暗記表ではなく、電子配置の地図です。「最後に入った電子」と「最外殻電子」が性質を決めます。</p></div></div>\n<section class=\"card\">\n  <h3>周期表と電子配置</h3>\n  <p>周期表は原子番号順、つまり陽子数順・中性原子の電子数順に並ぶ。同じ族では最外殻電子配置が似るため化学的性質が似る。sブロック、pブロック、dブロック、fブロックは「最後に電子が入る軌道」で分ける。</p>\n  <div class=\"block-table\">\n    <div class=\"s\">s block<br>1,2族</div><div class=\"d\">d block<br>遷移元素</div><div class=\"p\">p block<br>13〜18族</div><div class=\"f\">f block<br>ランタノイド/アクチノイド</div>\n  </div>\n</section>\n<div class=\"grid two\">\n  <section class=\"card\">\n    <h3>典型元素と遷移元素</h3>\n    <table><thead><tr><th>分類</th><th>範囲</th><th>特徴</th></tr></thead><tbody>\n      <tr><td>典型元素</td><td>sブロック+pブロック。資料では1,2,12〜18族。</td><td>最外殻電子が性質を強く決める。</td></tr>\n      <tr><td>遷移元素</td><td>dブロック+fブロック。資料では3〜11族中心。</td><td>内殻d/f電子も性質に関与。複数の酸化数をとりやすい。</td></tr>\n    </tbody></table>\n  </section>\n  <section class=\"card\">\n    <h3>価電子とイオンの傾向</h3>\n    <table><thead><tr><th>族</th><th>価電子</th><th>なりやすいイオン</th><th>例</th></tr></thead><tbody>\n      <tr><td>1族</td><td>1</td><td>+1</td><td>Na<sup>+</sup>, K<sup>+</sup></td></tr>\n      <tr><td>2族</td><td>2</td><td>+2</td><td>Mg<sup>2+</sup>, Ca<sup>2+</sup></td></tr>\n      <tr><td>16族</td><td>6</td><td>-2</td><td>O<sup>2-</sup>, S<sup>2-</sup></td></tr>\n      <tr><td>17族</td><td>7</td><td>-1</td><td>F<sup>-</sup>, Cl<sup>-</sup></td></tr>\n      <tr><td>18族</td><td>0扱い</td><td>ほぼならない</td><td>He, Ne, Ar</td></tr>\n    </tbody></table>\n  </section>\n</div>\n<section class=\"card\">\n  <h3>イオン化エネルギーと電子親和力</h3>\n  <div class=\"grid two\">\n    <div class=\"trend-card\"><h4>イオン化エネルギー IE</h4><p>原子から電子を1個取り去って陽イオンにするためのエネルギー。小さいほど電子を放出しやすく、陽イオンになりやすい。</p><div class=\"trend-arrow\">周期表の右上ほど大きい<br>1族で小、18族で大</div></div>\n    <div class=\"trend-card\"><h4>電子親和力 EA</h4><p>原子が電子を1個受け取って陰イオンになるときに放出されるエネルギー。大きいほど電子を受け入れやすい。</p><div class=\"trend-arrow\">17族で大、18族で小</div></div>\n  </div>\n  <div class=\"callout\"><strong>試験ポイント：</strong>「最も陰イオンになりやすいもの」は多くの場合ハロゲン、とくにClやFを疑う。「イオン化エネルギー最大」は希ガス側を疑う。</div>\n</section>\n"
  },
  {
    "id": "ch4",
    "title": "第4回 化学結合①（補完）",
    "tag": "補完",
    "source": "第4回ファイル未提出のため、第5回冒頭の復習、課題2、化学結合②への接続から補完。",
    "body": "\n<div class=\"chapter-title\"><span>04</span><div><h2>化学結合①：イオン結合・共有結合・点電子式・分子の形</h2><p>第4回資料は未提出なので、第5回資料で「復習」として扱われている内容をもとに再構成しています。ここは第5回の混成軌道の前提です。</p></div></div>\n<div class=\"grid two\">\n  <section class=\"card\">\n    <h3>結合の大分類</h3>\n    <table><thead><tr><th>結合</th><th>主な組合せ</th><th>説明</th><th>例</th></tr></thead><tbody>\n      <tr><td>イオン結合</td><td>金属+非金属</td><td>陽イオンと陰イオンの静電気的引力</td><td>NaCl, MgO, CuO</td></tr>\n      <tr><td>共有結合</td><td>非金属+非金属</td><td>不対電子を共有し閉殻へ近づく</td><td>H<sub>2</sub>O, CO<sub>2</sub>, NH<sub>3</sub></td></tr>\n      <tr><td>金属結合</td><td>金属元素</td><td>自由電子と金属陽イオンの集合</td><td>Na, Cu, Al</td></tr>\n    </tbody></table>\n  </section>\n  <section class=\"card\">\n    <h3>結晶の見分け</h3>\n    <p>NaClやLiFはイオン結晶、NaやCuは金属結晶、SiやSiO<sub>2</sub>は共有結晶として扱う。O<sub>3</sub>やH<sub>2</sub>Oは分子であり、固体になれば分子結晶をつくる。</p>\n    <div class=\"callout danger\"><strong>ひっかけ：</strong>SiO<sub>2</sub>は非金属元素だけだが、単なる分子ではなく共有結晶として扱う。</div>\n  </section>\n</div>\n<section class=\"card\">\n  <h3>点電子式（ルイス構造式）</h3>\n  <p>価電子を点で表し、共有電子対と非共有電子対を区別する。Hは1本、F/Clは基本1本、Oは2本、Nは3本、Cは4本の結合を作りやすい。</p>\n  <div class=\"lewis-grid\"><div>H-Cl<br><small>単結合</small></div><div>O=C=O<br><small>二重結合</small></div><div>N≡N<br><small>三重結合</small></div><div>H-C≡N<br><small>HCNは直線</small></div></div>\n  <ol class=\"steps\"><li>中心原子を決める。Hは端。</li><li>価電子総数を数える。イオンなら電荷分を加減。</li><li>単結合でつなぎ、周辺原子を閉殻にする。</li><li>中心原子が不足したら二重結合・三重結合を作る。</li></ol>\n</section>\n<section class=\"card\">\n  <h3>VSEPR法：分子の形</h3>\n  <p>中心原子の周りの電子対は、互いに反発して最大限遠ざかる。共有電子対でも非共有電子対でも「電子対」として数える。ただし非共有電子対があると結合角は少し小さくなる。</p>\n  <table><thead><tr><th>中心周りの電子対</th><th>基本形</th><th>代表例</th><th>形と角度</th></tr></thead><tbody>\n    <tr><td>2</td><td>直線</td><td>CO<sub>2</sub>, HCN</td><td>180°</td></tr>\n    <tr><td>3</td><td>平面三角形</td><td>CH<sub>2</sub>O</td><td>約120°</td></tr>\n    <tr><td>4</td><td>正四面体</td><td>CH<sub>4</sub></td><td>109.5°</td></tr>\n    <tr><td>4うち非共有1</td><td>正四面体由来</td><td>NH<sub>3</sub></td><td>三角錐、約107°</td></tr>\n    <tr><td>4うち非共有2</td><td>正四面体由来</td><td>H<sub>2</sub>O</td><td>折れ線、約104.5°</td></tr>\n  </tbody></table>\n</section>\n<section class=\"card\">\n  <h3>極性</h3>\n  <p>結合に電気陰性度差があると結合は極性を持つ。分子全体の極性は、結合の極性と分子形の合成で決まる。CO<sub>2</sub>はC=O結合に極性があっても直線対称なので無極性。H<sub>2</sub>OやNH<sub>3</sub>は形が非対称なので極性分子。</p>\n</section>\n"
  },
  {
    "id": "ch5",
    "title": "第5回 化学結合②・③",
    "tag": "実ファイル",
    "source": "第5回・第6回前半資料：混成軌道、σ/π、分子軌道法、金属結合、共鳴、分子間力。",
    "body": "\n<div class=\"chapter-title\"><span>05</span><div><h2>化学結合②・③：混成軌道、σ/π結合、共鳴、分子間力</h2><p>有機分子・ベンゼン・水素結合がメイン。表で覚えると一気に点が取れます。</p></div></div>\n<section class=\"card\">\n  <h3>炭素の混成軌道</h3>\n  <table><thead><tr><th>混成</th><th>代表分子</th><th>形</th><th>角度</th><th>C-C結合</th><th>σ/π</th></tr></thead><tbody>\n    <tr><td>sp<sup>3</sup></td><td>CH<sub>4</sub>, C<sub>2</sub>H<sub>6</sub></td><td>正四面体</td><td>109.5°</td><td>単結合</td><td>σ1, π0</td></tr>\n    <tr><td>sp<sup>2</sup></td><td>C<sub>2</sub>H<sub>4</sub>, C<sub>6</sub>H<sub>6</sub></td><td>平面三角形</td><td>120°</td><td>二重結合/共鳴</td><td>σ1, π1</td></tr>\n    <tr><td>sp</td><td>C<sub>2</sub>H<sub>2</sub>, HCN</td><td>直線</td><td>180°</td><td>三重結合</td><td>σ1, π2</td></tr>\n  </tbody></table>\n  <div class=\"callout\"><strong>暗記：</strong>単結合=σだけ。二重結合=σ1+π1。三重結合=σ1+π2。</div>\n</section>\n<div class=\"grid two\">\n  <section class=\"card\">\n    <h3>σ結合とπ結合</h3>\n    <p>σ結合は結合軸方向に正面から重なる結合で、単結合の本体。π結合はp軌道の横方向の重なりで、二重結合・三重結合の追加分。π結合は回転を制限し、分子の平面性に関係する。</p>\n  </section>\n  <section class=\"card\">\n    <h3>分子軌道法</h3>\n    <p>原子軌道が組み合わさって、低エネルギーの結合性分子軌道と高エネルギーの反結合性分子軌道ができる。H<sub>2</sub>は結合性軌道が埋まり安定化するが、He<sub>2</sub>は結合性と反結合性がともに埋まり、全体として安定化しにくい。</p>\n  </section>\n</div>\n<section class=\"card\">\n  <h3>金属結合とバンド構造</h3>\n  <p>多数の原子が集まると分子軌道のエネルギー準位が非常に密になり、エネルギーバンドになる。金属はフェルミ準位近傍に動ける電子があり導電性を示す。半導体は価電子帯と伝導帯の間にバンドギャップがあり、ドーピングでn型・p型を作る。</p>\n</section>\n<section class=\"card\">\n  <h3>共鳴構造</h3>\n  <p>ベンゼンC<sub>6</sub>H<sub>6</sub>は炭素がsp<sup>2</sup>混成、平面六角形、結合角120°。単結合と二重結合が固定されているのではなく、π電子が非局在化した共鳴構造として理解する。C-C結合距離が単結合と二重結合の中間になることが証拠になる。</p>\n</section>\n<section class=\"card\">\n  <h3>分子間力</h3>\n  <div class=\"grid three\">\n    <div class=\"rule\"><b>分散力</b><p>無極性分子にも働く瞬間的な分極による弱い力。</p></div>\n    <div class=\"rule\"><b>双極子-双極子相互作用</b><p>極性分子同士の引力。</p></div>\n    <div class=\"rule\"><b>水素結合</b><p>HがO, N, Fに結合しているときに強く働く。H<sub>2</sub>O, NH<sub>3</sub>, HFが代表。</p></div>\n  </div>\n</section>\n"
  },
  {
    "id": "ch6",
    "title": "第6回 化学反応と量的関係",
    "tag": "実ファイル",
    "source": "第6回資料：化学量、物質量、濃度、化学反応式、化学量論。",
    "body": "\n<div class=\"chapter-title\"><span>06</span><div><h2>化学反応と量的関係</h2><p>計算問題は「式を書く→molにする→係数比→単位付きで戻す」が鉄則です。暗算で済ませると減点されやすい領域です。</p></div></div>\n<section class=\"card\">\n  <h3>原子量・分子量・式量</h3>\n  <p>原子量は相対質量であり、同位体の存在比を反映した平均値。分子は分子量、イオン結晶や金属結晶のように組成式で表すものは式量を使う。</p>\n  <div class=\"formula-cards\"><div><b>H<sub>2</sub>O</b><span>1.008×2 + 16.00 = 18.016</span></div><div><b>Mg(OH)<sub>2</sub></b><span>24.31 + (16.00+1.008)×2 = 58.326</span></div><div><b>C<sub>3</sub>H<sub>8</sub></b><span>12.01×3 + 1.008×8 = 44.094</span></div></div>\n</section>\n<section class=\"card\">\n  <h3>molの変換</h3>\n  <table><thead><tr><th>変換</th><th>式</th><th>使う量</th></tr></thead><tbody>\n    <tr><td>質量g → mol</td><td>n = m / M</td><td>モル質量 g/mol</td></tr>\n    <tr><td>mol → 質量g</td><td>m = nM</td><td>モル質量 g/mol</td></tr>\n    <tr><td>個数 → mol</td><td>n = N / N<sub>A</sub></td><td>6.02×10<sup>23</sup> 個/mol</td></tr>\n    <tr><td>mol → 個数</td><td>N = nN<sub>A</sub></td><td>アボガドロ定数</td></tr>\n    <tr><td>気体体積L → mol</td><td>n = V / 22.4</td><td>標準状態</td></tr>\n    <tr><td>mol → 気体体積L</td><td>V = 22.4n</td><td>標準状態</td></tr>\n  </tbody></table>\n</section>\n<section class=\"card\">\n  <h3>濃度</h3>\n  <table><thead><tr><th>名称</th><th>式</th><th>単位</th></tr></thead><tbody>\n    <tr><td>質量パーセント濃度</td><td>溶質の質量 / 溶液の質量 ×100</td><td>%</td></tr>\n    <tr><td>モル濃度</td><td>溶質の物質量 / 溶液の体積</td><td>mol/L</td></tr>\n    <tr><td>質量モル濃度</td><td>溶質の物質量 / 溶媒の質量</td><td>mol/kg</td></tr>\n  </tbody></table>\n</section>\n<section class=\"card\">\n  <h3>反応式の作り方</h3>\n  <ol class=\"steps\"><li>反応物・生成物を化学式で表す。</li><li>矢印の左右に並べる。</li><li>係数を付けて、左右の原子数を一致させる。</li><li>分数が出たら全体に掛けて最小整数比にする。</li></ol>\n  <div class=\"example-box\"><b>例：プロパン完全燃焼</b><p>C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> → 3CO<sub>2</sub> + 4H<sub>2</sub>O</p></div>\n  <div class=\"example-box\"><b>例：アンモニア酸化</b><p>4NH<sub>3</sub> + 5O<sub>2</sub> → 4NO + 6H<sub>2</sub>O</p></div>\n</section>\n<section class=\"card\">\n  <h3>量的関係の標準解法</h3>\n  <p>係数比は分子数比であり、mol比でもある。質量比そのものではない。必ずmolに変換してから係数比を使う。</p>\n  <div class=\"flow\"><span>反応式</span><span>与えられた質量をmolへ</span><span>係数比で目的物のmolへ</span><span>目的物の質量へ</span><span>有効数字で答える</span></div>\n  <div class=\"callout danger\"><strong>減点されにくい書き方：</strong>原子量は4桁、割り算は分数、単位を式中に入れる。最終答えは計算式とは別に書く。</div>\n</section>\n"
  }
];
const questionBank = [
  {
    "id": "Q001",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "水 H₂O の分類として正しいものはどれか。",
    "options": [
      "混合物",
      "単体",
      "化合物",
      "元素"
    ],
    "correct": [
      2
    ],
    "explanation": "水は1種類の純物質で、HとOという複数元素からなるため化合物。"
  },
  {
    "id": "Q002",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "空気の分類として最も適切なものはどれか。",
    "options": [
      "単体",
      "化合物",
      "混合物",
      "元素"
    ],
    "correct": [
      2
    ],
    "explanation": "空気はN₂, O₂, CO₂など複数の成分からなる混合物。"
  },
  {
    "id": "Q003",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "鉄 Fe の単体に関する説明として正しいものはどれか。",
    "options": [
      "複数元素からなる化合物",
      "1種類の元素からなる純物質",
      "混合物",
      "分子式でしか表せない"
    ],
    "correct": [
      1
    ],
    "explanation": "Feは鉄元素のみからなる単体。"
  },
  {
    "id": "Q004",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "O₂ と O₃ の関係として正しいものはどれか。",
    "options": [
      "同位体",
      "同素体",
      "イオン",
      "混合物"
    ],
    "correct": [
      1
    ],
    "explanation": "同じ元素Oからなる単体で構造が異なるので同素体。"
  },
  {
    "id": "Q005",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "「水は水素と酸素からできている」の水素・酸素は何を意味するか。",
    "options": [
      "単体",
      "元素",
      "混合物",
      "イオン"
    ],
    "correct": [
      1
    ],
    "explanation": "化合物の構成成分を言う場合は元素の意味。"
  },
  {
    "id": "Q006",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "multi",
    "question": "¹⁴N について正しいものをすべて選べ。",
    "options": [
      "質量数は14",
      "原子番号は14",
      "陽子数は7",
      "中性子数は7",
      "中性原子なら電子数は7"
    ],
    "correct": [
      0,
      2,
      3,
      4
    ],
    "explanation": "窒素Nの原子番号は7。質量数14なので中性子数は14-7=7。"
  },
  {
    "id": "Q007",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "⁶Li に含まれる陽子・中性子・電子の数の組合せはどれか。",
    "options": [
      "3,3,3",
      "3,6,3",
      "6,3,6",
      "3,3,6"
    ],
    "correct": [
      0
    ],
    "explanation": "Liの原子番号は3。質量数6なので中性子は3。中性原子なら電子も3。"
  },
  {
    "id": "Q008",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "Mg 原子が閉殻構造に近づくとき形成しやすいイオンはどれか。",
    "options": [
      "Mg⁺",
      "Mg²⁺",
      "Mg⁻",
      "Mg²⁻"
    ],
    "correct": [
      1
    ],
    "explanation": "MgはK(2)L(8)M(2)。2個放出してMg²⁺になるとNe型。"
  },
  {
    "id": "Q009",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "F 原子が閉殻構造に近づくとき形成しやすいイオンはどれか。",
    "options": [
      "F⁺",
      "F²⁺",
      "F⁻",
      "F²⁻"
    ],
    "correct": [
      2
    ],
    "explanation": "FはK(2)L(7)。電子を1個受け取ってF⁻。"
  },
  {
    "id": "Q010",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "S 原子が形成しやすい単原子イオンはどれか。",
    "options": [
      "S⁺",
      "S²⁺",
      "S⁻",
      "S²⁻"
    ],
    "correct": [
      3
    ],
    "explanation": "Sは16族で価電子6。2個受け取ってS²⁻になりやすい。"
  },
  {
    "id": "Q011",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "酸化物イオン O²⁻ とナトリウムイオン Na⁺ からなるイオン結晶の組成式はどれか。",
    "options": [
      "NaO",
      "Na₂O",
      "NaO₂",
      "Na₂O₂"
    ],
    "correct": [
      1
    ],
    "explanation": "電荷を0にするにはNa⁺が2個とO²⁻が1個でNa₂O。"
  },
  {
    "id": "Q012",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "Ca²⁺ と SO₄²⁻ からなる塩の組成式はどれか。",
    "options": [
      "CaSO₄",
      "Ca₂SO₄",
      "Ca(SO₄)₂",
      "Ca₂(SO₄)₃"
    ],
    "correct": [
      0
    ],
    "explanation": "2+と2-なので1:1。"
  },
  {
    "id": "Q013",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "Al³⁺ と OH⁻ からなる化合物の組成式はどれか。",
    "options": [
      "AlOH",
      "Al(OH)₂",
      "Al(OH)₃",
      "Al₃OH"
    ],
    "correct": [
      2
    ],
    "explanation": "OH⁻が3個でAl³⁺を中和する。"
  },
  {
    "id": "Q014",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "NH₄⁺ と PO₄³⁻ からなる塩の組成式はどれか。",
    "options": [
      "NH₄PO₄",
      "(NH₄)₂PO₄",
      "(NH₄)₃PO₄",
      "NH₄(PO₄)₃"
    ],
    "correct": [
      2
    ],
    "explanation": "NH₄⁺が3個でPO₄³⁻を中和する。"
  },
  {
    "id": "Q015",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "硝酸イオンの式はどれか。",
    "options": [
      "NO₂⁻",
      "NO₃⁻",
      "NH₄⁺",
      "SO₄²⁻"
    ],
    "correct": [
      1
    ],
    "explanation": "硝酸イオンはNO₃⁻。"
  },
  {
    "id": "Q016",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "硫酸イオンの式はどれか。",
    "options": [
      "SO₃²⁻",
      "SO₄²⁻",
      "S²⁻",
      "HSO₄⁻だけ"
    ],
    "correct": [
      1
    ],
    "explanation": "硫酸イオンはSO₄²⁻。"
  },
  {
    "id": "Q017",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "オキソニウムイオンの式はどれか。",
    "options": [
      "OH⁻",
      "H₃O⁺",
      "NH₄⁺",
      "HCO₃⁻"
    ],
    "correct": [
      1
    ],
    "explanation": "オキソニウムイオンはH₃O⁺。"
  },
  {
    "id": "Q018",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "n=3の電子殻の最大収容電子数はいくつか。",
    "options": [
      "2",
      "8",
      "18",
      "32"
    ],
    "correct": [
      2
    ],
    "explanation": "電子殻の最大収容数は2n²。n=3なら18。"
  },
  {
    "id": "Q019",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "質量数を表す式として正しいものはどれか。",
    "options": [
      "陽子数+電子数",
      "陽子数+中性子数",
      "中性子数+電子数",
      "原子番号+電荷"
    ],
    "correct": [
      1
    ],
    "explanation": "質量数は原子核にある陽子数と中性子数の和。"
  },
  {
    "id": "Q020",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "中性原子で必ず等しい数はどれか。",
    "options": [
      "陽子数と中性子数",
      "陽子数と電子数",
      "中性子数と電子数",
      "質量数と電子数"
    ],
    "correct": [
      1
    ],
    "explanation": "中性原子は電荷が0なので陽子数=電子数。"
  },
  {
    "id": "Q021",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "Fe²⁺について正しいものはどれか。",
    "options": [
      "Fe原子より電子が2個多い",
      "Fe原子より電子が2個少ない",
      "陽子が2個少ない",
      "中性子が2個少ない"
    ],
    "correct": [
      1
    ],
    "explanation": "陽イオンは電子を失った状態。Fe²⁺は電子が2個少ない。"
  },
  {
    "id": "Q022",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "塩酸の分類として適切なものはどれか。",
    "options": [
      "単体",
      "化合物",
      "混合物",
      "元素"
    ],
    "correct": [
      2
    ],
    "explanation": "塩酸はHClの水溶液なので混合物。HCl自体は化合物。"
  },
  {
    "id": "Q023",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "単原子分子の例はどれか。",
    "options": [
      "H₂",
      "N₂",
      "Ne",
      "CO₂"
    ],
    "correct": [
      2
    ],
    "explanation": "希ガスのNeは単原子分子として扱う。"
  },
  {
    "id": "Q024",
    "chapter": "ch1",
    "difficulty": "standard",
    "type": "single",
    "question": "化学式という語の説明として最も適切なものはどれか。",
    "options": [
      "物質を元素記号で表したもの",
      "質量数だけを表すもの",
      "電子殻だけを表すもの",
      "混合物の割合だけを表すもの"
    ],
    "correct": [
      0
    ],
    "explanation": "化学式は物質を元素記号で表す記法。"
  },
  {
    "id": "Q025",
    "chapter": "ch1",
    "difficulty": "challenge",
    "type": "single",
    "question": "Ca²⁺, Al³⁺, OH⁻, PO₄³⁻ のうち、Al³⁺とPO₄³⁻からなる塩の組成式はどれか。",
    "options": [
      "AlPO₄",
      "Al₃PO₄",
      "Al(PO₄)₃",
      "Al₂(PO₄)₃"
    ],
    "correct": [
      0
    ],
    "explanation": "3+と3-なので1:1でAlPO₄。"
  },
  {
    "id": "Q026",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "原子構造モデルの発表順として最も適切なものはどれか。",
    "options": [
      "ラザフォード→トムソン→ボーア",
      "トムソン→ラザフォード→ボーア",
      "ボーア→トムソン→ラザフォード",
      "トムソン→ボーア→ラザフォード"
    ],
    "correct": [
      1
    ],
    "explanation": "講義の理解度チェックではトムソン→ラザフォード→ボーアの順。"
  },
  {
    "id": "Q027",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "電子の波動性を提唱した科学者は誰か。",
    "options": [
      "シュレーディンガー",
      "トムソン",
      "ボーア",
      "ド・ブロイ"
    ],
    "correct": [
      3
    ],
    "explanation": "電子の波動性はド・ブロイ。"
  },
  {
    "id": "Q028",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "波動関数の二乗が表すものはどれか。",
    "options": [
      "電子の質量",
      "電子の存在確率",
      "原子番号",
      "電気陰性度"
    ],
    "correct": [
      1
    ],
    "explanation": "波動関数の二乗は電子の存在確率に対応。"
  },
  {
    "id": "Q029",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "主量子数 n の説明として正しいものはどれか。",
    "options": [
      "軌道の向き",
      "殻や大まかなエネルギー",
      "スピンの向き",
      "元素の種類"
    ],
    "correct": [
      1
    ],
    "explanation": "nは主量子数で殻・エネルギーに関係。"
  },
  {
    "id": "Q030",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "副量子数 l の範囲として正しいものはどれか。",
    "options": [
      "0〜n-1",
      "1〜n",
      "-l〜+l",
      "常に0だけ"
    ],
    "correct": [
      0
    ],
    "explanation": "lは0以上n-1以下。"
  },
  {
    "id": "Q031",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "磁気量子数 m の個数はどれか。",
    "options": [
      "n²個",
      "2n個",
      "2l+1個",
      "l個"
    ],
    "correct": [
      2
    ],
    "explanation": "mは-lから+lまでなので2l+1個。"
  },
  {
    "id": "Q032",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "l=1の軌道名はどれか。",
    "options": [
      "s",
      "p",
      "d",
      "f"
    ],
    "correct": [
      1
    ],
    "explanation": "l=0がs、1がp、2がd、3がf。"
  },
  {
    "id": "Q033",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "multi",
    "question": "存在しない原子軌道をすべて選べ。",
    "options": [
      "1p",
      "2p",
      "3p",
      "3f",
      "4f"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "1pはn=1でl=1が不可。3fはn=3でl=3が不可。"
  },
  {
    "id": "Q034",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "p軌道の最大収容電子数はどれか。",
    "options": [
      "2",
      "6",
      "10",
      "14"
    ],
    "correct": [
      1
    ],
    "explanation": "p軌道は3つの軌道×2電子=6電子。"
  },
  {
    "id": "Q035",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "d軌道の最大収容電子数はどれか。",
    "options": [
      "2",
      "6",
      "10",
      "14"
    ],
    "correct": [
      2
    ],
    "explanation": "d軌道は5つの軌道×2電子=10電子。"
  },
  {
    "id": "Q036",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "single",
    "question": "Cの電子配置として正しいものはどれか。",
    "options": [
      "1s⁶",
      "1s² 2s⁴",
      "1s² 2s² 2p²",
      "1s² 2s² 3s²"
    ],
    "correct": [
      2
    ],
    "explanation": "炭素はZ=6。1s² 2s² 2p²。"
  },
  {
    "id": "Q037",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "single",
    "question": "Kの電子配置として正しいものはどれか。",
    "options": [
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
      "1s² 2s⁸ 2p⁹",
      "[Ne]3s²3p⁷"
    ],
    "correct": [
      1
    ],
    "explanation": "19Kでは4sが3dより先に入る。"
  },
  {
    "id": "Q038",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "single",
    "question": "パウリの排他原理の説明として正しいものはどれか。",
    "options": [
      "同じ軌道に同じスピンの電子が2個入る",
      "同一軌道の2電子はスピンが逆向き",
      "電子は必ず外側から入る",
      "p軌道は最大2個"
    ],
    "correct": [
      1
    ],
    "explanation": "1つの軌道に入る2電子はスピン量子数が異なる。"
  },
  {
    "id": "Q039",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "single",
    "question": "フントの規則として正しいものはどれか。",
    "options": [
      "同じエネルギーの軌道にはまず1個ずつ入る",
      "低い軌道を飛ばして高い軌道に入る",
      "同一軌道に3個入る",
      "陽子と電子が対になる"
    ],
    "correct": [
      0
    ],
    "explanation": "縮退軌道にはまず1個ずつ平行スピンで入る。"
  },
  {
    "id": "Q040",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "single",
    "question": "Feの基礎的な電子配置として正しいものはどれか。",
    "options": [
      "[Ar]3d⁶4s²",
      "[Ar]3d⁸",
      "[Ne]3s²3p⁶",
      "[Ar]4s¹"
    ],
    "correct": [
      0
    ],
    "explanation": "FeはZ=26。[Ar]3d⁶4s²。"
  },
  {
    "id": "Q041",
    "chapter": "ch2",
    "difficulty": "challenge",
    "type": "single",
    "question": "Feの3d⁶における不対電子数として講義資料の扱いに合うものはどれか。",
    "options": [
      "0個",
      "2個",
      "4個",
      "6個"
    ],
    "correct": [
      2
    ],
    "explanation": "3d⁶はフントの規則により不対電子4個。"
  },
  {
    "id": "Q042",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "single",
    "question": "Niの電子配置と不対電子数の組合せとして適切なものはどれか。",
    "options": [
      "[Ar]3d⁸4s², 2個",
      "[Ar]3d¹⁰, 0個",
      "[Ne]3s²3p⁶, 8個",
      "[Ar]4s², 0個"
    ],
    "correct": [
      0
    ],
    "explanation": "資料の演習ではNiは[Ar]3d⁸4s²、不対電子2個。"
  },
  {
    "id": "Q043",
    "chapter": "ch2",
    "difficulty": "challenge",
    "type": "single",
    "question": "Ni²⁺で先に抜ける電子として適切なのはどれか。",
    "options": [
      "3d電子",
      "4s電子",
      "1s電子",
      "2p電子"
    ],
    "correct": [
      1
    ],
    "explanation": "遷移金属イオンでは4s電子から抜ける扱い。"
  },
  {
    "id": "Q044",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "single",
    "question": "4s軌道が3d軌道より低エネルギーになりやすい理由として適切なものはどれか。",
    "options": [
      "4s電子は核近傍に貫入し遮蔽を受けにくい",
      "4sは電子を持てない",
      "3dは必ず存在しない",
      "s軌道は常に最高エネルギー"
    ],
    "correct": [
      0
    ],
    "explanation": "s電子は貫入性が大きく有効核電荷を強く感じる。"
  },
  {
    "id": "Q045",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "有効核電荷 Zeff の概念として近いものはどれか。",
    "options": [
      "Z+遮蔽",
      "Z-遮蔽",
      "質量数-電子数",
      "中性子数+電子数"
    ],
    "correct": [
      1
    ],
    "explanation": "講義ではZeff = Z - 電子による遮蔽として説明。"
  },
  {
    "id": "Q046",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "single",
    "question": "電子配置で省略形に用いる元素として一般的なものはどれか。",
    "options": [
      "1族元素",
      "18族元素",
      "17族元素",
      "遷移元素だけ"
    ],
    "correct": [
      1
    ],
    "explanation": "希ガス配置でまとめるのが一般的。例：[Ar]。"
  },
  {
    "id": "Q047",
    "chapter": "ch2",
    "difficulty": "challenge",
    "type": "single",
    "question": "n=5で存在する副量子数 l はどれか。",
    "options": [
      "0,1,2,3,4",
      "1,2,3,4,5",
      "0だけ",
      "-5〜+5"
    ],
    "correct": [
      0
    ],
    "explanation": "lは0からn-1までなので0〜4。"
  },
  {
    "id": "Q048",
    "chapter": "ch2",
    "difficulty": "challenge",
    "type": "single",
    "question": "n=5, l=2 の磁気量子数 m の候補として正しい集合はどれか。",
    "options": [
      "-2,-1,0,+1,+2",
      "0,1,2",
      "-5〜+5",
      "+2のみ"
    ],
    "correct": [
      0
    ],
    "explanation": "l=2ならm=-2,-1,0,+1,+2。"
  },
  {
    "id": "Q049",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "single",
    "question": "ArがM殻18個まで入っていないのに安定とされる理由として最も適切なものはどれか。",
    "options": [
      "3sと3pが満たされ希ガス型になるから",
      "3dが満たされているから",
      "電子が全くないから",
      "M殻は最大8個だから"
    ],
    "correct": [
      0
    ],
    "explanation": "Arは3s²3p⁶の閉殻として扱う。"
  },
  {
    "id": "Q050",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "原子軌道を使う必要が出る理由として適切なものはどれか。",
    "options": [
      "電子殻だけではK以降の安定配置を説明しにくい",
      "電子殻は存在しない",
      "同位体を数えられない",
      "元素記号を覚えなくてよい"
    ],
    "correct": [
      0
    ],
    "explanation": "K, Ca以降では4sと3dの順序などを説明するため原子軌道が必要。"
  },
  {
    "id": "Q051",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "single",
    "question": "周期表は主に何の順に並べた表か。",
    "options": [
      "質量数",
      "原子番号",
      "中性子数",
      "沸点"
    ],
    "correct": [
      1
    ],
    "explanation": "周期表は原子番号、すなわち陽子数順。"
  },
  {
    "id": "Q052",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "single",
    "question": "同族元素の性質が似る主な理由はどれか。",
    "options": [
      "同位体比が同じ",
      "最外殻電子配置が似る",
      "質量数が同じ",
      "中性子数が同じ"
    ],
    "correct": [
      1
    ],
    "explanation": "化学的性質は主に最外殻電子が支配する。"
  },
  {
    "id": "Q053",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "multi",
    "question": "sブロック元素をすべて選べ。",
    "options": [
      "H",
      "He",
      "B",
      "N",
      "Fe",
      "Br"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "第3回の理解度チェックに対応。HとHeはsブロック。"
  },
  {
    "id": "Q054",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "multi",
    "question": "pブロック元素をすべて選べ。",
    "options": [
      "H",
      "He",
      "Be",
      "C",
      "Zn",
      "Kr"
    ],
    "correct": [
      1,
      3,
      5
    ],
    "explanation": "Heは1s²だが周期表の右端でpブロック側に分類されることがある。C, Krはpブロック。"
  },
  {
    "id": "Q055",
    "chapter": "ch3",
    "difficulty": "standard",
    "type": "single",
    "question": "dブロック元素はどれか。",
    "options": [
      "H",
      "He",
      "Mg",
      "S",
      "Mn",
      "U"
    ],
    "correct": [
      4
    ],
    "explanation": "Mnはdブロック。Uはfブロック。"
  },
  {
    "id": "Q056",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "multi",
    "question": "遷移元素をすべて選べ。",
    "options": [
      "H",
      "C",
      "Cr",
      "K",
      "Fe",
      "Bi"
    ],
    "correct": [
      2,
      4
    ],
    "explanation": "資料の分類ではCr, Feが遷移元素。"
  },
  {
    "id": "Q057",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "multi",
    "question": "典型元素をすべて選べ。",
    "options": [
      "He",
      "Na",
      "Cu",
      "Zn",
      "Cs",
      "I"
    ],
    "correct": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "資料では典型元素を1,2,12〜18族として扱うのでZnも含める。"
  },
  {
    "id": "Q058",
    "chapter": "ch3",
    "difficulty": "standard",
    "type": "single",
    "question": "イオン化エネルギーの説明として正しいものはどれか。",
    "options": [
      "電子を受け取るとき放出されるエネルギー",
      "電子を1個取り去るためのエネルギー",
      "結合を切る熱量だけ",
      "中性子を外すエネルギー"
    ],
    "correct": [
      1
    ],
    "explanation": "IEは原子から電子を取り去り陽イオンにするためのエネルギー。"
  },
  {
    "id": "Q059",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "single",
    "question": "イオン化エネルギーが小さい元素の特徴はどれか。",
    "options": [
      "電子を放出しやすい",
      "陰イオンになりやすい",
      "希ガスである",
      "電子を絶対に失わない"
    ],
    "correct": [
      0
    ],
    "explanation": "IEが小さいほど陽イオンになりやすい。"
  },
  {
    "id": "Q060",
    "chapter": "ch3",
    "difficulty": "standard",
    "type": "single",
    "question": "次の中でイオン化エネルギーが最も大きいものとして適切なのはどれか。",
    "options": [
      "H",
      "He",
      "Na",
      "Cs"
    ],
    "correct": [
      1
    ],
    "explanation": "希ガスHeは非常にIEが大きい。"
  },
  {
    "id": "Q061",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "single",
    "question": "電子親和力の説明として正しいものはどれか。",
    "options": [
      "電子を受け取るときに放出されるエネルギー",
      "電子を取り去るエネルギー",
      "質量数の平均",
      "分子量の別名"
    ],
    "correct": [
      0
    ],
    "explanation": "EAは陰イオン形成時のエネルギー放出。"
  },
  {
    "id": "Q062",
    "chapter": "ch3",
    "difficulty": "standard",
    "type": "single",
    "question": "最も陰イオンになりやすいものとして適切なのはどれか。",
    "options": [
      "He",
      "K",
      "Mg",
      "Cl"
    ],
    "correct": [
      3
    ],
    "explanation": "Clはハロゲンで電子親和力が大きい。"
  },
  {
    "id": "Q063",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "single",
    "question": "18族元素の特徴として正しいものはどれか。",
    "options": [
      "非常に反応しやすい",
      "最外殻が閉殻で安定",
      "必ず1価陽イオン",
      "必ず2価陰イオン"
    ],
    "correct": [
      1
    ],
    "explanation": "希ガスは閉殻構造で化学的に安定。"
  },
  {
    "id": "Q064",
    "chapter": "ch3",
    "difficulty": "standard",
    "type": "single",
    "question": "NaがNa⁺になりやすい理由として正しいものはどれか。",
    "options": [
      "電子を1個失うと希ガス型に近づく",
      "電子を7個失うと安定",
      "電子を1個受け取ると安定",
      "陽子を失うと安定"
    ],
    "correct": [
      0
    ],
    "explanation": "Naは3s¹を失うとNe型の配置になる。"
  },
  {
    "id": "Q065",
    "chapter": "ch3",
    "difficulty": "standard",
    "type": "single",
    "question": "ClがCl⁻になりやすい理由として正しいものはどれか。",
    "options": [
      "電子を1個受け取るとAr型に近づく",
      "電子を7個失うと安定",
      "陽子を1個受け取る",
      "中性子を1個失う"
    ],
    "correct": [
      0
    ],
    "explanation": "Clは3s²3p⁵なので1個受け取ると3p⁶。"
  },
  {
    "id": "Q066",
    "chapter": "ch3",
    "difficulty": "standard",
    "type": "single",
    "question": "周期表の同一周期で右へ行くほど一般にどうなるか。",
    "options": [
      "原子番号が減る",
      "有効核電荷が増え電子を引きつけやすくなる",
      "すべて金属になる",
      "電子殻数が減る"
    ],
    "correct": [
      1
    ],
    "explanation": "同周期では電子殻は同じで核電荷が増えるため電子を引きつけやすい。"
  },
  {
    "id": "Q067",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "single",
    "question": "1族元素の代表的な名称はどれか。",
    "options": [
      "ハロゲン",
      "希ガス",
      "アルカリ金属",
      "アルカリ土類金属"
    ],
    "correct": [
      2
    ],
    "explanation": "1族はアルカリ金属（H除く）。"
  },
  {
    "id": "Q068",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "single",
    "question": "17族元素の代表的な名称はどれか。",
    "options": [
      "ハロゲン",
      "希ガス",
      "アルカリ金属",
      "遷移元素"
    ],
    "correct": [
      0
    ],
    "explanation": "17族はハロゲン。"
  },
  {
    "id": "Q069",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "single",
    "question": "2族元素の代表的な名称はどれか。",
    "options": [
      "アルカリ土類金属",
      "ハロゲン",
      "希ガス",
      "ランタノイド"
    ],
    "correct": [
      0
    ],
    "explanation": "2族はアルカリ土類金属。"
  },
  {
    "id": "Q070",
    "chapter": "ch3",
    "difficulty": "standard",
    "type": "single",
    "question": "価電子が7個の典型元素が形成しやすい単原子イオンはどれか。",
    "options": [
      "+1",
      "+2",
      "-1",
      "-2"
    ],
    "correct": [
      2
    ],
    "explanation": "17族は1個電子を受け取って-1になりやすい。"
  },
  {
    "id": "Q071",
    "chapter": "ch3",
    "difficulty": "standard",
    "type": "single",
    "question": "13族元素が形成しやすいイオンとして講義範囲で代表的なのはどれか。",
    "options": [
      "+3",
      "-3",
      "+1だけ",
      "-1だけ"
    ],
    "correct": [
      0
    ],
    "explanation": "Al³⁺などが代表。"
  },
  {
    "id": "Q072",
    "chapter": "ch3",
    "difficulty": "challenge",
    "type": "single",
    "question": "第2イオン化エネルギーとは何か。",
    "options": [
      "中性原子から最初の電子を取るエネルギー",
      "A⁺からさらに電子を取ってA²⁺にするエネルギー",
      "陰イオンが電子を受け取るエネルギー",
      "分子を2個にするエネルギー"
    ],
    "correct": [
      1
    ],
    "explanation": "第nイオン化エネルギーはn個目の電子を取り去るためのエネルギー。"
  },
  {
    "id": "Q073",
    "chapter": "ch3",
    "difficulty": "challenge",
    "type": "single",
    "question": "Alの第1,第2,第3イオン化エネルギーが順に大きくなる理由として適切なのはどれか。",
    "options": [
      "電子を取るほど正電荷が大きくなり残りの電子を離しにくい",
      "電子数が増えるから",
      "中性子が増えるから",
      "原子番号が変わるから"
    ],
    "correct": [
      0
    ],
    "explanation": "陽イオンの正電荷が大きくなり電子を取りにくくなる。"
  },
  {
    "id": "Q074",
    "chapter": "ch3",
    "difficulty": "standard",
    "type": "single",
    "question": "最後に電子が入る軌道に注目する主な目的はどれか。",
    "options": [
      "元素をブロック分けするため",
      "同位体を区別するためだけ",
      "質量数を測るため",
      "分子量を計算するため"
    ],
    "correct": [
      0
    ],
    "explanation": "s/p/d/fブロックの分類に使う。"
  },
  {
    "id": "Q075",
    "chapter": "ch3",
    "difficulty": "challenge",
    "type": "single",
    "question": "Krの外側の電子配置として希ガス型を示すものはどれか。",
    "options": [
      "4s²4p⁶",
      "4s²3d¹⁰4p⁶",
      "5s¹",
      "3s²3p⁶"
    ],
    "correct": [
      1
    ],
    "explanation": "Krは[Ar]3d¹⁰4s²4p⁶。最外殻は4s²4p⁶で閉殻。"
  },
  {
    "id": "Q076",
    "chapter": "ch4",
    "difficulty": "basic",
    "type": "single",
    "question": "イオン結合の典型的な組合せはどれか。",
    "options": [
      "金属+非金属",
      "非金属+非金属",
      "金属+金属だけ",
      "希ガス+希ガスだけ"
    ],
    "correct": [
      0
    ],
    "explanation": "イオン結合は金属陽イオンと非金属陰イオンの組合せが典型。"
  },
  {
    "id": "Q077",
    "chapter": "ch4",
    "difficulty": "basic",
    "type": "single",
    "question": "共有結合を作りやすい組合せはどれか。",
    "options": [
      "NaとCl",
      "CとO",
      "MgとO",
      "KとBr"
    ],
    "correct": [
      1
    ],
    "explanation": "非金属同士は共有結合を作りやすい。CとOは非金属。"
  },
  {
    "id": "Q078",
    "chapter": "ch4",
    "difficulty": "basic",
    "type": "single",
    "question": "NaClの結晶分類として正しいものはどれか。",
    "options": [
      "分子結晶",
      "イオン結晶",
      "金属結晶",
      "共有結晶"
    ],
    "correct": [
      1
    ],
    "explanation": "NaClはNa⁺とCl⁻からなるイオン結晶。"
  },
  {
    "id": "Q079",
    "chapter": "ch4",
    "difficulty": "basic",
    "type": "single",
    "question": "SiO₂の結晶分類として講義の扱いに合うものはどれか。",
    "options": [
      "分子結晶",
      "イオン結晶",
      "金属結晶",
      "共有結晶"
    ],
    "correct": [
      3
    ],
    "explanation": "SiO₂は共有結晶として扱う。"
  },
  {
    "id": "Q080",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "点電子式で点が表すものは何か。",
    "options": [
      "陽子",
      "価電子",
      "中性子",
      "質量数"
    ],
    "correct": [
      1
    ],
    "explanation": "点電子式は価電子を点で表す。"
  },
  {
    "id": "Q081",
    "chapter": "ch4",
    "difficulty": "basic",
    "type": "single",
    "question": "HClの結合として最も適切なのはどれか。",
    "options": [
      "単結合",
      "二重結合",
      "三重結合",
      "金属結合"
    ],
    "correct": [
      0
    ],
    "explanation": "HとClは1組の共有電子対で単結合。"
  },
  {
    "id": "Q082",
    "chapter": "ch4",
    "difficulty": "basic",
    "type": "single",
    "question": "N₂の結合として最も適切なのはどれか。",
    "options": [
      "単結合",
      "二重結合",
      "三重結合",
      "イオン結合"
    ],
    "correct": [
      2
    ],
    "explanation": "N₂はN≡Nの三重結合。"
  },
  {
    "id": "Q083",
    "chapter": "ch4",
    "difficulty": "basic",
    "type": "single",
    "question": "CO₂の構造式として適切なのはどれか。",
    "options": [
      "O-C-O（単結合2本）",
      "O=C=O",
      "C≡O-O",
      "O≡C≡O"
    ],
    "correct": [
      1
    ],
    "explanation": "CO₂はO=C=Oの二重結合2本で表す。"
  },
  {
    "id": "Q084",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "CH₄の分子形と角度の組合せとして正しいものはどれか。",
    "options": [
      "直線,180°",
      "平面三角形,120°",
      "正四面体,109.5°",
      "折れ線,104.5°"
    ],
    "correct": [
      2
    ],
    "explanation": "CH₄は中心Cの周囲に4電子対で正四面体。"
  },
  {
    "id": "Q085",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "NH₃の分子形として正しいものはどれか。",
    "options": [
      "正四面体",
      "三角錐",
      "折れ線",
      "直線"
    ],
    "correct": [
      1
    ],
    "explanation": "NH₃は4電子対のうち1つが非共有電子対なので三角錐。"
  },
  {
    "id": "Q086",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "H₂Oの分子形として正しいものはどれか。",
    "options": [
      "直線",
      "平面三角形",
      "折れ線",
      "正八面体"
    ],
    "correct": [
      2
    ],
    "explanation": "H₂Oは非共有電子対2組を持つため折れ線型。"
  },
  {
    "id": "Q087",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "CO₂が無極性分子になる主な理由はどれか。",
    "options": [
      "結合に極性がないから",
      "直線対称で双極子が打ち消すから",
      "非共有電子対が4組あるから",
      "イオン結合だから"
    ],
    "correct": [
      1
    ],
    "explanation": "C=O結合は極性を持つが、直線対称で全体は無極性。"
  },
  {
    "id": "Q088",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "H₂Oが極性分子になる理由として正しいものはどれか。",
    "options": [
      "直線構造だから",
      "折れ線型で双極子が打ち消されないから",
      "単体だから",
      "金属だから"
    ],
    "correct": [
      1
    ],
    "explanation": "H₂Oは折れ線型でO側に負、H側に正の偏りが残る。"
  },
  {
    "id": "Q089",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "HCNの分子形として正しいものはどれか。",
    "options": [
      "直線形",
      "折れ線形",
      "三角錐",
      "正四面体"
    ],
    "correct": [
      0
    ],
    "explanation": "中心C周りの電子対領域は2つで直線形。"
  },
  {
    "id": "Q090",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "NH₄⁺の分子形として正しいものはどれか。",
    "options": [
      "直線",
      "折れ線",
      "三角錐",
      "正四面体"
    ],
    "correct": [
      3
    ],
    "explanation": "NH₄⁺はN周りに4つのN-H結合で正四面体。"
  },
  {
    "id": "Q091",
    "chapter": "ch4",
    "difficulty": "challenge",
    "type": "single",
    "question": "中心原子の周りに3つの電子対領域があるときの基本形はどれか。",
    "options": [
      "直線",
      "平面三角形",
      "正四面体",
      "三角錐"
    ],
    "correct": [
      1
    ],
    "explanation": "3領域なら平面三角形。"
  },
  {
    "id": "Q092",
    "chapter": "ch4",
    "difficulty": "challenge",
    "type": "single",
    "question": "中心原子の周りに4電子対、そのうち非共有電子対が2つのときの分子形はどれか。",
    "options": [
      "正四面体",
      "三角錐",
      "折れ線",
      "直線"
    ],
    "correct": [
      2
    ],
    "explanation": "電子対配置は正四面体由来、分子形は折れ線。"
  },
  {
    "id": "Q093",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "CuOの結晶分類として適切なのはどれか。",
    "options": [
      "イオン結晶",
      "金属結晶",
      "分子結晶",
      "共有結晶だけ"
    ],
    "correct": [
      0
    ],
    "explanation": "資料の理解度チェックではCuOはイオン結晶として扱う。"
  },
  {
    "id": "Q094",
    "chapter": "ch4",
    "difficulty": "basic",
    "type": "single",
    "question": "Naの結晶分類として適切なのはどれか。",
    "options": [
      "イオン結晶",
      "金属結晶",
      "分子結晶",
      "共有結晶"
    ],
    "correct": [
      1
    ],
    "explanation": "Naは金属元素の単体なので金属結晶。"
  },
  {
    "id": "Q095",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "multi",
    "question": "H₂Oが持つものをすべて選べ。",
    "options": [
      "非共有電子対",
      "二重結合",
      "極性",
      "イオン結合"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "水はOに非共有電子対を持ち、折れ線型の極性分子。"
  },
  {
    "id": "Q096",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "multi",
    "question": "CO₂が持つものをすべて選べ。",
    "options": [
      "二重結合",
      "非共有電子対",
      "分子全体の極性",
      "金属結合"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "CO₂は二重結合を持ち、Oに非共有電子対があるが全体は無極性。"
  },
  {
    "id": "Q097",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "アンモニウムイオンとリン酸イオンからできる塩の名称はどれか。",
    "options": [
      "硝酸アンモニウム",
      "リン酸アンモニウム",
      "硫酸アンモニウム",
      "炭酸アンモニウム"
    ],
    "correct": [
      1
    ],
    "explanation": "(NH₄)₃PO₄はリン酸アンモニウム。"
  },
  {
    "id": "Q098",
    "chapter": "ch4",
    "difficulty": "challenge",
    "type": "single",
    "question": "Al³⁺とSO₄²⁻からなる塩の組成式はどれか。",
    "options": [
      "AlSO₄",
      "Al₂SO₄",
      "Al₂(SO₄)₃",
      "Al₃(SO₄)₂"
    ],
    "correct": [
      2
    ],
    "explanation": "最小公倍数6でAl³⁺が2個、SO₄²⁻が3個。"
  },
  {
    "id": "Q099",
    "chapter": "ch4",
    "difficulty": "basic",
    "type": "single",
    "question": "電気陰性度が最も大きい元素として通常扱われるものはどれか。",
    "options": [
      "H",
      "C",
      "F",
      "Cs"
    ],
    "correct": [
      2
    ],
    "explanation": "フッ素Fが最大。"
  },
  {
    "id": "Q100",
    "chapter": "ch4",
    "difficulty": "challenge",
    "type": "single",
    "question": "VSEPR法で単結合と二重結合の扱いとして適切なのはどれか。",
    "options": [
      "二重結合は電子対領域2つとして数える",
      "単結合も二重結合も中心周りの電子対領域1つとして数える",
      "二重結合は数えない",
      "単結合は数えない"
    ],
    "correct": [
      1
    ],
    "explanation": "VSEPRでは多重結合も1つの電子対領域として扱う。"
  },
  {
    "id": "Q101",
    "chapter": "ch5",
    "difficulty": "basic",
    "type": "single",
    "question": "メタンCH₄のC原子の混成軌道はどれか。",
    "options": [
      "sp",
      "sp²",
      "sp³",
      "混成しない"
    ],
    "correct": [
      2
    ],
    "explanation": "CH₄のCはsp³混成。"
  },
  {
    "id": "Q102",
    "chapter": "ch5",
    "difficulty": "basic",
    "type": "single",
    "question": "エチレンC₂H₄のC原子の混成軌道はどれか。",
    "options": [
      "sp",
      "sp²",
      "sp³",
      "dsp²"
    ],
    "correct": [
      1
    ],
    "explanation": "エチレンのCはsp²混成。"
  },
  {
    "id": "Q103",
    "chapter": "ch5",
    "difficulty": "basic",
    "type": "single",
    "question": "アセチレンC₂H₂のC原子の混成軌道はどれか。",
    "options": [
      "sp",
      "sp²",
      "sp³",
      "d²sp³"
    ],
    "correct": [
      0
    ],
    "explanation": "アセチレンのCはsp混成。"
  },
  {
    "id": "Q104",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "エタンC₂H₆のC-C結合に含まれるπ結合の本数はどれか。",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct": [
      0
    ],
    "explanation": "単結合はσ結合1本のみ。"
  },
  {
    "id": "Q105",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "エチレンC₂H₄のC=C結合に含まれるσ結合とπ結合の本数はどれか。",
    "options": [
      "σ1,π0",
      "σ1,π1",
      "σ2,π0",
      "σ0,π2"
    ],
    "correct": [
      1
    ],
    "explanation": "二重結合はσ1+π1。"
  },
  {
    "id": "Q106",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "アセチレンC₂H₂のC≡C結合に含まれるσ結合とπ結合の本数はどれか。",
    "options": [
      "σ1,π2",
      "σ2,π1",
      "σ3,π0",
      "σ0,π3"
    ],
    "correct": [
      0
    ],
    "explanation": "三重結合はσ1+π2。"
  },
  {
    "id": "Q107",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "sp³, sp², spの代表的な結合角の組合せはどれか。",
    "options": [
      "180,120,109.5",
      "109.5,120,180",
      "120,109.5,180",
      "90,120,180"
    ],
    "correct": [
      1
    ],
    "explanation": "sp³は109.5°、sp²は120°、spは180°。"
  },
  {
    "id": "Q108",
    "chapter": "ch5",
    "difficulty": "basic",
    "type": "single",
    "question": "σ結合の説明として適切なのはどれか。",
    "options": [
      "結合軸方向の重なり",
      "p軌道の横方向だけの重なり",
      "水素結合の別名",
      "金属結合だけ"
    ],
    "correct": [
      0
    ],
    "explanation": "σ結合は結合軸に沿った正面衝突的な重なり。"
  },
  {
    "id": "Q109",
    "chapter": "ch5",
    "difficulty": "basic",
    "type": "single",
    "question": "π結合の説明として適切なのはどれか。",
    "options": [
      "結合軸方向の正面衝突",
      "p軌道の横方向の重なり",
      "イオン結合のこと",
      "単結合だけにある"
    ],
    "correct": [
      1
    ],
    "explanation": "π結合はp軌道同士の横方向重なり。"
  },
  {
    "id": "Q110",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "ベンゼンC₆H₆の炭素原子の混成軌道はどれか。",
    "options": [
      "sp",
      "sp²",
      "sp³",
      "混成軌道ではない"
    ],
    "correct": [
      1
    ],
    "explanation": "ベンゼンのCは平面三角形でsp²。"
  },
  {
    "id": "Q111",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "multi",
    "question": "ベンゼン分子について正しいものをすべて選べ。",
    "options": [
      "分子式はC₆H₆",
      "平面構造である",
      "共鳴構造をもつ",
      "炭素はsp³混成",
      "炭素が六角形に結合"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "explanation": "ベンゼンはsp²炭素の平面六角形で共鳴構造を持つ。"
  },
  {
    "id": "Q112",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "ベンゼンのC-C結合距離が単結合と二重結合の中間になる理由はどれか。",
    "options": [
      "イオン結合だから",
      "π電子が非局在化しているから",
      "すべて三重結合だから",
      "水素結合があるから"
    ],
    "correct": [
      1
    ],
    "explanation": "共鳴により単結合/二重結合が固定されず中間的になる。"
  },
  {
    "id": "Q113",
    "chapter": "ch5",
    "difficulty": "basic",
    "type": "single",
    "question": "H₂分子が安定に形成される分子軌道法の説明として適切なのはどれか。",
    "options": [
      "反結合性軌道だけが埋まる",
      "結合性分子軌道が埋まり安定化する",
      "電子がなくなる",
      "He型になるから必ず不安定"
    ],
    "correct": [
      1
    ],
    "explanation": "H₂は結合性σ軌道に電子が入り安定化する。"
  },
  {
    "id": "Q114",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "He₂が通常安定化しにくい理由として適切なのはどれか。",
    "options": [
      "結合性と反結合性がともに埋まり安定化が相殺される",
      "電子が1個しかない",
      "Heは金属だから",
      "Heはp軌道だけ使う"
    ],
    "correct": [
      0
    ],
    "explanation": "He₂では結合性・反結合性軌道の占有が相殺。"
  },
  {
    "id": "Q115",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "金属の導電性をバンド構造で説明するなら、重要なのはどれか。",
    "options": [
      "フェルミ準位近傍に動ける電子がある",
      "すべての電子が原子核に固定",
      "バンドギャップが無限大",
      "分子が単独で回転する"
    ],
    "correct": [
      0
    ],
    "explanation": "電流を流すのはフェルミ準位近傍の電子。"
  },
  {
    "id": "Q116",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "半導体の説明として適切なのはどれか。",
    "options": [
      "価電子帯と伝導帯の間にバンドギャップがある",
      "常に完全な金属",
      "必ず水素結合だけでできる",
      "電子を全く持たない"
    ],
    "correct": [
      0
    ],
    "explanation": "半導体は有限のバンドギャップを持つ。"
  },
  {
    "id": "Q117",
    "chapter": "ch5",
    "difficulty": "basic",
    "type": "multi",
    "question": "水素結合を形成しやすい物質をすべて選べ。",
    "options": [
      "H₂O",
      "NaCl",
      "H₂",
      "NH₃",
      "Ne",
      "HF",
      "HCl",
      "CO₂"
    ],
    "correct": [
      0,
      3,
      5
    ],
    "explanation": "HがO,N,Fに結合しているH₂O,NH₃,HFが代表。"
  },
  {
    "id": "Q118",
    "chapter": "ch5",
    "difficulty": "basic",
    "type": "single",
    "question": "ファンデルワールス力に含まれるものはどれか。",
    "options": [
      "分散力",
      "原子核力",
      "共有結合だけ",
      "質量数"
    ],
    "correct": [
      0
    ],
    "explanation": "分散力はファンデルワールス力の一種。"
  },
  {
    "id": "Q119",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "multi",
    "question": "無極性分子をすべて選べ。",
    "options": [
      "CH₄",
      "H₂",
      "C₂H₄",
      "C₂H₂",
      "NH₃",
      "H₂O",
      "CO₂",
      "HCl"
    ],
    "correct": [
      0,
      1,
      2,
      3,
      6
    ],
    "explanation": "対称性の高いCH₄, C₂H₄, C₂H₂, CO₂や同核二原子H₂は無極性。"
  },
  {
    "id": "Q120",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "NH₃とH₂Oが極性分子である主な理由はどれか。",
    "options": [
      "非対称な形で双極子が残る",
      "すべての結合が金属結合",
      "分子式が同じ",
      "原子量が0"
    ],
    "correct": [
      0
    ],
    "explanation": "三角錐・折れ線のため双極子が打ち消されない。"
  },
  {
    "id": "Q121",
    "chapter": "ch5",
    "difficulty": "challenge",
    "type": "single",
    "question": "C₂H₄の分子が平面的になりやすい理由として適切なのはどれか。",
    "options": [
      "sp²混成平面とπ結合が関係する",
      "sp³だけなので自由回転",
      "イオン結晶だから",
      "水素結合が強いから"
    ],
    "correct": [
      0
    ],
    "explanation": "sp²混成の平面とp軌道のπ結合が平面性を作る。"
  },
  {
    "id": "Q122",
    "chapter": "ch5",
    "difficulty": "challenge",
    "type": "single",
    "question": "C₂H₂の直線性を説明する混成軌道はどれか。",
    "options": [
      "sp",
      "sp²",
      "sp³",
      "dsp³"
    ],
    "correct": [
      0
    ],
    "explanation": "sp混成は直線形、180°。"
  },
  {
    "id": "Q123",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "結合の強さ・回転制限に大きく関係する追加結合はどれか。",
    "options": [
      "π結合",
      "単なる分散力",
      "中性子結合",
      "イオン半径"
    ],
    "correct": [
      0
    ],
    "explanation": "二重/三重結合のπ結合は回転を制限する。"
  },
  {
    "id": "Q124",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "グラファイトの層間に主に働く力として適切なのはどれか。",
    "options": [
      "共有結合だけ",
      "ファンデルワールス力",
      "イオン結合だけ",
      "金属結合だけ"
    ],
    "correct": [
      1
    ],
    "explanation": "グラファイト層間は弱い分子間力として説明される。"
  },
  {
    "id": "Q125",
    "chapter": "ch5",
    "difficulty": "basic",
    "type": "single",
    "question": "C₂H₆, C₂H₄, C₂H₂のC-C結合のπ結合数の順はどれか。",
    "options": [
      "0,1,2",
      "1,2,3",
      "2,1,0",
      "0,0,1"
    ],
    "correct": [
      0
    ],
    "explanation": "単結合0、二重結合1、三重結合2。"
  },
  {
    "id": "Q126",
    "chapter": "ch5",
    "difficulty": "challenge",
    "type": "single",
    "question": "単結合・二重結合・三重結合のC-C結合距離の傾向として正しいものはどれか。",
    "options": [
      "単結合が最短",
      "三重結合が最短",
      "すべて同じ",
      "二重結合が最長"
    ],
    "correct": [
      1
    ],
    "explanation": "結合次数が大きいほど短く、三重結合が最短。"
  },
  {
    "id": "Q127",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "ベンゼンに「単結合と二重結合がある」とだけ言うのが不十分な理由はどれか。",
    "options": [
      "共鳴によりπ電子が非局在化しているから",
      "炭素が存在しないから",
      "水素が金属だから",
      "分子式がC₆H₁₂だから"
    ],
    "correct": [
      0
    ],
    "explanation": "固定された交互結合ではなく共鳴構造が重要。"
  },
  {
    "id": "Q128",
    "chapter": "ch6",
    "difficulty": "basic",
    "type": "single",
    "question": "アボガドロ定数として講義で用いる値はどれか。",
    "options": [
      "6.02×10²³ 個/mol",
      "22.4 L/mol",
      "1.008 g/mol",
      "8.31 J/molK"
    ],
    "correct": [
      0
    ],
    "explanation": "1 molあたりの粒子数は約6.02×10²³個。"
  },
  {
    "id": "Q129",
    "chapter": "ch6",
    "difficulty": "basic",
    "type": "single",
    "question": "標準状態の気体1 molの体積はどれか。",
    "options": [
      "6.02×10²³ L",
      "22.4 L",
      "1.008 L",
      "18.0 L"
    ],
    "correct": [
      1
    ],
    "explanation": "標準状態では気体1 molは22.4 L。"
  },
  {
    "id": "Q130",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "H₂Oの分子量として最も近いものはどれか。",
    "options": [
      "16.00",
      "17.01",
      "18.016",
      "20.00"
    ],
    "correct": [
      2
    ],
    "explanation": "1.008×2+16.00=18.016。"
  },
  {
    "id": "Q131",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "Mg(OH)₂の式量として最も近いものはどれか。",
    "options": [
      "24.31",
      "41.32",
      "58.33",
      "74.31"
    ],
    "correct": [
      2
    ],
    "explanation": "24.31+(16.00+1.008)×2=58.326。"
  },
  {
    "id": "Q132",
    "chapter": "ch6",
    "difficulty": "basic",
    "type": "single",
    "question": "質量m[g]から物質量n[mol]を求める式はどれか。",
    "options": [
      "n=m/M",
      "n=m×M",
      "n=M/m",
      "n=m+M"
    ],
    "correct": [
      0
    ],
    "explanation": "物質量=質量/モル質量。"
  },
  {
    "id": "Q133",
    "chapter": "ch6",
    "difficulty": "basic",
    "type": "single",
    "question": "物質量n[mol]から質量m[g]を求める式はどれか。",
    "options": [
      "m=n/M",
      "m=nM",
      "m=M/n",
      "m=n+M"
    ],
    "correct": [
      1
    ],
    "explanation": "質量=物質量×モル質量。"
  },
  {
    "id": "Q134",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "Na 4.60 gに含まれるNa原子の物質量は、Na=22.99として約何molか。",
    "options": [
      "0.100",
      "0.200",
      "1.00",
      "2.00"
    ],
    "correct": [
      1
    ],
    "explanation": "4.60/22.99≈0.200 mol。"
  },
  {
    "id": "Q135",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "Na 4.60 gに含まれる原子数は約何個か。",
    "options": [
      "1.20×10²³",
      "6.02×10²³",
      "2.41×10²⁴",
      "1.20×10²²"
    ],
    "correct": [
      0
    ],
    "explanation": "0.200 mol×6.02×10²³≈1.20×10²³個。"
  },
  {
    "id": "Q136",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "C₃H₈の分子量として最も近いものはどれか。",
    "options": [
      "36.03",
      "40.06",
      "44.094",
      "58.12"
    ],
    "correct": [
      2
    ],
    "explanation": "12.01×3+1.008×8=44.094。"
  },
  {
    "id": "Q137",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "プロパン完全燃焼の正しい反応式はどれか。",
    "options": [
      "C₃H₈+O₂→CO₂+H₂O",
      "C₃H₈+5O₂→3CO₂+4H₂O",
      "C₃H₈+3O₂→3CO₂+4H₂O",
      "2C₃H₈+5O₂→6CO₂+8H₂O"
    ],
    "correct": [
      1
    ],
    "explanation": "CとHを合わせ、Oは10個必要なので5O₂。"
  },
  {
    "id": "Q138",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "ベンゼン完全燃焼の係数として正しいものはどれか。",
    "options": [
      "C₆H₆+6O₂→6CO₂+3H₂O",
      "2C₆H₆+15O₂→12CO₂+6H₂O",
      "C₆H₆+15O₂→6CO₂+6H₂O",
      "C₆H₆+O₂→CO₂+H₂O"
    ],
    "correct": [
      1
    ],
    "explanation": "分数係数を整数化して2,15,12,6。"
  },
  {
    "id": "Q139",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "アンモニアと酸素から一酸化窒素と水を作る反応式はどれか。",
    "options": [
      "NH₃+O₂→NO+H₂O",
      "4NH₃+5O₂→4NO+6H₂O",
      "2NH₃+O₂→2NO+3H₂",
      "NH₃+5O₂→NO+6H₂O"
    ],
    "correct": [
      1
    ],
    "explanation": "連立方程式で係数4,5,4,6。"
  },
  {
    "id": "Q140",
    "chapter": "ch6",
    "difficulty": "basic",
    "type": "single",
    "question": "化学反応式の係数比は何の比として使えるか。",
    "options": [
      "mol比",
      "質量比そのもの",
      "原子量比",
      "密度比"
    ],
    "correct": [
      0
    ],
    "explanation": "係数比は粒子数比でありmol比として使える。"
  },
  {
    "id": "Q141",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "2H₂+O₂→2H₂OでH₂ 2 molが反応するとH₂Oは何molできるか。",
    "options": [
      "1 mol",
      "2 mol",
      "3 mol",
      "4 mol"
    ],
    "correct": [
      1
    ],
    "explanation": "H₂:H₂O=2:2=1:1。"
  },
  {
    "id": "Q142",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "2H₂+O₂→2H₂OでO₂ 1 molが完全反応するとH₂Oは何molできるか。",
    "options": [
      "1 mol",
      "2 mol",
      "0.5 mol",
      "4 mol"
    ],
    "correct": [
      1
    ],
    "explanation": "O₂:H₂O=1:2。"
  },
  {
    "id": "Q143",
    "chapter": "ch6",
    "difficulty": "challenge",
    "type": "single",
    "question": "132 gのC₃H₈が完全燃焼したとき生成するH₂Oの質量は約何gか。",
    "options": [
      "54.0 g",
      "108 g",
      "216 g",
      "432 g"
    ],
    "correct": [
      2
    ],
    "explanation": "132/44.094≈2.994 mol。水は4倍の11.974 mol。×18.016≈216 g。"
  },
  {
    "id": "Q144",
    "chapter": "ch6",
    "difficulty": "basic",
    "type": "single",
    "question": "質量パーセント濃度の式として正しいものはどれか。",
    "options": [
      "溶質の質量/溶液の質量×100",
      "溶液の質量/溶質の質量×100",
      "溶質mol/溶媒kg",
      "溶質mol/溶液L"
    ],
    "correct": [
      0
    ],
    "explanation": "質量%は溶質質量を溶液質量で割る。"
  },
  {
    "id": "Q145",
    "chapter": "ch6",
    "difficulty": "basic",
    "type": "single",
    "question": "モル濃度の式として正しいものはどれか。",
    "options": [
      "溶質の物質量/溶液の体積",
      "溶質の質量/溶媒の質量",
      "溶液の体積/溶質のmol",
      "溶媒のkg/溶質mol"
    ],
    "correct": [
      0
    ],
    "explanation": "モル濃度はmol/L。"
  },
  {
    "id": "Q146",
    "chapter": "ch6",
    "difficulty": "basic",
    "type": "single",
    "question": "質量モル濃度の単位はどれか。",
    "options": [
      "mol/L",
      "mol/kg",
      "g/mol",
      "kg/mol"
    ],
    "correct": [
      1
    ],
    "explanation": "質量モル濃度は溶質mol/溶媒kg。"
  },
  {
    "id": "Q147",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "1.00 mol/LのNaCl水溶液0.250 Lに含まれるNaClは何molか。",
    "options": [
      "0.250 mol",
      "1.00 mol",
      "4.00 mol",
      "0.0250 mol"
    ],
    "correct": [
      0
    ],
    "explanation": "n=CV=1.00×0.250=0.250 mol。"
  },
  {
    "id": "Q148",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "0.500 molのCO₂は標準状態で何Lか。",
    "options": [
      "11.2 L",
      "22.4 L",
      "44.8 L",
      "5.60 L"
    ],
    "correct": [
      0
    ],
    "explanation": "22.4 L/mol×0.500 mol=11.2 L。"
  },
  {
    "id": "Q149",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "3.01×10²³個のH₂Oは何molか。",
    "options": [
      "0.500 mol",
      "1.00 mol",
      "2.00 mol",
      "6.02 mol"
    ],
    "correct": [
      0
    ],
    "explanation": "3.01×10²³/(6.02×10²³)=0.500 mol。"
  },
  {
    "id": "Q150",
    "chapter": "ch6",
    "difficulty": "challenge",
    "type": "single",
    "question": "2.00 molのAlCl₃に含まれるCl⁻相当の物質量は何molか。",
    "options": [
      "2.00 mol",
      "3.00 mol",
      "4.00 mol",
      "6.00 mol"
    ],
    "correct": [
      3
    ],
    "explanation": "AlCl₃ 1 molにClが3 mol。2.00 molなら6.00 mol。"
  },
  {
    "id": "Q151",
    "chapter": "ch6",
    "difficulty": "challenge",
    "type": "single",
    "question": "反応式を作るとき「係数の整数化」が必要になる例はどれか。",
    "options": [
      "C₆H₆+15/2O₂→6CO₂+3H₂O",
      "H₂+Cl₂→2HCl",
      "Na+Cl₂→NaCl",
      "CO₂→C+O₂"
    ],
    "correct": [
      0
    ],
    "explanation": "15/2のような分数係数が出たら全体を2倍する。"
  },
  {
    "id": "Q152",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "計算式中に単位を含めるべき理由として最も適切なのはどれか。",
    "options": [
      "次元が合っているか確認できる",
      "見た目を長くするためだけ",
      "有効数字が不要になる",
      "反応式を書かなくてよくなる"
    ],
    "correct": [
      0
    ],
    "explanation": "単位を含めるとg, mol, 個などの変換ミスに気づきやすい。"
  },
  {
    "id": "Q153",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "原子量を使って分子量を出すとき、括弧 Mg(OH)₂ の2はどこにかかるか。",
    "options": [
      "Mgだけ",
      "Oだけ",
      "OH全体",
      "Hだけ"
    ],
    "correct": [
      2
    ],
    "explanation": "(OH)₂の2はOとHの両方にかかる。"
  },
  {
    "id": "Q154",
    "chapter": "ch6",
    "difficulty": "challenge",
    "type": "single",
    "question": "2.00 molのC₃H₈が完全燃焼したとき必要なO₂は何molか。",
    "options": [
      "2.00 mol",
      "5.00 mol",
      "10.0 mol",
      "15.0 mol"
    ],
    "correct": [
      2
    ],
    "explanation": "C₃H₈:O₂=1:5なので2.00 molなら10.0 mol。"
  },
  {
    "id": "Q155",
    "chapter": "ch6",
    "difficulty": "challenge",
    "type": "single",
    "question": "10.0 gのCaCO₃（式量100.1）に含まれるCaCO₃は約何molか。",
    "options": [
      "0.0100",
      "0.0999",
      "1.00",
      "10.0"
    ],
    "correct": [
      1
    ],
    "explanation": "10.0/100.1≈0.0999 mol。"
  },
  {
    "id": "Q156",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "1.00 molのH₂Oの質量はどれか。",
    "options": [
      "1.008 g",
      "16.00 g",
      "18.016 g",
      "22.4 g"
    ],
    "correct": [
      2
    ],
    "explanation": "H₂Oのモル質量は18.016 g/mol。"
  },
  {
    "id": "Q157",
    "chapter": "ch6",
    "difficulty": "challenge",
    "type": "single",
    "question": "化学量論の計算手順として最も安全な順序はどれか。",
    "options": [
      "質量比をそのまま使う→答え",
      "反応式→与量をmolへ→係数比→目的量へ変換",
      "分子式を省略→暗算",
      "有効数字だけ先に丸める"
    ],
    "correct": [
      1
    ],
    "explanation": "反応式とmol比を使うのが基本。"
  },
  {
    "id": "Q158",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "Cl⁻の名称はどれか。",
    "options": [
      "塩化物イオン",
      "塩素酸イオン",
      "硫化物イオン",
      "塩素分子"
    ],
    "correct": [
      0
    ],
    "explanation": "Cl⁻は塩化物イオン。"
  },
  {
    "id": "Q159",
    "chapter": "ch1",
    "difficulty": "basic",
    "type": "single",
    "question": "NH₄⁺の名称はどれか。",
    "options": [
      "アンモニウムイオン",
      "アンモニアイオン",
      "硝酸イオン",
      "水酸化物イオン"
    ],
    "correct": [
      0
    ],
    "explanation": "NH₄⁺はアンモニウムイオン。"
  },
  {
    "id": "Q160",
    "chapter": "ch2",
    "difficulty": "basic",
    "type": "single",
    "question": "s軌道の最大収容電子数はどれか。",
    "options": [
      "1",
      "2",
      "6",
      "10"
    ],
    "correct": [
      1
    ],
    "explanation": "s軌道は1軌道×2電子。"
  },
  {
    "id": "Q161",
    "chapter": "ch2",
    "difficulty": "standard",
    "type": "single",
    "question": "1つのp副殻にはいくつの軌道があるか。",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correct": [
      2
    ],
    "explanation": "m=-1,0,+1の3軌道。"
  },
  {
    "id": "Q162",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "single",
    "question": "希ガスに該当するものはどれか。",
    "options": [
      "Na",
      "Cl",
      "Ne",
      "Mg"
    ],
    "correct": [
      2
    ],
    "explanation": "Neは18族の希ガス。"
  },
  {
    "id": "Q163",
    "chapter": "ch3",
    "difficulty": "basic",
    "type": "single",
    "question": "ハロゲンに該当するものはどれか。",
    "options": [
      "F",
      "He",
      "Na",
      "Ca"
    ],
    "correct": [
      0
    ],
    "explanation": "Fは17族ハロゲン。"
  },
  {
    "id": "Q164",
    "chapter": "ch4",
    "difficulty": "basic",
    "type": "single",
    "question": "CH₄に非共有電子対は中心C上にあるか。",
    "options": [
      "ある",
      "ない",
      "2組ある",
      "4組ある"
    ],
    "correct": [
      1
    ],
    "explanation": "CH₄の中心Cは4本の共有結合で非共有電子対なし。"
  },
  {
    "id": "Q165",
    "chapter": "ch4",
    "difficulty": "standard",
    "type": "single",
    "question": "NH₃の結合角は109.5°よりどうなるか。",
    "options": [
      "大きい",
      "小さい",
      "等しい",
      "0°"
    ],
    "correct": [
      1
    ],
    "explanation": "非共有電子対の反発で約107°に小さくなる。"
  },
  {
    "id": "Q166",
    "chapter": "ch5",
    "difficulty": "basic",
    "type": "single",
    "question": "HFが水素結合を作る理由はどれか。",
    "options": [
      "HがFに結合しているから",
      "HがCに結合しているから",
      "Fが金属だから",
      "分子が無極性だから"
    ],
    "correct": [
      0
    ],
    "explanation": "H-F結合は水素結合の典型条件。"
  },
  {
    "id": "Q167",
    "chapter": "ch5",
    "difficulty": "standard",
    "type": "single",
    "question": "C₂H₄のC-C間のσ結合数はいくつか。",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct": [
      1
    ],
    "explanation": "二重結合でもσは1本。"
  },
  {
    "id": "Q168",
    "chapter": "ch6",
    "difficulty": "basic",
    "type": "single",
    "question": "モル質量の単位はどれか。",
    "options": [
      "g/mol",
      "mol/L",
      "L/mol",
      "個/mol"
    ],
    "correct": [
      0
    ],
    "explanation": "モル質量は1 molあたりの質量。"
  },
  {
    "id": "Q169",
    "chapter": "ch6",
    "difficulty": "standard",
    "type": "single",
    "question": "C₆H₆の分子量として最も近いものはどれか。",
    "options": [
      "72.06",
      "78.11",
      "84.16",
      "90.10"
    ],
    "correct": [
      1
    ],
    "explanation": "12.01×6+1.008×6=78.108。"
  }
];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const chapterLabel = id => (chapters.find(c=>c.id===id)?.title || '全章');
const progress = JSON.parse(localStorage.getItem('chemProgress') || '{}');
let currentChapter = 'overview';
let currentQuiz = [];
let quizIndex = 0;
let examMode = false;
let examAnswers = {};

function saveProgress(){ localStorage.setItem('chemProgress', JSON.stringify(progress)); updateStats(); }
function updateStats(){
  $('#questionCount').textContent = `${questionBank.length}問収録`;
  const answered = Object.values(progress).filter(p=>p.answered).length;
  const correct = Object.values(progress).filter(p=>p.correct).length;
  $('#progressStat').textContent = `演習履歴 ${correct}/${answered || 0}`;
  const badge = $('#totalQuestionsBadge'); if(badge) badge.textContent = questionBank.length;
}
function renderNav(){
  const nav = $('#chapterNav');
  nav.innerHTML = chapters.map((c,i)=>`<button class="nav-btn ${c.id===currentChapter?'active':''}" data-id="${c.id}"><span>${i===0?'★':String(i).padStart(2,'0')}</span>${c.title.replace(/第\d回\s?/,'')}<small>${c.tag}</small></button>`).join('') + `<button class="nav-btn" data-id="tools"><span>⚙</span>計算Tools<small>JS</small></button>`;
  nav.onclick = e => { const btn=e.target.closest('.nav-btn'); if(!btn)return; const id=btn.dataset.id; if(id==='tools'){ renderTools(); document.getElementById('tools').scrollIntoView({behavior:'smooth'}); return;} currentChapter=id; renderChapter(id); renderNav(); window.scrollTo({top:0,behavior:'smooth'}); };
}
function renderChapter(id){
  const c = chapters.find(x=>x.id===id) || chapters[0];
  $('#content').innerHTML = `<div class="source-note pill">${c.tag}｜${c.source}</div>` + c.body;
  renderTools();
}
function renderTools(){
  $('#tools').innerHTML = `<div class="chapter-title"><span>JS</span><div><h2>計算・検算Tools</h2><p>電子配置、分子量、反応式係数をブラウザだけで検算できます。試験では必ず手計算の後に確認用として使ってください。</p></div></div>
  <div class="tool-grid">
    <div class="tool-card"><h3>電子配置チェッカー</h3><p>原子番号または元素記号（1〜36推奨）を入力。</p><div class="row"><input id="zInput" placeholder="例：C, 6, Fe, 26"><button class="primary" id="zBtn">表示</button></div><div class="result" id="zResult">結果がここに出ます。</div></div>
    <div class="tool-card"><h3>分子量・式量計算</h3><p>括弧つきの式にも対応。例：Mg(OH)2, Al2(SO4)3</p><div class="row"><input id="formulaInput" placeholder="例：C3H8"><button class="primary" id="formulaBtn">計算</button></div><div class="result" id="formulaResult">結果がここに出ます。</div></div>
    <div class="tool-card"><h3>反応式バランサー</h3><p>「->」で左右を分け、+で物質を区切る。</p><div class="row"><input id="rxnInput" placeholder="例：C3H8 + O2 -> CO2 + H2O"><button class="primary" id="rxnBtn">係数決定</button></div><div class="result" id="rxnResult">結果がここに出ます。</div></div>
    <div class="tool-card"><h3>mol変換クイック表</h3><div class="result">n = m / M\nm = nM\nN = n × 6.02×10^23\nV = 22.4n （標準状態）\nC = n / V[L]</div></div>
  </div>`;
  bindTools();
}
function bindTools(){
  $('#zBtn').onclick = () => showElectronConfig($('#zInput').value.trim());
  $('#formulaBtn').onclick = () => showMass($('#formulaInput').value.trim());
  $('#rxnBtn').onclick = () => showBalance($('#rxnInput').value.trim());
}

const elements = [null,'H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr'];
const names = {H:'水素',He:'ヘリウム',Li:'リチウム',Be:'ベリリウム',B:'ホウ素',C:'炭素',N:'窒素',O:'酸素',F:'フッ素',Ne:'ネオン',Na:'ナトリウム',Mg:'マグネシウム',Al:'アルミニウム',Si:'ケイ素',P:'リン',S:'硫黄',Cl:'塩素',Ar:'アルゴン',K:'カリウム',Ca:'カルシウム',Sc:'スカンジウム',Ti:'チタン',V:'バナジウム',Cr:'クロム',Mn:'マンガン',Fe:'鉄',Co:'コバルト',Ni:'ニッケル',Cu:'銅',Zn:'亜鉛',Ga:'ガリウム',Ge:'ゲルマニウム',As:'ヒ素',Se:'セレン',Br:'臭素',Kr:'クリプトン'};
const aufbau = [['1s',2],['2s',2],['2p',6],['3s',2],['3p',6],['4s',2],['3d',10],['4p',6]];
function showElectronConfig(v){
  let Z = /^\d+$/.test(v) ? Number(v) : elements.findIndex(e=>e?.toLowerCase()===v.toLowerCase());
  if(!Z || Z<1 || Z>36){ $('#zResult').textContent='1〜36の原子番号または元素記号を入力してください。'; return; }
  let left=Z, parts=[], shells={};
  for(const [orb,cap] of aufbau){ if(left<=0)break; const n=Number(orb[0]); const put=Math.min(cap,left); parts.push(`${orb}${sup(put)}`); shells[n]=(shells[n]||0)+put; left-=put; }
  const shellText = Object.entries(shells).map(([n,c])=>`${'KLMNOPQ'[n-1]}(${c})`).join(' ');
  const last = parts[parts.length-1].replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+$/,'');
  const block = last.includes('s')?'s':last.includes('p')?'p':last.includes('d')?'d':'f';
  $('#zResult').textContent = `${Z}${elements[Z]} ${names[elements[Z]] || ''}\n電子配置：${parts.join(' ')}\n電子殻：${shellText}\nブロック：${block}ブロック\n注：Cr/Cuなどの例外配置は試験範囲では基本的に問わない扱い。`;
}
function sup(n){ return String(n).replace(/[0-9]/g,d=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[d]); }

const atomicMass = {H:1.008,He:4.003,Li:6.941,Be:9.012,B:10.81,C:12.01,N:14.01,O:16.00,F:19.00,Ne:20.18,Na:22.99,Mg:24.31,Al:26.98,Si:28.09,P:30.97,S:32.07,Cl:35.45,K:39.10,Ca:40.08,Fe:55.85,Cu:63.55,Zn:65.38,Br:79.90,Ag:107.9,I:126.9,Ba:137.3};
function parseFormula(formula){
  formula = formula.replace(/\s/g,'').replace(/[\^]?[0-9]*[+-]$/,'');
  let i=0;
  function parseGroup(){
    const counts={};
    while(i<formula.length){
      if(formula[i]==='('){ i++; const inner=parseGroup(); const mult=parseNum(); for(const [e,c] of Object.entries(inner)) counts[e]=(counts[e]||0)+c*mult; }
      else if(formula[i]===')'){ i++; return counts; }
      else { const m=formula.slice(i).match(/^([A-Z][a-z]?)/); if(!m) throw new Error(`読めない位置: ${formula.slice(i)}`); const el=m[1]; i+=el.length; const mult=parseNum(); counts[el]=(counts[el]||0)+mult; }
    }
    return counts;
  }
  function parseNum(){ const m=formula.slice(i).match(/^\d+/); if(m){ i+=m[0].length; return Number(m[0]); } return 1; }
  return parseGroup();
}
function massOf(formula){ const counts=parseFormula(formula); let total=0; for(const [el,c] of Object.entries(counts)){ if(!atomicMass[el]) throw new Error(`${el}の原子量データがありません。`); total+=atomicMass[el]*c; } return {total, counts}; }
function showMass(f){ try{ const {total,counts}=massOf(f); const detail=Object.entries(counts).map(([e,c])=>`${e}:${c} × ${atomicMass[e]}`).join('\n'); $('#formulaResult').textContent=`${f}\n式量/分子量 = ${total.toFixed(3)}\n\n内訳\n${detail}`; }catch(e){ $('#formulaResult').textContent='エラー: '+e.message; } }

function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ [a,b]=[b,a%b]; } return a||1; }
function lcm(a,b){ return Math.abs(a*b)/gcd(a,b); }
function F(n,d=1){ if(d<0){n=-n;d=-d} const g=gcd(n,d); return [n/g,d/g]; }
function fadd(a,b){return F(a[0]*b[1]+b[0]*a[1],a[1]*b[1])} function fsub(a,b){return F(a[0]*b[1]-b[0]*a[1],a[1]*b[1])} function fmul(a,b){return F(a[0]*b[0],a[1]*b[1])} function fdiv(a,b){return F(a[0]*b[1],a[1]*b[0])} function fneg(a){return [-a[0],a[1]]} function fis0(a){return a[0]===0}
function balanceEquation(input){
  const sides=input.replace(/\s/g,'').split(/->|=|→/); if(sides.length!==2) throw new Error('左右を -> で分けてください。');
  const left=sides[0].split('+').filter(Boolean), right=sides[1].split('+').filter(Boolean), species=[...left,...right];
  const comps=species.map(parseFormula); const elems=[...new Set(comps.flatMap(c=>Object.keys(c)))];
  let M=elems.map(el=>species.map((sp,j)=>(j<left.length?1:-1)*(comps[j][el]||0)).map(x=>F(x)));
  const rows=M.length, cols=species.length; let r=0, pivots=[];
  for(let c=0;c<cols && r<rows;c++){
    let pivot=-1; for(let i=r;i<rows;i++) if(!fis0(M[i][c])){pivot=i;break}
    if(pivot<0) continue; [M[r],M[pivot]]=[M[pivot],M[r]];
    const pv=M[r][c]; M[r]=M[r].map(x=>fdiv(x,pv));
    for(let i=0;i<rows;i++){ if(i===r)continue; const fac=M[i][c]; if(!fis0(fac)) M[i]=M[i].map((x,j)=>fsub(x,fmul(fac,M[r][j]))); }
    pivots.push(c); r++;
  }
  const free=[]; for(let c=0;c<cols;c++) if(!pivots.includes(c)) free.push(c); if(!free.length) throw new Error('係数を決定できませんでした。');
  let x=Array(cols).fill(0).map(()=>F(0)); x[free[free.length-1]]=F(1);
  for(let i=pivots.length-1;i>=0;i--){ const pc=pivots[i]; let sum=F(0); for(const fc of free) sum=fadd(sum,fmul(M[i][fc],x[fc])); x[pc]=fneg(sum); }
  let den=1; for(const a of x) den=lcm(den,a[1]); let ints=x.map(a=>a[0]*(den/a[1])); if(ints.some(v=>v<0)) ints=ints.map(v=>-v); const g=ints.reduce((a,b)=>gcd(a,b)); ints=ints.map(v=>v/g);
  const fmt=(coef, sp)=>`${coef===1?'':coef}${sp}`;
  return ints.slice(0,left.length).map((c,i)=>fmt(c,left[i])).join(' + ') + ' → ' + ints.slice(left.length).map((c,i)=>fmt(c,right[i])).join(' + ');
}
function showBalance(v){ try{ $('#rxnResult').textContent=balanceEquation(v); }catch(e){ $('#rxnResult').textContent='エラー: '+e.message; } }

function initQuiz(){
  const qc=$('#quizChapter'); qc.innerHTML='<option value="all">全章</option>'+chapters.filter(c=>c.id!=='overview').map(c=>`<option value="${c.id}">${c.title}</option>`).join('');
  $('#openQuizBtn').onclick=()=>openQuiz(); $('#closeQuiz').onclick=()=>closeQuiz();
  $('#startPractice').onclick=()=>startQuiz(false); $('#startExam').onclick=()=>startQuiz(true); $('#showAllQuestions').onclick=()=>renderQuestionList();
  $('#quizChapter').onchange=()=>renderQuestionList();
  $('#quizDifficulty').onchange=()=>renderQuestionList();
  $('#quizSearch').oninput=()=>renderQuestionList();
}
function openQuiz(){
  $('#quizPanel').classList.add('open');
  document.body.classList.add('quiz-open');
  $('#quizPanel').setAttribute('aria-hidden','false');
  renderQuestionList();
  $('#quizArea').scrollTop = 0;
}
function closeQuiz(){
  $('#quizPanel').classList.remove('open');
  document.body.classList.remove('quiz-open');
  $('#quizPanel').setAttribute('aria-hidden','true');
}
function filteredQuestions(){
  const ch=$('#quizChapter').value, diff=$('#quizDifficulty').value, term=$('#quizSearch').value.trim().toLowerCase();
  return questionBank.filter(q=>(ch==='all'||q.chapter===ch)&&(diff==='all'||q.difficulty===diff)&&(!term||(q.question+q.explanation+q.options.join(' ')).toLowerCase().includes(term)));
}
function shuffle(a){ return [...a].sort(()=>Math.random()-.5); }
function startQuiz(exam){
  examMode=exam; examAnswers={};
  let qs=filteredQuestions();
  currentQuiz=shuffle(qs).slice(0, exam?25:Math.min(20,qs.length));
  quizIndex=0;
  if(exam){
    if(!currentQuiz.length){ $('#quizArea').innerHTML='<p>条件に合う問題がありません。</p>'; return; }
    $('#quizArea').innerHTML=`<div class="q-card"><h3>25問模試</h3><p>全問に回答してから下の「採点」を押してください。</p></div>` + currentQuiz.map(q=>renderQuestionCard(q,true)).join('') + `<div class="quiz-actions"><button class="primary" onclick="finishExam()">採点</button><span>${currentQuiz.length}問</span></div>`;
    return;
  }
  renderCurrentQuestion();
}
function renderCurrentQuestion(){
  if(!currentQuiz.length){ $('#quizArea').innerHTML='<p>条件に合う問題がありません。</p>'; return; }
  const q=currentQuiz[quizIndex]; $('#quizArea').innerHTML=renderQuestionCard(q, true) + `<div class="quiz-actions"><button class="ghost" onclick="prevQ()">前へ</button><button class="secondary" onclick="nextQ()">次へ</button>${examMode?'<button class="primary" onclick="finishExam()">採点</button>':''}<span>${quizIndex+1}/${currentQuiz.length}</span></div>`;
}
function renderQuestionCard(q, interactive=false){
  const saved=progress[q.id]; const multi=q.correct.length>1;
  const opts=q.options.map((o,i)=>`<label class="opt"><input type="${multi?'checkbox':'radio'}" name="${q.id}" value="${i}" ${interactive?'':'disabled'}> <span>${String.fromCharCode(65+i)}. ${o}</span></label>`).join('');
  return `<div class="q-card" data-qid="${q.id}"><div class="q-meta"><span>${q.id}</span><span>${chapterLabel(q.chapter)}</span><span>${q.difficulty}</span><span>${multi?'複数選択':'単一選択'}</span>${saved?.correct?'<span>正解済</span>':''}</div><p class="q-title">${q.question}</p><div class="options">${opts}</div>${interactive?`<div class="quiz-actions"><button class="primary" onclick="checkAnswer('${q.id}')">回答する</button><button class="ghost bookmark" onclick="toggleBookmark('${q.id}')">☆ブックマーク</button></div><div class="feedback hidden"></div>`:`<details><summary>解答を見る</summary><p><b>正解:</b> ${q.correct.map(i=>String.fromCharCode(65+i)).join(', ')}</p><p>${q.explanation}</p></details>`}</div>`;
}
function selectedAnswers(card){ return [...card.querySelectorAll('input:checked')].map(x=>Number(x.value)).sort((a,b)=>a-b); }
function sortedCorrect(q){ return [...q.correct].sort((a,b)=>a-b); }
function sameAnswers(chosen, ans){ return chosen.length===ans.length && chosen.every((v,i)=>v===ans[i]); }
function answerLetters(ans){ return ans.map(i=>String.fromCharCode(65+i)).join(', '); }
function showFeedback(card, q, chosen){
  const ans=sortedCorrect(q), ok=sameAnswers(chosen, ans);
  const fb=card.querySelector('.feedback');
  fb.className='feedback '+(ok?'ok':'ng');
  fb.innerHTML=`<b>${ok?'正解':'不正解'}</b><br>正解: ${answerLetters(ans)}<br>${q.explanation}`;
  return ok;
}
window.checkAnswer=function(id){
  const card=document.querySelector(`[data-qid="${id}"]`); const q=questionBank.find(x=>x.id===id); const chosen=selectedAnswers(card); const ok=showFeedback(card, q, chosen);
  progress[id]={answered:true,correct:ok,bookmarked:progress[id]?.bookmarked||false}; saveProgress();
  if(examMode) examAnswers[id]=chosen;
}
window.toggleBookmark=function(id){ progress[id]={...(progress[id]||{}),bookmarked:!progress[id]?.bookmarked}; saveProgress(); }
window.nextQ=function(){ if(quizIndex<currentQuiz.length-1){quizIndex++; renderCurrentQuestion();} }
window.prevQ=function(){ if(quizIndex>0){quizIndex--; renderCurrentQuestion();} }
window.finishExam=function(){ let score=0; currentQuiz.forEach(q=>{ const card=document.querySelector(`[data-qid="${q.id}"]`); if(card && sameAnswers(selectedAnswers(card), sortedCorrect(q))) score++; }); $('#quizArea').innerHTML=`<div class="q-card"><h3>模試結果：${score}/${currentQuiz.length}</h3><p>${score/currentQuiz.length>=.8?'かなり良いです。間違いだけ復習しましょう。':'章別演習に戻って弱点を潰しましょう。'}</p><button class="primary" onclick="startQuiz(true)">もう一度</button></div>` + currentQuiz.map(q=>renderQuestionCard(q,false)).join(''); }
window.gradeVisibleQuestions=function(){
  const cards=$$('.q-card[data-qid]');
  let score=0;
  cards.forEach(card=>{
    const id=card.dataset.qid, q=questionBank.find(x=>x.id===id), ok=showFeedback(card, q, selectedAnswers(card));
    progress[id]={answered:true,correct:ok,bookmarked:progress[id]?.bookmarked||false};
    if(ok) score++;
  });
  saveProgress();
  const result=$('#listResult');
  if(result) result.textContent=`表示中の問題：${score}/${cards.length} 正解`;
}
function renderQuestionList(){
  examMode=false;
  const qs=filteredQuestions();
  currentQuiz=qs;
  $('#quizArea').innerHTML=`<div class="q-card quiz-list-summary"><h3>問題一覧</h3><p>表示中 ${qs.length}問 / 全${questionBank.length}問。各問題に回答するか、最後にまとめて採点できます。</p><div class="quiz-actions"><button class="primary" onclick="gradeVisibleQuestions()">表示中をまとめて採点</button><button class="ghost" onclick="renderQuestionList()">回答をリセット</button><span id="listResult" class="pill">未採点</span></div></div>` + qs.map(q=>renderQuestionCard(q,true)).join('') + `<div class="quiz-actions"><button class="primary" onclick="gradeVisibleQuestions()">表示中をまとめて採点</button><span class="pill">表示中 ${qs.length}問</span></div>`;
}

function bindSearch(){
  $('#globalSearch').addEventListener('input', e=>{
    const term=e.target.value.trim(); renderChapter(currentChapter); if(!term)return;
    const walker=document.createTreeWalker($('#content'),NodeFilter.SHOW_TEXT); const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    const re=new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi');
    nodes.forEach(node=>{ if(re.test(node.nodeValue)){ const span=document.createElement('span'); span.innerHTML=node.nodeValue.replace(re,m=>`<mark>${m}</mark>`); node.parentNode.replaceChild(span,node); }});
  });
}
function bindTheme(){ $('#themeBtn').onclick=()=>{ document.body.classList.toggle('dark'); localStorage.setItem('chemTheme',document.body.classList.contains('dark')?'dark':'light'); }; if(localStorage.getItem('chemTheme')==='dark') document.body.classList.add('dark'); }

document.addEventListener('DOMContentLoaded',()=>{ renderNav(); renderChapter(currentChapter); initQuiz(); bindSearch(); bindTheme(); updateStats(); });
