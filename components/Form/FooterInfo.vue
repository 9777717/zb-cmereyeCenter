<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
// compiler macro
definePageMeta({
  layout: 'page',
})
const {t} = useLang()
const cities = [
  t('components.footerInfo.Instagram'),
  t('components.footerInfo.YouTube'),
  t('components.footerInfo.sidekicker'),
  t('components.footerInfo.staff'),
  t('components.footerInfo.website'),
  t('components.footerInfo.leaflet'),
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
      message: '請選擇日期',
      trigger: 'change',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      postData()
      resetForm(formEl) // 成功提交清空表单内容
    } else {
      console.log('error submit!', fields)
    }
  })
}

const postData = async () => {
  let _message = `姓名：${ruleForm.name}
電話號碼：${ruleForm.phone}
電郵地址：${ruleForm.email}
預約日期：${ruleForm.region}
從哪裏找到網站：${ruleForm.type}
其他：${ruleForm.rest}
訊息：${ruleForm.desc}
來源：${location.href}`
  let _data = 'message=' + encodeURIComponent(_message);
  const {data}:any = await useFetch('https://ddwebhook.hkcmereye.com/send',{
  method: 'post',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: _data
  })
  let res = JSON.parse(data.value)
  if (res) {
    if(res.code){
      ElMessage({
        showClose: true,
        message: '表單提交成功！我們會盡快回覆閣下。',
        type: 'success',
        duration: 0
      })
      localStorage.setItem('contactForm',JSON.stringify(ruleForm))
    }
  }
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
  formTitleColor: {
    type: [String],
    default: '',
  },
})
</script>

<template>
  <div class="form" :style="bg">
    <div>
      <div :style="formTitleColor">
        <div>{{ $t('components.footerInfo.text1') }}</div>
        <div>{{ $t('components.footerInfo.text2') }}</div>
      </div>
      <div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item prop="name">
            <el-input
              v-model="ruleForm.name"
              :placeholder="$t('components.footerInfo.placeholder1')"
              clearable
            />
          </el-form-item>
          <el-form-item prop="phone">
            <el-input
              maxLength="11"
              v-model="ruleForm.phone"
              :placeholder="$t('components.footerInfo.placeholder2')"
              clearable
            />
          </el-form-item>
          <el-form-item prop="email">
            <el-input
              v-model="ruleForm.email"
              :placeholder="$t('components.footerInfo.placeholder3')"
              clearable
            />
          </el-form-item>
          <el-form-item prop="region">
            <el-date-picker
              v-model="ruleForm.region"
              type="date"
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"
              :placeholder="$t('components.footerInfo.placeholder4')"
              :size="'large'"
            />
          </el-form-item>
          <el-form-item prop="type" :label="$t('components.footerInfo.label1')">
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
            <el-form-item
              class="rest"
              :label="$t('components.footerInfo.rest')"
            >
              <input v-model="ruleForm.rest" />
            </el-form-item>
          </el-form-item>
          <el-form-item prop="desc">
            <el-input
              v-model="ruleForm.desc"
              type="textarea"
              :rows="2"
              :placeholder="$t('components.footerInfo.placeholder5')"
            />
          </el-form-item>
        </el-form>
      </div>
      <div :style="co" @click="submitForm(ruleFormRef)">
        {{ $t('components.footerInfo.submitForm') }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  & > div {
    background: rgba(0, 0, 0, 0);
    padding-top: 132px;
    padding-bottom: 100px;
    width: 845px;
    margin: auto;

    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;

      // font-family: 'NotoSansHK-Regular';
      font-size: 28px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 40px;
      letter-spacing: 0px;
      color: #ffffff;
    }

    & > div:nth-child(2) {
      // margin: 0 535px;
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
      :deep(.el-date-editor.el-input, .el-date-editor.el-input__wrapper){
        width: 100%;
      }
      :deep(.el-input--large .el-input__wrapper){
        width: 100%;
      }
      :deep(.el-form-item) {
        width: 340px;
      }

      :deep(.el-form-item--default) {
        margin-bottom: 57px;
      }

      :deep(.el-form-item__label) {
        font-family: none;
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #828383;
      }

      :deep(.el-input__inner) {
        height: 50px;
        font-family: none;
        padding: 14px;
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #828383;
      }

      :deep(.el-textarea__inner) {
        font-family: none;
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
        margin-top: 25px;
      }

      :deep(.el-form-item__content) {
        align-content: space-between;
        align-items: normal;
        // margin: 25px 0;
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
          font-family: none;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 40px;
          letter-spacing: 1px;
          color: #828383;
          padding-left: 15px;

          display: flex;
          height: 37px;
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
        font-family: none;
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

      font-family: none;
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
}
</style>
