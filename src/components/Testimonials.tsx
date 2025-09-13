import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely incredible experience! Marcus created the most beautiful portrait tattoo of my grandmother. The detail and emotion captured is beyond words.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      tattoo: 'Portrait Tattoo',
      artist: 'Marcus Stone',
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      rating: 5,
      text: 'Luna\'s color work is phenomenal! My phoenix tattoo gets compliments everywhere I go. The healing process was smooth and the aftercare guidance was perfect.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      tattoo: 'Phoenix Sleeve',
      artist: 'Luna Bright',
    },
    {
      id: 3,
      name: 'Emma Chen',
      rating: 5,
      text: 'Alex\'s geometric mandala design exceeded all my expectations. The precision and symmetry are perfect. This studio sets the standard for professional tattooing.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=80&h=80&fit=crop&crop=face',
      tattoo: 'Mandala Design',
      artist: 'Alex Neural',
    },
    {
      id: 4,
      name: 'David Thompson',
      rating: 5,
      text: 'Clean, professional environment with world-class artists. The consultation process was thorough and they really listened to my vision.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      tattoo: 'Custom Design',
      artist: 'Marcus Stone',
    },
    {
      id: 5,
      name: 'Lisa Park',
      rating: 5,
      text: 'The attention to detail and artistic vision at InkMasters is unmatched. My tattoo tells a story and the execution is flawless.',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=face',
      tattoo: 'Floral Piece',
      artist: 'Luna Bright',
    },
    {
      id: 6,
      name: 'James Wilson',
      rating: 5,
      text: 'From booking to completion, the entire experience was professional and comfortable. The studio maintains the highest hygiene standards.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
      tattoo: 'Geometric Sleeve',
      artist: 'Alex Neural',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-surface/50 border border-neon-purple/30 mb-6">
            <span className="text-sm text-muted-foreground">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-neon">
              TESTIMONIALS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group p-6 bg-dark-surface border-border hover:border-neon-purple transition-all duration-300 hover:shadow-glow-purple animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-neon-purple" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-electric-red fill-current" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-neon-purple transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.tattoo} • {testimonial.artist}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a consultation and let's bring your tattoo vision to life
            </p>
            <div className="flex items-center justify-center gap-1 text-electric-red">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-foreground font-semibold">4.9/5 Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;