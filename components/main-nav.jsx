import Image from "next/image";
import profile from "@/public/profile.png"

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Blog</a></li>
            <li><a>Media</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"> 
            <Image 
                src={profile} 
                alt="Profile Picture for JustinTrugman.com"
                width={32}
                height={18}
            />
            Justin Trugman
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a>Blog</a></li>
            <li><a>Media</a></li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
