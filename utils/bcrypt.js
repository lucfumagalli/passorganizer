const bcrypt = require("bcryptjs");

export default async function hashInformation(unHashInformation) {
    return bcrypt.hash(unHashInformation, 10).then((hashed) => {
        return hashed;
    });
}

export async function isSame(unHashInformation, hashInformation) {
    return bcrypt.compare(unHashInformation,hashInformation).then((isTheSame) => {
        return isTheSame;
    });
}

export async function decryptInformation(hashedInformation) {
    return bcrypt.d
}