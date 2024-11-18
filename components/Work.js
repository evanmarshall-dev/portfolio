import Image from "next/image";
import Link from "next/link";

function Work() {
  return (
    <div className="container flex items-center justify-between w-full px-8 mx-auto mt-64 md:px-14 lg:px-24">
      <section className="w-full text-center md:text-left">
        <h2 id="work" className="secondary-title">
          My work
        </h2>
        <p className="section-paragraph">
          Please enjoy a curated collection of my great clients
          <span className="text-sunset_orange">.</span>
        </p>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="https://glooscapfirstnation.com/" target="_blank">
            <Image
              src="/images/glooscap_thumb.png"
              alt="Thumbnail of glooscapfirstnation.com website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
          <Link href="https://www.hearmstrong.com/" target="_blank">
            <Image
              src="/images/hearmstrong_thumb.png"
              alt="Thumbnail of hearmstrong.ca website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
          <Link href="https://www.quarterdeck.ca/" target="_blank">
            <Image
              src="/images/quarterdeck_thumb.png"
              alt="Thumbnail of quarterdeck.ca website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
          <Link href="https://hockleyfamilydentistry.ca/" target="_blank">
            <Image
              src="/images/hockley-dentistry_thumb.png"
              alt="Thumbnail of hockleyfamilydentistry.ca website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
          <Link href="https://gatesinsurance.ca/" target="_blank">
            <Image
              src="/images/gatesinsurance_thumb.png"
              alt="Thumbnail of gatesinsurance.ca website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
          <Link href="https://tripleetech.ca/" target="_blank">
            <Image
              src="/images/tripleetech_thumb.png"
              alt="Thumbnail of tripleetech.ca website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
          <Link href="https://kentfields.ca/" target="_blank">
            <Image
              src="/images/kentfields_thumb.png"
              alt="Thumbnail of kentfields.ca website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
          <Link href="https://safeguardservices.ca/" target="_blank">
            <Image
              src="/images/safeguard_thumb.png"
              alt="Thumbnail of safeguardservices.ca website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
          <Link href="https://steppingstonepreschool.ca/" target="_blank">
            <Image
              src="/images/stepping-stone_thumb.png"
              alt="Thumbnail of steppingstonepreschool.ca website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
          <Link href="https://www.eliteautoandglass.ca/" target="_blank">
            <Image
              src="/images/elite-auto_thumb.png"
              alt="Thumbnail of eliteautoandglass.ca website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
          <Link href="https://acadiarefrigeration.com/" target="_blank">
            <Image
              src="/images/acadia-refrige_thumb.png"
              alt="Thumbnail of acadiarefrigeration.ca website"
              width={150}
              height={150}
              className="object-cover w-full h-36 lg:h-72"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Work;
