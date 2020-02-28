import React, {Component} from 'react';
import ReactJson from 'react-json-view';
import BrowserRouter from "react-router-dom/modules/BrowserRouter";
import Switch from "@material-ui/core/Switch";
import Route from "react-router-dom/es/Route";
import App from "../App";

class AboutContent extends Component {
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
            <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
                <Switch>
                    <Route path="/about.json" exact>
                        <ReactJson src={jsonData}/>

                    </Route>

                    <Route>
                        <App/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );

    }
}

export default AboutContent;
