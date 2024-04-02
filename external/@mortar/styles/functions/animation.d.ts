export interface TransitionOptions {
    prop: string;
    duration?: string;
    delay?: string;
    timingFn?: string;
}
export declare const transition: ({ prop, duration, delay, timingFn, }: {
    prop: any;
    duration?: string;
    delay?: string;
    timingFn?: string;
}) => string;
