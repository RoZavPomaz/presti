import { Banknote } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-1 justify-center">
      <Banknote color="#60a5fa" size={50} />
      <p className="text-4xl text-center font-bold text-white italic tracking-tight">
        PRESTi
      </p>
    </div>
  );
}
