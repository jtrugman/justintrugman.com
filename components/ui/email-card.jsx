import Image from "next/image";

const EmailCard = () => {
    return (
      <div className="card max-w-lg bg-base-300 shadow-xl">
        <div className="card-body">
            <div className="card-title" >
                <Image className="rounded"
                        src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/c17643dd-fb77-48fc-bf3d-bbab96a6b576/JustinT_a_cartoon_bug_running_amuck_inside_of_a_software_applic_4b3ee0eb-7f34-4244-9273-932d44bafbc8.png" 
                        alt="Bug Driven Development Icon"
                        width={32}
                        height={18}
                    />
                <h2>Read Bug Driven Development</h2>
            </div>
          <p>Explore software development best practices, trends, news, and a lot of other fun topics</p>
          <div className="card-actions justify-end">
            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-info">Sign Up</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default EmailCard;
  