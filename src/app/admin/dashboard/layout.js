"use client"
import AdminSidebar from "@/components/AdminSidebar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

export default function AdminRootLayout({ children }) {
  const [isSuccess, setisSuccess] = useState(false)
  const [userData, setUserData] = useState([])
  const router = useRouter()
  useEffect(() => {(async()=>{
    try {
      const { user, error } = await getAdmin()
      if (error) {
        router.push('/admin')
        return;
      }
      setisSuccess(true)
      setUserData(user) 
    } catch (error) {
      router.push('/admin') 
    }
  })();
  }, [router]);

  if(!isSuccess){
    return <div className="flex w-full h-screen min-h-screen justify-center items-center m-auto"><Loader /></div>
  }

  return (
    <main className="flex min-h-screen bg-white">
      <div className="hidden laptop:flex">
        <AdminSidebar />
      </div>
      <section className="flex flex-col flex-1 laptop:ml-[120px]">
        {children}
      </section>
    </main>
  );
}

async function getAdmin() {
  const token = localStorage.getItem('accessToken'); 
  if (!token) {
      throw new Error('No token found');
  }

  try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/auth/status`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
      return {
        user: response.data,
        error: null,
      }
  } catch (error) {
    return {
      error: error.message,
      user: null,
    }
  }
}