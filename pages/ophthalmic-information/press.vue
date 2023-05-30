<script lang="ts" setup>
import { useRouter } from 'vue-router'
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '新聞推薦',
}))
// 新闻列表
const newList = [
  {
    id: 1,
    img: 'https://static.cmereye.com/imgs/2023/05/829d049493cda56b.png',
    title: '斜視治療有方法',
    date: '2020.11.27',
    content: [
      '治療斜視有四大方法，分別是眼鏡矯正(Optical Correction)、視軸運動矯正(Orthoptic Exercises)、遮眼治療(Occlusion)及手術治療(Operation)。這四個O的運用，要互相配合，相輔相成，眼科醫生會乎斜視患者的情況制訂治療目標和方案，有些患者可能只用其一，情況便得到改善，有些患者則要多管齊下，才能達到最佳治療效果。',
      '針對眼鏡矯正，不少斜視患者同時也有屈光不正，包括近視、遠視及散光；屈光不正會令患者視力模糊，影響大腦傳遞適當訊息控制視軸，令斜視惡化，亦有部分患者是因為高度遠視沒有得到光學糾正，雙眼過度用力聚焦，造成調節性內斜視，部分斜視患者能透過佩戴合適的眼鏡改善或矯正斜視。',
      '至於視軸運動矯正，是指透過鍛煉控制眼軸的眼外肌機能，改善斜視。視軸運動有不同種類，一般建議間歇性外斜視患者做眼球肌肉彙聚運動(Convergence Exercise)，俗稱「鬥雞練習」，視軸運動也可幫助斜視患者加強或重建立體感，不過運動訓練需要小朋友和家長高度配合並持之以恆的練習，才會有成效。',
      '若發現患者因斜視而導致弱視，即懶惰眼，便需要接受遮眼治療，原理是鋤強扶弱，透過用眼貼或特製眼鏡遮蔽正常的眼睛，強迫患者多用懶惰眼，從而鍛煉及恢復其功能。每天遮眼的時間及療程之長短視乎患者的年齡和弱視的嚴重程度，當懶惰眼的視力得以糾正或再沒有進一步的改善時，遮眼治療便可以終止。大部分弱視患者，愈早開始遮眼治療，視力就愈容易得以改善，但須留意遮眼治療只能改善視力，並不能糾正斜視的外觀。下期續談斜視的手術治療。',
    ],
  },
  {
    id: 2,
    img: 'https://static.cmereye.com/imgs/2023/05/1156cbf4a6ece4d6.png',
    title: '視網膜脫落必須動手術嗎？',
    date: '2020.11.22',
    content: [
      '視網膜脫落是眼科中比較嚴重的疾病，治療的主要目的，是保存中央視力，和令脫落的部位歸位。但如果視網膜脫落的範圍細小、在周邊或已有長時間的跡象，病人又全無病徵，則未必需要治療，因為這類病例只有一成的惡化風險，醫生可以安排病人定期覆診，觀察病情有否變化，但其實這類病例較少。',
      '如果不是以上的病例，醫生通常會建議治療。治療可分為激光或手術。如果脫落的範圍非常小和在周邊，有時候眼部激光已可以鞏固視網膜。如果脫落範圍較大，手術是唯一醫治方法。如不動手術，視網膜脫落的範圍有可能擴大，甚至完全脫落，病人的視力會非常之差。脫落的時間愈長，便愈有可能出現增生性玻璃體視網膜病變，令手術成功機會降低。如果視網膜完全脫落，眼球更有可能萎縮、併發白內障、青光眼或眼角膜結疤，最終完全失明。手術的時間也相當重要，剛出現的視網膜脫落，而黃斑點未受影響，理論上手術須盡快進行。但如果黃斑點已經脫落，或脫落已有一段長時間，手術可變為非緊急手術，也算合理。至於手術的選擇，醫生會根據病人的病情、年紀等因素決定使用充氣性視網膜固定術、鞏膜外墊壓術或玻璃體切除術等方法治療。如有疑問，最重要是問清楚眼科醫生的意見，選擇適合你的治療方案。',
    ],
  },
  {
    id: 3,
    img: 'https://static.cmereye.com/imgs/2023/05/91e2405635ca3e7b.png',
    title: '糖尿上眼可致盲？',
    date: '2020.09.18',
    content: [
      '糖尿病是一種常見的新陳代謝病患，因為都市人的飲食習慣，除長者外，也有不少中年甚至年輕人患上該病。當中「糖尿上眼」為糖尿病人常見的併發症，也是全球十大致盲原因之一。「糖尿上眼」的發病率及嚴重程度，與患者的病齡和血糖控制息息相關，大部分患糖尿病十年以上的患者，都會有一定程度的糖尿相關視網膜病變狀況，而「糖尿上眼」初期可能全無病徵，因此糖尿病人必須定期驗眼。',
      '「糖尿上眼」對視力的影響，主要由於黃斑水腫及視網膜病變引發增生血管。長時間血糖水平過高，會導致視網膜的微細血管受到破壞，令其滲出蛋白沉澱物質及血液，如果滲漏位置處於黃斑區或其附近，便會造成黃斑水腫，破壞感光細胞，影響中心視力。更嚴重的是，長時間的視網膜病變狀況，會令視網膜長出不正常的新生血管，造成玻璃體出血、視網膜纖維化、繼發性青光眼，甚至視網膜脫落。當「糖尿上眼」發展至有明顯症狀，如視力模糊、影像變形、眼睛疼痛時，其實病情已經相當嚴重，即使接受治療，也未必能令視力完全康復，因此定期預防性檢查，及早發現「糖尿上眼」並控制病情，是預防「糖尿上眼」致盲最重要的一環。',
      '一旦發現「糖尿上眼」引致的黃斑水腫，主要的治療方法為眼內注射「抗血管增生因子」(Anti-VEGF)，眼科醫生會以特幼針嘴，於眼白鞏膜位置，將藥物直接注射入眼球內的玻璃體腔，藥物會慢慢瀰散，令增生血管慢慢萎縮，同時抑制新的增生血管形成，減少黃斑區的滲漏，阻止視力退化。標準治療方案是於首三個月每月注射一次，再按患者的反應和病情，決定是否需要後續注射。如能及早注射，大部分病人都有良好反應，但治療費用特別是藥物成本相對較為昂貴，也可能需要反覆注射以維持療效。對於復發性或持續性黃斑水腫，除了注射抗血管增生因子，也可考慮配合使用「類固醇玻璃體緩釋植入物」，於眼內持續釋放低劑量類固醇藥物，抑制炎症，長效抗水腫。',
    ],
  },
  {
    id: 4,
    img: 'https://static.cmereye.com/imgs/2023/05/875d23d64608ef4e.png',
    title: '全港約50萬人患老年黃斑病變\n視物變形要警惕',
    date: '2020.09.16',
    content: [
      '(左至右) 眼科學會會董黃禮文、港大李嘉誠醫學院眼科學系臨床助理教授陳焯鴻、眼科學會會長葉佩珮及會董鍾震宇。香港大學研究指出，老年黃斑病變是港人視障的第二大元兇，香港眼科學會估計，全港有約50萬人患上老年黃斑病變，惟港人對老年黃斑病變的認知甚低，學會憂慮患者延誤確診和治療，造成不可逆轉的視力損失，建議長者應定期接受眼科醫生的視力檢查，亦可經常使用阿姆斯勒方格表自我檢查，有助及早發現問題及診斷，盡早治療。',
      '香港眼科學會會董黃禮文醫生表示，老年黃斑病變可分為乾性及濕性，當中9成黃斑病變患者為乾性，1成人為濕性，兩者均會令患者視力衰退，而濕性老年黃斑病變更可能在數天內致視力急速下降。黃禮文又指，此眼疾早期或會毫無病徵，其後患者的顏色辨別能力及影像對比度減低，景物亦會變形扭曲，晚期中央視野更會出現黑影。他說，患者的日常生活大受影響，簡單如使用電話亦會較視力正常的人困難12倍，提醒患者需及早診斷和治療。',
      '香港大學在今年6月發布的眼疾認知研究中指出，老年黃斑病變位列港人視障的第二大元兇，222名受訪長者中有7成人不知其病徵，近5成人甚至未聽過此病。',
      '香港眼科學會會董鍾震宇醫生表示，病發首3個月是治療「黃金期」，患者應盡早接受治療，在眼球注射「血管內皮生長因子抑制劑」，阻止新增血管生長及滲漏，改善視力。他呼籲市民戒煙及多吃蔬果，並使用「阿姆斯勒方格表」作自我檢查。',
      '藝人胡楓約3年前被驗出患有老年黃班病變，他指，最初看到建築物呈彎曲時未有理會，直到彎曲幅度加劇才去看醫生，並連續3個月打針進行治療，視力始見改善，現在仍可繼續駕車出入。',
      '60歲患者鄭女士表示，患病初期視力變得模糊，起初以為鏡片有問題或過往眼疾的後遺症，受疫情影響，她延遲求診，再驗眼時才發現患上老年黃斑病變。她說，對該病及其治療方法認知不多，以為長者才會患病，在注射藥物後，視力已回復至患病前的水平。',
    ],
  },
  {
    id: 5,
    img: 'https://static.cmereye.com/imgs/2023/05/a4d26289335be5c0.jpg',
    title: '「微脈衝激光」拯救視力更安全',
    date: '2020.09.13',
    content: [
      '激光治療在眼科治療非常廣泛，除了可用作矯視，亦可以醫治各種眼疾，在六十年代已開始使用。然而早期的激光治療是利用連續性的激光，光束非常穩定且不會斷開，能量較高，容易形成疤痕。若發射至黃斑點中心位，視力更會受損。直至九十年代末，微脈衝激光的出現，令副作用大大減低。微脈衝激光的特點是，激光能源會分段發放，讓眼睛組織迅速降温及休息。若做眼底造影檢查及掃描，會發現患者經過微脈衝激光治療後，並沒有看到有任何疤痕形成，故可供醫生及病人多一個治療選擇。',
      '微脈衝激光在臨床上可應用於以下常見眼疾：',
      '一、青光眼',
      '青光眼是神經線持續受損的一種眼疾，治療方法通常是降低眼壓。激光治療可透過增加眼球排水的循環，或破壞製造眼壓的細胞，從而將眼壓降低。針對青光眼的激光治療分兩種：',
      '小梁成形術：主要針對開角型青光眼，在眼睛角落的排水位(即小梁)利用脈衝激光(15%活躍)刺激細胞、減低它們之間的阻力，增進眼球前房水的循環，從而有助降低眼壓。對比傳統選擇性小梁成形手術，激光治療相對出現發炎的風險較小，對於眼睛容易發炎的患者會較為適合。',
      '跨鞏膜激光治療：涵蓋較多不同種類的青光眼，例如閉角型青光眼、血管增生性青光眼、發炎性青光眼。醫生會在眼球外發射激光，拉闊鞏膜下面的排水通道，不會影響小梁內的細胞。因為微脈衝激光所用的激光能量較少(33%活躍)，可減低鞏膜發炎、撕裂或手術後眼球萎縮的情況。',
      '二、黃斑點水腫',
      '糖尿上眼、眼底血管閉塞或倒塞(俗稱眼中風)、脈絡膜血管擴張等都會引致黃斑點水腫。治療上，一般都會處方能預防血管增生的眼內注射藥物，惟價錢不便宜，激光治療則是可供選擇的治療方案。因傳統激光會對黃班點中心直接造成傷害，只能將激光貼近黃斑點，治療效果未必理想。微脈衝激光治療將能量控制至只有5%活躍，其餘都是緩衝期，這樣便能將激光集中在黃斑點中心而不會造成疤痕。',
      '與其他激光治療一樣，使用微脈衝激光亦存有風險，患者可能會出現眼睛發炎、疼痛、眼組織流血、視力下降、眼疾復發等。但相對起傳統激光，這些副作用出現的風險較低，比較安全。若眼疾不幸復發，亦可重複使用微脈衝激光，以修補情況。',
    ],
  },
  {
    id: 6,
    img: 'https://static.cmereye.com/imgs/2023/05/9276ab02f3abc115.jpg',
    title: '斜視眼影響深遠 及早糾正救視力',
    date: '2020.06.28',
    content: [
      '斜視眼是常見的兒童眼疾，最早在小兒3至4個月左右出現。俗稱「鬥雞眼」、「高低眼」、「射籬眼」便是斜視的明顯特徵；可以是間歇性或持續性。但此病不僅限於小朋友，成年人都會有斜視眼，原因可能是小時沒有完全糾正，眼部肌肉或神經問題等。要知道自己是否有斜視眼，可找旁人協助，於較遠位置使用電燈或手機的閃光燈，將燈光照向你的眼部，看看在你瞳孔位置的燈光是否在眼睛中央，若有偏移便可能是斜視眼。',
      '受斜視影響的兒童有可能因外觀問題容易被同輩取笑，有礙心理發展；斜視亦可能造成「懶惰眼」，令患者慣用較好的一邊眼睛，使另外一邊眼睛的視力發展不全。成人方面，看事物可能會出現重影，例如一隻碗看成兩隻碗，嚴重更會造成危險，尤其行樓梯時可能將一個梯級看成兩級，因而容易跌倒。除此之外，斜視患者的立體感亦會較常人差。故此建議斜視要及早糾正，以確保健全的視力發展。',
      '要修正斜視眼，眼科醫生首先會探究導致斜視眼的潛在成因，安排患者作詳細的眼科檢查，如有需要，特別是繼發性患者，更要做其他身體檢查如抽血化驗及影像掃描等，從而診斷是否有其他隱疾例如腦神經病變或甲亢等，對症下藥。常見引起斜視的眼疾包括間歇性外斜視，屈光不正等。症狀輕微的患者可以眼肌練習及訓練加強肌肉力量，如有需要可佩戴特製眼鏡以矯正情況(見下圖)；症狀持續及較嚴重患者可透過手術醫治，將眼部肌肉放鬆或強化，透過縮短或重新固定肌肉，以改善斜視問題。',
    ],
  },
  {
    id: 7,
    img: 'https://static.cmereye.com/imgs/2023/05/88621485630632e9.png',
    title: '嚴重濕疹患者 慎防眼睛毛病',
    date: '2020.05.29',
    content: [
      '濕疹是一種常見的過敏性皮膚發炎，患者皮膚乾燥和非常痕癢，甚至發紅發腫、產生鱗屑，嚴重的皮膚會裂開、剝落、結痂或滲血。不少人以為濕疹屬於皮膚病，與眼睛沒有關係，但事實上，濕疹和多種眼睛疾病都有關聯，尤其是過敏性結膜炎、錐形角膜、眼皮炎、眼瞼外翻、白內障和視網膜脫落。',
      '由於濕疹常發於在臉部，眼部附近的皮膚，都容易受到影響，導致眼腫和瞼緣發炎，俗稱眼皮炎。如果持續發炎，會導致皮膚結痂收縮，造成眼瞼外翻，露出紅色的結膜，甚至眼睛閉合不全，眼睛無法得到適當保護，淚水過度揮發，引發嚴重乾眼症和暴露性角膜炎。',
      '此外，濕疹患者自身較易有其他過敏性疾病，如哮喘、鼻敏感、眼敏感。眼敏感即過敏性結膜炎，令患者感覺眼睛乾澀痕癢，經常眨眼、捽眼，甚至用手指篤或用手掌拍打自己的眼睛。至於錐形角膜，是一種角膜病變，角膜從平滑球面變成圓錐形，造成深度近視和散光，除了濕疹患者自身的軟組織較弱，較容易變形，也估計和長時間用力捽眼，壓迫角膜，令角膜變形有關。',
      '濕疹患者較容易患上白內障，白內障是因為透明晶體內的蛋白質老化，令晶體變得渾濁，影響視力。曾經醫治過不少濕疹患者，早至二十多歲便出現白內障，除因為濕疹患者的新陳代謝速率有異，加速眼睛退化，亦因不少患者需要長時間大範圍使用類固醇藥膏控制皮膚發炎，久而久之引發白內障甚至青光眼。',
      '最後，嚴重濕疹患者亦較大可能出現視網膜脫落問題，並且較多為巨大視網膜裂口造成，不但手術的複雜性較高，手術預後亦較差，視網膜再脫落的情況普遍，或需要做多次手術，因此濕疹患者一旦發現有視力問題，特別是視力模糊、閃光、飛蚊、出現黑影等，應盡快向眼科專科醫生求醫，及早治療，拯救視力。',
    ],
  },
  {
    id: 8,
    img: 'https://static.cmereye.com/imgs/2023/05/1720c9a3331071b2.png',
    title: '屏幕傷眼 學童增百度近視',
    date: '2020.05.24',
    content: [
      '【本報訊】世界衞生組織（WHO）去年4月發佈嬰幼兒使用電子屏幕指引，不足一歲的嬰兒不應觀看電子屏幕，兩至四歲幼兒每天平均使用電子屏幕不應超過一小時。眼科醫生劉凱珊指，沒有一個「安全」使用電子屏幕的時間準則，但她認為兩歲以後每天不應使用電子屏幕逾30分鐘。　',
      '劉凱珊表示，有小一生定期驗眼，去年12月才驗過沒有近視，「4月初來驗眼已有百多度近視，其母指兒子着實因為停課大量使用電子產品」，不過目前尚未有足夠數據反映兒童停課期間使用電子屏幕對視力的影響。兒童長時間在家，不用持續離遠看東西，家長未必察覺子女有近視問題。',
      '她建議家長用圖畫分開一半做配對，與幼兒相距約兩呎半，逐隻眼測試視力：「他們未能講出自己眼矇，特別是只有一隻眼有近視，可以用另一隻眼看東西。亦有小朋友先天不算看得清楚，根本不知道何謂清楚。」幼兒頻密瞇眼、揉眼，閱讀時將書本拉得得近，甚至動作「論盡」或整體發展疑有遲緩等，都有機會因為近視：「還有，是否脾氣很差？有可能因為看不清楚令小朋友很𤷪𤺧。」',
      '研究發現，曬太陽能增加神經傳導物質，減少近視加深的風險，劉凱珊援引台灣研究：「有兩班兒童，一班在戶外小息，另一班則在課室，同樣是廿分鐘，結果顯示，兩班小朋友的近視比例也有分別，外出小息的學生，有近視佔8.5%；室內小息的則有17.5%。」',
      '「20-20-20」規律保視力',
      '她建議家長遵行「20-20-20」規律，即每隔20分鐘離開電子屏幕，讓眼睛休息20秒，遠望最少20呎（6米）以外的景物，有助延緩近視加深的速度。「就算不外出，可否在露台曬太陽做功課？」至於屏幕大小，則沒有醫學研究指影響近視加深速度：「不過，用電腦較大屏幕，眼睛較手機屏幕相對不會覺太易累。」',
      '如不能避免電子教學，家長可減少子女課餘使用電子產品以作平衡，「電子產品是每秒轉了六個螢幕，配合其他閃爍、彈出等畫面效果，更易令幼兒感刺激而『上癮』，因而延長他們觀看時間－－太刺激的畫面，再返回靜態些少的畫面，就算對着老師，也不能每秒轉動太多不同畫面吧！幼兒覺悶，便直接影響對其他活動的專注力。」',
      '· 記者羅惠儀',
    ],
  },
]
// const router = useRouter()
const isNewLIst = ref(true)
const isDetail = ref(false)
const detail = ref({
  title: '',
  img: '',
  date: '',
  content: [''],
})
const newId = ref(0)
const newDeatil = (id: number) => {
  newId.value = id
  detail.value = newList[id]
  isNewLIst.value = false
  isDetail.value = true
}
const showNewList = () => {
  isNewLIst.value = true
  isDetail.value = false
}
const pageTurning = (flag: string) => {
  if (flag === 'up') {
    if (newId.value === 0) {
      ElMessage.error('當前是第一條！')
    } else {
      const index = newId.value--
      newList.forEach((el) => {
        if (el.id === index) {
          detail.value = el
        }
      })
    }
  } else if (newId.value > newList.length) {
    ElMessage.error('當前是最後一條！')
  } else {
    const index = newId.value++
    newList.forEach((el) => {
      if (el.id === index) {
        detail.value = el
      }
    })
  }
}
</script>

