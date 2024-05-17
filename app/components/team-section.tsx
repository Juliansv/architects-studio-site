import Image from "next/image";

const TeamSection = () => {
  return (
    <section id="team-section" className="text-white z-0 relative">
      <div className="min-h-screen">
        <div className="h-72 bg-stone-200 flex justify-center items-center">
          <h2 className="text-6xl font-bold text-stone-800">TIM</h2>
        </div>
        <div className="min-h-[40rem] bg-stone-300">
          <div id="co-founders" className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-[80%] h-[80%] m-auto flex flex-col justify-between">
              <Image
                src="/images/team/JingYao-Xu.webp"
                alt="JingYao Xu"
                width={1600}
                height={1600}
                className="rounded-full"
              />
              <p className="text-center pt-2 text-stone-900 text-xl">
                co-founder | architect
              </p>
              <p className="text-center pt-2 text-stone-900 text-2xl font-medium">
                JingYao Xu
              </p>
            </div>
            <div className="w-[80%] h-[80%] m-auto flex flex-col justify-between">
              <Image
                src="/images/team/Peter-Brincat.webp"
                alt="Peter Brincat"
                width={1600}
                height={1600}
                className="rounded-full"
              />
              <p className="text-center pt-2 text-stone-900 text-xl">
                co-founder | architect
              </p>
              <p className="text-center pt-2 text-stone-900 text-2xl font-medium">
                JingYao Xu
              </p>
            </div>
          </div>
          <div id="architects"></div>
        </div>
        <div className="min-h-[85rem] bg-stone-200"></div>
      </div>
    </section>
  );
};

export default TeamSection;
