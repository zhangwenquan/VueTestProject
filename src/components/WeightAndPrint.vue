<template>
    <el-container id="weightAndPrint">
        <el-header height="126">
            <el-row style="height:100%;">
                <el-col span="4" style="height:100%;">
                    <div class="backBtn"><img src="../assets/返回键.png" /><span>返回</span></div>
                </el-col>
                <el-col span="15" style="height:100%;display:flex;align-items:center;">
                    <div class="briefInfo">
                        <div style="grid-area:wbNo;display:flex;">运单号：80205698841<div class="prevBtn">上一票</div></div>
                        <span style="grid-area:DName;">测试</span>
                        <span style="grid-area:DMobile;">19999999999</span>
                        <span style="grid-area:DWeight;">25Kg</span>
                        <span style="grid-area:DFreight;">200元</span>
                    </div>
                </el-col>
                <el-col span="5" style="height:100%;display:flex;align-items:center;justify-content:flex-end;">
                    <div class="printedDesc">当前已打印运单18票<div style="width:22px;height:22px;background:rgba(170,53,255,1);border-radius:11px;margin-left:5px;"></div></div>
                </el-col>
            </el-row>
        </el-header>
        <el-main style="">
            <el-row style="height:100%;">
                <el-col :span="8" style="height:100%;">
                    <el-table :data="dataList" style="height:100%;" highlight-current-row :row-click="rowClick">
                        <el-table-column prop="consignee" label="收件人" min-width="105px"></el-table-column>
                        <el-table-column prop="mobileUI" label="手机号" min-width="150">
                            <template slot-scope="scope">
                                {{ scope.row.mobileUI }}<span v-if="scope.row.isWeighted" class="isWeighted">已称</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="16" style="height:100%;">
                    <el-container>
                        <div class="wayBillNoLine"><span style="">运单号：{{wayBillNo}}</span><div class="del"><i class="el-icon-delete"></i> 删除本票</div></div>
                        <div class="detailPanel">
                            <el-row class="detailInfo" style="height:144px;">
                                <el-col span="12" style="height:100%;">
                                    <div class="DeliverConsigneeInfo">
                                    <span class="circle dIcon">寄</span>
                                    <span class="circle cIcon">收</span>
                                    <span style="grid-area:DName">寄件人</span>
                                    <span style="grid-area:DMobile">寄件手机</span>
                                    <span class="addr" style="grid-area:DAddr">深圳市宝安区福永街道福园二路深翔物流园跨越速运总部8栋2楼客户端处</span>
                                    <span style="grid-area:CName">收件人</span>
                                    <span style="grid-area:CMobile">收件手机</span>
                                    <span class="addr" style="grid-area:CAddr">深圳市宝安区福永街道福园二路深翔物流园跨越速运总部8栋2楼</span></div>
                                </el-col>
                                <el-col span="4" style="height:100%">
                                    <div  class="spaceAroundNV">
                                    <span class="detailMName">服务方式</span>
                                    <span class="detailLVal">次日达<img src="../assets/下拉@2x.png"/></span></div>
                                </el-col>
                                <el-col span="5" style="height:100%">
                                    <div  class="spaceAroundNV">
                                    <span class="detailMName">付款方式</span>
                                    <span class="detailLVal">第三方付</span></div>
                                </el-col>
                                <el-col span="3" style="height:100%">
                                    <div  class="spaceAroundNV">
                                    <span class="detailMName">托寄物</span>
                                    <span class="detailLVal">荔枝</span></div>
                                </el-col>
                            </el-row>
                            <el-row class="detailDecorateLine" style=""></el-row>
                            <el-row style="flex:1;">
                                <el-col span="9" style="height:100%;">
                                    <div class="weightInfo">
                                        <span class="detailMName" style="">已称批次(次)</span>
                                        <span class="detailLVal" style="height:77px;">24</span>
                                        <span class="detailMName" style="">已称总重量(Kg)</span>
                                        <span class="detailLVal" style="">224.35</span>
                                        <span class="weightDetailLink" style="height:63px;">查看称重详情<i class="el-icon-arrow-right"/></span>
                                        <div style="height:56px;display:flex;align-items:center;justify-content:center;"><span class="freightLName">运费(元)</span><span class="freightLVal">¥524.5</span></div>
                                    </div>
                                </el-col>
                                <el-col span="15" style="height:100%;display:flex;justify-content:center;align-items:center;">
                                    <div class="printPanel">
                                        <div style="grid-area:weight;display:flex;flex-flow:column;"><span class="detailMName">当前重量(Kg)</span><span class="detailLVal">224.35</span></div>
                                        <el-button class="confBtn" style="grid-area:confBtn;">确定</el-button>
                                        <div class="minusBtn" style="grid-area:minusBtn;"><div class="minusIcon"> </div></div>
                                        <span class="plusBtn" style="grid-area:plusBtn;"><span class="plusIcon1"> </span> <span class="plusIcon2"></span></span>
                                        <span class="detailMName" style="grid-area:numberName;">总件数(件)</span><el-input value="0" class="detailLVal numVal" style="grid-area:number">0</el-input>
                                        <el-button class="printBtn" style="grid-area:printBtn">打印本票</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-container>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
      dataList: [{
        consignee: '测试',
        mobile: '19999999999',
        mobileUI: '199-9999-9999',
        isWeighted: true
      }, {
        consignee: '测试',
        mobile: '19999999999',
        mobileUI: '199-9999-9999',
        isWeighted: false
      }],
      wayBillNo: '80209389230'
    }
  },
  methods: {
  }
}
</script>

