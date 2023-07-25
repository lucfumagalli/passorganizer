import { connectToDb } from "@utils/database";
import Password from "@models/password";
import { decrypt } from "@utils/cryptography";

export const GET = async (request, { params }) => {
    try {
        await connectToDb();
        const passwordOfUser = await Password.find({ creator: params.id }).populate("creator");
        const decryptedPassword = await decrypt(passwordOfUser,process.env.SECRET_KEY);
        return new Response(JSON.stringify(decryptedPassword), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch password of user " + error, { status: 500 });
    }
}