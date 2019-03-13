// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Skill6 from './Skill6'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#skill6',
  router,
  components: {
    Skill6
  },
  template: '<Skill6/>',
  render: h => h(Skill6)
})