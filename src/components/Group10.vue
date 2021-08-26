<template>
  <div class="group-10-1">
    <div class="overlap-group5-2">
      <div class="rectangle-26-5"></div>
      <div class="today-1 segoeui-semi-bold-selective-yellow-12px">TODAY</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group10",
};
</script>

<style>
.group-10-1 {
  align-items: flex-start;
  display: flex;
  height: 23px;
  left: 30px;
  position: absolute;
  top: 27px;
}

.overlap-group5-2 {
  height: 23px;
  position: relative;
  width: 66px;
}

.rectangle-26-5 {
  background-color: var(--black-22);
  border-radius: 12px;
  height: 23px;
  left: 0;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 66px;
}

.today-1 {
  height: 18px;
  left: 2px;
  letter-spacing: 0;
  line-height: 18px;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
  width: 65px;
}
</style>
