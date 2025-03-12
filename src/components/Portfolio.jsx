/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/classnames-order */
import { useState } from 'react';
import { Volume2, VolumeX, X, Home } from 'lucide-react';

// Project Data
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Project One is a comprehensive branding and UI design project that redefines modern aesthetics with a sleek, minimalist approach.',
    details: 'Key features include custom iconography, carefully selected typography for readability and elegance, high-fidelity UI mockups, a balanced color palette, and an intuitive grid system for smooth user experience. Technologies used include Adobe Photoshop, Figma, Illustrator, and Tailwind CSS.',
    images: ['img/feature-1.jpg', 'img/feature-2.jpg', 'img/feature-3.jpg', 'img/feature-4.jpg', 'img/feature-5.jpg', 'img/feature-6.jpg']
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Project Two is an innovative design concept focused on smooth user interactions and immersive visuals.',
    details: 'Key features include motion design with subtle animations, modern UI trends like glassmorphism and neumorphism, responsive components for mobile-first adaptability, and an accessible dark mode for high contrast and readability. Technologies used include Adobe After Effects, Figma, Lottie animations, and CSS animations.',
    images: ['img/feature-4.jpg', 'img/feature-5.jpg', 'img/feature-6.jpg']
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Project Three is a fully responsive UI kit crafted for businesses seeking a sleek and modern web solution.',
    details: 'Key features include modular UI components for easy customization, mobile-optimized layouts for a fluid experience, adaptive dark & light mode for various environments, and a minimalist yet functional design. Technologies used include Figma, Sketch, Bootstrap, and Tailwind CSS.',
    images: ['img/feature-7.jpg', 'img/feature-8.jpg']
  }
];

// Modal Component
const Modal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative w-4/5 max-h-[80vh] bg-gray-900 p-6 rounded-lg overflow-y-auto">
        
        {/* Close Button */}
        <div className="sticky top-0 inset-x-0 p-3 z-50 flex justify-end">
          <button className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Project Details */}
        <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
        <p className="text-gray-300 mb-2">{project.description}</p>
        <p className="text-gray-400 text-sm">{project.details}</p>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2 mt-4">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt={project.title} className="w-full h-auto rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

// Portfolio Component
const Portfolio = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Background Section */}
      <section className="relative h-screen overflow-hidden">
        <video src="/videos/feature-1.mp4" className="absolute inset-0 size-full object-cover" autoPlay loop muted={isMuted} playsInline />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white bg-opacity-10">
          <button onClick={() => setIsMuted(!isMuted)} className="absolute top-5 right-10">
            {isMuted ? <VolumeX size={30} /> : <Volume2 size={30} />}
          </button>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="relative group cursor-pointer" onClick={() => openModal(project)}>
              <img src={project.images[0]} alt={project.title} className="w-full h-72 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home Button */}
      <button className="fixed bottom-5 right-5 bg-white text-black p-3 rounded-full">
        <a href="/" target="_blank">
          <Home size={24} />
        </a>
      </button>

      {/* Modal */}
      <Modal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Portfolio;
