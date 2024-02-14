import Image from "next/image";
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Main>
        <p>Teste</p>
      </Main>
    </div>
  );
}
