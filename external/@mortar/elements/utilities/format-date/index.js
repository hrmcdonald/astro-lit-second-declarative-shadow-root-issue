import {
  LangMixin,
  MteElement,
  MteLocalizeService,
  __decorateClass,
  defineElement,
  styles7 as styles
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/utilities/format-date/format-date.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";
var MteFormatDate = class extends LangMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.hourFormat = "auto";
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (!this.date) {
      this.date = /* @__PURE__ */ new Date();
    }
  }
  renderDate() {
    if (!this.date) {
      return null;
    } else {
      const date = new Date(this.date);
      const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
      if (isNaN(date.getMilliseconds())) {
        return void 0;
      }
      return html`<time datetime="${date.toISOString()}">${MteLocalizeService.formatDate(date, {
        lang: this.lang,
        weekday: this.weekday,
        era: this.era,
        year: this.year,
        month: this.month,
        day: this.day,
        hour: this.hour,
        minute: this.minute,
        second: this.second,
        fractionalSecondDigits: this.fractionalSecondDigits,
        timeZoneName: this.timeZoneName,
        timeZone: this.timeZone,
        hour12,
        format: this.format
      })}</time>`;
    }
  }
  render() {
    return html`${this.instanceStyles}${this.renderDate()}`;
  }
};
MteFormatDate.styles = [styles];
__decorateClass([
  property()
], MteFormatDate.prototype, "date", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "weekday", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "era", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "year", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "month", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "day", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "hour", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "minute", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "second", 2);
__decorateClass([
  property({ type: Number })
], MteFormatDate.prototype, "fractionalSecondDigits", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "timeZone", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "hourFormat", 2);
__decorateClass([
  property()
], MteFormatDate.prototype, "format", 2);
MteFormatDate = __decorateClass([
  defineElement("mte-format-date")
], MteFormatDate);
export {
  MteFormatDate
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy9mb3JtYXQtZGF0ZSJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsZ0JBQWdCO0FBaUJsQixJQUFNLGdCQUFOLGNBQTRCLFVBQVUsVUFBVSxFQUFFO0VBQWxEOztBQTRDTyxzQkFBbUM7O0VBaUJyQyxhQUFhLGNBQXlCO0FBQzlDLFVBQU0sYUFBYSxZQUFZO0FBRS9CLFFBQUksQ0FBQyxLQUFLLE1BQU07QUFDZCxXQUFLLE9BQU8sb0JBQUksS0FBSztJQUN2QjtFQUNGO0VBRVEsYUFBYTtBQUNuQixRQUFJLENBQUMsS0FBSyxNQUFNO0FBQ2QsYUFBTztJQUNULE9BQU87QUFDTCxZQUFNLE9BQU8sSUFBSSxLQUFLLEtBQUssSUFBSTtBQUMvQixZQUFNLFNBQVMsS0FBSyxlQUFlLFNBQVMsU0FBWSxLQUFLLGVBQWU7QUFHNUUsVUFBSSxNQUFNLEtBQUssZ0JBQWdCLENBQUMsR0FBRztBQUNqQyxlQUFPO01BQ1Q7QUFFQSxhQUFPLHVCQUFzQixLQUFLLFlBQVksQ0FBQyxLQUMzQyxtQkFBbUIsV0FBVyxNQUFNO1FBQ3BDLE1BQU0sS0FBSztRQUNYLFNBQVMsS0FBSztRQUNkLEtBQUssS0FBSztRQUNWLE1BQU0sS0FBSztRQUNYLE9BQU8sS0FBSztRQUNaLEtBQUssS0FBSztRQUNWLE1BQU0sS0FBSztRQUNYLFFBQVEsS0FBSztRQUNiLFFBQVEsS0FBSztRQUNiLHdCQUF3QixLQUFLO1FBQzdCLGNBQWMsS0FBSztRQUNuQixVQUFVLEtBQUs7UUFDZjtRQUNBLFFBQVEsS0FBSztNQUNmLENBQUMsQ0FBQztJQUVOO0VBQ0Y7RUFFQSxTQUFTO0FBQ1AsV0FBTyxPQUFPLEtBQUssY0FBYyxHQUFHLEtBQUssV0FBVyxDQUFDO0VBQ3ZEO0FBQ0Y7QUF6R2EsY0FDSixTQUFTLENBQUMsTUFBVTtBQU9mO0VBQVgsU0FBUztHQVJDLGNBUUM7QUFHQTtFQUFYLFNBQVM7R0FYQyxjQVdDO0FBR0E7RUFBWCxTQUFTO0dBZEMsY0FjQztBQUdBO0VBQVgsU0FBUztHQWpCQyxjQWlCQztBQUdBO0VBQVgsU0FBUztHQXBCQyxjQW9CQztBQUdBO0VBQVgsU0FBUztHQXZCQyxjQXVCQztBQUdBO0VBQVgsU0FBUztHQTFCQyxjQTBCQztBQUdBO0VBQVgsU0FBUztHQTdCQyxjQTZCQztBQUdBO0VBQVgsU0FBUztHQWhDQyxjQWdDQztBQUdnQjtFQUEzQixTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7R0FuQ2YsY0FtQ2lCO0FBR2hCO0VBQVgsU0FBUztHQXRDQyxjQXNDQztBQUdBO0VBQVgsU0FBUztHQXpDQyxjQXlDQztBQUdBO0VBQVgsU0FBUztHQTVDQyxjQTRDQztBQUdBO0VBQVgsU0FBUztHQS9DQyxjQStDQztBQS9DRCxnQkFBTjtFQUROLGNBQWMsaUJBQWlCO0dBQ25COyIsCiAgIm5hbWVzIjogW10KfQo=
