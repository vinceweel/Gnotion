<template>
  <article :class="[name]">
    <div class="wrap">
      <Api action="readArticle" v-slot="{ result, loading, refresh }">
        loading: {{ loading }}
        <p>{{ result }}</p>
        <button @click="() => refresh({ test: new Date().getTime() })">
          refresh
        </button>
      </Api>
      <hr />
      <Api action="readComments" :params="{ test: false }" v-slot="ret">
        <p>{{ ret }}</p>
      </Api>

      <p v-for="n of 15" :key="n">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus quos iusto alias amet minima in accusantium nulla pariatur laudantium tempore, accusamus quis ab, impedit, quod recusandae modi vitae corrupti!</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

const Api = defineAsyncComponent(() => import('../core/Api.vue'))

const name = 'Reader'

export default defineComponent({
  name,
  props: ['data'],
  components: { Api },
  setup() {
    return { name }
  },
})
</script>

<style scoped>
.Reader {
  position: relative;
}

.wrap {
  padding: var(--padding-normal);
  padding-top: var(--fab-offset-y);
}
</style>
