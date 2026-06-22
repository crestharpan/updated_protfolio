import { Mail, Send, CheckCircle, AlertCircle, MapPin } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "arpanshrestha225@gmail.com",
    href: "mailto:arpanshrestha225@gmail.com",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    value: "Arpan Shrestha",
    href: "https://www.facebook.com/Arpanshrestha99/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kathmandu, Nepal",
    href: "https://www.google.com/maps?q=27.7172,85.3240",
  },
];

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Something is wrong with the EmailJs");
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you shortly",
      });
    } catch (err) {
      setSubmitStatus({
        type: err,
        message: "Failed to send message, please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="conatiner mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-normal">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fde-in">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-primary outline-none"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-primary outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  type="text"
                  required
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-primary outline-none resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending</>
                ) : (
                  <>
                    Send Message
                    <Send />
                  </>
                )}
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in animation-delay-400  rounded-3xl">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    href={contact.href}
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl border border-primary/30  "
                  >
                    <div>
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <div>{contact.label}</div>
                      <div>{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* Availability section */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
