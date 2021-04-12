<template>
  <div class="container">
    <Hero />
    <div class="intro">
      <p>
        Ever wanted to get something done and it wasn't offered at a quote of
        9.95? Well we at the 9.95 team certainly have. Unfortunately, we've both
        been quoted for thousands of dollars and we've had sponsors offer us
        stuff for free.
      </p>
      <p>
        But no more. Our mission is to make EVERYTHING 9.95. It makes our lives
        easier and it will certainly make yours far easier. Here's what some
        regular folk have to say.
      </p>
    </div>
    <div class="ratings">
      <div class="ratings__row">
        <Rating
          :img="robot"
          name="Levi"
          desc="Apparently boomer"
          review="For $9.95 and an angler grinder, I can provide door opening services"
        />
        <Rating
          :img="airplane"
          name="Chandler"
          desc="Overslept one day"
          review="Trophies need plaques for as low as $9.95"
        />
        <Rating
          :img="hamster"
          name="Chana"
          desc="Actually emailed us"
          review="If they cant I would suggest emailing almostanythingfor9.95@gmail.com"
        />
      </div>
    </div>
    <div class="call">
      <h2>Bring balance, bring 9.95 into your life.</h2>
      <Button
        href="mailto:almostanythingfor9.95@gmail.com"
        text="Start today"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Hero from "./Hero.vue";
import Rating from "./Rating.vue";

export default {
  name: "Home",
  components: {
    Button: Button,
    Hero: Hero,
    Rating: Rating,
  },
  data: () => ({
    hamster: require("@/assets/hamster.jpg"),
    robot: require("@/assets/robot.png"),
    airplane: require("@/assets/airplane.png"),
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 48px;
  max-width: 512px;
}

p {
  font-size: 18px;
  max-width: 800px;
}

.container {
  display: flex;
  flex-direction: column;
}

.intro {
  padding: 4rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ratings {
  padding: 2rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ratings__row {
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

@media (max-width: 800px) {
  .ratings__row {
    flex-direction: column;
    align-items: center;
  }
}

.call {
  padding: 4rem;
  color: white;

  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
