import React from 'react';
import MovieItem from '../components/MovieItem'

const movies = [{title: 'Django', year: 2004, type: 'Action', path: 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
{title: 'Django', year: 2004, type: 'Action', path: 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
{title: 'Django', year: 2004, type: 'Action', path: 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX182_CR0,0,182,268_AL_.jpg'}];

export default function Movies() {
    const renderMovies = () => movies.length ? movies.map((item,idx)=>(
        <MovieItem
            key={`${item.type}-${idx}`}
            title={item.title}
            imgPath={item.path}
            type={item.type}
            year={item.year}
        />
    )) : 'No results';
    return (
        <div className="movies">
            {renderMovies()}
        </div>
    )
}