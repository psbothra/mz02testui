webpackJsonp([1],{108:function(t,e,a){"use strict";var n=a(22),o=a.n(n),i=a(18),c=a(50),r=a.n(c),s=a(37),l=a(74),d=a.n(l),u=a(36);a.n(u);e.a={name:"user",props:["auth","authenticated"],data:function(){return{}},methods:o()({},Object(i.c)(["goTo"]),{getname:function(){var t=localStorage.getItem("id_token");return r()(t).nickname},getemailid:function(){var t=localStorage.getItem("id_token");return r()(t).email},createpayment:function(t,e){var a=u.ServerUrl.url,n=a+"paypalpayment";d.a.get(n,{params:{amount:t,name:e}}).then(function(t){console.log(t.data),window.location.href=t.data}).catch(function(t){console.log(t)})}}),components:{loader:s.a},computed:o()({},Object(i.b)(["loader","coursedata"])),watch:{},created:function(){this.$store.commit("getdata")}}},119:function(t,e,a){"use strict";e.a={name:"callback",props:["auth"],data:function(){return this.auth.handleAuthentication(),{}}}},120:function(t,e,a){"use strict";e.a={data:function(){return{}}}},121:function(t,e,a){"use strict";var n=a(22),o=a.n(n),i=a(18),c=a(51),r=a(37);e.a={props:["auth","authenticated"],data:function(){return{dialog:!1,name:"",key:"",is_admin:!1}},methods:o()({},Object(i.c)(["goTo","deldata"])),components:{btnLoader:c.a,loader:r.a},computed:o()({},Object(i.b)(["btnLoader","patchUpdateDom","loader","coursedata","isAdmin"])),watch:{},created:function(){this.$store.commit("getdata")}}},122:function(t,e,a){"use strict";e.a={name:"logout",data:function(){return{}}}},123:function(t,e,a){"use strict";var n=a(22),o=a.n(n),i=a(74),c=a.n(i),r=a(18),s=a(36);a.n(s);e.a={name:"hello",data:function(){return{db_connect:"",d1:!1,video_redirect:""}},methods:o()({},Object(r.c)([]),{callupload:function(){var t=this,e=s.ServerUrl.url,a=e+"uploadvideo";c.a.get(a,{params:{url:this.$route.params.item}}).then(function(e){console.log(e.data),t.video_redirect=e.data,t.d1=!0}).catch(function(t){console.log(t)})}}),components:{},computed:o()({},Object(r.b)([])),watch:{}}},124:function(t,e,a){"use strict";var n=a(22),o=a.n(n),i=a(18),c=a(51),r=a(37);e.a={props:["auth","authenticated"],data:function(){return{d1:!1,d2:!1,d3:!1,d4:!1,name:"",desc:"",docObj:"",docUrl:"",vimeoId:"",f1:!1,f2:!1,f3:!1,f4:!1,key:"",value:"https://player.vimeo.com/video/257497540?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0"}},methods:o()({},Object(i.c)(["updatename","updatedesc","updatedocUrl","updatevideoUrl"]),{uploaddoc:function(t){this.docObj=t.target.files[0],this.docUrl=URL.createObjectURL(t.target.files[0])},callupdatename:function(t){this.name=t,this.key=t,this.d1=!0},callupdatedesc:function(t,e){this.desc=e,this.key=t,this.d2=!0},callupdatedocUrl:function(t,e){this.docUrl=e,this.key=t,this.d3=!0},callupdatevideoUrl:function(t,e){this.vimeoId=e,this.key=t,this.d4=!0}}),components:{btnLoader:c.a,loader:r.a},computed:o()({},Object(i.b)(["btnLoader","patchUpdateDom","loader","coursedata","isAdmin"]),{update_f1:function(){return this.f1=this.$store.state.gen.f1,this.f1},update_f2:function(){return this.f2=this.$store.state.gen.f1,this.f2},update_f3:function(){return this.f3=this.$store.state.gen.f1,this.f3},update_f4:function(){return this.f4=this.$store.state.gen.f1,this.f4}}),watch:{f1:function(){this.f1&&(this.name="",this.d1=!1)},f2:function(){this.f2&&(this.desc="",this.d2=!1)},f3:function(){this.f3&&(this.docUrl="",this.docObj="",this.d3=!1)},f4:function(){this.f4&&(this.vimeoId="",this.d4=!1)}},created:function(){this.$store.commit("gettrainingdata",this.$route.params.item)}}},125:function(t,e,a){"use strict";var n=a(22),o=a.n(n),i=a(18),c=a(51);e.a={props:["auth","authenticated"],data:function(){return{docObj:"",docUrl:"",dialog:!1,course_name:"",course_description:"",vimeoId:"",courseFee:"",f1:!1}},methods:o()({},Object(i.c)(["uploaddata","goTo"]),{uploaddoc:function(t){this.docObj=t.target.files[0],this.docUrl=URL.createObjectURL(t.target.files[0])}}),components:{btnLoader:c.a},computed:o()({},Object(i.b)(["btnLoader","patchUpdateDom","coursedata"]),{update_f1:function(){return this.f1=this.$store.state.gen.f1,this.f1}}),watch:{f1:function(){this.f1&&(this.course_name="",this.course_description="",this.docObj="",this.docUrl="",document.getElementById("uploaddoc").value="",this.vimeoId="",this.courseFee="",this.dialog=!1)}}}},126:function(t,e,a){"use strict";e.a={name:"Unauth",data:function(){return{}}}},127:function(t,e,a){"use strict";var n=a(22),o=a.n(n),i=a(18),c=a(51),r=a(37);e.a={props:["auth","authenticated"],data:function(){return{d1:!1,d2:!1,d3:!1,d4:!1,name:"",desc:"",docObj:"",docUrl:"",videoUrl:"",f1:!1,key:"",value:"https://player.vimeo.com/video/257497540?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0"}},methods:o()({},Object(i.c)(["updatename","updatedesc","updatedocUrl","updatevideoUrl"])),components:{btnLoader:c.a,loader:r.a},computed:o()({},Object(i.b)(["btnLoader","patchUpdateDom","loader","coursedata"])),watch:{},created:function(){this.$store.commit("gettrainingdata",this.$route.params.item)}}},128:function(t,e,a){"use strict";var n=a(22),o=a.n(n),i=a(18),c=a(50),r=a.n(c),s=a(37);e.a={name:"user",props:["auth","authenticated"],data:function(){return{}},methods:o()({},Object(i.c)(["goTo"]),{getname:function(){var t=localStorage.getItem("id_token");return r()(t).nickname},getemailid:function(){var t=localStorage.getItem("id_token");return r()(t).email}}),components:{loader:s.a},computed:o()({},Object(i.b)(["loader","purchasedcourse"])),watch:{},created:function(){this.$store.commit("getorders")}}},176:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(61),o=a(178),i=a(67),c=a(292),r=a.n(c),s=a(293),l=(a.n(s),a(294)),d=(a.n(l),a(295)),u=(a.n(d),a(296)),p=(a.n(u),a(297)),v=a(36),m=(a.n(v),a(330));n.a.config.productionTip=!1,n.a.use(r.a),new n.a({el:"#app",router:i.a,store:p.a,template:"<App/>",components:{App:o.a},created:function(){this.$store.state.gen.firebaseApp=m.initializeApp(v.FirebaseConfig),this.$store.state.gen.storage=m.storage()}})},178:function(t,e,a){"use strict";var n=a(92),o=a(291),i=a(4),c=i(n.a,o.a,!1,null,null,null);e.a=c.exports},179:function(t,e,a){"use strict";var n=a(180),o=a.n(n),i=a(182),c=a.n(i),r=a(183),s=a.n(r),l=a(189),d=a.n(l),u=a(36),p=(a.n(u),a(224)),v=a.n(p),m=a(67),h=a(50),f=a.n(h),b=function(){function t(){c()(this,t),this.authenticated=this.isAuthenticated(),this.authNotifier=new v.a,this.auth0=new d.a.WebAuth({domain:u.AUTH_CONFIG.domain,clientID:u.AUTH_CONFIG.clientId,redirectUri:u.AUTH_CONFIG.callbackUrl,audience:"https://"+u.AUTH_CONFIG.domain+"/userinfo",responseType:"token id_token",scope:"openid profile email"}),this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this)}return s()(t,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var t=this;this.auth0.parseHash(function(e,a){if(a&&a.accessToken&&a.idToken){t.setSession(a);f()(a.idToken)["http://mz02testis_admin"]?m.a.push("Admin"):m.a.push("User")}else e&&(m.a.push("User"),console.log(a))})}},{key:"setSession",value:function(t){var e=o()(1e3*t.expiresIn+(new Date).getTime());localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("expires_at",e),this.authNotifier.emit("authChange",{authenticated:!0}),f()(t.idToken)["http://mz02testis_admin"]?localStorage.setItem("isadmin",!0):localStorage.setItem("isadmin",!1)}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),this.userProfile=null,this.authNotifier.emit("authChange",!1),m.a.push("/logout")}},{key:"isAuthenticated",value:function(){var t=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<t}}]),t}();e.a=b},226:function(t,e,a){"use strict";function n(t){a(227)}var o=a(108),i=a(259),c=a(4),r=n,s=c(o.a,i.a,!1,r,"data-v-61ffe155",null);e.a=s.exports},227:function(t,e){},240:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"sk-cube-grid"},[a("div",{staticClass:"sk-cube sk-cube1"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube2"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube3"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube4"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube5"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube6"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube7"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube8"}),t._v(" "),a("div",{staticClass:"sk-cube sk-cube9"})])])}],i={render:n,staticRenderFns:o};e.a=i},259:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?a("div",[t.loader?a("loader"):a("div",[a("div",{staticClass:"pb-5",attrs:{align:"right"}},[a("h4",[a("pre",[t._v("            "),a("h4",[t._v(" Hi "+t._s(t.getname())+" ")]),t._v("\n            "),a("h4",[t._v(" "+t._s(t.getemailid())+" ")]),t._v("\n          ")])]),t._v(" "),t.authenticated?t._e():a("h4",[t._v("\n          You are not logged in! Please Log In to continue.\n        ")])]),t._v(" "),a("v-layout",[a("v-expansion-panel",{staticClass:"expansion-panel-remove-shadow",attrs:{inset:""}},t._l(t.coursedata,function(e,n){return a("v-expansion-panel-content",{key:n,attrs:{"hide-actions":""}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",[a("v-layout",[a("v-flex",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline mb-0",on:{click:function(a){t.goTo("/ViewTrainingDataUser/"+e.name)}}},[t._v(t._s(e.name))]),t._v(" "),a("v-btn",{attrs:{flat:""},on:{click:function(a){t.createpayment(e.amount,e.name)}}},[t._v("\n                          Paypal\n                        ")])],1)])],1)],1)],1)])])}))],1)],1)],1):a("div",[t._v("\n  Unauthorised Access\n")])])},o=[],i={render:n,staticRenderFns:o};e.a=i},260:function(t,e,a){"use strict";function n(t){a(261)}var o=a(119),i=a(262),c=a(4),r=n,s=c(o.a,i.a,!1,r,null,null);e.a=s.exports},261:function(t,e){},262:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h2",{attrs:{align:"center"}},[t._v("Please wait while we set your session")])])}],i={render:n,staticRenderFns:o};e.a=i},263:function(t,e,a){"use strict";function n(t){a(264)}var o=a(120),i=a(265),c=a(4),r=n,s=c(o.a,i.a,!1,r,"data-v-632f3d25",null);e.a=s.exports},264:function(t,e){},265:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pb-5 pt-5",attrs:{align:"center"}},[a("h1",[t._v(" This is for demo purpose"),a("br"),a("br")]),t._v(" "),a("h4",[t._v("\n        The admin panel here contain the features to upload the documents and the videos."),a("br"),t._v("\n        The login button authenticates the user with the API auth0."),a("br"),t._v(" And there you have access to the documents and the videos."),a("br"),t._v("\n        The training data is fetched from the database mongodb.\n    ")])])])}],i={render:n,staticRenderFns:o};e.a=i},266:function(t,e,a){"use strict";function n(t){a(267)}var o=a(121),i=a(269),c=a(4),r=n,s=c(o.a,i.a,!1,r,"data-v-46f2f750",null);e.a=s.exports},267:function(t,e){},268:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{attrs:{color:"secondary",loading:!0,flat:"",fab:"",small:""}})],1)},o=[],i={render:n,staticRenderFns:o};e.a=i},269:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated&&t.isAdmin?a("div",[t.loader?a("loader"):a("div",[a("div",{attrs:{align:"center"}},[a("br"),t._v(" "),a("h3",[t._v("To add new training course click the button below\n      "),a("v-btn",{staticStyle:{"background-color":"#294069"},attrs:{flat:""},on:{click:function(e){t.goTo("/AddData")}}},[t._v("\n        Add Course\n      ")])],1),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{align:"center"}},[t._v("\n      Available Courses\n    ")])])]),t._v(" "),a("v-layout",[a("v-expansion-panel",{staticClass:"expansion-panel-remove-shadow",attrs:{inset:""}},t._l(t.coursedata,function(e,n){return a("v-expansion-panel-content",{key:n,attrs:{"hide-actions":""}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",[a("v-layout",[a("v-flex",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline mb-0",on:{click:function(a){t.goTo("/ViewTrainingData/"+e.name)}}},[t._v(t._s(e.name))])])])],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",fab:"",small:"",color:"red"},on:{click:function(a){t.dialog=!0,t.name=e.name,t.key=n}}},[a("v-icon",[t._v("delete")])],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticStyle:{"background-color":"#f0f0f0"}},[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(e){t.deldata({name:t.name,key:t.key}),t.dialog=!1}}},[t._v("Yes")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("No")])],1)],1)],1)],1)],1)])])}))],1)],1):a("div",[t._v("\n    Unauthorised Access\n  ")]),t._v(" "),a("div",{staticStyle:{visibility:"hidden"}},[t._v(t._s(t.patchUpdateDom))])])},o=[],i={render:n,staticRenderFns:o};e.a=i},270:function(t,e,a){"use strict";function n(t){a(271)}var o=a(122),i=a(272),c=a(4),r=n,s=c(o.a,i.a,!1,r,null,null);e.a=s.exports},271:function(t,e){},272:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h2",{attrs:{align:"center"}},[t._v("You have successfully logged out")])])}],i={render:n,staticRenderFns:o};e.a=i},273:function(t,e,a){"use strict";function n(t){a(274)}var o=a(123),i=a(275),c=a(4),r=n,s=c(o.a,i.a,!1,r,"data-v-329bd888",null);e.a=s.exports},274:function(t,e){},275:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{staticStyle:{width:"600",height:"200"},model:{value:t.d1,callback:function(e){t.d1=e},expression:"d1"}},[a("form",{attrs:{method:"POST",action:t.video_redirect,enctype:"multipart/form-data"}},[a("label",{staticStyle:{"margin-left":"17px"},attrs:{for:"file"}},[a("input",{attrs:{type:"file",name:"file_data",id:"file"}}),t._v(" "),a("br")]),t._v(" "),a("input",{attrs:{type:"submit",name:"submit",value:"Submit"}})])]),t._v(" "),a("v-btn",{staticClass:"fixed-floating-button white--text",staticStyle:{"background-color":"#35495E"},attrs:{fab:"",absolute:"",fixed:""},on:{click:function(e){t.callupload()}}},[a("v-icon",[t._v("add")])],1)],1)},o=[],i={render:n,staticRenderFns:o};e.a=i},276:function(t,e,a){"use strict";function n(t){a(277)}var o=a(124),i=a(278),c=a(4),r=n,s=c(o.a,i.a,!1,r,"data-v-173db640",null);e.a=s.exports},277:function(t,e){},278:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated&&t.isAdmin?a("div",[a("br"),t._v(" "),a("h2",{attrs:{align:"center"}},[t._v("\n   Course Detail\n ")]),t._v(" "),a("br"),t._v(" "),t.loader?a("loader"):a("div",{attrs:{align:"center"}},[t._l(t.coursedata,function(e,n){return a("div",{key:n,staticClass:"border border-dark",attrs:{align:"center"}},[a("table",{staticStyle:{width:"95%",border:"1px solid black","border-collapse":"collapse"}},[a("tr",[a("th",{staticClass:"headline",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("Name of the course")]),t._v(" "),a("th",{staticClass:"title",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v(t._s(e.name))]),t._v(" "),a("th",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[a("v-btn",{staticStyle:{"background-color":"#35495E"},attrs:{flat:""},on:{click:function(a){t.callupdatename(e.name)}}},[a("v-icon",[t._v("edit")])],1)],1)]),t._v(" "),a("tr",[a("th",{staticClass:"headline",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("Course Description")]),t._v(" "),a("th",{staticClass:"title",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v(t._s(e.desc))]),t._v(" "),a("th",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[a("v-btn",{staticStyle:{"background-color":"#35495E"},attrs:{flat:""},on:{click:function(a){t.callupdatedesc(e.name,e.desc)}}},[a("v-icon",[t._v("edit")])],1)],1)]),t._v(" "),a("tr",[a("th",{staticClass:"headline",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("Course material")]),t._v(" "),a("th",{staticClass:"title",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[a("iframe",{staticStyle:{overflow:"hidden",width:"400px",height:"300px"},attrs:{src:e.docUrl,scrolling:"no"}})]),t._v(" "),a("th",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[a("v-btn",{staticStyle:{"background-color":"#35495E"},attrs:{flat:""},on:{click:function(a){t.callupdatedocUrl(e.name,e.docurl)}}},[a("v-icon",[t._v("edit")])],1)],1)]),t._v(" "),a("tr",[a("th",{staticClass:"headline",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("Course video")]),t._v(" "),a("th",{staticClass:"title",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[a("iframe",{attrs:{src:e.vimeoId,width:"400",height:"300",frameborder:"0",title:"Untitled",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),t._v(" "),a("th",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[a("v-btn",{staticStyle:{"background-color":"#35495E"},attrs:{flat:""},on:{click:function(a){t.callupdatevideoUrl(e.name,e.vimeoId)}}},[a("v-icon",[t._v("edit")])],1)],1)])])])}),t._v(" "),a("v-dialog",{attrs:{maxWidth:"600"},model:{value:t.d1,callback:function(e){t.d1=e},expression:"d1"}},[a("v-card",{staticClass:"pa-4",staticStyle:{"background-color":"#F0F0F0"}},[a("v-text-field",{attrs:{label:"Name of course"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),t.btnLoader?a("btnLoader"):a("v-btn",{attrs:{flat:""},on:{click:function(e){t.updatename({name:t.name,key:t.key})}}},[t._v("\n         Update Name\n       ")])],1)],1),t._v(" "),a("v-dialog",{attrs:{maxWidth:"600"},model:{value:t.d2,callback:function(e){t.d2=e},expression:"d2"}},[a("v-card",{staticClass:"pa-4",staticStyle:{"background-color":"#F0F0F0"}},[a("v-text-field",{attrs:{label:"Short Description","multi-line":""},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}}),t._v(" "),t.btnLoader?a("btnLoader"):a("v-btn",{attrs:{flat:""},on:{click:function(e){t.updatedesc({desc:t.desc,key:t.key})}}},[t._v("\n         Update Description\n       ")])],1)],1),t._v(" "),a("v-dialog",{attrs:{maxWidth:"600"},model:{value:t.d3,callback:function(e){t.d3=e},expression:"d3"}},[a("v-card",{staticClass:"pa-4",staticStyle:{"background-color":"#F0F0F0"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:""!=t.docUrl,expression:" docUrl != '' "}],staticClass:"text-xs-center",attrs:{flat:""}},[a("a",{attrs:{href:t.docUrl,target:"_blank"}},[t._v("Click here to view document ")])]),t._v(" "),a("v-card-actions",[a("label",{staticStyle:{"margin-left":"17px"},attrs:{id:"#bb1"}},[a("v-icon",{staticClass:"white--text"},[t._v("\n             file_upload\n           ")]),t._v(" "),a("input",{attrs:{type:"file",name:"doc",accept:"*",id:"uploaddoc"},on:{change:function(e){t.uploaddoc(e)}}})],1),t._v(" "),a("span",{staticClass:"caption"},[t._v("Upload Document")])]),t._v(" "),t.btnLoader?a("btnLoader"):a("v-btn",{attrs:{flat:""},on:{click:function(e){t.updatedocUrl({docObj:t.docObj,docUrl:t.docUrl,key:t.key})}}},[t._v("\n         Update Document\n       ")])],1)],1),t._v(" "),a("v-dialog",{attrs:{maxWidth:"600"},model:{value:t.d4,callback:function(e){t.d4=e},expression:"d4"}},[a("v-card",{staticClass:"pa-4",staticStyle:{"background-color":"#F0F0F0"}},[a("v-text-field",{attrs:{label:"Vimeo ID"},model:{value:t.vimeoId,callback:function(e){t.vimeoId=e},expression:"vimeoId"}}),t._v(" "),t.btnLoader?a("btnLoader"):a("v-btn",{attrs:{flat:""},on:{click:function(e){t.updatevideoUrl({vimeoId:t.vimeoId,key:t.key})}}},[t._v("\n         Update Vimeo Id\n       ")])],1)],1),t._v(" "),a("div",{staticStyle:{visibility:"hidden"}},[t._v(" "+t._s(t.update_f1)+" "+t._s(t.update_f2)+" "+t._s(t.update_f3)+" "+t._s(t.update_f4))])],2)],1):t._e()])},o=[],i={render:n,staticRenderFns:o};e.a=i},279:function(t,e,a){"use strict";function n(t){a(280)}var o=a(125),i=a(281),c=a(4),r=n,s=c(o.a,i.a,!1,r,"data-v-b63d4e48",null);e.a=s.exports},280:function(t,e){},281:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?a("div",[a("v-card",{staticClass:"pa-4",attrs:{flat:""}},[a("v-text-field",{attrs:{label:"Name of course"},model:{value:t.course_name,callback:function(e){t.course_name=e},expression:"course_name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Short Description","multi-line":""},model:{value:t.course_description,callback:function(e){t.course_description=e},expression:"course_description"}}),t._v(" "),a("v-text-field",{attrs:{label:"Vimeo ID"},model:{value:t.vimeoId,callback:function(e){t.vimeoId=e},expression:"vimeoId"}}),t._v(" "),a("v-text-field",{attrs:{label:"Course Fee"},model:{value:t.courseFee,callback:function(e){t.courseFee=e},expression:"courseFee"}}),t._v(" "),a("v-card",{directives:[{name:"show",rawName:"v-show",value:""!=t.docUrl,expression:" docUrl != '' "}],staticClass:"text-xs-center",attrs:{flat:""}},[a("a",{attrs:{href:t.docUrl,target:"_blank"}},[t._v("Click here to view document ")])]),t._v(" "),a("v-card-actions",[a("label",{staticStyle:{"margin-left":"17px"},attrs:{id:"#bb1"}},[a("v-icon",{staticClass:"white--text"},[t._v("\n            file_upload\n          ")]),t._v(" "),a("input",{attrs:{type:"file",name:"doc",accept:"*",id:"uploaddoc"},on:{change:function(e){t.uploaddoc(e)}}})],1),t._v(" "),a("span",{staticClass:"caption"},[t._v("Upload Document")])]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),t.btnLoader?a("btnLoader"):a("v-btn",{attrs:{flat:""},on:{click:function(e){t.uploaddata({name:t.course_name,description:t.course_description,docObj:t.docObj,docUrl:t.docUrl,vimeoId:t.vimeoId,courseFee:t.courseFee})}}},[t._v("\n            Add\n          ")])],1)],1),t._v(" "),a("div",{staticStyle:{visibility:"hidden"}},[t._v(" "+t._s(t.update_f1)+" "+t._s(t.patchUpdateDom))])],1):a("div",[t._v("\n   Unauthorised Access\n ")])])},o=[],i={render:n,staticRenderFns:o};e.a=i},282:function(t,e,a){"use strict";function n(t){a(283)}var o=a(126),i=a(284),c=a(4),r=n,s=c(o.a,i.a,!1,r,null,null);e.a=s.exports},283:function(t,e){},284:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h2",{attrs:{align:"center"}},[t._v("Unauthorized")])])}],i={render:n,staticRenderFns:o};e.a=i},285:function(t,e,a){"use strict";function n(t){a(286)}var o=a(127),i=a(287),c=a(4),r=n,s=c(o.a,i.a,!1,r,"data-v-0be05cec",null);e.a=s.exports},286:function(t,e){},287:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?a("div",[a("br"),t._v(" "),a("h2",{attrs:{align:"center"}},[t._v("\n   Course Detail\n ")]),t._v(" "),a("br"),t._v(" "),t.loader?a("loader"):a("div",{attrs:{align:"center"}},t._l(t.coursedata,function(e,n){return a("div",{key:n,staticClass:"border border-dark",attrs:{align:"center"}},[a("table",{staticStyle:{width:"95%",border:"1px solid black","border-collapse":"collapse"}},[a("tr",[a("th",{staticClass:"headline",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("Name of the course")]),t._v(" "),a("th",{staticClass:"title",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v(t._s(e.name))])]),t._v(" "),a("tr",[a("th",{staticClass:"headline",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("Course Description")]),t._v(" "),a("th",{staticClass:"title",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v(t._s(e.desc))])]),t._v(" "),a("tr",[a("th",{staticClass:"headline",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("Course material")]),t._v(" "),a("th",{staticClass:"title",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[a("iframe",{staticStyle:{overflow:"hidden",width:"400px",height:"300px"},attrs:{src:e.docUrl,scrolling:"no"}})])]),t._v(" "),a("tr",[a("th",{staticClass:"headline",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[t._v("Course video")]),t._v(" "),a("th",{staticClass:"title",staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[a("iframe",{attrs:{src:e.vimeoId,width:"400",height:"300",frameborder:"0",title:"Untitled",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])])])])}))],1):a("div",[t._v("\n  Unauthorised Access\n")])])},o=[],i={render:n,staticRenderFns:o};e.a=i},288:function(t,e,a){"use strict";function n(t){a(289)}var o=a(128),i=a(290),c=a(4),r=n,s=c(o.a,i.a,!1,r,"data-v-fe4f6c14",null);e.a=s.exports},289:function(t,e){},290:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?a("div",[t.loader?a("loader"):a("div",[a("div",{staticClass:"pb-5",attrs:{align:"right"}},[a("h4",[a("pre",[t._v("            "),a("h4",[t._v(" Hi "+t._s(t.getname())+" ")]),t._v("\n            "),a("h4",[t._v(" "+t._s(t.getemailid())+" ")]),t._v("\n          ")])]),t._v(" "),t.authenticated?t._e():a("h4",[t._v("\n          You are not logged in! Please Log In to continue.\n        ")])]),t._v(" "),a("v-layout",[a("v-expansion-panel",{staticClass:"expansion-panel-remove-shadow",attrs:{inset:""}},t._l(t.purchasedcourse,function(e,n){return a("v-expansion-panel-content",{key:n,attrs:{"hide-actions":""}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",[a("v-layout",[a("v-flex",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline mb-0",on:{click:function(a){t.goTo("/ViewTrainingDataUser/"+e.name)}}},[t._v(t._s(e.name)+"\n                        ")])])])],1)],1)],1)])])}))],1)],1)],1):a("div",[t._v("\n  Unauthorised Access\n")])])},o=[],i={render:n,staticRenderFns:o};e.a=i},291:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("div",{attrs:{align:"right"}},[a("button",{staticClass:"btn btn-primary btn-margin",on:{click:function(e){t.Home()}}},[t._v("\n            Home\n        ")]),t._v(" "),t.authenticated?t._e():a("button",{staticClass:"btn btn-primary btn-margin",on:{click:function(e){t.login()}}},[t._v("\n          Log In\n      ")]),t._v(" "),t.authenticated?a("button",{staticClass:"btn btn-primary btn-margin",on:{click:function(e){t.logout()}}},[t._v("\n          Log Out\n      ")]):t._e()])]),t._v(" "),a("main",[a("router-view",{attrs:{auth:t.auth,authenticated:t.authenticated}})],1)])},o=[],i={render:n,staticRenderFns:o};e.a=i},293:function(t,e){},294:function(t,e){},295:function(t,e){},296:function(t,e){},297:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a(61),o=a(18),i=a(298);n.a.use(o.a);var c=new o.a.Store({modules:{gen:i.a}})},298:function(t,e,a){"use strict";var n=a(299),o=a.n(n),i=a(326),c=a.n(i),r=a(67),s=a(74),l=a.n(s),d=a(36),u=(a.n(d),a(50)),p=a.n(u),v={btnLoader:!1,firebaseApp:{},storage:{},coursedata:{},isAdmin:null,purchasedcourse:{},patchUpdateDom:!1,loader:!1,f1:!1},m={btnLoader:function(t){return t.btnLoader},loader:function(t){return t.loader},isAdmin:function(t){return t.isAdmin},patchUpdateDom:function(t){return t.patchUpdateDom},coursedata:function(t){return t.coursedata},purchasedcourse:function(t){return t.purchasedcourse}},h={goTo:function(t,e){r.a.push(e)},uploaddata:function(t,e){f.checkEmptyField(e.name).then(function(a){a&&f.checkEmptyField(e.description).then(function(a){a&&f.checkEmptyField(e.docUrl).then(function(a){a&&f.checkEmptyField(e.vimeoId).then(function(a){a&&f.checkEmptyField(e.courseFee).then(function(a){if(a){t.btnLoader=!0;var n={x:e.docObj,y:e.docUrl};f.uploaddoc(t,n).then(function(a){if(a){var n=d.ServerUrl.url,o=n+"uploaddata";l.a.get(o,{params:{name:e.name,description:e.description,docUrl:a,vimeoId:e.vimeoId,courseFee:e.courseFee}}).then(function(e){var a="";for(var n in e.data)a=e.data[n].Name,t.coursedata[e.data[n]._id]={name:e.data[n].Name};t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,h.goTo(t,"/ViewTrainingData/"+a)}).catch(function(e){console.log(e),t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1})}})}})})})})})},insertdata:function(t,e){t.loader=!0,console.log(e);var a=e.videoUrl.slice(8),n="https://player.vimeo.com/video/video_id?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0",o=n.replace("video_id",a),i=d.ServerUrl.url;console.log(i);var c=i+"uploadvideoUrl";l.a.get(c,{params:{name:e.name,videoUrl:o}}).then(function(e){console.log(e),t.coursedata[e.data._id]={name:e.data.name,videoUrl:e.data.videoUrl},console.log(t.coursedata),t.btnLoader=!1,t.loader=!1}).catch(function(e){console.log(e),t.btnLoader=!1,t.loader=!1})},getdata:function(t){t.loader=!0,t.coursedata={};var e=localStorage.getItem("id_token"),a=p()(e);t.isAdmin=a["http://mz02testis_admin"],console.log(t.isAdmin);var n=d.ServerUrl.url,o=n+"getdata";l.a.get(o).then(function(e){var a=e.data.length;console.log(a);var n=0,o=0;for(n in e.data)console.log(e.data[n]),t.coursedata[e.data[n]._id]={name:e.data[n].Name,amount:e.data[n].courseFee},o++,console.log(n),o===a&&(console.log(n),t.loader=!1,t.patchUpdateDom=!t.patchUpdateDom)}).catch(function(e){console.log(e),t.loader=!1,t.patchUpdateDom=!t.patchUpdateDom})},gettrainingdata:function(t,e){console.log(e),t.coursedata={},t.loader=!0;var a=localStorage.getItem("id_token"),n=p()(a);t.isAdmin=n["http://mz02testis_admin"];var o=d.ServerUrl.url,i=o+"gettrainingdata";l.a.get(i,{params:{name:e}}).then(function(e){console.log(e.data),t.coursedata[e.data._id]={name:e.data.Name,desc:e.data.Desc,docUrl:e.data.Docurl,vimeoId:e.data.Vimeoid},t.loader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.loader=!1,t.patchUpdateDom=!t.patchUpdateDom})},updatename:function(t,e){t.coursedata={},console.log(e),t.btnLoader=!0;var a=d.ServerUrl.url,n=a+"updatename";l.a.get(n,{params:{name:e.name,key:e.key}}).then(function(e){console.log(e.data),t.coursedata[e.data._id]={name:e.data.Name,desc:e.data.Desc,docUrl:e.data.Docurl},t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom})},updatedesc:function(t,e){t.coursedata={},console.log(e),t.btnLoader=!0;var a=d.ServerUrl.url,n=a+"updatedesc";l.a.get(n,{params:{desc:e.desc,key:e.key}}).then(function(e){console.log(e.data),t.coursedata[e.data._id]={name:e.data.Name,desc:e.data.Desc,docUrl:e.data.Docurl,vimeoId:e.data.Vimeoid},t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom})},updatedocUrl:function(t,e){t.coursedata={},console.log(e),t.btnLoader=!0;var a=d.ServerUrl.url,n=a+"updatedocUrl",o={x:e.docObj,y:e.docUrl};f.uploaddoc(t,o).then(function(a){a&&l.a.get(n,{params:{docUrl:a,key:e.key}}).then(function(e){console.log(e.data),t.coursedata[e.data._id]={name:e.data.Name,desc:e.data.Desc,docUrl:e.data.Docurl,vimeoId:e.data.Vimeoid},t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom})})},updatevideoUrl:function(t,e){t.coursedata={},console.log(e),t.btnLoader=!0;var a=d.ServerUrl.url,n=a+"updatevideoUrl";l.a.get(n,{params:{vimeoId:e.vimeoId,key:e.key}}).then(function(e){console.log(e.data),t.coursedata[e.data._id]={name:e.data.Name,desc:e.data.Desc,docUrl:e.data.Docurl,vimeoId:e.data.Vimeoid},t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.f1=!0,setTimeout(function(){t.f1=!1},1e3),t.btnLoader=!1,t.patchUpdateDom=!t.patchUpdateDom})},deldata:function(t,e){console.log(e);var a=d.ServerUrl.url,n=a+"deletedata";l.a.get(n,{params:{name:e.name}}).then(function(a){console.log(a.data),delete t.coursedata[e.key],t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.patchUpdateDom=!t.patchUpdateDom})},getorders:function(t){t.purchasedcourse={};var e=d.ServerUrl.url;if(0===c()(r.a.currentRoute.query).length){var a=e+"getorders";l.a.get(a).then(function(e){console.log(e.data),t.purchasedcourse[e.data._id]={name:e.data.Name},t.loader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.patchUpdateDom=!t.patchUpdateDom})}else{var n=r.a.currentRoute.query.paymentId,o=r.a.currentRoute.query.token,i=r.a.currentRoute.query.PayerID,s=localStorage.getItem("id_token"),u=p()(s),v=u.email,m=u.nickname;console.log(v+"@@@"+m+"$$$$"+s);var h=e+"insertorders";l.a.get(h,{params:{paymentId:n,token:o,PayerID:i,emailId:v,name:m}}).then(function(e){console.log(e.data),t.purchasedcourse[e.data._id]={name:e.data.Name},t.loader=!1,t.patchUpdateDom=!t.patchUpdateDom}).catch(function(e){console.log(e),t.patchUpdateDom=!t.patchUpdateDom})}}},f={checkEmptyField:function(t,e){return new o.a(function(t){/([^\s])/.test(e)?t(!0):(t(!1),alert("Empty Field !"))})},uploaddoc:function(t,e){return console.log(e),new o.a(function(a){var n=t.storage.ref("Documents/"+e.y.slice(e.y.lastIndexOf("/")+1)).put(e.x);n.on("state_changed",function(t){},function(t){console.log(t)},function(){console.log(n.snapshot.downloadURL),a(n.snapshot.downloadURL)})})}};e.a={mutations:h,state:v,getters:m,actions:f}},36:function(t,e){e.FirebaseConfig={apiKey:"AIzaSyAY4fRwC0AVSyHUZqZycAcvQ7ZY8QjbMRY",authDomain:"mindzcloud-ce294.firebaseapp.com",databaseURL:"https://mindzcloud-ce294.firebaseio.com",projectId:"mindzcloud-ce294",storageBucket:"mindzcloud-ce294.appspot.com",messagingSenderId:"597233426287"},e.AUTH_CONFIG={clientId:"p1uly3n8G1B62PO0vP9SwM3QTFKIOSuM",domain:"mindzcloudtest.auth0.com",callbackUrl:"https://mz02test.herokuapp.com/callback",apiUrl:"API_IDENTIFIER"},e.ServerUrl={url:"https://mz02test.herokuapp.com/"},e.PaypalConfig={mode:"sandbox",client_id:"AXKxKs5TFqmkfBKglkPWqLQuIYO70NBkDzbdwolAA4y6HwXLjn7OCxIpzMVKifZnlbByjXsEJMzW70W1",client_secret:"EP-HcKxIs2RxxFDJppX_-7SrqeKFLggyCZuL-95Zl3ULQKfpMha4bzswasPweY_r1ryjwz-p7QloZmIV"}},37:function(t,e,a){"use strict";var n=a(240),o=a(4),i=o(null,n.a,!1,null,null,null);e.a=i.exports},51:function(t,e,a){"use strict";var n=a(268),o=a(4),i=o(null,n.a,!1,null,null,null);e.a=i.exports},67:function(t,e,a){"use strict";var n=a(61),o=a(225),i=a(226),c=a(260),r=a(263),s=a(266),l=a(270),d=a(273),u=a(276),p=a(279),v=a(282),m=a(285),h=a(288);n.a.use(o.a),e.a=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:r.a},{path:"/ViewTrainingDataUser/:item",name:"ViewTrainingDataUser",component:m.a},{path:"/home",name:"Home",component:r.a},{path:"/Unauth",name:"Unauth",component:v.a},{path:"/admin",name:"Admin",component:s.a},{path:"/logout",name:"Logout",component:l.a},{path:"/user",name:"User",component:i.a},{path:"/callback",name:"Callback",component:c.a},{path:"/video/:item",name:"video",component:d.a},{path:"/ViewTrainingData/:item",name:"ViewTrainingData",component:u.a},{path:"/AddData",name:"AddData",component:p.a},{path:"/Orders",name:"Orders",component:h.a}]})},92:function(t,e,a){"use strict";var n=a(179),o=new n.a,i=o.login,c=o.logout,r=o.authenticated,s=o.authNotifier;e.a={name:"app",data:function(){var t=this;return s.on("authChange",function(e){t.authenticated=e.authenticated}),{auth:o,authenticated:r}},methods:{login:i,logout:c,Home:function(){this.$router.push("Home")}}}}},[176]);
//# sourceMappingURL=app.c845d4e4f5e52c2bf207.js.map