import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pickleballBg from '../../imports/pickleball-paddleand-ballon-court-kwdx8tydys0tq75n.jpg';

interface FeatureSlideProps {
  title: string;
  description: string;
  bullets: string[];
  screenshot: string | string[] | null;
  bgImage: string;
  accentColor: string;
}

export function FeatureSlide({
  title,
  description,
  bullets,
  screenshot,
  bgImage,
  accentColor,
}: FeatureSlideProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const screenshots = Array.isArray(screenshot) ? screenshot : screenshot ? [screenshot] : [];
  const hasMultipleImages = screenshots.length > 1;
  const currentScreenshot = screenshots[currentImageIndex] || screenshot;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Blurred Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${pickleballBg})`,
            filter: 'blur(8px)',
          }}
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/92" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center overflow-hidden px-4 md:px-12 py-5">
        <div className="container mx-auto max-w-7xl w-full h-full">
          <div className="grid grid-cols-[40%_60%] gap-4 items-stretch h-full">
            {/* Left: Feature Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2 md:space-y-3 overflow-y-auto pr-2 self-center"
              style={{ maxHeight: '100%' }}
            >
              <div>
                <motion.div
                  className="inline-block mb-3"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div
                    className="h-2 w-20 rounded-full"
                    style={{ backgroundColor: `var(--${accentColor})` }}
                  />
                </motion.div>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-2 md:mb-3 text-gray-900"
                  style={{ fontFamily: 'var(--font-display)', whiteSpace: 'pre-line' }}
                >
                  {title}
                </h2>
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-2 md:mb-4"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                >
                  {description}
                </p>
              </div>

              <ul className="space-y-3">
                {bullets.map((bullet, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div
                      className="mt-1 p-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `var(--${accentColor})` }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span
                      className="text-sm sm:text-base text-gray-800"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                    >
                      {bullet}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Screenshot */}
            {currentScreenshot && (
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-full"
              >
                <div className="relative flex items-center justify-center h-full">
                  <div
                    className="relative rounded-xl overflow-hidden shadow-2xl border-2"
                    style={{
                      backgroundColor: 'white',
                      borderColor: `var(--${accentColor})`,
                      height: '100%',
                      width: title === 'Smart Filtering' ? 'auto' : '100%',
                      maxWidth: title === 'Smart Filtering' ? '400px' : '100%',
                    }}
                  >
                    <ImageWithFallback
                      src={currentScreenshot}
                      alt={title}
                      style={{
                        imageRendering: 'crisp-edges',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>

                  {/* Navigation Arrows for Multiple Images */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handlePrevImage();
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="absolute top-1/2 -translate-y-1/2 left-2 backdrop-blur-md p-2 rounded-full transition-all shadow-lg cursor-pointer hover:scale-110"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderWidth: '2px',
                          borderStyle: 'solid',
                          borderColor: '#D1D5DB',
                          color: '#A3FF12',
                          zIndex: 100
                        }}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleNextImage();
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="absolute top-1/2 -translate-y-1/2 right-2 backdrop-blur-md p-2 rounded-full transition-all shadow-lg cursor-pointer hover:scale-110"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderWidth: '2px',
                          borderStyle: 'solid',
                          borderColor: '#D1D5DB',
                          color: '#A3FF12',
                          zIndex: 100
                        }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
