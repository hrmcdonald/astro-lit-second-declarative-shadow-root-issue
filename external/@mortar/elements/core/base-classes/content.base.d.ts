import { MteElement } from './mte.element';
export type SpacingValue = number | string | 1 | 2 | 3 | 4 | 5 | 6 | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined;
export type UnitValue = number | string | undefined;
export type BorderRadiusValue = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full' | string | undefined;
export type BorderWidthValue = 'none' | 'sm' | 'md' | 'lg' | string | undefined;
export type OpacityValue = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string | undefined;
export type ResponsiveValue<T> = T | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', T>>;
export declare class MteContentBase extends MteElement {
    /** Sets the `margin` css property on this element */
    m?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-right` and `margin-left` css properties on this element */
    mx?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-top` and `margin-bottom` css properties on this element */
    my?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-top` css property on this element */
    mt?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-right` css property on this element */
    mr?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-bottom` css property on this element */
    mb?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-left` css property on this element */
    ml?: ResponsiveValue<SpacingValue>;
    /** Sets the `padding` css property on this element */
    p?: ResponsiveValue<SpacingValue>;
    /** Sets the `padding-right` and `padding-left` css properties on this element */
    px?: ResponsiveValue<SpacingValue>;
    /** Sets the `padding-top` and `padding-bottom` css properties on this element */
    py?: ResponsiveValue<SpacingValue>;
    /** Sets the `padding-top` css property on this element */
    pt?: ResponsiveValue<SpacingValue>;
    /** Sets the `padding-right` css property on this element */
    pr?: ResponsiveValue<SpacingValue>;
    /** Sets the `padding-bottom` css property on this element */
    pb?: ResponsiveValue<SpacingValue>;
    /** Sets the `padding-left` css property on this element */
    pl?: ResponsiveValue<SpacingValue>;
    /** Sets the `display` css property on this element */
    d?: ResponsiveValue<undefined | 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'inline' | 'list-item' | 'none' | 'initial' | 'inherit'>;
    /** Sets the `align-items` css property on this element */
    a?: ResponsiveValue<undefined | 'flex-start' | 'start' | 'center' | 'end' | 'flex-end' | 'stretch' | 'baseline' | 'initial' | 'inherit'>;
    /** Sets the `align-items` css property on this element */
    alignItems?: ResponsiveValue<undefined | 'flex-start' | 'start' | 'center' | 'flex-end' | 'end' | 'stretch' | 'baseline' | 'initial' | 'inherit'>;
    /** Sets the `align-self` css property on this element */
    alignSelf?: ResponsiveValue<undefined | 'auto' | 'flex-start' | 'start' | 'center' | 'flex-end' | 'end' | 'stretch' | 'baseline' | 'initial' | 'inherit'>;
    /** Sets the `align-content` css property on this element */
    alignContent?: ResponsiveValue<undefined | 'flex-start' | 'start' | 'center' | 'flex-end' | 'end' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit'>;
    /** Sets the `justify-content` css property on this element */
    j?: ResponsiveValue<undefined | 'flex-start' | 'start' | 'center' | 'flex-end' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit'>;
    /** Sets the `justify-content` css property on this element */
    justifyContent?: ResponsiveValue<undefined | 'flex-start' | 'start' | 'center' | 'flex-end' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit'>;
    /** Sets the `justify-items` css property on this element */
    justifyItems?: ResponsiveValue<undefined | 'normal' | 'stretch' | 'flex-start' | 'start' | 'left' | 'center' | 'flex-end' | 'end' | 'right' | 'initial' | 'inherit'>;
    /** Sets the `justify-self` css property on this element */
    justifySelf?: ResponsiveValue<undefined | 'normal' | 'stretch' | 'start' | 'flex-start' | 'left' | 'center' | 'flex-end' | 'end' | 'right' | 'initial' | 'inherit'>;
    /** Sets the `flex` css property on this element */
    flex: ResponsiveValue<UnitValue>;
    /** Sets the `flex-direction` css property on this element */
    direction?: ResponsiveValue<undefined | 'row' | 'rowReverse' | 'column' | 'columnReverse' | 'initial' | 'inherit'>;
    /** Sets the `flex-direction` css property on this element */
    flexDirection?: ResponsiveValue<undefined | 'row' | 'rowReverse' | 'column' | 'columnReverse' | 'initial' | 'inherit'>;
    /** Sets the `flex-basis` css property on this element */
    basis?: ResponsiveValue<number | string | undefined>;
    /** Sets the `flex-basis` css property on this element */
    flexBasis?: ResponsiveValue<number | string | undefined>;
    /** Sets the `flex-grow` css property on this element */
    grow?: ResponsiveValue<number | string | undefined>;
    /** Sets the `flex-grow` css property on this element */
    flexGrow?: ResponsiveValue<number | string | undefined>;
    /** Sets the `flex-shrink` css property on this element */
    shrink?: ResponsiveValue<number | string | undefined>;
    /** Sets the `flex-shrink` css property on this element */
    flexShrink?: ResponsiveValue<number | string | undefined>;
    /** Sets the `flex-wrap` css property on this element */
    wrap?: ResponsiveValue<undefined | 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit'>;
    /** Sets the `flex-wrap` css property on this element */
    flexWrap?: ResponsiveValue<undefined | 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit'>;
    /** Sets the `order` css property on this element */
    order?: ResponsiveValue<number | string>;
    /** Sets the `gap` css property on this element */
    gap?: ResponsiveValue<UnitValue>;
    /** Sets the `column-gap` css property on this element */
    columnGap?: ResponsiveValue<UnitValue>;
    /** Sets the `row-gap` css property on this element */
    rowGap?: ResponsiveValue<UnitValue>;
    /** Sets the `grid-column` css property on this element */
    gridColumn?: ResponsiveValue<string | undefined>;
    /** Sets the `grid-row` css property on this element */
    gridRow?: ResponsiveValue<string | undefined>;
    /** Sets the `grid-auto-flow` css property on this element */
    gridAutoFlow?: ResponsiveValue<undefined | 'row' | 'column' | 'dense' | 'row dense' | 'column dense'>;
    /** Sets the `grid-auto-columns` css property on this element */
    gridAutoColumns?: ResponsiveValue<'auto' | 'max-content' | 'min-content' | UnitValue>;
    /** Sets the `grid-auto-rows` css property on this element */
    gridAutoRows?: ResponsiveValue<'auto' | 'max-content' | 'min-content' | UnitValue>;
    /** Sets the `grid-template-columns` css property on this element */
    gridTemplateColumns?: ResponsiveValue<'none' | 'auto' | 'max-content' | 'min-content' | UnitValue>;
    /** Sets the `grid-template-rows` css property on this element */
    gridTemplateRows?: ResponsiveValue<'none' | 'auto' | 'max-content' | 'min-content' | UnitValue>;
    /** Sets the `grid-template-areas` css property on this element */
    gridTemplateAreas?: ResponsiveValue<'none' | string | undefined>;
    /** Sets the `grid-area` css property on this element */
    gridArea?: ResponsiveValue<string | undefined>;
    /** Sets the `width` css property on this element */
    w?: ResponsiveValue<UnitValue>;
    /** Sets the `max-width` css property on this element */
    maxw?: ResponsiveValue<UnitValue>;
    /** Sets the `min-width` css property on this element */
    minw?: ResponsiveValue<UnitValue>;
    /** Sets the `height` css property on this element */
    h?: ResponsiveValue<UnitValue>;
    /** Sets the `max-height` css property on this element */
    maxh?: ResponsiveValue<UnitValue>;
    /** Sets the `min-height` css property on this element */
    minh?: ResponsiveValue<UnitValue>;
    /** Sets the `background` css property on this element. Can be passed dot notated theme config strings to select color token values. */
    bg?: ResponsiveValue<string | undefined>;
    /** Sets the `color` css property on this element. Can be passed dot notated theme config strings to select color token values. */
    c?: ResponsiveValue<string | undefined>;
    /** Sets the `border-color` css property on this element. Can be passed dot notated theme config strings to select color token values. */
    borderColor?: ResponsiveValue<string | undefined>;
    /** Sets the `border-width` css property on this element. */
    borderWidth?: ResponsiveValue<BorderWidthValue>;
    /** Sets the `border-style` css property on this element. */
    borderStyle?: ResponsiveValue<undefined | 'solid' | 'dotted' | 'dashed'>;
    /** Sets the `border` css property on this element. */
    border?: ResponsiveValue<boolean | undefined>;
    /** Sets the `border-top` css property on this element. */
    borderTop?: ResponsiveValue<boolean | undefined>;
    /** Sets the `border-right` css property on this element. */
    borderRight?: ResponsiveValue<boolean | undefined>;
    /** Sets the `border-bottom` css property on this element. */
    borderBottom?: ResponsiveValue<boolean | undefined>;
    /** Sets the `border-left` css property on this element. */
    borderLeft?: ResponsiveValue<boolean | undefined>;
    /** Sets the `border-radius` css property on this element. */
    borderRadius?: ResponsiveValue<BorderRadiusValue>;
    /** Sets the `border-top-right-radius` css property on this element. */
    borderTopRightRadius?: ResponsiveValue<BorderRadiusValue>;
    /** Sets the `border-top-left-radius` css property on this element. */
    borderTopLeftRadius?: ResponsiveValue<BorderRadiusValue>;
    /** Sets the `border-bottom-right-radius` css property on this element. */
    borderBottomRightRadius?: ResponsiveValue<BorderRadiusValue>;
    /** Sets the `border-bottom-left-radius` css property on this element. */
    borderBottomLeftRadius?: ResponsiveValue<BorderRadiusValue>;
    /** Sets the `border-top-right-radius` and `border-top-left-radius` css properties on this element. */
    borderTopRadius?: ResponsiveValue<BorderRadiusValue>;
    /** Sets the `border-top-right-radius` and `border-bottom-right-radius` css properties on this element. */
    borderRightRadius?: ResponsiveValue<BorderRadiusValue>;
    /** Sets the `border-bottom-right-radius` and `border-bottom-left-radius` css properties on this element. */
    borderBottomRadius?: ResponsiveValue<BorderRadiusValue>;
    /** Sets the `border-top-left-radius` and `border-bottom-left-radius` css properties on this element. */
    borderLeftRadius?: ResponsiveValue<BorderRadiusValue>;
    /** Sets the `line-height` css property  */
    lineHeight?: ResponsiveValue<string | number>;
    /** Sets the `font-weight` css property */
    fontWeight?: ResponsiveValue<undefined | 'light' | 'regular' | 'medium' | 'lighter' | 'normal' | 'bold' | 'bolder' | 'initial' | 'inherit' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'>;
    /** Shorthand for `fontWeight`. Sets the `font-weight` css property */
    fw?: ResponsiveValue<undefined | 'light' | 'regular' | 'medium' | 'lighter' | 'normal' | 'bold' | 'bolder' | 'initial' | 'inherit' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'>;
    /** Sets the `font-size` css property */
    fontSize?: ResponsiveValue<undefined | UnitValue | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>;
    /** Shorthand for `fontSize`. Sets the `font-size` css property */
    fs?: ResponsiveValue<undefined | UnitValue | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>;
    /** Sets the `font-family` css property */
    fontFamily?: ResponsiveValue<undefined | 'sans' | 'serif' | 'mono' | string>;
    /** Shorthand for `opacity`. Sets the `opacity` css property */
    opacity?: ResponsiveValue<OpacityValue>;
    /** Applies Mortar standard box-shadow values */
    elevation?: ResponsiveValue<'z0' | 'z1' | 'z2' | 'z3' | 'z4'>;
    /** Adjust this elements bleed if it is a direct descendant of an mte-layout-container */
    layoutBleed?: 'full' | 'popout' | 'content' | undefined;
    /**
     * Renders this element as a subgrid when set. `display` is set to `grid` and `grid-template-columns` is set to `subgrid`.
     * @experimental
     */
    subgrid: boolean;
    /**
     * Override this selector to have instance styles target a specific inner element.
     * Useful in specific scenarios where the primary content/slot wrapped within the template
     * like with the modal component.
     */
    protected contentStyleSelectorRoot: string;
    private static contentProps;
    protected updateInstanceStyles(changedProps: Map<string, any>): void;
}
