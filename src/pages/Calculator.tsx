
import React, { useState } from 'react';
import { Building2, Calculator as CalculatorIcon, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const [selectedRenovations, setSelectedRenovations] = useState<string[]>([]);
  const [qualityLevel, setQualityLevel] = useState('standard');
  const [results, setResults] = useState<any>(null);
  const [formData, setFormData] = useState({
    province: '',
    locationType: '',
    houseArea: '',
    kitchenArea: '',
    bathroomArea: '',
    flooringArea: '',
    windowsArea: '',
    incomeCategory: '',
    buildingAge: ''
  });

  const renovationTypes = [
    { id: 'kitchen', label: 'Keukenrenovatie', basePrice: 800 },
    { id: 'bathroom', label: 'Badkamerrenovatie', basePrice: 1200 },
    { id: 'flooring', label: 'Vloeren', basePrice: 60 },
    { id: 'painting', label: 'Schilderwerken', basePrice: 25 },
    { id: 'electrical', label: 'Elektriciteitswerken', basePrice: 80 },
    { id: 'plumbing', label: 'Loodgieterij', basePrice: 100 },
    { id: 'hvac', label: 'HVAC/Verwarming', basePrice: 150 },
    { id: 'insulation', label: 'Isolatie', basePrice: 40 },
    { id: 'windows', label: 'Ramen & Deuren', basePrice: 400 },
    { id: 'roofing', label: 'Dakwerken', basePrice: 120 }
  ];

  const qualityMultipliers = {
    basic: 0.7,
    standard: 1.0,
    premium: 1.5,
    luxury: 2.2
  };

  const provinceMultipliers = {
    'flemish-brabant': 1.25,
    'antwerp': 1.0,
    'east-flanders': 1.0,
    'west-flanders': 0.8,
    'limburg': 0.9
  };

  const locationMultipliers = {
    'urban': 1.2,
    'suburban': 1.0,
    'rural': 0.75
  };

  const handleRenovationChange = (renovationId: string, checked: boolean) => {
    if (checked) {
      setSelectedRenovations([...selectedRenovations, renovationId]);
    } else {
      setSelectedRenovations(selectedRenovations.filter(id => id !== renovationId));
    }
  };

  const calculateCosts = () => {
    let totalCost = 0;
    const breakdown: any[] = [];

    selectedRenovations.forEach(renovationId => {
      const renovation = renovationTypes.find(r => r.id === renovationId);
      if (!renovation) return;

      let area = parseFloat(formData.houseArea) || 100;
      
      // Use specific areas if provided
      if (renovationId === 'kitchen' && formData.kitchenArea) {
        area = parseFloat(formData.kitchenArea);
      } else if (renovationId === 'bathroom' && formData.bathroomArea) {
        area = parseFloat(formData.bathroomArea);
      } else if (renovationId === 'flooring' && formData.flooringArea) {
        area = parseFloat(formData.flooringArea);
      } else if (renovationId === 'windows' && formData.windowsArea) {
        area = parseFloat(formData.windowsArea);
      }

      let cost = renovation.basePrice * area;
      
      // Apply quality multiplier
      cost *= qualityMultipliers[qualityLevel as keyof typeof qualityMultipliers];
      
      // Apply location multipliers
      if (formData.province) {
        cost *= provinceMultipliers[formData.province as keyof typeof provinceMultipliers] || 1;
      }
      if (formData.locationType) {
        cost *= locationMultipliers[formData.locationType as keyof typeof locationMultipliers] || 1;
      }

      totalCost += cost;
      breakdown.push({
        name: renovation.label,
        cost: cost
      });
    });

    // Add VAT
    const vatRate = formData.buildingAge === 'old' ? 0.06 : 0.21;
    const vatAmount = totalCost * vatRate;
    const totalWithVat = totalCost + vatAmount;

    setResults({
      baseCost: totalCost,
      vatAmount: vatAmount,
      totalCost: totalWithVat,
      breakdown: breakdown
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Terug naar home
            </Link>
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">MMT Projects</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Calculator Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <CalculatorIcon className="h-12 w-12 mr-4" />
              <h1 className="text-3xl font-bold">Renovatiekosten Calculator</h1>
            </div>
            <p className="text-blue-100 text-lg">Bereken nauwkeurige prijsschattingen voor uw woningrenovatie in Vlaanderen</p>
          </div>

          <div className="p-8">
            {/* Basic Information */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
                Basis Informatie
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="province">Provincie</Label>
                  <Select value={formData.province} onValueChange={(value) => setFormData({...formData, province: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer provincie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flemish-brabant">Vlaams-Brabant (+20-25%)</SelectItem>
                      <SelectItem value="antwerp">Antwerpen</SelectItem>
                      <SelectItem value="east-flanders">Oost-Vlaanderen</SelectItem>
                      <SelectItem value="west-flanders">West-Vlaanderen (-15-20%)</SelectItem>
                      <SelectItem value="limburg">Limburg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location-type">Locatietype</Label>
                  <Select value={formData.locationType} onValueChange={(value) => setFormData({...formData, locationType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer locatie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urban">Stadscentrum (+15-25%)</SelectItem>
                      <SelectItem value="suburban">Randgemeente</SelectItem>
                      <SelectItem value="rural">Landelijk (-20-30%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="house-area">Totale Woonoppervlakte (m²)</Label>
                  <Input 
                    type="number" 
                    placeholder="bv. 150" 
                    value={formData.houseArea}
                    onChange={(e) => setFormData({...formData, houseArea: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Renovation Types */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
                Renovatietypes
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {renovationTypes.map((renovation) => (
                  <div key={renovation.id} className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                    <Checkbox
                      id={renovation.id}
                      checked={selectedRenovations.includes(renovation.id)}
                      onCheckedChange={(checked) => handleRenovationChange(renovation.id, checked as boolean)}
                    />
                    <Label htmlFor={renovation.id} className="cursor-pointer">{renovation.label}</Label>
                  </div>
                ))}
              </div>

              {/* Area inputs for selected renovations */}
              {selectedRenovations.length > 0 && (
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h3 className="font-medium mb-4">Specifieke Oppervlaktes</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedRenovations.includes('kitchen') && (
                      <div>
                        <Label htmlFor="kitchen-area">Keuken oppervlakte (m²)</Label>
                        <Input 
                          type="number" 
                          placeholder="bv. 15"
                          value={formData.kitchenArea}
                          onChange={(e) => setFormData({...formData, kitchenArea: e.target.value})}
                        />
                      </div>
                    )}
                    {selectedRenovations.includes('bathroom') && (
                      <div>
                        <Label htmlFor="bathroom-area">Badkamer oppervlakte (m²)</Label>
                        <Input 
                          type="number" 
                          placeholder="bv. 9"
                          value={formData.bathroomArea}
                          onChange={(e) => setFormData({...formData, bathroomArea: e.target.value})}
                        />
                      </div>
                    )}
                    {selectedRenovations.includes('flooring') && (
                      <div>
                        <Label htmlFor="flooring-area">Vloeroppervlakte (m²)</Label>
                        <Input 
                          type="number" 
                          placeholder="bv. 120"
                          value={formData.flooringArea}
                          onChange={(e) => setFormData({...formData, flooringArea: e.target.value})}
                        />
                      </div>
                    )}
                    {selectedRenovations.includes('windows') && (
                      <div>
                        <Label htmlFor="windows-area">Raam/deur oppervlakte (m²)</Label>
                        <Input 
                          type="number" 
                          placeholder="bv. 25"
                          value={formData.windowsArea}
                          onChange={(e) => setFormData({...formData, windowsArea: e.target.value})}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Quality Level */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
                Kwaliteitsniveau
              </h2>
              
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { id: 'basic', title: 'Basis', desc: 'Functioneel, standaard materialen' },
                  { id: 'standard', title: 'Standaard', desc: 'Goede kwaliteit, evenwichtige prijs' },
                  { id: 'premium', title: 'Premium', desc: 'Hoogwaardige materialen, superieure afwerking' },
                  { id: 'luxury', title: 'Luxe', desc: 'Topklasse, maatwerk ontwerpen' }
                ].map((quality) => (
                  <div
                    key={quality.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all text-center ${
                      qualityLevel === quality.id 
                        ? 'border-blue-600 bg-blue-50 transform -translate-y-1' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                    onClick={() => setQualityLevel(quality.id)}
                  >
                    <h4 className="font-semibold mb-2">{quality.title}</h4>
                    <p className="text-sm text-gray-600">{quality.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Options */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
                Extra Overwegingen
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="income-category">Inkomenscategorie Huishouden</Label>
                  <Select value={formData.incomeCategory} onValueChange={(value) => setFormData({...formData, incomeCategory: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer inkomen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Laag inkomen (tot €57.190)</SelectItem>
                      <SelectItem value="middle">Middeninkomen (€57.190-74.280)</SelectItem>
                      <SelectItem value="high">Hoog inkomen (boven €74.280)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="building-age">Ouderdom van het gebouw</Label>
                  <Select value={formData.buildingAge} onValueChange={(value) => setFormData({...formData, buildingAge: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer ouderdom" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="old">Ouder dan 10 jaar (6% BTW)</SelectItem>
                      <SelectItem value="new">Jonger dan 10 jaar (21% BTW)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <Button 
              onClick={calculateCosts} 
              disabled={selectedRenovations.length === 0}
              className="w-full py-6 text-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
            >
              <CalculatorIcon className="mr-2 h-5 w-5" />
              Bereken Renovatiekosten
            </Button>

            {/* Results */}
            {results && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Uw Renovatie Schatting</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                    <h3 className="text-sm opacity-90 mb-2">Basiskosten</h3>
                    <div className="text-2xl font-bold">€{Math.round(results.baseCost).toLocaleString()}</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                    <h3 className="text-sm opacity-90 mb-2">BTW</h3>
                    <div className="text-2xl font-bold">€{Math.round(results.vatAmount).toLocaleString()}</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                    <h3 className="text-sm opacity-90 mb-2">Totaal Incl. BTW</h3>
                    <div className="text-2xl font-bold">€{Math.round(results.totalCost).toLocaleString()}</div>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <h3 className="font-semibold mb-4">Kostenoverzicht</h3>
                  {results.breakdown.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between py-2 border-b border-white/20 last:border-b-0">
                      <span>{item.name}</span>
                      <span>€{Math.round(item.cost).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
