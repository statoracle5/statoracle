import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HeadphonesIcon, Users } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@statoracle.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-8 h-8 text-accent" />,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-secondary" />,
      title: "Live Chat",
      description: "Chat with support",
      contact: "Available 9 AM - 6 PM EST",
      action: "Start Chat"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-primary" />,
      title: "Support Center",
      description: "Browse help articles",
      contact: "24/7 Self-Service",
      action: "Visit Center"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Way, Suite 100",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "Austin",
      address: "456 Tech Boulevard, Floor 5",
      zipcode: "Austin, TX 78701",
      phone: "+1 (555) 987-6543"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimationWrapper>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper delay={200}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Ready to transform your team's performance? We're here to help you 
                get started with StatOracle and answer any questions you might have.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Multiple Ways to Connect</h2>
              <p className="text-xl text-muted-foreground">
                Choose the method that works best for you
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 150} animation="fade-up">
                <div className={`card-elegant text-center group hover-lift stagger-${index + 1}`}>
                  <div className="mb-6 flex justify-center animate-rotate-in">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 animate-slide-up">{method.title}</h3>
                  <p className="text-muted-foreground mb-4 animate-blur-in">{method.description}</p>
                  <div className="text-sm font-medium mb-4 text-shimmer">{method.contact}</div>
                  <button className="btn-secondary w-full group-hover:scale-105 transition-transform duration-300">
                    {method.action}
                  </button>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollAnimationWrapper animation="fade-left">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Have a specific question or want to schedule a demo? 
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold">Response Time</div>
                      <div className="text-muted-foreground">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Users className="w-6 h-6 text-accent" />
                    <div>
                      <div className="font-semibold">Expert Support</div>
                      <div className="text-muted-foreground">Sports tech specialists</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                    <div>
                      <div className="font-semibold">Global Reach</div>
                      <div className="text-muted-foreground">Supporting teams worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-right">
              <div className="card-elegant p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Organization</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                      placeholder="Team or Organization Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                      <option>General Inquiry</option>
                      <option>Demo Request</option>
                      <option>Pricing Question</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                      placeholder="Tell us about your team and how StatOracle can help..."
                    />
                  </div>
                  
                  <button type="submit" className="btn-hero w-full group">
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Offices</h2>
              <p className="text-xl text-muted-foreground">
                Visit us at one of our locations or connect with us virtually
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 300} animation="elastic-in" resetOnScroll={true}>
                <div className="card-elegant p-8 text-center hover-float animate-box-reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-6 animate-zoom-bounce" style={{ animationDelay: `${index * 0.25}s` }} />
                  <h3 className="text-2xl font-bold mb-4 text-shimmer animate-slide-up" style={{ animationDelay: `${index * 0.3}s` }}>{office.city}</h3>
                  <div className="space-y-2 text-muted-foreground animate-cascade" style={{ animationDelay: `${index * 0.35}s` }}>
                    <p className="animate-fade-in-up" style={{ animationDelay: `${index * 0.4}s` }}>{office.address}</p>
                    <p className="animate-fade-in-up" style={{ animationDelay: `${index * 0.45}s` }}>{office.zipcode}</p>
                    <p className="font-semibold text-foreground animate-wave-up" style={{ animationDelay: `${index * 0.5}s` }}>{office.phone}</p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;