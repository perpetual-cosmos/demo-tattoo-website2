import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppClick = () => {
    const message = `Hi! I'd like to book a consultation for a tattoo. 
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Ink Street', 'Downtown Arts District', 'City, State 12345'],
      color: 'text-neon-blue',
    },
    {
      icon: Phone,
      title: 'Contact',
      details: ['(555) 123-TATT', 'info@inkmasters.com', '@inkmasters_studio'],
      color: 'text-electric-red',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 12PM - 10PM', 'Saturday: 11AM - 11PM', 'Sunday: 12PM - 8PM'],
      color: 'text-neon-purple',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-surface/50 border border-electric-red/30 mb-6">
            <span className="text-electric-red">📞</span>
            <span className="text-sm text-muted-foreground">Book Your Tattoo</span>
            <span className="text-neon-blue">🖋️</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-fire">
              BOOK TATTOO SESSION
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to get inked? Schedule your tattoo consultation and bring your vision to life 
            <span className="text-neon-blue">⚡🖋️⚡</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-dark-surface border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              🖋️ Tell us about your tattoo idea</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="bg-darker-surface border-border focus:border-neon-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="bg-darker-surface border-border focus:border-neon-blue"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="bg-darker-surface border-border focus:border-neon-blue"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Describe your tattoo vision *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your tattoo idea: style (traditional, realism, geometric), size, placement (arm, back, etc.), colors, specific elements like skulls, roses, animals, text, etc. The more details, the better we can help!"
                  className="bg-darker-surface border-border focus:border-neon-blue min-h-[120px]"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Tattoo Consult
                </Button>
                <Button variant="outline-neon" size="lg" className="flex-1">
                  📧 Email Tattoo Inquiry
                </Button>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="p-6 bg-dark-surface border-border hover:border-electric-red transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br from-dark-surface to-darker-surface ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="p-6 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border-neon-blue/20">
              <h4 className="text-xl font-semibold text-foreground mb-4">Follow Our Work</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-neon-blue">
                  <Instagram className="w-5 h-5" />
                  <span>@inkmasters_studio</span>
                </div>
                <div className="text-muted-foreground">•</div>
                <div className="text-muted-foreground">
                  See our latest work and client features
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;