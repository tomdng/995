// TODO: Turn into snipcart component
<template>
  <article @click="purchase" @mouseover="overlayOn" @mouseleave="overlayOff">
    <img v-bind:src="imgUrl" v-bind:alt="name" />

    <div class="mt-2">
      <h2>
        {{ name }}
        <span v-if="itemOnSale" class="text-gray">{{ " " }}(Sale)</span>
      </h2>
    </div>

    <div>
      <p
        class="font-semibold"
        v-bind:class="{
          'text-accent': itemOnSale,
        }"
      >
        {{ itemOnSale ? salePrice : price }}
        <span v-if="itemOnSale" class="line-through text-gray"
          >{{ " " }}{{ price }}</span
        >
      </p>
    </div>

    <div
      class="ShopItem__overlay"
      v-bind:class="{
        'ShopItem__overlay--hover': overlay,
      }"
    >
      <p class="text-4xl text-black">Add to cart</p>
    </div>
  </article>
</template>

<script lang="ts">
export default {
  name: "ShopItem",
  props: {
    description: String,
    imgUrl: String,
    itemId: {
      type: String,
      required: true,
    },
    itemUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    salePrice: Number,
  },
  data: function () {
    return {
      overlay: false,
    }
  },
  computed: {
    itemOnSale: function () {
      return this.salePrice && this.salePrice < this.price
    },
  },
  methods: {
    overlayOn: function () {
      this.overlay = true
      return
    },
    overlayOff: function () {
      this.overlay = false
      return
    },
    purchase: function () {
      alert("Making purchase!")
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  max-width: 512px;
  position: relative;
}

img {
  max-width: 100%;
  max-height: 512px;
}

.ShopItem__overlay {
  display: none;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
}

.ShopItem__overlay--hover {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
