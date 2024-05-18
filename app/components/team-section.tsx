import Image from "next/image";

const TeamSection = () => {
  return (
    <section id="team-section" className="text-white z-0 relative">
      <div className="h-32 bg-[#d3cecb] flex justify-center items-center  top-0 left-0 w-full z-0">
        <h2 className="text-6xl font-bold text-stone-800">Team</h2>
      </div>
      <div className=" bg-stone-300 px-5 2xl:px-72">
        <div id="co-founders" className="grid grid-cols-1 md:grid-cols-2">
          <div className=" p-8 md:p-24 m-auto flex flex-col justify-between gap-2">
            <Image
              src="/images/team/JingYao-Xu.webp"
              alt="JingYao Xu"
              width={1600}
              height={1600}
              className="rounded-full grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer border-2 border-stone-400"
            />
            <div>
              <p className="text-center pt-2 text-stone-900 text-2xl font-medium">
                JingYao Xu
              </p>
              <p className="text-center pt-2 text-stone-900 text-xl">
                co-founder | architect
              </p>
              <p className="text-center text-stone-900 text-lg font-light">
                yao@box-cs.com
              </p>
            </div>
          </div>
          <div className="p-8 md:p-24 m-auto flex flex-col justify-between gap-2">
            <Image
              src="/images/team/Peter-Brincat.webp"
              alt="Peter Brincat"
              width={1600}
              height={1600}
              className="rounded-full grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer border-2 border-stone-400"
            />
            <div>
              <p className="text-center pt-2 text-stone-900 text-2xl font-medium">
                Peter Brincat
              </p>
              <p className="text-center pt-2 text-stone-900 text-xl">
                co-founder | architect
              </p>
              <p className="text-center text-stone-900 text-lg font-light">
                peter@box-cs.com
              </p>
            </div>
          </div>
          <div className="p-8 md:p-24 m-auto flex flex-col justify-between gap-2">
            <Image
              src="/images/team/Isaac-Buttigieg.webp"
              alt="Issac Buttigieg"
              width={1600}
              height={1600}
              className="rounded-full grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer border-2 border-stone-400"
            />
            <div>
              <p className="text-center pt-2 text-stone-900 text-2xl font-medium">
                Isaac Buttigieg
              </p>
              <p className="text-center pt-2 text-stone-900 text-xl">
                architect
              </p>
              <p className="text-center text-stone-900 text-lg font-light">
                isaac@box-cs.com
              </p>
            </div>
          </div>
          <div className="p-8 md:p-24 m-auto flex flex-col justify-between gap-2">
            <Image
              src="/images/team/John-Bajada.webp"
              alt="John Bajada"
              width={1600}
              height={1600}
              className="rounded-full grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer border-2 border-stone-400"
            />
            <div>
              <p className="text-center pt-2 text-stone-900 text-2xl font-medium">
                John Bajada
              </p>
              <p className="text-center pt-2 text-stone-900 text-xl">
                architect
              </p>
              <p className="text-center text-stone-900 text-lg font-light">
                john@box-cs.com
              </p>
            </div>
          </div>
          <div className="p-8 md:p-24 m-auto flex flex-col justify-between gap-2">
            <Image
              src="/images/team/Miguel-Petrovic.webp"
              alt="Miguel Petrovic"
              width={1600}
              height={1600}
              className="rounded-full grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer border-2 border-stone-400"
            />
            <div>
              <p className="text-center pt-2 text-stone-900 text-2xl font-medium">
                Miguel Petrovic
              </p>
              <p className="text-center pt-2 text-stone-900 text-xl">
                architect
              </p>
              <p className="text-center text-stone-900 text-lg font-light">
                miguel@box-cs.com
              </p>
            </div>
          </div>
          <div className="p-8 md:p-24 m-auto flex flex-col justify-between gap-2">
            <Image
              src="/images/team/Judith-Hunter.webp"
              alt="Judith Hunter"
              width={1600}
              height={1600}
              className="rounded-full grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer border-2 border-stone-400"
            />
            <div>
              <p className="text-center pt-2 text-stone-900 text-2xl font-medium">
                Judith Hunter
              </p>
              <p className="text-center pt-2 text-stone-900 text-xl">
                architect
              </p>
              <p className="text-center text-stone-900 text-lg font-light">
                judy@box-cs.com
              </p>
            </div>
          </div>
        </div>
        <div id="architects"></div>
      </div>
    </section>
  );
};

export default TeamSection;
