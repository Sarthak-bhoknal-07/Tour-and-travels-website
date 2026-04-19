import { useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Car, Users, MapPin, Calendar, Clock, MessageSquare, Phone, Send, ShieldCheck } from 'lucide-react';

export default function BookingForm({ selectedCar = '' }) {
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    pickupLocation: '',
    destination: '',
    travelDate: '',
    travelTime: '',
    timePeriod: 'AM',
    vehicle: selectedCar || 'ERTIGA',
    passengers: 1,
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVehicleSelect = (val) => {
    setFormData({ ...formData, vehicle: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      // 1. Save to Database via Backend
      const backendData = {
        ...formData,
        vehicle: formData.vehicle === 'ERTIGA' ? 'Suzuki Ertiga (7 Seater AC)' : 'Toyota Glanza (5 Seater AC)',
        travelTime: `${formData.travelTime} ${formData.timePeriod}`
      };
      
      try {
        await axios.post('http://localhost:8080/api/bookings', backendData);
      } catch (dbError) {
        console.error('❌ Database Sync Error:', dbError);
        // We continue with EmailJS even if DB fails for reliability
      }

      // 2. Send Email Notification
      const templateParams = {
        to_name: 'Sandeep Dhumal',
        from_name: formData.customerName,
        customer_phone: formData.mobileNumber,
        pickup: formData.pickupLocation,
        destination: formData.destination,
        date: formData.travelDate,
        time: `${formData.travelTime} ${formData.timePeriod}`,
        vehicle: formData.vehicle === 'ERTIGA' ? 'Suzuki Ertiga (7 Seater AC)' : 'Toyota Glanza (5 Seater AC)',
        passengers: formData.passengers.toString(),
        message: formData.message || 'No special request',
        booking_time: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      await emailjs.send(
        'service_but5dkd',
        'template_arg2jfb',
        templateParams,
        'R7npt3gGO9SQky_eT'
      );

      setStatus({ loading: false, success: true, error: '' });
      setFormData({
        customerName: '', mobileNumber: '', pickupLocation: '',
        destination: '', travelDate: '', travelTime: '',
        timePeriod: 'AM', vehicle: 'ERTIGA', passengers: 1, message: ''
      });

    } catch (error) {
      console.error('❌ Booking Error:', error);
      setStatus({
        loading: false,
        success: false,
        error: 'Booking received! Please call us to confirm: 7057053550'
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  const InputField = ({ label, name, type = "text", icon: Icon, placeholder, ...props }) => (
    <div className="relative group">
      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${formData[name] ? 'opacity-0 scale-50' : 'opacity-40 group-focus-within:opacity-0 group-focus-within:scale-50'}`}>
        <Icon size={20} className="text-gray-900" />
      </div>
      <input
        {...props}
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pr-4 transition-all duration-300 outline-none focus:border-brand-gold focus:bg-white focus:shadow-[0_0_20px_rgba(245,166,35,0.15)] text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-medium ${formData[name] || type === 'date' || type === 'time' ? 'pl-6' : 'pl-12'}`}
      />
      <label className={`absolute left-4 -top-2.5 bg-white px-2 text-[10px] font-black uppercase tracking-widest text-brand-gold transition-all duration-300 ${formData[name] || type === 'date' || type === 'time' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        {label}
      </label>
    </div>
  );

  if (status.success) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white p-10 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.1)] text-center border-t-8 border-brand-gold relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-16 translate-x-16"></div>
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center border-4 border-green-100 shadow-xl">
            <CheckCircle2 className="w-14 h-14 text-green-600" />
          </div>
        </motion.div>

        <h2 className="text-4xl font-heading font-black text-gray-900 mb-4">Success!</h2>
        
        <p className="text-green-700 font-bold mb-8 flex items-center justify-center gap-2 bg-green-50 py-2 rounded-full">
          <span>✓</span> Notification Sent to Sandeep
        </p>

        <p className="text-gray-500 mb-10 max-w-sm mx-auto font-medium leading-relaxed">
          Your premium journey starts here. Sandeep Dhumal will contact you within 15 minutes.
        </p>

        <div className="flex flex-col gap-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/917057053550"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-2xl font-black text-lg hover:shadow-[0_15px_30px_rgba(37,211,102,0.3)] transition-all"
          >
            <MessageSquare className="w-6 h-6" />
            Message on WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:7057053550"
            className="flex items-center justify-center gap-3 bg-brand-dark text-white py-5 rounded-2xl font-black text-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all"
          >
            <Phone className="w-6 h-6" />
            Direct Call Support
          </motion.a>
        </div>

        <button
          onClick={() => setStatus({ loading: false, success: false, error: '' })}
          className="mt-10 text-gray-400 hover:text-brand-gold text-xs font-black tracking-widest uppercase transition-colors"
        >
          New Booking Request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_40px_120px_rgba(0,0,0,0.15)] border-t-[10px] md:border-t-[12px] border-brand-gold relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
      
      <div className="mb-8 md:mb-12 text-center md:text-left relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mb-3 md:mb-4 tracking-tighter">
          Premium <span className="text-brand-gold italic">Booking</span>
        </h2>
        <div className="w-16 md:w-20 h-1 md:h-1.5 bg-brand-gold mx-auto md:mx-0 rounded-full mb-4 md:mb-6 shadow-[0_0_10px_rgba(245,166,35,0.5)]"></div>
        <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[8px] md:text-[10px]">
          24/7 VIP Chauffeur Service • All India
        </p>
      </div>

      {status.error && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-4 md:p-5 bg-red-50 border-2 border-red-100 rounded-xl md:rounded-2xl text-red-700 text-xs md:text-sm font-black flex items-center gap-3 md:gap-4 shadow-sm"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-lg">⚠️</div>
          {status.error}
        </motion.div>
      )}

      {/* Vehicle Selection */}
      <div className="mb-10 md:mb-12 relative z-10">
        <label className="block text-gray-900 font-black mb-4 md:mb-6 flex items-center gap-2 md:gap-3 text-[10px] md:text-sm uppercase tracking-[0.2em]">
          <Car className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" /> 1. Select Vehicle Class
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {[
            { id: 'ERTIGA', name: 'Suzuki Ertiga', seats: '7 Seater', type: 'Executive MPV' },
            { id: 'GLANZA', name: 'Toyota Glanza', seats: '5 Seater', type: 'Premium Hatch' }
          ].map(v => (
            <button
              key={v.id}
              type="button"
              onClick={() => handleVehicleSelect(v.id)}
              className={`p-4 md:p-6 rounded-2xl md:rounded-[2rem] text-left border-2 md:border-4 transition-all duration-500 relative overflow-hidden group ${
                formData.vehicle === v.id
                  ? 'border-brand-gold bg-brand-gold/5 shadow-lg md:shadow-xl'
                  : 'border-gray-50 bg-gray-50/50 hover:border-gray-200 hover:bg-white hover:shadow-md md:hover:shadow-lg'
              }`}
            >
              <div className="flex justify-between items-start mb-1 md:mb-2 relative z-10">
                <span className={`font-black text-lg md:text-xl tracking-tighter ${formData.vehicle === v.id ? 'text-gray-900' : 'text-gray-600'}`}>{v.name}</span>
                {formData.vehicle === v.id ? (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <div className="bg-brand-gold p-0.5 md:p-1 rounded-full shadow-lg shadow-brand-gold/30">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </motion.div>
                ) : (
                  <div className="w-5 h-5 md:w-7 md:h-7 rounded-full border-2 border-gray-200"></div>
                )}
              </div>
              <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 relative z-10">{v.seats} • {v.type}</div>
              
              {formData.vehicle === v.id && (
                <motion.div 
                  layoutId="activeGlow"
                  className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent pointer-events-none"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <div className="relative z-10">
        <label className="block text-gray-900 font-black mb-4 md:mb-6 flex items-center gap-2 md:gap-3 text-[10px] md:text-sm uppercase tracking-[0.2em]">
          <Users className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" /> 2. Trip Details
        </label>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <InputField label="Full Name" name="customerName" icon={Users} placeholder="Enter your full name" required />
          <InputField label="Mobile Number" name="mobileNumber" type="tel" icon={Phone} placeholder="10-digit mobile number" required />
          <InputField label="Pickup From" name="pickupLocation" icon={MapPin} placeholder="Pickup area or city" required />
          <InputField label="Drop Location" name="destination" icon={MapPin} placeholder="Destination city" required />
          <InputField label="Journey Date" name="travelDate" type="date" icon={Calendar} min={today} required />
          
          <div className="flex gap-2">
            <div className="flex-grow">
              <InputField label="Pickup Time" name="travelTime" type="time" icon={Clock} required />
            </div>
            <div className="grid grid-cols-2 bg-gray-50 p-1 rounded-xl md:p-1.5 md:rounded-2xl border-2 border-gray-100 w-24 md:w-32">
              {['AM', 'PM'].map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setFormData({...formData, timePeriod: p})}
                  className={`rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black transition-all duration-300 ${formData.timePeriod === p ? 'bg-brand-dark text-white shadow-md md:shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative">
              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl md:rounded-2xl py-3 md:py-4 pl-10 md:pl-12 pr-4 appearance-none outline-none focus:border-brand-gold transition-all text-gray-900 font-bold text-sm md:text-base"
              >
                {[1,2,3,4,5,6,7].map(num => (
                  <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                ))}
              </select>
              <Users className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <label className="absolute left-4 -top-2 bg-white px-2 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-gold">
                No. of Passengers
              </label>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8">
          <div className="relative">
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 outline-none focus:border-brand-gold transition-all text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-medium text-sm md:text-base"
              placeholder="Any special requests? (e.g. luggage info, extra stops)"
            ></textarea>
            <label className={`absolute left-4 -top-2 bg-white px-2 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-gold transition-all duration-300 ${formData.message ? 'opacity-100' : 'opacity-0'}`}>
              Special Request
            </label>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.01, y: -1 }}
        whileTap={{ scale: 0.99 }}
        disabled={status.loading}
        type="submit"
        className={`w-full mt-8 md:mt-12 py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-white text-lg md:text-xl transition-all shadow-xl md:shadow-2xl flex items-center justify-center gap-3 md:gap-4 relative overflow-hidden group ${
          status.loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-dark hover:shadow-brand-dark/30'
        }`}
      >
        <div className="absolute inset-0 bg-gold-gradient translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"></div>
        
        {status.loading ? (
          <>
            <div className="w-5 h-5 md:w-7 md:h-7 border-2 md:border-4 border-white/30 border-t-white rounded-full animate-spin" />
            <span className="relative z-10 text-sm md:text-base">Processing VIP Request...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:text-brand-dark transition-colors duration-300" />
            <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-300 uppercase tracking-widest text-sm md:text-base">Confirm Booking Now</span>
          </>
        )}
      </motion.button>

      <div className="mt-6 md:mt-8 flex items-center justify-center gap-4 md:gap-6 opacity-40">
        <div className="flex items-center gap-1.5 md:gap-2">
          <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-brand-gold" />
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">SSL Encrypted</span>
        </div>
        <div className="w-px h-2 md:h-3 bg-gray-300"></div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <Clock className="w-3 h-3 md:w-4 md:h-4 text-brand-gold" />
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Instant Response</span>
        </div>
      </div>
    </form>
  );
}