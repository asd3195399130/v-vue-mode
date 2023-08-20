import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state() {
    // 状态
    return {
      math: [],
    };
  },
  mutations: {
    // 变更方法
    addlistdata(state, value) {
      state.math.push(value);
    },
  },
  actions: {
    // 动作方法
  },
  modules: {
    // 模块
  },
});

export default store;
