import Image from "next/image";
import spongebobImg from "@/app/spongebob.jpg";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-8">
      <Link href="/" className="underline">
        Back to Home
      </Link>
      <Image
        src={spongebobImg}
        alt="Spongebob Picture"
        width={300}
        height={300}
        className="w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-md dark:bg-gray-800 bg-white object-cover"
      />
    </div>
  );
}
