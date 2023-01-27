<template>
 <div>
   <h1> this is a test page</h1>
   <div>{{ gogogo2 }}</div>
   <div>{{ gogogo }}</div>

 </div>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue";
let gogogo = ref("");
let gogogo2 = ref("gggooo");
gogogo2 = "golo";
var data=axios(
    {
      url:"/api/machines/test",
      method:"POST",
      data:{
        "status":0
      },
      contentType:"json",
      processData: false,
      dataType:"json"
    }
).then(function (response){
  // console.log(response.data);
  gogogo.value = response.data;
  // console.log(gogogo)
})
</script>

<style scoped>

</style>