<template>
  <div :class="[name]">
    <button @click="toggleDrawer" :class="['_unset_', '_center_', 'action']">
      <Icon name="menu" size="24" />
    </button>
    <input
      type="text"
      :class="['_unset_', 'input']"
      :placeholder="`${t('search')}...`"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '../'
import { useToggle } from '../../hooks/notion'

const name = 'Search'

export default defineComponent({
  name,
  components: {
    Icon,
  },
  setup() {
    const { t } = useI18n()
    const [, toggleDrawer] = useToggle('drawer')
    return { name, t, toggleDrawer }
  },
})
</script>

<style scoped>
.Search {
  display: flex;
}

.input {
  width: 100%;
  font-size: 13px;
}

.action {
  width: var(--action-size);
  margin: 0 8px;
}
</style>
