import {BaseSource} from "../BaseSource";
import {FormatQualifier} from "../../format/FormatQualifier";

/**
 * @memberOf Values.Source
 * @extends {Values.Source.BaseSource}
 * @description Defines how to manipulate an image layer
 * <div class="panel panel-warning">
 *   <div class="panel-heading">Notice</div>
 *   <div class="panel-body">
 *     This class is used as a Qualifier for the asset.overlay() and asset.underlay() methods.</br>
 *     You can find regular images and videos transformations below:
 *   </div>
  *   <ul>
 *     <li>{@link SDK.ImageTransformation| Image Transformations}</li>
 *     <li>{@link SDK.VideoTransformation| Video Transformations}
 *   </ul>
 * </div>
 */
class ImageSource extends BaseSource {
  readonly _publicID: string;
  private _format: FormatQualifier;

  constructor(publicID: string) {
    super();
    this._publicID = publicID;
  }

  /**
   * @description
   * Returns the opening string of the layer,
   * This method is used internally within {@link SDK.LayerAction|LayerAction}
   * @returns {string}
   */
  getOpenSourceString(): string {
    if (this._format) {
      return `${this._publicID}.${this._format.toString()}`;
    } else {
      return this._publicID;
    }
  }

  /**
   * @description
   * Apply a format for the image source of the layer
   * @param {FormatQualifier} format A to apply to the layered image, see more {@link Values.Format|here}
   * @returns {this}
   */
  format(format: FormatQualifier): this {
    this._format = format;
    return this;
  }
}

export {ImageSource};
