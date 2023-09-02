import Image from "next/image";
import {
  HomeIcon,
  PlayIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  MenuIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import HeaderIcons from "./HeaderIcons";

export default function Header() {
  return (
    <div className="sticky top-0  z-50 bg-white flex items-center lg:px-5 shadow-md">
      {/* Left  */}
      <div className="mt-1 flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 rounded-full items-center bg-gray-100 p-2 md:inline-flex">
          <SearchIcon className="h-6 w-6 text-gray-600" />
          <input
            className="flex ml-1 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Middle */}
      <div className="flex justify-center flex-grow items-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcons active Icon={HomeIcon} />
          <HeaderIcons Icon={PlayIcon} />
          <HeaderIcons Icon={ShoppingBagIcon} />
          <HeaderIcons Icon={UserGroupIcon} />
          <HeaderIcons Icon={MenuIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        {/* <Image /> */}

        <Image
          className="rounded-full cursor-pointer"
          src="https://links.papareact.com/zvy"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
