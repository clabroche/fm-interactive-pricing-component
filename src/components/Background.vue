<template>
  <div id="background-root">
    <img src="@/assets/bg-pattern.svg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
img {
  position: absolute;
  top:0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 50vh;
}
</style>