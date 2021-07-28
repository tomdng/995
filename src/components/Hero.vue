<template>
  <div class="hero">
    <h1>9.95</h1>
    <p>The final price <span class="small">(for almost anything)</span></p>
    <Button href="mailto:almostanythingfor9.95@gmail.com" text="Get a quote" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Hero",
  components: {
    Button: Button,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 200px;
  margin-top: 0;
  margin-bottom: -2rem;
}

p {
  font-size: 24px;
  font-weight: 600;
}

.small {
  color: #e5e5e5;
  font-size: 12px;
}

.hero {
  height: 512px;
  background: linear-gradient(
    144deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
