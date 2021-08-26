<template>
  <div :class="[`audio-file-2`, className || ``]">
    <div class="overlap-group-6">
      <div class="shadow border-1px-dove-gray"></div>
      <div class="rectangle-422 border-1px-pigeon-post"></div>
      <img class="x015" :src="x015" />
      <div class="group-229">
        <div class="mask-group-42-1">
          <div class="tempsvg-1" :style="{ 'background-image': 'url(' + temp__Svg__ + ')' }"></div>
        </div>
      </div>
      <p class="text-1-2 segoeui-semi-bold-regal-blue-16px">{{ text14 }}</p>
      <img
        class="line-25-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/6127819a53a7131c366a8f1f/releases/6127823cc25558e69402f9fc/img/line-25-1@1x.png"
      />
      <group163 :number="group163Props.number" />
    </div>
    <div class="yesterday-1 segoeui-semi-bold-goldenrod-13px">{{ yesterday }}</div>
  </div>
</template>

<script>
import Group163 from "./Group163";
export default {
  name: "AudioFile",
  components: {
    Group163,
  },
  props: ["x015", "temp__Svg__", "text14", "yesterday", "className", "group163Props"],
};
</script>

<style>
.audio-file-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 119px;
  width: 303px;
}

.overlap-group-6 {
  border-radius: 27px;
  height: 100px;
  position: relative;
  width: 303px;
}

.shadow {
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 3px 20px #0000005c;
  height: 82px;
  left: 115px;
  position: absolute;
  top: 9px;
  width: 183px;
}

.rectangle-422 {
  background-color: var(--white);
  border-radius: 27px;
  height: 100px;
  left: 0;
  position: absolute;
  top: 0;
  width: 303px;
}

.x015 {
  border-radius: 18px;
  height: 83px;
  left: 10px;
  object-fit: cover;
  position: absolute;
  top: 8px;
  width: 85px;
}

.group-229 {
  align-items: flex-start;
  background-color: var(--black2);
  border-radius: 30px;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  left: 21px;
  padding: 18px 16px;
  position: absolute;
  top: 20px;
}

.mask-group-42-1 {
  align-items: flex-end;
  display: flex;
  overflow: hidden;
  padding: 0 1.9px;
  width: 23px;
}

.tempsvg-1 {
  background-position: 50% 50%;
  background-size: cover;
  height: 23px;
  margin-bottom: -0.12px;
  width: 19px;
}

.text-1-2 {
  height: 75px;
  left: 107px;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  top: 13px;
  width: 119px;
}

.line-25-1 {
  height: 53px;
  left: 228px;
  object-fit: cover;
  position: absolute;
  top: 26px;
  width: 1px;
}

.yesterday-1 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: -1px;
  margin-left: 21px;
  min-height: 19px;
  white-space: nowrap;
}

.audio-file-2.audio-file-1 {
  margin-left: 33px;
}
</style>