<style>
    #weightAndPrint .el-header {
        height:126px;
        margin: 0px 20px 0px 20px;
        background:rgba(255,255,255,1);
        border-radius:0px 0px 8px 8px;
        border:1px solid rgba(228,232,241,1);
        padding-right:0;
    }

    #weightAndPrint .el-header .el-row {
        /* padding:0px; */
    }

    #weightAndPrint .el-header .el-row .backBtn {
        font-size:24px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(51,51,51,1);
        line-height:33px;
        height:100%;
        display:flex;
        align-items: center;
    }

    #weightAndPrint .el-header .el-row .prevBtn {
        width:70px;
        height:26px;
        font-size:16px;
        background:rgba(170, 53, 255, 1);
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:22px;
        margin-left:10px;        
    }

    #weightAndPrint .briefInfo {
        display: grid;
        grid-template-rows: 46px 46px;
        grid-template-columns: 20% 40% 20% 20%;
        grid-template-areas: 'wbNo wbNo wbNo wbNo'
                             'DName DMobile DWeight DFreight';
        align-items:center;
        justify-items:flex-start;
        font-size:20px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(13,13,13,1);
        line-height:28px;
        width:100%;
    }

    #weightAndPrint .printedDesc {
        width:257px;
        height:74px;
        background:rgba(255,255,255,1);
        border-radius:100px 0px 0px 100px;
        border:1px solid rgba(170,53,255,1);
        font-size:20px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(170,53,255,1);
        line-height:28px;
        display:flex;
        align-items:center;
        justify-content: center;
        position:relative;
        left:10px;
    }

    #weightAndPrint .el-table {
        padding:20px;
        background:rgba(255,255,255,1);
        border-radius:8px;
        border:1px solid rgba(228,232,241,1);
    }

    #weightAndPrint .el-table__header {
        font-size:20px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(135,152,173,1);
        line-height:28px;
    }

    #weightAndPrint .el-table th {
        /* border-right:1px solid rgba(208,212,222,1)  !important; */
        background:rgba(244,246,251,1) !important;
    }

    #weightAndPrint .el-table__row {
        height:80px;
    }

    #weightAndPrint .el-table__row.current-row td {
        color:rgba(170,53,255,1);
        background:rgba(255,250,230,1);
    }

    #weightAndPrint .el-table__row .cell {
        height:100%;
        display:flex;
        align-items: center;
    }

    #weightAndPrint .el-table__row .isWeighted {
        text-align: center;
        margin-left:10px;
        width:34px;
        height:18px;
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(170,53,255,1);
        line-height:17px;
        border-radius:4px;
        border:1px solid rgba(170,53,255,1);
    }

    #weightAndPrint .el-table__body {
        font-size:20px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(13,13,13,1);
        line-height:28px;
    }

    #weightAndPrint .el-container {
        flex-flow: column;
        margin-left:20px;
        height:100%;
        background:rgba(255,255,255,1);
        border-radius:8px;
        border:1px solid rgba(228,232,241,1);
    }

    #weightAndPrint .wayBillNoLine {
        border-bottom:1px solid rgba(228,232,241,1);
        padding:20px 20px 0px 20px;
        text-align: left;
        font-size:20px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(51,51,51,1);
        height:54px;
    }

    #weightAndPrint .detailPanel {
        padding:20px 20px 0px 20px;
        /* width: 100%; */
        height: 100%;
        display:flex;
        flex-flow: column;
    }

    #weightAndPrint .detailPanel .detailInfo {
        /* border-bottom:3px dashed rgba(186,152,245,1); */
        /* border-image: url('../assets/运单装饰线@2x.png') /0px /0px /3px /0px repeat */
        /* height: 100%; */
    }

    #weightAndPrint .wayBillNoLine .del {
        float:right;
        font-size:20px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
    }

    .detailLVal {
        font-size:42px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(13,13,13,1);
        line-height:59px;
    }

    .detailMName {
        font-size:18px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:25px;
    }

    .spaceAroundNV {
        height:100%;
        display:flex;
        flex-flow: column;
        justify-content: center;
        align-items:center;
    }

    #weightAndPrint .detailDecorateLine {
        height:3px;
        background:url('../assets/运单装饰线.png');
    }

    #weightAndPrint .DeliverConsigneeInfo {
        /* width:90%; */
        height:100%;
        margin-right:60px;
        display:grid;
        justify-items:flex-start;
        grid-template-rows:20% 30% 20% 30%;
        grid-template-columns: 40px 30% 70%;
        grid-template-areas: 'DIcon DName DMobile'
                             'DIcon DAddr DAddr'
                             'CIcon CName CMobile'
                             'CIcon CAddr CAddr';
        font-size:18px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(13,13,13,1);
        line-height:25px;
    }

    #weightAndPrint .circle {
        width: 26px;
        height: 26px;
        border-radius: 13px;
        font-size:17px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:24px;
    }

    #weightAndPrint .dIcon {
        grid-area: DIcon;
        background: rgba(170,53,255,1);
    }

    #weightAndPrint .cIcon {
        grid-area: CIcon;
        background: rgba(255,168,29,1);
    }

    #weightAndPrint .addr {
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:22px;
        text-align:left;
    }

    #weightAndPrint .weightInfo {
        height:100%;
        display:flex;
        flex-flow: column;
        justify-content: center;
        /* border-right: 1px solid rgba(178,183,196,1); */
    }

    #weightAndPrint .weightDetailLink {
        font-size:22px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(170,53,255,1);
        line-height:30px;
    }

    #weightAndPrint .freightLVal {
        font-size:40px;
        font-family:PingFangSCSemibold-;
        font-weight:normal;
        color:rgba(223,66,49,1);
        line-height:30px;
    }

    #weightAndPrint .freightLName {
        font-size:22px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:56px;
        margin-right:20px;
    }

    #weightAndPrint .printPanel {
        display:grid;
        grid-template-rows: 163px 30px 100px;
        grid-template-columns: 78px 133px 78px 140px;
        grid-template-areas: 'weight weight weight confBtn'
                             'empty1 numberName empty empty'
                             'minusBtn number plusBtn printBtn';
        height:311px;
        justify-items:center;
        align-items:center;
    }

    #weightAndPrint .confBtn {
        width:130px;
        height:64px;
        background:rgba(170,53,255,1);
        border-radius:8px;
        font-size:26px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:37px;
    }

    #weightAndPrint .minusBtn {
        display:flex;
        justify-content: center;
        align-items: center;
        background:rgba(255,255,255,1);
        border-radius:8px;
        border:1px solid rgba(178,183,196,1);
        width:68px;
        height:68px;
    }

    #weightAndPrint .minusIcon {
        width:24px;
        height:4px;
        background:rgba(135,152,173,1);
        border-radius:6px;
    }

    #weightAndPrint .plusBtn {
        display:flex;
        justify-content: center;
        align-items: center;
        background:rgba(255,255,255,1);
        border-radius:8px;
        border:1px solid rgba(178,183,196,1);
        width:68px;
        height:68px;
    }

    #weightAndPrint .plusIcon1 {
        width:24px;
        height:4px;
        background:rgba(135,152,173,1);
        border-radius:6px;
    }

    #weightAndPrint .plusIcon2 {
        position:relative;
        left:-14px;
        width:4px;
        height:24px;
        background:rgba(135,152,173,1);
        border-radius:6px;
    }

    #weightAndPrint .printBtn {
        width:130px;
        height:64px;
        background:rgba(200,203,214,1);
        border-radius:8px;
        font-size:26px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:37px;
        padding:0px;
    }

    #weightAndPrint .numVal .el-input__inner {
        width:123px;
        height:68px;
        background:rgba(255,255,255,1);
        border-radius:8px;
        border:1px solid rgba(178,183,196,1);
        text-align: center;
    }

</style>
