import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative w-full h-72 overflow-hidden rounded-md">
      <Image
        src="/profile.jpg"
        alt="Hyuk-soo Kwon"
        fill
        sizes="(max-width: 768px) 100vw, 300px"
        className="object-cover"
        priority
      />
    </div>
  );
}
