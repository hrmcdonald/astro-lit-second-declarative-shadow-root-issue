import { MteElement, SlotController } from '../../core';
import '../icon';
import { ResizeController } from '@lit-labs/observers/resize-controller.js';
import { MteTab } from './tab.element';
import { MteTabPanel } from './tab-panel.element';
/**
 * @slot - Default slotted content
 * @slot nav - Slot for all tab navigation buttons
 * @slot new - Slot for new tab buttons (handled automatically)
 */
export declare class MteTabs extends MteElement {
    static styles: import("lit").CSSResult[];
    /**
     * Manages the tab which currently has focus
     */
    private activeTab;
    /**
     * Manages the tab for which the panel is currently visible
     */
    private selectedTab;
    /**
     * Manages whether tabList is scrollable
     */
    private isScrollable;
    scrollLeft: number;
    /**
     * Specifies the activation style of tabs.
     */
    activation: 'manual' | 'automatic';
    /**
     * Specify whether or not tabs she expand to the full width of its container.
     */
    withFullWidth: boolean;
    /**
     * Specify if border under tabs should be inline with tabs. If false, border will extend to the width of the container.
     */
    withInlineBorder: boolean;
    /**
     * Specify if tab panels should be enclosed with a border surrounding tab panel content.
     */
    withEnclosedPanels: boolean;
    /**
     * Specify whether scroll left button should be visible
     */
    nextVisible: boolean;
    /**
     * Specify whether scroll right button should be visible
     */
    previousVisible: boolean;
    /** Queries for all MteTab elements  */
    tabs: Array<MteTab>;
    /** Queries for all MteTabPanel elements (in this case, the default slot) */
    panels: Array<MteTabPanel>;
    tabList: HTMLDivElement;
    slotController: SlotController;
    observer?: ResizeController<void>;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    updated(changedProperties: any): void;
    /** Removes classname responsible for transition to prevent animation on resize */
    private removeTransition;
    select(panelName: string): void;
    private get enabledTabs();
    setAria(): void;
    setInitial(): void;
    /** Sets the activated tab */
    setActiveTab(tab: any): void;
    /** Sets the selected tab, meaning the tab's panel will also show. Separate from `setActiveTab()` to allow for manual activation */
    setSelectedTab(tab: any): void;
    setScrollLeft(scrollLeft: any): void;
    setIsScrollable(): void;
    setNextVisible(): void;
    setPreviousVisible(): void;
    /** Computes and sets the size of the selected item background */
    private computeTransitionBackgroundSize;
    handleClick(event: MouseEvent): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleNextScrollClick(): void;
    handlePreviousScrollClick(): void;
    handleScroll(): () => void;
    handleResize(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-tabs': MteTabs;
    }
}
