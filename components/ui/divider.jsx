import BFLCard from "./bfl-card";
import EmailCard from "./email-card";

const Divider = () => {
    return (
      <div className="flex flex-col w-full lg:flex-row place-items-center">
        <div className="grid flex-grow m-h-min card rounded-box place-items-center">
          COFOUND WITH US
          <BFLCard />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow m-h-min card rounded-box place-items-center">
            NEWSLETTER
            <EmailCard />
        </div>
      </div>
    );
  };
  
  export default Divider;