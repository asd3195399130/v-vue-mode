<!--  -->
<template>
  <div class="">
    <div class="inp">
      <input type="text" placeholder="search" id="seach" />
      <span class="el-icon-search"></span>
    </div>
    <div class="heard">
        <ul >
            <li @click="clic('所有')" >
                <span>
                    <svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75zm9.75 13.75h5.5c.69 0 1.25-.56 1.25-1.25v-5.5h-6.75v6.75zm-1.5-6.75H4.5v5.5c0 .69.56 1.25 1.25 1.25h5.5v-6.75zm1.5-1.5h6.75v-5.5c0-.69-.56-1.25-1.25-1.25h-5.5v6.75zm-1.5-6.75h-5.5c-.69 0-1.25.56-1.25 1.25v5.5h6.75V4.5z" fill="currentColor"></path></g></svg>
                </span>
                <span class="">所有</span>
                <span>0</span>
            </li>
            <li @click="clic('今天')">
                <span>
                  <svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="block"><path d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h4v-1.5h-4a1.75 1.75 0 0 1-1.75-1.75V8.5h15v9.25a1.75 1.75 0 0 1-1.75 1.75h-4V21h4A3.25 3.25 0 0 0 21 17.75V6.25zM6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75zm7 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0zm.502 6.56a.75.75 0 0 0 .996-1.12l-2.25-2a.75.75 0 0 0-.996 0l-2.25 2a.75.75 0 0 0 .996 1.12l1.002-.89v3.83a.75.75 0 1 0 1.5 0v-3.83l1.002.89z" fill="currentColor"></path></g></svg>
                </span>
                <span>今天</span>
                <span>0</span>
            </li>
            <li>
                   <span>
                    <svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75zM7.75 7a.75.75 0 0 1 .743.648l.007.102v8.5a.75.75 0 0 1-1.493.102L7 16.25v-8.5A.75.75 0 0 1 7.75 7z" fill="currentColor"></path></g></svg>
                   </span>
                    <span @click="clic('最近七天')">最近七天</span>
                    <span>0</span>
            </li>
        </ul>
    </div>
    <p><el-divider></el-divider></p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    clic(text){
      // console.log(text);
      this.$bus.$emit("clic", text)
      
    }
  },
  computed:{
  
  },
  created() {
    // this.inde = this.mast.length*10
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
#seach {
  width: 140px;
  height: 30px;
  background:rgb(27, 26, 26);
  border: none;
}
.heard{
    width:180px;

}
.inp {
  width: 184px;
  height: 32px;
  border-radius: 15px;
  border: 1px solid #25252c;
  display: flex;
  align-content: space-between;
  justify-content: space-evenly;
  align-items: center;
}
ul{
    list-style: none;
}
ul li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    height: 32px;
     margin-top:10px
}
ul li span{
    font-size: 14px;
    color: #25252c;
    font-size:10px;
    font-weight: 100;
}
ul li:nth-child(1) {
  border-left:2px solid blue
}
ul li span:nth-child(1){
    width:20px;
    height:20px;
    color:aliceblue;
}
ul li span:nth-child(2){
    color:rgb(135, 143, 150);
}
ul li span:nth-child(3){
    color: aliceblue;
}
ul li:hover{
    border-radius: 15px;
    background:rgb(59, 59, 119);
}
p{
    width:180px;
    text-align:center;
    margin-top:14px
}
</style>
