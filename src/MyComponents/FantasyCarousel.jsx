import { Component } from 'react';
import { Alert, Col, Row, Spinner } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

class FantasyCarousel extends Component {
    state = {
        error: false,
        errorMsg: "",
        isLoading: true,
        films: [],
        films2: [],
        films3: []
        };
    
        async componentDidMount() {
            try {
                const response = await fetch("http://www.omdbapi.com/?apikey=7aba02a6&s=star%20wars");
                if (response.ok) {
                    const data = await response.json();
                    this.setState({ films: data.Search });
                    this.setState({isLoading: false})
                } else {
                    console.log("error");
                    this.setState({error: true, isLoading: false})
                }
            } catch (error) {
                alert(error);
                this.setState({error: true, errorMsg: error.message, isLoading: false})
            }

            try {
            const response = await fetch("http://www.omdbapi.com/?apikey=7aba02a6&s=harry%20potter");
                if (response.ok) {
                    const data = await response.json();
                    this.setState({ films2: data.Search });
                    this.setState({isLoading: false})
                } else {
                    console.log("error");
                    this.setState({error: true, isLoading: false})
                }
            } catch (error) {
                alert(error);
                this.setState({error: true, errorMsg: error.message, isLoading: false})
            }

            try {
            const response = await fetch("http://www.omdbapi.com/?apikey=7aba02a6&s=lord%20of%20the%20rings");
                if (response.ok) {
                    const data = await response.json();
                    this.setState({ films3: data.Search });
                    this.setState({isLoading: false})
                } else {
                    console.log("error");
                    this.setState({error: true, isLoading: false})
                }
            } catch (error) {
                alert(error);
                this.setState({error: true, errorMsg: error.message, isLoading: false})
            }
        }

    render(){
        return (
            <>
            <h5 className="text-light ms-5 mt-4">Fantasy/Scifi</h5>
            <Carousel className="m-5">
                <Carousel.Item className='mx-auto'>
                    <Row className="justify-content-center g-2">
                        {/* inserisco lo spinner */}
                            {this.state.isLoading && !this.state.error && (
                            <Spinner animation="border" role="status" className="text-light">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            )}
                        {/* inserisco l'errore */}
                            {this.state.error && !this.state.isLoading && (
                            <Alert variant="danger">{this.state.errorMsg ? this.state.errorMsg : "Errore nel reperire i dati"}</Alert>
                            )}
                        {this.state.films.map((film) => (
                            <Col xs={true} md={3} lg={2} key={film.imdbID} className="m-3">
                                <Link to={"/movie-details/" + film.imdbID}>
                                <img
                                className="d-block"
                                height="300px"
                                width="200px"
                                src={film.Poster} 
                                alt={film.Title}
                                />
                                </Link>
                                
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item >
                    <Row className="justify-content-center g-2">
                        {/* inserisco lo spinner */}
                            {this.state.isLoading && !this.state.error && (
                            <Spinner animation="border" role="status" className="text-light">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            )}
                        {/* inserisco l'errore */}
                            {this.state.error && !this.state.isLoading && (
                            <Alert variant="danger">{this.state.errorMsg ? this.state.errorMsg : "Errore nel reperire i dati"}</Alert>
                            )}
                        {this.state.films2.map((film2) => (
                            <Col xs={true} md={3} lg={2} key={film2.imdbID} className="m-3">
                                <Link to={"/movie-details/" + film2.imdbID}>
                                    <img
                                className="d-block"
                                height="300px"
                                width="200px"
                                src={film2.Poster} 
                                alt={film2.Title}
                                />
                                </Link>
                                
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item >
                    <Row className="justify-content-center g-2">
                        {/* inserisco lo spinner */}
                            {this.state.isLoading && !this.state.error && (
                            <Spinner animation="border" role="status" className="text-light">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            )}
                        {/* inserisco l'errore */}
                            {this.state.error && !this.state.isLoading && (
                            <Alert variant="danger">{this.state.errorMsg ? this.state.errorMsg : "Errore nel reperire i dati"}</Alert>
                            )}
                        {this.state.films3.map((film3) => (
                            <Col xs={true} md={3} lg={2} key={film3.imdbID} className="m-3">
                                <Link to={"/movie-details/" + film3.imdbID}>
                                <img
                                className="d-block"
                                height="300px"
                                width="200px"
                                src={film3.Poster} 
                                alt={film3.Title}
                                />
                                </Link>
                                
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            </Carousel>
            </>
        );
    }
}

export default FantasyCarousel;