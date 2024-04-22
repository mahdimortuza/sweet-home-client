import logo from "@/assets/logo/mainLogo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-full w-full max-w-[1300px] px-5 mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 place-content-center gap-[30px] lg:gap-[120px]">
        {/* col-1  */}
        <div>
          {/* <img src={logo} /> */}
          <Image src={logo} alt="logo" width={200} height={150} />
        </div>

        {/* col-2  */}
        <div>
          <h3 className="text-2xl font-bold">Working days</h3>
          <p className="text-gray font-inter mt-11 text-base">
            Sat-Wet: 09:00am-10:00PM
          </p>
          <p className="text-gray font-inter mt-1 text-base">
            {" "}
            Thursdayt: 09:00am-11:00PM{" "}
          </p>
          <p className="text-gray font-inter mt-1 text-base">
            Friday: 09:00am-8:00PM
          </p>
        </div>

        {/* col-3  */}
        <ul className="flex flex-col">
          <h3 className="text-2xl font-bold"> User Link</h3>
          <Link href="/" className="text-gray font-inter mt-11 text-base">
            About Us
          </Link>
          <Link href="/" className="text-gray font-inter mt-1 text-base">
            Contact Us
          </Link>

          <Link href="/" className="text-gray font-inter mt-1 text-base">
            Payment & Tex
          </Link>
          <Link href="/" className="text-gray font-inter mt-1 text-base">
            Terms of Services
          </Link>
        </ul>

        {/* col-4  */}
        <div>
          <h3 className="text-2xl font-bold">Contact Us </h3>
          <p className="text-gray font-inter mt-11 text-base">
            1234 Country Club Ave
          </p>
          <p className="text-gray font-inter mt-1 text-base">
            NC 123456, London, UK
          </p>
          <p className="text-gray font-inter mt-1 text-base">+0123 456 7891</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
