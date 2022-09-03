import { MultiplyByTwoPipe } from './multiply-by-two.pipe';

describe('MultiplyByTwoPipe', () => {
  it('create an instance', () => {
    const pipe = new MultiplyByTwoPipe();
    expect(pipe).toBeTruthy();
  });
});
