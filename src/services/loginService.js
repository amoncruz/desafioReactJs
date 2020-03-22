import axios from 'axios'

export async function signIn(username,password){
    console.log(username,password);
    let response = await axios.post('https://receitas.devari.com.br/authentication/',{username,password});
    return response.data;
}