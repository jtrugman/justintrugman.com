import Image from "next/image";
import profile from "@/public/profile.png"
import EmailSignUp from "./ui/email-signup";

// Footer.js
const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <Image 
                  src={profile} 
                  alt="Profile Picture for JustinTrugman.com"
                  width={75}
                  height={75}
              />       
          <p>
            Justin Trugman. <br/>Proudly built with 
            <a href="https://daisyui.com" target="_blank" rel="noopener noreferrer" className="link link-hover"> DaisyUI</a> &
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="link link-hover"> TailwindCSS
              {/* <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
              </svg> */}
            </a>
          </p>
        </aside> 
        <nav>
          <header className="footer-title">Links</header>
          <a href="https://www.bugdrivendevelopment.com/" target="_blank" rel="noopener noreferrer" className="link link-hover">Newsletter</a>
          {/* <a className="link link-hover">Consulting</a> */}
        </nav>
        {/* <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav> */}
        <div>
            <header className="footer-title">Newsletter</header>
            <EmailSignUp />
        </div>
      </footer>
    );
  };
  
export default Footer;
  