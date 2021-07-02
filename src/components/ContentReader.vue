<template>
    <article :class="name">
        <Api action="readArticle" v-slot="{ action, data }">
            <p>{{ action }}</p>
            <p>{{ data }}</p>
        </Api>
        <hr />
        <Api action="readComments" :params="{ test: false }" v-slot="{ action, data }">
            <p>{{ action }}</p>
            <p>{{ data }}</p>
        </Api>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Api from './BaseApi.vue'

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