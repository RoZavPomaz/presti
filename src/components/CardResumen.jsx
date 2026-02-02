export default function CardResumen() {
    return (
        < div className="bg-white rounded-3xl shadow-sm p-5 flex flex-col gap-3 border border-slate-100" >
            <div className="bg-azulMeido text-white rounded-xl w-10 h-10 flex items-center justify-center">%</div>
            <div>
                <p className="text-gray-500 font-medium">Capital en calle</p>
                <p className="text-2xl font-bold">S/. 5000</p>
            </div>
        </div >
    );
}
