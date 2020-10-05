import { render } from '@testing-library/react'
import React from 'react'


export default class extends React.Component{
    state = {
        startup : false,
        reducers: false,
        provider: false,
        connect: false,
    }

    render() {
        return (
        <div className="ui grid container">
            <div className="column sixteen">
                <div class="ui accordion styled" style={{width: '100%'}}>
                <div className={`title ${this.state.startup ? 'active' : ''}`} onClick={() => { this.setState({startup: !this.state.startup})}}>
                        <i class="dropdown icon"></i>
                        1 - Startup
                    </div>
                    <div className={`content ${this.state.startup ? 'active' : ''}`}>
                        <p class="transition">Creiamo le cartelle che struttureranno la nostra applicazione: <code>actions</code> e <code>reducers</code>, aggiungiamo in emtrambi il file <code>index.js</code> <b>perchè?</b></p>
                        <p class="transition">Creiamo l'<b>actionCreator</b> <code>selectSong</code>, facciamogli tornare come <code>payload</code> la canzone selezionata e come action <code>'SONG_SELECTED'</code>  </p>
                    </div>
                    <div className={`title ${this.state.reducers ? 'active' : ''}`} onClick={() => { this.setState({reducers: !this.state.reducers})}}>
                        <i class="dropdown icon"></i>
                        2 - Reducers
                    </div>
                    <div className={`content ${this.state.reducers ? 'active' : ''}`}>
                        <p class="transition">Creiamo i nostri due <b>reducers</b> :   <code>songsReducers</code> e <code>selectedSongReducer</code> </p>
                        <p class="transition">Usiamo <b>combineReducers</b></p>
                    </div>
                    <div className={`title ${this.state.provider ? 'active' : ''}`} onClick={() => { this.setState({provider: !this.state.provider})}}>
                        <i class="dropdown icon"></i>
                        3 - provider
                    </div>
                    <div className={`content ${this.state.provider ? 'active' : ''}`}>
                        <p class="transition"> Importiamo <b>Provicer</b> e rendiamo il padre dell'applicazione, usiamo la funzione di <code>redux</code> <code>createStore</code> </p>
                    </div>
                    <div className={`title ${this.state.connect ? 'active' : ''}`} onClick={() => { this.setState({connect: !this.state.connect})}}>
                        <i class="dropdown icon"></i>
                        4 - connect function (Component)
                    </div>
                    <div className={`content ${this.state.connect ? 'active' : ''}`}>
                        <p class="transition"> Usiamo la  <b>connect</b> e diciamoli cosa vogliamo che sia mappato nelle props di <code>SongList</code></p>
                        <p className="transition">Creiamo una funzione <code>renderList</code> per stampare le nostre canzoni... <b>Prova da solo!</b></p>
                        <p className="transition"><b>Esercizio!</b> Inserisci la proprietà <code>favouriteTitle</code> al songsReducer, e assegna alla proprietà <code>songs</code> l'attuale array, dopodiché modifica il mapStateToProps di <code>SongsList</code> e stampa "- favorita", nella canzone che ha lo stesso titolo della favouriteSong.</p>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}