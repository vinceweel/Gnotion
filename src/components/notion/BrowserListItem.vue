<template>
  <article @click="onClick" :class="[name]" :data-id="data.id">
    <header>
      <h3 class="_unset_ title">{{ data.title }}</h3>
      <p class="_unset_ description">
        {{ data.description ?? t('no_description') }}
      </p>
    </header>
    <footer>
      <div class="metas">
        <span>{{ data.updated }}</span>
      </div>
    </footer>
  </article>
  <hr class="_line_" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

const name = 'ListItem'
export default defineComponent({
  name,
  props: ['data'],
  setup({ data }: { data: IssueData }) {
    const { t } = useI18n()
    const onClick = () => {
      console.log(data.id)
    }
    return { name, t, onClick }
  },
})
</script>

<style scoped>
.ListItem {
  margin: 16px 0;
  position: relative;
}

.title {
  font-size: 16px;
  font-weight: bold;
  line-height: 2.35;
}

.description {
  font-size: 14px;
  line-height: 1.25;
  opacity: 0.8;
}

.metas {
  font-size: 12px;
  padding: 8px 0;
}
</style>
