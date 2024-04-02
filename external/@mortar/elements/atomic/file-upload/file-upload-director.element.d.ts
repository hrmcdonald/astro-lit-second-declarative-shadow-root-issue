import { MteElement } from '../../core';
import type { MteFileUploadFile } from './file-upload-input.element';
import { MteFileUploadList } from './file-upload-list.element';
import { MteFileUploadInput } from './file-upload-input.element';
interface MteFileUploadRequestorErrorDetails {
    message: string;
}
type MteFileUploadRequestor = (file: MteFileUploadFile, success: (file?: MteFileUploadFile) => void, error: (details: MteFileUploadRequestorErrorDetails) => void) => void;
type MteFileDeleteRequestor = (file: MteFileUploadFile, success: () => void, error: (details: MteFileUploadRequestorErrorDetails) => void) => void;
/**
 * @slot - Default slotted content
 */
export declare class MteFileUploadDirector extends MteElement {
    /** Requestor function that communicates success and error conditions for when a file is uploaded. */
    uploadRequestor: MteFileUploadRequestor;
    /** Requestor function that communicates success and error conditions for when a file is deleted. */
    deleteRequestor: MteFileDeleteRequestor;
    /** Whether the component's should take up the full width of the container */
    withFullWidth?: boolean;
    /** Disables requestors and expects files to be uploaded on submit. */
    withoutImmediateUpload?: boolean;
    private _inputElement;
    private _listElement;
    private findElementInShadowDom;
    get inputElement(): MteFileUploadInput;
    get fileListElement(): MteFileUploadList;
    connectedCallback(): void;
    private handleFileDeleteSuccess;
    private handleFileDeleteError;
    private handleFileUploadSuccess;
    private handleFileUploadError;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-file-upload-director': MteFileUploadDirector;
    }
}
export {};
