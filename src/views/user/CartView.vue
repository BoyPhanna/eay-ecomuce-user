<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Close from "@/components/icons/Close.vue";
import { useCartStore } from "@/stores/user/cart";

const cartStore = useCartStore();

const changeQuantity = (event, index) => {
  const newQuantity = parseInt(event.target.value);
  cartStore.updateQuantity(index, newQuantity);
};
</script>

<template>
  <UserLayout>
    <h1 class="text-3xl font-bold m-4">Shopping food</h1>
    <div class="flex">
      <div class="flex-auto w-96 bg-base-200 p-1">
        <div v-for="(item, index) in cartStore.items" :key="index" class="flex">
          <div class="flex-1 w-1/2 p-10">
            <img class="object-cover h-48 w-96" :src="item.imageUrl" />
          </div>
          <div class="flex-1 mt-10">
            <div class="flex flex-col h-full justify-between">
              <div class="relative grid grid-cols-2">
                <div>
                  <div>
                    <b>{{ item.name }}</b>
                  </div>
                  <div>{{ item.about }}</div>
                  <div>{{ item.price }}$</div>
                </div>
                <div>
                  <select
                    @change="changeQuantity($event, index)"
                    v-model="item.quantity"
                    class="select"
                  >
                    <option v-for="quantity in [1, 2, 3, 4, 5]" :key="quantity">
                      {{ quantity }}
                    </option>
                  </select>
                </div>
                <div class="absolute top-0 right-0">
                  <button
                    @click="cartStore.removeItemInCart(index)"
                    class="btn btn-error"
                  >
                    remove
                  </button>
                </div>
              </div>
              <div class="text-xl font-bold">in stock</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="flex-auto w-16 bg-slate-200 p-4">
        <div class="text-xl font-bold">Order Summary</div>
        <div class="flex justify-between flex-col divide-y divide-black">
         
            <div class="flex justify-between mt-4 pt-4 px-1">
              <div>តម្លៃទំនិញទាំងអស់</div>
              <div>{{ cartStore.summaryPrice }}$</div>
            </div>
            <div class="flex justify-between mt-4 pt-4 px-1">
              <div>ថ្លៃដឹកជញ្ជូន</div>
              <div>0 $</div>
            </div>
            <div class="flex justify-between mt-4 pt-4 px-1">
              <div>តម្លៃសរុប</div>
              <div>{{ cartStore.summaryPrice }}</div>
            </div>
          </div>
      

        
          <button class="btn btn-neutral mt-64 w-full">Check out</button>
        
      </div>
    </div>
  </UserLayout>
</template>