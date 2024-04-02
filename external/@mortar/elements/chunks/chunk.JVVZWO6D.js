import {
  MteContentBase,
  MteElement,
  StatusColorMixin,
  __decorateClass,
  color,
  css,
  defineElement,
  forEachPGVariant,
  selectorFactory,
  styles7 as styles
} from "./chunk.KVXAK6W4.js";

// src/atomic/text/text.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";

// src/atomic/text/text.styles.ts
import { css as css2 } from "lit";
var styles2 = css2`:host{--color:inherit;color:var(--color);display:inline-block}:host([lineClamp]){display:-webkit-inline-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}:host([lineClamp][block]){display:-webkit-box}:host([noWrap]){display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([size=xxs]){font-size:.625rem}:host([size=xs]){font-size:.75rem}:host([size=sm]){font-size:.875rem}:host([size=md]){font-size:1rem}:host([size=lg]){font-size:1.25rem}:host([size=xl]){font-size:1.5rem}:host([size=xxl]){font-size:1.75rem}:host([muted]){--color:var(--mte-ink-2)}`;

// src/atomic/text/text.element.ts
var MteText = class extends MteContentBase {
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    let shouldUpdateStyles = false;
    for (const key of changedProps.keys()) {
      if (MteText._styleProps.has(key)) {
        shouldUpdateStyles = true;
        break;
      }
    }
    if (shouldUpdateStyles) {
      let textDecoration;
      if (this.underline) {
        textDecoration = `underline${this.strikethrough ? " line-through" : ""}`;
      } else if (this.strikethrough) {
        textDecoration = "line-through";
      }
      let wordSpacing;
      if (this.wordSpacing === "sm") {
        wordSpacing = "-0.05em";
      } else if (this.wordSpacing === "lg") {
        wordSpacing = "0.05em";
      }
      let letterSpacing;
      if (this.letterSpacing === "sm") {
        letterSpacing = "-0.02em";
      } else if (this.letterSpacing === "lg") {
        letterSpacing = "0.02em";
      }
      this.setInstanceStyle("text", selectorFactory(":host:host:host:host:host"), {
        "-webkit-line-clamp": this.lineClamp,
        "maxWidth": Number.isFinite(this.maxCharWidth) ? `${Math.round(this.maxCharWidth < 0 ? 0 : this.maxCharWidth)}ch` : null,
        "word-break": this.wordBreak,
        "word-spacing": wordSpacing,
        "letter-spacing": letterSpacing,
        "white-space": this.whiteSpace,
        "font-style": this.italic ? "italic" : void 0,
        "text-align": this.align,
        "text-decoration": textDecoration,
        "text-transform": this.transform,
        "text-wrap": this.textWrap
      });
    }
  }
  render() {
    return html`${this.instanceStyles}<slot></slot>`;
  }
};
MteText.styles = [styles, styles2];
MteText._styleProps = /* @__PURE__ */ new Set([
  "align",
  "italic",
  "lineClamp",
  "maxCharWidth",
  "strikethrough",
  "transform",
  "underline",
  "whiteSpace",
  "wordBreak",
  "wordSpacing",
  "letterSpacing",
  "textWrap"
]);
__decorateClass([
  property({ reflect: true })
], MteText.prototype, "align", 2);
__decorateClass([
  property({ reflect: true })
], MteText.prototype, "size", 2);
__decorateClass([
  property({ reflect: true })
], MteText.prototype, "transform", 2);
__decorateClass([
  property({ reflect: true })
], MteText.prototype, "wordBreak", 2);
__decorateClass([
  property({ reflect: true })
], MteText.prototype, "wordSpacing", 2);
__decorateClass([
  property({ reflect: true })
], MteText.prototype, "letterSpacing", 2);
__decorateClass([
  property({ reflect: true })
], MteText.prototype, "whiteSpace", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteText.prototype, "underline", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteText.prototype, "italic", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteText.prototype, "strikethrough", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteText.prototype, "muted", 2);
__decorateClass([
  property({ reflect: true })
], MteText.prototype, "lineClamp", 2);
__decorateClass([
  property({ reflect: true })
], MteText.prototype, "textWrap", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteText.prototype, "noWrap", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteText.prototype, "maxCharWidth", 2);
MteText = __decorateClass([
  defineElement("mte-text")
], MteText);

