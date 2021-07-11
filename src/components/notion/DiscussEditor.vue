<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrolling } from '../../hooks/utils/'
import { Avatar, Icon } from '../'
import { useToggle } from '../../hooks/notion'

const name = 'DiscussEditor'

export default defineComponent({
  name,
  components: { Avatar, Icon },
  setup() {
    const { t } = useI18n()
    const { position, distance, intersection, observe } = useScrolling()

    const editorEl = ref(null)
    const editorAppear = computed(
      () => intersection.value[0] && intersection.value[0].appear,
    )

    onMounted(() => {
      observe(editorEl)
    })

    const [fabOn] = useToggle('fab')

    return { name, t, position, distance, editorEl, editorAppear, fabOn }
  },
})
</script>

<template>
  <div :class="[name, !fabOn && '_fab_off_']">
    <div class="wrap">
      <div
        :class="[!editorAppear && '_blur_', editorAppear && 'on', 'float-bar']"
      >
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
      <div :class="[editorAppear && 'on', 'editor']">
        <textarea
          ref="editorEl"
          class="_unset_ textarea"
          name="discuss-editor"
          :placeholder="t('editor_placeholder')"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
.DiscussEditor {
  --discuss-editor-height: 180px;
  --float-bar-height: 48px;
  --shadow: var(--card-shadow-normal);

  transition: top 0.25s ease;

  top: var(--fab-offset-y);
  bottom: calc(var(--discuss-editor-height) * -1 + 8px);
  position: sticky;
  z-index: 3;
}

._fab_off_.DiscussEditor {
  --fab-offset-y: 16px;
}

.on.float-bar {
  box-shadow: 0 0 0 1px var(--color-light-efefef);
  /* box-shadow: unset; */
}

.on.editor {
  opacity: 1;
}

.wrap {
  --padding: 32px;

  padding: 0 var(--padding);
  align-items: center;
  flex-direction: column;
  display: flex;
}

.float-bar {
  --blur-size: 5px;

  border-radius: var(--float-bar-height);
  box-shadow: var(--shadow);
  height: var(--float-bar-height);
  width: 100%;
  font-size: 13px;
  padding: 0 4px;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 2;
}

.float-bar > * {
  position: inherit;
}

.float-bar .info {
  vertical-align: middle;
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

.editor {
  opacity: 0;

  border-radius: calc(var(--float-bar-height) / 2);
  border-bottom-left-radius: unset;
  border-bottom-right-radius: unset;
  box-shadow: var(--shadow);
  background-color: var(--color-light-ffffff);

  height: var(--discuss-editor-height);
  width: 100%;
  padding: var(--padding-normal);
  padding-top: calc(var(--float-bar-height) + 16px);

  top: calc(var(--float-bar-height) * -1);
  position: relative;
}

.editor::after {
  /* background-color: red; */
  background-image: linear-gradient(
    to bottom,
    var(--color-light-ffffff) 25%,
    transparent
  );
  height: 48px;
  top: var(--discuss-editor-height);
  right: 0;
  left: 0;
  position: absolute;
  display: block;
  content: '';
}

.textarea {
  height: inherit;
  width: inherit;

  font-size: 13px;
}
</style>
