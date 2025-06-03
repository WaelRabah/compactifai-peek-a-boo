
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-emerald-600">CompactifAI API</h1>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Auto</span>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <span className="sr-only">Toggle theme</span>
                🌙
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
