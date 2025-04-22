
import { useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { VehicleIssueForm } from "@/components/vehicle-issue-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
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
const issues = [
  {
    id: "ISS-2345",
    date: "2025-04-18",
    vehicle: "Toyota Hiace (KCJ 123B)",
    issue: "Oil Leakage",
    severity: "Major",
    status: "In Progress"
  },
  {
    id: "ISS-2344",
    date: "2025-04-10",
    vehicle: "Nissan Urvan (KDA 456C)",
    issue: "Brake System",
    severity: "Critical",
    status: "Resolved"
  },
  {
    id: "ISS-2343",
    date: "2025-04-05",
    vehicle: "Toyota Landcruiser (KDB 789D)",
    issue: "Headlight Malfunction",
    severity: "Minor",
    status: "Resolved"
  },
  {
    id: "ISS-2342",
    date: "2025-03-28",
    vehicle: "Toyota Hiace (KCJ 123B)",
    issue: "Tire Pressure",
    severity: "Minor",
    status: "Resolved"
  }
];

const IssuesPage = () => {
  useEffect(() => {
    document.title = "Vehicle Issues - IMOTRAK Driver Portal";
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Vehicle Issues</h1>
          </div>
          
          <Tabs defaultValue="report" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="report">Report Issue</TabsTrigger>
              <TabsTrigger value="history">Issue History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="report" className="mt-6">
              <VehicleIssueForm />
            </TabsContent>
            
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Issue History</CardTitle>
                  <CardDescription>
                    All reported vehicle issues and their status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Issue ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Issue</TableHead>
                        <TableHead>Severity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {issues.map((issue) => (
                        <TableRow key={issue.id}>
                          <TableCell className="font-medium">{issue.id}</TableCell>
                          <TableCell>{issue.date}</TableCell>
                          <TableCell>{issue.vehicle}</TableCell>
                          <TableCell>{issue.issue}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              issue.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                              issue.severity === 'Major' ? 'bg-orange-100 text-orange-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {issue.severity}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              issue.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                              issue.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {issue.status}
                            </span>
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
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default IssuesPage;
