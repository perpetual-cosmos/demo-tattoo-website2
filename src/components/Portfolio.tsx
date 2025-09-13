import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart } from 'lucide-react';
import tattoo1 from '@/assets/tattoo-1.jpg';
import tattoo2 from '@/assets/tattoo-2.jpg';
import tattoo3 from '@/assets/tattoo-3.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      image: tattoo1,
      title: 'Skull & Roses',
      category: 'blackwork',
      artist: 'Marcus Stone',
      likes: 127,
      views: 890,
    },
    {
      id: 2,
      image: tattoo2,
      title: 'Phoenix Rising',
      category: 'color',
      artist: 'Luna Bright',
      likes: 203,
      views: 1240,
    },
    {
      id: 3,
      image: tattoo3,
      title: 'Sacred Geometry',
      category: 'geometric',
      artist: 'Alex Neural',
      likes: 156,
      views: 967,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: portfolioItems.length },
    { id: 'blackwork', name: 'Black & Grey', count: 1 },
    { id: 'color', name: 'Color', count: 1 },
    { id: 'geometric', name: 'Geometric', count: 1 },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-surface/50 border border-neon-purple/30 mb-6">
            <span className="text-neon-purple">🎨</span>
            <span className="text-sm text-muted-foreground">Fresh Ink Gallery</span>
            <span className="text-electric-red">🖋️</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-neon">
              TATTOO GALLERY
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our artists' finest tattoo work - from traditional flash to custom masterpieces 
            <span className="text-neon-blue">⚡🖤⚡</span>
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-neon text-darker-surface border-transparent shadow-neon'
                  : 'bg-dark-surface text-foreground border-border hover:border-neon-blue'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-60">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden bg-dark-surface border-border hover:border-neon-blue transition-all duration-300 hover:shadow-glow-blue animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{item.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-neon-blue transition-colors">
                    {item.title}
                  </h3>
                  <Badge variant="secondary" className="bg-gradient-neon text-darker-surface">
                    {item.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  by <span className="text-neon-blue">{item.artist}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;