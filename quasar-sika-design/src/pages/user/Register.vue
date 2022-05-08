<template>
  <div class='sc-design'>
    <div class='q-px-md'>
      <q-form   @submit='onSubmit' @reset="onReset">
        <div class='q-gutter-y-md'>
          <div class='text-left text-body1'>{{ $t('user.register.register') }}</div>
          <div class='row'>
            <div class='col-12 q-gutter-y-sm'>
              <q-input
                v-model='registerData.email'
                :label="$t('user.register.email')"
                :rules="[(val) => (val && val.length > 0) || '请输入邮箱']"
                clear-icon='cancel'
                clearable
                dense
                lazy-rules
                maxlength='128'
                outlined
                square
                type='email'
              >
                <template v-slot:prepend>
                  <q-icon name='mail' />
                </template>
              </q-input>
              <q-input
                outlined
                clearable
                clear-icon="cancel"
                :type="isPwd ? 'password' : 'text'"
                v-model="registerData.password"
                dense
                debounce="1000"
                placeholder="密码"
                maxlength="32"
                square
                :rules="[
                  (val) => (val && val.length > 0) || '请输入密码',
                  (val) => (val && val.length >= 6) || '密码长度必须大于等于6位'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name='event' />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class='cursor-pointer'
                    @click='isPwd = !isPwd'
                  />
                </template>
              </q-input>
              <q-input
                outlined
                clearable
                clear-icon="cancel"
                :type="isPwd ? 'password' : 'text'"
                v-model="registerData.confirmPassword"
                dense
                debounce="1000"
                placeholder="确认密码"
                maxlength="32"
                square
                :rules="[
                  (val) => (val && val.length > 0) || '请输入确认密码',
                  (val) => (passwordValida) || '两次密码不一致'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name='event' />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class='cursor-pointer'
                    @click='isPwd = !isPwd'
                  />
                </template>
              </q-input>
              <!--              <q-input-->
              <!--                outlined-->
              <!--                clearable-->
              <!--                clear-icon="cancel"-->
              <!--                v-model="phone"-->
              <!--                maxlength="11"-->
              <!--                type="tel"-->
              <!--                dense-->
              <!--                :label="$t('user.register.phone')"-->
              <!--                lazy-rules-->
              <!--                square-->
              <!--                :rules="[(val) => (val && val.length > 0) || '请输入手机号']"-->
              <!--              >-->
              <!--                <template v-slot:prepend>-->
              <!--                  <q-btn-dropdown-->
              <!--                    color="secondary"-->
              <!--                    flat-->
              <!--                    :label="phonePrefix"-->
              <!--                    style="margin-left: -12px"-->
              <!--                  >-->
              <!--                    <q-list>-->
              <!--                      <q-item-->
              <!--                        clickable-->
              <!--                        v-close-popup-->
              <!--                        @click="onItemClick('+86')"-->
              <!--                      >-->
              <!--                        <q-item-section>-->
              <!--                          <q-item-label>+86</q-item-label>-->
              <!--                        </q-item-section>-->
              <!--                      </q-item>-->

              <!--                      <q-item-->
              <!--                        clickable-->
              <!--                        v-close-popup-->
              <!--                        @click="onItemClick('+87')"-->
              <!--                      >-->
              <!--                        <q-item-section>-->
              <!--                          <q-item-label>+87</q-item-label>-->
              <!--                        </q-item-section>-->
              <!--                      </q-item>-->
              <!--                    </q-list>-->
              <!--                  </q-btn-dropdown>-->
              <!--                </template>-->
              <!--              </q-input>-->
              <q-input
                v-model='registerData.emailValidateCode'
                :label="$t('user.register.verifyCode')"
                :rules="[(val) => (val && val.length > 0) || '请输入验证码']"
                clearable
                dense
                lazy-rules
                maxlength='6'
                outlined
                square
                type='text'
              >
                <template v-slot:prepend>
                  <q-icon name='event' />
                </template>
                <template v-slot:after>
                  <q-btn
                    :label="$t('user.register.getCode')"
                    :loading='validateCodeLoading'
                    class='no-border-radius'
                    color='secondary'
                    no-caps
                    unelevated
                    @click='getEmailVerifyCode'
                  >
                    <template v-slot:loading>
                      <q-icon class='on-left' name='alarm' />
                      {{ emailCountDown }} s
                    </template>
                  </q-btn>
                </template>
              </q-input>
              <div class='row'>
                <div class='col text-left'>
                  <q-btn
                    :label="$t('user.register.register')"
                    :loading='registerLoading'
                    class='no-border-radius'
                    color='primary full-width'
                    no-caps
                    size='md'
                    type='submit'
                    unelevated
                  >
                    <template v-slot:loading>
                      <q-spinner-hourglass class='on-left' />
                      {{ $t('user.register.register') }}...
                    </template>
                  </q-btn>
                </div>
                <div class='col text-right'>
                  <q-btn
                    :label="$t('user.register.existingAccountLogin')"
                    color='primary'
                    flat
                    no-caps
                    to='/user/login'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-form>
      <q-dialog v-model='successCard' persistent>
        <q-card
          class='my-card text-center q-col-gutter-y-lg q-px-md'
          style='width: 600px; max-width: 80vw'
        >
          <q-icon
            class='q-mt-md text-h4'
            color='positive'
            name='check_circle'
            size='60px'
          />
          <div>
            <div class='text-h6'>
              账户：<span>{{ registerData.email  }} </span> 注册成功
            </div>
