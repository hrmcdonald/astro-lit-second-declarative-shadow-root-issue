import{i as u,M as f,s as b,a as m,_ as t,n as r,d as p,b as g,z as h,J as y,g as x,K as k,E as v,w,B as S,t as z,L as C}from"./chunk.BDXXLFJI.Wz8REFjk.js";import{x as d}from"./directive.qvJfFQ74.js";import{e as B}from"./class-map.iK5X3Dze.js";var M=u`:host{--color:inherit;color:var(--color);display:inline-block}:host([lineClamp]){display:-webkit-inline-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}:host([lineClamp][block]){display:-webkit-box}:host([noWrap]){display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([size=xxs]){font-size:.625rem}:host([size=xs]){font-size:.75rem}:host([size=sm]){font-size:.875rem}:host([size=md]){font-size:1rem}:host([size=lg]){font-size:1.25rem}:host([size=xl]){font-size:1.5rem}:host([size=xxl]){font-size:1.75rem}:host([muted]){--color:var(--mte-ink-2)}`,e=class extends f{updateInstanceStyles(i){super.updateInstanceStyles(i);let o=!1;for(const s of i.keys())if(e._styleProps.has(s)){o=!0;break}if(o){let s;this.underline?s=`underline${this.strikethrough?" line-through":""}`:this.strikethrough&&(s="line-through");let l;this.wordSpacing==="sm"?l="-0.05em":this.wordSpacing==="lg"&&(l="0.05em");let n;this.letterSpacing==="sm"?n="-0.02em":this.letterSpacing==="lg"&&(n="0.02em"),this.setInstanceStyle("text",b(":host:host:host:host:host"),{"-webkit-line-clamp":this.lineClamp,maxWidth:Number.isFinite(this.maxCharWidth)?`${Math.round(this.maxCharWidth<0?0:this.maxCharWidth)}ch`:null,"word-break":this.wordBreak,"word-spacing":l,"letter-spacing":n,"white-space":this.whiteSpace,"font-style":this.italic?"italic":void 0,"text-align":this.align,"text-decoration":s,"text-transform":this.transform,"text-wrap":this.textWrap})}}render(){return d`${this.instanceStyles}<slot></slot>`}};e.styles=[m,M];e._styleProps=new Set(["align","italic","lineClamp","maxCharWidth","strikethrough","transform","underline","whiteSpace","wordBreak","wordSpacing","letterSpacing","textWrap"]);t([r({reflect:!0})],e.prototype,"align",2);t([r({reflect:!0})],e.prototype,"size",2);t([r({reflect:!0})],e.prototype,"transform",2);t([r({reflect:!0})],e.prototype,"wordBreak",2);t([r({reflect:!0})],e.prototype,"wordSpacing",2);t([r({reflect:!0})],e.prototype,"letterSpacing",2);t([r({reflect:!0})],e.prototype,"whiteSpace",2);t([r({type:Boolean,reflect:!0})],e.prototype,"underline",2);t([r({type:Boolean,reflect:!0})],e.prototype,"italic",2);t([r({type:Boolean,reflect:!0})],e.prototype,"strikethrough",2);t([r({type:Boolean,reflect:!0})],e.prototype,"muted",2);t([r({reflect:!0})],e.prototype,"lineClamp",2);t([r({reflect:!0})],e.prototype,"textWrap",2);t([r({type:Boolean,reflect:!0})],e.prototype,"noWrap",2);t([r({type:Number,reflect:!0})],e.prototype,"maxCharWidth",2);e=t([p("mte-text")],e);var c=class extends g(x){connectedCallback(){super.connectedCallback(),this.color||(this.color="warning")}render(){return d`${this.instanceStyles}<slot></slot>`}};c.styles=[m,h` :host { display: inline-block; margin-right: -2px; margin-left: -2px; padding-right: 2px; padding-left: 2px; } /** Status PG Variants */ ${y("status",(i,o)=>h` :host([color='${o}']) { background: ${k({g:i,p:o,c:"light",o:"sm"})}; color: inherit; } `)} `];c=t([p("mte-mark")],c);var W=u`:host{--color:rgba(var(--mte-it-link-default-rgb),var(--mte-it-link-default-a));--focus-radius:var(--mte-border-radius-sm);-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;color:var(--color);cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;font-weight:inherit;margin:0;outline:none;padding:0;text-decoration:none}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--focus-radius);border-bottom-right-radius:var(--focus-radius);border-top-left-radius:var(--focus-radius);border-top-right-radius:var(--focus-radius);bottom:-2px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-6px;pointer-events:none;position:absolute;right:-6px;top:-2px;z-index:9}:host .anchor:visited{--color:rgba(var(--mte-it-link-visited-rgb),var(--mte-it-link-visited-a))}:host(:not([disabled]):focus),:host(:not([disabled]):hover){text-decoration:underline}:host([disabled]),:host([disabled]) a{--color:var(--mte-disabled-4);cursor:not-allowed}:host([color=primary]){--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=secondary]){--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=tertiary]){--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=danger]){--color:rgb(var(--mte-core-danger-base-rgb))}`,a=class extends v(w("MteLink")(S(e))){getButtonClasses(){return B({link:!0})}render(){return this.renderButtonTemplate(d`<slot></slot>`)}};a.styles=[...e.styles,z,W];t([C({reflect:!0})],a.prototype,"fontWeight",2);a=t([p("mte-link")],a);export{a as MteLink};
