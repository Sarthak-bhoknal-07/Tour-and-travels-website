import { motion } from 'framer-motion';
import { ShieldCheck, Map, Users, Star, Clock } from 'lucide-react';

export default function About() {
  const features = [
    { icon: ShieldCheck, title: "पारदर्शक व्यवहार", desc: "आम्ही पारदर्शकतेवर विश्वास ठेवतो." },
    { icon: Map, title: "अनुभवी ड्रायव्हर", desc: "रस्त्यांची उत्तम माहिती असलेले व्यावसायिक ड्रायव्हर." },
    { icon: Users, title: "ग्राहकाभिमुख सेवा", desc: "तुमच्या गरजेनुसार प्रवासाचे नियोजन." },
    { icon: Star, title: "सुरक्षित प्रवास", desc: "स्वच्छ आणि आरामदायी वाहने." },
    { icon: Clock, title: "वेळेचे महत्त्व", desc: "वेळेवर पोहोचण्याची आमची खात्री." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-dark pt-32 pb-24 min-h-screen text-white px-6 font-sub"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading font-black mb-6">
            आमच्याबद्दल - <span className="gold-text">Aadishakti Tours & Travels</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            सेवा हीच आमची ओळख! आम्ही तुमच्या प्रवासाला सुरक्षित, आरामदायी आणि अविस्मरणीय बनवण्यासाठी कटिबद्ध आहोत.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 mb-16 border border-white/5">
          <h2 className="text-2xl font-bold mb-6 gold-text">आमचा उद्देश</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Aadishakti Tours & Travels कडून आम्ही विश्वसनीय आणि दर्जेदार प्रवास सेवा पुरवतो. फॅमिली ट्रिप्स, धार्मिक यात्रा, स्थानिक फिरणे, आउटस्टेशन, कॉर्पोरेट टूर आणि इतर ट्रान्सपोर्टेशन सेवांसाठी आम्ही सर्वोत्तम पर्याय आहोत. आमचा मुख्य उद्देश प्रत्येक प्रवास सुरक्षित, सोयीस्कर आणि आनंददायी करणे हा आहे.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((f, i) => (
                <div key={i} className="glass-card p-6 border border-white/5 flex flex-col items-center text-center">
                    <f.icon size={32} className="text-brand-gold mb-4"/>
                    <h3 className="font-bold mb-2">{f.title}</h3>
                    <p className="text-sm text-gray-400">{f.desc}</p>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="glass-card p-8 border border-white/5">
                <h3 className="text-xl font-bold mb-4 gold-text">आमच्या सेवा (Service Areas)</h3>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>संपूर्ण महाराष्ट्रात पिकअप व ड्रॉप सेवा</li>
                    <li>पुणे लोकल व आउटस्टेशन</li>
                    <li>पुणे-मुंबई प्रवास</li>
                    <li>कौटुंबिक सहली</li>
                    <li>कॉर्पोरेट टूर व इव्हेंट ट्रान्सपोर्ट</li>
                    <li>धार्मिक यात्रा</li>
                    <li>टुरिस्ट डेस्टिनेशन ट्रिप्स</li>
                </ul>
            </div>
            <div className="glass-card p-8 border border-white/5">
                <h3 className="text-xl font-bold mb-4 gold-text">धार्मिक व पर्यटन स्थळे</h3>
                <p className="text-gray-300">
                    शिर्डी, शनिशिंगणापूर, त्र्यंबकेश्वर, तुळजापूर, अक्कलकोट, पंढरपूर, कोल्हापूर, नरसोबाची वाडी, नाशिक, महाबळेश्वर, लोणावळा, मुंबई इ. प्रमुख स्थळांसाठी आम्ही उत्तम सोय करतो.
                </p>
            </div>
        </div>

        <div className="text-center">
            <p className="text-brand-gold text-2xl font-black italic">"सेवा हीच आमची ओळख!"</p>
            <p className="mt-4 font-bold">Sandeep Dhumal - Proprietor</p>
        </div>
      </div>
    </motion.div>
  );
}
