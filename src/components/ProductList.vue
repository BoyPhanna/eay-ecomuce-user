<script setup>
import { defineProps } from 'vue';

defineProps({
    products: Array,
    addToCart:Function
    
})
</script>

<template>
<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4 mt-4 w-full mb-4">
        <div v-for=" (product,index)  in products" :key="index" >
        <div class="card w-full h-full bg-base-100 shadow-xl">
          <figure>
            <img class="object-cover h-48 w-96 " :src="product.imageUrl" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ product.name }}</h2>
            <p>{{ product.about }}</p>
            <div class="card-actions justify-end">
              <button @click="addToCart(product)" class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      </div>

</template>