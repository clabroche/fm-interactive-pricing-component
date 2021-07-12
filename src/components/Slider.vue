<template>
<div class="slider-root">
  <img src="@/assets/icons/icon-slider.svg" alt="" 
    :style="{transform}">
  <input
    ref="inputRef"
    type="range"
    class="input"
    :min="min" :max="max" :step="step"
    :value="value"
    :style="{background}"
    @input="update($event.target.value)">
</div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
export default {
  props: {
    min: {default: 0, type: Number},
    max: {default: 100, type: Number},
    step: {default: 1, type: Number},
    value: {default: 0, type: Number},
  },
  setup(props, comp) {
    const inputRef = ref(null)
    return {
      inputRef,
      update(value) {
        comp.emit('update:value', value)
      },
      background: computed(() => {
        const value = (props.value-props.min)/(props.max-props.min)*100
        return  `linear-gradient(to right, var(--soft-cyan)  0%, var(--soft-cyan) ${value}%, var(--light-grayish-background) ${value}%, var(--light-grayish-background) 100%)`
      }),
      transform: computed(() => {
        if(!inputRef.value) return 
        const value = (props.value-props.min)/(props.max-props.min)*100
        const width = inputRef.value.clientWidth
        const offset = (value * width / 100) - (value * (22+8) / 100)
        return  `translate(${offset}px)`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-root {
  position: relative;
  img {
    position: absolute;
    left: 4px;
    z-index: 1;
    top: calc(50% - 7px);
    pointer-events: none;
  }
}
input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  margin: 30px 0;
  height: 7px;
  border-radius: 7px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;
  background: transparent; 
  border-color: transparent;
  color: transparent;
}

@mixin thumb() {
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: var(--strong-cyan);
  box-shadow: 0px 10px 20px var(--soft-cyan);
  cursor: pointer;
  transition: 300ms;
  &:hover {
    background-color: var(--darker-cyan);
  }
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  margin-top: 0px;
  @include thumb();
}
input[type=range]::-moz-range-thumb {
  @include thumb();
}
input[type=range]::-ms-thumb {
  @include thumb();
}


</style>