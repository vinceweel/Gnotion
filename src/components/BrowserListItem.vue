<script lang="ts" setup>
import { toRefs } from 'vue'
import type { PropType } from 'vue'

import Avatar from './BaseAvatar.vue'
import Space from './BaseSpace.vue'
import Date from './BaseDate.vue'
import LabelGroup from './LabelGroup.vue'

const props = defineProps({
  data: {
    type: Object as unknown as PropType<ArticleListItem>,
    requried: true
  }
})

const { data } = toRefs(props)

const list = [{ name: 'article' }, { name: 'news' }, { name: 'novel' }]
</script>

<template lang="pug">
.BrowserListItem
  header.head
    h3.__unset.title
      | {{ data?.title ?? 'Title Title Title Title Title' }}
    Space(height="8")
    Space(height="8")
  footer.__center.-axis.foot
    Avatar.avatar(size="22" :url="data?.user?.avatar")
    Space(width="8")
    LabelGroup(:list="list")
    Space(margin="auto")
    Date.date(:input="data?.updated")
</template>

<style scoped>
.BrowserListItem {
  border-radius: var(--radius--small);
  background-color: hsl(var(--color-background--almost));
  padding: var(--padding--normal);
  flex-direction: column;
  display: flex;
}

.head {
  padding-right: calc(2 * var(--padding--normal));
  font-size: var(--font-size--medium);
  position: relative;
}

.arrow {
  color: hsl(var(--color-text--lighter));
  margin: auto;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
}

.title {
  line-height: var(--line-height--medium);
  font-weight: bold;
  font-size: var(--font-size--normal);
}

.foot {
  border-radius: 8px;
  background-color: hsl(var(--color-text--dawn));
  font-size: var(--font-size--small);
  padding: var(--padding--tiny) var(--padding--small);
  margin-left: calc(-1 * var(--padding--tiny));
  margin-right: calc(-1 * var(--padding--tiny));
  margin-bottom: calc(-1 * var(--padding--small));
}

.author {
  font-weight: bold;
}

.date {
  flex-shrink: 0;
}

/* .avatar {
  margin-left: calc(-1 * var(--padding--small));
} */
</style>
