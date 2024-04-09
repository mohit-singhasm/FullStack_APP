import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="px-12 py-12">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-1/4">
            <div>
              <img
                src="https://base-tailwind.preview.uideck.com/images/logo-light.svg"
                alt=""
              />
              {/* <h4 className="text-4xl font-semibold">Base</h4> */}
            </div>
            <p className="text-primaryText mt-5 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="flex text-primaryText gap-5">
              <li>
                <a href="/">
                  <BsInstagram className="text-2xl hover:text-primary" />
                </a>
              </li>
              {/* Rough */}

              <li>
                <a href="/">
                  <BsFacebook className="text-2xl hover:text-primary" />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsTwitter className="text-2xl hover:text-primary" />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsLinkedin className="text-2xl hover:text-primary" />
                </a>
              </li>

              {/* ***** */}
            </ul>
          </div>
          <div className="flex flex-wrap gap-40">
            <div>
              <h4 className="text-2xl mb-4 text-primaryHeading">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-primaryText leading-8 ">
                <li className="hover:text-primary cursor-pointer">Home</li>
                <li className="hover:text-primary cursor-pointer">Product</li>
                <li className="hover:text-primary cursor-pointer">Careers</li>
                <li className="hover:text-primary cursor-pointer">Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl mb-4">Services</h4>
              <ul className="flex flex-col gap-3 text-primaryText leading-8">
                <li className="hover:text-primary cursor-pointer">
                  Web Development
                </li>
                <li className="hover:text-primary cursor-pointer">
                  Graphics Design
                </li>
                <li className="hover:text-primary cursor-pointer">
                  Digital Marketing
                </li>
                <li className="hover:text-primary cursor-pointer">
                  Ui/Ux Design
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl mb-4">Support</h4>
              <ul className="flex flex-col gap-3 text-primaryText leading-8">
                <li className="hover:text-primary cursor-pointer">Company</li>
                <li className="hover:text-primary cursor-pointer">
                  Press media
                </li>
                <li className="hover:text-primary cursor-pointer">Our Blog</li>
                <li className="hover:text-primary cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
