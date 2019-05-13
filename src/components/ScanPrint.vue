<template>
    <el-row id="scanprint" >
        <el-col :span="16" style="background:white;height:100%;">
            <el-tabs id="scanPrintTabs" v-model="activeName" @tab-click="handleClick" stretch="true">
                <el-tab-pane name="first">
                    <span slot="label" class="tabHeader">待寄 <span class="circle" v-bind:style="{background:backcolor1}">{{waitDeliverCount}}</span></span>
                    <router-view></router-view>
                </el-tab-pane>
                <el-tab-pane name="second">
                    <span slot="label" class="tabHeader">已寄 <span class="circle" v-bind:style="{background:backcolor2}">{{deliveredCount}}</span></span>
                    <router-view></router-view>
                </el-tab-pane>
            </el-tabs>
            <el-dialog show-close="false" >
                <div class="dialogBody">
                    <span >已成功提交数据，正在打印...</span>
                </div>
            </el-dialog>
        </el-col>
        <el-col :span="8" style="height:100%;">
            <div id="phonePanel">
                <el-input v-model="mobileNo"></el-input>
                <div class="number" style="grid-area:num1;"><span>1</span></div>
                <div class="number" style="grid-area:num2;"><span>2</span></div>
                <div class="number" style="grid-area:num3;"><span>3</span></div>
                <div class="number" style="grid-area:num4;"><span>4</span></div>
                <div class="number" style="grid-area:num5;"><span>5</span></div>
                <div class="number" style="grid-area:num6;"><span>6</span></div>
                <div class="number" style="grid-area:num7;"><span>7</span></div>
                <div class="number" style="grid-area:num8;"><span>8</span></div>
                <div class="number" style="grid-area:num9;"><span>9</span></div>
                <div class="number" style="grid-area:num0;"><span>0</span></div>
                <div class="clear" style="grid-area:clear;"><span>清空</span></div>
                <div class="del" style="grid-area:del;"></div>
                <el-button type="primary">查询</el-button>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      waitDeliverCount: 1,
      deliveredCount: 3,
      backcolor1: 'rgba(170,53,255,1)',
      backcolor2: 'rgba(102,102,102,1)',
      selectedCount: 1,
      mobileNo: '199999999999',
      isShow: true,
    }
  },
  methods: {
    handleClick (tab, event) {
      if (tab.name === 'first') {
        this.backcolor1 = 'rgba(170,53,255,1)'
        this.backcolor2 = 'rgba(102,102,102,1)'
      } else {
        this.backcolor1 = 'rgba(102,102,102,1)'
        this.backcolor2 = 'rgba(170,53,255,1)'
      }
    }
  }
}
</script>

<style>
    #scanprint{
        height:100%;
    }

    #scanPrintTabs {
        display:flex;
        flex-flow: column;
        flex: 0 0 0 1;
        height:100%;
        border:1px solid rgba(208,212,222,1)  !important;
    }

    .el-tabs__content,.el-tab-pane {
      height:100% !important;
    }

    .tabHeader{
        width:52px;
        height:74px;
        font-size:26px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        /* color:rgba(102,102,102,1); */
        line-height:74px;
    }

    .circle {
        width: 30px;
        height: 30px;
        line-height: 25px;
        border-radius: 15px;
        background: rgba(102,102,102,1);
        display: inline-block;
        color: white;
    }

    .el-tabs__item {
        height: 74px !important;
    }

    .el-tabs__item.is-top {
        color:rgba(102,102,102,1) !important;
    }

    .el-tabs__item.is-active {
        color:rgba(170,53,255,1) !important;
    }

    .el-tabs__active-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background-color: rgba(170,53,255,1)  !important;
        z-index: 1;
    }

    #phonePanel {
        display:grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-template-rows: 163px 1fr 1fr 1fr 1fr 113px;
        grid-template-areas: 'phone phone phone'
                             'num1 num2 num3'
                             'num4 num5 num6'
                             'num7 num8 num9'
                             'clear num0 del'
                             'query query query';
        background:white;
        margin-left:20px;
        height:100%;
    }

    #phonePanel>.el-input{
        width:80%;
        grid-area:phone;
        margin:49px 30px 25px;
        font-size:34px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(51,51,51,1);
        line-height:48px;
    }

    .el-input__inner {
        height:90px !important;
    }

     #phonePanel>div {
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:34px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(108,128,154,1);
        line-height:48px;
     }

    #phonePanel>.number{
        width:100%;
        height:100%;
        background: url('../assets/数字键BG按下@2x.png') center / 109px 109px no-repeat;
    }

    #phonePanel>.clear{
        font-size:20px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(243,70,50,1);
        line-height:28px;
        background: url('../assets/清空键BG按下@2x.png') center / 109px 109px no-repeat;
        /* justify-self: center; */
        /* align-self: center; */
    }

    #phonePanel>.del{
        background: url('../assets/删除键BG按下@2x.png') center / 109px 109px no-repeat;
        /* justify-self: center; */
        /* align-self: center; */
    }

    #phonePanel>.el-button{
        grid-area:query;
        width:250px;
        height:70px;
        background:rgba(132,21,213,1);
        border-radius:8px;
        font-size:32px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(255,255,255,1);
        line-height:45px;
        justify-self: center;
        align-self: center;
    }

    #scanprint .el-dialog .dialogBody {
        font-size:26px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(51,51,51,1);
        line-height:37px;
    }

    #scanprint .el-dialog {
        width:478px;
        height:250px;
        border-radius:8px;
    }
</style>
