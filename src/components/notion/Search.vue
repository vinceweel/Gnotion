<template>
  <div :class="[name]">
    <button @click="drawerToggle" :class="['_unset_', '_center_', 'action']">
      <Icon v-if="!drawerOn" name="menu" />
      <Icon v-else name="arrow-back" />
    </button>
    <input
      type="text"
      :class="['_unset_', 'input']"
      :placeholder="`${t('search')}...`"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { Icon } from '../'
import { useI18n } from 'vue-i18n'
import { useToggle } from '../../hooks/notion'

const name = 'Search'

export default defineComponent({
  name,
  components: {
    Icon,
  },
  setup() {
    const { t } = useI18n()

    const [, maskToggle] = useToggle('mask')
    const [drawerOn, drawerToggle] = useToggle('drawer')

    watch(drawerOn, () => {
      maskToggle(drawerOn.value)
    })

    return { name, t, drawerOn, drawerToggle }
  },
})
</script>

<style scoped>
.Search {
  display: flex;
}

.input {
  height: 100%;
  width: 100%;
  font-size: 13px;
  margin-right: 16px;
}

.action {
  width: var(--action-size);
  margin: 0 8px;
}
</style>
