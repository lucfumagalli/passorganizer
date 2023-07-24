// cryptoUtils.js
import CryptoJS from 'crypto-js';

const encrypt = async (card) => {
    const encryptedSubitems = {};
    const secretKey = process.env.SECRET_KEY;

    for (const key in card) {
        if (card.hasOwnProperty(key)) {
            const encryptedValue = CryptoJS.AES.encrypt(card[key], "inutile").toString();
            encryptedSubitems[key] = encryptedValue;
        }
    }

    return encryptedSubitems;
};

const decrypt = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, "inutile");
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
};

export { encrypt, decrypt };
