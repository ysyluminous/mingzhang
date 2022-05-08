<template>
  <div class='sc-design'>
    <div v-title="{title:textTitle}">
    </div>
    <div class='bg-white q-px-lg q-pt-lg'>
      <div class='row text-h6'>
        <strong class='col'>{{ softDetail.softName }}</strong>
        <div class='col-auto text-right'>
          <span class='q-gutter-x-sm gt-xs'>
          </span>
          <!--          <span class='col lt-sm'>-->
          <!--            <q-btn-dropdown-->
          <!--              auto-close-->
          <!--              color='primary'-->
          <!--              label='主操作'-->
          <!--              padding='5px 15px'-->
          <!--              split-->
          <!--              unelevated-->
          <!--            />-->
          <!--          </span>-->
        </div>
      </div>
      <div class='row q-gutter-y-md q-mt-sm'>
        <div class='col-sm-12 col-xs-12'>
          <div class='row q-gutter-y-sm'>
            <span class='col-md-12 col-xs-12 '>
            </span>
          </div>
        </div>
      </div>
      <!--      <q-tabs-->
      <!--        v-model='tab'-->
      <!--        class='text-primary q-ml-none q-mt-lg'-->
      <!--        dense-->
      <!--        narrow-indicator-->
      <!--        align='left'-->
      <!--        :breakpoint='0'-->
      <!--      >-->
      <!--        <q-tab name='details' class='q-px-none' label='详情' />-->
      <!--        <q-tab name='rule' class='q-px-none q-mx-md' label='规则' />-->
      <!--      </q-tabs>-->
    </div>
    <div class='q-pt-md q-px-md'>
      <q-card class='q-px-sm q-gutter-y-lg no-border-radius' flat>
        <q-card-section>
          <q-item-label class='text-body1'>{{ softDetail.softName }}</q-item-label>
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
              <!--                <div  class="q-pa-xs" v-html="softDetail.content">-->
              <!--                </div>-->
              <!--              </q-scroll-area>-->
            </div>
          </div>
          <div id='article' v-html='softDetail.content'></div>
           <q-separator spaced='15px' />
          <div class="q-pa-md q-gutter-sm text-center">
            <q-btn color="deep-orange"   glossy label="支持/打赏"  @click="donate()" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import ADVANCED_DATA from '@/mock/data/profile/advancedData'
import { softDetail } from '../../api/cms'

export default {
  name: 'Advance',
  data() {
    return {
      textTitle: '',
      contentStyle: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      },
      contentActiveStyle: {
        backgroundColor: '#eee',
        color: 'black'
      },
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      queryParams: {
        softId: '',
        p: ''
      },
      softDetail: [],
      advancedData: ADVANCED_DATA,
      step: 3,
      tab: 'details',
      operatorLogTab: 'operatorLog1'
    }
  },
  mounted () {
    this.textTitle = this.softDetail.title
  },
  created() {
    // 获取博客列表
    this.queryParams.p = this.$route.query.p
    this.getSoft()
  },
  // mounted: function () {
  //   document.title = softDetail.title
  // },
  methods: {
    // 获取反馈列表
    donate: function() {
      // this.$router.push({
      //   path: '/article/870'
      // })
      const routeData = this.$router.resolve({ path: '/article/870' })
      window.open(routeData.href, '_blank')
    },
    getSoft: function() {
      const softId = this.$route.params.softId
      console.info(softId)
      this.queryParams.softId = softId
      softDetail(this.queryParams).then(response => {
        this.softDetail = response.data
        console.log(this.softDetail)
        this.textTitle = this.softDetail.softName
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
