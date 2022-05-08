
<template>
  <div class='sc-design'>
    <div v-title="{title:textTitle}">
    </div>
    <div class='bg-white q-px-lg q-pt-lg'>
      <div class='row text-h6'>
        <strong class='col'>{{ chapterContent.title }}</strong>
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
          <q-item-label class='text-body1'>{{ chapterContent.title }}</q-item-label>
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
          <div id='article' v-html='chapterContent.content'></div>
          <q-separator spaced='15px' />
          <div class="q-pa-md q-gutter-sm text-center">
            <q-btn color="deep-orange"   glossy label="支持/打赏"  @click="icon = true" />
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
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="dialog" :position="position">
        <q-card>
          <q-card-section>
            <div class="text-h6">点击章节查看</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-tree
              :nodes='simple'
              :selected.sync='selected'
              default-expand-all
              node-key='nodeKey'
              accordion: true
              :expanded.sync='expanded'
              selected-color='primary'
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
            <span class="q-ml-sm">You are currently not connected to any network.</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Your address</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Add address" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <template>
      <div class="q-pa-md">
        <q-page-container>
          <q-page padding>
            <q-page-sticky position="left"  @click="open('right')"   >
              <q-fab
                icon="add"
                direction="up"
                color="primary"
                label="图书目录"
                hide-icon
                :disable="draggingFab"
              >
                <!--                      <q-fab-action @click="alert = true" color="primary" icon="person_add" :disable="draggingFab" />-->
                <!--                      <q-fab-action @click="onClick" color="primary" icon="mail" :disable="draggingFab" />-->
              </q-fab>
            </q-page-sticky>
          </q-page>
        </q-page-container>
      </div>
    </template>
  </div>
</template>

<script>
import ADVANCED_DATA from '@/mock/data/profile/advancedData'
import { getChapterContentById, getChaptersByBookId } from '../../api/cms'

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
      fabPos: [18, 18],
      selected: '1',
      dialog: false,
      simple: [
        {
          nodeKey: 1,
          label: '联系微信:yaosiyuan_weixin'
        }
      ],
      position: 'top',
      draggingFab: false,
      prompt: false,
      address: '',
      expanded: ['Satisfied customers', 'Good service (disabled node)', 'Pleasant surroundings'],
      moveFab (ev) {
        this.draggingFab = ev.isFirst !== true && ev.isFinal !== true
        //
        // this.fabPos = [
        //   this.fabPos[0] - ev.delta.x,
        //   this.fabPos[1] - ev.delta.y
        // ]
      },
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      confirm: false,
      queryParams: {
        chapterId: 1,
        bookId: '',
        password: ''
      },
      chapterContent: [],
      advancedData: ADVANCED_DATA,
      step: 3,
      tab: 'details',
      operatorLogTab: 'operatorLog1'
    }
  },
  watch: {
    selected: 'changeSelected'
  },
  mounted () {
    this.textTitle = this.chapterContent.title
  },
  created() {
    this.queryParams.chapterId = this.$route.query.chapterId
    console.info('测试')
    // console.info(this.queryParams)
    this.queryParams.password = this.$route.query.p
    console.info(this.queryParams.password)
    // 先获取图书章节
    this.getArticle()
  },
  // mounted: function () {
  //   document.title = articleDetail.title
  // },
  methods: {
    // 获取反馈列表
    open (position) {
      this.position = position
      this.dialog = true
    },
    /**
     * 获取图书章节
     */
    getArticle: function() {
      this.queryParams.chapterId = this.$route.params.chapterId
      getChapterContentById(this.queryParams).then(response => {
        this.chapterContent = response.data
        this.queryParams.bookId = this.chapterContent.bookId
        // console.info(this.queryParams.bookId)
        this.textTitle = this.chapterContent.title
        this.getChaptersByBookId()
      })
    },
    /**
     * 目录点选重查章节
     */
    changeSelected() {
      this.queryParams.chapterId = this.selected
      this.$router.push({
        path: '/bookChapter/' + this.selected
      })
      getChapterContentById(this.queryParams).then(response => {
        this.chapterContent = response.data
        this.textTitle = this.chapterContent.title
      })
    },
    /**
     * 根据图书编码查询章节树
     */
    getChaptersByBookId: function() {
      this.queryParams.bookId = this.chapterContent.bookId
      console.log(this.chapterContent.bookId)
      if (this.queryParams.bookId != null) {
        console.log(this.queryParams)
        getChaptersByBookId(this.queryParams).then(response => {
          this.simple = response.data
          this.simple.forEach(item => {
            this.expanded.push(item.nodeKey)
          })
        })
      } else {
        console.log('图书编码为空')
      }
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
/*img {*/
/*  -ms-interpolation-mode: bicubic;*/
/*}*/
/*img {*/
/*  width: 100%;*/
/*  height: 100%;*/
/*}*/

#article a:before {
  content: "👉";
}
</style>
