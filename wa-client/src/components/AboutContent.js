import React, {Component} from 'react';
import ReactJson from 'react-json-view';

class AboutContent extends React.Component {
    constructor(props) {
        super(props);
        document.title = 'About.json';
    }

    render() {
        const jsonData = {
            client: {
                host: window.location.hostname,
            },
            server: {
                current_time: Math.floor(Date.now() / 1000),
                services: [{
                    name: 'weather',
                    widgets: [{
                        name: 'city_temperature',
                        description: 'Display temperature for a city',
                        params: [{
                            name: 'city',
                            type: 'string',
                        }],
                    },
                        {
                            name: 'city_wind_speed',
                            description: 'Display the speed of the wind for a city',
                            params: [{
                                name: 'city',
                                type: 'sting',
                            }],
                        }],
                }],
            },
        };
        return (
            <ReactJson src={jsonData}/>
        );
    }
}

export default AboutContent;
