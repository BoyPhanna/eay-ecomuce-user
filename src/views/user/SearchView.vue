<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import {  computed, ref, watch } from "vue";
import { useRoute,useRouter } from "vue-router";
import { useUserProductStore } from "@/stores/user/product";
import { useCartStore } from "@/stores/user/cart";
import ProductList from "@/components/ProductList.vue";
const userProductStore = useUserProductStore();
const route = useRoute();
const searchText = ref("");
const router=useRouter()
const cartStore=useCartStore()
watch(
  () => route.query.q,
  (newSearchText) => (searchText.value = newSearchText),
  { immediate: true }
);

const addToCart=(product)=>{
  console.log('Hello add to cart')
  console.log(product)
  cartStore.addToCart(product)
  router.push({name:'cart'})
}
const filterProducts = computed(() => {
  return userProductStore.filterProducts(searchText.value);
});
</script>
<template>
  <UserLayout>
    <ProductList :products="filterProducts" :addToCart="addToCart"></ProductList>
  </UserLayout>
</template>