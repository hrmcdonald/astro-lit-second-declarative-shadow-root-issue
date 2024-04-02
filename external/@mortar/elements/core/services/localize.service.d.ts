export type MteDateFormatOptions = Intl.DateTimeFormatOptions & {
    lang?: string;
    format?: 'short' | 'medium' | 'long' | 'full' | 'shortDate' | 'mediumDate' | 'longDate' | 'fullDate' | 'shortTime' | 'mediumTime' | 'longTime' | 'fullTime';
};
export type MteNumberFormatOptions = Intl.NumberFormatOptions & {
    lang?: string;
};
declare class _MteLocalizeService {
    private language;
    private initialized;
    private init;
    formatNumber(numberToFormat: number | string, options?: MteNumberFormatOptions): string;
    formatDate(dateToFormat: Date | string, options?: MteDateFormatOptions): string;
    private getDefinedDateFormat;
}
export declare const MteLocalizeService: _MteLocalizeService;
export {};
