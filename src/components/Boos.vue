<!--  -->
<template>
<div class="box">
       <div class="crate">
        <h2>{{data}}</h2>
       </div>
        <NodeVue></NodeVue>
        <AddList/>
         <el-progress :percentage="index" color="blue"></el-progress>
</div>
</template>

<script>
import NodeVue from './Node.vue'
import AddList from './AddList.vue'
export default {
    name:"",
    data() {
        return {
         data:"所有",
         index: 0
        }
    },
    components:{
 NodeVue,AddList
    },
    methods:{
        created(msg){
            // console.log(msg);
        
           this.data = msg
        },
       tyt(text){
           this.data = text
       }
    },
   beforeCreate(){
//  this.index = this.mast.length *10
   },
    created() {
//     this.mast =  JSON.parse( localStorage.getItem("mast"))   
//   this.index = this.mast.length *10
    console.log(this.index);
    //    console.log(this.mast.length,"8888888888888888888");
    
    },
    beforeUpdate(){
        
    },
   updated(){
    //    this.index = this.mast.length *10
   },
   beforeMount(){
//  this.index = this.mast.length *10
   },
    mounted() {
      this.$bus.$on("clic",this.created)
      this.$bus.$on("ink",this.tyt)
        // this.index = this.mast.length *10
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
.box{
    width:100%;
    height:100%;
    background:#fff;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    padding:15px
}

</style>