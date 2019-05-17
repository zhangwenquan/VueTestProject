<template>
  <el-main>
    <el-row id="scanprint" >
        <el-col :span="16" style="background:white;height:100%;">
            <el-tabs id="scanPrintTabs" v-model="activeName" @tab-click="handleClick" stretch="true">
                <el-tab-pane name="first">
                    <span slot="label" class="tabHeader">待寄 <span class="circle" v-bind:style="{background:backcolor1}">{{waitDeliverList.length}}</span></span>
                    <router-view :dataList="waitDeliverList" funcText="称重打印" funcName="weightAndPrint" emptyText="暂无数据！<br/>请输入寄件人手机号码查询" emptyImg="/static/暂无数据插画@2x.png"></router-view>
                </el-tab-pane>
                <el-tab-pane name="second">
                    <span slot="label" class="tabHeader">已寄 <span class="circle" v-bind:style="{background:backcolor2}">{{deliveredList.length}}</span></span>
                    <router-view :dataList="deliveredList" funcText="重新打印" funcName="reprint" emptyText="暂无相关运单信息" emptyImg="/static/无运单信息插画@2x.png" ></router-view>
                </el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col :span="8" style="height:100%;">
            <div id="phonePanel">
                <el-input v-model="mobileNo" placeholder="请输入手机号或运单号查询" :class="{placeHolder: isUse}"></el-input>
                <div class="number" @click="mobileNo+=num1; if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:num1;"><span>{{num1}}</span></div>
                <div class="number" @click="mobileNo+=num2; if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:num2;"><span>{{num2}}</span></div>
                <div class="number" @click="mobileNo+=num3; if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:num3;"><span>{{num3}}</span></div>
                <div class="number" @click="mobileNo+=num4; if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:num4;"><span>{{num4}}</span></div>
                <div class="number" @click="mobileNo+=num5; if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:num5;"><span>{{num5}}</span></div>
                <div class="number" @click="mobileNo+=num6; if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:num6;"><span>{{num6}}</span></div>
                <div class="number" @click="mobileNo+=num7; if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:num7;"><span>{{num7}}</span></div>
                <div class="number" @click="mobileNo+=num8; if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:num8;"><span>{{num8}}</span></div>
                <div class="number" @click="mobileNo+=num9; if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:num9;"><span>{{num9}}</span></div>
                <div class="number" @click="mobileNo+=num0; if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:num0;"><span>{{num0}}</span></div>
                <div class="clear" @click="mobileNo=''; isUse=true;" style="grid-area:clear;"><span>清空</span></div>
                <div class="del" @click="mobileNo=mobileNo.slice(0,-1); if (mobileNo != '') isUse=false; else isUse=true" style="grid-area:del;"></div>
                <el-button type="primary" @click="queryAction">查询</el-button>
            </div>
        </el-col>
    </el-row>
  </el-main>
</template>

<script>
import ScanPrintMain from './QueryPrintMain.vue'
export default {
  data () {
    return {
      activeName: 'first',
      backcolor1: 'rgba(170,53,255,1)',
      backcolor2: 'rgba(102,102,102,1)',
      selectedCount: 1,
      mobileNo: '',
      num1: 1,
      num2: 2,
      num3: 3,
      num4: 4,
      num5: 5,
      num6: 6,
      num7: 7,
      num8: 8,
      num9: 9,
      num0: 0,
      waitDeliverList: [],
      deliveredList: [],
      isUse: true
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
    },
    numClick (event) {
    },
    queryAction () {
      if (this.mobileNo === '') {
      } else {
        this.waitDeliverList = [{
          wayBillNo: '80000000000',
          consigneeAndMobile: '测试 19999999999',
          consigneeAddress: '深圳市宝安区西乡街道yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
          commodity: '樱桃',
          number: '322'
        }, {
          wayBillNo: '80000000000',
          consigneeAndMobile: '测试 19999999999',
          consigneeAddress: '深圳市宝安区西乡街道xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          commodity: '樱桃',
          number: '322'
        }
        ]
        this.deliveredList = [{
          wayBillNo: '80000000000',
          consigneeAndMobile: '测试 19999999999',
          consigneeAddress: '深圳市宝安区西乡街道zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
          commodity: '樱桃',
          number: '322'
        }, {
          wayBillNo: '80000000000',
          consigneeAndMobile: '测试 19999999999',
          consigneeAddress: '深圳市宝安区西乡街道xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          commodity: '樱桃',
          number: '322'
        }
        ]
      }
    },
    components: {
      'scanPrintMain': ScanPrintMain
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

    #scanPrintTabs .el-tabs__content,.el-tab-pane {
      height:100% !important;
    }

    #scanPrintTabs .tabHeader{
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

    #scanPrintTabs .el-tabs__item {
        height: 74px !important;
    }

    #scanPrintTabs .el-tabs__item.is-top {
        color:rgba(102,102,102,1) !important;
    }

    #scanPrintTabs .el-tabs__item.is-active {
        color:rgba(170,53,255,1) !important;
    }

    #scanPrintTabs .el-tabs__active-bar {
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

    #phonePanel .el-input__inner {
        height:90px !important;
    }

    #phonePanel .placeHolder {
        font-size:21px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:29px;
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
        background: url('../assets/数字键BG@2x.png') center / 109px 109px no-repeat;
    }

    #phonePanel>.number:hover {
        background: url('../assets/数字键BG按下@2x.png') center / 109px 109px no-repeat;
    }

    #phonePanel>.clear{
        font-size:20px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(243,70,50,1);
        line-height:28px;
        background: url('../assets/清空键BG@2x.png') center / 109px 109px no-repeat;
        /* justify-self: center; */
        /* align-self: center; */
    }

    #phonePanel>.clear:hover {
      background: url('../assets/清空键BG按下@2x.png') center / 109px 109px no-repeat;
    }

    #phonePanel>.del{
        background: url('../assets/删除键BG@2x.png') center / 109px 109px no-repeat;
        /* justify-self: center; */
        /* align-self: center; */
    }

    #phonePanel>.del:hover {
      background: url('../assets/删除键BG按下@2x.png') center / 109px 109px no-repeat;
    }

    #phonePanel>.el-button {
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

    .el-dialog__body {

    }

    #scanprint .el-dialog .dialogBody {
        font-size:22px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(255,255,255,1);
        line-height:30px;
    }

    #scanprint .el-dialog {
        width:478px;
        height:250px;
        border-radius:8px;
        background:rgba(0,0,0,1);
        border-radius:18px;
        opacity:0.8;
    }

    #scanprint .el-dialog .el-dialog__close {
        display: none !important;
    }
</style>
