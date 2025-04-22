
import { useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { FuelTrackingForm } from "@/components/fuel-tracking-form";
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
const fuelRecords = [
  {
    id: "FUEL-3456",
    date: "2025-04-20",
    vehicle: "Toyota Hiace (KCJ 123B)",
    amount: "35.5 L",
    cost: "4,260",
    odometer: "12,345 km",
    receiptNo: "R-459821"
  },
  {
    id: "FUEL-3455",
    date: "2025-04-15",
    vehicle: "Nissan Urvan (KDA 456C)",
    amount: "42.2 L",
    cost: "5,064",
    odometer: "8,932 km",
    receiptNo: "R-459720"
  },
  {
    id: "FUEL-3454",
    date: "2025-04-10",
    vehicle: "Toyota Landcruiser (KDB 789D)",
    amount: "65.8 L",
    cost: "7,896",
    odometer: "15,632 km",
    receiptNo: "R-459615"
  },
  {
    id: "FUEL-3453",
    date: "2025-04-05",
    vehicle: "Toyota Hiace (KCJ 123B)",
    amount: "40.0 L",
    cost: "4,800",
    odometer: "12,020 km",
    receiptNo: "R-459520"
  }
];

const FuelPage = () => {
  useEffect(() => {
    document.title = "Fuel Tracking - IMOTRAK Driver Portal";
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Fuel Tracking</h1>
          </div>
          
          <Tabs defaultValue="record" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="record">Record Fuel</TabsTrigger>
              <TabsTrigger value="history">Fuel History</TabsTrigger>
              <TabsTrigger value="stats">Fuel Statistics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="record" className="mt-6">
              <FuelTrackingForm />
            </TabsContent>
            
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fuel History</CardTitle>
                  <CardDescription>
                    All fuel records and receipts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Record ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead>Odometer</TableHead>
                        <TableHead>Receipt No</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {fuelRecords.map((record) => (
                        <TableRow key={record.id}>
                          <TableCell className="font-medium">{record.id}</TableCell>
                          <TableCell>{record.date}</TableCell>
                          <TableCell>{record.vehicle}</TableCell>
                          <TableCell>{record.amount}</TableCell>
                          <TableCell>{record.cost}</TableCell>
                          <TableCell>{record.odometer}</TableCell>
                          <TableCell>{record.receiptNo}</TableCell>
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
                    <CardTitle>Monthly Fuel Consumption</CardTitle>
                    <CardDescription>
                      Fuel consumed per month
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p>Chart visualization will be displayed here</p>
                      <p className="text-sm mt-2">(Fuel consumption by month)</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Fuel Efficiency</CardTitle>
                    <CardDescription>
                      KM per liter by vehicle
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p>Chart visualization will be displayed here</p>
                      <p className="text-sm mt-2">(Efficiency by vehicle)</p>
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

export default FuelPage;
