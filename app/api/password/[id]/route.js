import { connectToDb } from "@utils/database"
import Password from "@models/password";

export const GET = async (request, { params }) => {
    try {
        await connectToDb();
        const passwordOfUser = await Password.findById(params.id).populate("creator");
        if(!passwordOfUser) return new Response("Password not found", { status: 404 });

        return new Response(JSON.stringify(passwordOfUser), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch password of user", { status: 500 });
    }
}

export const PATCH = async(request, { params }) => {
    const { siteUrl, email, password } = await request.json();

    try {
        await connectToDb();

        const existingPsw = await Password.findById(params.id);
        if(!existingPsw){
            return new Response("Password not found",{ status: 404 });
        }
        existingPsw.siteUrl = siteUrl;
        existingPsw.email = email;
        existingPsw.password = password;
        
        await existingPsw.save();

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
        return new Response("Error deleting password", { status: 500 });     
    }
}