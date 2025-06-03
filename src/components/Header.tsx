
import { Search, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-emerald-600">CompactifAI API</h1>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search"
                className="pl-10 pr-12 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 inline-flex items-center px-2 py-1 border border-gray-300 rounded text-xs font-mono font-medium text-gray-500">
                ⌘K
              </kbd>
            </div>
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
