webpackJsonp([1],{104:function(t,e,a){"use strict";var n=a(31),o=a.n(n),i=a(20),c=a(112),r=a.n(c),s=a(48);e.a={name:"user",props:["auth","authenticated"],data:function(){return{}},methods:o()({},Object(i.c)(["goTo"]),{getname:function(){var t=localStorage.getItem("id_token");return r()(t).nickname},getemailid:function(){var t=localStorage.getItem("id_token");return r()(t).email}}),components:{loader:s.a},computed:o()({},Object(i.b)(["loader","coursedata"])),watch:{},created:function(){this.$store.commit("getdata")}}},113:function(t,e,a){"use strict";e.a={name:"callback",props:["auth"],data:function(){return this.auth.handleAuthentication(),{}}}},114:function(t,e,a){"use strict";e.a={data:function(){return{}}}},115:function(t,e,a){"use strict";var n=a(31),o=a.n(n),i=a(20),c=a(49),r=a(48);e.a={props:["auth","authenticated"],data:function(){return{dialog:!1,name:"",key:"",is_admin:!1}},methods:o()({},Object(i.c)(["goTo","deldata"])),components:{btnLoader:c.a,loader:r.a},computed:o()({},Object(i.b)(["btnLoader","patchUpdateDom","loader","coursedata"])),watch:{},created:function(){this.$store.commit("getdata")}}},116:function(t,e,a){"use strict";e.a={name:"logout",data:function(){return{}}}},117:function(t,e,a){"use strict";var n=a(31),o=a.n(n),i=a(118),c=a.n(i),r=a(20),s=a(45);a.n(s);e.a={name:"hello",data:function(){return{db_connect:"",d1:!1,video_redirect:""}},methods:o()({},Object(r.c)([]),{callupload:function(){var t=this,e=s.ServerUrl.url,a=e+"uploadvideo";c.a.get(a,{params:{url:this.$route.params.item}}).then(function(e){console.log(e.data),t.video_redirect=e.data,t.d1=!0}).catch(function(t){console.log(t)})}}),components:{},computed:o()({},Object(r.b)([])),watch:{}}},124:function(t,e,a){"use strict";var n=a(31),o=a.n(n),i=a(20),c=a(49),r=a(48);e.a={props:["auth","authenticated"],data:function(){return{d1:!1,d2:!1,d3:!1,d4:!1,name:"",desc:"",docObj:"",docUrl:"",vimeoId:"",f1:!1,f2:!1,f3:!1,f4:!1,key:"",value:"https://player.vimeo.com/video/257497540?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0"}},methods:o()({},Object(i.c)(["updatename","updatedesc","updatedocUrl","updatevideoUrl"]),{uploaddoc:function(t){this.docObj=t.target.files[0],this.docUrl=URL.createObjectURL(t.target.files[0])},callupdatename:function(t){this.name=t,this.key=t,this.d1=!0},callupdatedesc:function(t,e){this.desc=e,this.key=t,this.d2=!0},callupdatedocUrl:function(t,e){this.docUrl=e,this.key=t,this.d3=!0},callupdatevideoUrl:function(t,e){this.vimeoId=e,this.key=t,this.d4=!0}}),components:{btnLoader:c.a,loader:r.a},computed:o()({},Object(i.b)(["btnLoader","patchUpdateDom","loader","coursedata"]),{update_f1:function(){return this.f1=this.$store.state.gen.f1,this.f1},update_f2:function(){return this.f2=this.$store.state.gen.f1,this.f2},update_f3:function(){return this.f3=this.$store.state.gen.f1,this.f3},update_f4:function(){return this.f4=this.$store.state.gen.f1,this.f4}}),watch:{f1:function(){this.f1&&(this.name="",this.d1=!1)},f2:function(){this.f2&&(this.desc="",this.d2=!1)},f3:function(){this.f3&&(this.docUrl="",this.docObj="",this.d3=!1)},f4:function(){this.f4&&(this.vimeoId="",this.d4=!1)}},created:function(){this.$store.commit("gettrainingdata",this.$route.params.item)}}},125:function(t,e,a){"use strict";var n=a(31),o=a.n(n),i=a(20),c=a(49);e.a={props:["auth","authenticated"],data:function(){return{docObj:"",docUrl:"",dialog:!1,course_name:"",course_description:"",vimeoId:"",courseFee:"",f1:!1}},methods:o()({},Object(i.c)(["uploaddata","goTo"]),{uploaddoc:function(t){this.docObj=t.target.files[0],this.docUrl=URL.createObjectURL(t.target.files[0])}}),components:{btnLoader:c.a},computed:o()({},Object(i.b)(["btnLoader","patchUpdateDom","coursedata"]),{update_f1:function(){return this.f1=this.$store.state.gen.f1,this.f1}}),watch:{f1:function(){this.f1&&(this.course_name="",this.course_description="",this.docObj="",this.docUrl="",document.getElementById("uploaddoc").value="",this.vimeoId="",this.courseFee="",this.dialog=!1)}}}},126:function(t,e,a){"use strict";e.a={name:"Unauth",data:function(){return{}}}},127:function(t,e,a){"use strict";var n=a(31),o=a.n(n),i=a(20),c=a(49),r=a(48);e.a={props:["auth","authenticated"],data:function(){return{d1:!1,d2:!1,d3:!1,d4:!1,name:"",desc:"",docObj:"",docUrl:"",videoUrl:"",f1:!1,key:"",value:"https://player.vimeo.com/video/257497540?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0"}},methods:o()({},Object(i.c)(["updatename","updatedesc","updatedocUrl","updatevideoUrl"])),components:{btnLoader:c.a,loader:r.a},computed:o()({},Object(i.b)(["btnLoader","patchUpdateDom","loader","coursedata"])),watch:{},created:function(){this.$store.commit("gettrainingdata",this.$route.params.item)}}},175:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(59),o=a(177),i=a(66),c=a(288),r=a.n(c),s=a(289),d=(a.n(s),a(290)),l=(a.n(d),a(291)),u=(a.n(l),a(292)),v=(a.n(u),a(293)),f=a(45),m=(a.n(f),a(322));n.a.config.productionTip=!1,n.a.use(r.a),new n.a({el:"#app",router:i.a,store:v.a,template:"<App/>",components:{App:o.a},created:function(){this.$store.state.gen.firebaseApp=m.initializeApp(f.FirebaseConfig),this.$store.state.gen.storage=m.storage()}})},177:function(t,e,a){"use strict";var n=a(88),o=a(287),i=a(5),c=i(n.a,o.a,!1,null,null,null);e.a=c.exports},178:function(t,e,a){"use strict";var n=a(179),o=a.n(n),i=a(181),c=a.n(i),r=a(182),s=a.n(r),d=a(188),l=a.n(d),u=a(45),v=(a.n(u),a(223)),f=a.n(v),m=a(66),h=a(112),p=a.n(h),_=function(){function t(){c()(this,t),this.authenticated=this.isAuthenticated(),this.authNotifier=new f.a,this.auth0=new l.a.WebAuth({domain:u.AUTH_CONFIG.domain,clientID:u.AUTH_CONFIG.clientId,redirectUri:u.AUTH_CONFIG.callbackUrl,audience:"https://"+u.AUTH_CONFIG.domain+"/userinfo",responseType:"token id_token",scope:"openid profile email"}),this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this)}return s()(t,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var t=this;this.auth0.parseHash(function(e,a){if(a&&a.accessToken&&a.idToken){t.setSession(a);p()(a.idToken)["http://mz02testis_admin"]?m.a.push("Admin"):m.a.push("User")}else e&&(m.a.push("User"),console.log(a))})}},{key:"setSession",value:function(t){var e=o()(1e3*t.expiresIn+(new Date).getTime());localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("expires_at",e),this.authNotifier.emit("authChange",{authenticated:!0}),p()(t.idToken)["http://mz02testis_admin"]?localStorage.setItem("isadmin",!0):localStorage.setItem("isadmin",!1)}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),this.userProfile=null,this.authNotifier.emit("authChange",!1),m.a.push("/logout")}},{key:"isAuthenticated",value:function(){var t=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<t}}]),t}();e.a=_},225:function(t,e,a){"use strict";function n(t){a(226)}var o=a(104),i=a(240),c=a(5),r=n,s=c(o.a,i.a,!1,r,"data-v-1f1cb0a2",null);e.a=s.exports},226:function(t,e){},239:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"sk-cube-grid"},[a("div",{staticClass:"sk-cube sk-cube1"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube2"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube3"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube4"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube5"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube6"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube7"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube8"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube9"})])])}],i={render:n,staticRenderFns:o};e.a=i},240:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?a("div",[t.loader?a("loader"):a("div",[a("div",{staticClass:"pb-5",attrs:{align:"right"}},[t.authenticated?a("h4",[a("pre",[t._v("            "),a("h4",[t._v(" Hi "+t._s(t.getname())+" ")]),t._v("\n            "),a("h4",[t._v(" "+t._s(t.getemailid())+" ")]),t._v("\n          ")])]):t._e(),t._v(" "),t.authenticated?t._e():a("h4",[t._v("\n          You are not logged in! Please Log In to continue.\n        ")])]),t._v(" "),a("v-layout",[a("v-expansion-panel",{staticClass:"expansion-panel-remove-shadow",attrs:{inset:""}},t._l(t.coursedata,function(e,n){return a("v-expansion-panel-content",{key:n,attrs:{"hide-actions":""}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",[a("v-layout",[a("v-flex",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline mb-0",on:{click:function(a){t.goTo("/ViewTrainingDataUser/"+e.name)}}},[t._v(t._s(e.name))])])])],1)],1)],1)])])}))],1)],1)],1):a("div",[t._v("\n  Unauthorised Access\n")])])},o=[],i={render:n,staticRenderFns:o};e.a=i},241:function(t,e,a){"use strict";function n(t){a(242)}var o=a(113),i=a(243),c=a(5),r=n,s=c(o.a,i.a,!1,r,null,null);e.a=s.exports},242:function(t,e){},243:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h2",{attrs:{align:"center"}},[t._v("Please wait while we set your session")])])}],i={render:n,staticRenderFns:o};e.a=i},244:function(t,e,a){"use strict";function n(t){a(245)}var o=a(114),i=a(246),c=a(5),r=n,s=c(o.a,i.a,!1,r,"data-v-632f3d25",null);e.a=s.exports},245:function(t,e){},246:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pb-5 pt-5",attrs:{align:"center"}},[a("h1",[t._v(" This is for demo purpose"),a("br"),a("br")]),t._v(" "),a("h4",[t._v("\n        The admin panel here contain the features to upload the documents and the videos."),a("br"),t._v("\n        The login button authenticates the user with the API auth0."),a("br"),t._v(" And there you have access to the documents and the videos."),a("br"),t._v("\n        The training data is fetched from the database mongodb.\n    ")])])])}],i={render:n,staticRenderFns:o};e.a=i},247:function(t,e,a){"use strict";function n(t){a(248)}var o=a(115),i=a(250),c=a(5),r=n,s=c(o.a,i.a,!1,r,"data-v-0186568d",null);e.a=s.exports},248:function(t,e){},249:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{attrs:{color:"secondary",loading:!0,flat:"",fab:"",small:""}})],1)},o=[],i={render:n,staticRenderFns:o};e.a=i},250:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?a("div",[t.loader?a("loader"):a("div",[a("div",{attrs:{align:"center"}},[a("br"),t._v(" "),a("h3",[t._v("To add new training course click the button below\n      "),a("v-btn",{staticStyle:{"background-color":"#294069"},attrs:{flat:""},on:{click:function(e){t.goTo("/AddData")}}},[t._v("\n        Add Course\n      ")])],1),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{align:"center"}},[t._v("\n      Available Courses\n    ")])])]),t._v(" "),a("v-layout",[a("v-expansion-panel",{staticClass:"expansion-panel-remove-shadow",attrs:{inset:""}},t._l(t.coursedata,function(e,n){return a("v-expansion-panel-content",{key:n,attrs:{"hide-actions":""}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",[a("v-layout",[a("v-flex",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline mb-0",on:{click:function(a){t.goTo("/ViewTrainingData/"+e.name)}}},[t._v(t._s(e.name))])])])],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",fab:"",small:"",color:"red"},on:{click:function(a){t.dialog=!0,t.name=e.name,t.key=n}}},[a("v-icon",[t._v("delete")])],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticStyle:{"background-color":"#f0f0f0"}},[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(e){t.deldata({name:t.name,key:t.key}),t.dialog=!1}}},[t._v("Yes")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("No")])],1)],1)],1)],1)],1)])])}))],1)],1):a("div",[t._v("\n    Unauthorised Access\n  ")]),t._v(" "),a("div",{staticStyle:{visibility:"hidden"}},[t._v(t._s(t.patchUpdateDom))])])},o=[],i={render:n,staticRenderFns:o};e.a=i},251:function(t,e,a){"use strict";function n(t){a(252)}var o=a(116),i=a(253),c=a(5),r=n,s=c(o.a,i.a,!1,r,null,null);e.a=s.exports},252:function(t,e){},253:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h2",{attrs:{align:"center"}},[t._v("You have successfully logged out")])])}],i={render:n,staticRenderFns:o};e.a=i},254:function(t,e,a){"use strict";function n(t){a(255)}var o=a(117),i=a(274),c=a(5),r=n,s=c(o.a,i.a,!1,r,"data-v-329bd888",null);e.a=s.exports},255:function(t,e){},274:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{staticStyle:{width:"600",height:"200"},model:{value:t.d1,callback:function(e){t.d1=e},expression:"d1"}},[a("form",{attrs:{method:"POST",action:t.video_redirect,enctype:"multipart/form-data"}},[a("label",{staticStyle:{"margin-left":"17px"},attrs:{for:"file"}},[a("input",{attrs:{type:"file",name:"file_data",id:"file"}}),t._v(" "),a("br")]),t._v(" "),a("input",{attrs:{type:"submit",name:"submit",value:"Submit"}})])]),t._v(" "),a("v-btn",{staticClass:"fixed-floating-button white--text",staticStyle:{"background-color":"#35495E"},attrs:{fab:"",absolute:"",fixed:""},on:{click:function(e){t.callupload()}}},[a("v-icon",[t._v("add")])],1)],1)},o=[],i={render:n,staticRenderFns:o};e.a=i},275:function(t,e,a){"use strict";function n(t){a(276)}var o=a(124),i=a(277),c=a(5),r=n,s=c(o.a,i.a,!1,r,"data-v-127139fd",null);e.a=s.exports},276:function(t,e){},277:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?a("div",[a("br"),t._v(" "),a("h2",{attrs:{align:"center"}},[t._v("\n   Course Detail\n ")]),t._v(" "),t.loader?a("loader"):a("div",{attrs:{align:"center"}},t._l(t.coursedata,function(e,n){return a("div",{key:n,staticClass:"border border-dark",attrs:{align:"center"}},[a("br"),t._v(" "),a("div",{staticStyle:{"font-weight":"bold, font-size: 12px"}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs6:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("h2",[t._v("Name of the course:-        ")]),t._v(" "),a("div",[a("div",{staticClass:"headline mb-0"},[t._v(t._s(e.name))])])])],1),t._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-btn",{staticStyle:{"background-color":"#35495E"},attrs:{flat:""},on:{click:function(a){t.callupdatename(e.name)}}},[a("v-icon",[t._v("edit")])],1)],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("div",{staticStyle:{"font-size":"12px"}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs6:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("h2",[t._v("Course Description:-          ")]),t._v(" "),a("div",[a("div",{staticClass:"headline mb-0"},[t._v(t._s(e.desc))])])])],1),t._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-btn",{staticStyle:{"background-color":"#35495E"},attrs:{flat:""},on:{click:function(a){t.callupdatedesc(e.name,e.desc)}}},[a("v-icon",[t._v("edit")])],1)],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("h2",[t._v("Course material:-         ")]),t._v(" "),a("v-flex",{attrs:{xs6:""}},[a("iframe",{staticStyle:{overflow:"hidden",width:"400px",height:"300px"},attrs:{src:e.docUrl,scrolling:"no"}}),t._v(" "),a("v-btn",{staticStyle:{"background-color":"#35495E"},attrs:{flat:""},on:{click:function(a){t.callupdatedocUrl(e.name,e.docurl)}}},[a("v-icon",[t._v("edit")])],1)],1),t._v(" "),a("br"),t._v(" "),a("h2",[t._v("Course video:-          ")]),t._v(" "),a("v-flex",{attrs:{xs6:""}},[a("iframe",{attrs:{src:e.vimeoId,width:"400",height:"300",frameborder:"0",title:"Untitled",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}}),t._v(" "),a("v-btn",{staticStyle:{"background-color":"#35495E"},attrs:{flat:""},on:{click:function(a){t.callupdatevideoUrl(e.name,e.vimeoId)}}},[a("v-icon",[t._v("edit")])],1)],1)],1)],1)})),t._v(" "),a("v-dialog",{attrs:{maxWidth:"600"},model:{value:t.d1,callback:function(e){t.d1=e},expression:"d1"}},[a("v-card",{staticClass:"pa-4",staticStyle:{"background-color":"#F0F0F0"}},[a("v-text-field",{attrs:{label:"Name of course"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),t.btnLoader?a("btnLoader"):a("v-btn",{attrs:{flat:""},on:{click:function(e){t.updatename({name:t.name,key:t.key})}}},[t._v("\n         Update Name\n       ")])],1)],1),t._v(" "),a("v-dialog",{attrs:{maxWidth:"600"},model:{value:t.d2,callback:function(e){t.d2=e},expression:"d2"}},[a("v-card",{staticClass:"pa-4",staticStyle:{"background-color":"#F0F0F0"}},[a("v-text-field",{attrs:{label:"Short Description","multi-line":""},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}}),t._v(" "),t.btnLoader?a("btnLoader"):a("v-btn",{attrs:{flat:""},on:{click:function(e){t.updatedesc({desc:t.desc,key:t.key})}}},[t._v("\n         Update Description\n       ")])],1)],1),t._v(" "),a("v-dialog",{attrs:{maxWidth:"600"},model:{value:t.d3,callback:function(e){t.d3=e},expression:"d3"}},[a("v-card",{staticClass:"pa-4",staticStyle:{"background-color":"#F0F0F0"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:""!=t.docUrl,expression:" docUrl != '' "}],staticClass:"text-xs-center",attrs:{flat:""}},[a("a",{attrs:{href:t.docUrl,target:"_blank"}},[t._v("Click here to view document ")])]),t._v(" "),a("v-card-actions",[a("label",{staticStyle:{"margin-left":"17px"},attrs:{id:"#bb1"}},[a("v-icon",{staticClass:"white--text"},[t._v("\n             file_upload\n           ")]),t._v(" "),a("input",{attrs:{type:"file",name:"doc",accept:"*",id:"uploaddoc"},on:{change:function(e){t.uploaddoc(e)}}})],1),t._v(" "),a("span",{staticClass:"caption"},[t._v("Upload Document")])]),t._v(" "),t.btnLoader?a("btnLoader"):a("v-btn",{attrs:{flat:""},on:{click:function(e){t.updatedocUrl({docObj:t.docObj,docUrl:t.docUrl,key:t.key})}}},[t._v("\n         Update Document\n       ")])],1)],1),t._v(" "),a("v-dialog",{attrs:{maxWidth:"600"},model:{value:t.d4,callback:function(e){t.d4=e},expression:"d4"}},[a("v-card",{staticClass:"pa-4",staticStyle:{"background-color":"#F0F0F0"}},[a("v-text-field",{attrs:{label:"Vimeo ID"},model:{value:t.vimeoId,callback:function(e){t.vimeoId=e},expression:"vimeoId"}}),t._v(" "),t.btnLoader?a("btnLoader"):a("v-btn",{attrs:{flat:""},on:{click:function(e){t.updatevideoUrl({vimeoId:t.vimeoId,key:t.key})}}},[t._v("\n         Update Vimeo Id\n       ")])],1)],1),t._v(" "),a("div",{staticStyle:{visibility:"hidden"}},[t._v(" "+t._s(t.update_f1)+" "+t._s(t.update_f2)+" "+t._s(t.update_f3)+" "+t._s(t.update_f4))])],1):a("div",[t._v("\n  Unauthorised Access\n")])])},o=[],i={render:n,staticRenderFns:o};e.a=i},278:function(t,e,a){"use strict";function n(t){a(279)}var o=a(125),i=a(280),c=a(5),r=n,s=c(o.a,i.a,!1,r,"data-v-9c617048",null);e.a=s.exports},279:function(t,e){},280:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?a("div",[a("v-card",{staticClass:"pa-4",attrs:{flat:""}},[a("v-text-field",{attrs:{label:"Name of course"},model:{value:t.course_name,callback:function(e){t.course_name=e},expression:"course_name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Short Description","multi-line":""},model:{value:t.course_description,callback:function(e){t.course_description=e},expression:"course_description"}}),t._v(" "),a("v-card",{directives:[{name:"show",rawName:"v-show",value:""!=t.docUrl,expression:" docUrl != '' "}],staticClass:"text-xs-center",attrs:{flat:""}},[a("a",{attrs:{href:t.docUrl,target:"_blank"}},[t._v("Click here to view document ")])]),t._v(" "),a("v-card-actions",[a("label",{staticStyle:{"margin-left":"17px"},attrs:{id:"#bb1"}},[a("v-icon",{staticClass:"white--text"},[t._v("\n            file_upload\n          ")]),t._v(" "),a("input",{attrs:{type:"file",name:"doc",accept:"*",id:"uploaddoc"},on:{change:function(e){t.uploaddoc(e)}}})],1),t._v(" "),a("span",{staticClass:"caption"},[t._v("Upload Document")])]),t._v(" "),a("v-text-field",{attrs:{label:"Vimeo ID"},model:{value:t.vimeoId,callback:function(e){t.vimeoId=e},expression:"vimeoId"}}),t._v(" "),a("v-text-field",{attrs:{label:"Course Fee"},model:{value:t.courseFee,callback:function(e){t.courseFee=e},expression:"courseFee"}}),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),t.btnLoader?a("btnLoader"):a("v-btn",{attrs:{flat:""},on:{click:function(e){t.uploaddata({name:t.course_name,description:t.course_description,docObj:t.docObj,docUrl:t.docUrl,vimeoId:t.vimeoId,courseFee:t.courseFee})}}},[t._v("\n            Add\n          ")])],1)],1),t._v(" "),a("div",{staticStyle:{visibility:"hidden"}},[t._v(" "+t._s(t.update_f1)+" "+t._s(t.patchUpdateDom))])],1):a("div",[t._v("\n   Unauthorised Access\n ")])])},o=[],i={render:n,staticRenderFns:o};e.a=i},281:function(t,e,a){"use strict";function n(t){a(282)}var o=a(126),i=a(283),c=a(5),r=n,s=c(o.a,i.a,!1,r,null,null);e.a=s.exports},282:function(t,e){},283:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h2",{attrs:{align:"center"}},[t._v("Unauthorized")])])}],i={render:n,staticRenderFns:o};e.a=i},284:function(t,e,a){"use strict";function n(t){a(285)}var o=a(127),i=a(286),c=a(5),r=n,s=c(o.a,i.a,!1,r,"data-v-74ae0ef9",null);e.a=s.exports},285:function(t,e){},286:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?a("div",[a("br"),t._v(" "),a("h2",{attrs:{align:"center"}},[t._v("\n   Course Detail\n ")]),t._v(" "),t.loader?a("loader"):a("div",{attrs:{align:"center"}},t._l(t.coursedata,function(e,n){return a("div",{key:n,staticClass:"border border-dark",attrs:{align:"center"}},[a("br"),t._v(" "),a("div",{staticStyle:{"font-weight":"bold, font-size: 12px"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("h2",[t._v("Name of the course:-        ")]),t._v(" "),a("div",[a("div",{staticClass:"headline mb-0"},[t._v(t._s(e.name))])])])],1),t._v(" "),a("br"),t._v(" "),a("div",{staticStyle:{"font-size":"12px"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("h2",[t._v("Course Description:-          ")]),t._v(" "),a("div",[a("div",{staticClass:"headline mb-0"},[t._v(t._s(e.desc))])])])],1),t._v(" "),a("br"),t._v(" "),a("h2",[t._v("Course material:-")]),t._v(" "),a("iframe",{staticStyle:{overflow:"hidden",width:"400px",height:"300px"},attrs:{src:e.docUrl,scrolling:"no"}}),t._v(" "),a("br"),t._v(" "),a("h2",[t._v("Course video:-")]),t._v(" "),a("iframe",{attrs:{src:e.vimeoId,width:"400",height:"300",frameborder:"0",title:"Untitled",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])}))],1):a("div",[t._v("\n  Unauthorised Access\n")])])},o=[],i={render:n,staticRenderFns:o};e.a=i},287:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("div",{attrs:{align:"right"}},[a("button",{staticClass:"btn btn-primary btn-margin",on:{click:function(e){t.Home()}}},[t._v("\n            Home\n        ")]),t._v(" "),t.authenticated?t._e():a("button",{staticClass:"btn btn-primary btn-margin",on:{click:function(e){t.login()}}},[t._v("\n          Log In\n      ")]),t._v(" "),t.authenticated?a("button",{staticClass:"btn btn-primary btn-margin",on:{click:function(e){t.logout()}}},[t._v("\n          Log Out\n      ")]):t._e()])]),t._v(" "),a("main",[a("router-view",{attrs:{auth:t.auth,authenticated:t.authenticated}})],1)])},o=[],i={render:n,staticRenderFns:o};e.a=i},289:function(t,e){},290:function(t,e){},291:function(t,e){},292:function(t,e){},293:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a(59),o=a(20),i=a(294);n.a.use(o.a);var c=new o.a.Store({modules:{gen:i.a}})},294:function(t,e,a){"use strict";var n=a(295),o=a.n(n),i=a(66),c=a(118),r=a.n(c),s=a(45),d=(a.n(s),{btnLoader:!1,firebaseApp:{},storage:{},coursedata:{},patchUpdateDom:!1,loader:!1,f1:!1}),l={btnLoader:function(t){return t.btnLoader},loader:function(t){return t.loader},patchUpdateDom:function(t){return t.patchUpdateDom},coursedata:function(t){return t.coursedata}},u={goTo:function(t,e){i.a.push(e)},uploaddata:function(t,e){v.checkEmptyField(e.name).then(function(a){a&&v.checkEmptyField(e.description).then(function(a){a&&v.checkEmptyField(e.docUrl).then(function(a){a&&v.checkEmptyField(e.vimeoId).then(function(a){a&&v.checkEmptyField(e.courseFee).then(function(a){if(a){t.btnLoader=!0;var n={x:e.docObj,y:e.docUrl};v.uploaddoc(t,n).then(function(a){if(a){var n=s.ServerUrl.url,o=n+"uploaddata";r.a.get(o,{params:{name:e.name,description:e.description,docUrl:a,vimeoId:e.vimeoId,courseFee:e.courseFee}}).then(function(e){var a="";for(var n in e.data)a=e.data[n].Name,t.coursedata[e.data[n]._id]={name:e.data[n].Name};t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,u.goTo(t,"/ViewTrainingData/"+a)}).catch(function(e){console.log(e),t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1})}})}})})})})})},insertdata:function(t,e){t.loader=!0,console.log(e);var a=e.videoUrl.slice(8),n="https://player.vimeo.com/video/video_id?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0",o=n.replace("video_id",a),i=s.ServerUrl.url;console.log(i);var c=i+"uploadvideoUrl";r.a.get(c,{params:{name:e.name,videoUrl:o}}).then(function(e){console.log(e),t.coursedata[e.data._id]={name:e.data.name,videoUrl:e.data.videoUrl},console.log(t.coursedata),t.btnLoader=!1,t.loader=!1}).catch(function(e){console.log(e),t.btnLoader=!1,t.loader=!1})},getdata:function(t){t.loader=!0,t.coursedata={};var e=s.ServerUrl.url,a=e+"getdata";r.a.get(a).then(function(e){var a=e.data.length;console.log(a);var n=0,o=0;for(n in e.data)console.log(e.data[n]),t.coursedata[e.data[n]._id]={name:e.data[n].Name},o++,console.log(n),o===a&&(console.log(n),t.loader=!1,t.patchUpdateDom=!t.patchUpdateDom)}).catch(function(e){console.log(e),t.loader=!1,t.patchUpdateDom=!t.patchUpdateDom})},gettrainingdata:function(t,e){console.log(e),t.coursedata={},t.loader=!0;var a=s.ServerUrl.url,n=a+"gettrainingdata";r.a.get(n,{params:{name:e}}).then(function(e){console.log(e.data),t.coursedata[e.data._id]={name:e.data.Name,desc:e.data.Desc,docUrl:e.data.Docurl,vimeoId:e.data.Vimeoid},t.loader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.loader=!1,t.patchUpdateDom=!t.patchUpdateDom})},updatename:function(t,e){t.coursedata={},console.log(e),t.btnLoader=!0;var a=s.ServerUrl.url,n=a+"updatename";r.a.get(n,{params:{name:e.name,key:e.key}}).then(function(e){console.log(e.data),t.coursedata[e.data._id]={name:e.data.Name,desc:e.data.Desc,docUrl:e.data.Docurl},t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom})},updatedesc:function(t,e){t.coursedata={},console.log(e),t.btnLoader=!0;var a=s.ServerUrl.url,n=a+"updatedesc";r.a.get(n,{params:{desc:e.desc,key:e.key}}).then(function(e){console.log(e.data),t.coursedata[e.data._id]={name:e.data.Name,desc:e.data.Desc,docUrl:e.data.Docurl,vimeoId:e.data.Vimeoid},t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom})},updatedocUrl:function(t,e){t.coursedata={},console.log(e),t.btnLoader=!0;var a=s.ServerUrl.url,n=a+"updatedocUrl",o={x:e.docObj,y:e.docUrl};v.uploaddoc(t,o).then(function(a){a&&r.a.get(n,{params:{docUrl:a,key:e.key}}).then(function(e){console.log(e.data),t.coursedata[e.data._id]={name:e.data.Name,desc:e.data.Desc,docUrl:e.data.Docurl,vimeoId:e.data.Vimeoid},t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom})})},updatevideoUrl:function(t,e){t.coursedata={},console.log(e),t.btnLoader=!0;var a=s.ServerUrl.url,n=a+"updatevideoUrl";r.a.get(n,{params:{vimeoId:e.vimeoId,key:e.key}}).then(function(e){console.log(e.data),t.coursedata[e.data._id]={name:e.data.Name,desc:e.data.Desc,docUrl:e.data.Docurl,vimeoId:e.data.Vimeoid},t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom})},deldata:function(t,e){console.log(e);var a=s.ServerUrl.url,n=a+"deletedata";r.a.get(n,{params:{name:e.name}}).then(function(a){console.log(a.data),delete t.coursedata[e.key],t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.patchUpdateDom=!t.patchUpdateDom})}},v={checkEmptyField:function(t,e){return new o.a(function(t){/([^\s])/.test(e)?t(!0):(t(!1),alert("Empty Field !"))})},uploaddoc:function(t,e){return console.log(e),new o.a(function(a){var n=t.storage.ref("Documents/"+e.y.slice(e.y.lastIndexOf("/")+1)).put(e.x);n.on("state_changed",function(t){},function(t){console.log(t)},function(){console.log(n.snapshot.downloadURL),a(n.snapshot.downloadURL)})})}};e.a={mutations:u,state:d,getters:l,actions:v}},45:function(t,e){e.FirebaseConfig={apiKey:"AIzaSyAY4fRwC0AVSyHUZqZycAcvQ7ZY8QjbMRY",authDomain:"mindzcloud-ce294.firebaseapp.com",databaseURL:"https://mindzcloud-ce294.firebaseio.com",projectId:"mindzcloud-ce294",storageBucket:"mindzcloud-ce294.appspot.com",messagingSenderId:"597233426287"},e.AUTH_CONFIG={clientId:"p1uly3n8G1B62PO0vP9SwM3QTFKIOSuM",domain:"mindzcloudtest.auth0.com",callbackUrl:"http://localhost:5000/callback",apiUrl:"API_IDENTIFIER"},e.ServerUrl={url:"http://localhost:5000/"}},48:function(t,e,a){"use strict";var n=a(239),o=a(5),i=o(null,n.a,!1,null,null,null);e.a=i.exports},49:function(t,e,a){"use strict";var n=a(249),o=a(5),i=o(null,n.a,!1,null,null,null);e.a=i.exports},66:function(t,e,a){"use strict";var n=a(59),o=a(224),i=a(225),c=a(241),r=a(244),s=a(247),d=a(251),l=a(254),u=a(275),v=a(278),f=a(281),m=a(284);n.a.use(o.a),e.a=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:r.a},{path:"/ViewTrainingDataUser/:item",name:"ViewTrainingDataUser",component:m.a},{path:"/home",name:"Home",component:r.a},{path:"/Unauth",name:"Unauth",component:f.a},{path:"/admin",name:"Admin",component:s.a},{path:"/logout",name:"Logout",component:d.a},{path:"/user",name:"User",component:i.a},{path:"/callback",name:"Callback",component:c.a},{path:"/video/:item",name:"video",component:l.a},{path:"/ViewTrainingData/:item",name:"ViewTrainingData",component:u.a},{path:"/AddData",name:"AddData",component:v.a}]})},88:function(t,e,a){"use strict";var n=a(178),o=new n.a,i=o.login,c=o.logout,r=o.authenticated,s=o.authNotifier;e.a={name:"app",data:function(){var t=this;return s.on("authChange",function(e){t.authenticated=e.authenticated}),{auth:o,authenticated:r}},methods:{login:i,logout:c,Home:function(){this.$router.push("Home")}}}}},[175]);
//# sourceMappingURL=app.da9f48f6e658837bce59.js.map