export interface MteTextareaChangeDetail {
    /** Native internal change event */
    nativeEvent: InputEvent;
    /** The value of the textarea changed */
    value: string;
    /** The name of the control changed */
    name: string;
}
export interface MteTextareaInputDetail {
    /** Native internal input event */
    nativeEvent: InputEvent;
    /** The value of the textarea changed */
    value: string;
    /** The name of the control changed */
    name: string;
}
export interface MteTextareaInvalidDetail {
    /** Native internal invalid event */
    nativeEvent: Event;
    /** The value of the textarea changed */
    value: string;
    /** The name of the control changed */
    name: string;
}
