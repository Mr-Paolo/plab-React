import React from 'react';

export default () => {
    return (
        <div className="ui grid container ">
            <div className="twelve wide column">
                <p>L'applicativo avrà questa logica:
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
                </p>
            </div>
        </div>
    )
}