
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ServicesListProps {
  title: string;
  description: string;
  services: string[];
  colorScheme: 'purple' | 'green' | 'yellow' | 'orange' | 'red';
}

export const ServicesList: React.FC<ServicesListProps> = ({
  title,
  description,
  services,
  colorScheme
}) => {
  const colorClasses = {
    purple: {
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      iconHover: 'group-hover:bg-purple-600'
    },
    green: {
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      iconHover: 'group-hover:bg-green-600'
    },
    yellow: {
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      iconHover: 'group-hover:bg-yellow-600'
    },
    orange: {
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      iconHover: 'group-hover:bg-orange-600'
    },
    red: {
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      iconHover: 'group-hover:bg-red-600'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center ${colors.iconHover} transition-colors duration-300`}>
                      <CheckCircle className={`h-6 w-6 ${colors.iconColor} group-hover:text-white transition-colors duration-300`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
