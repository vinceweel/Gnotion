<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, Icon } from '../'

const name = 'DiscussEditor'

export default defineComponent({
  name,
  components: { Avatar, Icon },
  setup() {
    const slogn = ref('Login from Github >>')

    return { name, slogn }
  },
})
</script>

<template>
  <div :class="[name]">
    <div class="wrap">
      <div class="_blur_ float-bar">
        <template v-if="true">
          <Avatar class="avatar" :size="42" />
          <i class="info">
            <span class="name">Guest</span>
          </i>
          <span class="slogn">{{ slogn }}</span>
          <button :class="['_unset_', 'action']"><Icon name="github" /></button>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.DiscussEditor {
  --float-bar-height: 48px;

  height: 0;
  width: 100vw;
  bottom: 0;
  position: sticky;
}

.wrap {
  align-items: center;
  flex-direction: column;
  display: flex;
}

.float-bar {
  --blur-size: 5px;
    top: -48px;
    position: relative;
  border-radius: var(--float-bar-height);
  box-shadow: var(--card-shadow-normal);
  height: var(--float-bar-height);
  width: calc(100% - 32px);
  font-size: 13px;
  padding: 0 4px;
  align-items: center;
  display: flex;
}

.float-bar > * {
  position: inherit;
}

.float-bar .info {
  font-weight: bold;
}

.avatar {
  margin-right: 8px;
}

.slogn {
  margin-left: auto;
  opacity: 0.5;
}

.float-bar .action {
  --size: 42px;
  height: var(--size);
  width: var(--size);
}
</style>
