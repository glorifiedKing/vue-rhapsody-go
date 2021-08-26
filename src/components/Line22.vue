<template>
  <div :class="[`line2-3`, className || ``]">
    <img
      class="line-18-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/6127819a53a7131c366a8f1f/releases/6127823cc25558e69402f9fc/img/line-18-1@1x.png"
    />
    <img
      class="line-17-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/6127819a53a7131c366a8f1f/releases/6127823cc25558e69402f9fc/img/line-17-1@1x.png"
    />
  </div>
</template>

<script>
export default {
  name: "Line22",
  props: ["className"],
};
</script>

<style>
.line2-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
  min-height: 1px;
  width: 282px;
}

.line-18-2 {
  height: 1px;
  object-fit: cover;
  width: 282px;
}

.line-17-2 {
  height: 1px;
  margin-left: 0.5px;
  object-fit: cover;
  width: 282px;
}

.line2-3.line2-4 {
  margin-top: 21px;
}

.line2-3.line2-5 {
  margin-top: 20px;
}

.line2-3.line2-6 {
  margin-top: 22px;
}
</style>
