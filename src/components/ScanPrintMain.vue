<template>
    <el-container style="height:100%;display:flex; flex-direction: column;justify-content: space-between;">
      <el-table id="waitDeliverList" :data="dataList" @selection-change="selectionChanged">
          <template slot="empty">
              <div>
                <img :src="emptyImg" /><p><span v-html="emptyText"></span></p>
              </div>
          </template>
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="wayBillNo" label="运单号" min-width="100"></el-table-column>
          <el-table-column prop="consigneeAndMobile" label="收件人/手机号" min-width="100"/>
          <el-table-column prop="consigneeAddress" label="收件地址" min-width="256"></el-table-column>
          <el-table-column prop="commodity" label="托寄物" ></el-table-column>
          <el-table-column prop="number" label="件数" width="90"></el-table-column>
      </el-table>
      <div class="buttonLine">
        <span>已选：<span style="color:red;">{{selectedCount}}</span>票</span>
        <el-button type="primary">{{funcName}}</el-button>
      </div>
    </el-container>
</template>

<script>
export default {
  props: ['dataList', 'funcName', 'emptyText', 'emptyImg'],
  data () {
    return {
      selectedCount: 0,
      multipleSelection: []
    }
  },
  methods: {
    reprint () {
    },
    selectionChanged (selection) {
      this.multipleSelection = selection
      this.selectedCount = selection.length
    }
  }
}
</script>

<style>
    #waitDeliverList,.el-table--fit {
        display:flex;
        flex-flow: column;
        flex: 1 2;
        height:100%;
        width:96%;
        margin:8px 20px;
        border-radius:8px 8px 0px 0px;
        /* border-bottom:1px solid rgba(208,212,222,1); */
    }

    .el-table::before {
      height:0px !important;
    }

    .el-table__header {
        font-size:18px  !important;
        font-family:PingFangSC-Medium  !important;
        font-weight:500  !important;
        color:rgba(135,152,173,1)  !important;
        line-height:25px  !important;
    }

    .el-table__body {
        font-size:18px  !important;
        font-family:PingFangSC-Regular  !important;
        font-weight:400  !important;
        color:rgba(13,13,13,1)  !important;
        line-height:25px  !important;
    }

    #waitDeliverList td {
      border:1px solid rgba(228,232,241,1)  !important;
      border-top-color:rgba(208,212,222,1)  !important;
      border-collapse: collapse  !important;
    }

    .el-table th {
        border-right:1px solid rgba(208,212,222,1)  !important;
        background:rgba(221,225,235,1)  !important;
    }

    .el-table__body-wrapper{
      height:100% !important;
    }

    .el-table__empty-block {
        display:flex !important;
        flex-flow: column !important;
        justify-content: center !important;
        align-items:center !important;
        font-size:22px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(136,136,136,1);
        line-height:30px;
    }

    .el-checkbox__input.is-checked .el-checkbox__inner {
        background: rgba(170,53,255,1)  !important;
        border-color:rgba(170,53,255,1)  !important;
        vertical-align: middle  !important;
    }

    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background: rgba(170,53,255,1)  !important;
      border-color:rgba(170,53,255,1)  !important;
    }

    .el-checkbox__inner {
      width:22px  !important;
      height:22px  !important;
    }

    .el-checkbox__inner:after{
      margin:3px 0px 0px 3px  !important;
      vertical-align: middle  !important;
    }

    .el-checkbox__inner:before{
      margin-top:3px  !important;
      vertical-align: middle  !important;
    }

    .buttonLine {
      border-top:1px solid rgba(208,212,222,1);
      height:98px;
    }

    .buttonLine > .el-button {
      float:right;
      background: rgba(241,136,0,1) !important;
      width:230px;
      height:70px;
      margin-right:20px;
      margin-top:14px;
      font-size:32px;
      font-family:PingFangSCSemibold-;
      font-weight:normal;
      color:rgba(255,255,255,1) !important;
      line-height:45px;
      border:0px;
    }
    .buttonLine > span {
      width:115px;
      height:100px;
      font-size:26px;
      font-family:PingFangSCSemibold-;
      font-weight:normal;
      color:rgba(102,102,102,1);
      line-height:100px;
    }
</style>
