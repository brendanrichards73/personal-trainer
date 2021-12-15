import {removeHTML} from '../../src/api/utils';

//TODO - reduce down to one test - loop over the tags

describe('Sanitise the data response from api calls', () => {
  test.each([['p'], ['em'], ['ol'], ['li']])(
    'removes %s from the response',
    (tag) => {
      const input = `<${tag}>hello</${tag}>`;
      const result = removeHTML(input);
      expect(result).toBe('hello');
    },
  );

  // tests below are covered in the above

  // it('removes multiple <p> tags from the response', () => {
  //   //given
  //   const input = '<p>hello</p> <p>hello</p> <p>hello</p> <p>hello</p>';
  //   //when
  //   const result = removeHTML(input);
  //   //then
  //   expect(result).toBe('hello hello hello hello');
  // });

  // it('removes multiple <em> tags from the response', () => {
  //   //given
  //   const input = '<em>today</em>';

  //   //when
  //   const result = removeHTML(input);
  //   //then
  //   expect(result).toBe('today');
  // });

  // it('removes multiple <ol> tags from the response', () => {
  //   //given
  //   const input = '<ol>tomorrow</ol>';

  //   //when
  //   const result = removeHTML(input);
  //   //then
  //   expect(result).toBe('tomorrow');
  // });

  // it('removes multiple <li> tags from the response', () => {
  //   //given
  //   const input = '<li>yesterday</li>';

  //   //when
  //   const result = removeHTML(input);
  //   //then
  //   expect(result).toBe('yesterday');
  // });
});
