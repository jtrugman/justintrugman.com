import Image from "next/image";


const Hero = () => {
  return (
    <div className="hero min-h-min py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image className="lg:max-w-sm sm:max-w-xsm rounded-lg shadow-2xl"
            src="https://www.justintrugman.com/images/hero.png" 
            alt="Better Future Labs Logo"
            width={600}
            height={600}
        />
        <div>
          <h1 className="text-5xl font-bold text-slate-300">Hi, I'm Justin Trugman.</h1>
          <h2 className="text-2xl py-4 max-w-xl text-slate-300">I'm cofounder and head of technology at Better Future Labs - a Venture Studio that innovates, launches, and grows trailblazing tech companies.</h2>
          <p className="py-6 max-w-3xl">
            Prior to Better Future Labs, I was an early engineer and the VP of Software Development at the telehealth startup Caregility - leading their engineering teams. My passion for building quality software is exhilarating, previously I was at Google[X]'s Project Loon and cofounded BlinkCDN, a video content delivery network. Beyond these endeavors, I'm actively involved with my alma mater, Stevens, and with the nonprofit I cofounded, SecureMeeting.  
          </p>
        </div>

        <div>
        <svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
