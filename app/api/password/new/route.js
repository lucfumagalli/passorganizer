import { connectToDb } from "@utils/database";
import Password from "@models/password";
import { encrypt } from "@utils/cryptography";

export const POST = async (request) => {
    const requestData = await request.json();
    try {
        await connectToDb();
        
        const cipherData = await encrypt(requestData,process.env.SECRET_KEY).then((value) => {
            return value;
        });

        const newPassword = new Password({
            creator: requestData.userId, 
            siteUrl: cipherData.siteUrl, 
            email: cipherData.email, 
            password: cipherData.password 
        });
        await newPassword.save();
        return new Response(JSON.stringify(newPassword), { status: 201 });
    } catch (error) {
        return new Response("failed to add a new password " + error, { status: 500 });
    }
}