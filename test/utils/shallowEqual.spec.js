import expect from 'expect';
import shallowEqual from '../../src/utils/shallowEqual';

describe('shallowEqual', () => {
  it('returns true if args are equal', () => {
    expect(shallowEqual(1, 2)).toBe(true);
    expect(shallowEqual({ x: 1, y: 1}, { x: 1, y: 1 })).toBe(true);
  });

  it('returns false if args have diff num of keys', () => {
    expect(shallowEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 })).toBe(false);
  });

  it('returns false if args have diff keys', () => {
    expect(shallowEqual({ a: 1, b: 3, c: 2 }, { a: 1, b: 2, c: 3 })).toBe(false);
  });
});
