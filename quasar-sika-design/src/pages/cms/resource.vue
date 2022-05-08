<template>
  <div class='sc-design'>
    <div v-title="{title:textTitle}">
    </div>
    <div class='bg-white q-px-lg q-pt-lg'>
      <!--      <div class=' '>-->
      <!--&lt;!&ndash;        <strong class='col'>{{ resourceDetail.title }}</strong>&ndash;&gt;-->
      <!--        <div class='col-md-6 col-xs-12 text-right'>-->
      <!--&lt;!&ndash;          <span class='q-gutter-x-sm gt-xs'>&ndash;&gt;-->
      <!--&lt;!&ndash;          </span>&ndash;&gt;-->
      <!--          <div class='row full-width justify-center'>-->
      <!--          <span class='col' style='max-width: 500px'>-->
      <!--            <q-input v-model='queryParams.title'-->
      <!--                     class='q-ma-md'-->
      <!--                     outlined-->
      <!--                     dense-->
      <!--                     placeholder='请输入搜索资源标题'-->
      <!--                     square-->
      <!--            >-->
      <!--              <template v-slot:append>-->
      <!--                <q-btn @click="doQuery()"-->
      <!--                       class='no-border-radius full-height'-->
      <!--                       color='primary'-->
      <!--                       unelevated-->
      <!--                       label='搜索'-->
      <!--                       style='margin-right: -12px'-->
      <!--                >-->
      <!--                </q-btn>-->
      <!--              </template>-->
      <!--            </q-input>-->
      <!--          </span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class='row q-gutter-y-md q-mt-sm'>-->
      <!--        <div class='col-sm-12 col-xs-12'>-->
      <!--          <div class='row q-gutter-y-sm'>-->
      <!--            <span class='col-md-12 col-xs-12 '>-->
      <!--            </span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class='q-pt-md q-px-md'>
      <q-card class='q-px-sm q-gutter-y-lg no-border-radius' flat>
        <q-card-section>
          <q-item-label class='text-body1' v-text='resourceDetail.title ? resourceDetail.title : ""' ></q-item-label>
          <q-separator spaced='15px' />
          <!--
            Forked from:
            http://www.quasarchs.com/vue-components/scroll-area#example--styled
          -->
          <div id='q-app'>
            <div class='q-ma-md'>
              <!--              <q-scroll-area-->
              <!--                :thumb-style="thumbStyle"-->
              <!--                :content-style="contentStyle"-->
              <!--                :content-active-style="contentActiveStyle"-->
              <!--                style="height: 500px;  "-->
              <!--              >-->
              <!--                <div  class="q-pa-xs" v-html="articleDetail.content">-->
              <!--                </div>-->
              <!--              </q-scroll-area>-->
            </div>
          </div>
          <div id='article' v-html='resourceDetail.detail'></div>
          <q-separator spaced='15px' />
          <div class='q-pa-md q-gutter-sm text-center'>
            <q-btn color='deep-orange' glossy label='支持/打赏' @click='donate()' />
            <q-btn color='deep-orange' glossy label='订阅' @click='subscribe()'>
              <q-tooltip>
                订阅后该资源更新链接会推送邮箱提醒。
              </q-tooltip>
            </q-btn>
          </div>

<!--          <div class='q-pa-md q-gutter-sm'>-->
<!--            <q-dialog v-model='icon'>-->
<!--              <q-card>-->
<!--                <q-card-section class='row items-center q-pb-none'>-->
<!--                  <div class='text-h6'>支持、打赏</div>-->
<!--                  <q-space />-->
<!--                </q-card-section>-->

