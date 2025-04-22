
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function VehicleIssueForm() {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Handle success notification here
    }, 1000);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Report Vehicle Issue</CardTitle>
        <CardDescription>
          Submit information about any mechanical or other vehicle issues
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vehicle">Vehicle</Label>
              <Select required>
                <SelectTrigger id="vehicle">
                  <SelectValue placeholder="Select vehicle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota-hiace">Toyota Hiace (KCJ 123B)</SelectItem>
                  <SelectItem value="nissan-urvan">Nissan Urvan (KDA 456C)</SelectItem>
                  <SelectItem value="toyota-landcruiser">Toyota Landcruiser (KDB 789D)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="issueType">Issue Type</Label>
              <Select required>
                <SelectTrigger id="issueType">
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engine">Engine Problem</SelectItem>
                  <SelectItem value="tires">Tire Issue</SelectItem>
                  <SelectItem value="brakes">Brake System</SelectItem>
                  <SelectItem value="lights">Lights/Signals</SelectItem>
                  <SelectItem value="oil">Oil Leakage</SelectItem>
                  <SelectItem value="battery">Battery/Electrical</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="issueTitle">Issue Title</Label>
            <Input 
              id="issueTitle" 
              placeholder="Brief description of the issue" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="severity">Severity</Label>
            <Select required>
              <SelectTrigger id="severity">
                <SelectValue placeholder="Select severity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="critical">Critical - Vehicle Cannot Operate</SelectItem>
                <SelectItem value="major">Major - Requires Immediate Attention</SelectItem>
                <SelectItem value="minor">Minor - Can Be Scheduled</SelectItem>
                <SelectItem value="cosmetic">Cosmetic - Non-Functional Issue</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location When Issue Occurred</Label>
            <Input 
              id="location" 
              placeholder="Where the vehicle was when the issue occurred" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="issueDescription">Detailed Description</Label>
            <Textarea 
              id="issueDescription" 
              placeholder="Provide a detailed description of the issue including when it started and any observations"
              rows={5}
              required 
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Issue Report"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
