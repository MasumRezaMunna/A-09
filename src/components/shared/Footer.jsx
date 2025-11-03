import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-light text-gray-text p-10 mt-16">
      <div className="container mx-auto footer grid grid-cols-2 md:grid-cols-4 gap-8">
        <nav>
          <h6 className="footer-title font-serif text-lg text-green-primary">
            Services
          </h6>
          <a className="link link-hover">Plant Care</a>
          <a className="link link-hover">Consultation</a>
          <a className="link link-hover">Plant Sourcing</a>
          <a className="link link-hover">Decor Styling</a>
        </nav>
        <nav>
          <h6 className="footer-title font-serif text-lg text-green-primary">
            Quick Links
          </h6>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/privacy" className="link link-hover">
            Privacy Policy
          </Link>
          <Link to="/terms" className="link link-hover">
            Terms of Use
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title font-serif text-lg text-green-primary">
            Legal
          </h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title font-serif text-lg text-green-primary">
            Newsletter
          </h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-green-primary text-white absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="container mx-auto footer-center mt-10 pt-6 border-t border-green-accent">
        <div className="flex justify-between items-center w-full">
          <p>© 2025 GreenNest. All rights reserved.</p>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-primary"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-primary"
            >
              <FaFacebook />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-primary"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
