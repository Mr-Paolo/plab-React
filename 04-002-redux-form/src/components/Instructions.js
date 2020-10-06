import React from 'react'


export default class extends React.Component{
    state = {
        startup : false,
        form: false,
        inputandevent: false,
        formsubmission: false,
        validation: false,
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
                        <p className="transition">Perdiamo un po' di tempo a guardare questa estensione di Chrome: <code>redux devtools</code></p>
                        <p className="transition">Guardiamo il progetto,oltre ad avere redux già installato...C'è una piccola chicca!</p>
                        <p className="transition"><code>npm i -s redux-form</code></p>
                        <p className="transition">Importiamo il reducer di <code>redux-form</code>, usando la form <code>as FormReducer</code>, combiniamo il <code>formReducer</code> alla chiave <code>form</code> </p>
                    </div>
                    <div className={`title ${this.state.form ? 'active' : ''}`} onClick={() => { this.setState({form: !this.state.form})}}>
                        <i className="dropdown icon"></i>
                        2 - Creiamo il form e usiamo Field
                    </div>
                    <div className={`content ${this.state.form ? 'active' : ''}`}>
                        <p className="transition"><b>Creaiamo il form di creazione delle stream</b>, trasformiamo <code>StreamCreate</code> in un classBased component</p>
                        <p className="transition">Importiamo <code>Field</code> e <code>reduxForm</code>, uno è un component, l'altro è una variante di mapStateToProps </p>
                        <p className="transition">Usiamo <code>reduxForm</code> e assegniamo un nome al <code>form</code> ('streamCreate')  </p>
                        <p className="transition">Console.log di <code>this.props</code> e guardiamo form cosa contiene</p>
                        <p className="transition"> Creiamo il <code>form</code> e inseriamo il componente <code>Field</code>, <code>name</code> attribute è obbligatorio!</p>
                        <p className="transition"> Usiamo la sintassi definitiva... <code>...formProps.input</code></p>
                        <p className="transition"><b>DIY</b>: ai due <code>Field</code>, mettiamo una props <code>label</code> e stampiamola in <code>renderInput</code></p>
                        <p className="transition"><b>DIY</b>: Migliora l'interfaccia dei form usando segment ui</p>
                    </div>
                    <div className={`title ${this.state.inputandevent ? 'active' : ''}`} onClick={() => { this.setState({inputandevent: !this.state.inputandevent})}}>
                        <i className="dropdown icon"></i>
                        3 - Inputs e eventi
                    </div>
                    <div className={`content ${this.state.inputandevent ? 'active' : ''}`}>
                        <p className="transition"> Oltre a name, inseriamo anche l'attributo component, specificando il componente <code>this.renderInput</code> (metodo della nostra classe StreamCreate) </p>
                        <p className="transition"><b>Finiamo il nostro input </b>, inseriamo un <code>console.log(formProps)</code> nel nostro metodo <code>renderInput</code> </p>
                        <p className="transition"><code>formProps.input</code> ha già al suo interno la funzione di <code>onChange</code> e il <code>value</code>, aggiugniamoli!</p>
                        <p className="transition">Vediamo come funziona il nostro <code>formReducer</code> dal nostro redux devtools</p>
                    </div>
                    <div className={`title ${this.state.formsubmission ? 'active' : ''}`} onClick={() => { this.setState({formsubmission: !this.state.formsubmission})}}>
                        <i className="dropdown icon"></i>
                        4 - Form submit
                    </div>
                    <div className={`content ${this.state.formsubmission ? 'active' : ''}`}>
                        <p className="transition"> Aggiungiamo il metodo nella class <code>onSubmit</code>, non serve <code>event.preventDefault()</code>... Vediamo perché</p>
                        <p className="transition">Aggiungiamo un <code>button</code> per il submit e inseriamo <code>console.log(formValues)</code> alla funzione <code>onSubmit</code></p>
                    </div>

                    <div className={`title ${this.state.validation ? 'active' : ''}`} onClick={() => { this.setState({validation: !this.state.validation})}}>
                        <i className="dropdown icon"></i>
                        5 - Validazione
                    </div>
                    <div className={`content ${this.state.validation ? 'active' : ''}`}>
                        <p className="transition"> </p>
                        <p className="transition">Aggiungiamo fuori dalla classe la funzione <code>validate</code> con <code>console.log(formValues)</code></p>
                        <p className="transition">Aggiugiamo validate come funzione dentro a <code>reduxForm</code></p>
                        <p className="transition">Proviamo ad aggiungere <code>console.log(meta)</code>  dentor a <code>renderInput</code>,  </p>
                        <p className="transition"><b>Diy:</b>Stampa gli errori sotto all'input in <code>renderInput</code> </p>
                        <p className="transition">Code, tra i <code>meta</code>, c'è anche <code>meta.touched</code>, usiamola per mostrarte l'errore solo quando è toccato. meglio usare <code>renderError</code></p>
                        <p className="transition">Aggiungiamo la classe <code>error</code> al form, perché... <code>semantic UI</code></p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}