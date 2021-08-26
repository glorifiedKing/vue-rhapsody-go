<template>
  <div :class="[`line2-1`, className || ``]">
    <img
      class="line-18-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/6127819a53a7131c366a8f1f/releases/6127823cc25558e69402f9fc/img/line-18-5@1x.png"
    />
    <img
      class="line-17-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/6127819a53a7131c366a8f1f/releases/6127823cc25558e69402f9fc/img/line-17-5@1x.png"
    />
  </div>
</template>

<script>
export default {
  name: "Line2",
  props: ["className"],
};
</script>

<style>
.line2-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 9px;
  margin-top: 2px;
  min-height: 1px;
  width: 202px;
}

.line-18-1 {
  height: 1px;
  object-fit: cover;
  width: 201px;
}

.line-17-1 {
  height: 1px;
  margin-left: 0.5px;
  object-fit: cover;
  width: 201px;
}

.line2-1.line2-2 {
  margin-bottom: 5px;
  margin-left: 6px;
  margin-top: unset;
}
</style>
