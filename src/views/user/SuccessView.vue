<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { useCartStore } from "@/stores/user/cart";
import { onMounted, ref } from "vue";

const orderData = ref({});
const cartStore = useCartStore();
onMounted(() => {
  cartStore.loadCheckout();
  if (cartStore.checkout.orderNumber) {
    orderData.value = cartStore.checkout;
  }
});
</script>

<template>
  <UserLayout>
    <div class="max-w-2xl m-auto border border-base-200 shadow-2xl p-4 mb-4">
      <div>Your order is Successful!</div>
      <div>Hi {{ orderData.name }}</div>

      <div>ត្រៀមទទួលទំនិញឲ្យហើយទៅ</div>
      <div class="divider"></div>
      <div class="grid grid-cols-4">
        <div>
          <div class="font-bold">Order date</div>
          <div>{{ orderData.createdDate }}</div>
        </div>
        <div>
          <div class="font-bold">Oder Number</div>
          <div>{{ orderData.orderNumber }}</div>
        </div>
        <div>
          <div class="font-bold">Payment method</div>
          <div>{{ orderData.paymentMethod }}</div>
        </div>
        <div>
          <div class="font-bold">Address</div>
          <div>{{ orderData.address }}</div>
        </div>
      </div>
      <div class="divider"></div>
      <div
        v-for="product in orderData.product"
        :key="product.name"
        class="grid grid-cols-4 mt-4"
      >
        <div>
          <img :src="product.imageUrl" class="object-cover w-1/2" />
        </div>
        <div class="flex flex-col">
          <div>{{ product.name }}</div>
          <div>{{ product.about }}</div>
        </div>
        <div>ចំនួន {{ product.quantity }}</div>
        <div>{{product.price * product.quantity}}$</div>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-4 ">
        <div>តម្លៃទំនិញទាំងអស់</div>
        <div></div>
        <div></div>
        <div>{{ orderData.totalPrice }}</div>
      </div>
      <div class="grid grid-cols-4">
        <div>ចំនួនការកម្មង់</div>
        <div></div>
        <div></div>
        <div>0</div>
      </div>
      <div class="divider"></div>
      <div class="divider"></div>

      <div>អរគុណដែលមកទិញទំនិញយើងខ្ញុំ</div>
    </div>
  </UserLayout>
</template>