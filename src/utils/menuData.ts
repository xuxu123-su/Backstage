import { reactive } from 'vue'

const menus = reactive([
  {
    path: '/',
    redirect: '/index',
    name: 'index',
    meta: {
      title: '系统管理',
      icon: 'Monitor'
    },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/system/index.vue'),
        meta: { 
          title: '核心技术'
        }
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/system/profile.vue'),
        meta: { 
          title: '个人中心'
        }
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      title: '商品中心',
      icon: 'Goods'
    },
    children: [
      {
        path: 'productType',
        name: 'productType',
        component: () => import('@/views/product/productType.vue'),
        meta: {
          title: '商品类别' 
        }
      },
      {
        path: 'productInfo',
        name: 'productInfo',
        component: () => import('@/views/product/productInfo.vue'),
        meta: { 
          title: '商品信息'
        }
      }
    ]
  },
  {
    path: '/backstage',
    name: 'backstage',
    meta: {
      title: '后台管理',
      icon: 'setting'
    },
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/backstage/user.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'department',
        name: 'department',
        component: () => import('@/views/backstage/department.vue'),
        meta: {
          title: '部门管理'
        }
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/backstage/menu.vue'),
        meta: {
          title: '菜单管理'
        }
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/backstage/role.vue'),
        meta: {
          title: '角色管理'
        }
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      title: '订单管理',
      icon: 'Notebook'
    },
    children: [
      {
        path: 'productOrder',
        name: 'productOrder',
        component: () => import('@/views/order/productOrder.vue'),
        meta: {
          title: '商品订单'
        }
      },
      {
        path: 'orderQuery',
        name: 'orderQuery',
        component: () => import('@/views/order/orderQuery.vue'),
        meta: {
          title: '订单查询' 
        }
      },
      {
        path: 'orderAfter',
        name: 'orderAfter',
        component: () => import('@/views/order/orderAfter.vue'),
        meta: {
          title: '售后管理'
        }
      }
    ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/shop/index.vue'),
      meta: {
      title: '门店管理',
      icon: 'Location'
    }
  },
])

export default menus