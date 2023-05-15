<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'glaucoma',
}))
// 传递背景色
const backgd = [
  '#bbe0d5;',
  '-webkit-linear-gradient(to right, #bbe0d5, #97d2c9);',
  'linear-gradient(to right, #bbe0d5, #97d2c9);',
]
const meetArr = [
  {
    title: 'Q：青光眼是老年人專屬，年輕人好少機會患上嗎？',
    agree:
      '青光眼是一種視神經病變，主要是由於眼球內壓力（眼壓）上升所致。年齡超過40歲是青光眼高危一族，但是年輕人也有患青光眼的風險。深近視、有青光眼家族遺傳病史，患糖尿病、高血壓、心血管疾病，眼曾受過眼創傷，又或者長期使用類固醇，都有機會增加眼壓，從而增加青光眼風險。',
  },
  {
    title: 'Q：青光眼無法醫治嗎？',
    agree:
      '青光眼的治療以控制眼壓、防止或減慢青光眼的惡化為目標。雖然青光眼是無法根治，但只要及早診斷，加以適當治療，仍可以降低眼壓、預防或減慢視力流失。',
  },
  {
    title: 'Q：青光眼患者雙眼真的會發光嗎？',
    agree:
      '在一般情況，青光眼患者的眼睛不會發光或變成青綠色。青光眼患者症狀以眼睛脹痛、眼睛充血，突然視力模糊為主，部分患者還有機會出現頭痛或偏頭痛，噁心甚至嘔吐，隨病情惡化視野會不斷收窄。',
  },
  {
    title: 'Q：視力未下降就不用求醫嗎？',
    agree:
      '慢性青光眼患者通常沒有明顯徵狀，當出現視力模糊、視野受損，很可能屬晚期階段。如出現視力下降才求醫，視力可能永久受損，所以建議青光眼高危人士定期檢查眼睛，以免青光眼偷走視力。而急性青光眼有明顯徵狀，包括︰眼痛、視力模糊、眼紅、頭痛、嘔吐等，眼壓會在短時間內上升，建議患者立即向眼科醫生求診，以保存視力。',
  },
]
const symptoms = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/53e4d8c79f82e4a6.png',
    text: '眼睛脹痛',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a58ec7eb4f43f6a4.png',
    text: '眼睛充血',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b452ba8e2b783f02.png',
    text: '突然\n視力模糊',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e2b8896e55129333.png',
    text: '頭痛/\n偏頭痛',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4c2daf21d82713ee.png',
    text: '噁心/嘔吐',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/376c7e6cf5bda7ef.png',
    text: '視野收窄',
  },
]
const worsen = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f751ce73a8968035.png',
    text: '早期',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/68c8066d950ed985.png',
    text: '中期',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b2b1e3c11112c405.png',
    text: '晚期',
  },
]
const congenital = [
  {
    id: '1',
    title: '流淚或畏光',
    text: '是早期角膜水腫伴有角膜刺激症狀所致。',
    img: 'https://static.cmereye.com/imgs/2023/05/14c6771dcd344e18.png',
  },
  {
    id: '2',
    title: '角膜混濁',
    text: '早期為角膜上皮及上皮下水腫，引起輕度乳白色混濁。出現水腫時，混濁會更加明顯。當眼壓降低後，角膜可變透明，若不及時治療，會呈永久性混濁。',
    img: 'https://static.cmereye.com/imgs/2023/05/d63a41599833af19.png',
  },
  {
    id: '3',
    title: '角膜擴大',
    text: '角膜水腫後，眼壓繼續升高，眼球壁受壓力作用而擴張，使整個眼球不斷增大，角膜直徑可達12mm左右。',
    img: 'https://static.cmereye.com/imgs/2023/05/422b6918adf2680a.png',
  },
]
const kind = [
  {
    id: '1',
    text: '虹膜睫狀體炎繼發性青光眼',
    detail:
      '急性虹膜睫狀體炎一般不引起眼壓升高，只有當發炎滲出物增加，房水中蛋白質含量較高時，才會引起眼壓中度升高。反覆發作的慢性虹膜睫狀體炎，會引起廣泛的瞳孔後黏連或周邊虹膜前黏連，房水排出受阻，以致眼壓升高。此病一般發病突然，典型眼壓升高的青光眼症狀，包括：霧視、虹視、頭痛，甚至噁心、嘔吐等，而症狀消失後大多無損視功能和視野。但反覆發作，長期眼壓升高，也可能對視神經造成永久損傷，從而出現不可逆轉的視力損失。',
    img: 'https://static.cmereye.com/imgs/2023/05/3fed11ffa5e46d5a.png',
  },
  {
    id: '2',
    text: '青光眼睫狀體炎綜合症',
    detail:
      '患者多為中年男性。其典型症狀為突發性眼壓升高，伴有輕度睫狀體炎，即角膜後壁有大塊的脂肪沉著物，前房有少量浮游物。會反覆發作，一般無自覺症狀，僅有輕度不適，如眼壓升高會導致角膜水腫，出現視物模糊。',
    img: '',
  },
  {
    id: '3',
    text: '皮質類固醇性青光眼',
    detail:
      '長期局部滴用或全身使用皮質類固醇，可引致眼壓升高。其臨床表現與原發性開角型青光眼相似，一般需詳細了解過去用藥情況以明確診斷。',
    img: '',
  },
  {
    id: '4',
    text: '白內障所致繼發性青光眼',
    detail:
      '患上老年性白內障，晶體可變得腫脹，體積增加，把虹膜推前。因此，眼睛前房較淺、房角較窄的患者，如患上白內障，前房可能進一步變淺，甚至導致房角關閉，以致類似急性閉角型青光眼的急性眼壓升高。部分病人也可能因膨脹的晶體阻擋瞳孔，發生瞳孔阻滯，房水在後方無法流出，導致眼壓急劇升高，引發急性青光眼。',
    img: '',
  },
  {
    id: '5',
    text: '外傷性眼內積血繼發性青光眼',
    detail: [
      '(1)眼睛受外傷後，大量前房積血或小梁損傷會引致早期急性眼壓升高。紅血球堆積在小梁網上、血塊阻塞瞳孔或小梁網炎性水腫，使房水排出受阻。',
      '(2)玻璃體積血、分解的血紅蛋白被巨噬細胞吞噬或紅血球退化，可阻塞小梁網，令房水外流受阻而引致眼壓升高，引起溶血性青光眼或血影細胞性青光眼。',
    ],
    img: '',
  },
  {
    id: '6',
    text: '房角後退性青光眼',
    detail:
      '眼球鈍挫傷後，房角劈裂，以致傷後早期、數月、甚至十多年後發生眼壓升高，前房角鏡檢查可見房角異常增寬。房角劈裂者應定期檢查，測量眼壓。',
    img: '',
  },
  {
    id: '7',
    text: '新生血管性青光眼',
    detail: [
      '由於視網膜中央靜脈阻塞、糖尿病視網膜病變等血管紊亂疾病而引起新生血管性青光眼。此類青光眼的病因複雜，病理變化主要是眼後節缺氧或局部眼前節缺氧，引起虹膜上及房角小梁網處形成纖維血管膜，導致周邊虹膜前黏連，阻礙房水排出，令眼壓升高。',
      '其一般症狀為眼痛、眼脹、眼壓升高等。眼壓可達至60mmHg以上，常伴角膜水腫、虹膜新生血管、瞳孔緣色素外翻、房角內不同程度的周邊前黏連等。',
    ],
    img: '',
  },
  {
    id: '8',
    text: '睫狀環阻滯性青光眼',
    detail:
      '又名惡性青光眼，是一種繼發性閉角型青光眼。多見於內眼治療，特別是接受青光眼過濾性治療後，由於睫狀環較小，晶狀體相對較大，當睫狀體水腫充血，睫狀環便進一步變小，與晶體赤道部或玻璃體相貼，以致後房水不能進入前房，向後逆流而積存在玻璃體腔內。同時，虹膜和晶狀體被向前推擠，使前房變淺，房角關閉。若一隻眼出現睫狀環阻滯性青光眼，另一隻眼也有發生類似疾病的風險。',
    img: '',
  },
]
// 动态展示先天性青光眼模块
const action = ref(0)
const kindSelect = (i: number) => {
  action.value = i
}
// 青光眼高危人群
const crowd = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/5d8b794484273cbe.png',
    text: '年齡超過40歲\n(60歲以上患青光眼\n機會增加6倍)',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/5064b37ea2ec1236.png',
    text: '有青光眼家族遺傳病史',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/600a6ca70769660d.png',
    text: '深近視或嚴重遠視',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/bc02fc8bab322c86.png',
    text: '患糖尿病',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/3d99ac56efdb9366.png',
    text: '高血壓患者',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/8a90c79bd5022fbf.png',
    text: '患心血管疾病',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1a86d61e93b74709.png',
    text: '眼曾受過眼創傷',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/03f99346138862e1.png',
    text: '長期使用類固醇',
  },
]
// 青光眼主要診斷方法
const diagnostic = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e399ba83f28b9812.png',
    text: '眼壓檢查',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/bdc9d326f529ed42.png',
    text: '視野測試',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/997263179e4722a8.png',
    text: '裂隙燈檢查',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2c03b6364947c4c5.png',
    text: '前房角接觸鏡檢查',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b098baaa8a2cbdbc.png',
    text: '視神經損傷程度的測試',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/eef206cba5ab506d.png',
    text: '檢查眼部房水排出\n是否通暢',
  },
]
// 青光眼的治療
const treat = [
  {
    remedy: '治療方案',
    name: '治療名稱',
    range: '適用範圍',
  },
  {
    remedy: '常用治療方案',
    name: [
      '小梁切除術',
      '非穿透性小梁術',
      '導管植入術',
      '睫狀體冷凝術或光凝術',
    ],
    range: [
      '應用廣泛，適用於所有需要做眼外濾過術的青光眼',
      '適用於開角型青光眼，特別是晚期視野缺損嚴重的\n患者；對閉角型青光眼不適用',
      '適用於前2種方案效果不佳或惡性青光眼患者',
      '適用於青光眼末期或多次青光眼手術失敗後',
    ],
  },
  {
    remedy: '急性青光眼\n治療方案',
    name: ['前房穿刺術', '激光虹膜邊緣成形術'],
    range: [
      '適用於急性青光眼的嚴重症狀',
      '作為預防急性青光眼發作的傳統治療方式',
    ],
  },
  {
    remedy: '合併白內障\n的手術方案',
    name: '白內障手術',
    range: '適用於有白內障的青光眼患者',
  },
]
// 青光眼预防
const guardAgainst = [
  {
    id: '1',
    text: '定期安排眼科檢查',
    detail: '建議40歲以上或青光眼高危人士，每半年或一年接受一次眼睛檢查。',
  },
  {
    id: '2',
    text: '預防深近視',
    detail: '從小開始養成良好用眼習慣，以免深近視或遠視增加青光眼風險。',
  },
  {
    id: '3',
    text: '保持良好生活習慣',
    detail:
      '糖尿病、高血壓、心血管疾病都可能增加患青光眼機會。戒煙戒酒、充分睡眠、均衡飲食、多做帶氧運動，可有效預防青光眼。',
  },
]
</script>

