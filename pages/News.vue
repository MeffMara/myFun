<template lang="pug">
div
  h1 News
  v-row(no-gutters)
    v-col(
      v-for='n in news'
      :key="randomKey(n.publishedAt)"
      cols="12"
      sm="4"
    )
      .card
        .image
          img(:src="checkImage(n.urlToImage)")
        h4 {{ n.title }}
        p {{ n.description }}
        div.news__footer
          a(:href='`${n.url}`' target='_blank') read more
          span.date-news {{ formatData(n.publishedAt) }}
</template>

<script>
export default {
  data() {
    return {
      values: [1, 2, 3],
      users: null,
      news: [],
    }
  },
  mounted() {
    this.getNews()
  },
  methods: {
    async getNews() {
      try {
        const response = await this.$store.dispatch('users/getNews')
        this.news = response.data.articles
      } catch (error) {
        return error
      }
    },
    checkImage(imgUrl) {
      if (imgUrl === null) {
        imgUrl =
          'https://www.hdwallpapers.net/previews/glass-building-in-toronto-1178.jpg'
        return imgUrl
      } else {
        return imgUrl
      }
    },
    randomKey(count) {
      count = Math.random()
      return count
    },
    formatData(date) {
      const re = /^(\d+)-(\d+)-(\d+)/
      date = re.exec(date)
      return date[0]
    },
  },
}
</script>
<style scoped>
.card {
  max-width: 365px;
  width: 100%;
  margin-bottom: 20px;
  color: darkgrey;
  background: floralwhite;
}
.image {
  width: 100%;
  height: 200px;
}

.image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
