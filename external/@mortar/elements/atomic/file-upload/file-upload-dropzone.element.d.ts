import { MteElement, MteElementParts, EventEmitter } from '../../core';
export interface MteFileUploadDropzoneParts extends MteElementParts {
}
declare const MteFileUploadDropzone_base: import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteFileUploadDropzoneParts>> & typeof MteElement;
/**
 * @slot - Default slotted content
 */
export declare class MteFileUploadDropzone extends MteFileUploadDropzone_base {
    static styles: import("lit").CSSResult[];
    /** The height of the drop zone if withDropZone is enabled */
    dropzoneHeight: string | number;
    /** The minimum height  of the drop zone if withDropZone is enabled */
    minh: string | number;
    /** The minimum width  of the drop zone if withDropZone is enabled */
    minw: string | number;
    /** The width of the drop zone if withDropZone is enabled */
    w: string | number;
    /** The height of the drop zone if withDropZone is enabled */
    h: string | number;
    /** The minimum width of the drop zone if withDropZone is enabled */
    maxw: string | number;
    /** The maximum height of the drop zone if withDropZone is enabled */
    maxh: string | number;
    isDraggingOver: boolean;
    /** The event that is emitted when a drag event has started */
    _onDragStart: EventEmitter<DragEvent>;
    /** The event that is emitted when file(s) have been dragged into the dropzone  */
    _onDragEnter: EventEmitter<DragEvent>;
    /** The event that is emitted when file(s) have been dragged over the dropzone  */
    _onDragOver: EventEmitter<DragEvent>;
    /** The event that is emitted when file(s) have been dragged out of the dropzone  */
    _onDragLeave: EventEmitter<DragEvent>;
    /** The event that is emitted when a user has dropped files into the dropzone  */
    _onDrop: EventEmitter<DragEvent>;
    private _inputElement;
    private isDraggingWithin;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private findElementInShadowDom;
    private get inputElement();
    protected updateInstanceStyles(changedProps: any): void;
    private onDisabledChange;
    handleDragOver(e: DragEvent): void;
    handleDragEnter(e: DragEvent): void;
    handleDragLeave(e: DragEvent): void;
    handleDrop(e: DragEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-file-upload-dropzone': MteFileUploadDropzone;
    }
}
export {};
