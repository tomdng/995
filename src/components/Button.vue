<template>
  <a :href="href">{{ text }}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    href: String,
    text: String,
  },
};
</script>

<style scoped>
a {
  padding: 12px 32px;
  margin-top: 1rem;

  background: #000;
  border-radius: 32px;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
}
</style>