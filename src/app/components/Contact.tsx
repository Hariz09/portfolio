import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaLine } from 'react-icons/fa';

interface ContactItemProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  text: string;
  color: string;
  isExternal?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ Icon, href, text, color, isExternal = false }) => (
  <div className="flex items-center space-x-4">
    <Icon className={`h-6 w-6 ${color}`} />
    <a
      href={href}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : ''}
      className="text-lg text-white hover:underline"
    >
      {text}
    </a>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-8 bg-slate-950 text-white">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="w-fit text-4xl mb-6 relative">
          Contact Me
          <span className="block h-1 w-full bg-gray-700 mt-2"></span>
        </h2>
        <p className="text-lg mb-8">
          I’d love to hear from you. Here’s how you can get in touch with me:
        </p>
        {/* Contact items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6">
            <ContactItem
              Icon={CiMail}
              href="mailto:harizof@gmail.com"
              text="harizof@gmail.com"
              color="text-blue-400"
            />
            <ContactItem
              Icon={FaLinkedin}
              href="https://www.linkedin.com/in/m-hariz/"
              text="LinkedIn"
              color="text-blue-600"
              isExternal
            />
            <ContactItem
              Icon={FaGithub}
              href="https://github.com/Hariz09"
              text="GitHub"
              color="text-gray-400"
              isExternal
            />
          </div>
          <div className="flex flex-col space-y-6">
            <ContactItem
              Icon={FaInstagram}
              href="https://www.instagram.com/mhariz09/"
              text="Instagram"
              color="text-pink-500"
              isExternal
            />
            <ContactItem
              Icon={FaLine}
              href="#contact"
              text="harizalbaari"
              color="text-green-400"
            />
            <ContactItem
              Icon={FaDiscord}
              href="#contact"
              text="hariz_0905"
              color="text-[#5865F2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
