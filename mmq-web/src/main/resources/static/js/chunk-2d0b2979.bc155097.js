(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2979"],{2588:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=this,a=t.$createElement,n=t._self._c||a;return n("page-header-wrapper",[n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"}},[n("a-row",{attrs:{gutter:48}},[n("a-col",{attrs:{md:8,sm:24}},[n("a-form-item",{attrs:{label:"设备ID"}},[n("a-input",{attrs:{placeholder:""},model:{value:t.queryParam.clientId,callback:function(e){t.$set(t.queryParam,"clientId",e)},expression:"queryParam.clientId"}})],1)],1),n("a-col",{attrs:{md:8,sm:24}},[n("a-form-item",{attrs:{label:"设备IP"}},[n("a-input",{attrs:{placeholder:""},model:{value:t.queryParam.address,callback:function(e){t.$set(t.queryParam,"address",e)},expression:"queryParam.address"}})],1)],1),t.advanced?void 0:t._e(),n("a-col",{attrs:{md:t.advanced?24:8,sm:24}},[n("span",{staticClass:"table-page-search-submitButtons",style:t.advanced&&{float:"right",overflow:"hidden"}||{}},[n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return e.queryParam={}}}},[t._v("重置")]),n("a",{staticStyle:{"margin-left":"8px"},on:{click:t.toggleAdvanced}},[t._v(" "+t._s(t.advanced?"收起":"展开")+" "),n("a-icon",{attrs:{type:t.advanced?"up":"down"}})],1)],1)])],2)],1)],1),n("div",{staticClass:"table-operator"}),n("s-table",{ref:"table",attrs:{size:"default",rowKey:"key",columns:t.columns,data:t.loadData,alert:!0,rowSelection:t.rowSelection,showPagination:"auto"},scopedSlots:t._u([{key:"serial",fn:function(e,a,s){return n("span",{},[t._v(" "+t._s(s+1)+" ")])}},{key:"action",fn:function(e,a){return n("span",{},[[n("a",{on:{click:function(e){return t.handleReject(a)}}},[t._v("踢出")])]],2)}}])})],1)],1)},s=[],r=a("c1df"),c=a.n(r),o=a("2af9"),i=a("8593"),l=a("0fea"),d=[{title:"#",scopedSlots:{customRender:"serial"}},{title:"客户端Id",dataIndex:"clientId"},{title:"用户",dataIndex:"user"},{title:"地址",dataIndex:"address"},{title:"连接时间",dataIndex:"connectTiem",sorter:!0},{title:"操作",dataIndex:"action",width:"150px",scopedSlots:{customRender:"action"}}],u={0:{status:"default",text:"关闭"},1:{status:"processing",text:"运行中"},2:{status:"success",text:"已上线"},3:{status:"error",text:"异常"}},f={name:"Clients",components:{STable:o["b"],Ellipsis:o["a"]},data:function(){var e=this;return this.columns=d,{advanced:!1,queryParam:{},loadData:function(t){var a=Object.assign({},t,e.queryParam);return Object(i["a"])(a).then((function(e){return e.data}))},selectedRowKeys:[],selectedRows:[]}},filters:{statusFilter:function(e){return u[e].text},statusTypeFilter:function(e){return u[e].status}},created:function(){},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}}},methods:{onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:c()(new Date)}},handleReject:function(e){var t=this;Object(l["a"])("/v1/system/rejectClient",{clinetId:e.clientId}).then((function(e){200===e.code?(t.$message.info("踢出成功！"),t.$refs.table.refresh(!0)):t.$message.info(e.message)}))}}},m=f,p=a("2877"),h=Object(p["a"])(m,n,s,!1,null,null,null);t["default"]=h.exports}}]);