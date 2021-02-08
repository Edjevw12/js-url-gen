import {VideoSource} from "./source/sourceTypes/VideoSource";
/**
 * @description This namespace contains different sources that can be used as a transition between two videos
 * @memberOf Qualifiers
 * @namespace Transition
 */


/**
 * @description Returns an instance of a VideoSource
 * @memberOf Qualifiers.Transition
 * @param {string} publicID The publicID of the video to be used as a transition
 * @return {Qualifiers.Source.VideoSource}
 */
function videoSource(publicID: string): VideoSource {
  return new VideoSource(publicID);
}


const Transition = {videoSource};
export {Transition, videoSource};