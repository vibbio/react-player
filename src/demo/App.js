import React, { Component } from 'react';

import './reset.scss';
import './defaults.scss';
import './App.scss';

import VideoComponent from '../component/VideoComponent';

class App extends Component {
    render() {
        const func = values => console.log('submitted values: ', values);
        return (
            <div className="app">
                <section className="section">
                    <VideoComponent
                        // url="https://storage.googleapis.com/vibbio-storage/ingridtestas/2018-07-10/eb5d99c7-e447-4c7d-bda2-252bfde8e177.mov"
                        url="https://storage.googleapis.com/dev-vibbex-bucket/coolturtle/2018-05-07/85bbeb7c-54d4-4606-b2d3-848882c5ba70.mp4"
                        startTime={1.0}
                        endTime={2.0}
                        onEndFunction={func}
                    >
                        <p>Add children components here</p>
                    </VideoComponent>
                </section>
            </div>
        );
    }
}

export default App;
