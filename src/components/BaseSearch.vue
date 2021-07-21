<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n()
</script>

<template lang="pug">
.Search
  .wrap
    slot(name="left")
    input.__unset.input(:placeholder="t('search')")
</template>

<style scoped>
.Search {
  --shadow: var(--shadow-colored--low);
  --height: 100%;
  --radius: var(--height);

  width: 100%;
}

.wrap {
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  background-color: hsl(var(--color-background--normal));

  height: var(--height);
  width: 100%;

  padding: 0 16px;

  display: flex;
}

.input {
  width: 100%;

  font-size: var(--font-size--medium);
}
</style>
