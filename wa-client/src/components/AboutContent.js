import React from 'react';
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
                    name: "OpenWeather",
                    actions: [{
                        name: "humidity_sup",
                        description: "The humidity is superior to 50 %"
                    }, {
                        name: "humidity_inf",
                        description: "The humidity is inferior to 50 %"
                    }, {
                        name: "temp_pos",
                        description: "The temperature is positive"
                    }, {
                        name: "temp_neg",
                        description: "The temperature is negative"
                    }, {
                        name: "cloudy_weather",
                        description: "The weather is cloudy"
                    }, {
                        name: "clear_weather",
                        description: "The weather is clear"
                    }]
                }, {
                    name: "Pornhub",
                    actions: [{
                        name: "new_video",
                        description: "A new video with the specified tag is uploaded"
                    }],
                }, {
                    name: "Discord",
                    reactions: [{
                        name: "send_message",
                        description: "Send a message to thje webhook specified"
                    }],
                }, {
                    name: "Twitch",
                    actions: [{
                        name: "isInLive",
                        description: "When solary in live"
                    }],
                    reactions: [{
                        name: "send",
                        description: "Send a mail on your address"
                    }, {
                        name: "Youtube",
                        actions: [{
                            name: "new_video_channel",
                            description: "A new video of a channel is uploaded"
                        }],
                    }],
                }],
            },
        };
        return (
            <ReactJson src={jsonData} />
        );
    }
}

export default AboutContent;
