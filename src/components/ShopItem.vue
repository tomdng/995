<!--
  NOTE: I highly doubt hovering to add the item to cart is a good choice
  in terms of accessibility
-->
<template>
  <article v-if="itemId === 'placeholder'"></article>

  <article
    v-else
    class="snipcart-add-item"
    @mouseover="overlayOn"
    @mouseleave="overlayOff"
    :data-item-id="itemId"
    :data-item-price="itemOnSale ? salePrice : price"
    :data-item-url="itemUrl"
    :data-item-description="description"
    :data-item-image="imgUrl"
    :data-item-name="name"
    :data-item-custom1-name="custom1Name"
    :data-item-custom1-options="custom1Options"
  >
    <div class="ShopItem__image-container">
      <img :src="imgUrl" :alt="name" />
    </div>

    <div class="mt-2">
      <h2>
        {{ name }}
        <span v-if="itemOnSale" class="text-gray">{{ " " }}(Sale)</span>
      </h2>
    </div>

    <div>
      <p
        class="font-semibold"
        :class="{
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
      :class="{
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
    custom1Name: String,
    custom1Options: String,
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
  width: 512px;
  position: relative;

  @media(max-width: 768px) {
    width: 100%;
  }
}

.ShopItem__image-container {
  min-width: 512px;
  padding-bottom: 100%;
  overflow: hidden;
  position: relative;

  @media(max-width: 768px) {
    min-width: 0;
    max-width: 100%;
  }
}

img {
  position: absolute;
  object-fit: cover;
  /* Centers both portrait and landscape aspect ratios */
  height: 100%;
  min-width: 100%;
}

.ShopItem__overlay {
  visibility: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: background 0.5s;

  p {
    opacity: 0;
    transition: opacity 0.5s;
  }
}

.ShopItem__overlay--hover {
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  visibility: visible;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    opacity: 1;
  }
}
</style>
