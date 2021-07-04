<template>
    <article :class="name">
      {{'ddd'}}
        <Api action="readArticle" v-slot="response">
            <!-- <p>{{ action }}</p> -->
            <!-- <p>{{ data }}</p> -->
            {{response}}
        </Api>
        <hr />
        <Api action="readComments" :params="{ test: false }" v-slot="{ action, data }">
            <p>{{ action }}</p>
            <p>{{ data }}</p>
        </Api>
    </article>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
// import Api from './BaseApi.vue'
const Api = defineAsyncComponent(() => import('./BaseApi.vue'))

const name = 'ContentReader'

export default defineComponent({
    name,
    props: ['data', 'test'],
    components: { Api },
    setup() {
        return { name }
    }
})
</script>
