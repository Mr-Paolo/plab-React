import React from 'react';

export default () => {
    return (
        <div>
            <Message />
        </div>
    );
}

const Message = (props) => {
    return (
        <div className="ui message">
            <div className="header">Titolo del messaggio</div>
            <p>Contenuto del messaggio</p>
        </div>
    );
}