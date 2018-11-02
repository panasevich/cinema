import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody,
    CardTitle, Col, CardSubtitle, Button } from 'reactstrap';

export default function MovieItem(props) {
    const { imgPath, title, genre, year, movieId } = props;
    return (
        <Col sm="4" style={{ margin: '15px 0' }}>
            <Card>
                <CardImg top src={imgPath} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{year}</CardSubtitle>
                    {genre.map(item => <div key={`${item}`}>{item}</div>)}
                    <Button><Link to={`/movie/${movieId}`}>View</Link></Button>
                </CardBody>
            </Card>
        </Col>
    );
}

MovieItem.propTypes = {
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.instanceOf(Array),
    movieId: PropTypes.number.isRequired,
};
