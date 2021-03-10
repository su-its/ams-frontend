import Vue from 'vue'
import { validate, localize } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'

Vue.use(validate)
localize('ja', ja)
