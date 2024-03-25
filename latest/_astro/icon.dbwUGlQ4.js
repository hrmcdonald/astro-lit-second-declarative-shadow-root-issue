import{i as v,b as m,w as f,g as p,s as b,a1 as w,_ as o,n as l,r as y,o as u,d as I,$ as S,Y as h,a0 as d}from"./chunk.BDXXLFJI.Wz8REFjk.js";import{x as M}from"./directive.qvJfFQ74.js";var z={name:"alert-circle",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>'},E={name:"alert",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2 1 21Z"/></svg>'},L={name:"check-circle",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"/></svg>'},_={name:"close",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/></svg>'},B={name:"dots-horizontal",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 12a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2Z"/></svg>'},$={name:"help-rhombus",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m0 4.95c2.7.11 3.87 2.83 2.28 4.86-.42.5-1.09.83-1.43 1.26-.35.43-.35.93-.35 1.43H11c0-.85 0-1.56.35-2.06.33-.5 1-.8 1.42-1.13 1.23-1.13.91-2.72-.77-2.85-.82 0-1.5.67-1.5 1.51H9c0-1.67 1.35-3.02 3-3.02m-1 8.55h1.5V17H11v-1.5Z"/></svg>'},H={name:"information",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>'},U={name:"menu-right",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m10 17 5-5-5-5v10Z"/></svg>'},A={name:"menu",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/></svg>'},x=class{constructor(){this.iconRegistry=new Map,this.iconUrlResolvers=new Map,this.fallbackIcon=$?.data,this.lazyLoadEnabled=!0,this.testModeEnabled=!1,this.delimiter="~",this.iconUrlResolvers.set("_default",t=>`https://mortar-cdn.heb.com/icons/mdi/7.2/${t}.svg`),this.iconUrlResolvers.set("cx",t=>`https://mortar-cdn.heb.com/icons/cx/1.1/${t}.svg`),this.ssrInit().then(()=>{})}async ssrInit(){try{S()}catch{}}registerIconLibrary(t="_default",e){this.lazyLoadEnabled=!0,e&&this.iconUrlResolvers.set(t??"_default",e);for(const[s,r]of this.iconRegistry)if(!r||!r.get()?.fetched){const[a,n]=s.split(this.delimiter);this.fetchIcon(n,a).then(c=>{r.set({fetched:!0,data:c})})}}registerIcons(t,e="_default"){t.forEach(s=>{const r=this.iconRegistry.get(`${e}${this.delimiter}${s.name}`);r?r&&!r.get()?.fetched&&r.set({fetched:!0,data:s.data}):this.iconRegistry.set(`${e}${this.delimiter}${s.name}`,h({fetched:!0,data:s.data}))})}setLazyLoading(t=!0){this.lazyLoadEnabled=t}setTestMode(t=!1){this.testModeEnabled=t}setFallbackIcon(t){this.fallbackIcon=t}getIcon(t,e="_default",s){if(t===void 0)return h(this.fallbackIcon);const r=this.iconRegistry.get(`${e}${this.delimiter}${t}`),a=!!r;if(a)return d(r,n=>n?.data);if(!a&&this.lazyLoadEnabled){let n;return n=h({data:null,fetched:!1}),this.iconRegistry.set(`${e}${this.delimiter}${t}`,n),this.fetchIcon(t,e,s).then(c=>{n.set({data:c,fetched:!0})}),d(n,c=>c?.data)}else if(!a&&!this.lazyLoadEnabled)return this.handledFailedLoad(e,t)}handledFailedLoad(t,e,s){return s||(s=h({data:this.fallbackIcon,fetched:!1})),this.iconRegistry.set(`${t}${this.delimiter}${e}`,s),this.testModeEnabled||console.warn(`Mortar: No icon is registered for the path name "${e}". Did you add it to the mortar icon registry?`),d(s,r=>r?.data)}async fetchIcon(t,e="_default",s){if(!this.testModeEnabled)try{const r=this.iconUrlResolvers.get(e);if(!r)return console.warn(`MteIconRegistryService: No iconUrlResolver registered for library: "${e}"`),this.fallbackIcon;const a=fetch(r(t),{method:"get",signal:s});return await this.parseIconData(t,a)}catch{return t&&console.error(`MteIconRegistryService: failed to load icon: ${t}`),this.fallbackIcon}return this.fallbackIcon}parseIconData(t,e){return new Promise((s,r)=>{e.then(a=>{a.status>=200&&a.status<300?s(a.text()):(t&&console.error(`MteIconRegistryService: failed to load icon: ${t}`),s(this.fallbackIcon))}).catch(a=>{s(this.fallbackIcon)})})}},g=new x,C=v`:host{box-sizing:content-box!important;color:var(--icon-color,inherit);display:inline-block;line-height:0;width:24px}:host([autosize]){vertical-align:middle}:host([muted]){--icon-color:var(--mte-ink-2)}svg{display:block;height:100%;width:100%}:host(:not([withColor])) svg *{color:inherit;fill:currentColor!important}:host([color=primary])>svg *{color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary])>svg *{color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary])>svg *{color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success])>svg *{color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning])>svg *{color:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger])>svg *{color:rgb(var(--mte-status-danger-base-rgb))}`,i=class extends m(f("MteIcon")(p)){constructor(){super(...arguments),this.library="_default",this.size=24,this.autosize=!1,this.role="img",this.ariaHidden="true",this.muted=!1,this.withColor=!1}handleNameUpdate(){if(this.name){if(this.needsIconUpdate())this.fetchAbortController?.abort(),this.fetchAbortController=new AbortController,this.previousIconSubscription?.(),this.previousIconSubscription=g.getIcon(this.name,this.library,this.fetchAbortController.signal).subscribe((t,e)=>{if(t){const s=this.iconSvg,r=this._loaded;this.updateComplete.then(()=>{this.iconSvg=t,this._loaded=`${this.library}~${this.name}`,this.requestUpdate("iconSvg",s),this.requestUpdate("_loaded",r)}),this.iconSvg!==null&&this.iconSvg!==g.fallbackIcon&&(e(),this.previousIconSubscription?.(),this.previousIconSubscription=null)}});else if(!this.iconSvg){const t=this.renderRoot?.querySelector("svg")?.outerHTML??null;this.updateComplete.then(()=>{this.iconSvg=t,this.requestUpdate("iconSvg",null)})}}else this._loaded=null,this.iconSvg=void 0}handleAriaLabelChange(){this.ariaLabel||(this.ariaHidden="true"),this.ariaLabel&&this.ariaHidden==="true"&&(this.ariaHidden=null)}updateInstanceStyles(t){if(super.updateInstanceStyles(t),(t.has("size")||t.has("iconSvg")||t.has("autosize"))&&(this.autosize||this.size)){const e=this.autosize?"calc(1em + 2px)":`${this.size}px`;this.setInstanceStyle("mte-icon-sizing",b(":host:host"),{width:e,minWidth:e,height:e,minHeight:e})}}disconnectedCallback(){super.disconnectedCallback(),this.previousIconSubscription?.()}needsIconUpdate(){return!this._loaded||this._loaded!==`${this.library}~${this.name}`}render(){return M`${this.instanceStyles}${w(this.iconSvg)}`}};i.styles=[C];o([l({reflect:!0})],i.prototype,"name",2);o([l({reflect:!0})],i.prototype,"library",2);o([l({type:Number,reflect:!0})],i.prototype,"size",2);o([l({type:Boolean,reflect:!0})],i.prototype,"autosize",2);o([l({reflect:!0})],i.prototype,"role",2);o([l({attribute:"aria-label",reflect:!0})],i.prototype,"ariaLabel",2);o([l({attribute:"aria-hidden",reflect:!0})],i.prototype,"ariaHidden",2);o([l({type:Boolean,reflect:!0})],i.prototype,"muted",2);o([l({type:Boolean,reflect:!0})],i.prototype,"withColor",2);o([l({reflect:!0})],i.prototype,"_loaded",2);o([y()],i.prototype,"iconSvg",2);o([u(["name","library"],{on:"both"})],i.prototype,"handleNameUpdate",1);o([u(["ariaLabel"],{on:"both"})],i.prototype,"handleAriaLabelChange",1);i=o([I("mte-icon")],i);export{g as M,z as a,E as b,H as c,_ as d,U as e,B as f,A as g,i as h,L as m};