import { CheckCircle, Zap, Target, TrendingUp, Eye, Brain, Shield, Clock } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const Overview = () => {
  const capabilities = [
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Real-Time Analysis",
      description: "Instant feedback during training sessions and games"
    },
    {
      icon: <Brain className="w-8 h-8 text-accent" />,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms that understand sports mechanics"
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Precision Tracking",
      description: "Track movement patterns, speed, and technique with accuracy"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Progress Monitoring",
      description: "Long-term performance tracking and improvement analytics"
    }
  ];

  const benefits = [
    "Improve individual player performance by 25% on average",
    "Reduce injury risk through biomechanical analysis",
    "Enhance team coordination and tactical understanding",
    "Provide objective data for recruitment decisions",
    "Enable remote coaching and analysis",
    "Create personalized training programs"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimationWrapper>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                How <span className="gradient-text">StatOracle</span> Works
              </h1>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper delay={200}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Discover the technology that's revolutionizing youth sports analytics 
                through advanced computer vision and AI-powered insights.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Advanced Computer Vision Technology</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our proprietary algorithms analyze video footage to extract meaningful 
                performance data that coaches and athletes can act upon.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper animation="fade-left">
              <div className="space-y-8">
                {capabilities.map((capability, index) => (
                  <div key={index} className={`flex items-start space-x-4 p-6 rounded-2xl hover-glow transition-colors duration-300 animate-slide-in-diagonal stagger-${index + 1}`}>
                    <div className="flex-shrink-0 p-3 bg-card rounded-xl shadow-md animate-rotate-in">
                      {capability.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 animate-slide-up">{capability.title}</h3>
                      <p className="text-muted-foreground animate-blur-in">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-right">
              <div className="card-elegant p-8">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Powered by AI</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our neural networks are trained on millions of athletic movements, 
                    enabling precise analysis of technique, speed, positioning, and more. 
                    The system learns and improves with every session.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background mb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper animation="fade-left">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Measurable <span className="gradient-text">Results</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  StatOracle delivers concrete improvements that coaches and athletes 
                  can see in their performance metrics and game outcomes.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <ScrollAnimationWrapper key={index} delay={index * 100}>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                        <span className="text-lg">{benefit}</span>
                      </div>
                    </ScrollAnimationWrapper>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="card-elegant text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Faster Analysis</div>
                </div>
                <div className="card-elegant text-center">
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-accent mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">Performance Boost</div>
                </div>
                <div className="card-elegant text-center">
                  <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-secondary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Injury Reduction</div>
                </div>
                <div className="card-elegant text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Simple 3-Step Process</h2>
              <p className="text-xl text-muted-foreground">
                Getting started with StatOracle is straightforward and intuitive
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Capture", description: "Record training sessions or games with any camera device" },
              { step: "02", title: "Analyze", description: "Upload footage to our platform for AI-powered analysis" },
              { step: "03", title: "Improve", description: "Receive detailed insights and actionable recommendations" }
            ].map((item, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 200} animation="fade-up">
                <div className="card-elegant text-center">
                  <div className="text-6xl font-bold gradient-text mb-4">{item.step}</div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;