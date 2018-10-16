import React from 'react';
import Filter from '../Filter';
import { shallow } from '../../helpers/enzyme';
import renderer from 'react-test-renderer';

describe('Filter tests', () => {
    test('renders correctly', () => {
        const title = "Tile";
        const filters = [{title: 'filter1'},{title: 'filter2'},{title: 'filter3'},];
        const tree = renderer
            .create(<Filter title={title} searchItems={filters} data={()=>{}} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('renders filters', () => {
        const title = "Title";
        const filters = [{title: 'filter1'},{title: 'filter2'},{title: 'filter3'},];
        const wrapper = shallow(<Filter title={title} searchItems={filters} data={()=>{}} />);
        expect(wrapper.find('.search-by-item')).toBeDefined();
        expect(wrapper.find('.search-by-item')).toHaveLength(filters.length);
    });
    it('renders alternate filters design', () => {
        const title = "Title";
        const filters = [{title: 'filter1'},{title: 'filter2'},{title: 'filter3'},];
        const wrapper = shallow(<Filter title={title} searchItems={filters} alternate data={()=>{}} />);
        expect(wrapper.find('.alternate')).toBeDefined();
    });

});