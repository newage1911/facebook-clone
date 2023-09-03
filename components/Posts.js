import mockupPost from "@/data/mockupPost";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

export default function Post() {
  return (
    <div className="flex flex-col">
      {mockupPost.map((post) => (
        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
          <div className="flex items-center space-x-2">
            <img
              className="rounded-full"
              src={post.profile}
              width={40}
              height={40}
              alt=""
            />
            <div>
              <p className="font-medium">{post.fullname}</p>
              <p className="text-xs text-gray-400">{post.timestamp}</p>
            </div>
          </div>
          <p className="py-3">{post.post}</p>

          <div className="relative h-56 md:h-96 bg-white">
            <Image
              src={post.image}
              objectFit="cover"
              layout="fill"
              loading="lazy"
            />
          </div>
          {/* Post footer */}
          <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
            <div className="inputIcon">
              <ThumbUpIcon className="h-6" />
              <p className="text-xs sm:text-base">Like</p>
            </div>
            <div className="inputIcon">
              <ChatAltIcon className="h-6" />
              <p className="text-xs sm:text-base">Comment</p>
            </div>
            <div className="inputIcon">
              <ShareIcon className="h-6" />
              <p className="text-xs sm:text-base">Share</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
