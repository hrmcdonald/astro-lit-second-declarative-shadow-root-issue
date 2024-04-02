import { EventEmitter } from './../../core/decorators/event-emitter.decorator';
import { ResizeController } from '@lit-labs/observers/resize-controller.js';
import { MteElement, MteElementParts, SlotController, StyleMap } from '../../core';
import { TextareaPreset } from './textarea.presets';
import { MteTextareaChangeDetail, MteTextareaInputDetail, MteTextareaInvalidDetail } from './textarea-event-types';
export interface MteTextareaParts extends MteElementParts {
    /** The internal textarea element for the control */
    textarea?: StyleMap;
}
declare const MteTextarea_base: import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & import("../../core").Constructor<import("../../core").FormFieldInterface & import("../../core").SizeInterface & import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").FieldsetInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").DensityInterface> & import("../../core").Constructor<import("../../core").TabIndexInterface> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<TextareaPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteTextareaParts>> & typeof MteElement;
/**
 * @slot - Default slotted content
 * @slot label - Slot used to define custom label content. Renders above the control. Overrides the `label` prop.
 * @slot description - Slot used to define custom description content. Renders just below the label. Overrides the `description` prop.
 * @slot hint - Slot used to define custom hint content. Renders below the control. Overrides the `hint` prop.
 * @slot error - Slot used to define custom error content. Renders below the control in place of any hint. Overrides the `error` prop.
 *
 * @csspart label - The label element for the control
 * @csspart description - The description element for the control
 * @csspart hint - The hint element for the control
 * @csspart error - The error element for the control
 * @csspart textarea - The internal textarea element
 *
 * @ngcontrol DefaultValueAccessor
 */
export declare class MteTextarea extends MteTextarea_base {
    static styles: import("lit").CSSResult[];
    /** Default unique ID for this label. */
    id: string;
    /** Removes a user's ability to resize the textarea */
    withoutManualResize: boolean;
    /** Option to automatically adjust height of textarea based on content */
    autosize: boolean;
    /** The name of the textarea, submitted as a name/value pair with form data. */
    name: string;
    /** Placeholder text to show as a hint when the textarea is empty. */
    placeholder: string;
    /** Makes the textarea readonly. */
    readonly: boolean;
    /** Makes the textarea a required field. */
    required: boolean;
    /** Option to remove visible border on textarea */
    withoutBorder: boolean;
    /** Supply the minimum number of characters the user can enter */
    minLength: any;
    /** Supply the maximum number of characters the user can enter */
    maxLength: any;
    /** The title to be passed through to the input element */
    title: string;
    /** Controls whether and how textarea is automatically capitalized as it is entered by the user. */
    autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete: 'off' | 'on';
    /** Indicates that the textarea should receive focus on page load. */
    autofocus: boolean;
    rows: number;
    cols: number;
    /** Sets the `word-break` property on the `<textarea>` element */
    wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'initial' | 'inherit' | 'revert' | 'revert-layer' | 'unset';
    /** Sets the `word-spacing` property on the `<textarea>` element */
    wordSpacing?: 'sm' | 'md' | 'lg';
    /** Sets the `letter-spacing` property on the `<textarea>` element */
    letterSpacing?: 'sm' | 'md' | 'lg';
    /** Sets the `white-space` property on the `<textarea>` element */
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces' | 'initial' | 'inherit' | 'revert' | 'revert-layer' | 'unset';
    /** Set the max-height of the internal textarea element */
    maxh?: string;
    /** Set the min-height of the internal textarea element */
    minh?: string;
    /** Emits when this controls value has changed */
    _onInput: EventEmitter<MteTextareaInputDetail>;
    /** Emits explicitly when the user has changed the value of this control */
    _onChange: EventEmitter<MteTextareaChangeDetail>;
    /** Emits when this control has failed validation */
    _onInvalid: EventEmitter<MteTextareaInvalidDetail>;
    /** Emits when this element is focused */
    _onFocus: EventEmitter<void>;
    /** Emits when this element loses focus */
    _onBlur: EventEmitter<void>;
    /** The internal textarea element used in this control. This can be helpful for dispatching keyboard events during testing. */
    controlElement: HTMLTextAreaElement;
    validationTarget: HTMLTextAreaElement;
    /** The current value of the textarea, submitted as a name/value pair with form data. */
    value: string;
    observer?: ResizeController<void>;
    isPressing: boolean;
    maximumHeight?: number;
    minimumHeight?: number;
    connectedCallback(): void;
    protected firstUpdated(changedProps: any): void;
    disconnectedCallback(): void;
    private static _styleProps;
    protected updateInstanceStyles(changedProps: any): void;
    handleInvalid(event: Event): void;
    private handleFocus;
    private handleBlur;
    handleInput(event: InputEvent): void;
    handleChange(event: InputEvent): void;
    private handleValueChange;
    private setTextareaHeight;
    /** -- TabIndex overrides -- */
    getTabIndexAdapter(): string;
    setTabIndexAdapter(value: string): void;
    removeTabIndexAdapter(): void;
    /**
     * Clicks this element
     */
    click(): void;
    /**
     * Focuses this element
     */
    focus(): void;
    /**
     * Blurs this element
     */
    blur(): void;
    /**
     * Selects all the text.
     */
    select(): void;
    handleMouseDown(): void;
    handleMouseUp(): void;
    /** @ignore */
    slotController: SlotController;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-textarea': MteTextarea;
    }
}
export {};
