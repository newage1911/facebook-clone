import Image from "next/image";

export default function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-4 mb-3 hover:bg-gray-200 cursor-pointer p-2 rounded-xl relative">
      <div className="w-12 h-12 overflow-hidden rounded-full relative">
        <Image
          className="object-cover w-full h-full"
          src={src}
          alt={name}
          width={50}
          height={50}
          layout="responsive"
        />
        {/* Online status indicator */}
      </div>
      <p>{name}</p>
      <div className="bg-green-400 absolute bottom-2 left-7 h-3 w-3 rounded-full z-10"></div>
    </div>
  );
}
