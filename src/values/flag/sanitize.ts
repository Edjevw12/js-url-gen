import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Instructs Cloudinary to run a sanitizer on the image (relevant only for the SVG format).
 */
function sanitize(): Flag{
  return new Flag('sanitize');
}

export default sanitize;