<template>
  <article :class="name">
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
  </article>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
// import Api from './BaseApi.vue'
const Api = defineAsyncComponent(() => import('./core/Api.vue'))

const name = 'ContentReader'

export default defineComponent({
  name,
  props: ['data', 'test'],
  components: { Api },
  setup() {
    return { name }
  },
})
</script>
