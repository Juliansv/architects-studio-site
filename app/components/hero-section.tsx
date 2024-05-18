import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative z-0 text-white bg-[#231f20]">
      <div className="relative h-screen overflow-hidden clip-path-0">
        <Link href="#" className="fixed top-0 left-0 w-full h-full z-0">
          <div className="opacity-80">
            <Image
              src="/images/odicy-hotel.webp"
              alt="odicy-lido"
              width={1600}
              height={1600}
              className="h-screen w-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
            <div className="m-0 z-40 pt-0 pb-0 text-center flex flex-col gap-2">
              <h1 className="text-5xl font-bold ">Odicy Hotel</h1>
              <p className="text-4xl font-semibold px-1 leading-tight">A Landmark Identity Reimagined <br /> for Modern Comfort</p>
              <p>QAWRA, MALTA</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="relative h-screen overflow-hidden clip-path-0">
        <Link href="#" className="fixed top-0 left-0 w-full h-full z-0">
          <div className="opacity-80">
            <Image
              src="/images/salvo-grima.webp"
              alt="odicy-lido"
              width={1600}
              height={1600}
              className="h-screen w-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
            <div className="m-0 z-40 pt-0 pb-0 text-center flex flex-col gap-2">
              <h1 className="text-5xl font-bold ">Salvo Grima Group </h1>
              <p className="text-4xl font-semibold px-1 leading-tight">Offices Merging Innovation <br /> with Well-Being</p>
              <p>MARSA, MALTA</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="relative h-screen overflow-hidden clip-path-0">
        <Link href="#" className="fixed top-0 left-0 w-full h-full z-0">
          <div className="opacity-80">
            <Image
              src="/images/odicy-lido.webp"
              alt="odicy-lido"
              width={1600}
              height={1600}
              className="h-screen w-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
            <div className="m-0 z-40 pt-0 pb-0 text-center flex flex-col gap-2">
              <h1 className="text-5xl font-bold ">Odicy Lido</h1>
              <p className="text-4xl font-semibold px-1 leading-tight ">Revitalizing Qawra&apos;s Coastal Charm</p>
              <p>QAWRA, MALTA</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="relative h-screen overflow-hidden clip-path-0">
        <Link href="#" className="fixed top-0 left-0 w-full h-full z-0">
          <div className="opacity-80">
            <Image
              src="/images/melieha-villa.webp"
              alt="odicy-lido"
              width={1600}
              height={1600}
              className="h-screen w-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
            <div className="m-0 z-40 pt-0 pb-0 text-center flex flex-col gap-2">
              <h1 className="text-5xl font-bold ">Mellieha Villa</h1>
              <p>MELLIEHA, MALTA</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
