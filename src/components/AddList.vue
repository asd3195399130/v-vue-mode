<!--  -->
<template>
<div class="clack">
   <span class="el-icon-plus"></span>
   <input type="text" v-model="vule" placeholder="添加事件" @keydown.enter="cllist">
   <el-progress :percentage="50"></el-progress>
</div>
</template>

<script>
export default {
    name:"",
    data() {
        return {
        vule:"",
        id:0
        }
    },
    methods:{
       cllist(){
         const  addclist ={
            id:this.id++,
            name:this.vule,
            status:false,
            value1:""
         }
         this.$bus.$emit("Addli",addclist)
         this.vule = ""
       }
       
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.clack{
    width: 100%;
    height:45px;
    // border:1px solid black;
    background:#ccc;
    margin-top: 20px;
   border-radius:10px ;
   display: flex;
}
input{
     width: 760px;
    height:45px;
    margin-left: 22px;
    border: none;
    background: rgb(212, 209, 209);
}
span{
    text-align: center;
    line-height:45px;
}
</style>