<template>
  <div>
    <div class='sc-base-list'>
      <div class='bg-white text-h6 q-pa-md sc-design'>
        <strong>搜索软件</strong>
        <div class='row full-width justify-center'>
          <span class='col' style='max-width: 500px'>
            <q-input v-model='queryParams.softName'
                     class='q-ma-md'
                     dense
                     outlined
                     placeholder='请输入搜索软件名称'
                     square
            >
              <template v-slot:append>
                <q-btn class='no-border-radius full-height'
                       color='primary'
                       label='搜索'
                       style='margin-right: -12px'
                       unelevated
                       @click='doQuery()'
                >
                </q-btn>
              </template>
            </q-input>
          </span>
        </div>
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
                  <span> 软件列表 </span>
                </q-card-section>
                <q-separator />

                <q-infinite-scroll :offset='600' @load='onLoad'>
                  <div class='row q-pa-sm'>
                    <div v-for='(item, index) in softs'
                         :key='index' class='col-xs-12 col-sm-6 col-lg-3 q-pa-sm cursor-pointer'>
                      <!--                    v-for="article in articles" :key="article.index">-->
                      <sc-shadow>
                        <q-card
                          class='no-border-radius'
                          flat
                          style='border: 1px solid lightskyblue'
                          @click='selectItem(item)'
                        >
                          <q-item>
                            <!--                          <q-item-section avatar style="min-width: 32px">-->
                            <!--                            <q-avatar size="sm">-->
                            <!--                              <img alt="" :src="item.title" />-->
                            <!--                            </q-avatar>-->
                            <!--                          </q-item-section>-->
                            <q-item-section>
                              <q-item-label class='text-weight-bold'>
                                {{ item.softName }}
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
</template>

<script>
import ScShadow from 'components/shadow/ScShadow'
// import ScPage from 'components/common/ScPage'
import { softSearch } from '../../api/cms'

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
        pageNum: 1,
        pageSize: 12,
        hasNextPage: true,
        softName: ''
      },

      softs: [],
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
    // 获取软件列表
    this.getSofts()
  },
  methods: {
    selectItem(item) {
      window.open('/soft/' + item.id, '_blank')
      // this.$router.push({
      //   path: '/soft/' + item.id,
      //   params: {
      //     softId: item.id
      //   }
      // })
      this.$emit('select', item)
    },
    onLoad1(index, done) {
      console.log(this.articles)
      setTimeout(() => {
        if (this.items) {
          done()
        }
      }, 2000)
    },
    doQuery() {
      this.queryLoad = true
      this.queryParams.pageNum = 1
      this.queryParams.hasNextPage = true
      this.getSofts()
      setTimeout(() => {
        this.queryLoad = false
      }, 500)
    },
    onLoad(index, done) {
      // console.log(this.articles)
      if (this.queryParams.hasNextPage) {
        setTimeout(() => {
          if (this.items) {
            this.queryParams.pageNum++
            softSearch(this.queryParams).then(response => {
              const softsTemp = response.data.list
              this.queryParams.hasNextPage = response.data.hasNextPage
              console.info(response.data.hasNextPage)
              softsTemp.forEach(item => {
                // console.log(item)
                this.softs.push(item)
              })
              done()
              // console.log(response.data)
              // console.log(this.queryParams.pageNum)
            })
          }
        }, 200)
      } else {
        done()
      }
    },
    // 获取软件列表
    getSofts: function() {
      softSearch(this.queryParams).then(response => {
        this.softs = response.data.list
        // console.log(this.resource)
        this.queryParams.hasNextPage = response.data.hasNextPage
        console.log(this.queryParams.hasNextPage)
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
