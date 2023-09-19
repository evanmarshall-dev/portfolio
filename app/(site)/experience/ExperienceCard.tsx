import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <div>
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src="/elysian-logo.png"
          alt="Elysian Web Design brand logo"
        />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Owner | Web Developer</h4>
          <p className="mt-1 text-2xl font-bold">
            Elysian Web Design (now freelancer)
          </p>
          <div className="flex my-2 space-x-2">
            <img className="w-10 h-10 rounded-full" src="#" alt="" />
            {/* Tech used */}
            {/* Tech used */}
            {/* Tech used */}
          </div>
          <p className="py-5 text-gray-300 uppercase">2017 - Present</p>
          <ul className="ml-5 space-y-4 text-lg list-disc">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
