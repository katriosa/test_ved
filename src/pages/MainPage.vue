<template>
  <div class="wrapper">
    <SalmonButton
      is-transperent
      is-small
      is-loading
      :title="'test title'"
      @click="onButtonClick"
    >
      <template #icon>
        <TestIcon/>
      </template>
      <span>
      тестовый текст
    </span>
    </SalmonButton>

    <SalmonButton
      is-borderless
      :title="'test title'"
      :route="{ path: '/other-route' }"
      @click="onButtonClick"
    >
      <template #icon>
        <TestIcon/>
      </template>
      <span>
      кнопка с роутом
    </span>
    </SalmonButton>
  </div>
</template>

<script setup lang="ts">
import SalmonButton from "@/components/SalmonButton/SalmonButton.vue";
import TestIcon from "@/icons/TestIcon.vue";

const onButtonClick = () => {
  console.log('test click')
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  gap: 15px;
}
</style>