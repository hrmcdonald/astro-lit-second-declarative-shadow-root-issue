export interface ActiveLinkOptions {
    /**
     * - `exact`: all path segments must match.
     * - `subset`: the leading portion of the path must match.
     */
    path: 'exact' | 'subset';
    /**
     * - `exact`: the query parameters must match exactly.
     * - `subset`: all preset parameters must exist, but others can as well.
     * - `ignored`: query params will be ignored.
     */
    queryParams: 'exact' | 'subset' | 'ignored';
    /**
     * - `exact`: indicates that the fragments must be equal.
     * - `ignored`: the fragments will not be compared when determining if active.
     */
    fragment: 'exact' | 'ignored';
}
export declare const isLinkActive: (targetHref: string, activeHref: string, options?: Partial<ActiveLinkOptions>) => boolean;
