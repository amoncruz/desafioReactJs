import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://receitas.devari.com.br/api/v1',
    headers: {'Content-Type': 'application/json'}
});