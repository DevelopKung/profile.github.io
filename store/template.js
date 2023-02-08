export const state = () => ({
  lists: null
})

export const getters = {
  lists: (state) => state.lists ,
}

export const mutations = {
  setLists(state, data) {
    state.lists = data
  } ,
}

export const actions = {
  async loadData({ state , commit }) {
    let url = '/data.json'
    const res = await this.$axios.$get(url);
    console.log(res);
    // console.log(JSON.parse(res));
    commit('setLists',res)
  },  
}