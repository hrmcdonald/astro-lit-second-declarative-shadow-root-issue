import { property } from 'lit/decorators.js';
import { LitElement, html, type PropertyValueMap, isServer } from 'lit';

export const tagName = 'ex-astro-custom';

export class ExAstroCustom extends LitElement {

  @property({ type: Boolean }) didSsr = false;

  protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (isServer) {
      this.didSsr = true;
    }
  }

  render() {
    return html`
      Hydrated from DSD: <span style="font-weight: bold">${this.didSsr}</span>
    `;
  }
}

customElements.define(tagName, ExAstroCustom);
