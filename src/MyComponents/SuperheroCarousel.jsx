import { Component } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

class SuperheroCarousel extends Component {
    state = {
        isLoading: true,
        films: [],
        films2: [],
        films3: []
        };
    
        async componentDidMount() {
            try {
                const response = await fetch("http://www.omdbapi.com/?apikey=7aba02a6&s=spider%20man");
                if (response.ok) {
                    const data = await response.json();
                    this.setState({ films: data.Search });
                    this.setState({isLoading: false})
                } else {
                    console.log("error");
                    this.setState({isLoading: false})
                }
            } catch (error) {
                alert(error);
                this.setState({isLoading: false})
            }

            try {
            const response = await fetch("http://www.omdbapi.com/?apikey=7aba02a6&s=iron%20man");
                if (response.ok) {
                    const data = await response.json();
                    this.setState({ films2: data.Search });
                    this.setState({isLoading: false})
                } else {
                    console.log("error");
                    this.setState({isLoading: false})
                }
            } catch (error) {
                alert(error);
                this.setState({isLoading: false})
            }

            try {
            const response = await fetch("http://www.omdbapi.com/?apikey=7aba02a6&s=batman");
                if (response.ok) {
                    const data = await response.json();
                    this.setState({ films3: data.Search });
                    this.setState({isLoading: false})
                } else {
                    console.log("error");
                    this.setState({isLoading: false})
                }
            } catch (error) {
                alert(error);
                this.setState({isLoading: false})
            }
        }

    render(){
        return (
            <>
            <h5 className="text-light ms-4 mt-3">Super Heroes</h5>
            <Carousel className="my-3">
                <Carousel.Item className='mx-auto'>
                    <Row className="justify-content-center g-2">
                    {this.state.isLoading && !this.state.error && (
                    <Spinner animation="border" role="status" className="text-light">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    )}
                        {this.state.films.map((film) => (
                            <Col xs={6} lg={2} key={film.imdbID} className="m-3">
                                <img
                                className="d-block"
                                height="300px"
                                width="200px"
                                src={film.Poster} 
                                alt={film.Title}
                                />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item >
                    <Row className="justify-content-center g-2">
                    {this.state.isLoading && !this.state.error && (
                    <Spinner animation="border" role="status" className="text-light">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    )}
                        {this.state.films2.map((film2) => (
                            <Col xs={6} lg={2} key={film2.imdbID} className="m-3">
                                <img
                                className="d-block"
                                height="300px"
                                width="200px"
                                src={film2.Poster} 
                                alt={film2.Title}
                                />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item >
                    <Row className="justify-content-center g-2">
                    {this.state.isLoading && !this.state.error && (
                    <Spinner animation="border" role="status" className="text-light">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    )}
                        {this.state.films3.map((film3) => (
                            <Col xs={6} lg={2} key={film3.imdbID} className="m-3">
                                <img
                                className="d-block"
                                height="300px"
                                width="200px"
                                src={film3.Poster} 
                                alt={film3.Title}
                                />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            </Carousel>
            </>
        );
    }
}

export default SuperheroCarousel;