<template>
  <div class="current">
    <div class="press">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/40df627f5ca7ce11.jpg"
            alt="新聞資訊"
          />
          <svg
            width="9"
            height="144"
            viewBox="0 0 9 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-1d8b93bf=""
            data-v-a125a221=""
            data-v-4b343dd3=""
          >
            <path
              d="M1 1V143L7.5 130.5"
              stroke="#2958A3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-v-1d8b93bf=""
              data-v-a125a221=""
              data-v-4b343dd3=""
            ></path>
          </svg>
        </div>
        <div>
          <div>新聞資訊</div>
          <div>
            <div>NEWS</div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/e3060c56238575c3.png"
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/90e21d8b0b56ea96.png"
              />
            </div>
          </div>
          <div>
            <div>緊貼醫療新聞</div>
            <div>注重眼睛健康發展</div>
          </div>
        </div>
      </div>
      <div>
        <div
          v-for="(item, index) in newList"
          v-show="isNewLIst"
          :key="index"
          @click="newDeatil(index)"
        >
          <div><img :src="item.img" :alt="item.title" /></div>
          <div>{{ item.date }}</div>
          <div>{{ item.title }}</div>
          <div>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 16H16V0" stroke="#2958A3" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isDetail" class="content_press">
      <div>
        <div>{{ detail.title }}</div>
        <div>
          <div><img :src="detail.img" :alt="detail.title" /></div>
          <div>{{ detail.date }}</div>
        </div>
        <div>
          <div>
            <p v-for="(el, i) in detail.content" :key="i">{{ el }}</p>
          </div>
          <div>
            <div>
              新聞來源:<span>{{ 'am730' }}</span>
            </div>
            <div>
              醫理:<span>{{ '李琬微' }}</span>
            </div>
            <div>
              資料來源:<span>{{ '原文鏈接' }}</span>
            </div>
            <div>
              瀏覽次數:<span>{{ '3789' }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div @click="showNewList">回到文章目录</div>
        <div>
          <div @click="pageTurning('up')">＜上一篇</div>
          <div @click="pageTurning('down')">下一篇＞</div>
        </div>
      </div>
    </div>
    <div>
      <PageInformation />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.current {
  margin-bottom: 180px;
}

.press {
  position: relative;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div:nth-child(1) {
      position: relative;
      margin-top: 122px;
      margin-left: 268px;

      & > img {
        position: relative;
        z-index: 5;
      }

      & > svg {
        position: absolute;
        left: 50%;
        bottom: -130px;
        z-index: 5;
      }
    }

    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      width: 1386px;
      height: 912px;
      display: inline-block;
      z-index: 1;
      position: absolute;
      right: 0;
      top: 57px;
    }

    & > div:nth-child(2) {
      padding: 4.8% 0 0 5%;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      z-index: 5;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 40.1431px;
        line-height: 46px;
        text-align: center;
        letter-spacing: 0.2em;
        color: #ffffff;
        margin-bottom: 12px;
      }

      & > div:nth-child(2) {
        margin-bottom: 41px;

        & > div:nth-child(1) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 700;
          font-size: 57.4776px;
          line-height: 56px;
          /* identical to box height, or 97% */
          text-align: center;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #ffffff;
        }
      }

      & > div:nth-child(3) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 23.7037px;
        line-height: 47px;
        text-align: right;
        letter-spacing: 0.3em;
        color: #ffffff;

        & > div:nth-child(2) {
          font-weight: 400;
          font-size: 15.8025px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.45em;
        }
      }
    }
  }

  & > div:nth-child(2) {
    margin-top: 290px;
    margin-left: 38%;
    margin-right: 13.5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > div {
      width: 400px;
      height: 400px;
      background: #f2f2f2;
      margin-bottom: 120px;
      position: relative;

      & > div:nth-child(1) {
        padding: 33px 31px;
        min-height: 240px;
        padding-bottom: 0;
      }

      & > div:nth-child(2) {
        margin-top: 10px;
        width: 141px;
        height: 38px;
        background: #ffffff;

        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 17.7815px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #8ad8dd;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      & > div:nth-child(3) {
        margin-left: 31px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;
        white-space: pre-wrap;
      }

      & > div:nth-child(4) {
        position: absolute;
        bottom: 20px;
        right: 20px;
      }
    }
  }
}

