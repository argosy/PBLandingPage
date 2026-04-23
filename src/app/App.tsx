import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel-custom.css';
import './header-custom.css';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FeatureSlide } from './components/FeatureSlide';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import mascotImg from '../imports/IMG_9381-1.PNG';
import calendarWeekViewImg from '../imports/CalendarWeekView.png';
import addVenueImg from '../imports/Add_Venue.png';
import venueScreenshot2 from '../imports/Screenshot_2026-04-21_175325.png';
import filtersImg from '../imports/Screenshot_2026-04-21_180632.png';
import classAliasesImg from '../imports/Class_Aliases-1.png';

export default function App() {
  const sliderRef = useRef<Slider>(null);

  const features = [
    {
      title: 'Multiple Venues. One Calendar.',
      description: '',
      bullets: [
        'Show all classes across all venues',
        'View by Week/Day/Date/Class/Venue',
        'Download your bookings to your personal calendar',
        'Book multiple classes with a single click'
      ],
      screenshot: calendarWeekViewImg,
      bgImage: 'https://images.unsplash.com/photo-1737229471661-78a6a16f33bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      accentColor: 'pickle-cyan'
    },
    {
      title: 'SELECT LOCAL VENUES',
      description: '',
      bullets: [
        'Search by Name/State or use Map',
        'Sort venues by name or proximity',
        'Add you own local venues'
      ],
      screenshot: [venueScreenshot2, addVenueImg],
      bgImage: 'https://images.unsplash.com/photo-1562586177-9442bec6d950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      accentColor: 'pickle-green'
    },
    {
      title: 'Smart Filtering',
      description: 'Organize classes by your preferences',
      bullets: [
        'Filter by state, venue, and class type',
        'Create custom class aliases',
        'Filter by keywords'
      ],
      screenshot: [filtersImg, classAliasesImg],
      bgImage: 'https://images.unsplash.com/photo-1562586177-9442bec6d950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      accentColor: 'pickle-green'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
    customPaging: (i: number) => (
      <button
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
        }}
      >
        {i + 1}
      </button>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'absolute', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', zIndex: 50, padding: '0 16px', pointerEvents: 'none' }}>
        <motion.button
          onClick={() => sliderRef.current?.slickPrev()}
          className="backdrop-blur-md rounded-full transition-all shadow-lg flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#D1D5DB',
            color: '#A3FF12',
            width: '28px',
            height: '28px',
            padding: '4px',
            minWidth: '28px',
            pointerEvents: 'auto'
          }}
          whileHover={{ scale: 1.1, borderColor: '#A3FF12' }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-3 h-3" />
        </motion.button>

        <ul style={{ display: 'flex', gap: '6px', margin: 0, padding: 0, listStyle: 'none', alignItems: 'center', pointerEvents: 'auto' }}>{dots}</ul>

        <motion.button
          onClick={() => sliderRef.current?.slickNext()}
          className="backdrop-blur-md rounded-full transition-all shadow-lg flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#D1D5DB',
            color: '#A3FF12',
            width: '28px',
            height: '28px',
            padding: '4px',
            minWidth: '28px',
            pointerEvents: 'auto'
          }}
          whileHover={{ scale: 1.1, borderColor: '#A3FF12' }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-3 h-3" />
        </motion.button>
      </div>
    ),
  };

  return (
    <div className="min-h-screen text-gray-900 overflow-hidden relative" style={{ backgroundColor: '#E0F2FE' }}>
      {/* Hero Section */}
      <motion.div
        className="relative z-20 pt-4 pb-6 px-6 shadow-lg"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #FFF9C4, #C8E6C9)',
          borderBottom: '3px solid #DFFF00'
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="header-grid items-center max-w-7xl mx-auto">
          {/* Left: Mascot Logo */}
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.99, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
          >
            <ImageWithFallback
              src={mascotImg}
              alt="Pickle Bot Mascot"
              className="w-16 md:w-28 lg:w-32 xl:w-36 h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Center: Title and Tagline */}
          <motion.div
            className="flex flex-col items-center justify-center text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1
              className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-none tracking-tight mb-0"
              style={{
                fontFamily: 'var(--font-display)',
                backgroundImage: 'linear-gradient(135deg, #2E7D32 0%, #7EC850 35%, #DFFF00 65%, #FFFF00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.4))',
              }}
            >
              Pckl.Bot
            </h1>
            <div className="h-0.5 md:h-1 bg-[#DFFF00] mt-1 rounded-full shadow-lg w-full max-w-[200px] md:max-w-xs"></div>
            <motion.p
              className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base mt-1 md:mt-2 text-gray-700 leading-tight"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Multi‑venue booking & schedule management<br />
              <span style={{ color: '#DFFF00', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>For the Pickle ball obsessed.</span>
            </motion.p>
          </motion.div>

          {/* Right: Buttons */}
          <div className="flex justify-end gap-1 md:gap-2">
            <motion.a
              href="/login"
              className="px-2 sm:px-3 md:px-6 py-1.5 md:py-2 text-black rounded-full text-[0.6rem] sm:text-xs md:text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-display)',
                backgroundColor: '#A3FF12',
              }}
              whileHover={{ scale: 1.05, y: -1, backgroundColor: '#8FE610' }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.a>
            <motion.a
              href="/register"
              className="px-2 sm:px-3 md:px-6 py-1.5 md:py-2 rounded-full text-[0.6rem] sm:text-xs md:text-sm uppercase tracking-wide transition-all shadow-lg whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-display)',
                backgroundColor: '#FFE600',
                color: '#000000',
                border: '2px solid #FFE600',
              }}
              whileHover={{ scale: 1.05, y: -1, backgroundColor: '#FFD700' }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Carousel Section */}
      <div className="relative z-10" style={{ height: 'clamp(400px, 60vh, 580px)', minHeight: '400px' }}>
        <Slider ref={sliderRef} {...settings}>
          {features.map((feature, index) => (
            <FeatureSlide key={index} {...feature} />
          ))}
        </Slider>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-[120px]"
          style={{ backgroundColor: 'rgba(163, 255, 18, 0.15)' }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-[120px]"
          style={{ backgroundColor: 'rgba(255, 230, 0, 0.15)' }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
