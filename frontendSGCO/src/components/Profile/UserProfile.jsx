import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
function UserProfile() {
    return (
        <div className='w-full h-full'>

            <div className='w-full h-full flex justify-between gap-4 max-md:flex-col'>

                <div className='w-full h-1/2 flex flex-col gap-4 '>

                    <div className='w-full h-[100px] flex justify-between p-6 items-center bg-white border-2 border-slate-200 rounded-2xl shadow-sm'>

                        <div className='flex items-center gap-6'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h3>Nombre del usuario</h3>
                        </div>
                        <Button variant="outline" className='mr-4'>editar</Button>

                    </div>


                    <div className='w-full mt-5 p-4  bg-white border-2 border-slate-200 rounded-2xl shadow-sm'>
                        <h6 className='text-xl flex items-center gap-2'><IoMdInformationCircleOutline />Información de contacto</h6>

                        <div className='flex justify-between flex-wrap gap-2 mb-4'>
                            <Input value="prueba" isReadOnly className='w-2/5' type="email" variant="underlined" label="Email" />
                            <Input value="prueba" isReadOnly className='w-2/5' type="email" variant="underlined" label="Email" />
                            <Input value="prueba" isReadOnly className='w-2/5' type="email" variant="underlined" label="Email" />
                            <Input value="prueba" isReadOnly className='w-2/5' type="email" variant="underlined" label="Email" />
                        </div>

                        <div>
                            notes
                        </div>
                    </div>

                </div>
                <div className='w-full bg-white border-2 border-slate-200 rounded-2xl shadow-sm'>

                </div>

            </div>

            <div className='w-full h-[300px] mt-5 bg-white border-2 border-slate-200 rounded-2xl shadow-sm'>

            </div>

        </div>
    )
}

export default UserProfile