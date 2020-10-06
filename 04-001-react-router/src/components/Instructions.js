import React from 'react'


export default class extends React.Component{
    state = {
        startup : false,
        route: false,
        link: false,
        esercizio: false,
    }

    render() {
        return (
        <div className="ui grid container">
            <div className="column sixteen">
                <div className="ui accordion styled" style={{width: '100%'}}>
                <div className={`title ${this.state.startup ? 'active' : ''}`} onClick={() => { this.setState({startup: !this.state.startup})}}>
                        <i className="dropdown icon"></i>
                        1 - Startup
                    </div>
                    <div className={`content ${this.state.startup ? 'active' : ''}`}>
                        <p className="transition">Installiamo <b>React Router DOM</b>: <code>npm i -s react-router-dom</code></p>
                        <p className="transition"><b>Usiamo il componente</b>  <code>BrowserRouter</code></p>
                    </div>
                    <div className={`title ${this.state.route ? 'active' : ''}`} onClick={() => { this.setState({route: !this.state.route})}}>
                        <i className="dropdown icon"></i>
                        2 - route component
                    </div>
                    <div className={`content ${this.state.route ? 'active' : ''}`}>
                        <p className="transition">Vediamo la sintatti del componente <code>Route</code>, specificando path e component</p>
                        <p className="transition"> <b>Creiamo la navigazione</b> creiamo duce comonente funzionali <code>PageOne</code> e <code>PageTwo</code>  </p>
                        <p className="transition">Usiamo l'attributo exact = true</p>
                    </div>
                    <div className={`title ${this.state.link ? 'active' : ''}`} onClick={() => { this.setState({link: !this.state.link})}}>
                        <i className="dropdown icon"></i>
                        3 - link
                    </div>
                    <div className={`content ${this.state.link ? 'active' : ''}`}>
                        <p className="transition"> Inseriamo in <code>Header</code> il link a <code>/</code> e a <code>/pagetwo</code> </p>
                    </div>
                    <div className={`title ${this.state.esercizio ? 'active' : ''}`} onClick={() => { this.setState({esercizio: !this.state.esercizio})}}>
                        <i className="dropdown icon"></i>
                        4 - esercizio
                    </div>
                    <div className={`content ${this.state.esercizio ? 'active' : ''}`}>
                        <p className="transition">Creiamo la cartella <code>streams</code> e 4 componenti (functional): <code>StreamCreate</code>,<code>StreamDelete</code>,<code>StreamEdit</code>,<code>StreamList</code>,<code>StreamShow</code></p>
                        <p className="transition">Puntiamo <code>/</code> che mostri il componente StreamList </p>
                        <p className="transition">Puntiamo <code>/streams/new</code> che mostri il componente StreamNew </p>
                        <p className="transition">Puntiamo <code>/streams/create</code> che mostri il componente StreamCreate </p>
                        <p className="transition">Puntiamo <code>/streams/edit</code> che mostri il componente StreamEdit</p>
                        <p className="transition">Puntiamo <code>/streams/delete</code> che mostri il componente StreamDelete </p>
                        <p className="transition">Puntiamo <code>/streams/show</code> che mostri il componente StreamShow </p>
                        <p className="transition">in <code>Header</code> togliamo gli attuali link e lasciamo un solo link alla homepage  </p>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}