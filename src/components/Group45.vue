<template>
  <div class="group-45"><img class="mask-group-31" :src="src" /></div>
</template>

<script>
export default {
  name: "Group45",
  props: ["src"],
};
</script>

<style>
.group-45 {
  align-items: flex-start;
  align-self: flex-start;
  background-color: var(--white);
  border-radius: 32px;
  box-shadow: 0px 3px 20px #0000001c;
  display: flex;
  height: 64px;
  justify-content: flex-end;
  margin-left: 19px;
  min-width: 64px;
  padding: 15px 19px;
}

.mask-group-31 {
  height: 27px;
  object-fit: cover;
  width: 26px;
}
</style>
