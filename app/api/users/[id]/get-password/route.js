import { connectToDb } from "@utils/database";
import Password from "@models/password";

export const GET = async (request, { params }) => {
    try {
        await connectToDb();
        const passwordOfUser = await Password.find({ creator: params.id }).populate("creator");
        return new Response(JSON.stringify(passwordOfUser), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch password of user", { status: 500 });
    }
}