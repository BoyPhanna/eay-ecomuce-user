<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
</script>

<template>
    <AdminLayout>
        <div>List product</div>
        <div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr> <th>Name</th>
        <th>Image</th>
       
        <th>Price</th>
        <th>Quantity</th>
        <th>Status</th>
        <th>Updated</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
    </AdminLayout>

</template>