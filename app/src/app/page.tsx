import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { OcExplainer } from "@/components/oc-explainer";
import { ModelPicker } from "@/components/model-picker";
import { ChannelPicker } from "@/components/channel-picker";
import { SignInCta } from "@/components/signin-cta";
import { PhonePreview } from "@/components/phone-preview";
import { Comparison } from "@/components/comparison";
import { BentoFeatures } from "@/components/bento-features";
import { Testimonials } from "@/components/testimonials";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Onboarding flow — top of page */}
        <section className="max-w-[680px] mx-auto px-8 pt-16">
          <Hero />
          <OcExplainer />
          <ModelPicker />
          <ChannelPicker />
          <SignInCta />
        </section>

        {/* Divider */}
        <div className="max-w-[1100px] mx-auto px-8 pt-18">
          <hr className="border-t border-border" />
        </div>

        {/* Product proof */}
        <PhonePreview />
        <Comparison />
        <BentoFeatures />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
