import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Truncate (trim) a video file based on the start time defined in the metadata (relevant only where the metadata
 * includes a directive to play only a section of the video).
 */
function truncateTS(): Flag{
  return new Flag('truncate_ts');
}

export default truncateTS;