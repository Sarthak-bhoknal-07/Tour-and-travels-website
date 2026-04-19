import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';

export default function Booking() {
  const location = useLocation();
  const preSelectedCar = location.state?.selectedCar || 'ERTIGA';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-dark pt-32 pb-24 min-h-screen dot-pattern relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Book Your <span className="gold-text">Ride</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gold-gradient mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-sub"
          >
            Available across all of India — Fill the form below and we'll confirm within minutes
          </motion.p>
        </div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto glass-dark p-2 sm:p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-brand-gold/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <BookingForm selectedCar={preSelectedCar} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}