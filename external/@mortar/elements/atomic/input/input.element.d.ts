import { EventEmitter } from './../../core/decorators/event-emitter.decorator';
import { SlotController } from './../../core/controllers/slot.controller';
import { MteElement, MteElementParts, StyleMap } from '../../core';
import { InputPreset } from './input.presets';
import '../button/index';
import '../icon/index';
import '../form-elements';
import '../../core/polyfills/element-internals/index';
import { MteBeforeInputDetail, MteInputChangeDetail, MteInputDetail, MteInputInvalidDetail } from './input-event.types';
export interface MteInputParts extends MteElementParts {
    /** The input element */
    input?: StyleMap;
    /** The label for the input */
    label?: StyleMap;
    /** The hint for the input */
    hint?: StyleMap;
    /** The error for the input */
    error?: StyleMap;
    /** The description for the input */
    description?: StyleMap;
    /** The form field that wraps the input  */
    ['form-field']?: StyleMap;
    /** The element prepended to the input  */
    prepend?: StyleMap;
    /** The element appended to the input  */
    append?: StyleMap;
    /** The element prefixed to the input. Renders to the right of the prepend element and before the input. */
    prefix?: StyleMap;
    /** The suffix element for the input. Renders to the left of the append element and after the input. */
    suffix?: StyleMap;
}
declare const MteInput_base: import("../../core").Constructor<import("../../core").TabIndexInterface> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").DensityInterface> & import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & import("../../core").Constructor<import("../../core").FormFieldInterface & import("../../core").SizeInterface & import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").FieldsetInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<InputPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteInputParts>> & typeof MteElement;
/**
 * @dependency mte-form-elements
 * @dependency mte-button
 * @dependency mte-icon
 *
 * @slot - Default slotted content
 * @slot label - Slot used to define custom label content. Renders above the control. Overrides the `label` prop.
 * @slot description - Slot used to define custom description content. Renders just below the label. Overrides the `description` prop.
 * @slot hint - Slot used to define custom hint content. Renders below the control. Overrides the `hint` prop.
 * @slot error - Slot used to define custom error content. Renders below the control in place of any hint. Overrides the `error` prop.
 * @slot prepend - Slot for leading, visual isolated form-field control content.
 * @slot prefix - Slot for leading, embedded form-field control content.
 * @slot suffix - Slot for trailing, embedded form-field control content.
 * @slot append - Slot for trailing, visual isolated form-field control content.
 *
 * @csspart label - The label element for the control
 * @csspart description - The description element for the control
 * @csspart hint - The hint element for the control
 * @csspart error - The error element for the control
 * @csspart prepend - The prepend slot container element
 * @csspart prefix - The prefix slot container element
 * @csspart input - The internal input element
 * @csspart suffix - The suffix slot container element
 * @csspart append - The append slot container element
 *
 * @ngcontrol DefaultValueAccessor
 */
