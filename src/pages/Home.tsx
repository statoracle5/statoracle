import { ArrowRight, Play, BarChart3, Camera, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const Home = () => {
  const features = [
    {
      icon: <Camera className="w-12 h-12 text-primary" />,
      title: "Computer Vision",
      description: "State-of-the-art AI algorithms analyze video footage in real-time, tracking player movements, techniques, and performance metrics with unprecedented accuracy"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-accent" />,
      title: "Performance Analytics",
      description: "Transform raw data into actionable insights with comprehensive dashboards, trend analysis, and personalized recommendations for each athlete's development"
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Team Management",
      description: "Streamline coaching workflows with powerful tools for roster management, training scheduling, progress tracking, and seamless communication across your entire organization"
    },
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: "Competition Ready",
      description: "Gain the competitive edge with game preparation tools, opponent analysis, tactical insights, and performance optimization strategies that win championships"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollAnimationWrapper>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-shimmer">
                Elevate Youth Sports with{" "}
                <span className="gradient-text animate-pulse-glow">AI Vision</span>
              </h1>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper delay={200}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                StatOracle uses cutting-edge computer vision to deliver powerful insights 
                that help young athletes and teams reach their full potential.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/overview" className="btn-hero group">
                  Discover StatOracle
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="btn-secondary group">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* Floating Elements with Enhanced Animations */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float hover-rainbow" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl float hover-rainbow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-xl float hover-rainbow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/15 rounded-full blur-xl float hover-rainbow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-accent/15 rounded-full blur-xl float hover-rainbow" style={{ animationDelay: '0.5s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 pb-32">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powered by <span className="gradient-text">Innovation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our advanced technology transforms how youth sports teams analyze performance, 
                providing actionable insights that drive improvement.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                delay={index * 200}
                animation="bounce-in"
                resetOnScroll={true}
              >
                <div className={`card-elegant text-center group hover-float animate-box-reveal`} style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="mb-6 flex justify-center animate-zoom-bounce group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 animate-slide-up" style={{ animationDelay: `${index * 0.25}s` }}>{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: `${index * 0.3}s` }}>
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Team?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the growing community of coaches and athletes using StatOracle 
                to unlock their competitive advantage.
              </p>
              <Link to="/pricing" className="btn-hero">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;