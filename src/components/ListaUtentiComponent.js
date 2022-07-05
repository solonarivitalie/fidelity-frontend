import React from "react";
import UtenteService from "../services/UtenteService";

class ListaUtentiComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      utenti: [],
    };
  }

  componentDidMount() {
    UtenteService.getUtenti().then((response) => {
      this.setState({ utenti: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Lista Utenti</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Id Utente</td>
                    <td>Nome Utente</td>
                    <td>Cognome Utente</td>
                    <td>Id E-mail Utente</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.utenti.map(
                        utente =>
                        <tr key={utente.id}>
                            <td>{utente.id}</td>
                            <td>{utente.nome}</td>
                            <td>{utente.cognome}</td>
                            <td>{utente.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
      </div>
    );
  }
}

export default ListaUtentiComponent;
