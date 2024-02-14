import Image from "next/image";
import logo from "./assets/panyart2.png";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-custom-pany-one text-white flex flex-col">
      <div className="p-8">
        <Image src={logo} alt="Exemplo de imagem" />
      </div>
      <div className="flex flex-col items-center justify-center text-custom-pany-three text-lg">
        {/* Conteúdo da sidebar */}
        <span
          className={`border-b my-3 border-custom-pany-three
            border-opacity-50`}
        >
          <Link href={"/pages/home"}>Home</Link>
        </span>
        <span className="border-b my-3 border-custom-pany-three">
          <Link href={"/pages/queue"}>Queue</Link>
        </span>
        <span className="border-b my-3 border-custom-pany-three">
          <Link href={"/pages/prices"}>Prices</Link>
        </span>
        <span className="border-b my-3 border-custom-pany-three">
          <Link href={"/pages/rules"}>Rules</Link>
        </span>
      </div>
    </div>
  );
}
