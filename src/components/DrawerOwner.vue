<script lang="ts" setup>
import Avatar from './BaseAvatar.vue'
import Data from './BaseData.vue'
</script>

<template lang="pug">
Data(mock name="user" :params="{ role: 'owner' }" v-slot="[user]")
  .DrawerOwner.__center.-axis
    Avatar.avatar(:url="user?.avatar")
    .info
      span.name {{ user?.fullname ?? 'Owner' }}
      span.email {{ user?.email ?? 'user.name@github.io' }}
</template>

<style scoped>
.avatar {
  margin-right: var(--padding--small);
}

.info {
  font-size: var(--font-size--medium);
  flex-direction: column;
  display: flex;
}

.name {
  font-weight: bold;
}

.email {
  font-size: var(--font-size--small);
}
</style>
