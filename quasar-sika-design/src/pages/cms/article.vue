<template>
  <div class='sc-design'>
    <div v-title="{title:textTitle}">
    </div>
    <div class='bg-white q-px-lg q-pt-lg'>
      <div class='row text-h6'>
        <strong class='col'>{{ articleDetail.title }}</strong>
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
          <q-item-label class='text-body1'>{{ articleDetail.title }}</q-item-label>
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
          <div id='article' v-html='articleDetail.content'></div>
          <q-separator spaced='15px' />
          <div class="q-pa-md q-gutter-sm text-center">
            <q-btn color="deep-orange"   glossy label="支持/打赏"  @click="donate()" />
          </div>

          <div class="q-pa-md q-gutter-sm">
            <q-dialog v-model="icon">
              <q-card>
                <q-card-section class="row items-center q-pb-none">
                  <div class="text-h6">支持、打赏</div>
                  <q-space />
                </q-card-section>

                <q-card-section>
                  <div>
                    <div class="row">
                      <div class='col-md-4 col-sm-4' >
                        <img src="imgs/donate/NcEDeg.png"   alt="170x170"/>
                      </div>
                      <div class='col-md-4 col-sm-4   '  >
                        <img src="imgs/donate/NcuWlR.png"  alt="170x170"  />
                      </div>
                      <div class='col-md-4 col-sm-4   '  >
                        <img src="imgs/donate/NctwZj.png"  alt="170x170"  />
                      </div>
                      <!--                      <div class="col-md-4 col-sm-4 col-12 column" align="center">-->
                      <!--                        <img alt="140x140" th:src="@{/ajax/libs/qinghuan/img/NcuWlR.png}"-->
                      <!--                             class="img-thumbnail zoomify">-->
                      <!--                      </div>-->
                      <!--                      <div class="col-md-4 col-sm-4  col-12 column" align="center">-->
                      <!--                        <img alt="140x140" th:src="@{/ajax/libs/qinghuan/img/NctwZj.png}"-->
                      <!--                             class="img-thumbnail zoomify">-->
                      <!--                      </div>-->
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-dialog>

          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import ADVANCED_DATA from '@/mock/data/profile/advancedData'
import { articleDetail, articleHit } from '../../api/cms'

export default {
  name: 'Advance',
  data() {
    return {
      icon: false,
      textTitle: '文章详情',
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
        id: 1,
        p: ''
      },
      articleDetail: [],
      advancedData: ADVANCED_DATA,
      step: 3,
      tab: 'details',
      operatorLogTab: 'operatorLog1'
    }
  },
  mounted () {
    this.textTitle = this.articleDetail.title
  },
  created() {
    // 获取博客列表
    this.queryParams.p = this.$route.query.p
    this.getArticle()
  },
  // mounted: function () {
  //   document.title = articleDetail.title
  // },
  methods: {
    // 获取反馈列表
    getArticle: function() {
      const articleId = this.$route.params.articleId
      console.info(articleId)
      this.queryParams.id = articleId
      articleDetail(this.queryParams).then(response => {
        this.articleDetail = response.data
        console.log(this.articleDetail)
        this.textTitle = this.articleDetail.title
        this.articleHit()
      })
    },
    donate: function() {
      // this.$router.push({
      //   path: '/article/870'
      // })
      const routeData = this.$router.resolve({ path: '/article/870' })
      window.open(routeData.href, '_blank')
    },
    articleHit: function() {
      const articleId = this.$route.params.articleId
      console.info(articleId)
      this.queryParams.id = articleId
      articleHit(this.queryParams).then(response => {
        // this.articleDetail = response.data
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
