import {
  MteContentBase,
  __decorateClass,
  defineElement,
  onUpdate,
  styles7 as styles
} from "./chunk.Y4EV6E5D.js";

// src/atomic/divider/divider.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";

// src/atomic/divider/divider.styles.ts
import { css } from "lit";
var styles2 = css`:host{--divider-color:var(--mte-border-1);--divider-width:2px;display:block;line-height:1;margin:var(--mte-space-md) 0}:host([weight=thin]){--divider-width:1px}:host([weight=bold]){--divider-width:3px}:host([orientation=vertical]){margin:0 var(--mte-space-md)}:host([label]){align-self:stretch;display:flex;text-align:center;white-space:nowrap}:host([label]):after,:host([label]):before{content:"";position:relative}:host(:not([label])){background-color:var(--divider-color);height:var(--divider-width);min-height:var(--divider-width);width:100%}:host([orientation=vertical]:not([label])){align-self:stretch;height:auto;min-width:var(--divider-width);width:var(--divider-width)}:host([label]:not([orientation=vertical])){border:0;flex-shrink:0;gap:var(--mte-space-md)}:host([label]:not([orientation=vertical])):after,:host([label]:not([orientation=vertical])):before{border-top:var(--divider-width) solid var(--divider-color);height:auto;transform:translateY(calc(50% - var(--divider-width)/2));width:100%}:host([label]:not([orientation=vertical])[align=start]):before{width:10%}:host([label]:not([orientation=vertical])[align=end]):after{width:10%}:host([label][orientation=vertical]){flex-direction:column;flex-shrink:0;gap:var(--mte-space-sm);height:auto}:host([label][orientation=vertical]):after,:host([label][orientation=vertical]):before{border-left:var(--divider-width) solid var(--divider-color);height:100%;left:calc(50% - var(--divider-width)/2);top:0;transform:translateX(0)}`;

// src/atomic/divider/divider.element.ts
var MteDivider = class extends MteContentBase {
  constructor() {
    super(...arguments);
    this.align = "center";
    this.orientation = "horizontal";
    this.weight = "regular";
    this.role = "separator";
  }
  handleA11yChange() {
    this.role = this.label ? "presentation" : "separator";
    this.ariaOrientation = this.orientation === "vertical" ? this.orientation : null;
  }
  render() {
    return html`${this.instanceStyles}${this.label}`;
  }
};
MteDivider.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true })
], MteDivider.prototype, "label", 2);
__decorateClass([
  property({ reflect: true })
], MteDivider.prototype, "align", 2);
__decorateClass([
  property({ reflect: true })
], MteDivider.prototype, "orientation", 2);
__decorateClass([
  property({ reflect: true })
], MteDivider.prototype, "weight", 2);
__decorateClass([
  property({ reflect: true })
], MteDivider.prototype, "role", 2);
__decorateClass([
  property({ reflect: true, attribute: "aria-orientation" })
], MteDivider.prototype, "ariaOrientation", 2);
__decorateClass([
  onUpdate(["label", "orientation"], { on: "both" })
], MteDivider.prototype, "handleA11yChange", 1);
MteDivider = __decorateClass([
  defineElement("mte-divider")
], MteDivider);

