<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Avatar, Icon } from '../'

const name = 'DiscussEditor'

export default defineComponent({
  name,
  components: { Avatar, Icon },
  setup() {
    const { t } = useI18n()

    return { name, t }
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
            <span class="name">{{ t('guest') }}</span>
          </i>

          <button :class="['_unset_', 'action']">
            <span class="slogn">{{ t('slogn') }}</span>
            <Icon class="icon" name="github" />
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.DiscussEditor {
  --float-bar-height: 48px;

  top: var(--fab-offset-y);
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

  border-radius: var(--float-bar-height);
  box-shadow: var(--card-shadow-normal);
  height: var(--float-bar-height);
  width: calc(100% - 32px);
  font-size: 13px;
  padding: 0 4px;
  align-items: center;
  display: flex;
  position: relative;
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
  opacity: 0.5;
}

.float-bar .action {
  margin-left: auto;
  align-items: center;
  display: flex;
}

.float-bar .action .icon {
  margin: 0 8px;
}
</style>
