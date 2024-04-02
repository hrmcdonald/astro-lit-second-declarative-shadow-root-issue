import {
  MteContentBase,
  __decorateClass,
  css,
  defineElement,
  styles7 as styles
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/smile/smile.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";
var MteSmile = class extends MteContentBase {
  render() {
    return html`${this.instanceStyles}<slot></slot>`;
  }
};
MteSmile.styles = [
  styles,
  css` :host { --smile-path: ellipse(125% 100% at 50% 0); display: block; clip-path: var(--smile-path); } :host([size='none']) { --smile-path: none; } :host([size='sm']) { --smile-path: ellipse(150% 100% at 50% 0); } :host([size='md']) { --smile-path: ellipse(125% 100% at 50% 0); } :host([size='lg']) { --smile-path: ellipse(100% 100% at 50% 0); } `
];
__decorateClass([
  property({ reflect: true })
], MteSmile.prototype, "size", 2);
MteSmile = __decorateClass([
  defineElement("mte-smile")
], MteSmile);
export {
  MteSmile
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zbWlsZSJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxnQkFBZ0I7QUFTbEIsSUFBTSxXQUFOLGNBQXVCLGVBQWU7RUE0QjNDLFNBQVM7QUFDUCxXQUFPLE9BQU8sS0FBSyxjQUFjO0VBQ25DO0FBQ0Y7QUEvQmEsU0FDSixTQUFTO0VBQ2Q7RUFDQTtBQXFCRjtBQUU2QjtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0ExQmhCLFNBMEJrQjtBQTFCbEIsV0FBTjtFQUROLGNBQWMsV0FBVztHQUNiOyIsCiAgIm5hbWVzIjogW10KfQo=
