import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { connectToDB } from "@/lib/database"
import User from "./models/User"



// async function saltAndHashPassword(password){
//     try {
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password, salt)
//         return hashedPassword
//     } catch (error) {
//         return null
//     }
// }

async function getUserFromDb(username, password){
    try {
        await connectToDB()
        const user = await User.findOne({ username })
        if (!user) {
          return null
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return null
        }
        return user
    } catch (error) {
        return null
    }
    // try {
    //     await connectToDB()
    //     const user = await User.findOne({ username })
    //     if(!user){
    //         return null
    //     }
        // const passwordCompare = await bcrypt.compare(password, user.password)
        // if(!passwordCompare){
        //     return null
        // }
    //     return user
    // } catch (error) {
    //     return null
    // }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        let user = null

        // const pwHash = saltAndHashPassword(credentials.password)
 
        user = await getUserFromDb(credentials.email, credentials.password)
 
        if (!user) {
          throw new Error("Invalid credentials.")
        }
 
        return user
      },
    }),
  ],
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
  },
})