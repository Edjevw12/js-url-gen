import {Action} from "../../internal/Action.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IColorSpaceFromICCModel} from "../../internal/models/IDeliveryActionModel.js";


/**
 * @description Specifies the ICC profile to use for the color space.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryColorSpaceFromICC extends Action {
  protected _actionModel: IColorSpaceFromICCModel = {};

  /**
   * @param {string} publicId
   */
  constructor(publicId: string) {
    super();
    this._actionModel.actionType = 'colorSpaceFromICC';
    this._actionModel.publicId = publicId;
    const qualifierValue = new QualifierValue(['icc', publicId]).setDelimiter(':');
    this.addQualifier(new Qualifier('cs', qualifierValue));
  }
}

export {DeliveryColorSpaceFromICC};
