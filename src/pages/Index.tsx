
import { useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { StatsCard } from "@/components/stats-card";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  CarFront,
  ClipboardList,
  Fuel,
  TrendingUp,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for recent trips
const recentTrips = [
  {
    id: "TR-1234",
    date: "2025-04-20",
    vehicle: "Toyota Hiace (KCJ 123B)",
    destination: "City Center",
    distance: "45 km",
    status: "Completed"
  },
  {
    id: "TR-1233",
    date: "2025-04-18",
    vehicle: "Toyota Landcruiser (KDB 789D)",
    destination: "North District",
    distance: "120 km",
    status: "Completed"
  },
  {
    id: "TR-1232",
    date: "2025-04-15",
    vehicle: "Nissan Urvan (KDA 456C)",
    destination: "Airport Terminal",
    distance: "30 km",
    status: "Completed"
  }
];

const upcomingTrips = [
  {
    id: "TR-1235",
    date: "2025-04-24",
    time: "09:00 AM",
    vehicle: "Toyota Hiace (KCJ 123B)",
    destination: "Eastern Region Office"
  },
  {
    id: "TR-1236",
    date: "2025-04-25",
    time: "10:30 AM",
    vehicle: "Nissan Urvan (KDA 456C)",
    destination: "Western Province HQ"
  }
];

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - IMOTRAK Driver Portal";
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{new Date().toDateString()}</span>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <StatsCard
              title="Total Trips"
              value="28"
              description="Current month"
              icon={CarFront}
            />
            <StatsCard
              title="Distance Traveled"
              value="1,250 km"
              description="Current month"
              icon={TrendingUp}
              iconColor="text-imotrak-green"
            />
            <StatsCard
              title="Fuel Consumed"
              value="120 L"
              description="Current month"
              icon={Fuel}
              iconColor="text-imotrak-yellow"
            />
            <StatsCard
              title="Pending Issues"
              value="1"
              description="Needs attention"
              icon={ClipboardList}
              iconColor="text-imotrak-red"
            />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used operations</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Link to="/movements">
                  <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center gap-2">
                    <CarFront className="h-6 w-6 text-imotrak-blue" />
                    <span>New Trip</span>
                  </Button>
                </Link>
                <Link to="/fuel">
                  <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center gap-2">
                    <Fuel className="h-6 w-6 text-imotrak-yellow" />
                    <span>Record Fuel</span>
                  </Button>
                </Link>
                <Link to="/issues">
                  <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center gap-2">
                    <ClipboardList className="h-6 w-6 text-imotrak-red" />
                    <span>Report Issue</span>
                  </Button>
                </Link>
                <Link to="/movements">
                  <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center gap-2">
                    <Clock className="h-6 w-6 text-imotrak-green" />
                    <span>Log Return</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Upcoming Trips */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Trips</CardTitle>
                <CardDescription>Your scheduled trips</CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingTrips.length > 0 ? (
                  <ul className="space-y-4">
                    {upcomingTrips.map((trip) => (
                      <li key={trip.id} className="border rounded-md p-4 bg-gray-50">
                        <div className="flex justify-between">
                          <div className="font-medium">{trip.destination}</div>
                          <div className="text-sm text-gray-500">{trip.date}</div>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">{trip.vehicle}</div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="text-sm text-gray-500">
                            <Clock className="h-3 w-3 inline mr-1" /> {trip.time}
                          </div>
                          <Link to={`/movements`}>
                            <Button variant="ghost" size="sm">View Details</Button>
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    No upcoming trips scheduled
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Trips */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Recent Trips</CardTitle>
              <CardDescription>Your most recent trips and movements</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Trip ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Vehicle</TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTrips.map((trip) => (
                    <TableRow key={trip.id}>
                      <TableCell className="font-medium">{trip.id}</TableCell>
                      <TableCell>{trip.date}</TableCell>
                      <TableCell>{trip.vehicle}</TableCell>
                      <TableCell>{trip.destination}</TableCell>
                      <TableCell>{trip.distance}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                          {trip.status}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center mt-4">
                <Link to="/movements">
                  <Button variant="outline">View All Trips</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
