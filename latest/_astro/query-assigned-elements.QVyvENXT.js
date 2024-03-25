import{y as m}from"./chunk.BDXXLFJI.Wz8REFjk.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function u(e){return(n,s)=>{const{slot:t,selector:r}=e??{},c="slot"+(t?`[name=${t}]`:":not([name])");return m(n,s,{get(){const i=this.renderRoot?.querySelector(c),o=i?.assignedElements(e)??[];return r===void 0?o:o.filter(l=>l.matches(r))}})}}export{u as o};
