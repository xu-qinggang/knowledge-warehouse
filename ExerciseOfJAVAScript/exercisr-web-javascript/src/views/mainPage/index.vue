<template>
  <el-container>
    <el-header height="60px" class="elHeader">
      <Header/>
    </el-header>
    <el-main style="padding:16px;height: calc(100vh - 60px);">
      <router-view/>
    </el-main>
  </el-container>
</template>
<script>
import Header from "@/component/mainpage/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style scoped lang="scss">
.elHeader{
  padding: 0;
}
</style>