import { numberWithCommas } from '../../src/utils/transformations';

test('numberWithCommas', () => {
  expect(numberWithCommas(123456789)).toBe('123,456,789');
});
