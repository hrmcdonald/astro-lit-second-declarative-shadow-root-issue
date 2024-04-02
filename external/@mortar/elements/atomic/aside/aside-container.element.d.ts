import { MteElement } from '../../core';
import { MteAside } from './index';
/**
 * @slot - Default slot for content to be pushed aside
 * @slot aside - The slot for the aside to be inserted
 */
export declare class MteAsideContainer extends MteElement {
    static styles: import("lit").CSSResult[];
    /** Whether the aside should push content over */
    withoutPush: boolean;
    /** Whether or not the aside is currently open */
    opened: boolean;
    /** The position of the aside element*/
    position: 'top' | 'left' | 'bottom' | 'right';
    /** The size of the aside element */
    size: string | number;
    /** The elements within the aside slot */
    asideElements: Array<MteAside>;
    private slotController;
    private _asideElementRef;
    /** The first element currently in the aside slot */
    private get asideElementRef();
    private set asideElementRef(value);
    private onOpenedChange;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updateInstanceStyles(changedProps: any): void;
    /** Removes event listeners from the aside element */
    private removeAsideListeners;
    /** Adds event listeners to the overlay element to watch for changes to its `triggerOn` value */
    private addAsideListeners;
    private handleOpen;
    private handleClose;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-aside-container': MteAsideContainer;
    }
}
