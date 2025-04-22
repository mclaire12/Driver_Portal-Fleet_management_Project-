
import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { VehicleMovementForm } from "@/components/vehicle-movement-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sample data
const trips = [
  {
    id: "TR-1234",
    date: "2025-04-20",
    departureTime: "08:30 AM",
    returnTime: "11:45 AM",
    vehicle: "Toyota Hiace (KCJ 123B)",
    destination: "City Center",
    distance: "45 km",
    status: "Completed"
  },
  {
    id: "TR-1233",
    date: "2025-04-18",
    departureTime: "09:15 AM",
    returnTime: "04:30 PM",
    vehicle: "Toyota Landcruiser (KDB 789D)",
    destination: "North District",
    distance: "120 km",
    status: "Completed"
  },
  {
    id: "TR-1232",
    date: "2025-04-15",
    departureTime: "10:00 AM",
    returnTime: "12:30 PM",
    vehicle: "Nissan Urvan (KDA 456C)",
    destination: "Airport Terminal",
    distance: "30 km",
    status: "Completed"
  },
  {
    id: "TR-1231",
    date: "2025-04-12",
    departureTime: "07:45 AM",
    returnTime: "06:15 PM",
    vehicle: "Toyota Hiace (KCJ 123B)",
    destination: "South Province",
    distance: "200 km",
    status: "Completed"
  },
  {
    id: "TR-1230",
    date: "2025-04-10",
    departureTime: "02:00 PM",
    returnTime: "05:30 PM",
    vehicle: "Nissan Urvan (KDA 456C)",
    destination: "East District Hospital",
    distance: "35 km",
    status: "Completed"
  }
];

const MovementsPage = () => {
  const [activeTab, setActiveTab] = useState("record");

  useEffect(() => {
    document.title = "Vehicle Movements - IMOTRAK Driver Portal";
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Vehicle Movements</h1>
          </div>
          
          <Tabs defaultValue="record" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="record">Record Movement</TabsTrigger>
              <TabsTrigger value="history">Movement History</TabsTrigger>
              <TabsTrigger value="stats">Movement Statistics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="record" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <VehicleMovementForm type="departure" />
                <VehicleMovementForm type="return" />
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Movement History</CardTitle>
                  <CardDescription>
                    View all your vehicle movements and trip details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Trip ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Departure</TableHead>
                        <TableHead>Return</TableHead>
                        <TableHead>Distance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {trips.map((trip) => (
                        <TableRow key={trip.id}>
                          <TableCell className="font-medium">{trip.id}</TableCell>
                          <TableCell>{trip.date}</TableCell>
                          <TableCell>{trip.vehicle}</TableCell>
                          <TableCell>{trip.destination}</TableCell>
                          <TableCell>{trip.departureTime}</TableCell>
                          <TableCell>{trip.returnTime}</TableCell>
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
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="stats" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Distance</CardTitle>
                    <CardDescription>
                      Total distance traveled per month
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p>Chart visualization will be displayed here</p>
                      <p className="text-sm mt-2">(Distance by month)</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Trip Destinations</CardTitle>
                    <CardDescription>
                      Most frequent destinations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p>Chart visualization will be displayed here</p>
                      <p className="text-sm mt-2">(Trips by destination)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default MovementsPage;
