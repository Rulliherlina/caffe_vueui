<template>
<div class="row">
<div class="col-lg-4 mt-3" v-for="(menus, index) in menu" :key="index">
<div class="card">
<div class="card-header">{{menus.menu}</div>
<div class="card-body">
<h5 class="card-title">{{menus.no_tlp}}</h5>
<p class="card-text">{{menus.alamat}}</p>
</div>
<div class="card-footer text-muted">
<router-link class="btn btn-primary" :to="{name:'Detailproduk', params:{id:menus.id}}">Detail</router-link>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["menu"],
};
</script>
