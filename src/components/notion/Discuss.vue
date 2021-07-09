<template>
  <div :class="[name]">
    <div class="wrap">
      <p v-for="n of 15" :key="n">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa explicabo voluptate ipsum culpa voluptates iste alias cum veniam itaque, aperiam, voluptatem, dolorem eum reprehenderit velit natus laboriosam odit impedit enim?</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Avatar } from '../'

const name = 'Discuss'

export default defineComponent({
  name,
  components: [],
  setup() {
    return { name }
  },
})
</script>
