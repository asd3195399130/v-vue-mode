<template>
  <div class="home">
   <div class="app-item-icon" @click="skip">
         <div class="d-watch-resize">
          <img data-v-4f27dc7a="" alt="ToDo" class="d-block w-full h-full" src="https://files.codelife.cc/icons/todo.svg" draggable="false" style="object-fit: contain; background-color: rgb(32, 102, 204);">
        <p>待事办</p> 
        </div>    
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'HomeView',
  components: {
 
  },
  methods: {
    skip(){
      this.$router.push('/HelloWorld')
    }
  },
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-item-icon{
  
  width:200px ;
  height: 50px;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
img{
width:128px;
height:51.9px;
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
}
p{
  width:153.59px;
  height:13.19px;
  text-align: left;
  padding-left: 39px;
}
</style>