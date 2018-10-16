import React from 'react';
import SearchInput from '../SearchInput';
import { shallow } from '../../helpers/enzyme';
import renderer from 'react-test-renderer';

describe('Search input tests', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <SearchInput data={()=>{}} />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should get data from input', () => {
        const component = shallow(<SearchInput data={()=>{}} />);
        const input = component.find('input');
        input.simulate('change',{ target: { value: 'Tarantino' }});

        const submitButton = component.find('button');
        submitButton.simulate('click');

        component.update();

        expect(component.state('searchString')).toBe('Tarantino');
    });
});