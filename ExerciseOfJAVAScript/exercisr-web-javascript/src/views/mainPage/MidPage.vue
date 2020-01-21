<template>
  <div class="minpage">
    <el-scrollbar style="height: 100%;">
        <router-view/>
    </el-scrollbar>
  </div>
</template>
<style lang="scss" scoped>
.minpage{

  height: 100%;
  /deep/ .el-scrollbar__wrap {
    overflow-x:hidden;
    height: 100%;
  }
  /deep/  .el-scrollbar__wrap .el-scrollbar__view {
    height: 100%;
  }
  /deep/  .el-scrollbar__bar.is-horizontal {
    display: none;
  }
}
</style>