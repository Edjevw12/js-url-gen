import {BaseCommonBackground} from "../base/BaseCommonBackground";

/**
 * @@doc
 * @description Automatically sets the background color when resizing with padding.
 * @class BackgroundAutoBorderQualifier
 * @augments BaseCommonBackground
 */
class BackgroundAutoBorderQualifier extends BaseCommonBackground {
  /**
   * @description
   * Stringify the qualifier
   * BackgroundQualifiers don't have a value, but instead override the toString() function
   */
  toString(): string {
    return `
    b_auto:border
    ${this._constrast ? '_contrast' : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
  }
}

export {BackgroundAutoBorderQualifier};