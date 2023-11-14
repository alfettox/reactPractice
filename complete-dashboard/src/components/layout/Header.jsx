import { BellIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { UserContext } from "../../client/context/UserContext.jsx"

function Header() {
  const { storeNumber } = useContext(UserContext);

  return (
    <header className="flex justify-between mt-8 w-4/5 m-auto">
      <div className="flex flex-col justify-center">
        <h1>Store {storeNumber}</h1>
        <p className="font-thin text-s">Welcome to Your Dashboard</p>
      </div>
      <div className="flex items-center">
        <BellIcon className="w-6 h-6" />
      </div>
    </header>
  );
}

export default Header;