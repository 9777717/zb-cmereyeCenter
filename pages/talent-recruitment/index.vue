<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div id="careers" class="careers">
    <div>
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/02/f47fceca0ef2e1d4.jpg"
          alt="加入我們，攜手未來"
        />
      </div>
      <div>
        <p class="">加入我們，攜手未來</p>
        <img
          class=""
          src="https://static.cmereye.com/imgs/2023/03/f47c6bf2d4a3693a.png"
          alt=""
        />
      </div>
      <svg
        width="9"
        height="144"
        viewBox="0 0 9 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-v-1d8b93bf=""
        data-v-a125a221=""
      >
        <path
          d="M1 1V143L7.5 130.5"
          stroke="#2958A3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-v-1d8b93bf=""
          data-v-a125a221=""
        ></path>
      </svg>
    </div>

    <div class="mianConten mainCon pb-64 flex items-center justify-between">
      <div class="desBox mt-52 ml-10">
        <h1 class="text-4xl mb-10">加入我們，盡展所長</h1>
        <p class="leading-8">
          希瑪以人為本，注重團隊合作，致力培訓員工 <br />
          我們希望吸納更多醫護專才 <br />
          為客人提供「度身訂造」的眼科服務
        </p>
        <a
          href="https://cmermedical.com/joinus/careers?departmentOptions=cmerEyeCenter"
          target="_blank"
          rel="noopener noreferrer"
          class="linkBtn text-white mt-12 inline-block"
          >立即申請</a
        >
      </div>

      <div class="imgBox">
        <img
          src="https://static.cmereye.com/imgs/2023/02/833b5617b3c72216.png"
          alt=""
          class="right1"
        />
        <img
          src="https://static.cmereye.com/imgs/2023/02/f7e9031c1b6f047d.png"
          alt=""
          class="right2"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.careers {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;

    & > div:nth-child(1) {
      & > img {
        padding-left: 160px;
        padding-top: 50px;
        background: #f7fcff;
      }
    }

    & > div:nth-child(2),
    & > div:nth-child(3) {
      position: absolute;
    }

    & > div:nth-child(2) {
      z-index: 5;
      left: 23%;
      right: 0;
      bottom: 95px;

      & > p {
        font-size: 55px;
        color: #fff;
        margin-bottom: 30px;
      }
    }

    & > svg:nth-child(3) {
      position: absolute;
      bottom: -75px;
      left: 50%;
    }
  }

  & > div:nth-child(1)::after {
    content: '';
    position: absolute;
    width: 30px;
    background-color: #f2f2f2;
    left: 0;
    top: 0;
    height: 100%;
  }

  & > div:nth-child(1)::before {
    content: '';
    position: absolute;
    width: 97%;
    background-color: #f2f2f2;
    left: 0;
    bottom: 0;
    height: 30px;
    z-index: 0;
  }
}

.desBox {
  h1 {
    font-size: 45px;
    color: #515151;
  }

  p {
    font-size: 20px;
    line-height: 2;
    color: #515151;
  }

  a {
    background: #8ad8dd;
    font-size: 22px;
    padding: 10px 30px;
  }
}

.mianConten {
  margin: 0 300px;
  font-family: 'Noto Sans HK';

  .imgBox {
    background-color: #f2f2f2;
    width: 60%;
    height: 370px;
    position: relative;
    margin-top: 390px;

    img {
      position: absolute;
    }

    .right1 {
      left: 20px;
      top: -150px;
      z-index: 10;
    }

    .right2 {
      right: 20px;
      top: 50px;
      z-index: 11;
      width: 44%;
    }
  }
}
</style>
