<template>
  <el-container id="home">
    <el-aside id="aside">
      <div style="height:18%;margin-top:19px;margin-bottom:60px;"><img src="../assets/形状 2@2x.png" /></div>
      <el-menu id="menu" :default-active="$route.path" collapse="false" router>
         <el-submenu index="1" style="flex: 1" ><template slot="title"><img src="../assets/扫码打印@2x.png" /><div>扫码打印</div></template></el-submenu>
         <el-submenu index="2" @click="bg='rgba(213,119,255,1)'" v-bind:style="{ background:bg }" style="flex: 1" ><template slot="title"><img src="../assets/查询打印@2x.png" /><div>查询打印</div></template></el-submenu>
         <el-submenu index="3" style="flex: 1"><template slot="title"><img src="../assets/我的报表@2x.png" /><div>异常单据</div></template></el-submenu>
         <el-submenu index="4"  style="flex: 1"><template slot="title"><img src="../assets/异常@2x.png"/><div>我的报表</div></template></el-submenu>
         <el-submenu index="5" style="flex: 0;height:80px;margin-top:60px;"><template slot="title"><img src="../assets/设置@2x.png" /></template></el-submenu>
         <el-submenu index="6" style="flex: 0;height:80px;"><template slot="title"><img src="../assets/关闭@2x.png" /></template></el-submenu>
      </el-menu>
    </el-aside>
    <el-container id="container">
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      bg: 'rgba(213,119,255,1)'
    }
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width:99%;
  height:99%;
  position: absolute;
}

#aside {
  display:flex;
  flex-flow:column;
  height: 100%;
  background:linear-gradient(180deg,rgba(149,33,255,1) 0%,rgba(164,23,255,1) 100%);
}

#menu {
  display:flex;
  flex-flow: column;
  list-style:none;
  background-color:transparent;
  border:0px;
}

#container{
  background:rgba(229,231,236,1);
}

.el-menu{
  height:100%;
  width:100%;
}

.el-submenu__title div{
  margin-top:10px;
}

.el-submenu__title{
  height:100% !important;
  font-size:16px;
  font-family:PingFangSC-Medium!important;
  font-weight:500!important;
  color:rgba(255,255,255,1)!important;
  line-height:22px!important;
  cursor: pointer!important;
}

.el-submenu__title:hover,.el-submenu__title.click {
  background:rgba(213,119,255,1) !important;
  opacity:1 !important;
}

.el-menu--vertical{
  display:none !important;
}
</style>
