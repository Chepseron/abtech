lhcAppControllers.controller("StartChatFormCtrl",["$scope","$http","$location","$rootScope","$log","$window",function(e,t,i,n,s,d){this.startchatfields=[],this.size=6,this.fieldtype="text",this.visibility="all",this.showcondition="always",this.priority=50;var o=this;this.setStartChatFields=function(){o.startchatfields=d.startChatFields},this.move=function(e,t){index=o.startchatfields.indexOf(e),newIndex=index+t,newIndex>-1&&newIndex<o.startchatfields.length&&(removedElement=o.startchatfields.splice(index,1)[0],o.startchatfields.splice(newIndex,0,removedElement))},this.addField=function(){o.startchatfields.push({fieldname:o.fieldname,defaultvalue:o.defaultvalue,fieldtype:o.fieldtype,visibility:o.visibility,fieldidentifier:o.fieldidentifier,size:o.size,isrequired:o.isrequired,hide_prefilled:o.hide_prefilled,options:o.options,showcondition:o.showcondition,priority:o.priority})},this.deleteField=function(e){o.startchatfields.splice(o.startchatfields.indexOf(e),1)},this.moveLeftField=function(e){o.move(e,-1)},this.moveRightField=function(e){o.move(e,1)}}]),lhcAppControllers.controller("StartChatFormURLCtrl",["$scope","$http","$location","$rootScope","$log","$window",function(e,t,i,n,s,d){this.startchatfields=[];var o=this;this.move=function(e,t){index=o.startchatfields.indexOf(e),newIndex=index+t,newIndex>-1&&newIndex<o.startchatfields.length&&(removedElement=o.startchatfields.splice(index,1)[0],o.startchatfields.splice(newIndex,0,removedElement))},this.setStartFields=function(){o.startchatfields=d.startChatFieldsURL},this.addField=function(){o.startchatfields.push({fieldname:o.fieldname,fieldidentifier:o.fieldidentifier})},this.deleteField=function(e){o.startchatfields.splice(o.startchatfields.indexOf(e),1)},this.moveLeftField=function(e){o.move(e,-1)},this.moveRightField=function(e){o.move(e,1)}}]),lhcAppControllers.controller("StartChatFormPreconditions",["$scope","$http","$location","$rootScope","$log","$window",function(e,t,i,n,s,d){this.conditions={online:[],offline:[],disable:[],offline_enabled:!1,disable_enabled:!1,disable_message:""},this.deleteElement=function(e,t){confirm("Are you sure?")&&t.splice(t.indexOf(e),1)};var o=this;this.move=function(e,t,i){index=t.indexOf(e),newIndex=index+i,newIndex>-1&&newIndex<t.length&&(removedElement=t.splice(index,1)[0],t.splice(newIndex,0,removedElement))},this.setStartFields=function(){o.conditions=d.startChatFieldsConditions},this.addField=function(e){o.conditions[e].push({field:"",logic:"and",comparator:"eq"})},this.moveUp=function(e,t){o.move(e,t,-1)},this.moveDown=function(e,t){o.move(e,t,1)}}]);
//# sourceMappingURL=9cc4f016bd92e4adb4c915e7e8d8e092.js.map