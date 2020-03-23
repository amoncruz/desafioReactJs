const SECRETE_KEY="SECRET KEY";
import CryptoJS from 'crypto-js';

export function encryptToken(token){
    return CryptoJS.AES.encrypt(token, SECRETE_KEY).toString();
}

export function decryptToken(tokenEncrypted){
    console.log(tokenEncrypted);
    const bytes  = CryptoJS.AES.decrypt(tokenEncrypted, SECRETE_KEY);
    const tokenDecrypted = bytes.toString(CryptoJS.enc.Utf8);

    return tokenDecrypted;
}


