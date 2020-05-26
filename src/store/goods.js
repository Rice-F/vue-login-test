import gs from '../services/goods'

export default ({
  state: {
    slider: [],
    keys: [],
    goodsInfo: {}
  },
  mutations: {
    setGoodsInfo (state, { slider, keys, goodsInfo }) {
      state.slider = slider
      state.keys = keys
      state.goodsInfo = goodsInfo
    }
  },
  getters: {
    // 添加goods属性，转换对象为数组
    goods: state => {
      // 返回一个二维数组
      return state.keys.map(key => state.goodsInfo[key])
        // 将二维数组转换为一维数组
        .reduce((prev, next) => prev.concat(next), [])
    }
  },
  actions: {
    getGoodsInfo ({ state, commit }) {
      if (!state.keys.length) {
        gs.getGoodsInfo()
          .then(goodsInfo => {
            commit('setGoodsInfo', goodsInfo)
          })
      }
    }
  },
  modules: {
  }
})
