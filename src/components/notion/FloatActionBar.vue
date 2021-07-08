<template>
  <div :class="['_zero_', name, !on && 'off']">
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

<style>
:root {
  --fab-hegiht: 52px;
  --fab-width: calc(100vw);

  --fab-offset-y: calc(var(--fab-hegiht));
}
</style>

<style scoped>
.FloatActionBar {
  --action-size: 32px;

  z-index: 9;
}

.FloatActionBar::before {
  content: '';
  background-image: linear-gradient(
    to bottom,
    var(--color-light-ffffff),
    transparent
  );
  height: var(--fab-hegiht);
  width: var(--fab-width);
  display: block;
  position: absolute;
}

.FloatActionBar.off {
  --fab-offset-y: 0;
}

.wrap {
  transform: translateY(var(--fab-offset-y));
  
  left: 0;
  top: calc(var(--fab-hegiht) * -1);
  position: relative;

  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;

  height: var(--fab-hegiht);
  width: var(--fab-width);

  padding: 0 8px;

  justify-content: space-between;
  align-items: center;
  display: flex;
}

.avatar,
.action {
  width: var(--action-size);
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
  margin: 0 4px;
}
</style>
