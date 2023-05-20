import MobileNav from "./MobileNav";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="fixed z-10 flex w-screen justify-between border-b border-gray-800 bg-slate-100 px-4 py-2">
      <h1 className="text-3xl ">visit AV</h1>
      <button className="aspect-square w-8">
        <Bars3Icon />
      </button>
    </header>
  );
}
