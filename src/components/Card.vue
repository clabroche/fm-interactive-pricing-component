<template>
  <div class="card-root">
    <div class="section">
      <slot name="top"></slot>
    </div>
    <div class="section">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card-root {
  border-radius: 4px;
  box-shadow: 0 0 10px 1px var(--light-grayish-blue);
  .section {
    padding: 30px;
    border-bottom: 1px solid var(--light-grayish-blue);
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>