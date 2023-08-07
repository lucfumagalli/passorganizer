import CryptoJS from 'crypto-js';

const encrypt = async (card, secretKey) => {
    const encryptedSubitems = {};

    for (const key in card) {
        if (card.hasOwnProperty(key)) {
            const encryptedValue = CryptoJS.AES.encrypt(card[key], secretKey).toString();
            encryptedSubitems[key] = encryptedValue;
        }
    }

    return encryptedSubitems;
};

const decrypt = async (cipherCard, secretKey) => {
    const decryptedCard = cipherCard.map((item) => {
        const updatedItem = {
            ...item,
            siteUrl: CryptoJS.AES.decrypt(item.siteUrl, secretKey).toString(CryptoJS.enc.Utf8),
            email: CryptoJS.AES.decrypt(item.email, secretKey).toString(CryptoJS.enc.Utf8),
            password: CryptoJS.AES.decrypt(item.password, secretKey).toString(CryptoJS.enc.Utf8),
        };
        return updatedItem;
    })

    return decryptedCard;
};

export { encrypt, decrypt };
