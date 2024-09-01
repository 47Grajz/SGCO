"use client";
import Register from "@/src/components/Register";
import Dentist from "@/assets/dentista.svg";
import logoDiente from "@/assets/SmileFlowLogo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
function AuthPage() {

  const router = useRouter();
  return (
    <div>
      <div className="w-24 ml-7 mt-5 rounded absolute">
        <Image
          onClick={() => {
              router.push("/"); 
          }}
          src={logoDiente}
          width={250}
          height={20}
          alt="Logo"
          className="cursor-pointer"
        ></Image>
      </div>
      <section className="h-screen flex justify-center">
        <div className="w-screen h-auto">
          <div className="g-6 flex border-pink-900 rounded h-full flex-wrap items-center justify-center">
            <div className="shrink-1  p-10 rounded-l-lg  max-sm:hidden mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 ">
              <Image alt="Dentist Icon Image" src={Dentist} className=""></Image>
            </div>

            <div></div>
            <div className="mb-12 w-full md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
              <Register></Register>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthPage;