export declare class MteInput extends MteInput_base {
    static styles: import("lit").CSSResult[];
    /** Default unique ID for this label. */
    id: string;
    /**
     * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
     * to `text`.
     */
    type: 'date' | 'datetime-local' | 'month' | 'week' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
    /** The name of the input, submitted as a name/value pair with form data. */
    name: string;
    /**
     * Alters the behavior of this input. When "controlled", an input's value is driven explicitly by external state
     * via the `value` prop. Input events will fire but the input value will not change until it is altered directly. This
     * is an experimental feature primarily for React, limitations currently apply.
     * @experimental
     */
    controlled: boolean;
    /** The internal input element used in this control. This can be helpful for dispatching keyboard events during testing. */
    controlElement: HTMLInputElement;
    /** The current value of the input, submitted as a name/value pair with form data. */
    set value(value: string);
    get value(): string;
    private _value;
    private _currentSelection;
    private _pendingSelectionStart?;
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder: string;
    /** Makes the input readonly. */
    readonly: boolean;
    /** Makes the input a required field. */
    required: boolean;
    /** A regular expression pattern to validate input against. */
    pattern: string;
    /** The minimum length of input that will be considered valid. */
    minlength: number | string;
    /** The maximum length of input that will be considered valid. */
    maxlength: number | string;
    /** The input's minimum value. Only applies to date and number input types. */
    min: number | string;
    /** The input's maximum value. Only applies to date and number input types. */
    max: number | string;
    /**
     * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
     * implied, allowing any numeric value. Only applies to date and number input types.
     */
    step?: number | 'any';
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect?: 'off' | 'on';
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete: string;
    /** Indicates that the input should receive focus on page load. */
    autofocus: boolean;
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    /** Enables spell checking on the input. */
    spellcheck: any;
    private spellcheckFallback;
    /**
     * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
     * keyboard on supportive devices.
     */
    inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    /** Whether or not the control should render with vertical margins. */
    withoutBorder: boolean;
    /** Emits when this controls value has changed */
    _onInput: EventEmitter<MteInputDetail>;
    /** Emits before this controls value has changed */
    _onBeforeInput: EventEmitter<MteBeforeInputDetail>;
    /** Emits explicitly when the user has changed the value of this control */
    _onChange: EventEmitter<MteInputChangeDetail>;
    /** Emits when this control has failed validation */
    _onInvalid: EventEmitter<MteInputInvalidDetail>;
    /** Emits when this element is focused */
    _onFocus: EventEmitter<void>;
    /** Emits when this element loses focus */
    _onBlur: EventEmitter<void>;
    _onKeydown: EventEmitter<Event>;
    /** Emits when a type="search" input is cleared */
    _onSearchClear: EventEmitter<void>;
    /** Set to true after the input has been interacted with or validated */
    private dirty;
    /** Set to true when the input is first blurred */
    private touched;
    validationTarget: HTMLInputElement;
    private initialized;
    /** @ignore */
    slotController: SlotController;
    /** @ignore */
    static formControlValidators: {
        key: keyof ValidityState;
        isValid(instance: HTMLElement & {
            validationTarget: HTMLInputElement;
        }): boolean;
    }[];
    private handleValueChange;
    private handleControlled;
    handleType(): void;
    /** Updates the latest cursorSelection positions used while controlled */
    private updateCursorPosition;
    connectedCallback(): void;
    firstUpdated(changedProps: any): void;
    /** -- Form control validation overrides -- */
    validityCallback(): string | void;
    reportValidity(): boolean;
    valueChangedCallback(value: string): void;
    resetFormControl(): void;
    /** -- TabIndex overrides -- */
    getTabIndexAdapter(): string;
    setTabIndexAdapter(value: string): void;
    removeTabIndexAdapter(): void;
    /**
     * Clicks this input
     */
    click(): void;
    /**
     * Focuses this input
     */
    focus(): void;
    /**
     * Blurs this input
     */
    blur(): void;
    /**
     * Selects all the text.
     */
    select(): void;
    /**
     * Sets the start and end positions of the current selection.
     *
     * @param selectionStart The 0-based index of the first selected character. An index greater than the length of the
     *  element's value is treated as pointing to the end of the value.
     * @param selectionEnd The 0-based index of the character after the last selected character. An index greater than
     *  the length of the element's value is treated as pointing to the end of the value.
     * @param [selectionDirection="none"] A string indicating the direction in which the selection is considered to
     *  have been performed.
     */
    setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none'): void;
    private handleFocus;
    private handleBlur;
    private handleKeydown;
    private handleInvalid;
    private handleBeforeInput;
    private handleInput;
    /** Handles the internal input's change events */
    private handleChange;
    /** Handles `keydown` events to clear while type="search" */
    private handleClearOnEscape;
    /** Handles clear events while type="search" */
    private handleClear;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-input': MteInput;
    }
}
export {};
