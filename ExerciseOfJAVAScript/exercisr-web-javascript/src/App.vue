<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Arial, Helvetica, 微软雅黑,sans-serif
}
#app{
  height: 100%;
}
 #app .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
