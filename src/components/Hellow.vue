<!--  -->
<template>
<div class="less-left">
    <Create></Create>
    <Addurl></Addurl>
    <Hoin/>
          <el-progress :percentage="50" status="warning" color="red"></el-progress>
</div>
</template>

<script>
import Create from './Create.vue';
import Addurl from "./Addurl.vue"
import Hoin   from "./Hoin.vue"
export default {
    name:"Hellow",
    data() {
        return {
           msg:"123"
        }
    },
    components:{
      Create,
      Addurl,
      Hoin
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
.less-left{
    
width:200px;
height:100%;
background:rgb(27, 26, 26);
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
padding:15px

}
</style>