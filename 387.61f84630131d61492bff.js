(self.webpackChunksmartwebredux=self.webpackChunksmartwebredux||[]).push([[387],{2387:(t,e,n)=>{"use strict";n.r(e),n.d(e,{NewsModule:()=>C});var i=n(8583),a=n(3735),r=n(5319),o=n(7716),c=n(9075),s=n(1088),g=n(4220),d=n(9546),_=n(5843),l=n(507);function m(t,e){if(1&t&&(o.TgZ(0,"option",14),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.Q6J("value",t.id),o.xp6(1),o.hij(" ",t.title," ")}}function p(t,e){if(1&t&&(o.TgZ(0,"div",11),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.TgZ(3,"select"),o.TgZ(4,"option",12),o._uU(5),o.qZA(),o.YNc(6,m,2,2,"option",13),o.qZA(),o.qZA()),2&t){const t=e.$implicit,n=o.oxw();o.xp6(2),o.Oqu(t.title),o.xp6(3),o.Oqu(n.message),o.xp6(1),o.Q6J("ngForOf",t.nodes)}}let u=(()=>{class t{constructor(t,e,n,i){this._titleService=t,this._apiJSONService=e,this._reduxService=n,this._store=i,this._subscription=new r.w,this.data=[],this.dataHeader=[],this.dataMenu=[],this.dataFilter=[],this.fullData=[],this.fullBreadcrumbs=[]}ngOnInit(){this._titleService.setTitle("Smart Suite Tools"),this.setSubscriptions(),this.message="es"===this.language?"Selecccione una opci\xf3n":"Please select an option"}setSubscriptions(){this._subscription.add(this._store.select("ui").subscribe(t=>{this.urlBreadcrumbs=t.urlBreadcrumbs,this.language=t.language})),this._subscription.add(this._store.select("api").subscribe(t=>{this.apiConNews=t.apiConNews.apiCon,this.fullData=t.arrayNews.apiArray,void 0!==this.apiConNews&&this.getDataAPI(this.language)}))}getDataAPI(t){this.apiConNews?this.getDataArray(this.fullData):this._apiJSONService.getJSON(t,"news",!0).subscribe(e=>{this.data=e,void 0!==this.data&&(this._reduxService.setArray("news",this.data,t),this.getDataArray(this.fullData))},t=>console.log("error",t),()=>{})}getDataArray(t){if(Object.keys(t).length>0)return this.data=t,this.dataHeader=this.data.header,this.dataMenu=this.data.menu,this.dataFilter=this.data.filter,this.data}ngOnDestroy(){this._subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c.Dx),o.Y36(s.vA),o.Y36(s.zY),o.Y36(g.yh))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-news"]],decls:13,vars:6,consts:[[1,"animate__animated","animate__fadeIn","contentPage"],[1,"contentPage__header"],[3,"data","type"],[1,"contentPage__breadcrumbs"],[1,"-mt-10"],[1,"breadcrumb_filter"],["class","breadcrumb_filter__container",4,"ngFor","ngForOf"],[1,"contentPage__content","contNews"],[1,"contentPage__content","contNews__left"],[1,"contentPage__content","contNews__right"],[3,"type","data"],[1,"breadcrumb_filter__container"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(o.TgZ(0,"section",0),o.TgZ(1,"header",1),o._UZ(2,"app-header",2),o.qZA(),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o._UZ(5,"app-breadcrumb",2),o.qZA(),o.TgZ(6,"div",5),o.YNc(7,p,7,3,"div",6),o.qZA(),o.qZA(),o.TgZ(8,"div",7),o.TgZ(9,"div",8),o._UZ(10,"router-outlet"),o.qZA(),o.TgZ(11,"div",9),o._UZ(12,"app-menu",10),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(2),o.Q6J("data",e.dataHeader)("type","news"),o.xp6(3),o.Q6J("type","page"),o.xp6(2),o.Q6J("ngForOf",e.dataFilter),o.xp6(5),o.Q6J("type","lateral")("data",e.dataMenu))},directives:[d.G,_.L,i.sg,a.lC,l.M],styles:[".contentPage[_ngcontent-%COMP%]{width:100%;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.contentPage.pag[_ngcontent-%COMP%]{margin-top:-6rem;background-color:initial}.contentPage__header[_ngcontent-%COMP%]{height:100%;width:100%;padding-bottom:.5rem}.contentPage__breadcrumbs[_ngcontent-%COMP%]{margin-left:2.5rem;margin-right:2.5rem;margin-bottom:1.25rem;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter[_ngcontent-%COMP%]{margin-top:1.25rem;display:flex;flex-direction:column;align-items:flex-end}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:1.25rem}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{border-radius:.375rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(107,114,128,var(--tw-border-opacity));padding:.25rem .5rem;outline:2px solid #0000;outline-offset:2px}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]:focus{outline:2px solid #0000;outline-offset:2px}.contentPage__content[_ngcontent-%COMP%]{padding-top:2.5rem;padding-bottom:2.5rem}.contentPage__content.cont[_ngcontent-%COMP%]{padding:.5rem 0}@media (min-width:768px){.contentPage__content.cont[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}}.contentPage__content.contNews[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;padding-top:1.25rem;padding-bottom:1.25rem}.contentPage__content.contNews__left[_ngcontent-%COMP%]{flex:1 1 0%;flex-direction:row;align-items:flex-start;justify-content:flex-start;padding:0}.contentPage__content.contNews__right[_ngcontent-%COMP%]{position:sticky;top:8rem;bottom:8rem;margin-right:.25rem;margin-left:2.5rem;display:none;align-items:center;justify-content:flex-end;padding:0}@media (min-width:768px){.contentPage__content.contNews__right[_ngcontent-%COMP%]{display:flex}}.contentPage__footer[_ngcontent-%COMP%]{margin-bottom:2.5rem}"]}),t})();var b=n(3160);let h=(()=>{class t{constructor(t,e){this._titleService=t,this._store=e,this._subscription=new r.w,this.data=[],this.dataNews=[],this.fullData=[]}ngOnInit(){this._titleService.setTitle("Smart Suite Tools"),this.setSubscriptions()}setSubscriptions(){this._subscription.add(this._store.select("ui").subscribe(t=>{this.urlBreadcrumbs=t.urlBreadcrumbs,this.loading=t.loading,this.language=t.language})),this._subscription.add(this._store.select("api").subscribe(t=>{this.apiConNews=t.apiConNews.apiCon,this.fullData=t.arrayNews.apiArray,void 0!==this.apiConNews&&this.getDataAPI(this.language)}))}getDataAPI(t){this.getDataArray(this.fullData)}getCategoryNews(t,e){return t.news.filter(t=>t.category===e)}getDataArray(t){if(Object.keys(t).length>0)return this.data=t,this.dataNews=void 0===this.urlBreadcrumbs[3]?this.data.news:this.getCategoryNews(t,this.urlBreadcrumbs[3]),this.data}ngOnDestroy(){this._subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c.Dx),o.Y36(g.yh))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-news-list"]],decls:2,vars:2,consts:[[1,"animate__animated","animate__fadeIn"],[3,"data","type"]],template:function(t,e){1&t&&(o.TgZ(0,"section",0),o._UZ(1,"app-content",1),o.qZA()),2&t&&(o.xp6(1),o.Q6J("data",e.dataNews)("type","news_home"))},directives:[b.S],styles:[".contentPage[_ngcontent-%COMP%]{width:100%;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.contentPage.pag[_ngcontent-%COMP%]{margin-top:-6rem;background-color:initial}.contentPage__header[_ngcontent-%COMP%]{height:100%;width:100%;padding-bottom:.5rem}.contentPage__breadcrumbs[_ngcontent-%COMP%]{margin-left:2.5rem;margin-right:2.5rem;margin-bottom:1.25rem;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter[_ngcontent-%COMP%]{margin-top:1.25rem;display:flex;flex-direction:column;align-items:flex-end}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:1.25rem}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{border-radius:.375rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(107,114,128,var(--tw-border-opacity));padding:.25rem .5rem;outline:2px solid #0000;outline-offset:2px}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]:focus{outline:2px solid #0000;outline-offset:2px}.contentPage__content[_ngcontent-%COMP%]{padding-top:2.5rem;padding-bottom:2.5rem}.contentPage__content.cont[_ngcontent-%COMP%]{padding:.5rem 0}@media (min-width:768px){.contentPage__content.cont[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}}.contentPage__content.contNews[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;padding-top:1.25rem;padding-bottom:1.25rem}.contentPage__content.contNews__left[_ngcontent-%COMP%]{flex:1 1 0%;flex-direction:row;align-items:flex-start;justify-content:flex-start;padding:0}.contentPage__content.contNews__right[_ngcontent-%COMP%]{position:sticky;top:8rem;bottom:8rem;margin-right:.25rem;margin-left:2.5rem;display:none;align-items:center;justify-content:flex-end;padding:0}@media (min-width:768px){.contentPage__content.contNews__right[_ngcontent-%COMP%]{display:flex}}.contentPage__footer[_ngcontent-%COMP%]{margin-bottom:2.5rem}"]}),t})();const f=[{path:"",component:u,children:[{path:"",component:h},{path:":cat",component:h},{path:"details/:id",component:(()=>{class t{constructor(t,e,n,i){this._titleService=t,this._apiJSONService=e,this._reduxService=n,this._store=i,this._subscription=new r.w,this.data=[],this.dataContent=[],this.fullData=[]}ngOnInit(){this._titleService.setTitle("Smart Suite Tools"),this.setSubscriptions()}setSubscriptions(){this._subscription.add(this._store.select("ui").subscribe(t=>{this.language=t.language})),this._subscription.add(this._store.select("api").subscribe(t=>{this.apiConNewsD=t.apiConNewsD.apiCon,this.fullData=t.arrayNewsD.apiArray,void 0!==this.apiConNewsD&&this.getDataAPI(this.language)}))}getDataAPI(t){this.apiConNewsD?this.getDataArray(this.fullData):this._apiJSONService.getJSON(t,"news_details",!0).subscribe(e=>{this.data=e,void 0!==this.data&&(this._reduxService.setArray("news_details",this.data,t),this.getDataArray(this.fullData))},t=>console.log("error",t),()=>{})}getDataArray(t){if(Object.keys(t).length>0)return this.data=t,this.dataContent=this.data.content,this.data}ngOnDestroy(){this._subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c.Dx),o.Y36(s.vA),o.Y36(s.zY),o.Y36(g.yh))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-news-detail"]],decls:2,vars:2,consts:[[1,"animate__animated","animate__fadeIn"],[3,"data","type"]],template:function(t,e){1&t&&(o.TgZ(0,"section",0),o._UZ(1,"app-content",1),o.qZA()),2&t&&(o.xp6(1),o.Q6J("data",e.dataContent)("type","news_detail"))},directives:[b.S],styles:[".contentPage[_ngcontent-%COMP%]{width:100%;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.contentPage.pag[_ngcontent-%COMP%]{margin-top:-6rem;background-color:initial}.contentPage__header[_ngcontent-%COMP%]{height:100%;width:100%;padding-bottom:.5rem}.contentPage__breadcrumbs[_ngcontent-%COMP%]{margin-left:2.5rem;margin-right:2.5rem;margin-bottom:1.25rem;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter[_ngcontent-%COMP%]{margin-top:1.25rem;display:flex;flex-direction:column;align-items:flex-end}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:1.25rem}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{border-radius:.375rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(107,114,128,var(--tw-border-opacity));padding:.25rem .5rem;outline:2px solid #0000;outline-offset:2px}.contentPage__breadcrumbs[_ngcontent-%COMP%]   .breadcrumb_filter__container[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]:focus{outline:2px solid #0000;outline-offset:2px}.contentPage__content[_ngcontent-%COMP%]{padding-top:2.5rem;padding-bottom:2.5rem}.contentPage__content.cont[_ngcontent-%COMP%]{padding:.5rem 0}@media (min-width:768px){.contentPage__content.cont[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}}.contentPage__content.contNews[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;padding-top:1.25rem;padding-bottom:1.25rem}.contentPage__content.contNews__left[_ngcontent-%COMP%]{flex:1 1 0%;flex-direction:row;align-items:flex-start;justify-content:flex-start;padding:0}.contentPage__content.contNews__right[_ngcontent-%COMP%]{position:sticky;top:8rem;bottom:8rem;margin-right:.25rem;margin-left:2.5rem;display:none;align-items:center;justify-content:flex-end;padding:0}@media (min-width:768px){.contentPage__content.contNews__right[_ngcontent-%COMP%]{display:flex}}.contentPage__footer[_ngcontent-%COMP%]{margin-bottom:2.5rem}"]}),t})()},{path:"**",pathMatch:"full",redirectTo:""}]}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.Bz.forChild(f)],a.Bz]}),t})();var w=n(4065);let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.ez,P,w.m]]}),t})()}}]);