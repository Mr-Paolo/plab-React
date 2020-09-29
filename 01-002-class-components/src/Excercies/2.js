import React from 'react'

export default class Clock extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.time = new Date().toLocaleTimeString()    
        }, 1000)
    }
    
    render() {
        return (
            <div className="time">
                L'ora è: {this.time}
            </div>
        );
    }
}
