import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import Image from "next/image";

const OrbitingCircle = () => {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={50} radius={80} speed={0.3}>
        <Icons.user1 />
        <Icons.user2 />
        <Icons.user7 />
        <Icons.user4 />
        <Icons.user5 />
      </OrbitingCircles>
      <OrbitingCircles iconSize={70} radius={150} reverse speed={0.3}>
        <Icons.user6 />
        <Icons.user7 />
        <Icons.user3 />
        <Icons.user4 />
      </OrbitingCircles>
      <OrbitingCircles iconSize={90} radius={250} reverse speed={0.2}>
        <Icons.user5 />
        <Icons.user2 />
        <Icons.user6 />
        <Icons.user4 />
      </OrbitingCircles>
    </div>
  );
};

const Icons = {
  user1: () => (
    <Image
      src="/images/aboutPage/Team Photo.svg"
      alt="User Image"
      width={80}
      height={80}
      className="w-200"
    />
  ),
  user2: () => (
    <Image
      src="/images/aboutPage/Team Photo (1).svg"
      alt="User Image"
      width={80}
      height={80}
      className="w-200"
    />
  ),
  user3: () => (
    <Image
      src="/images/aboutPage/Team Photo (2).svg"
      alt="User Image"
      width={80}
      height={80}
      className="w-200"
    />
  ),
  user4: () => (
    <Image
      src="/images/aboutPage/Team Photo (4).svg"
      alt="User Image"
      width={80}
      height={80}
      className="w-200"
    />
  ),
  user5: () => (
    <Image
      src="/images/aboutPage/Team Photo (5).svg"
      alt="User Image"
      width={80}
      height={80}
      className="w-200"
    />
  ),
  user6: () => (
    <Image
      src="/images/aboutPage/Team Photo (6).svg"
      alt="User Image"
      width={80}
      height={80}
      className="w-200"
    />
  ),
  user7: () => (
    <Image
      src="/images/aboutPage/Team Photo (7).svg"
      alt="User Image"
      width={80}
      height={80}
      className="w-200"
    />
  ),
};

export default OrbitingCircle;
