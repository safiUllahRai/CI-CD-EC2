import{a as m}from"./chunk-EQE7EAOV.js";import"./chunk-OF6SPMWR.js";import{a as d}from"./chunk-44BUM23C.js";import"./chunk-R7MM33JK.js";import{$a as l,Fa as c,O as r,P as s,Z as n,ea as o,gb as f,ma as a,ua as p}from"./chunk-IKINXWTP.js";import"./chunk-2VMXMS7J.js";var R=(()=>{class i{constructor(t,e){this.route=t,this.profileService=e,this.destroyRef=r(n)}ngOnInit(){this.profileService.get(this.route.snapshot.params.username).pipe(f(this.destroyRef)).subscribe({next:t=>{this.profile=t,this.articlesConfig={type:"all",filters:{author:this.profile.username}}}})}static{this.\u0275fac=function(e){return new(e||i)(o(l),o(d))}}static{this.\u0275cmp=s({type:i,selectors:[["app-profile-articles"]],standalone:!0,features:[c],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(e,u){e&1&&p(0,"app-article-list",0),e&2&&a("limit",10)("config",u.articlesConfig)},dependencies:[m],encapsulation:2})}}return i})();export{R as default};
