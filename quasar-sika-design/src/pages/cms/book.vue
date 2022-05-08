<template>
  <div class='sc-design'>
    <div v-title='{title:textTitle}'>
    </div>
    <div class='bg-white q-px-lg q-pt-lg'>
      <div class='row text-h6'>
        <strong class='col'>{{ bookDetail.name }}</strong>
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

    <!--    <template>-->
    <!--      <div class="q-pa-md">-->
    <!--        <q-layout view="lhh LpR lff" container style="height: 500px" class="shadow-2 rounded-borders">-->
    <!--          <q-page-container>-->
    <!--            <q-page padding>-->
    <!--              <p v-for="n in 15" :key="n">-->
    <!--                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?-->
    <!--              </p>-->

    <!--              -->
    <!--            </q-page>-->
    <!--          </q-page-container>-->
    <!--        </q-layout>-->
    <!--      </div>-->
    <!--    </template>-->
    <div class='q-pt-md q-px-md'>
      <q-card class='q-px-sm q-gutter-y-lg no-border-radius' flat>
        <q-card-section>

          <q-item-label class='text-body1'>{{ bookDetail.name }}</q-item-label>
          <q-separator spaced='15px' />
          <!--
            Forked from:
            http://www.quasarchs.com/vue-components/scroll-area#example--styled
          -->
          <template>
            <div class='q-pa-md'>
              <q-list>
                <q-expansion-item popup default-opened icon='book' label='图书简介'>
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <div id='article' v-html='bookDetail.detail'></div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item popup icon='book' label='站长笔记'>
                  <q-separator />
                  <q-card>
                    <q-card-section>
                      <div id='notes' v-html='bookDetail.notes'></div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
              <q-separator spaced='15px' />
              <div class="q-pa-md q-gutter-sm text-center">
                <q-btn color="deep-orange"   glossy label="支持/打赏"  @click="donate()" />
              </div>
            </div>
          </template>

          <!--          <div id="demo1"></div>-->
        </q-card-section>
      </q-card>
    </div>
    <div class='q-pt-md q-px-md'>
      <q-card class='q-px-sm q-gutter-y-lg no-border-radius' flat>
        <q-card-section>
          <template>
            <div class='q-ma-md'>
              <h2>图书章节 </h2>
              <br>
              <q-card-section class='q-pt-none'>
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
            </div>
            <div class='row'>
              <template>
                <div class=''>
                  <q-separator spaced='15px' />
                  <br />
                </div>
              </template>
            </div>
          </template>
        </q-card-section>
      </q-card>
    </div>
    <!--    <div class="q-pa-md q-gutter-sm">-->
    <!--      <q-dialog v-model="dialog" :position="position">-->
    <!--        <q-card>-->
    <!--          <q-card-section>-->
    <!--            <div class="text-h6">点击章节查看</div>-->
    <!--          </q-card-section>-->

    <!--          <q-card-section class="q-pt-none">-->
    <!--            <q-tree-->
    <!--              :nodes='simple'-->
    <!--              :selected.sync='selected'-->
    <!--              default-expand-all-->
    <!--              node-key='nodeKey'-->
    <!--              accordion: true-->
    <!--              :expanded.sync='expanded'-->
    <!--              selected-color='primary'-->
    <!--            />-->
    <!--          </q-card-section>-->

    <!--          <q-card-actions align="right">-->
    <!--            <q-btn flat label="OK" color="primary" v-close-popup />-->
    <!--          </q-card-actions>-->
    <!--        </q-card>-->
    <!--      </q-dialog>-->

    <!--      <q-dialog v-model="confirm" persistent>-->
    <!--        <q-card>-->
    <!--          <q-card-section class="row items-center">-->
    <!--            <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />-->
    <!--            <span class="q-ml-sm">You are currently not connected to any network.</span>-->
    <!--          </q-card-section>-->

    <!--          <q-card-actions align="right">-->
    <!--            <q-btn flat label="Cancel" color="primary" v-close-popup />-->
    <!--            <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />-->
    <!--          </q-card-actions>-->
    <!--        </q-card>-->
    <!--      </q-dialog>-->

    <!--      <q-dialog v-model="prompt" persistent>-->
    <!--        <q-card style="min-width: 350px">-->
    <!--          <q-card-section>-->
    <!--            <div class="text-h6">Your address</div>-->
    <!--          </q-card-section>-->

    <!--          <q-card-section class="q-pt-none">-->
    <!--            <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />-->
    <!--          </q-card-section>-->

    <!--          <q-card-actions align="right" class="text-primary">-->
    <!--            <q-btn flat label="Cancel" v-close-popup />-->
    <!--            <q-btn flat label="Add address" v-close-popup />-->
    <!--          </q-card-actions>-->
    <!--        </q-card>-->
    <!--      </q-dialog>-->
    <!--    </div>-->
    <!--    <template>-->
    <!--      <div class="q-pa-md">-->
    <!--        <q-page-container>-->
    <!--          <q-page padding>-->
    <!--            <q-page-sticky position="left" :offset="fabPos" @click="open('right')"   >-->
    <!--              <q-fab-->
    <!--                icon="add"-->
    <!--                direction="up"-->
    <!--                color="primary"-->
    <!--                label="图书目录"-->
    <!--                hide-icon-->
    <!--                :disable="draggingFab"-->
    <!--                v-touch-pan.prevent.mouse="moveFab"-->
    <!--              >-->
    <!--                &lt;!&ndash;                      <q-fab-action @click="alert = true" color="primary" icon="person_add" :disable="draggingFab" />&ndash;&gt;-->
    <!--                &lt;!&ndash;                      <q-fab-action @click="onClick" color="primary" icon="mail" :disable="draggingFab" />&ndash;&gt;-->
    <!--              </q-fab>-->
    <!--            </q-page-sticky>-->
    <!--          </q-page>-->
    <!--        </q-page-container>-->
    <!--      </div>-->
    <!--    </template>-->
  </div>

