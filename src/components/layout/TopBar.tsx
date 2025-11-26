import { Search, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TopBar() {
  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search cases, patients..."
            className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 hover:bg-muted px-3 py-2 rounded-lg transition-colors">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              SC
            </AvatarFallback>
          </Avatar>
          <div className="text-left hidden lg:block">
            <div className="text-sm font-semibold">Dr. Sarah Chen</div>
            <div className="text-xs text-muted-foreground">Cardiothoracic Surgery</div>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
