<template>
  <div id="app">
    <nav class="navi">
      <div class="navi__brand"></div>
      <div class="navi__title"></div>
      <div class="navi__tools">
        <el-button-group>
          <el-button type="text" icon="el-icon-refresh" @click="$win.reload()"></el-button>
          <span class="split-line"></span>
          <el-button type="text" icon="el-icon-minus" @click="$win.minimize()"></el-button>
          <el-button type="text" icon="el-icon-copy-document" @click="$win.maximize()"></el-button>
          <el-button type="text" icon="el-icon-close" @click="$win.close()"></el-button>
        </el-button-group>
      </div>
    </nav>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 50px;
  .navi {
    padding: 0;
    position: fixed;
    left:0;
    top:0;
    right:0;
    z-index: 10;
    display: flex;
    -webkit-app-region: drag;
    -webkit-user-select: none;
    line-height: 50px;
    > *{
      flex-shrink: 0;
    }
    &__brand{
    }
    &__title{
      flex-grow: 1;
    }
    &__tools{
      -webkit-app-region: no-drag;
      .el-button-group > button {
        padding-left: 1em;
        padding-right: 1em;
        &:hover,&:focus,&:active{
          background-color: #f5f5f5;
        }
      }
      .split-line{
        display: inline-block;
        float: left;
        height: 1em;
        width: 1px;
        padding-left:0;
        padding-right:0;
        margin-top: 12px;
        background-color: #f5f5f5;
      }
    }
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
  beforeCreate(){
    this.$win = window.electronWin
  }
}
</script>