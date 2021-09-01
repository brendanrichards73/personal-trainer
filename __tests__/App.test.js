import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

describe('App tests', () => {
  it('should render', () => {
    const {getByText} = render(<App />);
    expect(getByText('Home')).toBeTruthy();
  });
});
