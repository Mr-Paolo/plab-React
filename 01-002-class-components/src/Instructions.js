import React from 'react';

export default () => {
    return (
        <div className="ui grid container ">
            <div className="sixteen wide column">
                <h2>1- Introduzione</h2>
                <p>L'applicativo avrà questa logica:</p>
                <ul>
                    <li>
                        Stamperemo "FA FREDDO!" con una grafica relativa se:
                        <ul>
                            <li>l'utente è nell'emisfero NORD e tra OTTOBRE e MARZO, o </li>
                            <li>è nell'emisfero SUD e tra MARZO e Ottobre </li>
                        </ul>
                    </li>
                    <li>
                        Stamperemo "Andiamo al mare!" con una grafica relativa se:
                        <ul>
                            <li>l'utente è nell'emisfero SUD e tra OTTOBRE e MARZO, o </li>
                            <li>è nell'emisfero NORD e tra MARZO e Ottobre </li>
                        </ul>
                    </li>
                </ul>
                <p><b>Iniziamo con la geolocalizzazione, usiamo</b> <code>window.navigator.geolocation.getCurrentPosition</code></p>
                <p><b> Inseriamo anche la callback di errore! </b></p>
                <p><b>Stampiamo la latitudine in </b> <code>App</code>... E capiamo il problema principale dei functional components </p>


                <h2>State</h2>
                <p><b>Per usare lo state</b>, creiamo il nostro primo class Based components, scriviamo la funzione render al posto del return classico.</p>
                <p><b>Inizializziamo lo state, </b> creiamo <code>constructor</code> e <code>super(props)</code></p>
                <p>Gestiamo con lo state <code>lat</code> e <code>errorMessage</code>, stampandoli nel render</p>

                <p><b>Gestiamo i vari stati dell'app</b>, nel modo più semplice possibile, con le <code>if</code> conditions</p>
                

                <h2>Component lifecycle</h2>
                <p>Usiamo le funzioni <code>componentDidMount</code> e <code>componentDidUpdate</code>, vediamo come funzionano con <code>console.log</code></p>
                <p><b>Spostiamo la geolocalizzazione</b> su <code>components</code>...Perché?</p>
                <p>Inizializziamo lo state sanza constructor, con <code>state= ...</code> nella classe, quindi eliminiamo il <code>constructor</code></p>

                <h2>Completiamo l'esercizio</h2>
                <p><b>DIY: Spostiamo  la parte che mostra la latitudine</b> su <code>SeasonDisplay</code>, usando le <code>props</code></p>
                <p>Usiamo <code>new Date().getMonth()</code>, <b>Non ci serve usare una classe per una variabile che non cambia</b> </p>
                <p>Stampiamo ora "Fa Freddo!", o "Andiamo al mare!" nei momenti corretti </p>
                <p>Usiamo le icone di semanticUi per stilizzare ulteriormente, usiamo le icone <code>snowflalke</code> e <code>sun</code></p>
                <p>Stilizziamo un po e vediamo come possiamo utilizzare <code>display: flex</code>, creiamo <code>SeasonDisplay.css</code></p>


                <p>DIY: Crea un <code>Spinner</code> component e usa la proprietà Loader di segment </p>
                <p>Passiamo <code>message</code> come props a <code>Spinner</code>, e vediamo come possiamo usare le <code>defaultProps</code></p>

                <p><b>Scopriamo perché non è un bene usare la condition direttamente sulla funzione render</b> - Inseriamo un border nero attorno al componente <code>App</code></p>

                <h2>Esercizi</h2>
                <p>Carica l'esercizio 1, e rifattorizza il componenente User Form per renderlo una class, mi raccomando... ricordati di estendere <code>React.Component</code> e usare una <code>render</code> function</p>
                <p>Carica l'esercizio 2, e rifattorizza il componenente Clock per far si che la view si ri-renderizzi ogni secondo</p>
            </div>
        </div>
    )
}