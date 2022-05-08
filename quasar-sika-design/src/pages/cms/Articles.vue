<template>
  <header v-title class='header_home user_reg' data-title='文章列表'>
    <div>
      <div class='sc-base-list'>
        <div class='bg-white text-h6 q-pa-md sc-design'>
          <strong>搜索文章</strong>
        </div>
        <div class='q-pt-md q-mx-md'>
          <q-card class='q-gutter-y-md q-pb-md' flat square>
            <q-form>
              <div class='row q-gutter-y-sm q-pt-sm'>
                <q-item class='col-xl-3 col-sm-3 col-xs-12'>
                  <q-item-section class='col-2 text-right gt-sm'>
                    <q-item-label>内容:</q-item-label>
                  </q-item-section>
                  <q-item-section class='col'>
                    <q-input
                      v-model='queryParams.title'
                      clearable
                      dense
                      label='名称'
                      outlined
                      square
                    >
                    </q-input>
                  </q-item-section>
                </q-item>

                <q-item class='col-xl-3 col-sm-3 col-xs-12'>
                  <q-item-section class='col-2 text-right gt-sm'>
                    <q-item-label>内容:</q-item-label>
                  </q-item-section>
                  <q-item-section class='col'>
                    <q-input
                      v-model='queryParams.content'
                      clearable
                      dense
                      label='内容'
                      outlined
                      square
                    >
                    </q-input>
                  </q-item-section>
                </q-item>
                <q-item class='col-xl-3 col-sm-6 col-xs-12 q-pr-sm'>
                  <q-item-label class='col-12 text-right'>
                    <q-btn
                      class='q-mr-sm no-border-radius'
                      color='secondary'
                      label='重置'
                      outline
                      unelevated
                      @click='resetQuery'
                    />
                    <q-btn
                      :loading='queryLoad'
                      class='q-mr-sm no-border-radius'
                      color='primary'
                      label='查询'
                      unelevated
                      @click='doQuery'
                    >
                      <template v-slot:loading>
                        <q-spinner-ios class='on-center' />
                      </template>
                    </q-btn>
                    <q-btn-dropdown
                      v-model='showQuery'
                      :label='tableLabel'
                      color='primary'
                      dense
                      flat
                      persistent
                      @before-show='show'
                      @before-hide='hide'
                    >
                    </q-btn-dropdown>
                  </q-item-label>
                </q-item>
              </div>
            </q-form>

          </q-card>
        </div>
      </div>
      <div class='sc-design-min bg-white q-gutter-md q-mt-md q-mx-md q-pa-sm'>
        <!--      <div   class="row">-->
        <!--        <span class="col-auto q-mt-xs"> 所属类目：</span>-->
        <!--        <span class="col">-->
        <!--          <q-chip-->
        <!--            class="cursor-pointer no-border-radius"-->
        <!--            style="padding: 12px 12px"-->
        <!--            square-->
        <!--            dense-->
        <!--            color="primary"-->
        <!--            v-for="type in types"-->
        <!--            v-bind:key="type"-->
        <!--            :label="type"-->
        <!--            text-color="white"-->
        <!--          />-->
        <!--        </span>-->
        <!--      </div>-->
        <!--      <div class="row">-->
        <!--        <span class="col-sm-auto col-xs-2">owner： </span>-->
        <!--        <span class="col-sm-auto col-xs-9">-->
        <!--          <q-select-->
        <!--            class="col-auto inline-block"-->
        <!--            style="min-width: 100px"-->
        <!--            outlined-->
        <!--            v-model="owner"-->
        <!--            square-->
        <!--            multiple-->
        <!--            dense-->
        <!--            hide-dropdown-icon-->
        <!--            options-dense-->
        <!--            transition-show="jump-down"-->
        <!--            transition-hide="jump-up"-->
        <!--            behavior="menu"-->
        <!--            :options="owners"-->
        <!--            emit-value-->
        <!--            map-options-->
        <!--            @filter="filterFn"-->
        <!--          >-->
        <!--            <template v-slot:selected-item="scope">-->
        <!--              <q-chip-->
        <!--                removable-->
        <!--                dense-->
        <!--                @remove="scope.removeAtIndex(scope.index)"-->
        <!--                :tabindex="scope.tabindex"-->
        <!--                color="primary"-->
        <!--                text-color="white"-->
        <!--                class="q-ma-xs"-->
        <!--              >-->
        <!--                {{ scope.opt.label }}-->
        <!--              </q-chip>-->
        <!--            </template>-->
        <!--            <template v-slot:option="scope">-->
        <!--              <q-item-->
        <!--                class="q-pa-none"-->
        <!--                v-bind="scope.itemProps"-->
        <!--                v-on="scope.itemEvents"-->
        <!--              >-->
        <!--                <q-item-section side>-->
        <!--                  <q-checkbox-->
        <!--                    :disable="scope.opt.disable"-->
        <!--                    v-model="owner"-->
        <!--                    :val="scope.opt.value"-->
        <!--                  ></q-checkbox>-->
        <!--                </q-item-section>-->
        <!--                <q-item-section class="q-pr-sm">-->
        <!--                  <q-item-label v-html="scope.opt.label"></q-item-label>-->
        <!--                </q-item-section>-->
        <!--              </q-item>-->
        <!--            </template>-->
        <!--          </q-select>-->
        <!--        </span>-->
        <!--      </div>-->
        <!--      <div class="row">-->
        <!--        <span class="col-sm-auto q-mt-sm"> 其他选项：</span>-->
        <!--        <span class="col-sm-9 col-xs-8">-->
        <!--          <span class="row q-gutter-y-sm">-->
        <!--            <span class="col-sm-5 col-xs-9">-->
        <!--              活跃用户：-->
        <!--              <q-select-->
        <!--                class="inline-block"-->
        <!--                style="width: 80px"-->
        <!--                outlined-->
        <!--                v-model="activeUser"-->
        <!--                square-->
        <!--                dense-->
        <!--                options-dense-->
        <!--                hide-dropdown-icon-->
        <!--                behavior="menu"-->
        <!--                :options="['张三', '张小三', '李泽瑞', '朱元璋', '姚明']"-->
        <!--              />-->
        <!--            </span>-->
        <!--            <span class="col-sm-5 col-xs-9">-->
        <!--              好评度：<q-select-->
        <!--                class="inline-block"-->
        <!--                style="width: 80px"-->
        <!--                outlined-->
        <!--                v-model="goodPing"-->
        <!--                hide-dropdown-icon-->
        <!--                square-->
        <!--                dense-->
        <!--                options-dense-->
        <!--                behavior="menu"-->
        <!--                :options="['优秀', '普通', '一般']"-->
        <!--              />-->
        <!--            </span>-->
        <!--          </span>-->
        <!--        </span>-->
        <!--      </div>-->
      </div>
      <div class='bg-white q-mx-md q-mt-md q-pb-md q-pt-md'>
        <template>
          <div class='q-pa-md row items-start q-gutter-md'>
            <div class='row q-gutter-y-md' style='width:100%'>
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
                    <span> 文章列表 </span>
                  </q-card-section>
                  <q-separator />

                  <q-infinite-scroll :offset='600' @load='onLoad'>
                    <div class='row q-pa-sm'>
                      <div v-for='(item, index) in articles'
                           :key='index' class='col-xs-12 col-sm-6 col-lg-4 q-pa-sm cursor-pointer'>
                        <!--                    v-for="article in articles" :key="article.index">-->
                        <sc-shadow>
                          <q-card
                            class='no-border-radius'
                            flat
                            style='border: 1px solid lightskyblue; width: 100%' @click='selectItem(item)'
                          >
                            <q-item>
                              <!--                          <q-item-section avatar style="min-width: 32px">-->
                              <!--                            <q-avatar size="sm">-->
                              <!--                              <img alt="" :src="item.title" />-->
                              <!--                            </q-avatar>-->
                              <!--                          </q-item-section>-->
                              <q-item-section>
                                <q-item-label class='text-weight-bold'>
                                  {{ item.title }}
                                </q-item-label>
                              </q-item-section>
                            </q-item>
                            <q-item class='text-grey-6'>
                              <q-item-label>
                                {{ item.description }}
                              </q-item-label>
                            </q-item>
                            <q-item>
                              <q-item-section>
                                <q-item-label
                                  class='text-grey-6'
                                  style='font-size: small'
                                >
                                  {{ item.hit }}
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
                    <template v-slot:loading>
                      <div id='pageScroll' class='text-center q-my-md'>
                        <q-spinner-dots color='primary' size='40px'></q-spinner-dots>
                      </div>
                    </template>
                  </q-infinite-scroll>
                </q-card>
              </div>
            </div>
            <!--          <q-card class="my-card col-sm-6" v-for="article in articles" :key="article.index">-->
            <!--&lt;!&ndash;            <img src="https://cdn.quasar.dev/img/mountains.jpg">&ndash;&gt;-->
            <!--            <q-card-section>-->
            <!--              <div class="text-h6">Our Changing Planet</div>-->
            <!--              <div class="text-subtitle2">by John Doe</div>-->
            <!--            </q-card-section>-->

            <!--            <q-card-section class="q-pt-none">-->
            <!--              {{ article.title }}-->
            <!--            </q-card-section>-->
            <!--          </q-card>-->

            <!--          <q-card class="my-card">-->
            <!--            <q-img-->
            <!--              src="https://cdn.quasar.dev/img/parallax2.jpg"-->
            <!--              basic-->
            <!--            >-->
            <!--              <div class="absolute-bottom text-subtitle2 text-center">-->
            <!--                Title-->
            <!--              </div>-->
            <!--            </q-img>-->
            <!--          </q-card>-->

            <!--          <q-card class="my-card">-->
            <!--            <q-img-->
            <!--              src="https://cdn.quasar.dev/img/parallax2.jpg"-->
            <!--              basic-->
            <!--            >-->
            <!--              <div class="absolute-bottom text-h6">-->
            <!--                Title-->
            <!--              </div>-->
            <!--            </q-img>-->

            <!--            <q-card-section>-->
            <!--              {{ lorem }}-->
            <!--            </q-card-section>-->
            <!--          </q-card>-->

            <!--          <q-card class="my-card">-->
            <!--            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">-->
            <!--              <div class="text-subtitle2 absolute-top text-center">-->
            <!--                Title-->
            <!--              </div>-->
            <!--            </q-img>-->
            <!--          </q-card>-->

            <!--          <q-card class="my-card">-->
            <!--            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">-->
            <!--              <div class="text-h5 absolute-bottom text-right">-->
            <!--                Title-->
            <!--              </div>-->
            <!--            </q-img>-->
            <!--          </q-card>-->

            <!--          <q-card class="my-card">-->
            <!--            <q-item>-->
            <!--              <q-item-section avatar>-->
            <!--                <q-avatar>-->
            <!--                  <img src="https://cdn.quasar.dev/img/avatar2.jpg">-->
            <!--                </q-avatar>-->
            <!--              </q-item-section>-->

            <!--              <q-item-section>-->
            <!--                <q-item-label>Title</q-item-label>-->
            <!--                <q-item-label caption>Subhead</q-item-label>-->
            <!--              </q-item-section>-->
            <!--            </q-item>-->

            <!--            <img src="https://cdn.quasar.dev/img/parallax2.jpg">-->
            <!--          </q-card>-->

            <!--          <q-card class="my-card">-->
            <!--            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">-->
            <!--              <div class="absolute-bottom">-->
            <!--                <div class="text-h6">Our Changing Planet</div>-->
            <!--                <div class="text-subtitle2">by John Doe</div>-->
            <!--              </div>-->
            <!--            </q-img>-->

            <!--            <q-card-actions>-->
            <!--              <q-btn flat>Action 1</q-btn>-->
            <!--              <q-btn flat>Action 2</q-btn>-->
            <!--            </q-card-actions>-->
            <!--          </q-card>-->
          </div>
        </template>
      </div>
    </div>
  </header>

