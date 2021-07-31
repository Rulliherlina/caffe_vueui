<template>
<div class="row">
<div class="col-lg-4 mt-3" v-for="(pesanans, index) in pesanan" :key="index">
<div class="card">
<div class="card-header">{{pesanans.menu}}</div>
<div class="card-body">
<h5 class="card-title">{{pesanans.jumlah}}</h5>
<p class="card-text">{{pesanans.total}}</p>
</div>
<div class="card-footer text-muted">
<router-link class="btn btn-primary" :to="{name:'Detailpesanan', params:{id:pesanans.id}}">Detail</router-link>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["pesanan"],
};
</script>
