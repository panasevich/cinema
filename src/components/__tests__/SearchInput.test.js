import React from 'react';
import SearchInput from '../SearchInput';
import { shallow } from '../../helpers/enzyme';
import renderer from 'react-test-renderer';

describe('Search input tests', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<SearchInput onChange={() => {}} onClick={() => {}} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});