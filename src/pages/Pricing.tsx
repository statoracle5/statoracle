import { Check, Star, Zap, Crown } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for individual coaches and small teams",
      icon: <Zap className="w-8 h-8 text-primary" />,
      features: [
        "Up to 5 athletes",
        "Basic performance analytics",
        "Video analysis (10 hours/month)",
        "Mobile app access",
        "Email support",
        "Training insights"
      ],
      popular: false,
      gradient: "from-primary/20 to-primary/10"
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing teams and academies",
      icon: <Star className="w-8 h-8 text-accent" />,
      features: [
        "Up to 25 athletes",
        "Advanced performance analytics",
        "Video analysis (50 hours/month)",
        "Team management tools",
        "Real-time notifications",
        "Custom reports",
        "Priority support",
        "API access"
      ],
      popular: true,
      gradient: "from-accent/20 to-accent/10"
    },
    {
      name: "Elite",
      price: "$249",
      period: "per month",
      description: "Advanced features for competitive teams",
      icon: <Crown className="w-8 h-8 text-secondary" />,
      features: [
        "Up to 50 athletes",
        "Premium analytics suite",
        "Video analysis (100 hours/month)",
        "Advanced team management",
        "Predictive insights",
        "Custom dashboards",
        "White-label options",
        "Dedicated support line"
      ],
      popular: false,
      gradient: "from-secondary/20 to-secondary/10"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "Complete solution for large organizations",
      icon: <Crown className="w-8 h-8 text-secondary" />,
      features: [
        "Unlimited athletes",
        "Full analytics suite",
        "Unlimited video analysis",
        "Multi-team management",
        "Advanced AI insights",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 premium support",
        "Custom training programs"
      ],
      popular: false,
      gradient: "from-secondary/20 to-secondary/10"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for all plans. No credit card required to get started - just sign up and begin analyzing your team's performance."
    },
    {
      question: "What video formats do you support?",
      answer: "StatOracle supports all major video formats including MP4, MOV, AVI, and more. Our platform automatically optimizes videos for analysis."
    },
    {
      question: "Do you offer team discounts?",
      answer: "Yes! We provide special pricing for educational institutions, non-profits, and large multi-team organizations. Contact us for custom pricing."
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
                Choose Your <span className="gradient-text">Plan</span>
              </h1>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper delay={200}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Flexible pricing options designed to grow with your team. 
                Start with what you need and scale as you expand.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.slice(0, 3).map((plan, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 300} animation="slide-up" resetOnScroll={true}>
                <div 
                  className={`relative card-elegant p-6 hover-lift transform transition-all duration-500 ${
                    plan.popular ? 'ring-2 ring-accent shadow-[var(--shadow-glow)] lg:scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl opacity-50`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div>
                          {plan.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">/{plan.period}</span>
                      </div>
                      <p className="text-muted-foreground mt-2">{plan.description}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? 'btn-hero' 
                          : 'btn-secondary'
                      }`}
                    >
                      {plan.popular ? 'Start Free Trial' : 'Get Started'}
                    </button>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background pb-32">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">All Plans Include</h2>
              <p className="text-xl text-muted-foreground">
                Every StatOracle subscription comes with these essential features
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              "Computer vision analysis",
              "Performance tracking",
              "Mobile & web access",
              "Data export capabilities",
              "Regular platform updates",
              "Training resources"
            ].map((feature, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 100} animation="fade-up">
                <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/30 transition-colors duration-300">
                  <Check className="w-6 h-6 text-accent" />
                  <span className="text-lg">{feature}</span>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about StatOracle pricing and features
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 100} animation="fade-up">
                <div className="card-elegant p-6">
                  <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
                Ready to Elevate Your Team?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of coaches and athletes who trust StatOracle 
                to improve their performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero">
                  Start Free Trial
                </button>
                <button className="btn-secondary">
                  Contact Sales
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Pricing;