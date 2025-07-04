
import React from 'react';
import { MapPin } from 'lucide-react';

interface ServiceAreaProps {
  title: string;
  description: string;
  serviceAreas: string[];
  serviceName: string;
  colorScheme: 'purple' | 'green' | 'yellow' | 'orange' | 'red';
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({
  title,
  description,
  serviceAreas,
  serviceName,
  colorScheme
}) => {
  const colorClasses = {
    purple: {
      mainBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      hoverBg: 'hover:bg-purple-50'
    },
    green: {
      mainBg: 'bg-green-50',
      iconColor: 'text-green-600',
      hoverBg: 'hover:bg-green-50'
    },
    yellow: {
      mainBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      hoverBg: 'hover:bg-yellow-50'
    },
    orange: {
      mainBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      hoverBg: 'hover:bg-orange-50'
    },
    red: {
      mainBg: 'bg-red-50',
      iconColor: 'text-red-600',
      hoverBg: 'hover:bg-red-50'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden</h3>
              <div className="space-y-4">
                {serviceAreas.slice(0, 3).map((area, index) => (
                  <div key={index} className={`flex items-center p-4 ${colors.mainBg} rounded-xl`}>
                    <MapPin className={`h-5 w-5 ${colors.iconColor} mr-3 flex-shrink-0`} />
                    <div>
                      <span className="font-semibold text-gray-900">{serviceName} {area}</span>
                      <p className="text-sm text-gray-600">Complete service beschikbaar</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Alle Gemeenten</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceAreas.slice(3).map((area, index) => (
                <div key={index} className={`text-center p-3 bg-gray-50 rounded-lg ${colors.hoverBg} transition-colors duration-200`}>
                  <span className="text-sm font-medium text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
