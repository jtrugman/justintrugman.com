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
          <h2 className="text-2xl py-4 max-w-xl text-slate-300">I'm cofounder and head of technology at Better Future Labs - a Venture Studio that innovates, launches, and grows awesome tech companies</h2>
          <p className="py-6 max-w-3xl">
            Prior to Better Future Labs, I was an early engineer and the VP of Software Development at the telehealth startup Caregility - leading their engineering teams. My passion for building quality software is unwavering, previously I was at Google[X]'s Project Loon and cofounded BlinkCDN, a video content delivery network. Beyond those endeavors, I'm actively involved with my Alma Mater, Stevens, and with the nonprofit I cofounded SecureMeeting.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
