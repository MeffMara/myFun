export const state = () => ({
  news: [],
})

export const mutations = {
  getNews(state) {
    return state.news
  },
}

export const actions = {
  async getNews() {
    const res = await this.$axios.get()
    return res
  },
}
