// // import { connectToDB } from "@/lib/database"
// // import NextAuth from "next-auth"
// // import User from "../../../../../models/User"
// // import CredentialsProvider from "next-auth/providers/credentials"
// // import bcrypt from "bcryptjs"

// // const handler = NextAuth({
// //     providers: [
// //         CredentialsProvider({
// //           name: 'Credentials',
// //           id: "credentials",
          // credentials: {
          //   username: { label: "Username", type: "text", placeholder: "jsmith" },
          //   password: { label: "Password", type: "password" }
          // },
// //           async authorize({ username, password }, req) {
            // await connectToDB()
            // const user = await User.findOne({ username })
            // const passwordCheck = bcrypt.compare(password, user.password)
            // console.log(passwordCheck)
            // const passwordOK = user && passwordCheck
            // console.log(passwordOK)

            // if (passwordOK.ok && user) {
            //   console.log('password is ok')
            //   return user
            // }
            // return null
// //           }
// //         })
// //     ],
// //     callbacks: {
// // async signIn({ profile }) {
// //     try {
// //         await connectToDB()
// //         const userExists = await User.findOne({
// //             username: profile.username,
// //         })
// //         if(!userExists) {
// //             const saltRounds = 10;
// //             const hash = bcrypt.hashSync(profile.password, saltRounds);
// //             await User.create({
// //                 username: profile.username,
// //                 password: hash
// //             })
// //         }
// //         return true
// //     } catch (error) {
// //         console.error(error)
// //         return false
// //     }
// // },
// // async session({ session }) {
// //     const sessionUser = await User.findOne({ username: session.user.username })

// //     session.user.id = sessionUser._id.toString()

// //     return session
// // },
// //     }
// // })

// // export { handler as GET, handler as POST }

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import User from "../../../../../models/User";

// async function getUserByUsername(username) {
//   await connectToDB();
//   const user = await User.findOne({ username });
//   return user ? user : null;
// }

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
      
//       async authorize(credentials) {
//         const user = await getUserByUsername(credentials.username);
//         if (!user) {
//           throw new Error("No user found with that username");
//         }
//         const isValid = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );
//         if (!isValid) {
//           throw new Error("Invalid password");
//         }
//         return { id: user.id, name: user.username };
//       },
//     }),


//   ],

//   pages: {
//     signIn: "/admin",
//     error: '/admin'
//   },
//   // session: {
//   //   strategy: "jwt",
//   // },
//   callbacks: {
//     // // // async jwt({ token, user }) {
//     // // //   if (user) {
//     // // //     token.id = user.id;
//     // // //   }
//     // // //   return token;
//     // // // },
//     // // async session({ session, token }) {
//     // //   session.user.id = token.id;
//     // //   return session;
//     // // },
//     // async signIn({ profile }) {
//     //   try {
//     //     await connectToDB();
//     //     const userExists = await User.findOne({
//     //       username: profile.username,
//     //     });
//     //     if (!userExists) {
//     //       // const saltRounds = 10;
//     //       // const hash = bcrypt.hashSync(profile.password, saltRounds);
//     //       // await User.create({
//     //       //     username: profile.username,
//     //       //     password: hash
//     //       // })
//     //       throw new Error(`User does not exist`);
//     //     }
//     //     return true;
//     //   } catch (error) {
//     //     console.error(error);
//     //     return false;
//     //   }
//     // },
//     // async session({ session }) {
//     //   const sessionUser = await User.findOne({
//     //     username: session.user.username,
//     //   });

//     //   session.user.id = sessionUser._id.toString();

//     //   return session;
//     // },
//     callbacks: {
//       async jwt({ token, user }) {
//         if (user) {
//           token.id = user.id;
//           token.username = user.username;
//         }
//         return token;
//       },
//       async session({ session, token }) {
//         session.user.id = token.id;
//         session.user.username = token.username;
//         return session;
//       }
//     },
//     secret: process.env.NEXTAUTH_SECRET
//   },
// });

// export { handler as GET, handler as POST };


import { handlers } from "@/auth"

export const { GET, POST } = handlers