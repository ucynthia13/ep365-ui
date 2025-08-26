import { Rocket, Settings, TrendingUp, Shield } from 'lucide-react';
export const stages = [
    {
      id: 1,
      icon: <Rocket className="w-6 h-6" />,
      timeline: "2-6 weeks",
      title: "Seamless Go-Live",
      features: [
        "Launch procurement workflows quickly with minimal IT involvement",
        "Dedicated onboarding support ensures a smooth transition"
      ]
    },
    {
      id: 2,
      icon: <Settings className="w-6 h-6" />,
      timeline: "1-3 months",
      title: "Operational Excellence",
      features: [
        "Standardize procurement across teams and business units",
        "Easy-to-use workflows accelerate user adoption"
      ]
    },
    {
      id: 3,
      icon: <TrendingUp className="w-6 h-6" />,
      timeline: "4-9 months",
      title: "Smarter Spend & ROI",
      features: [
        "Gain actionable spend insights with AI-powered analytics",
        "Unlock savings through automated sourcing and consolidated purchasing"
      ]
    },
    {
      id: 4,
      icon: <Shield className="w-6 h-6" />,
      timeline: "12+ months",
      title: "Scale with Confidence",
      features: [
        "Strengthen compliance and risk management",
        "Reinvest savings to fuel long-term growth and competitive advantage"
      ]
    }
  ];

