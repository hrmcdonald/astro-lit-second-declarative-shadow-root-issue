export interface MteInputDetail {
    /** The value of the input changed */
    value: string;
    /** The name of the control changed */
    name: string;
    /** Returns a string with the inserted characters. This may be an empty string if the change doesn't insert text (such as when deleting characters, for example). */
    data: InputEvent['data'];
    /** Returns a DataTransfer object containing information about richtext or plaintext data being added to or removed from editable content. */
    dataTransfer: InputEvent['dataTransfer'];
    /** Returns the type of change for editable content such as, for example, inserting, deleting, or formatting text. See the property page for a complete list of input types. */
    inputType: InputEvent['inputType'];
    /** Returns a `boolean` value indicating if the event is fired after `compositionstart` and before `compositionend`. */
    isComposing: InputEvent['isComposing'];
}
export interface MteBeforeInputDetail {
    /** The current value of the input before the change */
    value: string;
    /** The name of the control that will change */
    name: string;
    /** Returns a string with the inserted characters. This may be an empty string if the change doesn't insert text (such as when deleting characters, for example). */
    data: InputEvent['data'];
    /** Returns a DataTransfer object containing information about richtext or plaintext data being added to or removed from editable content. */
    dataTransfer: InputEvent['dataTransfer'];
    /** Returns the type of change for editable content such as, for example, inserting, deleting, or formatting text. See the property page for a complete list of input types. */
    inputType: InputEvent['inputType'];
    /** Returns a `boolean` value indicating if the event is fired after `compositionstart` and before `compositionend`. */
    isComposing: InputEvent['isComposing'];
}
export interface MteInputChangeDetail {
    /** The value of the input changed */
    value: string;
    /** The name of the control changed */
    name: string;
}
export interface MteInputInvalidDetail {
    /** The value of the input changed */
    value: string;
    /** The name of the control changed */
    name: string;
}
