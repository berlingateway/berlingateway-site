import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Facebook, Instagram, Video, ExternalLink, Phone, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 } as any
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden" dir="rtl">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 translate-y-1/2 translate-x-1/2" />
      
      {/* Main Content Container */}
      <motion.div 
        className="w-full max-w-md z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-4 border-4 border-accent/20 p-2">
            {/* Placeholder for Logo - Using Brandenburg Gate Icon Concept */}
            <div className="text-4xl">🏛️</div>
          </div>
          
          <h1 className="text-2xl font-bold text-primary mb-2 font-cairo leading-tight">
            A German Medical Gateway <br/>
            <span className="text-lg font-normal text-primary/80">for Private & International Patients</span><br/>
            <span className="text-sm font-normal text-muted-foreground mt-1 block">Operated by Berlin Medical Care</span>
          </h1>
          <p className="text-muted-foreground text-xl font-bold mt-2 text-primary">بوابة الطب الألماني للنخبة</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="px-3 py-1 bg-secondary/30 text-primary text-xs rounded-full font-bold border border-secondary">🇩🇪 German Quality</span>
            <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full font-bold border border-accent/50">✨ Excellence</span>
          </div>
        </motion.div>

        {/* Primary CTA - WhatsApp */}
        <motion.div variants={itemVariants} className="mb-6">
          <a href="https://wa.me/4915781497451" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-xl shadow-lg flex items-center justify-between transition-all transform group-hover:-translate-y-1 group-hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <MessageCircle size={28} fill="white" className="text-white" />
                </div>
                <div className="text-right">
                  <h3 className="font-bold text-xl">تواصل عبر واتساب</h3>
                  <p className="text-white/90 text-sm">طلب تقييم طبي خاص</p>
                </div>
              </div>
              <ExternalLink className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        </motion.div>

        {/* Social Media Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 mb-8">
          
          {/* Facebook */}
          <a href="https://www.facebook.com/share/1JuvcRvEQg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="p-4 flex items-center justify-between hover:border-primary/50 transition-all group-hover:shadow-md bmc-card-hover">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/10 p-2 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Facebook size={24} />
                </div>
                <span className="font-bold text-lg text-foreground">تابعنا على فيسبوك</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <ExternalLink size={16} />
              </div>
            </Card>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/berlintreatment?igsh=MWxodW1ubDZ1dGd2Zg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="p-4 flex items-center justify-between hover:border-pink-500/50 transition-all group-hover:shadow-md bmc-card-hover">
              <div className="flex items-center gap-4">
                <div className="bg-pink-500/10 p-2 rounded-full text-pink-600 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 group-hover:text-white transition-all">
                  <Instagram size={24} />
                </div>
                <span className="font-bold text-lg text-foreground">تابعنا على انستجرام</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-pink-500/10 group-hover:text-pink-500 transition-colors">
                <ExternalLink size={16} />
              </div>
            </Card>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@berlinmedicalcare41?_r=1&_t=ZG-93UvdO0CXRo" target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="p-4 flex items-center justify-between hover:border-black/50 transition-all group-hover:shadow-md bmc-card-hover">
              <div className="flex items-center gap-4">
                <div className="bg-black/5 p-2 rounded-full text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <Video size={24} />
                </div>
                <span className="font-bold text-lg text-foreground">تابعنا على تيك توك</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-black/10 group-hover:text-black transition-colors">
                <ExternalLink size={16} />
              </div>
            </Card>
          </a>

        </motion.div>

        {/* Footer Info */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <div className="flex justify-center gap-6 text-muted-foreground">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <span className="text-xs font-medium">Berlin, Germany</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <Globe size={20} />
              </div>
              <span className="text-xs font-medium">Worldwide</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <Phone size={20} />
              </div>
              <span className="text-xs font-medium">24/7 Support</span>
            </div>
          </div>

          <div className="pt-8 pb-4 border-t border-border/50 mt-6">
            <p className="text-primary font-bold text-sm">Berlin Medical Care</p>
            <p className="text-accent-foreground/70 text-xs mt-1">Excellence you can Trust</p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