<!--                <q-card-section>-->
<!--                  <div>-->
<!--                    <div class='row'>-->
<!--                      <div class='col-md-4 col-sm-4'>-->
<!--                        <img alt='170x170' src='imgs/donate/NcEDeg.png' />-->
<!--                      </div>-->
<!--                      <div class='col-md-4 col-sm-4   '>-->
<!--                        <img alt='170x170' src='imgs/donate/NcuWlR.png' />-->
<!--                      </div>-->
<!--                      <div class='col-md-4 col-sm-4   '>-->
<!--                        <img alt='170x170' src='imgs/donate/NctwZj.png' />-->
<!--                      </div>-->
<!--                      &lt;!&ndash;                      <div class="col-md-4 col-sm-4 col-12 column" align="center">&ndash;&gt;-->
<!--                      &lt;!&ndash;                        <img alt="140x140" th:src="@{/ajax/libs/qinghuan/img/NcuWlR.png}"&ndash;&gt;-->
<!--                      &lt;!&ndash;                             class="img-thumbnail zoomify">&ndash;&gt;-->
<!--                      &lt;!&ndash;                      </div>&ndash;&gt;-->
<!--                      &lt;!&ndash;                      <div class="col-md-4 col-sm-4  col-12 column" align="center">&ndash;&gt;-->
<!--                      &lt;!&ndash;                        <img alt="140x140" th:src="@{/ajax/libs/qinghuan/img/NctwZj.png}"&ndash;&gt;-->
<!--                      &lt;!&ndash;                             class="img-thumbnail zoomify">&ndash;&gt;-->
<!--                      &lt;!&ndash;                      </div>&ndash;&gt;-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </q-card-section>-->
<!--              </q-card>-->
<!--            </q-dialog>-->
<!--          </div>-->
        </q-card-section>
      </q-card>
    </div>

    <div class='q-pt-md q-px-md'>
      <div class='col-12 q-px-sm'>
        <q-card class='no-border-radius' flat>
          <q-card-section class='bg-white'>
            <q-avatar
              class='q-mr-sm'
              color='blue-1'
              icon='insights'
              size='sm'
              text-color='primary'
            ></q-avatar>
            <span> 资源列表 </span>
          </q-card-section>
          <q-separator />
          <a href='/article/917'  style='font-size: 16px'
             one-link-mark='yes' target='_blank'>👉没有链接、链接失效、资源分享/分流</a>
          <div class='row q-pa-sm'>
            <div
              v-for='(item, index) in resourceDetail.cmsResourceLink'
              :key='index'
              class='col-xs-12 col-sm-6 col-lg-3 q-pa-sm cursor-pointer'
            >
              <sc-shadow>
                <q-card
                  class='no-border-radius'
                  flat
                  style='border: 1px solid lightskyblue' @click='openUrl(item)'
                >
                  <q-item>
                    <q-item-section>
                      <q-item-label class='text-weight-bold'
                                    v-text="item.urlType == '1' ? '阿里云' : item.urlType == '2' ? '蓝奏云' : item.urlType == '3' ? '诚通' : item.urlType == '4' ? '百度' : item.urlType == '5' ? '磁力' : '其他'">
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class='text-grey-6'>
                    <q-item-label style='word-wrap:break-word;'>
                      {{ item.url }}
                    </q-item-label>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label
                        v-if='item.urlPwd'
                        class='text-grey-6' style='font-size: small'
                      >
                        验证码：{{ item.urlPwd }}
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label
                        class='text-grey-6'
                        style='font-size: small'
                      >
                        {{ item.createTime }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </sc-shadow>
            </div>
          </div>
<!--          <div v-if='resourceDetail.cmsResourceLink  === null || resourceDetail.cmsResourceLink.length  === 0 ' class='q-drawer-container' style='padding: 20px;'>-->
          <div  class='q-drawer-container' style='padding: 20px;'>

          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import ADVANCED_DATA from '@/mock/data/profile/advancedData'
import { getLoginData } from 'src/utils/localStorage'
import { resourceDetail, resourceHit, resourceLinkDown, resourceSubscribe } from '../../api/cms'
import ScShadow from 'components/shadow/ScShadow'
import { copyToClipboard } from 'quasar'
import commonUtil from '../../utils/commonUtil'
export default {
  name: 'Advance',
  components: { ScShadow },
  data() {
    return {
      icon: false,
      resourceId: 0,
      contentStyle: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      },
      textTitle: '资源详情',
      contentActiveStyle: {
        backgroundColor: '#eee',
        color: 'black'
      },
      url: '',
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      queryParams: {
        resourceId: 0
      },
      resourceLinkDownParams: {
        resourceId: 0,
        resourceLinkId: 0
      },
      resourceDetail: {
        cmsResourceLink: {
          length: 0
        }
      },
      advancedData: ADVANCED_DATA,
      step: 3,
      tab: 'details',
      operatorLogTab: 'operatorLog1'
    }
  },
  created() {
    // 获取博客列表
    this.resourceId = this.$route.params.resourceId
    this.getResource()
    this.url = window.location.href
    // console.info(window.location.href)
    this.resourceHit()
  },
  methods: {
    // 获取反馈列表
    copyUrl() {
      copyToClipboard(this.url)
        .then(() => {
          this.$q.notify({
            color: 'white',
            textColor: 'positive',
            icon: 'check_circle',
            position: 'center',
            message: '已自动复制该资源链接<br>' +
              this.url + '<br>' +
              '请加群后按格式粘贴',
            html: true,
            progress: true
          })
        })
        .catch(() => {
          // 失败
        })
    },
    donate: function() {
      this.$router.push({
        path: '/article/870'
      })
    },
    subscribe: function() {
      console.info('订阅' + this.resourceId)
      // 判断是否登录
      const token = getLoginData('token')
      if (token === null || token === '') {
        commonUtil.notifyError('请登录')
        setTimeout(() => {
          this.$router.push({
            path: '/user/login'
          })
        }, 3000)
      } else {
        console.info('一登录' + token)
        resourceSubscribe(this.resourceId).then(response => {
          console.info(response.code)
          if (response.code === 200) {
            this.$q.notify({
              color: 'white',
              textColor: 'positive',
              icon: 'check_circle',
              position: 'center',
              message: '订阅成功。',
              html: true,
              progress: true,
              timeout: 3000
            })
          }
        })
      }
    },
    openUrl(item) {
      this.resourceLinkDownParams.resourceId = item.resourceId
      this.resourceLinkDownParams.resourceLinkId = item.id
      this.resourceLinkDown()
      if (item.urlPwd == null || item.urlPwd === '') {
        console.info('密码为空')
        window.open(item.url, '_blank')
      } else {
        console.info('密码不为空')
        copyToClipboard(item.urlPwd)
          .then(() => {
            this.$q.notify({
              color: 'white',
              textColor: 'positive',
              icon: 'check_circle',
              position: 'center',
              message: '已自动复制验证码：' +
                '<span style="color: red">' + item.urlPwd + '</span>' +
                '<br>稍后自动打开后可直接粘贴',
              html: true,
              progress: true,
              timeout: 3000
            })
          })
          .catch(() => {

            // 失败
          })
        setTimeout(() => {
          window.open(item.url, '_blank')
        }, 3100)
      }
    },
    getResource: function() {
      const resourceId = this.$route.params.resourceId
      console.info(resourceId)
      this.queryParams.resourceId = resourceId
      resourceDetail(this.queryParams).then(response => {
        this.resourceDetail = response.data
        this.textTitle = this.resourceDetail.title
        this.cmsResourceLink = response.data.cmsResourceLink
        console.log(this.resourceDetail)
      })
    },
    resourceHit: function() {
      resourceHit(this.queryParams).then(response => {
        console.log(response)
      })
    },
    resourceLinkDown: function() {
      resourceLinkDown(this.resourceLinkDownParams).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
#article {
  word-wrap: break-word;
}

#article h1, h2, h3 {
  font-size: 24px;
  font-weight: 10;
  line-height: 25px;
}

img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

#article a:before {
  content: "👉";
}
</style>
