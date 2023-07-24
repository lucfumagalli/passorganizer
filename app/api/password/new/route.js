import { connectToDb } from "@utils/database";
import Password from "@models/password";

export const POST = async (request) => {
    const { userId, siteUrl, email, password } = await request.json();
    try {
        await connectToDb();
        const newPassword = new Password({
            creator: userId, 
            siteUrl, 
            email, 
            password 
        });
        await newPassword.save();
        return new Response(JSON.stringify(newPassword), { status: 201 });
    } catch (error) {
        return new Response("failed to add a new password " + error, { status: 500 });
    }
}