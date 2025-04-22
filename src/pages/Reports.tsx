
import { useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { FileText, Download, ChartBar } from "lucide-react";

const ReportsPage = () => {
  useEffect(() => {
    document.title = "Reports - IMOTRAK Driver Portal";
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          </div>
          
          <Tabs defaultValue="available" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="available">Available Reports</TabsTrigger>
              <TabsTrigger value="generate">Generate Report</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="available" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-imotrak-blue" />
                      Trip Summary
                    </CardTitle>
                    <CardDescription>
                      Monthly summary of all trips
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">
                      Last generated: April 20, 2025
                    </p>
                    <Button className="w-full flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-imotrak-yellow" />
                      Fuel Consumption
                    </CardTitle>
                    <CardDescription>
                      Monthly fuel consumption report
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">
                      Last generated: April 18, 2025
                    </p>
                    <Button className="w-full flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-imotrak-red" />
                      Vehicle Issue Log
                    </CardTitle>
                    <CardDescription>
                      Monthly vehicle issue report
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">
                      Last generated: April 15, 2025
                    </p>
                    <Button className="w-full flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="generate" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Generate New Report</CardTitle>
                  <CardDescription>
                    Create a custom report by selecting parameters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Report Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="trips">Trip Summary</SelectItem>
                          <SelectItem value="fuel">Fuel Consumption</SelectItem>
                          <SelectItem value="issues">Vehicle Issues</SelectItem>
                          <SelectItem value="performance">Driver Performance</SelectItem>
                          <SelectItem value="comprehensive">Comprehensive Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Vehicle</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Vehicles</SelectItem>
                            <SelectItem value="hiace">Toyota Hiace (KCJ 123B)</SelectItem>
                            <SelectItem value="urvan">Nissan Urvan (KDA 456C)</SelectItem>
                            <SelectItem value="landcruiser">Toyota Landcruiser (KDB 789D)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Format</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pdf">PDF Document</SelectItem>
                            <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                            <SelectItem value="csv">CSV File</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block">Date Range</label>
                      <div className="rounded-md border p-4">
                        <div className="flex justify-center">
                          <Calendar
                            mode="range"
                            className="rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full md:w-auto">
                        Generate Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="scheduled" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Reports</CardTitle>
                  <CardDescription>
                    Reports automatically generated on schedule
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border divide-y">
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Monthly Trip Summary</h4>
                        <p className="text-sm text-gray-500">Generated on the 1st of each month</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mr-4">Active</span>
                        <Button variant="ghost" size="sm">Configure</Button>
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Weekly Fuel Report</h4>
                        <p className="text-sm text-gray-500">Generated every Monday</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mr-4">Active</span>
                        <Button variant="ghost" size="sm">Configure</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline">
                      Schedule New Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default ReportsPage;
