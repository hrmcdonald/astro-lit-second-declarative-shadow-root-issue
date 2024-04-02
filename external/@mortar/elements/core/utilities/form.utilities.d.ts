/**
 * Custom validator for the `@open-wc/form-control` that leans on an internal
 * input to forward native validation
 */
export declare const innerInputValidators: {
    key: keyof ValidityState;
    isValid(instance: HTMLElement & {
        validationTarget: HTMLInputElement;
    }): boolean;
}[];
