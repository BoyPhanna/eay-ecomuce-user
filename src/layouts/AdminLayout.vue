<script setup>
import { RouterLink,useRoute } from "vue-router"
import { onMounted,ref } from "vue"

const menus=[
  {
    name:'Dashboard',
    routeName:'admin-dashboard',
  },
  {
    name:'User',
    routeName:'admin-users-list',
  },
  {
    name:'Product',
    routeName:'admin-product-list',
  },
  {
    name:'Order',
    routeName:'admin-orders-list',

  },
]

const activeMenu=ref('')
const route=useRoute()
onMounted(()=>{
  activeMenu.value=route.name
})
</script>

<template>
 <div class="drawer drawer-open"> 
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content mx-4 py-4 flex flex-col ">
    <slot></slot>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
      <!-- Sidebar content here -->
      <li class="text-3xl font-bold"><a>Kim Phanna</a></li>
      <li v-for="menu in menus" :key="menu.name"><RouterLink :class=" menu.routeName===activeMenu?'active':'' "  :to="{name: menu.routeName}">{{ menu.name }}</RouterLink></li>
    </ul>
  </div>
</div>

  
</template>