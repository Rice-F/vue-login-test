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
    goods: state => {
      return state.keys.map(key => state.goodsInfo[key])
        .redecu((prev, next) => prev.concat(next), [])
    }
  },
  actions: {
    getGoodsInfo ({ state, commit }) {
      if (!state.goodsInfo) {
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
