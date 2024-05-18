const Footer = () => {
  return (
    <section className="bg-stone-100 text-stone-900 z-0">
      <div className="grid grid-cols-3">
        <div className="flex py-4 justify-between">
          <div className="m-auto flex justify-between flex-col h-full">
            <p className="text-lg font-medium">
              76, Triq Is-Suq, Floriana, FRN1080, Malta
            </p>
            <p className="text-lg font-medium">info@box-cs.com</p>
          </div>
        </div>
        <div className="flex py-4 justify-between">
          <p className="m-auto">Copyright © 2024 box Concept Studio Ltd.</p>
        </div>
        <div className="flex flex-col py-4 justify-between">
          <div className="m-auto flex justify-between flex-col h-full">
            <p className="text-lg font-medium">00356 9982 0957 | 00356 9946 6123</p>
            <p className="text-lg font-medium"> facebook | instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
