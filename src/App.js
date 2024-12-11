import React, { useState } from 'react';
import { 
  Home, 
  Moon, 
  Sun, 
  FileText, 
  Download 
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Mock data (replace with actual content)
  const PROFILE_DATA = {
    name: "Shamanth S R",
    title: "UI/UX Designer",
    bio: "Creative designer passionate about crafting intuitive digital experiences. With 5+ years of experience in user-centered design, I transform complex problems into elegant solutions.",
    profileImage: "/api/placeholder/400/400",
    resume: "/path/to/resume.pdf",
    projects: [
      { 
        id: 'project1', 
        title: 'E-Commerce Platform Redesign', 
        description: 'Streamlined user journey and improved conversion rates',
        thumbnail: "/api/placeholder/300/200"
      },
      { 
        id: 'project2', 
        title: 'Healthcare App Interface', 
        description: 'Created an intuitive mobile app for patient management',
        thumbnail: "/api/placeholder/300/200"
      }
    ]
  };

  const ContactBar = () => {
    const contactLinks = [
      { 
        name: 'Mail',
        link: "mailto:emma.rodriguez@email.com",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        )
      },
      { 
        name: 'WhatsApp',
        link: "https://wa.me/1234567890",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <path d="M17.6 17.6c-2.1 2.1-5.6 2.1-7.7 0-2.1-2.1-2.1-5.6 0-7.7l3.9-3.9c1.2-1.2 3.1-1.2 4.3 0 1.2 1.2 1.2 3.1 0 4.3l-3.9 3.9c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l2.5-2.5"></path>
            <path d="M12.5 17.6l-.4.4c-1.2 1.2-3.1 1.2-4.3 0-1.2-1.2-1.2-3.1 0-4.3l3.9-3.9c1.2-1.2 3.1-1.2 4.3 0"></path>
          </svg>
        )
      },
      { 
        name: 'Instagram',
        link: "https://instagram.com/emma.design",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        )
      },
      { 
        name: 'Twitter',
        link: "https://x.com/emma_design",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
            <path d="M18.901 1.153h3.682l-8.04 9.126L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.474l8.659-9.89L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.626 17.08h2.038L7.016 3.257H4.82L17.275 18.233Z"/>
          </svg>
        )
      },
      { 
        name: 'Linkedin',
        link: "https://linkedin.com/in/emmarodriguez",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-700">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5a1.75 1.75 0 01-1.75 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 16v3h-3v-9h2.9v1.2a3.15 3.15 0 012.85-1.6c1.55 0 3.06.88 3.06 3.05z"/>
          </svg>
        )
      }
    ];

    return (
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50 p-4">
        <div className="flex justify-center space-x-6">
          {contactLinks.map(({ name, link, svg }) => (
            <a 
              key={link} 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label={name}
            >
              {svg}
            </a>
          ))}
        </div>
      </div>
    );
  };

  const Navbar = () => {
    const navItems = [
      { id: 'home', label: 'Home', icon: Home },
      { id: 'projects', label: 'Projects', icon: FileText },
      { id: 'resume', label: 'Resume', icon: FileText }
    ];

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };

    return (
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex space-x-6">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`
                  flex items-center space-x-2 
                  ${currentPage === id 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-600 hover:text-blue-400'}
                `}
              >
                <Icon size={20} />
                <span className="hidden md:inline">{label}</span>
              </button>
            ))}
          </div>
          <button 
            onClick={toggleTheme}
            className="text-gray-700 dark:text-white hover:scale-110 transition-transform"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>
    );
  };

  const HomePage = () => {
    const [activeSection, setActiveSection] = useState('profile');

    return (
      <div className="pt-20 pb-20 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <img 
            src={PROFILE_DATA.profileImage} 
            alt={PROFILE_DATA.name} 
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h1 className="text-3xl font-bold mb-2 dark:text-white">
            {PROFILE_DATA.name}
          </h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            {PROFILE_DATA.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mb-6">
            {PROFILE_DATA.bio}
          </p>

          <div className="flex justify-center space-x-4 mb-6">
            <button 
              onClick={() => setActiveSection('profile')}
              className={`
                px-4 py-2 rounded-full
                ${activeSection === 'profile' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'}
              `}
            >
              Profile
            </button>
            <button 
              onClick={() => setActiveSection('projects')}
              className={`
                px-4 py-2 rounded-full
                ${activeSection === 'projects' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'}
              `}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveSection('resume')}
              className={`
                px-4 py-2 rounded-full
                ${activeSection === 'resume' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'}
              `}
            >
              Resume
            </button>
          </div>

          {activeSection === 'projects' && (
            <div className="grid md:grid-cols-2 gap-4">
              {PROFILE_DATA.projects.map(project => (
                <div 
                  key={project.id} 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform"
                >
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'resume' && (
            <div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Resume preview would be displayed here
                </p>
              </div>
              <a
                href={PROFILE_DATA.resume}
                download
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen`}>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        
        {currentPage === 'home' && <HomePage />}
        
        <ContactBar />
      </div>
    </div>
  );
};

export default App;