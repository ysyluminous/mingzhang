const routes = [
  {
    path: '/donate',
    name: '/donate',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Analysis')
      }
    ]
  },
  {
    path: '/dashboard/analysis',
    name: '/dashboard/analysis',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Analysis')
      }
    ]
  },
  {
    path: '/article/:articleId',
    name: 'articleDetail',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '文章详情'
    },
    children: [
      {
        path: '',
        component: () => import('pages/cms/article')
      }
    ]
  },
  {
    path: '/bookChapter/:chapterId',
    name: 'bookChapter',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '图书详情'
    },
    children: [
      {
        path: '',
        component: () => import('pages/cms/bookChapter')
      }
    ]
  },
  {
    path: '/article',
    name: '/article',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '文章列表'
    },
    children: [
      {
        path: '',
        component: () => import('pages/cms/Articles')
      }
    ]
  },
  {
    path: '/book/:bookId',
    name: 'bookDetail',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '图书详情'
    },
    children: [
      {
        path: '',
        component: () => import('pages/cms/book')
      }
    ]
  },
  {
    path: '/book',
    name: '/book',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '图书列表'
    },
    children: [
      {
        path: '',
        component: () => import('pages/cms/books')
      }
    ]
  },
  {
    path: '/rec/:resourceId',
    name: 'recDetail',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '资源详情'
    },
    children: [
      {
        path: '',
        component: () => import('pages/cms/resource')
      }
    ]
  },
  {
    path: '/rec',
    name: '/rec',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '资源列表'
    },
    children: [
      {
        path: '',
        component: () => import('pages/cms/resources')
      }
    ]
  },
  {
    path: '/soft/:softId',
    name: 'softDetail',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '资源详情'
    },
    children: [
      {
        path: '',
        component: () => import('pages/cms/soft')
      }
    ]
  },
  {
    path: '/soft',
    name: '/soft',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '资源列表'
    },
    children: [
      {
        path: '',
        component: () => import('pages/cms/softs')
      }
    ]
  },
  {
    path: '/dashboard/monitor',
    name: '/dashboard/monitor',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Monitor')
      }
    ]
  },
  {
    path: '/dashboard/workplace',
    name: '/dashboard/workplace',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Workplace')
      }
    ]
  },
  {
    path: '/form/basic-form',
    name: '/form/basic-form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/BasicForm')
      }
    ]
  },
  {
    path: '/form/advanced-form',
    name: '/form/advanced-form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/AdvancedForm')
      }
    ]
  },
  {
    path: '/form/step-form',
    name: '/form/step-form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/StepForm')
      }
    ]
  },
  {
    path: '/profile/basic',
    name: '/profile/basic',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/profile/basic')
      }
    ]
  },
  {
    path: '/profile/advanced',
    name: '/profile/advanced',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/profile/advanced')
      }
    ]
  },
  {
    path: '/account/center',
    name: '/account/center',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/account/Center')
      }
    ]
  },
  {
    path: '/account/settings',
    name: '/account/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/account/Settings')
      }
    ]
  },
  {
    path: '/result/success',
    name: '/result/success',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/result/Success')
      }
    ]
  },
  {
    path: '/result/fail',
    name: '/result/fail',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/result/Fail')
      }
    ]
  },
  {
    path: '/exception/403',
    name: '/exception/403',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages//exception/403')
      }
    ]
  },
  {
    path: '/exception/404',
    name: '/exception/404',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages//exception/404')
      }
    ]
  },
  {
    path: '/exception/500',
    name: '/exception/500',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages//exception/500')
      }
    ]
  },
  {
    path: '/list/search/projects',
    name: '/list/search/projects',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/search/Projects')
      }
    ]
  },
  {
    path: '/list/search/applications',
    name: '/list/search/applications',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/search/Applications')
      }
    ]
  },
  {
    path: '/list/search/articles',
    name: '/list/search/articles',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/search/Articles')
      }
    ]
  },
  {
    path: '/list/user-list',
    name: '/list/user-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/UserList')
      }
    ]
  },
  {
    path: '/list/goods-list',
    name: '/list/goods-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/GoodsList')
      }
    ]
  },
  {
    path: '/list/card-list',
    name: '/list/card-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/CardList')
      }
    ]
  },
  {
    path: '/list/basic-list',
    name: '/list/basic-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/BasicList')
      }
    ]
  },
  {
    path: '/list/table-list',
    name: '/list/table-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/TableList')
      }
    ]
  },
  {
    path: '/user/login',
    name: '/user/login',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/user/Login.vue')
      }
    ]
  },
  {
    path: '/user/register',
    name: '/user/register',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/user/Register.vue')
      }
    ]
  },
  {
    path: '/user/register',
    name: '/user/register',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/user/Register.vue')
      }
    ]
  },
  {
    path: '/user/registerResult',
    name: '/user/registerResult',
    props: true,
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/user/RegisterResult.vue')
      }
    ]
  },
  {
    path: '/editor/customer',
    name: '/editor/customer',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/editor/Customer')
      }
    ]
  },
  {
    path: '/editor/markdown',
    name: '/editor/markdown',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/editor/Markdown')
      }
    ]
  },
  {
    path: '/expend/flow-chart',
    name: '/expend/flow-chart',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/expend/FlowChart')
      }
    ]
  },
  {
    path: '/',
    name: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Analysis.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
