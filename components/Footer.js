function Footer() {
  return (
    <div className="py-6 mt-12 lg:mt-18 sm:pb-36 sm:py-12">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <p>
              Copyright &copy; 2022 - evanmarshall
              <span className="text-sunset_orange">.</span>
              <span className="text-sandrift">dev</span>, All rights reserved
              <span className="text-sunset_orange">.</span>
            </p>
            <div className="flex flex-wrap pt-2 space-x-2 font-medium sm:space-x-4 lg:pt-0">
              <a
                href="https://www.linkedin.com/in/evan-marshall-dev/"
                className="transition-colors hover:text-sandrift"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/evanmarshall-dev"
                className="transition-colors hover:text-sandrift"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
