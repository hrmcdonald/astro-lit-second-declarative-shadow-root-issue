import { MteElement, MteElementParts, EventEmitter, ResponsiveValue, UnitValue, StyleMap, CorePalette } from '../../core';
import { MteButton } from '../button';
import '../button';
import '../form-elements';
import '../../utilities/visually-hidden';
import '../../core/polyfills/element-internals/index';
export interface MteFileUploadFile {
    /** An external ID used for identifying the file by the consuming application */
    id?: string;
    /** An internal ID used for identifying the file within the component. For internal use only */
    _id?: string;
    /** The name of the file. */
    name?: string;
    /** The file */
    file?: File;
    /** The status of the file's upload */
    status?: 'pending' | 'uploaded' | 'error';
    /** An error that occurred during file validation on upload  */
    error?: MteFileUploadErrorDetails;
    /** Whether the delete button should be shown next to the file in the file list */
    withDelete?: boolean;
    /** Whether the reload button should be shown next to the file in the file list */
    withRetry?: boolean;
    /** Whether the progress spinner should be shown next to the file in the file list */
    loading?: boolean;
}
export interface MteFileUploadErrorDetails {
    /** The type of error that occurred */
    type?: 'MIN_FILE_SIZE' | 'MAX_FILE_SIZE' | 'WRONG_FILE_TYPE' | string;
    /** A message describing the error */
    message: string;
}
export interface MteFileUploadUploadEvent {
    /** The tag the event was fired on. */
    files: MteFileUploadFile[];
}
export interface MteFileUploadInputParts extends MteElementParts {
    /** The file upload button */
    button?: StyleMap;
    /** The label for the file upload input element */
    label?: StyleMap;
    /** The hint for the file upload input element */
    hint?: StyleMap;
    /** The description for the file upload input element */
    description?: StyleMap;
    /** The error for the file upload input element */
    error?: StyleMap;
}
declare const MteFileUploadInput_base: import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").ColorInterface<CorePalette>> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").FieldsetInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteFileUploadInputParts>> & typeof MteElement;
/**
 * @dependency mte-button
 *
 * @slot - Default slot for content placed within the file upload button
 * @slot label - Slot used to define custom label content. Renders to the right of the control. Overrides the `label` prop.
 * @slot hint - Slot used to define custom hint content. Renders below the control. Overrides the `hint` prop.
 * @slot error - Slot used to define custom error content. Renders below the control in place of any hint. Overrides the `error` prop.
 * @slot description - Slot used to define custom description content. Renders just below the label. Overrides the `description` prop.
 *
 * @csspart description - The description element for the control
 * @csspart label - The label element for the control
 * @csspart hint - The hint element for the control
 * @csspart error - The error element for the control
 * @csspart button - The file upload button for the control
 */
export declare class MteFileUploadInput extends MteFileUploadInput_base {
    static styles: import("lit").CSSResult[];
    /** A comma-separated list of one or more file types, or unique file type specifiers, describing which file types to allow.*/
    accept?: string;
    /** The maximum file size in bytes */
    maxFileSize?: number;
    /** The minimum file size in bytes */
    minFileSize?: number;
    /** Name value applied to the file upload input element */
    name: string;
    /** The label for the upload form element */
    label: string;
    /** Visually hide the label from view. The label will still be associated using an aria attribute. */
    withoutLabel?: boolean;
    /** Whether the file upload element accept multiple files */
    multiple?: boolean;
    /** Whether the uploaded file should be required */
    required?: boolean;
    /** Whether the label should show the required asterisk */
    showRequired: boolean;
    /** Signifies this is a filled button. Overrides `outlined` */
    filled?: boolean;
    /** Signifies this is an outlined button. Overrides `outlined` */
    outlined?: boolean;
    /** Icon to display in the button */
    icon?: string;
    /** Icon to display to the right in the button */
    rightIcon?: string;
    /** Icon Library from which to load icon */
    iconLibrary?: string;
    /** Icon Library from which to load rightIcon */
    rightIconLibrary?: string;
    /** Renders the button in a loading state while true */
    loading?: boolean;
    /** Whether or not the right icon should be hidden */
    rightIconHidden?: boolean;
    /** Whether or not the icon should be hidden */
    iconHidden?: boolean;
    /** How the list of files should be updated. If it is append, files will be added to existing files. If it is replace the existing files will be replaced.  */
    selectType?: 'append' | 'replace';
    /** A custom validator to provide additional client side validation */
    validator?: (file: File) => MteFileUploadErrorDetails | null | undefined;
    /** Sets the `width` css property on button */
    buttonW?: ResponsiveValue<UnitValue>;
    /** Sets the `max-width` css property on the button */
    buttonMaxw?: ResponsiveValue<UnitValue>;
    /** Sets the `min-width` css property on the button */
    buttonMinw?: ResponsiveValue<UnitValue>;
    /** The event that is emitted when the upload button clicked */
    _onClick: EventEmitter<MouseEvent>;
    /** The event that is emitted when all specified files have been added  */
    _onFilesAdd: EventEmitter<MteFileUploadUploadEvent>;
    /** The event that is emitted when the file dialog is cancelled */
    _onFileDialogCancel: EventEmitter<void>;
    /** The file input form control element */
    formControlElement: HTMLInputElement;
    /** The validation target to pass to the form control mixin */
    validationTarget: HTMLInputElement;
    buttonElement: MteButton;
    files: MteFileUploadFile[];
    firstUpdated(): void;
    private _value;
    get value(): FormData;
    set value(value: FormData);
    static formControlValidators: import("@open-wc/form-control").Validator[];
    private fileTypeValidation;
    private updateFiles;
    addFiles(files: FileList): void;
    /** Removes the file by passing in the ID of the file to remove */
    removeFile(removeId: string): void;
    resetFormControl(): void;
    private handleInputChange;
    private handleUploadButtonClick;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-file-upload-input': MteFileUploadInput;
    }
}
export {};
