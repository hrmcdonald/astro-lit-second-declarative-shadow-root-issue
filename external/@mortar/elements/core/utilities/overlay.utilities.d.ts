import { MteOverlayPlacement, MteOverlayPosition } from '../constants';
import { Placement } from '@floating-ui/dom';
/** Calculates optimal floating-ui overlays for the current position */
export declare const calculateOverlayPlacements: (position: MteOverlayPosition, placement?: MteOverlayPlacement) => [Placement, Placement[]];
export declare const calculateDefaultPanelAnimation: (renderedPlacement: Placement, options: {
    fallbackPosition: string;
    fallbackPlacement: string;
    action: 'open' | 'close';
    scaleX?: number;
    scaleY?: number;
}) => {
    scaleX: number[];
    scaleY: number[];
    translateX: string[];
    translateY: any[];
};