<template>
  <div>
    <div class="glaucoma">
      <!-- 青光眼 -->
      <div>
        <div>
          <div>青光眼</div>
          <div>GLAUCOMA</div>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/fb9e1aefd79e4a11.png"
          />
          <img
            src="https://static.cmereye.com/imgs/2023/05/c3b55dfc41770b3d.png"
          />
        </div>
      </div>
      <!-- 什麼是青光眼？ -->
      <div>
        <div>什麼是青光眼？</div>
        <div>
          青光眼是一種視神經病變。視神經就像電纜般，把眼睛看到的景物傳送到大腦視覺中樞。青光眼患者先經歷周邊視野損害，然後出現中央視力下降，嚴重更會失明。早至中期的慢性青光眼基本沒有病徵，所以不少患者難以察覺，當病情發展到後期，死去的神經細胞已藥石無靈，因此青光眼有「視力小偷」的別稱。
        </div>
      </div>
      <!-- 青光眼成因 -->
      <div>
        <div>青光眼成因</div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/b687a1dc53df1fe7.png"
              alt="青光眼成因"
              srcset=""
            />
          </div>
          <div>
            <div>
              青光眼主要是由於眼球內壓力（眼壓）上升所致。位於眼晴前方的前房，充滿清澈的分泌液（房水）不停地流入，再經由前房角流出。如果房水的流動遇上阻塞，不能排出房水，就會導致眼壓增加，對視神經造成壓迫，令到血液循環不佳而使視神經受損。
            </div>
            <div>
              高度近視及長期使用類固醇眼藥人士，或眼球有外傷撞擊的病史，會有較大機會患上青光眼。另外，偏頭痛、心血管疾病、雷諾氏症候群、低血壓、高膽固醇症、高血脂症、糖尿病等，這些全身性疾病均可能引致青光眼。
            </div>
          </div>
        </div>
        <div>
          <div>如您是青光眼高危人士</div>
          <div>立即WhatsApp預約檢查</div>
        </div>
      </div>
      <!-- 青光眼的症狀 -->
      <div>
        <div>青光眼的症狀</div>
        <div>
          <div>
            青光眼分為不同種類，因此症狀亦有所不同，以下是青光眼患者常見症狀︰
          </div>
          <div>
            <div v-for="(item, index) in symptoms" :key="index">
              <img :src="item.img" :alt="item.text" srcset="" />
              <div>{{ item.text }}</div>
            </div>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="83px"
                height="83px"
              >
                <image
                  x="0px"
                  y="0px"
                  width="83px"
                  height="83px"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABaFBMVEXtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtpKj2ztD88vL//v72ztHto6f65uf////1zM7vq67++vr43N7xtbjxtrr76+v77O30xcf0xsnup6v99vf31dfwsbT//f365efzv8Lxubzupan98/PzxMbyvL720NLvrK/++/zvrbD53uD1y830xMb54OHxuLv20dP1ysz87e7319n0yMv53d/319juqa3++Pj64+T43d742dr76erwtLf88PD99vb87/Dzw8X+/Pzupqn99PXtpaj99fbupqr209TvrrLvqq754uPxt7ryvcD88PH66On20tTws7bwsrXzw8b++/v0xcjzwcPyur3zwsXzwML99/fzvsH76On//P342Nr42dvuqq3mdJwxAAAAH3RSTlMAB0+Uy+r6lVARg+0SXOsEm5wFA66vnluFCO6XxvkGzxWqqgAAAAFiS0dEJy0PqCMAAAAHdElNRQfnBQsOOQzV2GVwAAACvklEQVRYw8XZ61cSQRQA8KVECZSyB1Zas0I4KGEkCD7C6KlkoYmhmJVp2vuBFf77Me0uzMzOWXZn7xzvJ+buub/DYYZhuKNpVgTOnO0L9iOJ6A/2DYQCGh/nwhEZrRuR8CArDkX9gSSiQxR4/oJ/kMTwRUu8dBlGROiKZQ5DiQjFDHEETkRohIiDQUgySuY9DCkidFXTrl2HJSMBLQQrIhTSRqHJUW0MmhzTAL6JbES1G9BkvwYtInSKpD4eT8Rv6YBkcgKTmEjCkSlsRAqMnJwyyalJKDKNrUgDkbdxNzIw5DRF3uk5Q27ILKbjLgA5k2PI3Ix/Mo/ZyPsmZwscWZj1Sxb/O3Pk5bxhFn2Sc9hGGgNpcmHRUO6RQckkFxf8kEumkqXeMcZLPsj7ZXo1dsjyA3nyoYU8IqPHnVl/Ik0+7RjLZLjSXUnzkmSy0iGe0R9sOypJOXK1Szwn4xfUgl+VIqtrXWGdJF5S5FpVhtyghBpJrNPfyw0JcjNBAa9IpkaTiU3vJAPUSWaL2T5qnsltpr5BUnV2S9r2SO68Zut327kym3rz1hu5zO2S7V9bnUvhd57IvQZX3t533/NkY88Luc+XH7T3dz6H9z2QJVv1B4QObElcck3qh7biraOjip081N2SKew2Ui7JzqmqdwjOXUIy7VoUnbtEZEZQWfj46fN4Q2Rm3JDTgsIV8uCLiLSduwRkVlS4Q54kv4oefetJcqcqM4y3Ipw2/txlJ/OiMvydPPohnqF8D9J2qjIXy89d/VdTTHLnLhtZdLV02Cg6kscSIsbHTmRNivztRP6RIgtOZF2KzDmRf6XIlhNZjUuI8RPHRXTSanoEmy1GPM2/+F5IBe0SBU0dBa0nBQ0yBW08Bc1GBS1RFY1b2Pay2a6PwYkxq/kP16q/qe5CQcW1h5LLGXKFFBqAuUL6B2mwXEc2v3ODAAAAAElFTkSuQmCC"
                />
              </svg>
              <div>
                如果出現以上情況，建議盡快聯絡眼科專科醫生進行檢查，否則視力可能快速退化，甚至有機會在幾天內失明。
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="18px"
              height="24px"
            >
              <image
                x="0px"
                y="0px"
                width="18px"
                height="24px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAMAAADAi10DAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEX///9Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo57///+3G/yLAAAAKXRSTlMAAJkGwhXi4zL1WP6IiQO1D7KnqBLkRpMK2DX7Nn+ABMnKJ2wBuRvtV8Na3ggAAAABYktHRACIBR1IAAAAB3RJTUUH5wULDjk49GyRxQAAAJhJREFUGNOd0EkSgjAURdE8GgWigEorKkhr9r9BISGdQ+/o1xm9+oQQh+kcwnM9JZ4rCP5hl6OPnRCEXMIAihDRVWgEg3Ba6QyL4oQlsU1ILyk0/dmV/XQjWW5LnhEU1BRaYJ1QmlRio6rWUleccG+kNA8IwlPSC5LaTsi7VYSePyzsoQnDRgNMGifGptEizMsywyZ8Inl9AfVQG4htGbFwAAAAAElFTkSuQmCC"
              />
            </svg>
            <div>青光眼的惡化過程</div>
          </div>
          <div>
            <div v-for="(item, index) in worsen" :key="index">
              <div><img :src="item.img" :alt="item.text" srcset="" /></div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div>
          <div>不想青光眼惡化？</div>
          <div>立即致電預約檢查</div>
        </div>
        <div></div>
      </div>
      <!-- 青光眼的類別 -->
      <div>
        <!-- 慢性青光眼 -->
        <div>
          <div>
            <div>
              <div>Chronic Glaucoma</div>
              <div>慢性青光眼</div>
            </div>
          </div>
          <div>
            <div>
              屬較常見的青光眼種類，患者早期沒有明顯病徵，但隨著病情惡化，視力會慢慢減退。因慢性青光眼的病徵不明顯，在視力變化的初期，患者有機會以為只是用眼過度或者老化導致視力變差，直到視野範圍慢慢收窄才察覺。當病情嚴重時，大部分患者已出現視野缺失及喪失大部分視力，所以慢性青光眼有「視力小偷」之稱，偷偷地奪去患者視力。
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/8bbf23a05ed24544.png"
                alt="青光眼種類"
                srcset=""
              />
            </div>
          </div>
        </div>
        <!-- 急性青光眼 -->
        <div>
          <div>
            <div>
              <div>Acute Glaucoma</div>
              <div>急性青光眼</div>
            </div>
          </div>
          <div>
            <div>
              屬於眼科急症，病情突如其來，患者眼壓會在短時間內上升，突然出現視力模糊，看燈光時有環形彩虹圈，有眼紅、眼痛、頭痛、噁心、嘔吐等症狀。如出現以上情況，應該立刻求醫。眼科專科醫生會以不同治療方法（口服藥物，眼藥水，甚至小手術等）迅速把眼壓降低以保護視神經，後續如有需要再考慮其他治療（例如激光周邊虹膜切開術等）。若急性青光眼沒有及時治療，患者視力可能永久受損。
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/a23816f98522475c.png"
                alt="眼科急症"
                srcset=""
              />
            </div>
          </div>
        </div>
        <!-- button -->
        <div>
          <div>急性青光眼會突然來襲</div>
          <div>立即致電預約診治</div>
        </div>
        <!-- 先天性青光眼 -->
        <div>
          <div>
            <div>
              <div>Congenital Glaucoma</div>
              <div>先天性青光眼</div>
            </div>
          </div>
          <div>
            <div>
              大多於嬰兒出生時已出現，因胚胎期前房角發育異常，阻礙了房水排出所致的遺傳性眼病。這種青光眼有1/3機會出現於胎兒期，即出生後已有典型表徵；2/3機會出現於出生後，其發生率為1:5000-10000。初生時已有青光眼的表徵，稱為嬰幼兒型青光眼；3歲以上及30歲以下人士稱為青少年型青光眼。
            </div>
            <div>
              雖然青光眼是不可逆轉的眼疾，但可以抑制和控制。先天性青光眼不易被發現，而且如果發現較晚則不易治療。
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="18px"
                height="24px"
              >
                <image
                  x="0px"
                  y="0px"
                  width="18px"
                  height="24px"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAMAAADAi10DAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEX///9Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo57///+3G/yLAAAAKXRSTlMAAJkGwhXi4zL1WP6IiQO1D7KnqBLkRpMK2DX7Nn+ABMnKJ2wBuRvtV8Na3ggAAAABYktHRACIBR1IAAAAB3RJTUUH5wULDjk49GyRxQAAAJhJREFUGNOd0EkSgjAURdE8GgWigEorKkhr9r9BISGdQ+/o1xm9+oQQh+kcwnM9JZ4rCP5hl6OPnRCEXMIAihDRVWgEg3Ba6QyL4oQlsU1ILyk0/dmV/XQjWW5LnhEU1BRaYJ1QmlRio6rWUleccG+kNA8IwlPSC5LaTsi7VYSePyzsoQnDRgNMGifGptEizMsywyZ8Inl9AfVQG4htGbFwAAAAAElFTkSuQmCC"
                />
              </svg>
              先天性青光眼症狀
            </div>
            <div>
              <div v-for="item in congenital" :key="item.id">
                <div>
                  <span>{{ item.id }}</span
                  >{{ item.title }}
                </div>
                <div>
                  <div>{{ item.text }}</div>
                </div>
                <div><img :src="item.img" :alt="item.title" /></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 原發性青光眼 -->
        <div>
          <div>
            <div>
              <div>Primary Glaucoma</div>
              <div>原發性青光眼</div>
            </div>
          </div>
          <div>
            <div>
              <div>
                原發性青光眼是胎兒在發育過程中，前房角發育出現異常，小樑網管系統不能發揮有效房水引流功能，而導致眼壓升高。
              </div>
              <div>
                由於這是一種慢性眼疾，可導致不可逆轉的視功能障礙。多數確診的病人需長期治療，如不堅持治療，視野範圍會越來越小，最終引致失明。原發性青光眼可能受家族遺傳影響，如患者本身有深近視或家人曾經患有青光眼均會增加患上青光眼的風險。
              </div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/380b332741dacedb.png"
                alt="眼科急症"
                srcset=""
              />
            </div>
          </div>
        </div>
        <!-- 先天性青光眼 -->
        <div>
          <div>
            <div>
              <div>Secondary Glaucoma</div>
              <div>繼發性青光眼</div>
            </div>
          </div>
          <div>
            <div>
              有別於其他青光眼，繼發性青光眼是由於某些眼病或全身疾病影響或破壞了正常房水循環，使房水排出受阻而引起眼壓升高，病因比較明確。
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="18px"
                height="24px"
              >
                <image
                  x="0px"
                  y="0px"
                  width="18px"
                  height="24px"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAMAAADAi10DAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEX///9Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo57///+3G/yLAAAAKXRSTlMAAJkGwhXi4zL1WP6IiQO1D7KnqBLkRpMK2DX7Nn+ABMnKJ2wBuRvtV8Na3ggAAAABYktHRACIBR1IAAAAB3RJTUUH5wULDjk49GyRxQAAAJhJREFUGNOd0EkSgjAURdE8GgWigEorKkhr9r9BISGdQ+/o1xm9+oQQh+kcwnM9JZ4rCP5hl6OPnRCEXMIAihDRVWgEg3Ba6QyL4oQlsU1ILyk0/dmV/XQjWW5LnhEU1BRaYJ1QmlRio6rWUleccG+kNA8IwlPSC5LaTsi7VYSePyzsoQnDRgNMGifGptEizMsywyZ8Inl9AfVQG4htGbFwAAAAAElFTkSuQmCC"
                />
              </svg>
              先天性青光眼症狀
            </div>
            <div>
              <div v-for="(item, index) in kind" :key="item.id">
                <div
                  :class="{ bground: index === action }"
                  @click="kindSelect(index)"
                >
                  <span :class="{ font: index === action }">{{ item.id }}</span>
                  <div>{{ item.text }}</div>
                </div>
                <div :class="{ action: index === action }">
                  <div>
                    <div v-if="Array.isArray(item.detail)">
                      <div v-for="(ele, index) in item.detail" :key="index">
                        {{ ele }}
                      </div>
                    </div>
                    <div v-else>{{ item.detail }}</div>
                  </div>
                  <div v-if="item.img">
                    <img :src="item.img" :alt="item.text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 青光眼高危人士 -->
      <div>
        <div>青光眼高危人士</div>
        <div>
          <div v-for="(item, index) in crowd" :key="index">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="277px"
                height="321px"
              >
                <path
                  fill-rule="evenodd"
                  stroke="rgb(158, 213, 209)"
                  stroke-width="4px"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill="none"
                  d="M137.493,316.812 L1.985,238.344 L1.985,81.409 L137.493,2.942 L273.000,81.409 L273.000,238.344 L137.493,316.812 Z"
                />
              </svg>
              <img :src="item.img" :alt="item.text" />
            </div>
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
      <!-- 青光眼主要診斷方法 -->
      <div>
        <div>青光眼主要診斷方法</div>
        <div>
          臨床診斷時，患者會接受一系列的檢查及測試，包括︰視力檢查、視野檢查、眼底檢查、眼壓測度等，眼科專科醫生還會根據患者過去的病史及家族史診斷，常見的檢查如下︰
        </div>
        <div>
          <div v-for="(item, index) in diagnostic" :key="index">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="392px"
                height="387px"
              >
                <defs>
                  <filter id="Filter_0">
                    <feFlood
                      flood-color="rgb(161, 215, 207)"
                      flood-opacity="1"
                      result="floodOut"
                    />
                    <feComposite
                      operator="atop"
                      in="floodOut"
                      in2="SourceGraphic"
                      result="compOut"
                    />
                    <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
                  </filter>
                </defs>
                <g filter="url(#Filter_0)">
                  <path
                    fill-rule="evenodd"
                    fill="rgb(178, 223, 216)"
                    d="M391.396,234.665 C391.396,342.651 303.856,386.376 195.870,386.376 C87.883,386.376 0.343,342.651 0.343,234.665 C0.343,231.136 0.442,227.629 0.627,224.146 C0.455,223.099 0.343,222.033 0.343,220.938 L0.343,20.553 C0.343,9.644 9.186,0.800 20.093,0.800 L371.641,0.800 C382.548,0.800 391.391,9.644 391.391,20.553 L391.391,220.938 C391.391,222.025 391.280,223.084 391.111,224.123 C391.296,227.614 391.396,231.128 391.396,234.665 Z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div><img :src="item.img" :alt="item.text" /></div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 青光眼的治療 -->
      <div>
        <div>青光眼的治療</div>
        <div>
          <div>
            治療青光眼以有效控制眼壓、防止或減慢青光眼的惡化為目標。眼科專科醫生初期一般以藥物控制青光眼病情，達至保護及保持病人的視神經組織及其功能，減少視神經進一步的損害。
          </div>
          <div>
            若用藥後仍無法控制病情，醫生會考慮採用手術治療，以平衡房水的生成和排出，使眼球壓力降至安全水平，達致目標眼壓。常見手術方案如下︰
          </div>
        </div>
        <div>
          <div v-for="(item, index) in treat" :key="index">
            <div>{{ item.remedy }}</div>
            <div>
              <div v-if="Array.isArray(item.name)">
                <div v-for="(con, index) in item.name" :key="index">
                  {{ con }}
                </div>
              </div>
              <div v-else>{{ item.name }}</div>
            </div>
            <div>
              <div v-if="Array.isArray(item.range)">
                <div v-for="(con, index) in item.range" :key="index">
                  {{ con }}
                </div>
              </div>
              <div v-else>{{ item.range }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 預防青光眼 -->
      <div>
        <div>預防青光眼</div>
        <div>
          <div>
            <div v-for="item in guardAgainst" :key="item.id">
              <div>
                <div>{{ item.id }}</div>
                <div>{{ item.text }}</div>
              </div>
              <div>{{ item.detail }}</div>
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/a4fa152ef992618f.png"
              alt="預防青光眼"
            />
          </div>
        </div>
      </div>

      <!-- 青光眼誤區 -->
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="106px"
            height="67px"
          >
            <image
              x="0px"
              y="0px"
              width="106px"
              height="67px"
              xlink:href="data:img/png;base64,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"
            />
          </svg>
          <div>青光眼誤區</div>
        </div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :style="{ '--subassembly-color': '#58a49f' }"
          />
        </div>
      </div>
    </div>
    <!-- 下载和公共脚部 -->
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <p>青光眼</p>
          <p>下載小冊子</p>
        </div>
      </div>
    </div>
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#bbe0d5;'}`"
    />
  </div>
</template>

<style lang="scss" scoped>
.glaucoma {
  margin: auto 300px;
  position: relative;

  // 青光眼
  & > div:nth-child(1) {
    position: absolute;
    top: 202px;
    right: -300px;
    width: 541px;
    height: 288px;
    background-color: #f2f2f2;

    & > div {
      position: absolute;
      top: -110px;
      right: 300px;
      text-align: right;
    }

    & > div:first-child {
      font-family: 'NotoSansCJKtc-Bold';
      font-size: 107px;
      font-weight: bold;
      line-height: 1;
      font-stretch: normal;
      letter-spacing: 12px;
      color: #9bcfcc;

      & > div:nth-child(2) {
        font-family: 'DINCondensed';
        display: block;
        font-size: 140px;
        letter-spacing: 13px;
      }
    }

    & > div:nth-child(2) {
      left: -334px;
      right: 0;
      top: 120px;
      & > img:nth-child(2) {
        margin-top: 5px;
      }
    }
  }

  // 什麼是青光眼？
  & > div:nth-child(2) {
    padding-top: 689px;

    & > div:nth-child(1) {
      margin: auto;
      font-family: 'NotoSansHK-Medium';
      font-size: 50px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 48px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
      margin-bottom: 50px;
    }

    & > div:nth-child(2) {
      font-family: 'NotoSansHK-Regular';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 46px;
      letter-spacing: 0px;
      color: #515151;
      box-sizing: border-box;
      padding: 47px 44px 51px;

      border-radius: 15px;
      border: solid 3px #9ed5d1;
    }
  }

  // 青光眼成因
  & > div:nth-child(3) {
    & > div:nth-child(1) {
      text-align: center;
      margin-bottom: 100px;
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div:nth-child(1) {
        border-radius: 30px;
        width: 625px;
        height: 385px;
        background-color: #ffffff;
        border: solid 10px #9ed5d1;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
      }

      & > :nth-child(2) {
        width: 765px;
        height: 448px;
        border-radius: 30px;
        background-image: linear-gradient(#e9f8f7, #e9f8f7),
          linear-gradient(#eef9fe, #eef9fe);
        background-blend-mode: normal, normal;
        z-index: 1;
        position: absolute;
        right: 0;
        padding-left: 96px;
        padding-top: 44px;
        padding-bottom: 46px;
        padding-right: 20px;

        font-family: 'NotoSansHK-Regular';
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #515151;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    & > div:nth-child(3) {
      cursor: pointer;
      margin: auto;
      margin-top: 150px;
      width: 508px;
      height: 140px;
      background-image: linear-gradient(-90deg, #7fdbd5 0%, #93ded5 100%),
        linear-gradient(#eda2a6, #eda2a6);
      background-blend-mode: normal, normal;
      box-shadow: -2px 2px 7px 0px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      & > div {
        font-family: 'NotoSansHK-Regular';
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 50px;
        letter-spacing: 0px;
        color: #ffffff;
      }
    }
  }

  // 青光眼的症狀
  & > div:nth-child(4) {
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin-top: 71px;
        font-family: 'NotoSansHK-Regular';
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        & > div {
          padding: 13px;
          width: 172px;
          height: 289px;
          background-image: linear-gradient(#a1d7cf, #a1d7cf),
            linear-gradient(#b2dfd8, #b2dfd8);
          background-blend-mode: normal, normal;
          box-shadow: inset -3px 4px 5px 0px rgba(178, 223, 216, 0.8);
          border-radius: 85px;

          & > div {
            white-space: pre-wrap !important;
            font-family: 'NotoSansHK-Bold';
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #ffffff;
            text-align: center;
            margin-top: 19px;
          }
        }
      }

      & > div:nth-child(3) {
        position: relative;
        margin-top: 85px;

        & > div {
          & > svg {
            position: absolute;
            left: -1px;
            top: -5px;
          }

          & > div {
            height: 72px;
            border: solid 4px #9ed5d1;
            font-family: 'NotoSansHK-Regular';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 2.8;
            letter-spacing: 0px;
            color: #63a89f;
            text-align: right;
            padding-right: 88px;
            border-radius: 18px;
          }
        }
      }
    }

    & > div:nth-child(3) {
      margin-top: 85px;

      & > div:nth-child(1) {
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-bottom: 26px;

        & > div {
          margin-left: 10px;
          font-family: 'NotoSansHK-Bold';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #58a49f;
        }
      }

      & > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div {
          position: relative;

          & > div:nth-child(2) {
            margin-top: 34px;
            font-family: 'NotoSansHK-Medium';
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #63a89f;
            text-align: center;
          }
        }

        & > div:nth-child(1)::after {
          content: '';
          position: absolute;
          top: 30%;
          right: -15%;
          z-index: 5;
          width: 80px;
          height: 80px;
          background-image: url('https://static.cmereye.com/imgs/2023/05/bb28c65c794254b0.png');
        }

        & > div:nth-child(2)::after {
          content: '';
          position: absolute;
          top: 30%;
          right: -15%;
          z-index: 5;
          width: 80px;
          height: 80px;
          background-image: url('https://static.cmereye.com/imgs/2023/05/bb28c65c794254b0.png');
        }
      }
    }

    & > div:nth-child(4) {
      cursor: pointer;
      margin: auto;
      margin-top: 104px;
      width: 508px;
      height: 140px;
      background-image: linear-gradient(-90deg, #7fdbd5 0%, #93ded5 100%),
        linear-gradient(#eda2a6, #eda2a6);
      background-blend-mode: normal, normal;
      box-shadow: -2px 2px 7px 0px rgba(0, 0, 0, 0.35);
      border-radius: 20px;

      font-family: 'NotoSansHK-Regular';
      text-align: center;
      font-size: 32px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 50px;
      letter-spacing: 0px;
      color: #ffffff;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  // 青光眼的類別
  & > div:nth-child(5) {
    & > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;

      & > div:nth-child(1) {
        width: 446px;
        height: 340px;
        background-image: linear-gradient(#a1d7cf, #a1d7cf),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        border-radius: 10px;
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 1;
        writing-mode: vertical-lr;

        & > div {
          margin-top: 50px;
          margin-left: 37px;

          & > div:nth-child(1) {
            font-family: 'Metropolis-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        width: 1163px;
        height: 350px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.29);
        border-radius: 10px;
        z-index: 3;
        position: relative;
        right: 0;
        // 子元素布局
        display: flex;
        align-items: center;
        padding: 36px 40px;

        & > div:nth-child(1) {
          width: calc(100% - 280px);
          margin-right: 26px;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 44px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
    }

    & > div:nth-child(2) {
      margin-top: 150px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;

      & > div:nth-child(1) {
        width: 446px;
        height: 340px;
        background-image: linear-gradient(#a1d7cf, #a1d7cf),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        border-radius: 10px;
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 1;
        writing-mode: vertical-lr;

        & > div {
          margin-top: 50px;
          margin-left: 37px;

          & > div:nth-child(1) {
            font-family: 'Metropolis-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        width: 1163px;
        height: 350px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.29);
        border-radius: 10px;
        z-index: 3;
        position: relative;
        right: 0;
        // 子元素布局
        display: flex;
        align-items: center;
        padding: 36px 40px;

        & > div:nth-child(1) {
          width: calc(100% - 280px);
          margin-right: 26px;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 44px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
    }

    & > div:nth-child(3) {
      cursor: pointer;
      margin: 100px auto;

      width: 508px;
      height: 140px;
      background-image: linear-gradient(-90deg, #7fdbd5 0%, #93ded5 100%),
        linear-gradient(#eda2a6, #eda2a6);
      background-blend-mode: normal, normal;
      border-radius: 20px;
      font-family: 'NotoSansHK-Regular';
      font-size: 32px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 50px;
      letter-spacing: 0px;
      color: #ffffff;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    & > div:nth-child(4) {
      margin-top: 150px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;

      & > div:nth-child(1) {
        width: 446px;
        height: 340px;
        background-image: linear-gradient(#a1d7cf, #a1d7cf),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        border-radius: 10px;
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 1;
        writing-mode: vertical-lr;

        & > div {
          margin-top: 50px;
          margin-left: 37px;

          & > div:nth-child(1) {
            font-family: 'Metropolis-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        width: 1163px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.29);
        border-radius: 10px;
        z-index: 3;
        position: relative;
        right: 0;
        // 子元素布局
        display: flex;
        flex-direction: column;
        padding: 60px 44px 77px 41px;

        & > div:nth-child(1),
        div:nth-child(2) {
          margin-right: 26px;

          font-family: 'NotoSansHK-Regular';
          font-size: 23px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 2;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          margin-top: 30px;
        }

        & > div:nth-child(3) {
          & > svg {
            margin-right: 10px;
          }

          margin-top: 69px;
          display: flex;
          align-items: center;

          font-family: 'NotoSansHK-Bold';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #58a49f;
        }

        & > div:nth-child(4) {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-left: 16px;
          margin-top: 45px;

          & > div {
            width: 312px;

            & > div:nth-child(1) {
              display: flex;
              justify-content: center;
              flex-direction: row;
              margin-bottom: 8px;

              font-family: 'NotoSansHK-Medium';
              font-size: 26px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 36px;
              letter-spacing: 0px;
              color: #515151;

              & > span {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                background: #63a89f;
                text-align: center;
                margin-right: 10px;

                font-family: 'SourceHanSansCN-Bold';
                font-size: 24px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 36px;
                letter-spacing: 0px;
                color: #ffffff;
              }
            }

            & > div:nth-child(2)::before {
              content: '';
              width: 100%;
              border-top: 1px solid #959595;
              display: block;
            }

            & > div:nth-child(2) {
              width: 100%;
              height: 200px;
              font-family: 'NotoSansHK-Regular';
              font-size: 24px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 36px;
              letter-spacing: -2px;
              color: #515151;
            }
          }
        }
      }
    }

    & > div:nth-child(5) {
      margin-top: 150px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;

      & > div:nth-child(1) {
        width: 446px;
        height: 340px;
        background-image: linear-gradient(#a1d7cf, #a1d7cf),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        border-radius: 10px;
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 1;
        writing-mode: vertical-lr;

        & > div {
          margin-top: 50px;
          margin-left: 37px;

          & > div:nth-child(1) {
            font-family: 'Metropolis-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        width: 1163px;
        height: 350px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.29);
        border-radius: 10px;
        z-index: 3;
        position: relative;
        right: 0;
        // 子元素布局
        display: flex;
        align-items: center;
        padding: 36px 40px;

        & > div:nth-child(1) {
          width: calc(100% - 280px);
          margin-right: 26px;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 44px;
          letter-spacing: 0px;
          color: #515151;

          & > div:nth-child(2) {
            margin-top: 16px;
          }
        }
      }
    }

    & > div:nth-child(6) {
      margin-top: 150px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;

      & > div:nth-child(1) {
        width: 446px;
        height: 340px;
        background-image: linear-gradient(#a1d7cf, #a1d7cf),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        border-radius: 10px;
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 1;
        writing-mode: vertical-lr;

        & > div {
          margin-top: 50px;
          margin-left: 37px;

          & > div:nth-child(1) {
            font-family: 'Metropolis-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        width: 1163px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.29);
        border-radius: 10px;
        z-index: 3;
        position: relative;
        right: 0;
        // 子元素布局
        display: flex;
        flex-direction: column;
        padding: 60px 44px 77px 41px;

        & > div:nth-child(1) {
          margin-right: 26px;

          font-family: 'NotoSansHK-Regular';
          font-size: 23px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 2;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          margin-bottom: 48px;

          & > svg {
            margin-right: 10px;
          }

          margin-top: 57px;
          display: flex;
          align-items: center;

          font-family: 'NotoSansHK-Bold';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #58a49f;
        }

        & > div:nth-child(3) {
          & > div {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            position: relative;

            & > div:nth-child(1) {
              &.bground {
                background: #63a89f;
                color: #fff;
              }

              cursor: pointer;
              width: 427px;
              margin-right: 32px;
              position: relative;
              // background: #79b2ae;
              display: flex;
              font-family: 'NotoSansHK-Bold';
              font-size: 26px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 38px;
              letter-spacing: 0px;
              padding: 18px 0 18px 20px;
              color: #79b2ae;

              & > span {
                margin-right: 10px;
                border-radius: 50%;
                background: #fff;
                width: 40px;
                height: 40px;
                background-color: #79b2ae;
                font-family: 'NotoSansHK-Bold';
                font-size: 29px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 38px;
                letter-spacing: 0px;
                color: #fff;
                text-align: center;
              }

              .font {
                background: #fff;
                color: #63a89f;
              }
            }

            & > div:nth-child(2) {
              width: 590px;
              position: absolute;
              right: 30px;
              font-family: 'NotoSansHK-Regular';
              font-size: 24px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 38px;
              letter-spacing: 0px;
              color: #515151;
              border-left: 7px solid #79b2ae;
              padding-left: 11px;

              & > div > div:nth-child(1) {
                & > div:nth-child(1) {
                  margin-bottom: 30px;
                }
              }

              & > div:nth-child(2) {
                position: absolute;
              }

              display: none;

              &.action {
                display: block;
              }
            }

            .bground::after {
              content: '';
              width: 22px;
              height: 25px;
              background-image: url('https://static.cmereye.com/imgs/2023/05/9ead3fb225e93049.png');
              position: absolute;
              right: -32px;
            }
          }

          & > div:nth-child(7) {
            & > div:nth-child(2) {
              bottom: 0;
            }
          }

          & > div:nth-child(8) {
            & > div:nth-child(2) {
              bottom: 0;
            }
          }
        }
      }
    }
  }

  // 青光眼高危人士
  & > div:nth-child(6) {
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
    }

    & > div:nth-child(2) {
      margin-top: 87px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div:nth-child(n + 4) {
        margin-top: 42px;
      }

      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;

          & > img {
            z-index: 6;
            position: absolute;
          }
        }

        & > div:nth-child(2) {
          margin-top: 15px;

          width: 252px;
          white-space: pre-wrap;
          text-align: center;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
    }
  }

  // 青光眼主要診斷方法
  & > div:nth-child(7) {
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
    }

    & > div:nth-child(2) {
      margin-top: 74px;

      font-family: 'NotoSansHK-Regular';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 38px;
      letter-spacing: 0px;
      color: #515151;
    }

    & > div:nth-child(3) {
      margin-top: 80px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div:nth-child(n + 3) {
        margin-bottom: 52px;
      }

      & > div {
        position: relative;
        display: flex;
        justify-content: center;

        & > div:nth-child(2) {
          position: absolute;
          z-index: 5;

          & > div:nth-child(1) {
            padding: 18px 17px;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Bold';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 0px;
            color: #ffffff;
            text-align: center;
            margin-top: 20px;
            white-space: pre-wrap;
          }
        }
      }
    }
  }

  // 青光眼的治療
  & > div:nth-child(8) {
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
    }

    & > div:nth-child(2) {
      margin-top: 75px;
      font-family: 'NotoSansHK-Regular';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 38px;
      letter-spacing: -1px;
      color: #515151;

      & > div:nth-child(2) {
        margin-top: 30px;
      }
    }

    & > div:nth-child(3) {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      border: 1px solid #939c9b;

      & > div {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #939c9b;

        & > div:nth-child(1) {
          width: 314px;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: pre-wrap;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          width: 384px;

          & > div > div {
            height: 106px;
            display: flex;
            align-items: center;
            justify-content: center;
            white-space: pre-wrap;

            font-family: 'NotoSansHK-Medium';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 0px;
            color: #515151;
            border-top: 1px solid #939c9b;
            border-left: 1px solid #939c9b;
          }
        }

        & > div:nth-child(3) {
          width: 640px;

          & > div > div {
            height: 106px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 48px;
            white-space: pre-wrap;

            font-family: 'NotoSansHK-Regular';
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 0px;
            color: #515151;
            border-top: 1px solid #939c9b;
            border-left: 1px solid #939c9b;
          }
        }
      }

      & > div:nth-child(1) {
        border-bottom: none;
        background-color: #5bbaac;
        height: 106px;

        & > div:nth-child(1) {
          color: #fff;
        }

        & > div:nth-child(2) {
          border: none;
          border-left: 1px solid #939c9b;
          display: flex;
          align-items: center;
          justify-content: center;

          font-family: 'NotoSansHK-Medium';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;

          & > div {
            border: none;
            color: #fff;
          }
        }

        & > div:nth-child(3) {
          width: 640px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-left: 1px solid #939c9b;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;

          & > div {
            border: none;
            color: #fff;
          }
        }
      }

      & > div:nth-child(2) {
        border-bottom: none;

        & > div:nth-child(1) {
          background-color: #6bc8ba;
          color: #fff;
        }
      }

      & > div:nth-child(3) {
        border-bottom: none;

        & > div:nth-child(1) {
          background-color: #7dcec2;
          color: #fff;
        }
      }

      & > div:nth-child(4) {
        border-bottom: none;

        & > div {
          height: 106px;
          border-top: 1px solid #939c9b;
          border-left: 1px solid #939c9b;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        & > div:nth-child(1) {
          background-color: #a1d7cf;
          color: #fff;
        }

        & > div:nth-child(2) {
          width: 384px;
          font-family: 'NotoSansHK-Medium';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(3) {
          width: 640px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
          justify-content: flex-start;
          padding-left: 48px;
        }
      }
    }
  }

  // 預防青光眼
  & > div:nth-child(9) {
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
    }

    & > div:nth-child(2) {
      margin-top: 150px;
      display: flex;
      justify-content: space-between;

      & > div:nth-child(1) {
        width: 43%;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 48px;

          & > div:nth-child(1) {
            display: flex;
            flex-direction: row;
            position: relative;

            & > div:nth-child(1) {
              width: 108px;
              height: 108px;
              border-radius: 50%;
              border: 6px solid #57a39f;
              background: #fff;
              z-index: 5;

              display: flex;
              align-items: center;
              justify-content: center;

              font-family: 'NotoSansHK-Bold';
              font-size: 55px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 38px;
              letter-spacing: 0px;
              color: #57a39f;
            }

            & > div:nth-child(2) {
              width: 588px;
              height: 85px;
              background-color: #91cfca;
              border-radius: 85px;
              position: absolute;
              left: 18px;
              bottom: 0;
              padding-left: 130px;

              display: flex;
              align-items: center;
              justify-content: flex-start;

              font-family: 'NotoSansHK-Regular';
              font-size: 49px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 38px;
              letter-spacing: 1px;
              color: #ffffff;
            }
          }

          & > div:nth-child(2) {
            margin-top: 30px;
            font-family: 'NotoSansHK-Regular';
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 31px;
            letter-spacing: 0px;
            color: #515151;
          }
        }

        & > div:nth-child(3) {
          margin-bottom: 0;
        }
      }
    }
  }

  // 青光眼誤區
  & > div:last-child {
    margin-top: 260px;

    & > div:nth-child(1) {
      margin-bottom: 60px;
      width: 384px;
      height: 76px;
      border: solid 4px #8ed4cc;
      background-image: linear-gradient(#dbfffb, #dbfffb),
        linear-gradient(#b3e2fa, #b3e2fa);
      background-blend-mode: normal, normal;
      border-radius: 76px;

      font-family: 'NotoSansHK-Bold';
      font-size: 46px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      display: flex;
      align-items: center;

      & > svg {
        margin-left: -18px;
        margin-top: -25px;
        margin-right: 15px;
      }
    }
  }

  // 公共使用
  & > div {
    margin-top: 180px;
  }

  & > div:first-child {
    margin: 0;
  }

  & > div:nth-child(2) {
    margin: 0;
  }
}

.action {
  display: block;
}

.dow {
  margin-top: 150px;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    width: 62.5%;
    height: 202px;
    background: #9ccfc8;
    position: relative;
    display: flex;
    align-items: center;

    & > div:nth-child(1) {
      margin-left: 520px;
      margin-right: 75px;

      & > img {
        width: 120px;
        height: 135px;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
