import { connectToDb } from "@utils/database"
import Password from "@models/password";
import { encrypt,decrypt } from "@utils/cryptography";

export const GET = async (request, { params }) => {
    try {
        await connectToDb();
        const passwordOfUser = await Password.findById(params.id).populate("creator");
        const decryptedPassword = await decrypt([passwordOfUser],process.env.SECRET_KEY);
        return new Response(JSON.stringify(decryptedPassword), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch password of user " + error, { status: 500 });
    }
}

export const PATCH = async(request, { params }) => {
    const requestData = await request.json();
    try {
        await connectToDb();
        const cipherData = await encrypt(requestData,process.env.SECRET_KEY).then((value) => {
            return value;
        });
        
        const existingPsw = await Password.findById(params.id);
        if(!existingPsw){
            return new Response("Password not found",{ status: 404 });
        }
        existingPsw.siteUrl = cipherData.siteUrl;
        existingPsw.email = cipherData.email;
        existingPsw.password = cipherData.password;

        return new Response("Password updated",{ status: 200 });
    } catch (error) {
        return new Response("Error updating password", { status: 500 });
    }
}

export const DELETE = async(request, { params }) => {
    try {
        await connectToDb();
        await Password.findByIdAndDelete(params.id);

        return new Response("Password delete succesfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting password " + error, { status: 500 });     
    }
}