export {
  MteDivider
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9kaXZpZGVyL2RpdmlkZXIuZWxlbWVudC50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2RpdmlkZXIvZGl2aWRlci5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBiYXNlU3R5bGVzLCBkZWZpbmVFbGVtZW50LCBNdGVDb250ZW50QmFzZSwgb25VcGRhdGUgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vZGl2aWRlci5zdHlsZXMnO1xuXG4vKiogKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtZGl2aWRlcicpXG5leHBvcnQgY2xhc3MgTXRlRGl2aWRlciBleHRlbmRzIE10ZUNvbnRlbnRCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIC8qKiBMYWJlbCB0aGF0IHdpbGwgYXBwZWFyIGluIE10ZURpdmlkZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKiBEZWZpbmVzIHdoZXJlIHRvIGFsaWduIHRoZSBsYWJlbCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGFsaWduOiAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyA9ICdjZW50ZXInO1xuXG4gIC8qKiBEZWZpbmVzIG9yaWVudGF0aW9uIG9mIE10ZURpdmlkZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyA9ICdob3Jpem9udGFsJztcblxuICAvKiogU2V0cyB3ZWlnaHQgb3IgdGhpY2tuZXNzIG9mIE10ZURpdmlkZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB3ZWlnaHQ6ICd0aGluJyB8ICdyZWd1bGFyJyB8ICdib2xkJyA9ICdyZWd1bGFyJztcblxuICAvKiogRGVmaW5lcyByb2xlIG9mIE10ZURpdmlkZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSByb2xlOiAnc2VwYXJhdG9yJyB8ICdwcmVzZW50YXRpb24nID0gJ3NlcGFyYXRvcic7XG5cbiAgLyoqIERlZmluZXMgYXJpYS1vcmllbnRhdGlvbiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBhdHRyaWJ1dGU6ICdhcmlhLW9yaWVudGF0aW9uJyB9KSBhcmlhT3JpZW50YXRpb246ICd2ZXJ0aWNhbCcgfCBudWxsO1xuXG4gIEBvblVwZGF0ZShbJ2xhYmVsJywgJ29yaWVudGF0aW9uJ10sIHsgb246ICdib3RoJyB9KVxuICBwcml2YXRlIGhhbmRsZUExMXlDaGFuZ2UoKSB7XG4gICAgdGhpcy5yb2xlID0gdGhpcy5sYWJlbCA/ICdwcmVzZW50YXRpb24nIDogJ3NlcGFyYXRvcic7XG4gICAgdGhpcy5hcmlhT3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8gdGhpcy5vcmllbnRhdGlvbiA6IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfSR7dGhpcy5sYWJlbH1gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1kaXZpZGVyJzogTXRlRGl2aWRlcjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWRpdmlkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0xKTstLWRpdmlkZXItd2lkdGg6MnB4O2Rpc3BsYXk6YmxvY2s7bGluZS1oZWlnaHQ6MTttYXJnaW46dmFyKC0tbXRlLXNwYWNlLW1kKSAwfTpob3N0KFt3ZWlnaHQ9dGhpbl0pey0tZGl2aWRlci13aWR0aDoxcHh9Omhvc3QoW3dlaWdodD1ib2xkXSl7LS1kaXZpZGVyLXdpZHRoOjNweH06aG9zdChbb3JpZW50YXRpb249dmVydGljYWxdKXttYXJnaW46MCB2YXIoLS1tdGUtc3BhY2UtbWQpfTpob3N0KFtsYWJlbF0pe2FsaWduLXNlbGY6c3RyZXRjaDtkaXNwbGF5OmZsZXg7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwfTpob3N0KFtsYWJlbF0pOmFmdGVyLDpob3N0KFtsYWJlbF0pOmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoOm5vdChbbGFiZWxdKSl7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kaXZpZGVyLWNvbG9yKTtoZWlnaHQ6dmFyKC0tZGl2aWRlci13aWR0aCk7bWluLWhlaWdodDp2YXIoLS1kaXZpZGVyLXdpZHRoKTt3aWR0aDoxMDAlfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF06bm90KFtsYWJlbF0pKXthbGlnbi1zZWxmOnN0cmV0Y2g7aGVpZ2h0OmF1dG87bWluLXdpZHRoOnZhcigtLWRpdmlkZXItd2lkdGgpO3dpZHRoOnZhcigtLWRpdmlkZXItd2lkdGgpfTpob3N0KFtsYWJlbF06bm90KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pKXtib3JkZXI6MDtmbGV4LXNocmluazowO2dhcDp2YXIoLS1tdGUtc3BhY2UtbWQpfTpob3N0KFtsYWJlbF06bm90KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pKTphZnRlciw6aG9zdChbbGFiZWxdOm5vdChbb3JpZW50YXRpb249dmVydGljYWxdKSk6YmVmb3Jle2JvcmRlci10b3A6dmFyKC0tZGl2aWRlci13aWR0aCkgc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7aGVpZ2h0OmF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZVkoY2FsYyg1MCUgLSB2YXIoLS1kaXZpZGVyLXdpZHRoKS8yKSk7d2lkdGg6MTAwJX06aG9zdChbbGFiZWxdOm5vdChbb3JpZW50YXRpb249dmVydGljYWxdKVthbGlnbj1zdGFydF0pOmJlZm9yZXt3aWR0aDoxMCV9Omhvc3QoW2xhYmVsXTpub3QoW29yaWVudGF0aW9uPXZlcnRpY2FsXSlbYWxpZ249ZW5kXSk6YWZ0ZXJ7d2lkdGg6MTAlfTpob3N0KFtsYWJlbF1bb3JpZW50YXRpb249dmVydGljYWxdKXtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1zaHJpbms6MDtnYXA6dmFyKC0tbXRlLXNwYWNlLXNtKTtoZWlnaHQ6YXV0b306aG9zdChbbGFiZWxdW29yaWVudGF0aW9uPXZlcnRpY2FsXSk6YWZ0ZXIsOmhvc3QoW2xhYmVsXVtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pOmJlZm9yZXtib3JkZXItbGVmdDp2YXIoLS1kaXZpZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtoZWlnaHQ6MTAwJTtsZWZ0OmNhbGMoNTAlIC0gdmFyKC0tZGl2aWRlci13aWR0aCkvMik7dG9wOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxnQkFBZ0I7OztBQ0R6QixTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QURPekMsSUFBTSxhQUFOLGNBQXlCLGVBQWU7QUFBQSxFQUF4QztBQUFBO0FBT3dCLGlCQUFvQztBQUdwQyx1QkFBeUM7QUFHekMsa0JBQXNDO0FBR3RDLGdCQUFxQztBQUFBO0FBQUEsRUFNMUQsbUJBQW1CO0FBQ3pCLFNBQUssT0FBTyxLQUFLLFFBQVEsaUJBQWlCO0FBQzFDLFNBQUssa0JBQWtCLEtBQUssZ0JBQWdCLGFBQWEsS0FBSyxjQUFjO0FBQUEsRUFDOUU7QUFBQSxFQUVBLFNBQVM7QUFDUCxXQUFPLE9BQU8sS0FBSyxjQUFjLEdBQUcsS0FBSyxLQUFLO0FBQUEsRUFDaEQ7QUFDRjtBQTlCYSxXQUNKLFNBQVMsQ0FBQyxRQUFZQyxPQUFNO0FBR047QUFBQSxFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxHQUpoQixXQUlrQjtBQUdBO0FBQUEsRUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FQaEIsV0FPa0I7QUFHQTtBQUFBLEVBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztBQUFBLEdBVmhCLFdBVWtCO0FBR0E7QUFBQSxFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxHQWJoQixXQWFrQjtBQUdBO0FBQUEsRUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FoQmhCLFdBZ0JrQjtBQUcrQjtBQUFBLEVBQTNELFNBQVMsRUFBRSxTQUFTLE1BQU0sV0FBVyxtQkFBbUIsQ0FBQztBQUFBLEdBbkIvQyxXQW1CaUQ7QUFHcEQ7QUFBQSxFQURQLFNBQVMsQ0FBQyxTQUFTLGFBQWEsR0FBRyxFQUFFLElBQUksT0FBTyxDQUFDO0FBQUEsR0FyQnZDLFdBc0JIO0FBdEJHLGFBQU47QUFBQSxFQUROLGNBQWMsYUFBYTtBQUFBLEdBQ2Y7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiXQp9Cg==
