import CardGrafico from "@/components/CardGrafico";
import CardMovimientos from "@/components/CardMovimientos";
import CardResumen from "@/components/CardResumen";

export default function HomePage() {
    return (
        <div>
            <div className="flex justify-between ">
                <div>
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-gray-500 font-medium">Gestion activa: Admin</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-end">

                        <p className="text-gray-500 font-medium">Caja hoy</p>
                        <p className="text-xl font-bold text-azulMeido">S/. 5000</p>
                    </div>
                    <div className="bg-azulMeido text-white rounded-xl w-12 h-12 flex items-center justify-center font-bold cursor-pointer">
                        <p>AD</p>
                    </div>
                </div>
            </div>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                <CardResumen />
                <CardResumen />
                <CardResumen />
                <CardResumen />
                <CardResumen />
                <CardResumen />
            </section>
            <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <CardMovimientos />
                <div className="col-span-1 lg:col-span-2">
                    <CardGrafico />
                </div>
            </section>
        </div>
    );
}