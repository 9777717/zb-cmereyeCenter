<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})

let fontSizeNum = ref(16)
const setFontSize = (type:string) => {
  const tags = ['h1','h2','h3','h4','h5','h6','p','span','div'];
  tags.forEach(item=>{
    const elements:any = document.getElementsByTagName(item);
    for(let i = 0; i < elements.length; i++){
      let oldFontSize = getComputedStyle(elements[i]).fontSize
      let newFontSize = 0
      if(type === 'add')
        newFontSize = Number(oldFontSize.slice(0,oldFontSize.length - 2)) + 2
      else
        newFontSize = Number(oldFontSize.slice(0,oldFontSize.length - 2)) - 2
      elements[i].style.fontSize = `${newFontSize}px`
    }
  })
}

const addFont = () =>{
  setFontSize('add')
}
const ellFont = () =>{
  setFontSize('obb')
}

</script>

<template>
  <div class="fonthandle">
    <div>
      <svg
        width="5"
        height="8"
        color="red"
        viewBox="0 0 5 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L4 4L1 7"
          stroke="white"
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <!-- <el-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      > -->
      <div>{{ $t('pages.index.footer.fonts') }}</div>
    <!-- </el-tooltip> -->
    <div>
      <div @click="addFont">+</div>
      <div @click="ellFont">-</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fonthandle {
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div:nth-child(2) {
    margin-left: 8px;
    margin-right: 12px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 35px;
    /* identical to box height, or 250% */

    text-align: center;
    letter-spacing: 0.05em;

    color: #ffffff;
  }

  & > div:nth-child(3) {
    position: relative;
    display: flex;

    & > div:nth-child(1) {
      margin-right: 11px;
    }

    & > div {
      width: 11px;
      height: 11px;
      line-height: 11px;
      border-radius: 3px;
      background: #fff;
      cursor: pointer;
      font-size: 9px !important;
      // font-size: var(--allTextFootSize);
      color: #2958a3;
      font-weight: 500;
      font-style: normal;
      text-align: center;
    }
  }
}
</style>
