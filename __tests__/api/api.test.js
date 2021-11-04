import {removeHTML} from '../../src/api/utils';

describe('Sanitise the data respone from api calls', () => {
  it('removes multiple <p> tags from the response', () => {
    //given
    const input = '<p>hello</p> <p>hello</p> <p>hello</p> <p>hello</p>';
    //when
    const result = removeHTML(input);
    //then
    expect(result).toBe('hello hello hello hello');
  });
});
