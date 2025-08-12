
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type BeforeAfterItem = {
  title: string;
  before: { src: string; alt: string; label?: string };
  after: { src: string; alt: string; label?: string };
};

interface BeforeAfterCarouselProps {
  items: BeforeAfterItem[];
  title?: string;
  description?: string;
}

export function BeforeAfterCarousel({
  items,
  title = "Voor en Na",
  description = "Bekijk enkele recente transformaties die we hebben gerealiseerd.",
}: BeforeAfterCarouselProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item, idx) => (
              <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full">
                <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Before */}
                      <div className="relative rounded-xl overflow-hidden">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={item.before.src}
                            alt={item.before.alt}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                          {item.before.label ?? "Voor"}
                        </span>
                      </div>

                      {/* After */}
                      <div className="relative rounded-xl overflow-hidden">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={item.after.src}
                            alt={item.after.alt}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                          {item.after.label ?? "Na"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
}
