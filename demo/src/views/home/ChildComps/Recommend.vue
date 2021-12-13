<template>
  <div class="recommend">
    <div class="recommend-item">
      <a href="">
        <img src="~assets/images/2.jpg" alt="" />
        <div>倾角关节</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 15px 0 30px;
  border-bottom: gray solid 8px;
  font-size: 12px;
}
.recommend-item {
  flex: 1;
  img {
    width: 70px;
    height: auto;
    margin-bottom: 10px;
  }
}
</style>
