
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found - IMOTRAK Driver Portal";
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-imotrak-blue">404</h1>
        <h2 className="mt-4 text-2xl font-bold tracking-tight">Page not found</h2>
        <p className="mt-2 text-gray-500">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-6">
          <Link to="/">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
