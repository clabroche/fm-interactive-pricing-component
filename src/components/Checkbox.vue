<template>
  <div class="checkbox-root">
    <input type="checkbox" :value="value" :checked="value" @input="$emit('update:value', $event.target.checked)"/>
  </div>
</template>

<script>
export default {
  props: {
    value: {default: true, type: Boolean}
  }
}
</script>

<style lang="scss" scoped>
.checkbox-root {
  margin: 10px;
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    appearance: none;
    width: 35px;
    height: 20px;
    border-radius: 20px;
    position: relative;
    box-sizing: border-box;
    background: var(--light-grayish-background);
    cursor: pointer;
    transition: 300ms;
    &:hover {
      background: var(--soft-cyan);
    }
    &::before {
      content: "";
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(13%, 13%);
      transition: all 0.3s ease-in-out;
    }


    &:checked {
      &::before {
        transform: translate(100%, 13%);
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>