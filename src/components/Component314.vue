<template>
  <div :class="[`component-31-4`, className || ``]">
    <div class="favorites segoeui-semi-bold-sail-15px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "Component314",
  props: ["children", "className"],
};
</script>

<style>
.component-31-4 {
  align-items: flex-end;
  display: flex;
  height: 82px;
  margin-top: 26px;
  min-width: 53px;
  padding: 29px 0;
}

.favorites {
  -webkit-text-stroke: 1px transparent;
  height: 22px;
  letter-spacing: 0;
  line-height: 15px;
  margin-left: -31px;
  transform: rotate(-90deg);
  width: 84px;
}

.component-31-4.component-32-1 {
  margin-top: 27px;
}
</style>
