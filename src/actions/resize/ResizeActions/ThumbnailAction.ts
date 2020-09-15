import ResizeSimpleAction from "./ResizeSimpleAction";

/**
 * @memberOf Actions.Resize
 * @description
 * The thumb cropping mode is specifically used for creating image thumbnails from either face or custom coordinates,</br>
 * and must always be accompanied by the gravity parameter set to one of the face detection or custom values.
 * @param {number|string} width
 * @param {number|string} height
 */
export default function thumbnail(width?: string|number, height?: string|number) :ResizeSimpleAction {
  return new ResizeSimpleAction('thumb', width, height);
}