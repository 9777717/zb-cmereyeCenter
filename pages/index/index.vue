<script lang="ts" setup>
// meta
definePageMeta({
  layout: 'page',
})
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
// 拨打电话
const callTel = () => {
  location.href = 'tel://+(852) 3956 2026'
}
</script>

<template>
  <div class="home">
    <img src="https://static.cmereye.com/imgs/2023/04/7397d0a1608d806d.jpg" />
    <div>
      <div>
        <div>professional</div>
        <div>Clinical</div>
        <div>Service</div>
      </div>
      <div>
        <div>
          <div>
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5.5L1 10"
                stroke="#2958A3"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>NEWS</div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/04/46ae5f25ec1a96fd.png"
            />
          </div>
          <div>
            【2023 夢想 ·
            齊躍動】「我是小小醫生體驗日將於2023年4月2日(星期日)」舉行，了解詳情。
          </div>
        </div>
        <div>
          <div>
            <svg
              width="10"
              height="15"
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.72727 0L0 2.72727L4.54545 7.27273L0 11.8182L2.72727 14.5455L10 7.27273L2.72727 0Z"
                fill="#2958A3"
              />
            </svg>
            <div>立即預約</div>
          </div>
          <div>
            <div @click="callTel()">
              <div>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9247 0C3.09078 0 0 2.41709 0 5.91754C0 6.38639 0.0682793 6.83703 0.154766 7.21029C0.277669 7.74742 0.83756 8.05696 1.35648 7.87033L4.86604 6.59578C5.22564 6.46377 5.4669 6.12238 5.4669 5.74001V4.10131C5.4669 3.6006 5.87657 3.19092 6.37729 3.19092H15.4812C15.9819 3.19092 16.3916 3.6006 16.3916 4.10131V5.74001C16.3916 6.12238 16.6328 6.46377 16.9924 6.59578L20.502 7.87033C21.0209 8.05696 21.5808 7.74742 21.7037 7.21029C21.7857 6.83703 21.8585 6.39094 21.8585 5.91754C21.8585 2.41709 18.7677 0 10.9338 0H10.9247Z"
                    fill="#2958A3"
                  />
                  <path
                    d="M18.6312 11.9123L14.9942 7.36487C14.7165 7.01892 14.5663 6.58648 14.5663 6.14039V5.46215C14.5663 4.96143 14.1566 4.55176 13.6559 4.55176H8.19357C7.69285 4.55176 7.28318 4.96143 7.28318 5.46215V6.14039C7.28318 6.58648 7.13296 7.01436 6.85529 7.36487L3.21828 11.9123C2.31244 13.0412 1.82083 14.4477 1.82083 15.8952V17.3018C1.82083 18.3078 2.63563 19.1226 3.64161 19.1226H18.2079C19.2138 19.1226 20.0286 18.3078 20.0286 17.3018V15.8952C20.0286 14.4477 19.537 13.0457 18.6312 11.9123ZM10.9247 16.3868C8.91278 16.3868 7.28318 14.7572 7.28318 12.7453C7.28318 10.7333 8.91278 9.10371 10.9247 9.10371C12.9367 9.10371 14.5663 10.7333 14.5663 12.7453C14.5663 14.7572 12.9367 16.3868 10.9247 16.3868Z"
                    fill="#2958A3"
                  />
                </svg>
              </div>
              <div>3056 2026</div>
            </div>
            <div @click="goWhatsApp()">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 24L1.72332 17.608C0.333494 15.1154 -0.108066 12.2067 0.479664 9.41575C1.06739 6.62476 2.64499 4.13866 4.92297 2.41368C7.20094 0.688691 10.0265 -0.1595 12.8811 0.0247802C15.7358 0.209061 18.428 1.41344 20.4638 3.4169C22.4996 5.42036 23.7424 8.08853 23.9642 10.9318C24.186 13.775 23.3718 16.6027 21.6712 18.8958C19.9705 21.1889 17.4974 22.7937 14.7056 23.4157C11.9139 24.0377 8.99074 23.6351 6.47267 22.2819L0 24ZM6.78479 19.8807L7.18509 20.1175C9.20823 21.3216 11.6034 21.7459 13.9188 21.3106C16.2343 20.8752 18.3098 19.6101 19.754 17.754C21.1981 15.8979 21.911 13.5791 21.7582 11.2351C21.6054 8.89101 20.5974 6.68372 18.9245 5.0296C17.2515 3.37547 15.0291 2.38887 12.6767 2.25591C10.3242 2.12295 8.00427 2.85281 6.15447 4.30783C4.30467 5.76284 3.0529 7.84241 2.63532 10.1542C2.21773 12.4661 2.6632 14.8503 3.88767 16.8573L4.1387 17.2698L3.17528 20.8412L6.78479 19.8807Z"
                    fill="#2958A3"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5964 13.2962C16.3513 13.1014 16.0647 12.9643 15.7582 12.8952C15.4517 12.8261 15.1333 12.8268 14.8271 12.8973C14.3671 13.0862 14.0699 13.7931 13.7726 14.157C13.7087 14.2431 13.6154 14.3033 13.5099 14.3265C13.4045 14.3497 13.2942 14.3342 13.1994 14.283C11.5162 13.6322 10.1063 12.4354 9.20084 10.8887C9.12324 10.7923 9.0865 10.6698 9.09838 10.5471C9.11026 10.4244 9.16983 10.311 9.26453 10.2309C9.59605 9.90631 9.83946 9.50435 9.97224 9.06213C10.0017 8.57434 9.88873 8.08847 9.6467 7.66243C9.4596 7.06516 9.10351 6.53332 8.62052 6.12977C8.37031 6.01509 8.09167 5.97519 7.81884 6.01497C7.54601 6.05476 7.29089 6.17249 7.0848 6.35371C6.73033 6.6542 6.4489 7.02985 6.26144 7.4527C6.07398 7.87556 5.98529 8.33477 6.00199 8.79618C6.00308 9.05583 6.03637 9.31437 6.10108 9.56602C6.26541 10.1706 6.51813 10.7482 6.85125 11.2806C7.09158 11.6884 7.35382 12.0833 7.63681 12.4634C8.55651 13.7119 9.71259 14.7719 11.0409 15.5847C11.7074 15.9977 12.4198 16.3335 13.164 16.5855C13.9371 16.932 14.7906 17.065 15.6339 16.9704C16.1144 16.8984 16.5697 16.7108 16.9596 16.4241C17.3496 16.1373 17.6623 15.7601 17.8703 15.3257C17.9924 15.0633 18.0295 14.77 17.9764 14.4859C17.8632 13.9051 17.0705 13.5621 16.5964 13.2962Z"
                    fill="#2958A3"
                  />
                </svg>
              </div>
              <div>WhatsApp</div>
            </div>
            <div>
              <div>
                <svg
                  width="28"
                  height="23"
                  viewBox="0 0 28 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13.5537C1 10.8591 3.625 10.187 6.25 10.187V21.9995C3.3505 21.9995 1 19.649 1 16.7495V13.5537Z"
                    stroke="#2958A3"
                    stroke-width="1.48"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.25 13.5537C27.25 10.8591 24.625 10.187 22 10.187V21.9995C24.8994 21.9995 27.25 19.649 27.25 16.7495V13.5537Z"
                    stroke="#2958A3"
                    stroke-width="1.48"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.25005 22V8.875C6.25005 4.52576 9.77581 1 14.1251 1C18.4743 1 22.0001 4.52576 22.0001 8.875V22"
                    stroke="#2958A3"
                    stroke-width="1.48"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>在線查詢</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100vh;

  & > img {
    width: 100%;
    height: 100%;
  }

  & > div:nth-child(2) {
    position: absolute;
    top: 345px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      margin-bottom: 196px;
      flex-direction: column;
      align-items: flex-start;

      & > div:nth-child(1) {
        letter-spacing: 0.1em;
      }

      & > div:nth-child(3) {
        letter-spacing: 0.78em;
      }

      font-family: 'Metropolis';
      font-style: normal;
      font-weight: 700;
      font-size: 24.0948px;
      line-height: 28px;
      /* identical to box height, or 114% */

      letter-spacing: 0.62em;
      text-transform: uppercase;

      color: #ffffff;
    }

    & > div:nth-child(2) {
      display: flex;

      & > div {
        background: #ffffffbf;
      }

      & > div:nth-child(1) {
        width: 470px;
        padding: 0 24px;
        margin-right: 53px;

        & > div:nth-child(1) {
          margin: 6px 0;
          display: flex;
          flex-direction: row;
          align-items: center;

          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 400;
          font-size: 15.9237px;
          line-height: 27px;
          /* identical to box height, or 172% */

          text-align: center;
          letter-spacing: 0.05em;

          color: #2958a3;

          & > div {
            margin-left: 8px;
          }
        }

        & > div:nth-child(3) {
          margin: 6px 0;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
          /* or 167% */

          text-align: justify;
          letter-spacing: 0.1em;

          color: #2958a3;
        }
      }

      & > div:nth-child(2) {
        width: 400px;

        & > div:nth-child(1) {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          margin: 10px 0 0 30px;

          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 35px;
          /* identical to box height, or 175% */

          text-align: center;
          letter-spacing: 0.05em;

          color: #2958a3;

          & > div {
            margin-left: 12px;
          }
        }

        & > div:nth-child(2) {
          display: flex;
          position: relative;
          justify-content: space-evenly;
          align-items: flex-end;
          flex-direction: row;
          margin-top: 44px;

          & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;
            cursor: pointer;

            & > div:nth-child(2) {
              margin-top: 2px;
              font-family: 'Metropolis';
              font-style: normal;
              font-weight: 400;
              font-size: 13px;
              line-height: 28px;
              /* identical to box height, or 212% */

              text-align: center;
              letter-spacing: 0.05em;

              color: #2958a3;
            }
          }

          & > div::after {
            content: '';
            height: 76px;
            color: #2958a3;
            border-left: 0.75px solid #2958a3;
            margin-left: 120px;
            position: absolute;
            margin-top: -20px;
          }

          & > div:last-child::after {
            height: 0;
            border: 0;
          }
        }
      }
    }
  }
}
</style>
