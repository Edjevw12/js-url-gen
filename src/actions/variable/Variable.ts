import SetAction from "./SetAction";
import SetReferenceAction from "./SetReferenceAction";
import SetFromContextAction from "./SetFromContextAction";
import SetFromMetadataAction from "./SetFromMetadataAction";

/**
 * Defines an new user variable.
 * @memberOf Actions
 * @namespace Variable
 */


/**
 * @description Defines an new user variable.
 * @memberOf Actions.Variable
 * @param name
 * @param {number | string | number[] | string[]} value
 */
function set(name: string, value: number | string | number[] | string[]): SetAction {
  return new SetAction(name, value);
}

/**
 * @description Allows adding a variable by sending a key and value which is a reference to a file.
 * @memberOf Actions.Variable
 * @param name
 * @param value
 */
function setReference(name: string, value: string): SetReferenceAction{
  return new SetReferenceAction(name, value);
}

/**
 * @description Allows adding a variable by sending a key and value which is a key to a value that assumed to be on
 * the asset’s context.
 * @memberOf Actions.Variable
 * @param name
 * @param value
 */
function setFromContext(name: string, value: string): SetFromContextAction {
  return new SetFromContextAction(name, value);
}

/**
 * @description Allows adding a variable by sending a name and value which is a key to a value that assumed to be on
 * the predefined account’s metadata fields.
 * @memberOf Actions.Variable
 * @param name
 * @param value
 */
function setFromMetadata(name: string, value: string): SetFromMetadataAction {
  return new SetFromMetadataAction(name, value);
}

export {set, setReference, setFromContext, setFromMetadata};
export default {set, setReference, setFromContext, setFromMetadata};
