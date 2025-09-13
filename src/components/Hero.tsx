import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-darker-surface/90 via-darker-surface/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-surface/50 border border-neon-blue/30 mb-6 animate-slide-up">
            <span className="text-electric-red">🏴‍☠️</span>
            <span className="text-sm text-muted-foreground">Premium Tattoo Studio Since 2014</span>
            <span className="text-neon-blue">⚡</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground flex items-center gap-4">
              TATTOO 
              <span className="text-electric-red text-3xl md:text-4xl">🖋️</span>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-neon animate-neon-flicker">
              ARTISTRY
            </span>
            <br />
            <span className="text-foreground flex items-center gap-4">
              REDEFINED
              <span className="text-neon-blue text-3xl md:text-4xl">⚡</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-slide-up">
            <span className="text-neon-blue font-semibold">Professional tattoo artists</span> creating 
            <span className="text-electric-red font-semibold"> custom ink masterpieces</span>. 
            From traditional to modern styles - your skin is our canvas. 
            <span className="text-neon-purple">🎨⚡🖤</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
            <Button variant="hero" size="lg" className="group">
              🖋️ Book Tattoo Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-neon" size="lg">
              👁️ View Ink Gallery
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-sm text-muted-foreground animate-slide-up">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-blue flex items-center gap-1">
                500+ <span className="text-lg">🖋️</span>
              </div>
              <div>Tattoos Completed</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-red flex items-center gap-1">
                5★ <span className="text-lg">⚡</span>
              </div>
              <div>Studio Rating</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-purple flex items-center gap-1">
                10+ <span className="text-lg">🎨</span>
              </div>
              <div>Years Inking</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-neon opacity-20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-fire opacity-20 rounded-full blur-3xl animate-glow-pulse" />
    </section>
  );
};

export default Hero;