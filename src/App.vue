<template>
  <el-container id="app">
    <el-aside id="aside">
      <el-menu style="list-style:none;" collapse="false" background-color="transparent" text-color="rgba(255,255,255,1)">
         <el-submenu  index="1" style="margin-top:19px;"><template slot="title"><img src="./assets/形状 2@2x.png" /></template></el-submenu>
         <el-submenu  index="2" style="height:156px;"><template slot="title"><img src="./assets/扫码打印@2x.png" /><span class="menutext">扫码打印</span></template></el-submenu>
         <el-submenu index="3" style=""><template slot="title"><img src="./assets/查询打印@2x.png" /><span class="menutext">查询打印</span></template></el-submenu>
         <el-submenu index="4" style=""><template slot="title"><img src="./assets/我的报表@2x.png" /><span class="menutext">异常单据</span></template></el-submenu>
         <el-submenu index="5"  style=""><template slot="title"><img src="./assets/异常@2x.png"/><span class="menutext">我的报表</span></template></el-submenu>
         <el-submenu index="6" style=""><template slot="title"><img src="./assets/设置@2x.png" /></template></el-submenu>
         <el-submenu index="7" style=""><template slot="title"><img src="./assets/关闭@2x.png" /></template></el-submenu>
      </el-menu>
    </el-aside>
    <el-container id="container">
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
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
  /* flex:0 0 200px; */
  /* width:140px; */
  height: 100%;
  background:linear-gradient(180deg,rgba(149,33,255,1) 0%,rgba(164,23,255,1) 100%);
}

#container{
  background:rgba(229,231,236,1);
}

.el-menu{
  height:100%;
  width:99%;
}

.el-submenu{
  height:106px;
}

.el-submenu__title{
  padding-left:0px;
  height:100%;
  color:rgba(255,255,255,1);
  font-size:16px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color: #303133;
  padding: 0 0px;
  cursor: pointer;
  -webkit-transition: border-color .3s,background-color .3s,color .3s;
  transition: border-color .3s,background-color .3s,color .3s;
  -webkit-box-sizing:unset;
  box-sizing:unset;

}

.menutext{
  display:block;
  color:rgba(255,255,255,1);
}

</style>
