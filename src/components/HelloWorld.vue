<!--  -->
<template>
  <div class="mast">
    <div class="host-page" :id="flag ? 'da': 'xiao'">
      <button @click="back" class="err">
        <span class="el-icon-error"></span>
      </button>
      <button @click="flag=!flag" class="scre">
        <span class="el-icon-rank"></span>
      </button>    
       <Hellow></Hellow>
       <BoosVue/>
             
    </div>

  </div>
</template>

<script>
import Hellow from "./Hellow.vue";
import BoosVue from "./Boos.vue";
export default {
  name: "name",
  data() {
    return {
      flag: false,

    };
  },
  components: {
    Hellow,
    BoosVue
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
  created() {
    
  },
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
.host-page {
  position: relative;
}
#xiao {
  width: 1000px;
  height: 600px;
}
#da {
  width: 100vw !important;
  height: 100vh !important;
}
.host-page {
  width: 1000px;
  height: 600px;
  background: #000;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 20px 20px 60px #383737, -20px -20px 60px #302f2e;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}
.err {
  position: absolute;
  right: 0px;
}
.scre{
  position: absolute;
  right: 26px;
}
button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  margin: 6px 6px 0px 0px;
}
 Hellow{
   float: left;
}
Boos{
   float: right;
}
</style>
