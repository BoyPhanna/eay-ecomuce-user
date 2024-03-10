<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { useCartStore } from "@/stores/user/cart";
import { reactive } from "vue";
import {RouterLink,useRouter} from 'vue-router'
const cartStore = useCartStore();
const router=useRouter()
const formData = [
  {
    name: "Email Address",
    field: "email",
  },
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Address",
    field: "address",
  },
  {
    name: "Note",
    field: "note",
  },
];

const userFormData = reactive({
  email: "",
  name: "",
  address: "",
  note: "",
});

const payment = () => {
  cartStore.placeOrder(userFormData);
  router.push({name:'success'})
};
</script>

<template>
  <UserLayout>
    <div class="text-3xl font-bold">Checkout form</div>
    <div class="flex">
      <!-- checkout form -->
      <div class="flex-auto w-96 bg-base-200 p-8">
        <div
          v-for="form in formData"
          :key="form.name"
          class="form-control w-full"
        >
          <div class="label">
            <span class="label-text">{{ form.name }}</span>
          </div>
          <input
            v-model="userFormData[form.field]"
            type="text"
            :placeholder="form.name"
            class="input input-bordered w-full"
          />
        </div>
        <button  @click="payment" class="btn btn-active btn-neutral w-full mt-4">
          គិតលុយ
        </button>
      </div>

      <!-- summary -->
      <div class="flex-auto w-96 bg-slate-200 p-1">
        <div v-for="(item, index) in cartStore.items" :key="index" class="flex bg-white my-2 mx-10">
          <div class="flex flex-1">
            <div class="flex-1 w-1/2 p-10">
            <img class="object-cover h-48 w-96" :src="item.imageUrl" />
          </div>
          </div>
          <div class="flex flex-1">
            <div class="flex flex-col justify-between py-10">
              <div>
                <div>{{ item.name }}</div>
                <div>{{ item.quantity }}</div>
              </div>
              <RouterLink :to="{name: 'cart'}" class="btn btn-active btn-primary">Edit</RouterLink>
            </div>
          </div>
        </div>

        <div class="divider divider-neutral"></div>
        <div class="mx-10 my-2">
            <div class="flex justify-between">
            <div><b>Order Summary</b></div>
            <div></div>
        </div>

        <div class="flex justify-between">
            <div><b>price</b></div>
            <div>100$</div>
        </div>
        <div class="flex justify-between">
            <div><b>deliviry</b></div>
            <div>0</div>
        </div>
        <div class="flex justify-between">
            <div><b>total price</b></div>
            <div>100$</div>
        </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>