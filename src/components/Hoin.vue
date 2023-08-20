<!--  -->
<template>
<div class="jon" @click="addlist">
<span class="el-icon-plus"></span>
添加列表
</div>
</template>

<script>



export default {
    name:"",
    data() {
        return {}
    },
    methods:{
      addlist(){

     const math=
           {
                    path:"M2.75 18h12.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.494L2.75 18h12.5h-12.5zm0-6.5h18.5a.75.75 0 0 1 .102 1.493L21.25 13H2.75a.75.75 0 0 1-.102-1.493l.102-.007h18.5h-18.5zm0-6.497h15.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493l.102-.007h15.5h-15.5z",
                    fell:"currentColor",
                    title:'待办事项',
                    num:0,
                    status:false,
                }
              
  
       this.$bus.$emit("current",math)
       
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
.jon{
    color:aliceblue;
    cursor: pointer;
}
</style>