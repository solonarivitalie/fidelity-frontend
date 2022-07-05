import axios from "axios";

const UTENTI_REST_API_URL = 'http://localhost:8080/api/v1/utenti';

class UtenteService {

    getUtenti(){
        return axios.get(UTENTI_REST_API_URL);
    }
}

export default new UtenteService();