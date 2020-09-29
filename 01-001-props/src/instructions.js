import React from 'react';

export default () => {
    return (
        <div className="ui grid container">
            <div className="sixteen wide column">
                <p>1 - Vediamo il nostro nuovo css framework... <b>semantic ui</b></p>
                <p>2- <b>Creiamo una struttura di commenti</b> - Vediamo la struttura HTML dalla documentazione di semantic ui e ricreiamo un commento in <code>App</code></p>
                <p>3- <b>Usiamo Faker.js</b> - Super utile per il vostro futuro! ... <code>npm i -s faker</code></p>
                <p>4- <b>Scriviamo tre commenti</b> - è arrivato il momento di creare il nostro componente! creiamo il nostro <code>CommentDetail.js</code> component</p>
                <p>5- <b>Dinamicizziamo usando le props</b> - passiamo l' <code>author</code> e il <code>timeAgo</code>!</p>
                <p>6- <b>DIY</b> -Dinamicizza il <code>content</code> e l' <code>avatar</code></p>
                <p>7- <b>Creaiamo un approval card,</b> - l'obiettivo è avere un approval component riutilizzabile</p>
                <p>8- <b>Creiamo</b> <code>ApprovalVard.js</code> e usiamo il codice di semantic per le <b>Card</b>, come content... Chiediamo semplicemente "Sei sicuro?"</p>
                <p>9- <b>inseriamo il componente </b> <code>CommentDetail</code> dentro il nostro <code>ApprovalCard</code></p>
                <p>10- Ricordate come l'avreste fatto con angular?</p>
                <p>
                    11- <b>Esercizio!</b> <br />
                    <ul>
                        <li>Invece di caricare App come componente principale dell'app in <code>index.js</code>, importa <code>Esercizio</code> da <code>esercizio1.js</code></li>
                        <li>Usa le props per dinamicizzare il componente message</li>
                    </ul>
                    12- <b>Esercizio!</b> <br />
                    <ul>
                        <li>Invece di caricare App come componente principale dell'app in <code>index.js</code>, importa <code>Esercizio</code> da <code>esercizio2.js</code></li>
                        <li>Crea un componente <code>Segment</code> che mostri i figli all'interno di di un elemento div che abbia la classe <code>ui placeholder segment</code></li>
                        <li>Cambia il codice del componente principale per usare il nuovo componente <code>Segment</code></li>
                        <li>Se sei bravo, crea Segment in un altro file chiamato <code>Segment.js</code></li>
                    </ul>
                </p>
            </div>
        </div>
    )
}