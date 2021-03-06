import 'es6-promise/auto'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../../src', true, /\.spec\.js$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!((main(\.js)?$)|(.*\.htm(l)?$)|(.*\.(spec|mock)(\.js)?$)))/)
srcContext.keys().forEach(srcContext)
