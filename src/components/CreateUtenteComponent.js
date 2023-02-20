import React, { Component } from 'react';

class CreateUtenteComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            nome:'',
            cognome:'',
            email:''
        }

        this.changeCognomeHandler=this.changeCognomeHandler.bind(this);
        this.changeNomeHandler=this.changeNomeHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeCategoriaHandler=this.changeCategoriaHandler.bind(this);

        this.saveUtente=this.saveUtente.bind(this);
    }

changeNomeHandler=(event) => {
    this.setState({nome: event.target.value})
}

changeCognomeHandler=(event) => {
    this.setState({cognome: event.target.value})
}
changeEmailHandler=(event) => {
    this.setState({email: event.target.value})
}
changeCategoriaHandler=(event) => {
    this.setState({categoria: event.target.value})
}
saveUtente = (e) => {
    e.preventDefault();
    let utente = {nome: this.state.nome, cognome: this.state.cognome, email: this.state.email, categoria: this.state.categoria};
    console.log('utente => '+ JSON.stringify(utente));
}

cancel(){
    this.props.history.push('/utenti');
}
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Aggiungi Utente</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Nome:</label>
                                        <input placeholder='Nome' name='nome' className='form-control' 
                                        value={this.state.nome} onChange={this.changeNomeHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Cognome:</label>
                                        <input placeholder='Cognome' name='cognome' className='form-control' 
                                        value={this.state.cognome} onChange={this.changeCognomeHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Email:</label>
                                        <input placeholder='Email' name='emial' className='form-control' 
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Categoria:</label>
                                        <input placeholder='Categoria' name='email' className='form-control' 
                                        value={this.state.categoria} onChange={this.changeCategoriaHandler}/>
                                    </div>
                                    
                                    <button className='btn btn-success' onClick={this.saveUtente}>Salva</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} 
                                    style={{marginLeft:"10px"}}>Annulla</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateUtenteComponent;