"use strict";(self.webpackChunkLiveHelperChat=self.webpackChunkLiveHelperChat||[]).push([[417],{9417:function(e,t,n){n.r(t),n.d(t,{nodeJSChat:function(){return p}});var r=n(5861),s=n(5671),a=n(3144),i=n(7757),c=n.n(i),u=n(2137);function o(e){var t,n,r,s=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);s--;){if(n&&null!=(t=e[n]))return t.call(e);if(r&&null!=(t=e[r]))return new h(t.call(e));n="@@asyncIterator",r="@@iterator"}throw new TypeError("Object is not async iterable")}function h(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return h=function(e){this.s=e,this.n=e.next},h.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new h(e)}var l=function(){function e(){(0,s.Z)(this,e),this.params={},this.attributes=null,this.chatEvents=null}var t;return(0,a.Z)(e,[{key:"setParams",value:(t=(0,r.Z)(c().mark((function e(t,s,a){var i,h,l,p,v,f,b,k,m,x,d,w,y,_,g;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(){return(g=(0,r.Z)(c().mark((function e(){var t,n,r,a,u,h,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null==b,b=p.subscribe("uo_"+i),1!=t){e.next=36;break}e.prev=3,n=!1,r=!1,e.prev=6,u=o(b);case 8:return e.next=10,u.next();case 10:if(!(n=!(h=e.sent).done)){e.next=16;break}"check_message"==(l=h.value).op?s.eventEmitter.emitEvent("checkMessageOperator"):"is_online"==l.op&&p.transmitPublish("ous_"+f,{op:"vi_online",status:!0,vid:i});case 13:n=!1,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),r=!0,a=e.t0;case 22:if(e.prev=22,e.prev=23,!n||null==u.return){e.next=27;break}return e.next=27,u.return();case 27:if(e.prev=27,!r){e.next=30;break}throw a;case 30:return e.finish(27);case 31:return e.finish(22);case 32:e.next=36;break;case 34:e.prev=34,e.t1=e.catch(3);case 36:case"end":return e.stop()}}),e,null,[[3,34],[6,18,22,32],[23,,27,31]])})))).apply(this,arguments)},_=function(){return g.apply(this,arguments)},y=function(){u.a.makeRequest(s.LHC_API.args.lhc_base_url+s.lang+"nodejshelper/tokenvisitor",{params:{ts:(new Date).getTime()}},function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f=t.instance_id,e.next=3,Promise.all([p.invoke("login",{hash:t.hash,chanelName:v,instance_id:t.instance_id}),p.listener("authenticate").once()]);case 3:_();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},this.params=t,this.attributes=s,this.chatEvents=a,i=this.attributes.userSession.getVID(),h={protocolVersion:1,hostname:t.hostname,path:t.path,authTokenName:"socketCluster.authToken_vi"},""!=t.port&&(h.port=parseInt(t.port)),1==t.secure&&(h.secure=!0),l=n(3502),p=l.create(h),v="uo_"+i,f=this.attributes.instance_id,b=null,e.next=17,p.listener("connect").once();case 17:e.sent.isAuthenticated?(_(),s.LHC_API.args.check_messages=!1):y(),e.prev=19,k=!1,m=!1,e.prev=22,d=o(p.listener("deauthenticate"));case 24:return e.next=26,d.next();case 26:if(!(k=!(w=e.sent).done)){e.next=32;break}w.value,y();case 29:k=!1,e.next=24;break;case 32:e.next=38;break;case 34:e.prev=34,e.t0=e.catch(22),m=!0,x=e.t0;case 38:if(e.prev=38,e.prev=39,!k||null==d.return){e.next=43;break}return e.next=43,d.return();case 43:if(e.prev=43,!m){e.next=46;break}throw x;case 46:return e.finish(43);case 47:return e.finish(38);case 48:e.next=52;break;case 50:e.prev=50,e.t1=e.catch(19);case 52:case"end":return e.stop()}}),e,this,[[19,50],[22,34,38,48],[39,,43,47]])}))),function(e,n,r){return t.apply(this,arguments)})}]),e}(),p=new l}}]);
//# sourceMappingURL=507f464a966a8359428a.js.map