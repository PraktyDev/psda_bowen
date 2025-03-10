// // 'use client'
// // // In pages/protected.js or getServerSideProps of a page
// // import { getSession } from "next-auth/react";

// // export async function getServerSideProps(context) {
// //   const session = await getSession(context);
// //   if (!session) {
// //     return {
// //       redirect: {
// //         destination: "/auth/login",
// //         permanent: false,
// //       },
// //     };
// //   }
// //   return {
// //     props: { session },
// //   };
// // }

// // // export default function ProtectedPage({ session }) {
// // //   return <div>Welcome, {session.user.name}!</div>;
// // // }

// // export default function RootAdminLayout({ children, session }) {
// //   return <section>{children}</section>;
// // }

// // "use client";
// // import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// // import { useEffect } from "react";
// // import { BallTriangle } from "react-loader-spinner";
// import { auth } from "../../../auth";
// // import { auth } from "@/auth"

// export default async function ProtectedRootAdminLayout({ children }) {
//   // const { data: session, status } = useSession();
//   // const router = useRouter();

//   // useEffect(() => {
//   //   if (status === "unauthenticated") {
//   //     router.push("/admin");
//   //   }
//   // }, [status]);
//   const session = await auth()
//   if (!session) redirect('/admin')

//   // if (status === "loading") {
//   //   return (
//   //     <div className="flex items-center justify-center min-h-screen">
//   //       <BallTriangle
//   //         height={100}
//   //         width={100}
//   //         radius={5}
//   //         color="red"
//   //         ariaLabel="ball-triangle-loading"
//   //         wrapperStyle={{}}
//   //         wrapperClass=""
//   //         visible={true}
//   //       />
//   //     </div>
//   //   );
//   // }

//   // return <div>Welcome, {session.user.name}!</div>;
//   return <section>{children}</section>;
// }

// import { ThemeProvider } from "@/components/theme-provider";
import { AdminSidebar } from "@/components/AdminSidebar";

export default function AdminRootLayout({ children }) {
  return (
    // <ThemeProvider
    //   attribute="class"
    //   defaultTheme="system"
    //   enableSystem
    //   disableTransitionOnChange
    // >
      <div className="flex min-h-screen">
        <AdminSidebar />
        <main className="flex flex-col">{children}</main>
      </div>
    // </ThemeProvider>
  );
}
