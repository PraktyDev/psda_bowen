import { connectToDB } from "@/lib/database";
import User from "../../../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const body = await req.json();
        await connectToDB()
        const { username, password } = body
        const saltRounds = 10;
        const hash = bcrypt.hashSync(password, saltRounds);
        const user = new User({
            username,
            password: hash,
        })
        await user.save()
        return Response.json({ message: "Admin created", user }, { status: 201 })
    } catch (error) {
        console.log(error.message)
        return Response.json({ 'Error creating Admin ': error.message }, { status: 500 })
    }
}
