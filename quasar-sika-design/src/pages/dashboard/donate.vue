<template>
  <div class='sc-design q-mb-md'>
    <q-resize-observer :debounce='300'  />
    <div class='row q-px-sm'>
      <div class='col-md-3 col-sm-6 col-xs-12 q-px-sm q-mb-md'>
        <sc-shadow>
          <q-card class='no-border-radius text-grey-9' flat>
            <q-card-section class='bg-white'>
              <q-avatar
                :icon='analysisData.visitData.icon'
                class='q-mr-sm'
                color='green-1'
                size='sm'
                text-color='green'
              ></q-avatar>
              <span>{{ ` ${$t('Analysis.articlesHitNum')} ` }}</span>
              <span>
                <q-chip
                  :label="$t('Analysis.total')"
                  class='bg-green-1 float-right'
                  color='green'
                  outline
                  size='sm'
                  square
                ></q-chip>
              </span>
            </q-card-section>
            <q-separator />
            <q-card class='q-pa-md' flat square>
              <div style='height: 60px'>
                <q-item-label
                  class='text-grey-9 q-mb-md'
                  style='font-size: xx-large'
                >
                  {{ siteInfo.articlesHitNum }}
                </q-item-label>
                <!--                <q-item-label class="q-mb-md">-->
                <!--                  <span class="q-mr-md">-->
                <!--                    {{` ${$t('Analysis.yearOnYear')} ${analysisData.visitData.dayForCompare} `}}-->
                <!--                    <q-icon size="xs" name="arrow_drop_up" color="red" />-->
                <!--                  </span>-->
                <!--                  <span-->
                <!--                  >{{`${$t('Analysis.weekday')} ${analysisData.visitData.weekForCompare} `}}-->
                <!--                    <q-icon size="xs" name="arrow_drop_down" color="info" />-->
                <!--                  </span>-->
                <!--                </q-item-label>-->
              </div>
              <q-separator spaced='15px' />
              <q-item-label>
                <span>{{ `${$t('Analysis.articlesNum')}` }}</span>
                <span class='float-right'>{{ siteInfo.articlesNum }}</span>
              </q-item-label>
            </q-card>
          </q-card>
        </sc-shadow>
      </div>
      <div class='col-md-3 col-sm-6 col-xs-12 q-px-sm q-mb-md'>
        <sc-shadow>
          <q-card class='no-border-radius text-grey-9' flat>
            <q-card-section class='bg-white'>
              <q-avatar
                :icon='analysisData.saleData.icon'
                class='q-mr-sm'
                color='red-1'
                size='sm'
                text-color='red'
              ></q-avatar>
              <span>{{ ` ${$t('Analysis.resourcesNum')} ` }}</span>
              <span>
                <q-chip
                  :label="$t('Analysis.total')"
                  class='bg-blue-1 float-right'
                  color='blue'
                  outline
                  size='sm'
                  square
                ></q-chip>
              </span>
            </q-card-section>
            <q-separator />
            <q-card class='q-pa-md' flat square>
              <div style='height: 60px'>
                <q-item-label
                  class='text-grey-9 q-mb-md'
                  style='font-size: xx-large'
                >
                  {{ siteInfo.resourceNum }}
                </q-item-label>
              </div>
              <q-separator spaced='15px' />
              <q-item-label class='col-md-6 col-sm-6 col-xs-12 '>
                {{ `${$t('Analysis.resourceHits')}` }}
                <span class='float-right'>{{
                    siteInfo.resourceHitNum
                  }}</span>
              </q-item-label>
            </q-card>
          </q-card>
        </sc-shadow>
      </div>
      <div class='col-md-3 col-sm-6 col-xs-12 q-px-sm q-mb-md'>
        <sc-shadow>
          <q-card class='no-border-radius text-grey-9' flat>
            <q-card-section class='bg-white'>
              <q-avatar
                :icon='analysisData.orderData.icon'
                class='q-mr-sm'
                color='orange-1'
                size='sm'
                text-color='orange'
              ></q-avatar>
              <span>{{ ` ${$t('Analysis.resourceHits')} ` }}</span>
              <span>
                <q-chip
                  :label="$t('Analysis.total')"
                  class='bg-red-1 float-right'
                  color='red'
                  outline
                  size='sm'
                  square
                ></q-chip>
              </span>
            </q-card-section>
            <q-separator />
            <q-card class='q-pa-md' flat square>
              <div style='height: 60px'>
                <q-item-label
                  class='text-grey-9'
                  style='font-size: xx-large'
                >
                  {{ siteInfo.resourceHitNum }}
                </q-item-label>
              </div>
              <q-separator spaced='15px' />
              <q-item-label>
                <span>{{ `${$t('Analysis.resourceDownNum')}` }}</span>
                <span class='float-right'>
                  {{ siteInfo.resourceDownNum }}</span>
              </q-item-label>
            </q-card>
          </q-card>
        </sc-shadow>
      </div>
    </div>
  </div>
</template>

<script>
import ANALYSIS_DATA from '@/mock/data/dashboard/analysisData'
import ScShadow from 'components/shadow/ScShadow'
import { date } from 'quasar'
import { getSiteInfo } from 'src/api/cms'

export default {
  name: 'Analysis',
  components: {
    ScShadow
  },
  data() {
    return {
      // analysisData: [],
      siteInfo: [],
      analysisData: ANALYSIS_DATA,
      visitBarData: ANALYSIS_DATA.visitBarData,
      orderLineData: ANALYSIS_DATA.orderLineData,
      searchUserLineData: ANALYSIS_DATA.searchUserLineData,
      perPersonSearchLineData: ANALYSIS_DATA.perPersonSearchLineData,
      salePieData: ANALYSIS_DATA.salePieData,
      visitQuery: 'currentWeek'
    }
  },
  created() {
    // 获取最新博客
    this.getSiteInfo()
  },
  methods: {
    // 获取网站信息
    getSiteInfo: function() {
      const params = {}
      getSiteInfo(params).then(res => {
        this.siteInfo = res.data
        console.info(this.siteInfo)
      })
    },
    color(item) {
      if (item < 65) {
        return 'blue'
      } else if (item >= 65 && item < 90) {
        return 'purple-4'
      } else {
        return 'grey'
      }
    },
    changeQueryDate(value) {
      if (!value) {
        value = 'currentWeek'
      }
      const currentDate = date.startOfDate(new Date(), 'day')
      let lastDate = new Date()
      if (value === 'currentMonth') {
        lastDate = date.subtractFromDate(currentDate, { days: 30 })
      } else if (value === 'currentYear') {
        lastDate = date.subtractFromDate(currentDate, { days: 365 })
      } else {
        lastDate = date.subtractFromDate(currentDate, { days: 7 })
      }
      ANALYSIS_DATA.buildEbarItems(lastDate, currentDate, value, this.visitBarData)
    }
  },
  computed: {
    size() {
      if (this.$q.screen.gt.md) {
        return 'sm'
      }
      if (this.$q.screen.gt.xs) {
        return 'xs'
      }
      return '1em'
    }
  },
  mounted() {
    this.changeQueryDate()
    ANALYSIS_DATA.buildElineItems(this.orderLineData, 100, 1000)
    ANALYSIS_DATA.buildElineItems(this.searchUserLineData, 100, 2000)
    ANALYSIS_DATA.buildElineItems(this.perPersonSearchLineData, 5, 20)
    ANALYSIS_DATA.buildEpieItems(this.salePieData)
  }
}
</script>
<style lang='sass'></style>
