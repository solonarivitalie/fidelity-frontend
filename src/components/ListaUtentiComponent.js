import React, { Component } from "react";
import UtenteService from "../services/UtenteService";

class ListaUtentiComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utenti: [],
    };
  }

  componentDidMount() {
    UtenteService.getUtenti().then((res) => {
      this.setState({ utenti: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Lista Utenti</h1>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Id Utente</td>
                <td>Nome Utente</td>
                <td>Cognome Utente</td>
                <td>E-mail Utente</td>
                <td>Categoria</td>
                <td>Azioni</td>
              </tr>
            </thead>
            <tbody>
              {this.state.utenti.map((utente) => (
                <tr key={utente.id}>
                  <td>{utente.id}</td>
                  <td>{utente.nome}</td>
                  <td>{utente.cognome}</td>
                  <td>{utente.email}</td>
                  <td>{utente.categoria}</td>
                  <td>{}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListaUtentiComponent;
