import React from 'react';
import Card from '../components/Card';

import burger from '../assets/images/burger.png';
import fitness from '../assets/images/fitness.png';
import scheduler from '../assets/images/scheduler.png';
import weather from '../assets/images/weather.png';
import creeper from '../assets/images/creeper.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Eat Da Burger',
                    subTitle: 'An App For Devouring Burgers',
                    text: 'MySQL, Node.js, Express, Handlebars',
                    imgSrc: burger,
                    link: 'https://eat-burgerapp.herokuapp.com/',
                    link1: 'https://github.com/Kar3n33/Burger',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Fitness Tracker',
                    subTitle: 'Track Workout Routines',
                    text: 'Express, MongoDB, Mongoose, Javascript, AJAX',
                    imgSrc: fitness,
                    link: 'https://powerful-retreat-39538.herokuapp.com/',
                    link1: 'https://github.com/Kar3n33/WorkoutTracker',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Work Day Scheduler',
                    subTitle: 'Keep An Online Schedule For The Workday',
                    text: 'Javascript, jQuery, Moment.js',
                    imgSrc: scheduler,
                    link: 'https://kar3n33.github.io/WorkDayScheduler/',
                    link1: 'https://github.com/Kar3n33/WorkDayScheduler',
                    selected: false
                },

                {
                    id: 3,
                    title: 'Creeper Crew',
                    subTitle: 'Finding People To Accompany You To Visit Creepy Places',
                    text: 'Cheerio, Bootstrap, Express, Javascript, jQuery, Atlas-Obscura API, Axios',
                    imgSrc: creeper,
                    link: 'https://powerful-shelf-96564.herokuapp.com/',
                    link1: 'https://github.com/Kar3n33/creeper-crew',
                    selected: false
                },

                {
                    id: 4,
                    title: 'Weather App',
                    subTitle: 'Get Weather Information & Plan A Trip',
                    text: 'Javascript, jQuery, AJAX, Openweathermap API',
                    imgSrc: weather,
                    link: 'https://kar3n33.github.io/WeatherApp/',
                    link1: 'https://github.com/Kar3n33/WeatherApp',
                    selected: false
                },


            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;