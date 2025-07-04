
import React from 'react';
import { LucideIcon, Phone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface StatItem {
  number: string;
  label: string;
  icon: LucideIcon;
}

interface ServiceHeroProps {
  title: string;
  highlightedWord: string;
  description: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  stats: StatItem[];
  imageUrl: string;
  imageAlt: string;
  overlayTitle: string;
  overlayDescription: string;
  colorScheme: 'blue' | 'purple' | 'green' | 'yellow' | 'orange' | 'red';
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  highlightedWord,
  description,
  badgeText,
  badgeIcon: BadgeIcon,
  stats,
  imageUrl,
  imageAlt,
  overlayTitle,
  overlayDescription,
  colorScheme
}) => {
  const colorClasses = {
    blue: {
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-600',
      highlightText: 'text-blue-600',
      buttonBg: 'bg-blue-600 hover:bg-blue-700',
      statIcon: 'text-blue-600'
    },
    purple: {
      badgeBg: 'bg-purple-100',
      badgeText: 'text-purple-600',
      highlightText: 'text-purple-600',
      buttonBg: 'bg-purple-600 hover:bg-purple-700',
      statIcon: 'text-purple-600'
    },
    green: {
      badgeBg: 'bg-green-100',
      badgeText: 'text-green-600',
      highlightText: 'text-green-600',
      buttonBg: 'bg-green-600 hover:bg-green-700',
      statIcon: 'text-green-600'
    },
    yellow: {
      badgeBg: 'bg-yellow-100',
      badgeText: 'text-yellow-600',
      highlightText: 'text-yellow-600',
      buttonBg: 'bg-yellow-600 hover:bg-yellow-700',
      statIcon: 'text-yellow-600'
    },
    orange: {
      badgeBg: 'bg-orange-100',
      badgeText: 'text-orange-600',
      highlightText: 'text-orange-600',
      buttonBg: 'bg-orange-600 hover:bg-orange-700',
      statIcon: 'text-orange-600'
    },
    red: {
      badgeBg: 'bg-red-100',
      badgeText: 'text-red-600',
      highlightText: 'text-red-600',
      buttonBg: 'bg-red-600 hover:bg-red-700',
      statIcon: 'text-red-600'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`inline-flex items-center px-4 py-2 rounded-full ${colors.badgeBg} ${colors.badgeText} border border-gray-200`}>
              <BadgeIcon className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">{badgeText}</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                {title} <span className={colors.highlightText}>{highlightedWord}</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                {description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className={`${colors.buttonBg} text-white px-8 py-3 text-lg`}>
                <Phone className="mr-2 h-5 w-5" />
                Gratis offerte
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 px-8 py-3 text-lg">
                Onze referenties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className={`h-5 w-5 ${colors.statIcon} mr-2`} />
                    <span className="text-2xl font-bold text-gray-900">{stat.number}</span>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src={imageUrl} 
                alt={imageAlt} 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-2xl font-bold mb-2">{overlayTitle}</h3>
                  <p className="text-white/90">{overlayDescription}</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className={`absolute -top-6 -right-6 ${colors.buttonBg.split(' ')[0]} text-white p-4 rounded-2xl shadow-lg`}>
              <BadgeIcon className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
