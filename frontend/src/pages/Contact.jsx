import { Phone, MapPin, Clock, MessageSquare, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-dark pt-32 pb-24 min-h-screen dot-pattern relative"
    >
      {/* Decorative Hero Banner Line */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[200px] text-brand-gold/5 fill-current">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-3 md:mb-4"
          >
            Get in <span className="gold-text">Touch</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 md:w-24 h-1 bg-gold-gradient mx-auto mb-4 md:mb-6"
          ></motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-sub"
          >
            Get in touch for bookings, inquiries, or custom travel packages. We are available 24/7.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          
          {/* Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-dark border-l-4 border-l-brand-gold rounded-2xl shadow-2xl p-6 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 md:mb-10 gold-text drop-shadow-sm">Aadishakti Tours</h3>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-5">
                <div className="bg-brand-gold/10 p-3 md:p-4 rounded-full mt-1 border border-brand-gold/20">
                  <Phone className="text-brand-gold w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2 font-sub">Call Us</h4>
                  <a href="tel:+917057053550" className="block text-xl md:text-2xl font-bold text-white hover:text-brand-gold transition mb-0.5 md:mb-1 font-sub">+91 7057053550</a>
                  <a href="tel:+918265092760" className="block text-xl md:text-2xl font-bold text-white hover:text-brand-gold transition font-sub">+91 8265092760</a>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="bg-brand-gold/10 p-3 md:p-4 rounded-full mt-1 border border-brand-gold/20">
                  <MessageSquare className="text-brand-gold w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2 font-sub">WhatsApp</h4>
                  <a href="https://wa.me/917057053550" target="_blank" rel="noreferrer" className="block text-lg md:text-xl text-white hover:text-brand-gold transition font-sub">
                    +91 7057053550
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="bg-brand-gold/10 p-3 md:p-4 rounded-full mt-1 border border-brand-gold/20">
                  <MapPin className="text-brand-gold w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2 font-sub">Location</h4>
                  <p className="text-lg md:text-xl text-white font-sub">Pune, Maharashtra</p>
                  <p className="text-gray-400 text-sm mt-0.5 md:mt-1">Pan India — All States</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-5 md:hidden">
                <div className="bg-brand-gold/10 p-3 rounded-full mt-1 border border-brand-gold/20">
                  <Clock className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1 font-sub">Working Hours</h4>
                  <p className="text-lg text-white font-sub">24/7 Available</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-brand-gold/10 p-4 rounded-full mt-1 border border-brand-gold/20">
                  <Globe className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2 font-sub">Service Area</h4>
                  <p className="text-xl text-white font-sub">Pan India — All States</p>
                  <p className="text-gray-400 mt-1">Long distance trips anywhere in India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-lg text-gray-400 font-sub">Proprietor: <span className="text-white font-bold">Sandeep Dhumal</span></p>
            </div>
          </motion.div>

          {/* Action Buttons / CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* WhatsApp Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-10 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.3)] text-center relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 opacity-20">
                <MessageSquare size={150} fill="currentColor" className="text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4 font-heading">Fastest response</h3>
                <p className="text-white/90 mb-8 font-sub text-lg">Click below to start a WhatsApp chat instantly. We reply quickly!</p>
                <a 
                  href="https://wa.me/917057053550" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-white text-[#128C7E] py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-lg"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Direct Call Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="glass-dark p-10 rounded-2xl shadow-xl text-center border border-white/5"
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Direct Phone Call</h3>
              <p className="text-gray-400 mb-8 font-sub">Need immediate assistance? Call us directly.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+917057053550" 
                  className="flex-1 flex items-center justify-center gap-3 bg-gold-gradient text-brand-dark py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-shadow"
                >
                  <Phone size={20} />
                  7057053550
                </a>
                <a 
                  href="tel:+918265092760" 
                  className="flex-1 flex items-center justify-center gap-3 bg-transparent border-2 border-brand-gold text-brand-gold py-4 rounded-full font-bold text-lg hover:bg-brand-gold hover:text-brand-dark transition-colors"
                >
                  <Phone size={20} />
                  8265092760
                </a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}