<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
const activeNames = ref('1')
const handleChange = (val: string) => {
  console.log(val)
}
const judgeActive = (data: any) => {
  return activeNames.value.indexOf(data)
}

const props = defineProps({
  answer: {
    type: [Object],
    default: undefined,
  },
})
</script>

<template>
  <el-collapse v-model="activeNames" accordion>
    <el-collapse-item
      v-for="(item, index) in props.answer"
      :key="index"
      :name="`${index + 1}`"
    >
      <template #title>
        {{ item.title }}
        <i
          :class="
            judgeActive(`${index + 1}`) !== -1 ? 'downArrow2' : 'downArrow1'
          "
        ></i>
      </template>
      <div v-if="Array.isArray(item.agree)">
        <div>{{ item.agree[0] ? 'A：' : '' }}</div>
        <div>
          <div v-for="(ele, i) in item.agree" :key="i">
            {{ ele }}
          </div>
        </div>
      </div>
      <div v-else><span>A：</span> {{ item.agree }}</div>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
// :deep 穿透element的样式
:deep(.el-collapse) {
  border-top: 2px solid var(--subassembly-color);
}
:deep(.el-collapse-item__header.is-active) {
  border-top: 2px solid var(--subassembly-color);
}
:deep(.el-collapse-item__header) {
  justify-content: space-between;
  border-bottom: 2px solid var(--subassembly-color);
  height: 150px;
  font-family: 'NotoSansHK-Medium';
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 41px;
  letter-spacing: 0px;
  color: var(--subassembly-color);
}

:deep(.el-collapse-item__wrap) {
  border-bottom: 2px solid var(--subassembly-color);
}

:deep(.el-collapse-item__header.is-active) {
  border-bottom-color: transparent;
}

:deep(.el-collapse-item__content) {
  font-family: 'NotoSansHK-Regular';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 38px;
  letter-spacing: 0px;
  color: #515151;

  & > div:nth-child(1) {
    display: flex;

    & > div:nth-child(1) {
      color: var(--subassembly-color);
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin-bottom: 35px;
      }
    }
  }

  & > div {
    & > span {
      color: var(--subassembly-color);
    }
  }
}

// 多余的边框距离
:deep(.el-collapse-item):nth-child(6) {
  & > div:nth-child(2) {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

:deep(.el-collapse-item__arrow) {
  display: none;
}

// 修改el本身 折叠icon
.downArrow1 {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url(../../assets/images/+.png);
  background-repeat: round;
}

.downArrow2 {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url(../../assets/images/-.png);
  background-repeat: round;
}
</style>
