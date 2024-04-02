import { MteElement, MteElementParts, EventEmitter, StyleMap } from '../../core';
import { MteFileUploadFile } from './file-upload-input.element';
import '../button';
import '../progress-spinner';
import '../form-elements';
import '../icon';
export interface MteFileUploadListParts extends MteElementParts {
    /** The list of files */
    list?: StyleMap;
    /** The list item representing a files */
    item?: StyleMap;
    /** The delete button on a list item */
    deleteButton?: StyleMap;
    /** The retry button on a list item */
    retryButton?: StyleMap;
}
export interface MteFilesDeleteDetail {
    files: MteFileUploadFile[];
}
export interface MteFileRetryDetail {
    files: MteFileUploadFile[];
}
declare const MteFileUploadList_base: import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteFileUploadListParts>> & typeof MteElement;
export declare class MteFileUploadList extends MteFileUploadList_base {
    files: MteFileUploadFile[];
    additionalFiles: MteFileUploadFile[];
    /** Aria label that prefixes the files name on the delete button */
    deleteAriaLabel: string;
    /** Aria label that prefixes the files name on the retry button */
    retryAriaLabel: string;
    /** Event that is emitted when files have been specified file deletion */
    _onFilesDelete: EventEmitter<MteFilesDeleteDetail>;
    /** Event that is emitted when retrying a file upload */
    _onFilesRetry: EventEmitter<MteFileRetryDetail>;
    static styles: import("lit").CSSResult[];
    clearFiles(): void;
    appendFile(file: MteFileUploadFile): void;
    replaceFiles(files: MteFileUploadFile[]): void;
    removeFile(id: string): void;
    updateFile(updateFile: MteFileUploadFile): void;
    private handleDelete;
    private handleRetry;
    renderFile(file: MteFileUploadFile): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-file-upload-list': MteFileUploadList;
    }
}
export {};
