
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  highlightedWord: string;
  description: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  stats: Array<{
    number: string;
    label: string;
    icon: LucideIcon;
  }>;
  imageUrl: string;
  imageAlt: string;
  overlayTitle: string;
  overlayDescription: string;
  colorScheme: 'purple' | 'green' | 'yellow' | 'orange' | 'red';
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
    purple: {
      gradient: 'from-purple-50 via-white to-purple-50',
      badge: 'bg-purple-100 text-purple-700 border-purple-200',
      highlight: 'text-purple-600',
      statIcon: 'text-purple-600',
      floatingBg: 'bg-purple-600',
      floatingIcon: 'text-purple-600'
    },
    green: {
      gradient: 'from-green-50 via-white to-green-50',
      badge: 'bg-green-100 text-green-700 border-green-200',
      highlight: 'text-green-600',
      statIcon: 'text-green-600',
      floatingBg: 'bg-green-600',
      floatingIcon: 'text-green-600'
    },
    yellow: {
      gradient: 'from-yellow-50 via-white to-yellow-50',
      badge: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      highlight: 'text-yellow-600',
      statIcon: 'text-yellow-600',
      floatingBg: 'bg-yellow-600',
      floatingIcon: 'text-yellow-600'
    },
    orange: {
      gradient: 'from-orange-50 via-white to-orange-50',
      badge: 'bg-orange-100 text-orange-700 border-orange-200',
      highlight: 'text-orange-600',
      statIcon: 'text-orange-600',
      floatingBg: 'bg-orange-600',
      floatingIcon: 'text-orange-600'
    },
    red: {
      gradient: 'from-red-50 via-white to-red-50',
      badge: 'bg-red-100 text-red-700 border-red-200',
      highlight: 'text-red-600',
      statIcon: 'text-red-600',
      floatingBg: 'bg-red-600',
      floatingIcon: 'text-red-600'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`inline-flex items-center px-4 py-2 rounded-full ${colors.badge}`}>
              <BadgeIcon className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">{badgeText}</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                {title} <span className={colors.highlight}>{highlightedWord}</span> in Hasselt
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                {description}
              </p>
            </div>

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
            
            <div className={`absolute -top-6 -right-6 ${colors.floatingBg} text-white p-4 rounded-2xl shadow-lg`}>
              <BadgeIcon className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border">
              <stats[1].icon className={`h-8 w-8 ${colors.floatingIcon}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
