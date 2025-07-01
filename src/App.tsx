import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Nieuwbouw from "./pages/Nieuwbouw";
import Verbouwing from "./pages/Verbouwing";
import Renovatie from "./pages/Renovatie";
import Aanbouw from "./pages/Aanbouw";
import Dakwerken from "./pages/Dakwerken";
import Metselwerk from "./pages/Metselwerk";
import Timmerwerk from "./pages/Timmerwerk";
import Sloopwerk from "./pages/Sloopwerk";
import Badkamerrenovatie from "./pages/Badkamerrenovatie";
import Keukenrenovatie from "./pages/Keukenrenovatie";
import Vloerleggen from "./pages/Vloerleggen";
import Tegelwerk from "./pages/Tegelwerk";
import Stucwerk from "./pages/Stucwerk";
import Schilderwerk from "./pages/Schilderwerk";
import LaminaatLeggen from "./pages/LaminaatLeggen";
import ParketLeggen from "./pages/ParketLeggen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nieuwbouw-hasselt-limburg" element={<Nieuwbouw />} />
            <Route path="/verbouwing-hasselt-limburg" element={<Verbouwing />} />
            <Route path="/renovatie-hasselt-limburg" element={<Renovatie />} />
            <Route path="/aanbouw-hasselt-limburg" element={<Aanbouw />} />
            <Route path="/dakwerken-hasselt-limburg" element={<Dakwerken />} />
            <Route path="/metselwerk-hasselt-limburg" element={<Metselwerk />} />
            <Route path="/timmerwerk-hasselt-limburg" element={<Timmerwerk />} />
            <Route path="/sloopwerk-hasselt-limburg" element={<Sloopwerk />} />
            <Route path="/badkamerrenovatie-hasselt-limburg" element={<Badkamerrenovatie />} />
            <Route path="/keukenrenovatie-hasselt-limburg" element={<Keukenrenovatie />} />
            <Route path="/vloerleggen-hasselt-limburg" element={<Vloerleggen />} />
            <Route path="/tegelwerk-hasselt-limburg" element={<Tegelwerk />} />
            <Route path="/stucwerk-hasselt-limburg" element={<Stucwerk />} />
            <Route path="/schilderwerk-hasselt-limburg" element={<Schilderwerk />} />
            <Route path="/laminaat-leggen-hasselt-limburg" element={<LaminaatLeggen />} />
            <Route path="/parket-leggen-hasselt-limburg" element={<ParketLeggen />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
