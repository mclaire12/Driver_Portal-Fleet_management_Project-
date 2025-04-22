
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  CarFront,
  ChartBar,
  ClipboardList,
  LayoutDashboard,
  FileText,
  Fuel,
  Settings,
  LogOut,
  User
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  
  const routes = [
    {
      title: "Dashboard",
      href: "/",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Vehicle Movements",
      href: "/movements",
      icon: <CarFront className="mr-2 h-4 w-4" />,
    },
    {
      title: "Issue Reports",
      href: "/issues",
      icon: <ClipboardList className="mr-2 h-4 w-4" />,
    },
    {
      title: "Fuel Tracking",
      href: "/fuel",
      icon: <Fuel className="mr-2 h-4 w-4" />,
    },
    {
      title: "Reports",
      href: "/reports",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <div className={cn("pb-12 w-64 bg-white border-r", className)}>
      <div className="flex flex-col h-full">
        <div className="space-y-4 py-4">
          <div className="px-4 py-2">
            <Link to="/" className="flex items-center justify-center mb-8">
              <img 
                src="/images/imotrak-logo.jpg"
                alt="IMOTRAK Logo"
                className="h-10"
              />
            </Link>
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Driver Portal
            </h2>
            <div className="space-y-1">
              {routes.map((route) => (
                <Link key={route.href} to={route.href}>
                  <Button
                    variant={location.pathname === route.href ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      location.pathname === route.href 
                        ? "bg-imotrak-blue text-white" 
                        : "text-gray-600 hover:text-imotrak-blue hover:bg-gray-100"
                    )}
                  >
                    {route.icon}
                    {route.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-auto mb-4 px-4">
          <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-gray-100">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
