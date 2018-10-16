import React from 'react';
import MovieItem from '../MovieItem';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Movie item tests', () => {
    it('renders correctly', () => {
        const imgPath = 'url';
        const title = 'Title';
        const year = 2005;
        const genre = ['action', 'romance'];
        const tree = renderer
            .create(
                <MemoryRouter>
                    <MovieItem
                        title={title}
                        year={year}
                        genre={genre}
                        imgPath={imgPath}
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});