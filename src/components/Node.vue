<!--  -->
<template>
  <div class="lonk">
    <ul>
      <li v-for="(item,index) in mast " :key="index">
        <input type="checkbox" name="" id="" v-model="item.status"  />
        <div id="main">
          <textarea
            class="el-textarea__inner"
            tabindex="0"
            autocomplete="off"
            id="el-id-6982-37"
            style="min-height: 31px; height: 31px"
             :class="{completed:item.status}"
          >{{item.name}}</textarea>
          <div class="block">
            <el-date-picker v-model="item.value1" type="date" placeholder="-">
            </el-date-picker>
          </div>
        </div>
        <span data-v-a22cce3a class="el-icon-more">          
        </span>
        <span @click="del(index)" class="el-icon-delete"></span>
      </li>
    </ul>
   
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
            value1: '',
            text:"",
            isChecked:false,
            mast:[],
      };
    },
  methods: {
    create(msg){
     this.mast.push(msg);
     
    } ,
    del(index){
      this.mast.splice(index,1)
  },
  },
 
  created() {
    this.$bus.$on("Addli",this.create)
   
  },
  updated() {
    localStorage.setItem("mast",JSON.stringify(this.mast))
      // console.log(this.mast.length+1);
      // localStorage.setItem(mast)

  },
  beforeMount(){
 this.mast = JSON.parse(localStorage.getItem("mast"))
  },
//   mounted() {
//   this.mast = JSON.parse(localStorage.getItem("mast"))
 
// }
computed:{
 allstatus:{
    get(){
        return this.mast.every((item)=>item.status)
    }
 }
}
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 .completed {
      color: rgba(127, 127, 127, 0.5);
      text-decoration: line-through;
    }
#el-id-6982-37 {
  position: relative;
  display: block;
  resize: vertical;
  padding: 5px 11px;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  color: #cfd3dc;
  background-color: transparent;
  background-image: none;
  -webkit-appearance: none;
//   box-shadow: 0 0 0 1px #4c4d4f inset;
  border-radius: 8px !important;
  transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: none;
  overflow: hidden;
    resize: none;

}
input textarea {
  outline: none;
  border: none;
  background-color: transparent;
  font-family: inherit;
  -webkit-user-select: auto;
}
.el-textarea__inner {
  box-shadow: 0 0 0 0 transparent;
  background-color: transparent;
  font-size: 14px;
  resize: inherit;
}
#main {
  width: 100%;
  height: 74px;
//   border: 1px solid black;
}
.block{
    width:126px;
    height:24px;
    color:#ffffff4d
}
ul{
    list-style: none;
     width:100%;
    height:75%;
    // border:1px solid black;
    overflow: auto;
}
.el-icon {
    --color: inherit;
    height: 1em;
    width: 1em;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    fill: currentColor;
    color: var(--color);
    font-size: inherit;
}
ul li{
    display:flex;
    width:100%;
    overflow:auto;
}
// .el-input__inner {
//     -webkit-appearance: none;
//     background-color: #f81010;
//     background-image: none;
//     border-radius: 4px;
//     border: 1px solid #fc0404;
//     box-sizing: border-box;
//     color: #606266;
//     display: inline-block;
//     height: 33px;
//     line-height: 34px;
//     outline: 0;
//     padding: 0 15px;
//     transition: border-color .2s cubic-bezier(.645,.045,.355,1);
//     width: 100%;
// }
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 220px;
    height:34px;
    line-height: 34px;
    background:rgb(230, 226, 226)
}
.el-date-picker{
    width:150px;
    height:34px;
}

 .lonk{
    width:100%;
    height:75%;
    // border:1px solid black;
}
</style>