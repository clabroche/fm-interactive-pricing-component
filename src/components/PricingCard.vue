<template>
  <card id="pricing-card-root">
    <template #top>
      <div class="summary">
        <div class="page-views">{{nbPages}}K PAGEVIEWS</div>
        <div class="price">
          <span class="price-value">{{perMonthValueComputed}}</span>
          /{{isYearly ? 'year' : 'month'}}
        </div>
      </div>
      <slider v-model:value="perMonthValue" :min="minPrice" :max="maxPrice"/>
      <div class="price price-mobile">
        <span class="price-value">{{perMonthValueComputed}}</span>
        /{{isYearly ? 'year' : 'month'}}
      </div>
      <div class="period-chooser-container">
        <div class="period-chooser">
          <span>Monthly Billing</span>
          <checkbox v-model:value="isYearly"/>
          <span>Yearly Billing</span>
        </div>
        <span class="label">25% discount</span>
      </div>
    </template>
    <template #bottom>
      <div class="bottom">
        <ul class="advantage">
          <li><img src="@/assets/icons/icon-check.svg" alt="check-icon"> Unlimited websites</li>
          <li><img src="@/assets/icons/icon-check.svg" alt="check-icon"> 100% data ownership</li>
          <li><img src="@/assets/icons/icon-check.svg" alt="check-icon"> Email reports</li>
        </ul>
        <button class="cta" @click="validate">Start my trial</button>
      </div>
    </template>
  </card>
</template>

<script>
import { ref } from '@vue/reactivity'
import Card from './Card.vue'
import Slider from './Slider.vue'
import { computed, watch } from '@vue/runtime-core'
import Checkbox from './Checkbox.vue'

export default {
  components: {
    Card,
    Slider,
    Checkbox
  },
  setup() {
    const maxPrice = 40
    const minPrice = 10
    const maxPage = 100
    const perMonthValue = ref(minPrice + 10)
    const isYearly = ref(false)
    let nbPages = ref(0)
    const updatePageViews = () => {
      const value = (perMonthValue.value-minPrice)/(maxPrice-minPrice)*100
      const pages = value * maxPage / 100
      nbPages.value = Math.floor(pages)
    }
    watch(() => ([isYearly, perMonthValue]), updatePageViews , {deep:true})
    updatePageViews()
    return {
      perMonthValue,
      perMonthValueComputed: computed(() => {
        const value = isYearly.value ? (perMonthValue.value * 12)*0.75 : perMonthValue.value
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
      }),
      isYearly,
      nbPages,
      maxPrice, minPrice
    }
  }
}
</script>

<style lang="scss" scoped>
#pricing-card-root {
  background-color: white;
  max-width: 450px;
  width: 90vw;
  margin: auto;
  margin-bottom: 10px;
}
.page-views {
  font-weight: bold;
  color: var(--grayish-blue);
  @media screen and (max-width: 500px) {
    & {
      margin: auto;
    }
  }
}
.price {
  display: flex;
  align-items: center;
  &.price-mobile {
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 10px;
    display: none;
  }
  @media screen and (max-width: 500px) {
    & {
      display: none;
    }
    &.price-mobile {
      display: flex;
    }
  }
  .price-value {
    color: var(--dark-desaturated-blue);
    font-weight: bold;
    font-size: 2em;
    margin: 0 10px;
  }
}
.summary {
  display: flex;
  justify-content: space-between;
  .page-views {
    display: flex;
    align-items: center;
  }
}
.period-chooser-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8em;
  color: var(--grayish-blue);
  font-weight: bold;
  &>* {
    margin: 0 5px;
  }
  .period-chooser {
    display: flex;
    align-items: center;
    &>* {
      margin: 0 5px;
    }
  }
  .label {
    padding: 5px 10px;
    background-color: var(--light-grayish-red);
    color: var(--light-red);
    border-radius: 50px;
    font-size: 0.8em;
    font-weight: bold;
    margin-top: 3px;
  }
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    & {
      flex-direction: column;
    }
  }
  .advantage {
    font-size: 0.8em;
    text-align: left;
    color: var(--grayish-blue);
    font-weight: bold;
    @media screen and (max-width: 500px) {
      & {
        margin-bottom: 20px;;
      }
    }
    li {
      margin: 10px 0;
      img {
        margin-right: 10px;
      }
    }
  }
  .cta {
    background-color: var(--dark-desaturated-blue);
    color: var(--pale-blue);
    padding: 5px 30px;
    border-radius: 10000px;
    height: 40px;
    display: inline;
    cursor: pointer;
    transition: 300ms;
    border: none;
    font-weight: bold;
    &:hover {
      color: white;
      box-shadow: 0 0 10px 2px var(--pale-blue);
      transform:scale(1.01);
    }
  }
}

</style>