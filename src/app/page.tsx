import { Navbar } from "@/components/site/sections/navbar";
import { Hero } from "@/components/site/sections/hero";
import { LegacyStatement } from "@/components/site/sections/legacy-statement";
import { ImpactMetrics } from "@/components/site/sections/impact-metrics";
import { Developments } from "@/components/site/sections/developments";
import { BuildingEvolution } from "@/components/site/sections/building-evolution";
import { ChennaiFootprint } from "@/components/site/sections/chennai-footprint";
import { BusinessVerticals } from "@/components/site/sections/business-verticals";
import { WhyChooseSkcl } from "@/components/site/sections/why-choose-skcl";
import { ClientTrust } from "@/components/site/sections/client-trust";
//import { Voices } from "@/components/site/sections/voices";
//import { Insights } from "@/components/site/sections/insights";
//import { FacilityManagement } from "@/components/site/sections/facility-management";
//import { JointVentures } from "@/components/site/sections/joint-ventures";
import { Sustainability } from "@/components/site/sections/sustainability";
//import { Leadership } from "@/components/site/sections/leadership";
import { CorporateProfile } from "@/components/site/sections/corporate-profile";
import { FinalCta } from "@/components/site/sections/final-cta";
import { Footer } from "@/components/site/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-soft-white">
        <Hero />
        <LegacyStatement />
        <ImpactMetrics />
        <Developments />
        <ChennaiFootprint />
        <BuildingEvolution />
        <BusinessVerticals />
        <WhyChooseSkcl />
        <ClientTrust />
        <Sustainability />
        <CorporateProfile />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
}
