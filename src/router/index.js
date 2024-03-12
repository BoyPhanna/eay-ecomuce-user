import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/user/HomeView.vue'
import CartView from '@/views/user/CartView.vue'
import CheckoutView from '@/views/user/CheckoutView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import SearchView from '@/views/user/SearchView.vue'
import SuccessView from '@/views/user/SuccessView.vue'


// Admin
import AdminLoginView from '@/views/admin/LoginView.vue'
import DashboardView from '@/views/admin/DashboardView.vue'

import AdminProductList from '@/views/admin/product/ListView.vue'
import AdminProductUpdate from '@/views/admin/product/UpdateView.vue'

import AdminUserList from '@/views/admin/user/ListView.vue'
import AdminUserUpdate from '@/views/admin/user/UpdateView.vue'

import AdminOrderList from '@/views/admin/order/ListView.vue'
import AdminOrderDetail from '@/views/admin/order/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path:'/success',
      name:'success',
      component:SuccessView
    }
    ,{
      path:'/admin/login',
      name:'login',
      component: AdminLoginView
    }
    ,{
      path:'/admin/dashboard',
      name:'admin-dashboard',
      component: DashboardView
    }
    ,{
      path:'/admin/products',
      name:'admin-product-list',
      component: AdminProductList
    }
    ,{
      path:'/admin/product/create',
      name:'admin-product-create',
      component: AdminProductUpdate
    }
    ,{
      path:'/admin/product/update/:id',
      name:'admin-product-update',
      component: AdminProductUpdate
    },
    {
      path:'/admin/users',
      name:'admin-users-list',
      component:AdminUserList
    }
    ,
    {
      path:'/admin/users/update/:id',
      name:'admin-users-update',
      component:AdminUserUpdate
    }
    ,
    {
      path:'/admin/orders',
      name:'admin-orders-list',
      component:AdminOrderList
    }
    ,
    {
      path:'/admin/orders/update/:id',
      name:'admin-orders-detail',
      component:AdminOrderDetail,
    }
   
  ]
})

export default router
