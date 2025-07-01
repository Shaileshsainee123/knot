import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      {/* <div className="w-10 h-10 border-4 border-t-transparent border-[#C5A572] rounded-full animate-spin" /> */}
       <Image
        src="/TriangleLogo.png" // Place image in public folder
        alt="Loading..."
        width={100}
        height={100}
        className="animate-spin"
      />
    </div>
  )
}
