import{i as c,_ as s,n,r as u,o as f,M as h,c as l,m as p,s as m,d as S}from"./chunk.BDXXLFJI.Wz8REFjk.js";import{x}from"./directive.qvJfFQ74.js";var v=c`:host{box-sizing:border-box;display:contents}`,e=class extends h{constructor(){super(...arguments),this.selectorSuffix=""}handleQueryChange(){this.selectorSuffix=this.styles?" > ::slotted(*)":"",this.queryStyles=this.generateQueryStyles(this.smallerThan,this.largerThan,this.query,this.styles)}generateQueryStyles(t,o,a,i){t=t??void 0,o=o??void 0;const y=l.grid.breakpoint[t]??p(t),d=l.grid.breakpoint[o]??p(o);let r={};return i===void 0&&(o!==void 0||t!==void 0)&&(i={display:"contents !important"},r={display:"none !important"}),o!==void 0&&t!==void 0?r[`@media (min-width: ${d}) and (max-width: calc(${y} - 1px))`]=i:o!==void 0?r[`@media (min-width: ${d})`]=i:r[`@media (max-width: calc(${y} - 1px))`]=i,a&&(r[a]=i),r}updateInstanceStyles(t){super.updateInstanceStyles(t),t.has("queryStyles")&&this.setInstanceStyle("media-query",m(`${this.instanceStyleSelectorRoot}:host${this.selectorSuffix}`),this.queryStyles??{})}render(){return x`${this.instanceStyles}<slot></slot>`}};e.styles=[v];s([n({reflect:!0})],e.prototype,"smallerThan",2);s([n({reflect:!0})],e.prototype,"largerThan",2);s([n({reflect:!0})],e.prototype,"query",2);s([n({reflect:!0})],e.prototype,"styles",2);s([u()],e.prototype,"queryStyles",2);s([u()],e.prototype,"selectorSuffix",2);s([f(["largerThan","smallerThan","query","styles"],{on:"both"})],e.prototype,"handleQueryChange",1);e=s([S("mte-media-query")],e);export{e as MteMediaQuery};
