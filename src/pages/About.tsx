import { Users, Award, Heart, Lightbulb, Globe, Rocket } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Youth Focused",
      description: "Every feature is designed with young athletes' development in mind"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Innovation First",
      description: "Pushing the boundaries of what's possible with sports technology"
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Accessible",
      description: "Making advanced analytics available to teams of all sizes and budgets"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality insights and service"
    }
  ];

  const stats = [
    { number: "10K+", label: "Athletes Analyzed" },
    { number: "500+", label: "Teams Served" },
    { number: "50+", label: "Sports Covered" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimationWrapper>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">StatOracle</span>
              </h1>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper delay={200}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                We're on a mission to democratize advanced sports analytics, 
                making cutting-edge performance insights accessible to every young athlete.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper animation="fade-left">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  StatOracle was founded with a simple belief: every young athlete deserves access 
                  to the same level of performance analysis that professional teams use. We're 
                  breaking down barriers and making advanced computer vision technology affordable 
                  and easy to use for youth sports.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through our innovative platform, we empower coaches to make data-driven decisions, 
                  help athletes understand their strengths and areas for improvement, and ultimately 
                  contribute to the development of the next generation of sports talent.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-right">
              <div className="card-elegant p-8">
                <Rocket className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Innovation Driven</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team combines expertise in computer vision, machine learning, and sports science 
                  to create solutions that truly understand athletic performance and provide actionable insights.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Meet Our Founder</h2>
              <p className="text-xl text-muted-foreground">
                The visionary behind StatOracle's revolutionary approach to youth sports analytics
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimationWrapper>
              <div className="card-elegant p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="w-32 h-32 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Palash Palwar</h3>
                    <p className="text-primary font-semibold">Founder & CEO</p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Palash Palwar founded StatOracle with a vision to transform how young athletes 
                      train and compete. With a background in computer science and a passion for sports, 
                      Palash recognized the gap between professional-level analytics and what was 
                      available to youth teams.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      "Every young athlete has the potential to be great. Our job is to give them 
                      the tools and insights they need to unlock that potential." - Palash Palwar
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do at StatOracle
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 200} animation="flip-in" resetOnScroll={true}>
                <div className={`card-elegant text-center hover-magnetic animate-cascade`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="mb-6 flex justify-center animate-elastic-in" style={{ animationDelay: `${index * 0.25}s` }}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-shimmer animate-slide-rotate" style={{ animationDelay: `${index * 0.3}s` }}>{value.title}</h3>
                  <p className="text-muted-foreground animate-wave-up" style={{ animationDelay: `${index * 0.35}s` }}>{value.description}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
              <p className="text-xl text-muted-foreground">
                The numbers that show our commitment to youth sports development
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 150} animation="zoom-bounce" resetOnScroll={true}>
                <div className="text-center animate-box-reveal hover-float" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-4 text-shimmer animate-elastic-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    {stat.number}
                  </div>
                  <div className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    {stat.label}
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

export default About;