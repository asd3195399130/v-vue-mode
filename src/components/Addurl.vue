<!--  -->
<template>
  <div class="creat">
    <ul>
      <li
        v-for="(item, index) in addlist"
        :key="index"
       @mouseenter="showIcon(index)" @mouseleave="hideIcon(index)" @dblclick="start(index)">
        <span>
          <svg
            data-v-a22cce3a=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path :d="item.path" :fill="item.fell"></path>
            </g>
          </svg>
        </span>
        <span v-if="title == index ? false : true" @dblclick="start(index)" @click="ink(item.title)">{{
          item.title
        }}</span>
        <input
          v-else
          ref="inputFiels"
          type="text"
          v-model="item.title"
          @keydown.enter="finishEditing(index) , ink(item.title) "
        />
 
        <span v-if="hoveredIndex === index" class="el-icon-delete sq" @click = "del(index)"></span>
        <span v-else>{{ item.num }}</span>
  
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      addlist: [],
      isHovered: false,
      title: null,
      hoveredIndex: -1,
    };
  },
  methods: {
    ink(text){
      this.$bus.$emit("ink",text);
    },
    mather(math) {
     this.addlist.push(math)
      this.$bus.$emit("math",this.addlist.title);
    },
    start(index) {
   
      this.title = index;
    },
    finishEditing(index) {
    //   console.log(title);
   
       this.title =null
    // this.$refs.inputFiels.blur();
    //   // 处理更新数据的逻辑
    
    //   this.title = index;
    },
        showIcon(index) {
        console.log(index);
          this.hoveredIndex = index;
        },
        hideIcon(index) {
          this.hoveredIndex = -1;
        },

    del(){
        this.addlist.splice(this.hoveredIndex,1)
    }
  },

  computed: {},
  created() {
    this.$bus.$on("current", this.mather);
    this.addlist = JSON.parse(localStorage.getItem("addlist"));
  },
  updated() {
    localStorage.setItem("addlist", JSON.stringify(this.addlist));
  },
  beforeMount() {},
  beforeDestroy() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 .creat {
    width: 180px;
    height: 62%;
    cursor: pointer;
  }
@media (min-width: 1920px) and(min-height:100vh) {
  .creat {
    width: 180px;
    height: 62%;
    cursor: pointer;
  }
}
@media (max-width: 1485px) and(max-height:100vh) {
  .creat {
    width: 180px;
    height: 62%;
    cursor: pointer;
  }
  
  //  .creat{
  //     width:180px;
  //     height:335px;
  // }
}
.sq{
    cursor:pointer
}
ul::-webkit-scrollbar{
    width:8px
}
ul {
   width: 180px;
    height: 100%;
  list-style: none;
  overflow: auto;
}
ul li {
   
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  height: 32px;
  margin-top: 10px;
}
ul li span {
  font-size: 14px;
  color: #25252c;
  font-size: 10px;
  font-weight: 100;
}
ul li span:nth-child(1) {
  width: 20px;
  height: 20px;
  color: aliceblue;
}
ul li span:nth-child(2) {
  color: rgb(135, 143, 150);
}
ul li span:nth-child(3) {
  color: aliceblue;
}
ul li:hover {
  border-radius: 15px;
  background: rgb(59, 59, 119);
}
input {
  width: 140px;
  height: 30px;
  background: rgb(27, 26, 26);
  border: none;
  color: #fff;
}
</style>