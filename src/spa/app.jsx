import React from 'react';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Test'
        };
    }
    render() {
        return <div>
            Hello world
        </div>
    }
}