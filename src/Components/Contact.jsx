import { Instagram, Linkedin, Mail, Send, Twitter, PhoneCall } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary-background">
          Get In <span className="text-glow text-primary">Touch</span>
        </h2>
        <p className="text-center text-primary-background mb-12 max-w-2xl mx-auto">
          Have a project or want to collaborate? I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>

            {/* EMAIL */}
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:raymondatuwaogu@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    raymondatuwaogu@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* PHONE */}
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <a
                    href="tel:+2348106679983"
                    className="hover:text-primary transition-colors"
                  >
                    +234-810-667-9983
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="pt-8 text-foreground">
              <h4 className="font-semibold mb-4 text-center">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Linkedin />
                </a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Twitter />
                </a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="#" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-m font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  required
                  placeholder="Raymond ....."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-m font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  required
                  placeholder="test@example.com ....."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-m font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  required
                  placeholder="Your message ....."
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={16} /> Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
//px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95 inline-block