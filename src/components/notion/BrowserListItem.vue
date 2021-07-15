<template>
  <article :class="[name]" :data-id="data.id">
    <header>
      <h3 class="_unset_ title">{{ data.title }}</h3>
      <p class="_unset_ description">{{ data.description }}</p>
    </header>
    <footer>
      <div class="metas">
        <span>{{ data.updated }}</span>
      </div>
    </footer>
  </article>
  <hr class="_line_" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const name = 'ListItem'
export default defineComponent({
  name,
  props: ['data'],
  setup() {
    return { name }
  },
})
</script>

<style scoped>
.ListItem {
  margin: 16px 0;
  position: relative;
}

.title {
  font-size: 16px;
  font-weight: bold;
  line-height: 2.35;
}

.description {
  font-size: 14px;
  line-height: 1.25;
  opacity: .8;
}

.metas {
  font-size: 12px;
  padding: 8px 0;
}
</style>
