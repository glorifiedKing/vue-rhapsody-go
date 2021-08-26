<template>
  <div class="component-33-5">
    <div class="recent">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "Component335",
  props: ["children"],
};
</script>

<style>
.component-33-5 {
  align-items: flex-end;
  display: flex;
  height: 54px;
  min-width: 39px;
  padding: 15px 0;
}

.recent {
  -webkit-text-stroke: 1px transparent;
  color: #bae3ff69;
  font-family: var(--font-family-segoeui-semibold);
  font-size: var(--font-size-xl);
  font-weight: 600;
  height: 22px;
  letter-spacing: 0;
  line-height: 15px;
  margin-left: -17px;
  transform: rotate(-90deg);
  width: 56px;
}
</style>
