
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ComingSoonHero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              CompactifAI
              <br />
              <span className="text-emerald-600">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Coming soon!!
            </p>
            <p className="text-lg text-gray-500">
              Build intelligent applications with our state-of-the-art language models
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
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

        {/* Right side - Visual element */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-emerald-600 rounded-2xl p-12 w-full max-w-md h-80 flex items-center justify-center shadow-2xl">
            <div className="text-center text-white">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">CompactifAI</h3>
              <p className="text-sm opacity-90">AI Model Compressor</p>
              <div className="mt-6 text-xs opacity-75">
                Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming soon section */}
      <div className="mt-20 pt-16 border-t border-gray-200">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Get started with CompactifAI
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dashboard Overview</h3>
              <p className="text-gray-600 text-sm">
                Monitor and manage your AI model compression tasks with an intuitive interface
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
              <p className="text-gray-600 text-sm">
                Track compression progress and performance metrics in real-time
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Model Management</h3>
              <p className="text-gray-600 text-sm">
                Organize and deploy your compressed models with ease
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonHero;
