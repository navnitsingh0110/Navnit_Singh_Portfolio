import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/navnitsingh145/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/navnitsingh0110" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/navnit_singh01/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;