// src/atomic/text/mark.element.ts
import { html as html2 } from "lit";
var MteMark = class extends StatusColorMixin(MteElement) {
  connectedCallback() {
    super.connectedCallback();
    if (!this.color) {
      this.color = "warning";
    }
  }
  render() {
    return html2`${this.instanceStyles}<slot></slot>`;
  }
};
MteMark.styles = [
  styles,
  css` :host { display: inline-block; margin-right: -2px; margin-left: -2px; padding-right: 2px; padding-left: 2px; } /** Status PG Variants */ ${forEachPGVariant(
    "status",
    (g, p) => css` :host([color='${p}']) { background: ${color({ g, p, c: "light", o: "sm" })}; color: inherit; } `
  )} `
];
MteMark = __decorateClass([
  defineElement("mte-mark")
], MteMark);

export {
  styles2 as styles,
  MteText,
  MteMark
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0L3RleHQuZWxlbWVudC50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL3RleHQvdGV4dC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlQ29udGVudEJhc2UgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vdGV4dC5zdHlsZXMnO1xuaW1wb3J0IHsgdGV4dCB9IGZyb20gJ3N0cmVhbS9jb25zdW1lcnMnO1xuXG4vKipcbiAqIEBzbG90IC0gRGVmYXVsdCBzbG90dGVkIGNvbnRlbnRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS10ZXh0JylcbmV4cG9ydCBjbGFzcyBNdGVUZXh0IGV4dGVuZHMgTXRlQ29udGVudEJhc2Uge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIHN0eWxlc107XG5cbiAgLyoqIFNldHMgdGhlIGB0ZXh0LWFsaWdubWVudGAgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBhbGlnbj86XG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ2p1c3RpZnknXG4gICAgfCAnanVzdGlmeS1hbGwnXG4gICAgfCAnbWF0Y2gtcGFyZW50J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICdyZXZlcnQnXG4gICAgfCAncmV2ZXJ0LWxheWVyJ1xuICAgIHwgJ3Vuc2V0JztcblxuICAvKiogQWRqdXN0cyB0aGUgZm9udCBzaXplIG9mIHRoaXMgdGV4dCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHNpemU/OiAneHhzJyB8ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCc7XG5cbiAgLyoqIFNldHMgdGhlIGB0ZXh0LXRyYW5zZm9ybWAgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB0cmFuc2Zvcm0/OlxuICAgIHwgJ3VwcGVyY2FzZSdcbiAgICB8ICdsb3dlcmNhc2UnXG4gICAgfCAnY2FwaXRhbGl6ZSdcbiAgICB8ICdmdWxsLXdpZHRoJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICdyZXZlcnQnXG4gICAgfCAncmV2ZXJ0LWxheWVyJ1xuICAgIHwgJ3Vuc2V0JztcblxuICAvKiogU2V0cyB0aGUgYHdvcmQtYnJlYWtgIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgd29yZEJyZWFrPzpcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYnJlYWstYWxsJ1xuICAgIHwgJ2tlZXAtYWxsJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICdyZXZlcnQnXG4gICAgfCAncmV2ZXJ0LWxheWVyJ1xuICAgIHwgJ3Vuc2V0JztcblxuICAvKiogU2V0cyB0aGUgYHdvcmQtc3BhY2luZ2AgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB3b3JkU3BhY2luZz86ICdzbScgfCAnbWQnIHwgJ2xnJztcblxuICAvKiogU2V0cyB0aGUgYGxldHRlci1zcGFjaW5nYCBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxldHRlclNwYWNpbmc/OiAnc20nIHwgJ21kJyB8ICdsZyc7XG5cbiAgLyoqIFNldHMgdGhlIGB3aGl0ZS1zcGFjZWAgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB3aGl0ZVNwYWNlPzpcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnbm93cmFwJ1xuICAgIHwgJ3ByZSdcbiAgICB8ICdwcmUtd3JhcCdcbiAgICB8ICdwcmUtbGluZSdcbiAgICB8ICdicmVhay1zcGFjZXMnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJ3JldmVydCdcbiAgICB8ICdyZXZlcnQtbGF5ZXInXG4gICAgfCAndW5zZXQnO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgdGV4dCBzaG91bGQgYmUgdW5kZXJsaW5lZCAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHVuZGVybGluZT86IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSB0ZXh0IHNob3VsZCBiZSBpdGFsaWMgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBpdGFsaWM/OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgdGV4dCBzaG91bGQgYmUgc3RyaWtlZCB0aHJvdWdoICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgc3RyaWtldGhyb3VnaD86IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgdGV4dCBzaG91bGQgcmVuZGVyIG11dGVkICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgbXV0ZWQ/OiBib29sZWFuO1xuXG4gIC8qKiBMaW1pdHMgdGhlIGFtb3VudCBvZiB2aXNpYmxlIGxpbmVzLiBTZXRzIHRoZSBgLXdlYmtpdC1saW5lLWNsYW1wYCBwcm9wZXJ0eS4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsaW5lQ2xhbXA/OiBzdHJpbmc7XG5cbiAgLyoqIEFkanVzdHMgaWYgdGV4dCBpcyB3cmFwcGVkIGFuZCBpZiBzbywgd2hhdCBhbGdvcml0aG0gZGV0ZXJtaW5lcyB0aGUgd3JhcHBpbmcgYmVoYXZpb3IuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgdGV4dFdyYXA/OlxuICAgIHwgJ3dyYXAnXG4gICAgfCAnbm93cmFwJ1xuICAgIHwgJ2JhbGFuY2UnXG4gICAgfCAncHJldHR5J1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdyZXZlcnQnXG4gICAgfCAncmV2ZXJ0LWxheWVyJ1xuICAgIHwgJ3Vuc2V0J1xuICAgIHwgdW5kZWZpbmVkO1xuXG4gIC8qKiBXZWF0aGVyIG9yIG5vdCB0aGUgdGV4dCBzaG91bGQgd3JhcCB0byB0aGUgbmV4dCBsaW5lICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgbm9XcmFwPzogYm9vbGVhbjtcblxuICAvKiogTGltaXRzIHRoZSB3aWR0aCB0byBhIHNwZWNpZmllZCBudW1iZXIgb2YgMCBnbHlwaCBjaGFyYWN0ZXJzIGFuZCBpcyB0eXBpY2FsbHkgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG5vV3JhcCBvciBsaW5lQ2xhbXAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0OiB0cnVlIH0pIG1heENoYXJXaWR0aD86IG51bWJlcjtcblxuICBwcml2YXRlIHN0YXRpYyBfc3R5bGVQcm9wcyA9IG5ldyBTZXQoW1xuICAgICdhbGlnbicsXG4gICAgJ2l0YWxpYycsXG4gICAgJ2xpbmVDbGFtcCcsXG4gICAgJ21heENoYXJXaWR0aCcsXG4gICAgJ3N0cmlrZXRocm91Z2gnLFxuICAgICd0cmFuc2Zvcm0nLFxuICAgICd1bmRlcmxpbmUnLFxuICAgICd3aGl0ZVNwYWNlJyxcbiAgICAnd29yZEJyZWFrJyxcbiAgICAnd29yZFNwYWNpbmcnLFxuICAgICdsZXR0ZXJTcGFjaW5nJyxcbiAgICAndGV4dFdyYXAnLFxuICBdKTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENoZWNrIGlmIGFueSBjb250ZW50IHByb3AgaGFzIGNoYW5nZWQgdG8gZGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBpbnN0YW5jZSBzdHlsZXNcbiAgICBsZXQgc2hvdWxkVXBkYXRlU3R5bGVzID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgaWYgKE10ZVRleHQuX3N0eWxlUHJvcHMuaGFzKGtleSkpIHtcbiAgICAgICAgc2hvdWxkVXBkYXRlU3R5bGVzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFVwZGF0ZVN0eWxlcykge1xuICAgICAgLy8gQ2FsYyB0ZXh0LWRlY29yYXRpb25cbiAgICAgIGxldCB0ZXh0RGVjb3JhdGlvbjtcbiAgICAgIGlmICh0aGlzLnVuZGVybGluZSkge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbiA9IGB1bmRlcmxpbmUke3RoaXMuc3RyaWtldGhyb3VnaCA/ICcgbGluZS10aHJvdWdoJyA6ICcnfWA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaWtldGhyb3VnaCkge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgfVxuICAgICAgLy8gQ2FsYyB3b3JkLXNwYWNpbmdcbiAgICAgIGxldCB3b3JkU3BhY2luZztcbiAgICAgIGlmICh0aGlzLndvcmRTcGFjaW5nID09PSAnc20nKSB7XG4gICAgICAgIHdvcmRTcGFjaW5nID0gJy0wLjA1ZW0nO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLndvcmRTcGFjaW5nID09PSAnbGcnKSB7XG4gICAgICAgIHdvcmRTcGFjaW5nID0gJzAuMDVlbSc7XG4gICAgICB9XG4gICAgICAvLyBDYWxjIGxldHRlci1zcGFjaW5nXG4gICAgICBsZXQgbGV0dGVyU3BhY2luZztcbiAgICAgIGlmICh0aGlzLmxldHRlclNwYWNpbmcgPT09ICdzbScpIHtcbiAgICAgICAgbGV0dGVyU3BhY2luZyA9ICctMC4wMmVtJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXR0ZXJTcGFjaW5nID09PSAnbGcnKSB7XG4gICAgICAgIGxldHRlclNwYWNpbmcgPSAnMC4wMmVtJztcbiAgICAgIH1cblxuICAgICAgLy8gRG91YmxlIHRoZSBgOmhvc3RgIHNlbGVjdG9yIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5IGJleW9uZCBtb3N0IGNvbXBvbmVudCBsZXZlbCBzdHlsZXMgYnkgZGVmYXVsdFxuICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKCd0ZXh0Jywgc2VsZWN0b3JGYWN0b3J5KCc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JyksIHtcbiAgICAgICAgJy13ZWJraXQtbGluZS1jbGFtcCc6IHRoaXMubGluZUNsYW1wLFxuICAgICAgICAnbWF4V2lkdGgnOiBOdW1iZXIuaXNGaW5pdGUodGhpcy5tYXhDaGFyV2lkdGgpXG4gICAgICAgICAgPyBgJHtNYXRoLnJvdW5kKHRoaXMubWF4Q2hhcldpZHRoIDwgMCA/IDAgOiB0aGlzLm1heENoYXJXaWR0aCl9Y2hgXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICAnd29yZC1icmVhayc6IHRoaXMud29yZEJyZWFrLFxuICAgICAgICAnd29yZC1zcGFjaW5nJzogd29yZFNwYWNpbmcsXG4gICAgICAgICdsZXR0ZXItc3BhY2luZyc6IGxldHRlclNwYWNpbmcsXG4gICAgICAgICd3aGl0ZS1zcGFjZSc6IHRoaXMud2hpdGVTcGFjZSxcbiAgICAgICAgJ2ZvbnQtc3R5bGUnOiB0aGlzLml0YWxpYyA/ICdpdGFsaWMnIDogdW5kZWZpbmVkLFxuICAgICAgICAndGV4dC1hbGlnbic6IHRoaXMuYWxpZ24sXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24nOiB0ZXh0RGVjb3JhdGlvbixcbiAgICAgICAgJ3RleHQtdHJhbnNmb3JtJzogdGhpcy50cmFuc2Zvcm0sXG4gICAgICAgICd0ZXh0LXdyYXAnOiB0aGlzLnRleHRXcmFwLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtdGV4dCc6IE10ZVRleHQ7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1jb2xvcjppbmhlcml0O2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5OmlubGluZS1ibG9ja306aG9zdChbbGluZUNsYW1wXSl7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsfTpob3N0KFtsaW5lQ2xhbXBdW2Jsb2NrXSl7ZGlzcGxheTotd2Via2l0LWJveH06aG9zdChbbm9XcmFwXSl7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Omhvc3QoW3NpemU9eHhzXSl7Zm9udC1zaXplOi42MjVyZW19Omhvc3QoW3NpemU9eHNdKXtmb250LXNpemU6Ljc1cmVtfTpob3N0KFtzaXplPXNtXSl7Zm9udC1zaXplOi44NzVyZW19Omhvc3QoW3NpemU9bWRdKXtmb250LXNpemU6MXJlbX06aG9zdChbc2l6ZT1sZ10pe2ZvbnQtc2l6ZToxLjI1cmVtfTpob3N0KFtzaXplPXhsXSl7Zm9udC1zaXplOjEuNXJlbX06aG9zdChbc2l6ZT14eGxdKXtmb250LXNpemU6MS43NXJlbX06aG9zdChbbXV0ZWRdKXstLWNvbG9yOnZhcigtLW10ZS1pbmstMil9YDsiLCBudWxsXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVMsWUFBWTtBQUNyQixTQUFTLGdCQUFnQjs7O0FDRnpCLFNBQVMsT0FBQUEsWUFBVztBQUFhLElBQU1DLFVBQVNEOzs7QURXekMsSUFBTSxVQUFOLGNBQXNCLGVBQWU7QUFBQSxFQWtIaEMscUJBQXFCLGNBQWM7QUFDM0MsVUFBTSxxQkFBcUIsWUFBWTtBQUd2QyxRQUFJLHFCQUFxQjtBQUN6QixlQUFXLE9BQU8sYUFBYSxLQUFLLEdBQUc7QUFDckMsVUFBSSxRQUFRLFlBQVksSUFBSSxHQUFHLEdBQUc7QUFDaEMsNkJBQXFCO0FBQ3JCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxRQUFJLG9CQUFvQjtBQUV0QixVQUFJO0FBQ0osVUFBSSxLQUFLLFdBQVc7QUFDbEIseUJBQWlCLFlBQVksS0FBSyxnQkFBZ0Isa0JBQWtCLEVBQUU7QUFBQSxNQUN4RSxXQUFXLEtBQUssZUFBZTtBQUM3Qix5QkFBaUI7QUFBQSxNQUNuQjtBQUVBLFVBQUk7QUFDSixVQUFJLEtBQUssZ0JBQWdCLE1BQU07QUFDN0Isc0JBQWM7QUFBQSxNQUNoQixXQUFXLEtBQUssZ0JBQWdCLE1BQU07QUFDcEMsc0JBQWM7QUFBQSxNQUNoQjtBQUVBLFVBQUk7QUFDSixVQUFJLEtBQUssa0JBQWtCLE1BQU07QUFDL0Isd0JBQWdCO0FBQUEsTUFDbEIsV0FBVyxLQUFLLGtCQUFrQixNQUFNO0FBQ3RDLHdCQUFnQjtBQUFBLE1BQ2xCO0FBR0EsV0FBSyxpQkFBaUIsUUFBUSxnQkFBZ0IsMkJBQTJCLEdBQUc7QUFBQSxRQUMxRSxzQkFBc0IsS0FBSztBQUFBLFFBQzNCLFlBQVksT0FBTyxTQUFTLEtBQUssWUFBWSxJQUN6QyxHQUFHLEtBQUssTUFBTSxLQUFLLGVBQWUsSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLE9BQzVEO0FBQUEsUUFDSixjQUFjLEtBQUs7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
