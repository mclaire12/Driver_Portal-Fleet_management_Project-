
import { useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const ProfilePage = () => {
  useEffect(() => {
    document.title = "My Profile - IMOTRAK Driver Portal";
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Avatar className="h-32 w-32">
                    <AvatarFallback className="text-4xl">JD</AvatarFallback>
                  </Avatar>
                  <div className="mt-4 text-center">
                    <h2 className="text-2xl font-bold">John Driver</h2>
                    <p className="text-gray-500">Driver</p>
                    <Badge className="mt-2">Active</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Employee ID:</span>
                    <span className="font-medium">EMP002</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Department:</span>
                    <span className="font-medium">Transport</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Joined:</span>
                    <span className="font-medium">Jan 10, 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">License Type:</span>
                    <span className="font-medium">Commercial B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">License Expiry:</span>
                    <span className="font-medium">Dec 31, 2026</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Edit Profile</Button>
              </CardFooter>
            </Card>
            
            {/* Main Content Area */}
            <div className="md:col-span-2">
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="info">Personal Information</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                </TabsList>
                
                <TabsContent value="info" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Manage your personal details
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Driver" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john.driver@imotrak.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" defaultValue="+250 788 234 567" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Main Street, Kigali" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="emergencyContact">Emergency Contact</Label>
                          <Input id="emergencyContact" defaultValue="Jane Driver" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emergencyPhone">Emergency Phone</Label>
                          <Input id="emergencyPhone" defaultValue="+250 788 111 222" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="security" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>
                        Manage your password and security preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input id="newPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Update Password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="performance" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Metrics</CardTitle>
                      <CardDescription>
                        Your driving performance statistics
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <p className="font-medium">Safety Score</p>
                            <p>92%</p>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-full w-[92%] rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <p className="font-medium">Fuel Efficiency</p>
                            <p>85%</p>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-full w-[85%] rounded-full bg-blue-500"></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <p className="font-medium">Timely Reporting</p>
                            <p>95%</p>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-full w-[95%] rounded-full bg-purple-500"></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <p className="font-medium">Vehicle Maintenance</p>
                            <p>88%</p>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-full w-[88%] rounded-full bg-yellow-500"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 border-t pt-6">
                        <h4 className="font-medium mb-4">Recent Achievements</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                              ✓
                            </div>
                            <div>
                              <p className="font-medium">Perfect Attendance</p>
                              <p className="text-sm text-gray-500">March 2025</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                              ✓
                            </div>
                            <div>
                              <p className="font-medium">Fuel Efficiency Champion</p>
                              <p className="text-sm text-gray-500">Q1 2025</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
