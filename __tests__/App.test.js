import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

jest.useFakeTimers();

describe('App tests', () => {
  it('should render', () => {
    const {getByText} = render(<App />);
    expect(getByText('Home')).toBeTruthy();
  });
  it('should render the correct icon', () => {});
});
