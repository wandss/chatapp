(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],m=0,f=[];m<i.length;m++)a=i[m],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,i=1;i<o.length;i++){var u=o[i];0!==s[u]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"2b73":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[o("Navbar"),o("router-view")],1)],1)},r=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[o("b-navbar-brand",{attrs:{href:"#"}},[e._v("Chat App @Jobsity")]),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav"),o("b-button",{on:{click:e.logout}},[e._v(" Logout ")]),o("b-navbar-nav",{staticClass:"ml-auto"})],1)],1)},i=[],u={name:"Navbar",methods:{logout:function(){this.$cookies.remove("csrftoken"),this.$store.commit("setCsrftoken",null),this.$store.commit("setUsername",""),this.$router.push("/login")}}},c=u,l=o("2877"),m=Object(l["a"])(c,a,i,!1,null,null,null),f=m.exports,p={name:"APP",components:{Navbar:f},mounted:function(){this.$store.dispatch("fetchRooms"),this.$store.commit("setCsrftoken",this.$cookies.get("csrftoken")),null===this.$store.state.csrftoken&&this.$router.push("/login")}},d=p,h=Object(l["a"])(d,s,r,!1,null,null,null),b=h.exports,g=o("8c4f"),v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"my-2"},[o("b-col",{attrs:{sm:"3"}},[o("b-form-input",{attrs:{type:"text",required:"",placeholder:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),o("b-row",[o("b-col",{attrs:{sm:"3"}},[o("b-form-input",{attrs:{type:"password",required:"",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),o("b-row",{staticClass:"my-3"},[o("b-alert",{attrs:{variant:"warning",show:0!=e.alert.length}},[e._v(" "+e._s(e.alert)+" ")])],1),o("b-row",{staticClass:"my-3"},[o("b-col",{attrs:{sm:"1"}},[o("b-button",{attrs:{variant:"primary",type:"submit"}},[e._v(" Login ")])],1)],1)],1)],1)},w=[],y=o("bc3a"),_=o.n(y),k={name:"Login",data:function(){return{username:"",password:"",alert:""}},methods:{login:function(){var e=this,t={username:this.username,password:this.password};this.password.length<8?this.alert="Password must have at least 8 characters long":(console.log("loggin in"),_.a.post("/login",t).then((function(t){e.$store.commit("setUsername",t.data.username),e.$store.commit("setCsrftoken",e.$cookies.get("csrftoken")),e.$router.push("/")})).catch((function(t){console.log(t.response.status),console.log(t.response),e.alert="Invalid credentials. Password must be 8 characters long"}))),this.username="",this.password=""}}},R=k,$=Object(l["a"])(R,v,w,!1,null,null,null),O=$.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-row",[o("LeftPanel"),o("ChatRoom")],1)},C=[],j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-col",{attrs:{cols:"2"}},[o("b-list-group",[o("b-list-group-item",{attrs:{active:""}},[e._v("Chat Rooms")]),o("b-alert",{attrs:{show:0===e.$store.state.rooms.length,variant:"info"}},[o("h5",[e._v("Well... let's create a room first!")]),e._v(" All room names must NOT have space or special characters! "),o("p"),o("p",[e._v(" To create a room, enter the room name below and hit enter or press the save button ")])])],1),o("b-list-group",[e._l(this.$store.state.rooms,(function(t){return o("b-list-group-item",{key:t.id,attrs:{button:""},on:{click:function(o){return e.joinRoom(t.name)}}},[e._v(" "+e._s(t.name)+" ")])})),o("b-form-input",{directives:[{name:"show",rawName:"v-show",value:e.showAddRoom,expression:"showAddRoom"}],staticClass:"addRoom",attrs:{placeholder:"Create a room"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createRoom(t)}},model:{value:e.newRoomName,callback:function(t){e.newRoomName=t},expression:"newRoomName"}})],2)],1)},N=[],M=(o("a15b"),o("ac1f"),o("1276"),{name:"LeftPanel",data:function(){return{showAddRoom:!0,newRoomName:""}},methods:{joinRoom:function(e){this.$store.commit("setRoomName",e),this.$store.dispatch("connectToRoom",e.toLowerCase())},createRoom:function(){var e=this.newRoomName.split(" ").join(""),t={name:e};this.$store.dispatch("createRoom",t),this.newRoomName=""}}}),S=M,P=(o("ccee"),Object(l["a"])(S,j,N,!1,null,null,null)),E=P.exports,L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-col",[0===e.getMessages.length&&null!=e.$store.state.room?o("h3",[e._v(" Welcome. Theres no messages on this room yet!!! ")]):e._e(),o("div",{staticClass:"chatArea"},e._l(e.getMessages,(function(t){return o("div",{key:t.id},[o("ChatMessage",{attrs:{text:t.message,from:t.username,variant:e.$store.state.username==t.username?"dark":"primary",timestamp:t.sent}})],1)})),0),null!=e.$store.state.room?o("b-form-input",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.testSend(t)}},model:{value:e.chatInput,callback:function(t){e.chatInput=t},expression:"chatInput"}}):e._e()],1)},T=[],A=o("5530"),I=o("2f62"),J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-alert",{attrs:{variant:e.variant,show:""}},[o("h5",[o("b",[e._v(e._s(e.from)+" ")]),o("i",[e._v(e._s(e.timestamp.split(".")[0]))])]),o("p",[e._v(" "+e._s(e.text)+" ")])])],1)},U=[],W={name:"ChatMessage",props:{variant:{type:String,default:"dark"},text:{type:String,default:""},from:{type:String,default:""},timestamp:{type:String,default:""}}},q=W,H=(o("75ad"),Object(l["a"])(q,J,U,!1,null,null,null)),D=H.exports,F={name:"ChatRoom",components:{ChatMessage:D},data:function(){return{chatInput:""}},methods:{testSend:function(){var e={message:this.chatInput,username:this.$store.state.username,id:"",sent:""};this.$store.commit("sendMessage",e),this.chatInput=""}},computed:Object(A["a"])({},Object(I["b"])(["getMessages"]))},K=F,X=(o("6028"),Object(l["a"])(K,L,T,!1,null,null,null)),z=X.exports,B={name:"Home",components:{LeftPanel:E,ChatRoom:z}},G=B,Q=Object(l["a"])(G,x,C,!1,null,null,null),V=Q.exports;n["default"].use(g["a"]);var Y=[{path:"/",name:"Home",component:V},{path:"/login",name:"Login",component:O}],Z=new g["a"]({routes:Y}),ee=Z;o("4de4"),o("b0c0");n["default"].use(I["a"]);var te=new I["a"].Store({state:{csrftoken:null,loginMessage:null,roomName:"",rooms:[],room:null,messages:[],username:"",message:{id:"",username:"",message:"",sent:""}},mutations:{setRoomName:function(e,t){e.roomName=t},setRooms:function(e,t){e.rooms=t},connectRoom:function(e,t){e.room=t},loadMessages:function(e,t){e.messages.push(JSON.parse(t))},sendMessage:function(e,t){e.room.send(JSON.stringify(t))},closeSocket:function(e){e.room.close(),e.room=null,e.messages=[]},setCsrftoken:function(e,t){e.csrftoken=t},setLoginMessage:function(e,t){e.loginMessage=t},setUsername:function(e,t){e.username=t}},getters:{roomNames:function(e){return e.rooms.filter((function(e){return e.name}))},getMessages:function(e){return e.messages}},actions:{fetchRooms:function(e){_.a.get("/api/v1/room/rooms").then((function(t){e.commit("setRooms",t.data)})).catch((function(e){return console.log(e)}))},connectToRoom:function(e,t){var o=null;null!==e.state.room&&e.commit("closeSocket"),o=new WebSocket("ws://localhost:8000/ws/chat/"+t+"/"),e.commit("connectRoom",o),o.onmessage=function(t){e.commit("loadMessages",t.data)}},createRoom:function(e,t){var o={"X-CSRFTOKEN":e.state.csrftoken};_.a.post("/api/v1/room/rooms",t,{headers:o}).then((function(){return e.dispatch("fetchRooms")}))}},modules:{}}),oe=o("5f5b"),ne=o("b1e0"),se=(o("f9e3"),o("2dd8"),o("2b27")),re=o.n(se);n["default"].use(oe["a"]),n["default"].use(ne["a"]),n["default"].use(re.a),n["default"].config.productionTip=!1,new n["default"]({router:ee,store:te,render:function(e){return e(b)}}).$mount("#app")},6028:function(e,t,o){"use strict";o("c5ee")},"75ad":function(e,t,o){"use strict";o("2b73")},"9e24":function(e,t,o){},c5ee:function(e,t,o){},ccee:function(e,t,o){"use strict";o("9e24")}});