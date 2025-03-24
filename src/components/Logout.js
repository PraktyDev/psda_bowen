'use client'
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Logout = () => {

    const logout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/admin';
      }


  return (
    <Button
      onClick={logout}
      className="absolute top-6 right-4 bg-[#1F0954] hover:bg-[#1f0954dc]"
    >
      <LogOut />
      Logout
    </Button>
  );
};

export default Logout;
