import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Instagram, Star } from 'lucide-react';

const Artists = () => {
  const artists = [
    {
      id: 1,
      name: 'Marcus Stone',
      specialty: 'Black & Grey Realism',
      experience: '8 Years',
      rating: 4.9,
      bio: 'Master of photorealistic tattoo portraits and dark art. Specializes in skulls, roses, and intricate detailed ink work that tells your story.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      instagram: '@marcus_ink',
      tags: ['Realism', 'Portraits', 'Black & Grey'],
    },
    {
      id: 2,
      name: 'Luna Bright',
      specialty: 'Neo-Traditional Color Tattoos',
      experience: '6 Years',
      rating: 4.8,
      bio: 'Vibrant tattoo color specialist bringing traditional ink designs to life with modern techniques and bold, eye-catching color palettes.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=400&h=400&fit=crop&crop=face',
      instagram: '@luna_colorink',
      tags: ['Neo-Traditional', 'Color', 'Floral'],
    },
    {
      id: 3,
      name: 'Alex Neural',
      specialty: 'Geometric & Sacred Tattoo Art',
      experience: '5 Years',
      rating: 4.9,
      bio: 'Precision meets spirituality in geometric tattoo designs. Expert in mandala tattoos, sacred geometry ink, and minimalist line work.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      instagram: '@alex_geometry',
      tags: ['Geometric', 'Minimalist', 'Line Work'],
    },
  ];

  return (
    <section id="artists" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-surface/50 border border-electric-red/30 mb-6">
            <span className="text-electric-red">🖋️</span>
            <span className="text-sm text-muted-foreground">Meet Your Tattoo Artists</span>
            <span className="text-neon-blue">⚡</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-fire">
              TATTOO MASTERS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class tattoo artists with unique ink styles and years of skin art experience 
            <span className="text-electric-red">🎨🖤🖋️</span>
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <Card 
              key={artist.id}
              className="group overflow-hidden bg-dark-surface border-border hover:border-electric-red transition-all duration-300 hover:shadow-glow-red animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Artist Image */}
              <div className="relative overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker-surface/60 to-transparent" />
                
                {/* Instagram Link */}
                <div className="absolute top-4 right-4">
                  <div className="bg-dark-surface/80 p-2 rounded-full hover:bg-electric-red transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-dark-surface/80 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-electric-red fill-current" />
                  <span className="text-sm font-semibold text-foreground">{artist.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-electric-red transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-neon-blue font-semibold">{artist.specialty}</p>
                  <p className="text-sm text-muted-foreground">{artist.experience} Experience</p>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {artist.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {artist.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="border-electric-red/30 text-electric-red hover:bg-electric-red hover:text-darker-surface transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Instagram Handle */}
                <div className="flex items-center text-sm text-muted-foreground">
                  <Instagram className="w-4 h-4 mr-2" />
                  {artist.instagram}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;