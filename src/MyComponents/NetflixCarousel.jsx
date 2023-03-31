import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

class NetflixCarousel extends Component {
    state = {
        films: [],
        films2: []
        };
    
        async componentDidMount() {
            try {
            const response = await fetch("http://www.omdbapi.com/?apikey=7aba02a6&s=star%20wars");
            if (response.ok) {
                const data = await response.json();
                this.setState({ films: data.Search });
            } else {
                console.log("error");
            }
            } catch (error) {
            alert(error);
            }
            try {
            const response = await fetch("http://www.omdbapi.com/?apikey=7aba02a6&s=harry%20potter");
            if (response.ok) {
                const data = await response.json();
                this.setState({ films2: data.Search });
            } else {
                console.log("error");
            }
            } catch (error) {
            alert(error);
            }
        }

    render(){
        return (
            <>
            <Carousel>
                <Carousel.Item >
                    <Row >
                        {this.state.films.map((film) => (
                            <Col lg={4} key={film.imdbID}>
                                <img
                                className="d-block w-100"
                                src={film.Poster} 
                                alt={film.Title}
                                />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            {/* {this.state.films2.map((film2) => (
                    <Carousel.Item  className="overflow">
                    <Row >
                        <Col lg={3} key={film2.imdbID}>
                            <img
                            className="d-block w-100"
                            src={film2.Poster} 
                            alt={film2.Title}
                            />
                        </Col>
                    </Row>
                    </Carousel.Item>
                    ))} */}
            </Carousel>
            </>
        );
    }
}

export default NetflixCarousel;