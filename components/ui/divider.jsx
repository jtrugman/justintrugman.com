import BFLCard from "./bfl-card";
import EmailCard from "./email-card";

const Divider = () => {
    return (
      <div className="flex flex-col w-full lg:flex-row place-items-center">
        <div className="grid flex-grow m-h-min card rounded-box place-items-center">
          VENTURE STUDIO
          <BFLCard />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow m-h-min card rounded-box place-items-center">
            MY BLOG
            <EmailCard />
        </div>
      </div>
    );
  };
  
  export default Divider;