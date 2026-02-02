import SimuladorCredito from "@/components/SimuladorCredito";
import { CirclePlus } from "lucide-react";

export default function CreditosPage() {
  return (
    <div>
      <h1>Creditos</h1>
      <div className="flex flex-col gap-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 " >
          <CirclePlus size={20} color="#2563eb" />
          <p className="text-xl font-bold">Nuevo Desembolso</p>
        </div>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 mt-4">

            <label htmlFor="" className="text-gray-500 font-bold text-xs">CLIENTE</label>
            <select name="" id="" className="border-2 border-slate-100 rounded-xl p-2 w-full bg-fondo h-14 text-md focus-within:border-azulMeido focus-within:ring-2 focus-within:ring-azulMeido transition-colors outline-none">
              <option value="">Buscar Cliente...</option>
              <option value="">Nuevo Cliente</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="monto" className="text-gray-500 font-bold text-xs">MONTO (S/.)</label>
            <input type="number" id="monto" className="border-2 border-slate-100 rounded-xl p-2 w-full bg-fondo h-14 focus-within:border-azulMeido focus-within:ring-2 focus-within:ring-azulMeido transition-colors outline-none" />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div>
              <label htmlFor="tasa" className="text-gray-500 font-bold text-xs">INTERES (%)</label>
              <input type="number" id="tasa" className="border-2 border-slate-100 rounded-xl p-2 w-full bg-fondo h-14 focus-within:border-azulMeido focus-within:ring-2 focus-within:ring-azulMeido transition-colors outline-none" />
            </div>
            <div>
              <label htmlFor="plazo" className="text-gray-500 font-bold text-xs">CUOTAS</label>
              <input type="number" id="plazo" className="border-2 border-slate-100 rounded-xl p-2 w-full bg-fondo h-14 focus-within:border-azulMeido focus-within:ring-2 focus-within:ring-azulMeido transition-colors outline-none" />
            </div>
            <div>
              <label htmlFor="" className="text-gray-500 font-bold text-xs">MODALIDAD</label>
              <select name="" id="" className="border-2 border-slate-100 rounded-xl p-2 w-full bg-fondo h-14 text-xs focus-within:border-azulMeido focus-within:ring-2 focus-within:ring-azulMeido transition-colors outline-none">
                <option value="diario" className="text-[15px]">DIARIO</option>
                <option value="semanal" className="text-[15px]">SEMANAL</option>
              </select>
            </div>
          </div>

        </form>
        <SimuladorCredito />
        <div >
          <button className="bg-azulMeido w-full text-white rounded-2xl h-14 flex items-center justify-center font-bold cursor-pointer text-xl lg:w-[15%] lg:text-lg">Desembolsar Dinero</button>

        </div>
      </div>

    </div>
  );
}
