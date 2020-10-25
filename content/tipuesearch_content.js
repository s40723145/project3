var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '機構繪製', 'text': "Jansen'slinkage \n Klann linkage \n Eight-bar linkage \n Ten-bar linkage \n", 'tags': '', 'url': '機構繪製.html'}, {'title': 'Eight-bar linkage', 'text': '', 'tags': '', 'url': 'Eight-bar linkage.html'}, {'title': '原文書內容', 'text': '', 'tags': '', 'url': '原文書內容.html'}, {'title': '膝關節替代物之運動測試儀', 'text': '/downloads/Kinematic_Tester_for_Knee_Replacements_-_MQP_2015.pdf \n \n', 'tags': '', 'url': '膝關節替代物之運動測試儀.html'}, {'title': '翻譯', 'text': '為膝關節替代物之運動測試儀翻譯專欄 \n \n Table of Contents 1 Introduction (p1) \n 2 Background Research (p2) 2.1 Biology of the Human Knee (p2) 2.2 Kinematic Mechanisms (p8) 2.3 Knee Replacements (p12) 2.4 Knee Replacement Testing(p15) \n 3 Project Objectives (p20) 3.1 Goal Statement (p20) 3.2 Task Specifications\xa0 (p20) \n 4 Design Concepts\xa0 (p22) 4.1 Concept 1 – Hrones & Nelson Sixbar\xa0 (p22) 4.2 Concept 2 – Theo Jansen’s Linkage (p28) \n 5 Design Selection (p34) 6 Proof of Concept (p35) \n 7 Detailed Design\xa0 (p36) 7.1 Linkage (p36) 7.2 Knee Replacement (p37) 7.3 Motor (p42) 7.4 Frame (p47) \n 8 Prototype Construction (p51) 8.1 Frame Construction (p51) 8.2 Motor and Electrical Components (p53) 8.3 Femur and Tibia Subassembly Construction (p54) 8.4 Linkage Construction\xa0 (p56) 8.5 Alterations to the Final Prototype Design (p58) \n 9 Prototype Testing (p63) \n 10 Conclusions (p69) \n 11 Future Recommendations (p70) 11.1 Allow the Mechanism to be Completely Customizable per Patient(p70) 11.2 Apply Sensors to the Mechanism (p70) 11.3 Apply Accurate Forces on the Knee Replacement (P70) 11.4 Recommendations for Ordering Components (71) 11.5 Improving Upon the Frame (p71) 11.6 Drafting\xa0 (p73) 11.7 Alternate Axle Components for Use in Pin Joints\xa0 (p74) 11.8 Possible Alternative Designs (p77) \n', 'tags': '', 'url': '翻譯.html'}, {'title': 'Chapter4設計概念', 'text': '\n 4.1概念1-Hrones和Nelson Sixbar 4.1.1概念概述 \n 第一個被考慮的設計是使用一個連桿來驅動腳踝沿著已知的路徑運動，通過精確的步態驅動脛骨和股骨連接。  Hrones 與 Nelson創造了各種各樣的耦合桿曲線，包含了四桿的集合。 這種設計使用了一個四桿，它的 耦合點 曲線非常類似於腳踝路徑。 脛骨連接到耦合點，耦合點在代表膝蓋的節點處連接到股骨連接點，而股骨連接點固定在代表臀部的接地節點上，則由此產生的為六連桿。 下面圖20中，說明了這個概念。 \n Link 1表示地面鏈路。 Link 2表示由馬達驅動的曲柄。 Link 3是驅動腳踝的耦合器，由節點C表示。 Link5和6分別表示脛骨和股骨。 節點D和O3表示，分別是膝關節和髖關節。 \n 為了確保這個設計只有一個自由度，它的機動性必須等於一個自由度。 為了驗證這一點，使用自由度方程並代入該連桿所包含的連桿和關節的數量。 這個概念有六個連桿和七個完整的關節。因此，計算出自由度 𝑀: 𝑀 = 3 ∗ (6 − 1) − 2 ∗ (7) − 1 ∗ (0) = 1 由於這個連桿有一個自由度，它只能遵循一條可預測的路徑。 這對於這個項目來說是成立的，因為如果腳踝在自然步態中遵循一個類似於人的曲線，那麼膝蓋也應該遵循它的自然運動。 為了利用這一概念重建人類步態，需要5個數據: 1.走路時腳踝的曲線 2.脛骨的長度 3.股骨的長度 4.步長 5.臀部與腳踝曲線的相對位置。', 'tags': '', 'url': 'Chapter4設計概念.html'}, {'title': 'Chapter7細部設計', 'text': '主旨: 在本章節中，將會詳細介紹原型最終設計，包括連趕機構、膝蓋義肢、機架、馬達。 \n 7-1聯動機構(p36-p37) \n 目的在於滿足膝蓋關節與大腿骨擺動之角位移，根據Solidworks相對於水平的運動分析，(圖35)顯示大腿骨接近50度(27-(-23)=50)。 \n (圖36)顯示膝蓋位移68度(180-112=68)，依照人類站立時膝蓋會有25度小幅度彎曲，在擺動桿件狀態(參考圖5)步態前為較大65-70度。 \n 然而，此機構無法重現最初25度之小幅度彎曲，有可能是因為西奧。詹森機構近乎於近諧波運動，膝蓋則沒有。 \n 上(圖35)為機械大腿骨擺動角位移，下(圖36)為大腿骨與脛骨(小腿骨位於內側，形狀為三角柱狀)之角位移 \n 此機構採2/3之比例，為了保持預算和生產機構不超出範圍，表5列出鍊條長度，每鏈接之詳細說明圖可在附錄B中查看。 \n 表5:最終鏈接的2/3比例鏈接長度。 \n \n 7-2膝蓋關節換置 \n \n 7-2-1 3D列印物件(p37) \n 大多數使用TKR(全人工膝關節置換)之技術，由於團隊無法實際獲得TKR，因此使用MakerBot的Thingiverse，Thingiverse是一個設計共同體為製作與共享3D列印物件。 我們發現從3D掃描創建出膝關節置換模型。模型包括大腿骨零件、脛骨、塑料墊片，透過CT掃描將之建模，切割並組裝各膝蓋關節。 \n TKR需要SolidWorks縮放尺寸為正常人類大小，團隊使用來自Elsner等人的研究，是使用118人去測量、分析，解剖骨骼植入並匹配大小正確的膝關節換置，附錄B顯示3D列印零件之各個尺寸。 \n 此外，大腿骨、脛骨修飾使連桿機構容納適合附屬件，切割骨頭末端、在銼刀上打孔以允許螺釘將3D列印零件連接大腿骨、脛骨鏈接。下圖37顯示切割與SolidWorks模組中大腿骨零件上的孔洞。 \n 圖37：用於3D列印的大腿骨SolidWorks之模型(副檔名為.stl)。 \n 7-2-2 膝關節換置、安裝(p38) \n 研究團隊判斷最好的連接膝蓋部位的方法是將膝蓋部位分開在一個平面機構上。 \n 四個六角形支腳固定於膝蓋替代物連接到大腿骨和脛骨鏈接的機構中(圖38)，六角形固定連接在80/20片上，由兩個螺栓固定於兩端的板子，使保持3D列印骨骼之操作。 \n 圖38：大腿骨和脛骨的連接鏈接之機構 \n 7-2-3 關節(p39-p40) \n 此機構使用螺絲柱（圖39）作為銷接頭將鏈節連接在一起。節點三藉由長桿半螺紋內六角螺釘連接在地面上。 \n 圖39：範例為在Grainger網路商城中的一根螺絲柱（也稱為接線柱）。 \n 當研究團隊將大腿骨和脛骨鏈接連接到SolidWorks的最終機構時，發現大腿骨和部分脛骨會相互抵觸（如圖40）。 \n 圖40 ：（左圖）與大腿骨和脛骨的連接點相近於180度。   （右圖）與大腿骨和脛骨的連接角度，導致大腿骨與脛骨元件之間相互抵觸。 \n 為了解決此干涉問題，一個插槽替換了鏈接12上的接頭（圖41）。 插槽確定最大尺寸為0.875英吋。 \n 以不相互抵觸為前提，脛骨與大腿骨鏈接要大於最小所需距離並在另一個最大干涉之位置上。 \n 圖41：大腿骨鏈接的插槽點可防止干涉。 \n \n 7-2-4肌腱和韌帶(p41) \n 為了在週期中幫助膝蓋替換零件保持在一起，脛骨鏈接由於重力因此不會待在插槽底部，為了還原原型，將膝蓋骨和股四頭肌肌腱的模組隨著前後十字韌帶連接到3D列印骨骼組件(圖42) \n 重建肌腱與韌帶使用可以承受一磅力的橡皮筋。 添加肌腱與韌帶助於膝蓋替換零件共同在一起，將會創建滾滑接頭，橡皮筋會被連接在80/20的T型擠型。 \n 圖42:紅線表示為模擬肌腱、韌帶的橡皮筋所在處(左)十字韌帶(ACL程式語言學協會 and PCL列印控制表)，(右)髕腱與股四頭肌肌腱。   整體來說，此機構有一個自由度(DOF)，並有12根桿件，15個全關節和2個半關節。 一個半關節是插槽、第二個半關節是滾滑接頭從肌肉、韌帶創建而來。 因此，接續採用自由度方程式計算機動性。 \n 關鍵字: \n \n rubber bands = 橡皮筋 \n ligaments = 韌帶 \n tendons = 肌腱 \n attached = 連接；附上 \n extrusions with t-nuts = T型擠型(製作固定截面形狀的物體) \n cruciate ligaments = 十字韌帶 \n patellar = 髌腱(位於連接膝蓋骨與小腿脛骨之間的肌腱) \n quadriceps tendons = 股四頭肌肌腱 \n mechanism = 機構 \n joints = 關節(有分全跟半)；接頭 \n roll-slide joint = 滾滑接頭 \n mobility = 流動性；可動性 \n calculated = 計算的 \n equation = 方程式 \n followed = 接續；跟隨 \n evolutional = 進化的 \n', 'tags': '', 'url': 'Chapter7細部設計.html'}, {'title': '參考資料', 'text': '行走機構: \n /downloads/Kinematic_Tester_for_Knee_Replacements_-_MQP_2015.pdf \n /downloads/2016_Design and Evaluation of Pediatric Gait Rehabilitation Robots.pdf \n 撓性機構: \n /downloads/2015_On the design and analysis of compliant mechanisms using the pseu.pdf \n M.Sketch: \n /downloads/msketch_stem.pdf \n Juila: \n /downloads/julia-in-parallel-and-high-performance-computing.pdf \n \n', 'tags': '', 'url': '參考資料.html'}, {'title': 'Notes', 'text': 'git clone後cmsimde無資料問題 \n 解決辦法 \n git submodule init (須在cmsimde的目錄下輸入) git submodule update (須在cmsimde的目錄下輸入) \n p.s. 紅字為指令', 'tags': '', 'url': 'Notes.html'}]};