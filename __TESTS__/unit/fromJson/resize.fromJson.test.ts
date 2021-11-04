import {fromJson} from "../../../src/internal/fromJson";
import {scale} from "../../../src/actions/resize";
import {Transformation} from '../../../src';
import {IActionModel} from "../../../src/internal/models/IActionModel";
import {IResizeAdvancedActionModel} from "../../../src/internal/models/IResizeAdvancedActionModel";

describe('resize.fromJson', () => {
  it('should generate a url with resize actions from array of models', function () {
    const transformation = fromJson([
      {actionType: 'scale', dimensions: {width: 100, aspectRatio: 7}},
      {actionType: 'fit', dimensions: {height: 200, aspectRatio: '16:9'}, relative: true},
      {actionType: 'limitFit', dimensions: {height: 200, aspectRatio: 'ignore_aspect_ratio'}, relative: true},
      {actionType: 'minimumFit', dimensions: {width: 100}, regionRelative: true},
      {actionType: 'crop', dimensions: {width: 100}, regionRelative: true, gravity: {gravityType: 'direction', compass: 'north_east'}, y: 3, zoom: 7},
      {actionType: 'fill', dimensions: {width: 100}, relative: true, gravity: {gravityType: 'ocr'}, x: 4, y: 5},
      {actionType: 'limitFill', dimensions: {width: 100}, relative: true, gravity: {gravityType: 'direction', compass: 'south'}, x: 4, y: 5},
      {actionType: 'thumbnail', dimensions: {width: 100}, relative: true, gravity: {gravityType: 'direction', compass: 'south'}, zoom: 4},
      {actionType: 'pad', dimensions: {width: 100}, relative: true, gravity: {gravityType: 'direction', compass: 'south'}, x: 3, y:4, background: 'white'},
      {actionType: 'limitPad', dimensions: {width: 100}, relative: true, gravity: {gravityType: 'direction', compass: 'south'}, x: 3, y:4, background: 'white'},
      {actionType: 'minimumPad', dimensions: {width: 100}, relative: true, gravity: {gravityType: 'direction', compass: 'south'}, x: 3, y:4, background: 'white'},
      {
        actionType: 'crop',
        dimensions: {width: 200},
        gravity: {
          gravityType: 'auto',
          autoFocus: [
            {object: 'person', weight: 100},
            {object: 'cat', avoid: true}
          ]
        }
      }
    ]);

    expect(transformation.toString()).toStrictEqual([
      'ar_7.0,c_scale,w_100',
      'ar_16:9,c_fit,fl_relative,h_200',
      'c_limit,fl_ignore_aspect_ratio,fl_relative,h_200',
      'c_mfit,fl_region_relative,w_100',
      'c_crop,fl_region_relative,g_north_east,w_100,y_3,z_7',
      'c_fill,fl_relative,g_ocr_text,w_100,x_4,y_5',
      'c_lfill,fl_relative,g_south,w_100,x_4,y_5',
      'c_thumb,fl_relative,g_south,w_100,z_4',
      'b_white,c_pad,fl_relative,g_south,w_100,x_3,y_4',
      'b_white,c_lpad,fl_relative,g_south,w_100,x_3,y_4',
      'b_white,c_mpad,fl_relative,g_south,w_100,x_3,y_4',
      'c_crop,g_auto:person_100:cat_avoid,w_200',
    ].join('/'));
  });

  it('Should get original action when doing .toJson().fromJson()', ()=>{
    const transformation = new Transformation().addAction(scale('1.0'));
    const json = transformation.toJson() as IActionModel[];

    expect((json[0] as IResizeAdvancedActionModel).dimensions.width).toStrictEqual('1.0');
    expect(transformation.toString()).toStrictEqual('c_scale,w_1.0');
    expect(transformation).toMatchObject(fromJson(json));
    expect(transformation.toString()).toStrictEqual(fromJson(json).toString());
  });
});
