import { IoIosSearch } from "react-icons/io";

function ClinicHistories() {
    return (
        <div>
            <div className="w-full h-14  justify-center  flex items-center p-2 mt-10">
                <div class="relative text-gray-600">
                    <input type="search" name="search" placeholder="Buscar..." class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"/>
                        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                            <IoIosSearch size={20} />
                        </button>
                </div>
            </div>

            <div className="w-full h-full flex justify-center mt-4">

                <div className="w-full h-full flex justify-center items-center flex-wrap gap-6 p-10">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div className="max-w-[350px] w-[350px] h-80 p-5 gap-4 bg-white rounded drop-shadow-md transition duration-500 hover:scale-105 cursor-pointer" key={i}>
                            <h1 className="text-2xl">Historia Clínica</h1>
                            <p>Fecha: 12/12/2021</p>
                            <p>Doctor: Dr. Juan Perez</p>
                            <p>Tratamiento: Tratamiento</p>
                        </div>

                    ))}
                </div>

            </div>
        </div>
    )
}

export default ClinicHistories