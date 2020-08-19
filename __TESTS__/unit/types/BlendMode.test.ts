import BlendMode from "../../../src/params/blendMode/BlendMode";
import * as BlendModeESM from "../../../src/params/blendMode/BlendMode";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";


describe('BlendMode Param', () => {
  it('Ensure ESM and Default export the same thing', () => {
    expectESMToMatchDefault(BlendModeESM, BlendMode);
  });

  it('Tests simple gravitation', () => {
    expect(BlendMode.screen().toString()).toBe('e_screen');
    expect(BlendMode.multiply().toString()).toBe('e_multiply');
    expect(BlendMode.overlay().toString()).toBe('e_overlay');
  });
});