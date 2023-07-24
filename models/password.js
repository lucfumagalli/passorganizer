import { Schema, model, models } from 'mongoose';

const PasswordSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    siteUrl: {
        type: String,
        required: [true, 'Site URL/TITLE is required!'],
    },
    email: {
        type: String,
        required: [true, 'email is required!'],
    },
    password: {
        type: String,
        required: [true, 'password is required!'],
    }
    // siteUrl: {
    //     iv: { type: String, required: true },
    //     encryptedData: { type: String, required: true },
    //     // required: [true, 'Site URL/TITLE is required!'],
    // },
    // email: {
    //     iv: { type: String, required: true },
    //     encryptedData: { type: String, required: true },
    //     // required: [true, 'email is required!'],
    // },
    // password: {
    //     iv: { type: String, required: true },
    //     encryptedData: { type: String, required: true },
    //     // required: [true, 'password is required!'],
    // }
});
const Passwords = models.Passwords || model("Passwords", PasswordSchema);

export default Passwords;