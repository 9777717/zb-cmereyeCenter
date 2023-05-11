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
            src="https://static.cmereye.com/imgs/2023/05/0d9057551d0ce216.png"
          />
          <img
            src="https://static.cmereye.com/imgs/2023/05/e5ca6db9212362ab.png"
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
        <!-- 1 -->
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
        <!-- 2 -->
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
        <div>
          <div>急性青光眼會突然來襲</div>
          <div>立即致電預約診治</div>
        </div>
        <div></div>
        <div></div>
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
    />
  </div>
</template>

<style lang="scss" scoped>
.glaucoma {
  margin: auto 300px;
  position: relative;

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
      color: #63bacc;

      & > div:nth-child(2) {
        font-family: 'DINCondensed';
        display: block;
        font-size: 140px;
        letter-spacing: 2px;
      }
    }

    & > div:nth-child(2) {
      left: -192px;
      right: 0;
      top: 120px;
    }
  }

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
  }

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