</template>

<script>
import ADVANCED_DATA from '@/mock/data/profile/advancedData'
import { bookDetail, getChaptersByBookId } from '../../api/cms'

export default {
  name: 'Advance',
  data() {
    return {
      dialog: false,
      position: 'top',
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      },
      splitterModel: 50,
      chapterContent: '',
      selected: '1',
      alert: false,
      confirm: false,
      prompt: false,
      address: '',
      fabPos: [18, 18],
      draggingFab: false,
      simple: [
        {
          nodeKey: 1,
          label: '联系微信:yaosiyuan_weixin'
        }
      ],
      expanded: ['Satisfied customers', 'Good service (disabled node)', 'Pleasant surroundings'],
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
      queryParams: {
        bookId: 1,
        p: '',
        chapterId: ''
      },
      bookDetail: [],
      advancedData: ADVANCED_DATA,
      step: 3,
      tab: 'details',
      operatorLogTab: 'operatorLog1'
    }
  },
  mounted() {
    this.textTitle = this.bookDetail.name
  },
  created() {
    // 获取博客列表
    this.getBook()
    // 获取图书章节列表
    this.getChaptersByBookId()
  },
  // mounted: function () {
  //   document.title = softDetail.title
  // },
  watch: {
    selected: 'changeSelected'
  },
  methods: {
    donate: function() {
      // this.$router.push({
      //   path: '/article/870'
      // })
      const routeData = this.$router.resolve({ path: '/article/870' })
      window.open(routeData.href, '_blank')
    },
    changeSelected() {
      this.queryParams.chapterId = this.selected
      const routeUrl = this.$router.resolve({
        path: '/bookChapter/' + this.selected
      })
      window.open(routeUrl.href, '_blank')
      // getChapterContentById(this.queryParams).then(response => {
      //   this.chapterContent = response.data.content
      // })
    },
    // 获取反馈列表
    getBook: function() {
      const bookId = this.$route.params.bookId
      console.info(bookId)
      this.queryParams.bookId = bookId
      bookDetail(this.queryParams).then(response => {
        this.bookDetail = response.data
        this.textTitle = this.bookDetail.name
      })
    },
    getChaptersByBookId: function() {
      const bookId = this.$route.params.bookId
      console.info(bookId)
      this.queryParams.bookId = bookId
      getChaptersByBookId(this.queryParams).then(response => {
        console.log(response.data)
        this.simple = response.data
        this.simple.forEach(item => {
          this.expanded.push(item.nodeKey)
        })
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

</style>
