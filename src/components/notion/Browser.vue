<template>
  <!-- <div :class="['_zero_', name, on && 'on']"> -->
  <div :class="[name]">
    <div class="wrap">
      <Api action="getArticleList" v-slot="{ result: list }">
        <div class="list">
          <template v-for="item of list" :key="item.id">
            <BrowserListItem :data="item" />
          </template>
        </div>
      </Api>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useToggle } from '../../hooks/notion'
import BrowserListItem from './BrowserListItem.vue'

const name = 'Browser'

export default defineComponent({
  name,
  components: { BrowserListItem },
  setup() {
    const [on] = useToggle('browser')

    return { name, on }
  },
})
</script>

<style>
:root {
  --browser-height: 100vh;
  --browser-width: 100%;

  --browser-offset-x: 0;
}
</style>

<style scoped>
.Browser {
  z-index: 5;
  position: relative;
}

.Browser.on {
  --browser-offset-x: var(--browser-width);
}

.wrap {
  /* transform: translateX(var(--browser-offset-x));

  left: calc(var(--browser-width) * -1);
  top: 0;
  position: absolute;

  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out; */

  background-color: var(--color-light-ffffff);
  height: var(--browser-height);
  width: var(--browser-width);
  padding-top: var(--fab-offset-y);

  /* overflow-x: hidden; */
  /* overflow-y: scroll; */
}

.list {
  padding: var(--padding-normal);
  padding-top: 0;
  /* min-height: 100vh; */
}
</style>