.content_press {
  position: relative;
  margin: 0 26.0412%;
  margin-top: 122px;

  & > div:nth-child(1) {
    & > div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 64px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #515151;
      margin-bottom: 57px;
      position: relative;
    }

    & > div:nth-child(1)::after {
      content: '';
      border-bottom: 3px solid #515151;
      display: inline-block;
      width: 486px;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      & > div:nth-child(1) {
        width: 780px;
        height: 540px;
        margin-top: 24px;

        & > img {
          position: relative;
          z-index: 5;
          width: 100%;
        }
      }

      & > div:nth-child(2) {
        margin-top: 20px;
        position: absolute;
        bottom: 0;
        right: 65px;
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 36px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #8ad8dd;
      }

      & > div:nth-child(1)::after {
        content: '';
        width: 813px;
        height: 440px;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        background: #f2f2f2;
      }
    }

    & > div:nth-child(3) {
      margin-top: 97px;
      margin-bottom: 80px;

      & > div:nth-child(1) {
        margin-bottom: 120px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        /* or 142% */

        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #515151;

        & > p {
          margin-bottom: 35px;
        }
      }

      & > div:nth-child(2) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    & > div:nth-child(1) {
      width: 152px;
      height: 37.27px;
      background: #8ad8dd;

      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 500;
      font-size: 13.1538px;
      line-height: 28px;
      text-align: center;
      letter-spacing: 0.1em;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      & > div {
        cursor: pointer;
        margin: 0 60px;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .current {
    width: 1920px;
    margin: auto;
  }
}
</style>
