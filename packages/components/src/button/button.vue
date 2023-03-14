<template>
  <button class="st-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";

defineOptions({ name: "st-button" });

type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`st-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
