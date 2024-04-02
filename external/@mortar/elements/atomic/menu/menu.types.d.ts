import { MteMenuItem } from './menu-item.element';
export interface MteMenuSelectDetail {
    /** The native pointer event emitted from the selected item */
    nativeEvent: PointerEvent;
    /** The item selected from the menu or one of its submenus */
    selected: MteMenuItem;
    /** Value of the selected item if it is present */
    value?: string;
}
