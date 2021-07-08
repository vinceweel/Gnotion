<template>
  <div :class="['_zero_', name, on && 'on']">
    <div class="wrap">
      <Avatar class="avatar" :size="32" url="" />
      <button :class="['_unset_', '_center_', 'action']">
        <Icon name="all-inbox" size="24" />
      </button>
      <Search class="search" />
      <button :class="['_unset_', '_center_', 'action']">
        <Icon name="sync" size="24" />
      </button>
      <button :class="['_unset_', '_center_', 'action']">
        <Icon name="more-vert" size="24" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToggle } from '../../hooks/notion'
import { Avatar, Icon, Search } from '../'

const name = 'FloatActionBar'

export default defineComponent({
  name,
  components: {
    Avatar,
    Icon,
    Search,
  },
  setup() {
    const { t } = useI18n()
    const [, toggleDrawer] = useToggle('drawer')
    const [on] = useToggle('fab')
    return { name, t, toggleDrawer, on }
  },
})
</script>

<style scoped>
.FloatActionBar {
  --fab-hegiht: 56px;
  --fab-width: calc(100vw);
  --action-size: 32px;

  z-index: 9;
}

.wrap {
  height: var(--fab-hegiht);
  width: var(--fab-width);
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: relative;
}

.avatar,
.action {
  width: var(--action-size);
  margin: 0 8px;
  flex-shrink: 0;
}

.search {
  width: 100%;
}

.avatar,
.action,
.search {
  border-radius: var(--action-size);
  box-shadow: var(--card-shadow-normal);
  background-color: var(--color-light-ffffff);
  height: var(--action-size);
}
</style>
