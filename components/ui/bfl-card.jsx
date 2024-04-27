import Image from "next/image";
import BFL from "@/public/BFL.png"
import Link from "next/link";

const BFLCard = () => {
  return (
    <a href="https://www.betterfuturelabs.com" target="_blank" rel="noopener noreferrer"> 
        <div className="card max-w-lg bg-base-300 shadow-xl">
            <div className="card-body">
                <div className="card-title" >
                    <Image 
                            src={BFL} 
                            alt="BetterFutureLabs Logo"
                            width={32}
                            height={18}
                        />
                    <h2>Cofound with BetterFutureLabs</h2>
                </div>
                
                <p>Cofound your next startup with the BFL team and I! </p> 
                <p>We stack the odds for success by providing initial funding, fantastic resources, and an innovative process.</p>
            </div>
        </div>
    </a>
  );
};

export default BFLCard;
