<script setup>
import {onMounted} from 'vue'
import { useRouter } from 'vue-router'
import {useUserProductStore} from '@/stores/user/product.js'
import { useCartStore } from '@/stores/user/cart'
import UserLayout from '@/layouts/UserLayout.vue'
import ProductsList from '@/components/ProductList.vue'
const userProductStore=useUserProductStore()
const cartStore=useCartStore()
const router=useRouter()
onMounted(()=>{
console.log(userProductStore.list)
})
const addToCart=(product)=>{
  console.log('Hello add to cart')
  console.log(product)
  cartStore.addToCart(product)
  router.push({name:'cart'})
}

</script>

<template>
  <UserLayout>
    <div class="hero min-h-96 mx-10"
      style="background-image: url(https://3.bp.blogspot.com/-3s48K32iG5U/UdPFm-BP1QI/AAAAAAAAAKA/Px_n9iRTig8/s734/%E1%9E%9C%E1%9E%B6%E1%9E%9B%E1%9E%9F%E1%9F%92%E1%9E%9A%E1%9F%82.jpg);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
      </div>
    </div>

    <section>
          
    <ProductsList :products="userProductStore.list" :addToCart="addToCart"></ProductsList>
    </section>

  </UserLayout>

</template>
