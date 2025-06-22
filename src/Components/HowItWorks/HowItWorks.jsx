import React from "react";
import { Search, Gavel, CreditCard, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-[#003EA4]" />,
    title: "1. Browse Auctions",
    description:
      "Explore a wide variety of items across categories and find what catches your eye.",
  },
  {
    icon: <Gavel className="w-8 h-8 text-[#003EA4]" />,
    title: "2. Place a Bid",
    description:
      "Submit your bid and compete in real-time to win your favorite item.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-[#003EA4]" />,
    title: "3. Win & Pay",
    description:
      "If you win, securely complete your payment through our trusted system.",
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-[#003EA4]" />,
    title: "4. Receive Your Item",
    description:
      "Sit back while we handle the shipping. Track your package to your doorstep.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 px-4 sm:px-6 bg-white text-gray-800 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Participating in an auction is simple. Follow these easy steps and
          start bidding today.
        </p>

        {/* Mobile: Vertical timeline style */}
        <div className="flex flex-col gap-6 md:hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-[#F9FAFB] p-4 rounded-lg shadow-sm"
            >
              <div className="shrink-0">{step.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid style */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-left"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
