<template>
  <background/>
  <header-title/>
  <pricing-card/>
</template>

<script>
import Background from './components/Background.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import PricingCard from './components/PricingCard.vue'

export default {
  name: 'App',
  components: {
    PricingCard,
    HeaderTitle,
    Background,
  }
}
</script>

<style lang="scss">
@import './assets/fonts/Manrope/index.css';
@import './assets/css/reset.css';
@import './assets/css/colors.scss';
body {
  font-size: 15px;
  margin: 0;
  text-align: center;
  font-family: Manrope;
  background-color: var(--very-pale-blue);
}
h1  {font-size: 2em;}
h2  {font-size: 1.9em;}
h3  {font-size: 1.8em;}
h4  {font-size: 1.7em;}
h5  {font-size: 1.6em;}

</style>
