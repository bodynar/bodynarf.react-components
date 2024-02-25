/**
 * Html data-* attributes
 * @description All keys with defined values will be mapped injected into html element as data-{key} attributes
*/
export interface DataAttributes {
    /** Single data-* attribute value */
    [key: string]: any;
}
