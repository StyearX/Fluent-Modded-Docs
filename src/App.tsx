import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RootLayout } from "@/components/layout/RootLayout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import GettingStarted from "@/pages/GettingStarted";
import Elements from "@/pages/Elements";
import Themes from "@/pages/Themes";
import Icons from "@/pages/Icons";
import Managers from "@/pages/Managers";
import Changelog from "@/pages/Changelog";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <RootLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/elements" component={Elements} />
        <Route path="/themes" component={Themes} />
        <Route path="/icons" component={Icons} />
        <Route path="/managers" component={Managers} />
        <Route path="/changelog" component={Changelog} />
        <Route component={NotFound} />
      </Switch>
    </RootLayout>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