</template>

<script>
import ScShadow from 'components/shadow/ScShadow'
// import ScPage from 'components/common/ScPage'
import { articlesSearch } from '../../api/cms'

import ARTICLES_DATA from '@/mock/data/list/search/articlesData'

const types = []
types.push('全部')
for (let i = 0; i < 11; ++i) {
  types.push('类目' + (i + 1))
}
const ownersDefault = [
  {
    label: '我自己',
    value: '我自己',
    icon: 'mail'
  },
  {
    label: '张小三',
    value: '张小三',
    icon: 'bluetooth'
  },
  {
    label: '李泽瑞',
    value: '李泽瑞',
    icon: 'map'
  },
  {
    label: '朱元璋',
    value: '朱元璋',
    icon: 'golf_course'
  },
  {
    label: '姚明',
    value: '姚明',
    disable: true,
    icon: 'casino'
  }
]

export default {
  name: 'Articles',
  // components: { ScPage, ScShadow },
  components: { ScShadow },
  data() {
    return {
      queryParams: {
        pageNum: 0,
        pageSize: 12,
        hasNextPage: true,
        isAsc: '',
        orderByColumn: 'top_sort is null  , top_sort asc ,hit desc',
        title: '',
        content: ''
      },
      tableLabel: '展开',
      queryLoad: false,
      showQuery: true,
      articles: [],
      lorem: [],
      items: [{}, {}, {}, {}, {}, {}, {}],
      articlesData: ARTICLES_DATA,
      types,
      owner: [],
      activeUser: '张三',
      goodPing: '优秀',
      owners: ownersDefault,
      queryData: ''
    }
  },
  created() {
    // 获取博客列表
    // this.getArticles()
  },
  methods: {
    resetQuery() {
      this.queryParams.title = ''
      this.queryParams.content = ''
    },
    show(evt) {
      this.showQuery = true
      this.tableLabel = '收起'
    },
    hide(evt) {
      this.showQuery = false
      this.tableLabel = '展开'
    },
    selectItem(item) {
      window.open('/article/' + item.id, '_blank')
      // this.$router.push({
      //   // name: 'articleDetail',
      //   path: '/article/' + item.id,
      //   params: {
      //     articleId: item.id
      //   }
      // })
      this.$emit('select', item)
    },
    onLoad1(index, done) {
      // console.log(this.articles)
      setTimeout(() => {
        if (this.items) {
          done()
        }
      }, 2000)
    },
    onLoad(index, done) {
      // console.log(this.articles)
      if (this.queryParams.hasNextPage) {
        setTimeout(() => {
          if (this.items) {
            // this.items.push(this.articles)
            console.info('onLoad执行了')
            this.queryParams.pageNum++
            articlesSearch(this.queryParams).then(response => {
              var articlesTemp = response.data.list
              this.queryParams.hasNextPage = response.data.hasNextPage
              articlesTemp.forEach(item => {
                this.articles.push(item)
              })
              done()
            })
          }
          // var articles1 = this.articles
          // this.articles.push(articles1)
        }, 200)
      } else {
        done()
      }
    },
    /**
     * 点击查询按钮后
     */
    doQuery() {
      this.queryLoad = true
      this.queryParams.pageNum = 1
      this.getArticles()
      setTimeout(() => {
        this.queryLoad = false
      }, 500)
    },
    // 获取列表
    getArticles: function() {
      articlesSearch(this.queryParams).then(response => {
        this.articles = response.data.list
        this.queryParams.hasNextPage = response.data.hasNextPage
      })
    },
    filterFn(val, update) {
      update(() => {
        if (val === '') {
          this.owners = ownersDefault
        } else {
          const needle = val
          this.owners = ownersDefault.filter(
            (v) => v.value.indexOf(needle) > -1
          )
        }
      })
    }
  }
}
</script>

<style>
.q-item__section--side {
  padding-right: 0;
}
</style>

<style lang='sass' scoped>

</style>
