
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ComingSoonHero = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      {/* Logo */}
      <div className="mb-8">
        <div className="bg-emerald-600 rounded-2xl p-8 w-32 h-32 mx-auto flex items-center justify-center shadow-2xl">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        CompactifAI Dashboard
      </h1>

      {/* Coming Soon with fancy animation */}
      <div className="mb-12">
        <p className="text-3xl font-semibold text-emerald-600 animate-pulse">
          Coming Soon
        </p>
        <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
      </div>

      {/* Functionalities List */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Dashboard Features Coming Soon
        </h2>
        <div className="max-w-md mx-auto space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <p className="text-gray-700 font-medium">📊 Track API usage statistics</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <p className="text-gray-700 font-medium">💰 Monthly cost tracking</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <p className="text-gray-700 font-medium">🔑 API keys management</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-base font-medium transition-colors"
          size="lg"
        >
          Get Notified
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg text-base font-medium"
          size="lg"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ComingSoonHero;
