<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToggle } from '../../hooks/notion'
import { useScrolling } from '../../hooks/utils'
import { Avatar, Icon, Search, FloatActionMenu as Menu } from '../'

const name = 'FloatActionBar'

export default defineComponent({
  name,
  components: {
    Avatar,
    Icon,
    Search,
    Menu,
  },
  setup() {
    const { t } = useI18n()
    const [, browserToggle] = useToggle('browser')

    const { isDown } = useScrolling({ wait: 1200 })
    const [on, toggle] = useToggle('fab')
    watch(isDown, () => toggle())

    const moreMenuWidth = ref(0)
    const showMoreMenu = ref(false)
    const offsetMoreMenu = reactive({ x: 0, y: 59 })
    const toggleMoreMenu = ({ currentTarget }: Event) => {
      if (currentTarget === null) return
      const { x, y } = (currentTarget as Element).getBoundingClientRect()
      showMoreMenu.value = !showMoreMenu.value
      offsetMoreMenu.x =
        x + (currentTarget as Element).clientWidth - moreMenuWidth.value + 8
    }

    const ownerMenuWidth = ref(0)
    const showOwnerMenu = ref(false)
    const offsetOwnerMenu = reactive({ x: 0, y: 59 })
    const toggleOwnerMenu = ({ currentTarget }: Event) => {
      if (currentTarget === null) return
      const { x, y } = (currentTarget as Element).getBoundingClientRect()
      showOwnerMenu.value = !showOwnerMenu.value
      offsetOwnerMenu.x = x - 4
    }

    return {
      name,
      t,
      browserToggle,
      on,
      moreMenuWidth,
      showMoreMenu,
      offsetMoreMenu,
      toggleMoreMenu,
      ownerMenuWidth,
      showOwnerMenu,
      offsetOwnerMenu,
      toggleOwnerMenu,
    }
  },
})
</script>

<template>
  <div :class="['_zero_', name, !on && 'off']">
    <div class="wrap">
      <Avatar
        @click="toggleOwnerMenu"
        :class="['avatar', showOwnerMenu && 'on']"
        :size="42"
        url=""
      />
      <button :class="['_unset_', '_center_', 'action']" @click="browserToggle">
        <Icon name="all-inbox" size="24" />
      </button>
      <Search class="search" />
      <button :class="['_unset_', '_center_', 'action']">
        <Icon name="sync" size="24" />
      </button>
      <button
        @click="toggleMoreMenu"
        :class="['_unset_', '_center_', 'action', showMoreMenu && 'on']"
      >
        <Icon v-if="!showMoreMenu" name="more-vert" size="24" />
        <Icon v-else name="expand-less" size="24" />
      </button>
    </div>
  </div>

  <Menu
    v-model:width="moreMenuWidth"
    :on="showMoreMenu"
    :offset="offsetMoreMenu"
    class="moreMenu"
  >
    <header>{{ t('more_menu') }}</header>
    <nav>
      <a><Icon name="settings" />{{ t('settings') }}</a>
      <a
        class="_unset_"
        target="_blank"
        href="https://github.com/vinceweel/Gnotion"
      >
        <Icon name="github" />{{ t('repo_link') }}
      </a>
    </nav>
  </Menu>
  <Menu
    v-model:width="ownerMenuWidth"
    :on="showOwnerMenu"
    :offset="offsetOwnerMenu"
    class="ownerMenu"
  >
    <header>Owner Name</header>
    <nav>
      <a><Icon name="contact-mail" />vince.weel.io@outlook.com</a>
    </nav>
  </Menu>
</template>

<style>
:root {
  --fab-hegiht: 52px;
  --fab-width: calc(var(--body-width));

  --fab-offset-y: calc(var(--fab-hegiht) + 4px);
}
</style>

<style scoped>
.FloatActionBar {
  --action-size: 42px;

  width: var(--body-width);
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
  transition: transform 0.15s ease;
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

.avatar.on,
.action.on {
  transform: translateY(54px) scale(0.8);
  box-shadow: var(--card-shadow-border);
  box-shadow: unset;
  background: unset;
}

.ownerMenu header,
.moreMenu header {
  font-size: 13px;
  box-shadow: var(--card-shadow-border);
  height: 34px;
  margin-top: -8px;
  border-radius: 34px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-left: -8px;
  margin-right: -8px;
  color: var(--color-light-5a5a5a);
}
.ownerMenu nav,
.moreMenu nav {
  font-size: 13px;
  padding-top: 8px;
  flex-direction: column;
  display: flex;
}
.ownerMenu nav > a,
.moreMenu nav > a {
  height: 32px;
  align-items: center;
  display: flex;
}
.ownerMenu nav > a > .Icon,
.moreMenu nav > a > .Icon {
  margin-right: 8px;
}

.ownerMenu header {
  padding-left: 42px;
}
</style>