<!--            <div class='text-grey'>-->
<!--              请加群沟通，加群方式在网页最下方。-->
<!--            </div>-->
          </div>
          <q-card-actions align='center' class='q-mb-md'>
            <q-btn v-close-popup color='primary' to='/article/1162' glossy label='加群沟通' />
            <q-btn v-close-popup color='secondary'  to='/' glossy label='返回首页' />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { sendMailCode, register } from '@/api/user'
import commonUtil from '@/utils/commonUtil'
import _ from 'lodash'

export default {
  name: 'Register',
  data() {
    return {
      tab: 'mails',
      confirmPassword: null,
      phone: null,
      validateCode: null,
      validateCodeLoading: false,
      accept: false,
      isPwd: true,
      autoLogin: true,
      dense: false,
      phonePrefix: '+86',
      successCard: false,
      emailCountDown: 60,
      registerLoading: false,
      usernameForShow: null,
      registerData: {
        username: null,
        email: null,
        password: null,
        confirmPassword: null,
        phone: null,
        captchaVerifyCode: null,
        emailValidateCode: null,
        emailCode: 'MC_00002',
        captchaType: 20
      }
    }
  },
  methods: {
    onSubmit() {
      this.register()
      // this.simulateProgress(this.success)
      // this.$router.push({
      //   path: '/user/registerResult',
      //   query: { email: this.email }
      // })
    },
    register(callBack) {
      // we set loading state
      this.registerLoading = true
      // simulate a delay
      setTimeout(() => {
        register(this.registerData).then(response => {
          console.log(response)
          // we're done, we reset loading state
          this.success()
        }).catch(err => {
          console.log(err)
          this.registerLoading = false
        })
      }, 1000)
    },
    onReset() {
      this.usernameForShow = this.registerData.username
      this.registerData = commonUtil.resetObj(this.registerData)
      this.registerHintData = commonUtil.resetObj(this.registerHintData)
    },
    onItemClick(value) {
      this.phonePrefix = value
    },
    getEmailVerifyCode() {
      if (_.isEmpty(this.registerData.email)) {
        commonUtil.notifyAlert('请输入邮箱')
        return
      }
      const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!reg.test(this.registerData.email)) {
        commonUtil.notifyAlert('请输入有效的邮箱')
        return
      }

      // we set loading state
      this.validateCodeLoading = true
      const interval = setInterval(() => {
        this.emailCountDown--
        if (this.emailCountDown <= 0) {
          this.validateCodeLoading = false
          this.emailCountDown = 60
          clearInterval(interval)
        }
      }, 1000)
      sendMailCode(this.registerData).then(response => {
        commonUtil.notifySuccess('验证码发送成功')
      }).catch(err => {
        console.log(err)
        this.validateCodeLoading = false
        this.emailCountDown = 60
        clearInterval(interval)
      })
    },
    simulateProgress(callBack) {
      // we set loading state
      this.loading = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loading = false
        callBack()
      }, 2000)
    },
    success() {
      commonUtil.notifySuccess('注册成功')
      this.registerLoading = false
      this.successCard = true
      this.$refs.registerForm.reset()
    }
  },
  computed: {
    passwordValida: function() {
      return this.registerData.password === this.registerData.confirmPassword
    }
  }
}
</script>

<style scoped>
.q-field__control {
  padding-left: 0;
}
</style>
