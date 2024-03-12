<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
  <div class="flex flex-col h-screen w-screeen justify-center">
    <div class="w-1/2 shadow-xl mx-auto p-8 h-96 ">
    <div class="flex flex-col items-center w-full ">
      <div class="">
         <h1>Login</h1>

      </div>
      <label class="form-control w-full ">
        <div class="label">
          <span class="label-text">Email</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered "
        />
        <div class="label">
          <span class="label-text">Password</span>
        </div>
        <input
          type="password"
          placeholder="Type here"
          class="input input-bordered "
        />
      </label>
      <RouterLink :to="{name: 'admin-dashboard'}" class="btn btn-active btn-neutral w-full mt-4">Login</RouterLink>

    </div>
      
  </div>
  </div>

</template>