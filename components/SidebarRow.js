import Image from "next/image";

export default function SidebarRow({ Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-3 hover:bg-gray-200 cursor-pointer rounded-lg">
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}
