type Props = {};

const contact = (props: Props) => {
  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        My Contact Details
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Let me help get your business online.{" "}
          <span className="underline decoration-[rgb(255,83,61)]">
            Let&apos;s Chat
          </span>
        </h4>
      </div>
    </div>
  );
};

export default contact;
