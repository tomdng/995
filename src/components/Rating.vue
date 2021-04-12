<template>
  <div class="rating">
    <div class="image"><img :src="img" alt="Reviewer photo" /></div>
    <h3>{{ name }}</h3>
    <p class="desc">{{ desc }}</p>
    <p class="review">{{ review }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    img: String,
    name: String,
    desc: String,
    review: String,
  },
};
</script>

<style scoped>
.rating {
  margin: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 800px) {
  .rating {
    max-width: 256px;
  }
}

h3 {
  margin: 1rem 0 0;
}

.image {
  height: 10rem;
  width: 10rem;
  border-radius: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image img {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

.desc {
  font-size: 12px;
  font-weight: 300;
  margin: 0;
}

.review {
  max-width: 100%;
  font-size: 16px;
  word-wrap: break-word;
}
</style>