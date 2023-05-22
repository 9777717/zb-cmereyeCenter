<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
// compiler macro
definePageMeta({
  layout: 'page',
})
const cities = [
  'Instagram',
  'YouTube',
  '親友介紹',
  '員工介紹',
  '透過其他網頁',
  '透過宣傳單張/卡片',
]

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  phone: '',
  email: '',
  region: '',
  type: [],
  rest: '',
  desc: '',
})

const telValidator = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('請輸入手機號'))
  } else if (value.length < 11 || value.length > 11) {
    callback(new Error('手機號格式不正確'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '請輸入姓名', trigger: 'change' },
    { min: 3, max: 25, message: '長度應該是3到25', trigger: 'change' },
  ],
  phone: [{ required: true, validator: telValidator, trigger: 'change' }],
  email: [
    { required: true, message: '請輸入電郵地址', trigger: 'change' },
    { type: 'email', message: '請輸入正確的電子郵件地址', trigger: 'change' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      resetForm(formEl) // 成功提交清空表单内容
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

defineProps({
  bg: {
    type: [String, Object],
    default: undefined,
  },
  co: {
    type: [String, Object],
    default: undefined,
  },
  sssd: {
    type: [String],
    default: 'margin: 0 535px',
  },
  ddd: {
    type: [String],
    default: '',
  },
  borderrrrr: {
    type: [String],
    default: '',
  },
})
</script>

<template>
  <div class="form" :style="bg">
    <div :style="ddd">
      <div>希瑪眼科重視每一位客人的問題，隨時發問。</div>
      <div>請留下聯絡方法，我們的客戶服務專員會透過 Email 或電話解答你。</div>
    </div>
    <div :style="sssd">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="姓名" clearable />
        </el-form-item>
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="聯絡電話" clearable />
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="ruleForm.email" placeholder="電郵地址" clearable />
        </el-form-item>
        <el-form-item prop="region">
          <el-select v-model="ruleForm.region" placeholder="預約日期" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item
          prop="type"
          label="從哪裡找到我們的網站？ （可選擇多於一項）"
        >
          <el-checkbox-group v-model="ruleForm.type" clearable>
            <el-checkbox
              v-for="serve in cities"
              :key="serve"
              class="serve"
              :label="serve"
              name="type"
              >{{ serve }}</el-checkbox
            >
          </el-checkbox-group>
          <el-form-item class="rest" label="其他">
            <input v-model="ruleForm.rest" />
          </el-form-item>
        </el-form-item>
        <el-form-item prop="desc">
          <el-input
            v-model="ruleForm.desc"
            type="textarea"
            :rows="2"
            placeholder="訊息"
          />
        </el-form-item>
      </el-form>
    </div>
    <div :style="co" @click="submitForm(ruleFormRef)">提交</div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  background: #73b6af;
  padding-top: 132px;
  padding-bottom: 100px;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'NotoSansHK-Regular';
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: #ffffff;
  }

  & > div:nth-child(2) {
    margin: 0 535px;
    margin-top: 97px;

    :deep(.el-form) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    :deep(.el-form) {
      & > .el-form-item:nth-child(5) {
        width: 100%;
        height: 186px;
        background: #ffffff;
        border-radius: 5px;
        padding: 26px 32px 27px 18px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      & > .el-form-item:nth-child(6) {
        width: 100%;
        height: 84px;
      }
    }

    :deep(.el-form-item) {
      width: 340px;
    }

    :deep(.el-form-item--default) {
      margin-bottom: 57px;
    }

    :deep(.el-form-item__label) {
      font-family: 'NotoSansHK-Regular';
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 40px;
      letter-spacing: 0px;
      color: #828383;
    }

    :deep(.el-input__inner) {
      height: 50px;
      font-family: 'NotoSansHK-Regular';
      padding: 14px;
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 40px;
      letter-spacing: 0px;
      color: #828383;
    }

    :deep(.el-textarea__inner) {
      font-family: 'NotoSansHK-Regular';
      font-size: 22px;
      letter-spacing: 0px;
      color: #828383;
      padding: 18px;
    }

    :deep(.el-select) {
      width: 100%;
    }

    :deep(.el-checkbox-group) {
      flex: 4;
    }

    :deep(.el-form-item__content) {
      align-content: space-between;
      align-items: normal;
      margin: 25px 0;
    }

    :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
      background-color: #73b6af;
      border-color: #73b6af;
    }

    .rest {
      flex: 1;
      margin-bottom: 0;
      display: flex;
      align-items: flex-end;

      :deep(.el-form-item__label) {
        font-family: 'NotoSansHK-Regular';
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 1px;
        color: #828383;
        padding-left: 15px;

        display: flex;
        height: 50px;
        align-content: flex-end;
      }

      & > :deep(.el-form-item__content) > input {
        border-bottom: 1px solid #d2d2d3;
        outline: none;
        width: 120px;
        margin: 0;
      }

      & > :deep(.el-form-item__label) {
        padding-left: 0;
      }
    }

    :deep(.el-checkbox) {
      margin-right: 55px;
      width: 135px;
      height: 35px;
    }

    :deep(.el-checkbox__label) {
      font-family: 'NotoSansHK-Regular';
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 40px;
      letter-spacing: 1px;
      color: #828383;
      padding-left: 15px;
    }
  }

  & > div:nth-child(3) {
    cursor: pointer;
    margin: auto;
    margin-top: 74px;

    font-family: 'NotoSansHK-Medium';
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 2.2;
    text-align: center;
    letter-spacing: 3px;
    color: #73b6af;

    background-color: #ffffff;
    width: 201px;
    height: 68px;
    border-radius: 34px;
  }
}
</style>
