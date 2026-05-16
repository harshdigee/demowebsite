import { motion } from"framer-motion";
import { Linkedin, Mail } from"lucide-react";

const team = [
  {
    name:"Masih Imtiaz",
    role:"Chief Executive Officer",
    image:"/about7.png", // Using a placeholder from the provided images
    bio:"Visionary leader driving strategic growth and innovation in the bespoke joinery sector across the UAE.",
    socials: {
      linkedin:"#",
      email:"#"
    }
  },
  {
    name:"Ahmed Raza",
    role:"Operations Director",
    image:"/about2.png",
    bio:"Overseeing the entire manufacturing lifecycle, ensuring precision engineering and strict adherence to quality standards.",
    socials: {
      linkedin:"#",
      email:"#"
    }
  },
  {
    name:"Elena Petrova",
    role:"Head of Design",
    image:"/about3.png",
    bio:"Translating complex architectural concepts into manufacturable, high-end joinery solutions with an eye for detail.",
    socials: {
      linkedin:"#",
      email:"#"
    }
  }
];

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const LeadershipTeam = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 relative  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"
            style={{ color:"#999999" }}
          >
            The Visionaries
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
            className="font-display text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Our Leadership <span className="italic" style={{ color:"#999999" }}>Team</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.2 }}
             transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
             className="font-body text-sm text-white/50 max-w-2xl mt-8 text-center leading-relaxed"
          >
            Guided by decades of collective experience, our leadership team is dedicated to pushing the boundaries of craftsmanship, engineering, and service excellence in the commercial fit-out industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: easeOutExpo }}
              className="group relative"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl mb-8">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#060A11] via-[#060A11]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 flex justify-center gap-4">
                  <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#999999] transition-colors border border-white/20">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.socials.email} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#999999] transition-colors border border-white/20">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-display text-2xl text-white mb-2">{member.name}</h3>
                <p className="font-body text-xs tracking-widest text-[#999999] uppercase mb-4">{member.role}</p>
                <p className="font-body text-sm text-white/50 leading-relaxed px-4">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;