<template>
    <div class="card text-center mt-4" v-for="p in menus" :key="p.id">
  <div class="card-header">
    Detail menu
  </div>
  <div class="card-body">
    <h5 class="card-title">{{p.nama_menu}}</h5>
    <p class="card-text">{{p.harga_menu}}</p>
    <p class="card-text">{{p.varian_rasa}}</p>
   
  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editmenu', params:{id:p.id}}">Edit</router-link>
        <button @click.prevent="menuDelete(p.id)" class="btn btn-danger">Delete</button>
  </div>
</div>

</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let menus = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/menu/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        menus.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });

    function menuDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/menu/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    
    return {
      menus,
      router, 
      produkDelete,
      route
    }
  },
}
</script>

