const Footer = () => {
  return (
    <section className="bg-stone-100 text-stone-900 z-0">
      {/* Desktop Footer */}
      <div className="md:grid md:grid-cols-3 p-4 hidden">
        <div className="flex justify-between">
          <div className="m-auto flex justify-between flex-col h-full">
            <p className="text-lg font-medium">
              76, Triq Is-Suq, Floriana, FRN1080, Malta
            </p>
            <p className="text-lg font-medium">info@box-cs.com</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="m-auto">Copyright © 2024 box Concept Studio Ltd.</p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="m-auto flex justify-between flex-col h-full">
            <p className="text-lg font-medium">
              00356 9982 0957 | 00356 9946 6123
            </p>
            <p className="text-lg font-medium"> facebook | instagram</p>
          </div>
        </div>
      </div>
      {/* Mobile Footer */}
      <div className="md:hidden p-6 flex flex-col justify-between gap-2">
        <div className="">
          <div className="m-auto flex justify-between flex-col h-full">
            <p className="text-xs font-medium">
              76, Triq Is-Suq, Floriana, FRN1080, Malta
            </p>
            <p className="text-xs font-medium">info@box-cs.com</p>
          </div>
        </div>
        <div className="">
          <div className="m-auto flex justify-between flex-col h-full">
            <p className="text-xs font-medium">
              00356 9982 0957 | 00356 9946 6123
            </p>
            <p className="text-xs font-medium"> facebook | instagram</p>
          </div>
        </div>
        <div className="flex pt-2">
          <p className="m-auto text-xs">Copyright © 2024 Box Concept Studio Ltd.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
