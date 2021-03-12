import Vue from 'vue'
import _ from 'lodash'

Vue.use({
  install (Vue) {
    Vue.prototype._ = _
  }
})
