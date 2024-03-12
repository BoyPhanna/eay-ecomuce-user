<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";

const priceChart={
    options : {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
},
series : [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
],

}

const categoryChart={
      options: {},
      series: [44, 55, 41, 17, 15]
    }


</script>

<template>
  <AdminLayout>
    <div class="text-3xl font-bold">Dashbord</div>
    <div class="stats shadow">
      <div class="stat place-items-center">
        <div class="stat-title">Order</div>
        <div class="stat-value">31K</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Users</div>
        <div class="stat-value text-secondary">4,200</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Product</div>
        <div class="stat-value">1,200</div>
      </div>
    </div>

    <!-- Graph -->
    <div class="flex  gap-2 mt-4">
      <apexchart class="flex-1"
        type="bar"
        :options="priceChart.options"
        :series="priceChart.series"
      ></apexchart>
      <apexchart class="flex-1" type="donut" :options="categoryChart.options" :series="categoryChart.series"></apexchart>
    </div>
  
  </AdminLayout>
</template>