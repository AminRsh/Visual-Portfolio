/* eslint-disable tailwindcss/classnames-order */
import { useState } from 'react';
import { Volume2, VolumeX, X, Home } from 'lucide-react';

const Modal = ({ images, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative w-4/5 bg-gray-900 p-4 rounded-lg overflow-auto">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img key={index} src={img} alt="Gallery" className="w-full h-auto rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    'img/feature-1.jpg',
    'img/feature-2.jpg',
    'img/feature-3.jpg',
    'img/feature-4.jpg',
    'img/feature-5.jpg',
    'img/feature-6.jpg',
    'img/feature-7.jpg',
    'img/feature-8.jpg',
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      <section className="relative h-screen overflow-hidden">
        <video
          src="/videos/feature-1.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white bg-opacity-10">
          
          <button onClick={() => setIsMuted(!isMuted)} className='absolute top-5 right-10'>
            {isMuted ? <VolumeX size={30} /> : <Volume2 size={30} />}
          </button>
        </div>
      </section>

      
      <section className="py-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <img src={img} alt="Gallery Item" className="w-full h-72 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white">View Gallery</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home Button */}
      <button className="fixed bottom-5 right-5 bg-white text-black p-3 rounded-full" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <a href="/" target='_blank'>
        <Home size={24} />
        </a>
      </button>

      {/* Modal */}
      <Modal images={galleryImages} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Portfolio;
