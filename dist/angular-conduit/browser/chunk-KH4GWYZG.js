import{a as B}from"./chunk-KBXSLFDC.js";import{a as z}from"./chunk-44BUM23C.js";import{$a as A,Aa as l,Ba as _,C as k,Fa as U,Ga as f,Ha as g,O as w,P as L,U as P,V as b,Z as E,ab as T,bb as j,ca as F,cb as O,da as n,db as D,ea as p,fb as M,gb as V,h as x,i as C,l as y,la as v,ma as a,oa as c,sa as r,t as S,ta as o,ua as m,va as I,wa as R,xa as u}from"./chunk-IKINXWTP.js";import"./chunk-2VMXMS7J.js";var N=()=>({exact:!0}),G=t=>["/profile",t],H=t=>["/profile",t,"favorites"],J=()=>["/settings"];function K(t,h){if(t&1){let e=I();r(0,"app-follow-button",12),R("toggle",function(s){P(e);let d=u(2);return b(d.onToggleFollowing(s))}),o()}if(t&2){let e=u(2);a("profile",e.profile)}}function Q(t,h){t&1&&(r(0,"a",7),m(1,"i",13),l(2," Edit Profile Settings "),o()),t&2&&a("routerLink",f(1,J))}function W(t,h){if(t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),m(5,"img",5),r(6,"h4"),l(7),o(),r(8,"p"),l(9),o(),v(10,K,1,1,"app-follow-button",6)(11,Q,3,2,"a",7),o()()()(),r(12,"div",2)(13,"div",3)(14,"div",4)(15,"div",8)(16,"ul",9)(17,"li",10)(18,"a",11),l(19," My Posts "),o()(),r(20,"li",10)(21,"a",11),l(22," Favorited Posts "),o()()()(),m(23,"router-outlet"),o()()()()),t&2){let e=u();n(5),a("src",e.profile.image,F),n(2),_(e.profile.username),n(2),_(e.profile.bio),n(),c(e.isUser?-1:10),n(),c(e.isUser?11:-1),n(7),a("routerLinkActiveOptions",f(9,N))("routerLink",g(10,G,e.profile.username)),n(3),a("routerLinkActiveOptions",f(12,N))("routerLink",g(13,H,e.profile.username))}}var q=(()=>{class t{constructor(e,i,s,d){this.route=e,this.router=i,this.userService=s,this.profileService=d,this.isUser=!1,this.destroyRef=w(E)}ngOnInit(){this.profileService.get(this.route.snapshot.params.username).pipe(S(e=>(this.router.navigate(["/"]),C(()=>e))),k(e=>y([x(e),this.userService.currentUser])),V(this.destroyRef)).subscribe(([e,i])=>{this.profile=e,this.isUser=e.username===i?.username})}onToggleFollowing(e){this.profile=e}static{this.\u0275fac=function(i){return new(i||t)(p(A),p(j),p(M),p(z))}}static{this.\u0275cmp=L({type:t,selectors:[["app-profile-page"]],standalone:!0,features:[U],decls:1,vars:1,consts:[[1,"profile-page"],[1,"user-info"],[1,"container"],[1,"row"],[1,"col-xs-12","col-md-10","offset-md-1"],[1,"user-img",3,"src"],[3,"profile"],[1,"btn","btn-sm","btn-outline-secondary","action-btn",3,"routerLink"],[1,"articles-toggle"],[1,"nav","nav-pills","outline-active"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions","routerLink"],[3,"toggle","profile"],[1,"ion-gear-a"]],template:function(i,s){i&1&&v(0,W,24,15,"div",0),i&2&&c(s.profile?0:-1)},dependencies:[B,O,D,T],encapsulation:2})}}return t})();var X=[{path:"",children:[{path:":username",component:q,children:[{path:"",loadComponent:()=>import("./chunk-MOEPYRLQ.js")},{path:"favorites",loadComponent:()=>import("./chunk-VO7ANTU3.js")}]}]}],ce=X;export{ce as default};
