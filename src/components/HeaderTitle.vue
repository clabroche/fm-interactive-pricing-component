<template>
  <div id="header-title-root">
    <img class="pattern-circles" src="@/assets/icons/pattern-circles.svg" alt="">
    <h1>Simple, traffic-based pricing</h1>
    <h2><span>Sign-up for our 30-day trial.</span> <span>No credit card required.</span> </h2>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#header-title-root {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  margin: auto;
  width: 90vw;
  @media screen and (max-width: 500px) {
    font-size: 0.8em;
    h2 {
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 10px;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  h1 {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--dark-desaturated-blue);
  }
  h2 {
    font-size: 1em;
    font-weight: bold;
    margin-top: 15px;
    color: var(--grayish-blue);
  }
  .pattern-circles {
    position: absolute;
    z-index: -1;
  }
}
</style>