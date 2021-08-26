<template>
  <div class="group-163-1">
    <div class="overlap-group-7">
      <div class="name-2 segoeui-bold-shadow-blue-10px">AUGUST</div>
      <div class="number-1 segoeui-regular-normal-selective-yellow-39px">{{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group163",
  props: ["number"],
};
</script>

<style>
.group-163-1 {
  align-items: flex-end;
  display: flex;
  height: 59px;
  left: 241px;
  position: absolute;
  top: 15px;
}

.overlap-group-7 {
  height: 54px;
  margin-bottom: -15px;
  position: relative;
  width: 44px;
}

.name-2 {
  left: 2px;
  letter-spacing: 0.04px;
  line-height: 12px;
  position: absolute;
  text-align: right;
  top: 26px;
  white-space: nowrap;
}

.number-1 {
  left: 0;
  letter-spacing: 0.16px;
  line-height: 12px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}
</style>
