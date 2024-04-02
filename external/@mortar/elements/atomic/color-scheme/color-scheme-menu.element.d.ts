import { MteElement, MteColorScheme, MteOverlayPosition } from '../../core';
import '../icon';
import '../../utilities/overlay-trigger';
import '../icon';
import '../menu';
import '../divider';
import { MteMenu } from '../menu';
import { MteOverlayTrigger } from '../../utilities/overlay-trigger';
/**
 * Menu used for color-scheme selection internally
 */
export declare class MteColorSchemeMenu extends MteElement {
    static styles: import("lit").CSSResult[];
    colorScheme: MteColorScheme;
    targetElement?: HTMLElement;
    position?: MteOverlayPosition;
    menuElement: MteMenu;
    menuTriggerElement: MteOverlayTrigger;
    backupTriggerElement: HTMLElement;
    private handleColorSchemeChange;
    private handleTargetChange;
    connectedCallback(): void;
    open(): void;
    close(): void;
    getMenu(): MteMenu;
    private linkMenuElements;
    private handleSelection;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-color-scheme-menu': MteColorSchemeMenu;
    }
}
