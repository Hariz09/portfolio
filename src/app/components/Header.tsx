import React from 'react';

const Header = () => {
  return (
    <header className="py-8 bg-gray-900 text-white">
      {/* Container for layout and spacing */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between py-4 px-8 md:px-12">
        
        {/* Text content section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-5xl mb-10">Hello! I&apos;m Hariz, a Junior Web Developer</h1>
          <p className="text-lg my-8 text-justify">
            Aspiring Full-Stack Developer | Passionate about Front-End and Back-End Development <br /> <br />
            With a passion for both front-end and back-end development, I&apos;m eager to collaborate on meaningful projects and contribute to the ever-evolving world of web development.
            With a passion for both front-end and back-end development, I&apos;m eager to collaborate on meaningful projects and contribute to the ever-evolving world of web development.
          </p>
        </div>

        {/* Profile picture section */}
        <div className="md:w-1/3 flex justify-center md:justify-end p-9">
          <img 
            src={'./Profil_PasFoto.jpg'}
            alt="Hariz" 
            className="w-48 h-48 rounded-full border-4 border-gray-300 object-cover" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
