"use client"
import Sidebar2 from "@/src/components/layout/Sidebar2";
import { Toaster } from "@/components/ui/toaster"
import NavBar from "@/src/components/layout/NavBar";

export default function RootLayout({ children }) {



  return (
        <div className="h-screen flex flex-row justify-start">
          <Sidebar2></Sidebar2>

          <div className="flex-1   border  main ">
            <div className="Navbar">
              <NavBar></NavBar>
            </div>
            <div className="px-2">
            {children}
            </div>
            <Toaster />
            </div>
        </div>
  );
} 
