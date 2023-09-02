import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <div className="flex items-center space-x-4 p-2">
        <Image
          className="rounded-full"
          src="https://links.papareact.com/zvy"
          width={40}
          height={40}
        />
        <p>Bill Gates</p>
      </div>

      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />

      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  );
}
