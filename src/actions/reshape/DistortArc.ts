import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Distorts the image to an arc shape.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/transformation_reference#e_distort | Distorting images}</br>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#image_shape_changes_and_distortion_effects | Distortion effects}
 * @memberOf Actions.Reshape
 * @param {number} degrees The degrees to arc the image
 * @extends {SDK.Action}
 */
class DistortArcAction extends Action {
  constructor(degrees: number) {
    super();
    this.addQualifier(new Qualifier('e', `distort:arc:${degrees}`));
  }
}


export {DistortArcAction};