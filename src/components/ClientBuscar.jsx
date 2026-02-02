import { Plus, Search } from "lucide-react";

export default function ClientBuscar() {
    return (
        <div>
            <form className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4 lg:w-full">
                <label htmlFor="buscarCliente" className="flex items-center gap-2 h-14  border-slate-100 rounded-xl p-2 border-2 focus-within:border-azulMeido focus-within:ring-2 focus-within:ring-azulMeido transition-colors lg:w-full">

                    <Search color="gray" />
                    <input id="buscarCliente" type="search" placeholder="Buscar cliente" className="outline-none w-full" />
                </label>
                <button type="submit" className="bg-azulMeido text-white rounded-2xl h-14 flex items-center justify-center font-bold cursor-pointer text-xl lg:w-[15%] lg:text-lg">
                    <Plus className="mr-1" />
                    Nuevo Cliente</button>
            </form>
            <div className="mt-8 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] ">
                        <thead>
                            <tr className="border-b border-slate-100 bg-fondo">
                                <th className="text-left py-6 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Cliente</th>
                                <th className="text-left py-6 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">DNI / Documento</th>
                                <th className="text-left py-6 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Telefono</th>
                                <th className="text-right py-6 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {[1].map((item) => (
                                <tr key={item} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="py-6 px-6">
                                        <div className="font-bold text-azulOscuro text-lg">Roberto Armando Zavala Pomazongo</div>
                                    </td>
                                    <td className="py-6 px-6">
                                        <div className="text-slate-100 font-medium">71090624</div>
                                    </td>
                                    <td className="py-6 px-6">
                                        <div className="text-slate-100 font-medium">986741487</div>
                                    </td>
                                    <td className="py-6 px-6 text-right">
                                        <button className="text-blue-600 font-bold text-xs cursor-pointer hover:text-blue-700 hover:underline tracking-wide transition-colors uppercase">
                                            Ver Ficha
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
