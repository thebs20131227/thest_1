import Vue from 'vue/dist/vue.js'   //导入vue.js
import VueRouter from 'vue-router'  //导入vue-router

Vue.use(VueRouter)
import $ from 'jquery'

import app from './App.vue'
import router from './router.js'

// import ECharts from 'vue-echarts'
// import 'echarts/lib/chart/line'
// Vue.component('chart', ECharts)

import echarts from 'echarts'

Vue.prototype.$echarts = echarts



import wordcloud from './wordcloud.vue'

var vm=new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    render:c=>c(wordcloud),
    router
})