import{i as o,g as a,h as g,_ as i,n as s,o as n,d as h}from"./chunk.BDXXLFJI.Wz8REFjk.js";import{x as m}from"./directive.qvJfFQ74.js";import{o as l}from"./query-assigned-elements.QVyvENXT.js";var d=o`:host{box-sizing:border-box;display:contents}slot[name=overlay]::slotted(*){position:absolute}`,v=0,r=class extends a{constructor(){super(),this.slotController=new g(this),this.isListeningForOpen=!1,this.updateTriggerListeners=e=>{this.removeTriggerListeners(this.triggerElementRef),this.addTriggerListeners(this.triggerElementRef),e?.stopPropagation()},this.open=this.open.bind(this),this.close=this.close.bind(this)}get triggerElementRef(){return this._triggerElementRef}set triggerElementRef(e){this._triggerElementRef!==e&&(this.removeTriggerListeners(this._triggerElementRef),this._triggerElementRef=e,this._triggerElementRef&&!this._triggerElementRef?.id&&(this._triggerElementRef.id=`mte-overlay-trigger--trigger--${v++}`),this.addTriggerListeners(this._triggerElementRef),this._triggerElementRef||this.overlayElementRef?.close?.(),this.updateOverlayTargetElement())}get overlayElementRef(){return this._overlayElementRef}set overlayElementRef(e){this._overlayElementRef!==e&&(this.removeOverlayListeners(this._overlayElementRef),this._overlayElementRef=e,this.addOverlayListeners(this._overlayElementRef),this.updateOverlayTargetElement(),this.triggerElementRef&&this.updateTriggerListeners())}handleOpenedChanged(){setTimeout(()=>{this.opened?this.open():this.close()})}handleManualTriggerElementChanged(){this.triggerElementRef=this.triggerElement}handleManualOverlayElementChanged(){this.overlayElementRef=this.overlayElement}connectedCallback(){super.connectedCallback(),this.slotController.watchSlots(["overlay","trigger"]).subscribe(e=>{if(e?.has("overlay")&&this.overlayElements?.length>0){const t=this.overlayElements?.[0];t.hasAttribute("data-overlay-wrapper")?t.hasAttribute("data-overlay-ready")?this.overlayElementRef=t.children?.[0]:t.addEventListener("portalready",f=>{this.overlayElementRef=t.children?.[0]},{once:!0}):this.overlayElementRef=t}e?.has("trigger")&&this.triggerElements?.length>0&&(this.triggerElementRef=this.triggerElements?.[0]),e?.has("trigger")&&!this.triggerElements?.[0]&&this.overlayElementRef?.close?.()}),this.updateComplete.then(()=>{this.toggleListeners(!0)})}disconnectedCallback(){super.disconnectedCallback(),this.overlayElementRef?.close?.(),this.toggleListeners(!1)}toggle(){setTimeout(()=>{this.overlayElementRef?.toggle?.()})}open(){setTimeout(()=>{this.overlayElementRef?.open?.()})}close(){setTimeout(()=>{this.overlayElementRef?.close?.()})}updateOverlayTargetElement(){this.overlayElementRef&&this.triggerElementRef&&(this.overlayElementRef.targetElement=this.triggerElementRef,this.opened?this.open():this.close())}toggleListeners(e){e===null&&(e=!this.isListeningForOpen),e?this.addTriggerListeners(this.triggerElementRef):this.removeTriggerListeners(this.triggerElementRef),this.isListeningForOpen=e}addTriggerListeners(e){if(e){const t=this.overlayElementRef?.triggerOn??this.overlayElementRef?.getAttribute("triggerOn");if(t==="none"||!t)return;t!=="click"?(e.addEventListener("focus",this.open,!0),e.addEventListener("blur",this.close,!0),t==="hover"&&(e.addEventListener("mouseenter",this.open),e.addEventListener("mouseleave",this.close))):e.addEventListener("click",this.open,!0)}}removeTriggerListeners(e){e&&(e.removeEventListener("mouseenter",this.open),e.removeEventListener("mouseleave",this.close),e.removeEventListener("focus",this.open,!0),e.removeEventListener("blur",this.close,!0),e.removeEventListener("click",this.open,!0))}addOverlayListeners(e){e&&e.addEventListener("onTriggerChange",this.updateTriggerListeners)}removeOverlayListeners(e){e&&e.removeEventListener("onTriggerChange",this.updateTriggerListeners)}render(){return m`<slot name="overlay"></slot><slot name="trigger"></slot>`}};r.styles=[d];i([s({type:Boolean,reflect:!0})],r.prototype,"opened",2);i([s({attribute:!1})],r.prototype,"triggerElement",2);i([s({attribute:!1})],r.prototype,"overlayElement",2);i([l({slot:"trigger"})],r.prototype,"triggerElements",2);i([l({slot:"overlay"})],r.prototype,"overlayElements",2);i([n("opened")],r.prototype,"handleOpenedChanged",1);i([n("triggerElement")],r.prototype,"handleManualTriggerElementChanged",1);i([n("overlayElement")],r.prototype,"handleManualOverlayElementChanged",1);r=i([h("mte-overlay-trigger")],r);export{r as MteOverlayTrigger};