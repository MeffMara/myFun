<template lang="pug">
div
  h1 Home
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
  
}
</script>
<style scoped></style>
