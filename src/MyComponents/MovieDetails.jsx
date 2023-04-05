import Card from 'react-bootstrap/Card';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Badge, Col } from 'react-bootstrap';

let authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzI5NGY4MWI0MjAwMTM5YjI3ZWQiLCJpYXQiOjE2ODA1MjQ2NDksImV4cCI6MTY4MTczNDI0OX0.niPd6nu1dFizpA8FFK5zdC_prg92GwBgNRGPoAgDQ4g";

const MovieDetails = () => {
	const [movieDetails, setMovieDetails] = useState([]);
	const [movieComments, setMovieComments] = useState([]);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	const params = useParams();
	const location = useLocation();
	console.log('PARAMS:', params);
	console.log('LOCATION:', location);
	console.log('LOCATION:', location.pathname);

	useEffect(() => {
		fetchMovieDetails();
		fetchComments();
	}, []);

	const movieId = params.movieID;

	const fetchMovieDetails = async () => {
		try {
			const response = await fetch('http://www.omdbapi.com/?apikey=7aba02a6&i=' + movieId);
			if (response.ok) {
				const data = await response.json();
				setMovieDetails(data);
				console.log(movieDetails);
			} else {
				console.log('errore nel recupero dati');
			}
		} catch (error) {
			console.log('error');
			setError(error);
			setErrorMsg(errorMsg);
		}
	};

	const fetchComments = async () => {
		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + movieId, {
				headers: {
					Authorization:
						authorization,
				},
			});
			if (response.ok) {
				const data = await response.json();
				setMovieComments(data);
			} else {
				console.log('errore nel recupero dei dati');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
        <Col md={3}>
            <Card>
                <Card.Img variant="top" src={movieDetails.Poster} />
                <Card.Body>
                    <Card.Title>{movieDetails.Title}</Card.Title>
                    <Card.Text>{movieDetails.Plot}</Card.Text>
                        {movieComments.map((singleComment) => 
                            <Card.Text className='bg-secondary text-light m-1 p-2 rounded'>
                                <Badge className='m-1'>Rate: {singleComment.rate}</Badge>
                                {singleComment.comment}
                            </Card.Text>
                        )}
                </Card.Body>
            </Card>
        </Col>
		
	);
};

export default MovieDetails;