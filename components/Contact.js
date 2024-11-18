import Link from "next/link";

function Contact() {
  return (
    <div className="container flex items-center justify-between w-full px-8 mx-auto mt-64 md:px-14 lg:px-24">
      <section className="w-full text-center md:text-left">
        <h2 id="hire" className="secondary-title">
          Hire me
        </h2>
        <p className="section-paragraph">
          Feel free to to contact me any time, through any method below
          <span className="text-sunset_orange">.</span>
        </p>
        <div className="grid w-full gap-8 mt-24 lg:grid-cols-2 lg:gap-32">
          <div className="mt-12">
            <Link href="tel:+19023855551" className="hover:text-sandrift">
              (902) 385-5551
            </Link>
            <Link
              href="mailto:me@evanmarshall.dev"
              className="block mt-3 text-secondary hover:text-sandrift"
            >
              me@evanmarshall<span className="text-sunset_orange">.</span>
              <span className="text-sandrift">dev</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
