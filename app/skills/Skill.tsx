import { motion } from "framer-motion";

type Props = {
  // Optional Typescript value you may pass into a component.
  directionLeft?: boolean;
};

// Pass in directionLeft as a prop to the skills component so that we can have initial direction of the skills component be left or right.
const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="relative flex cursor-pointer group">
      {/* Ternary operator for IF directionLeft -200 ELSE from the right as 200. */}
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/css3-logo.svg"
        className="object-cover w-24 h-24 border border-gray-500 rounded-full transition duration-300 ease-in-out xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale"
      />
      <div className="absolute z-0 w-24 h-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-80 group-hover:bg-white md:w-28 md:h-28 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">Expert</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
