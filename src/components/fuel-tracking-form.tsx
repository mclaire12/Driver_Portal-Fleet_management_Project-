
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

export function FuelTrackingForm() {
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
        <CardTitle>Fuel Tracking</CardTitle>
        <CardDescription>
          Record fuel purchases and consumption details
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
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" required />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fuelAmount">Fuel Amount (liters)</Label>
              <Input 
                id="fuelAmount" 
                type="number" 
                placeholder="40.5"
                step="0.1"
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fuelCost">Fuel Cost (Total)</Label>
              <Input 
                id="fuelCost" 
                type="number"
                placeholder="4500" 
                required 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="odometerReading">Odometer Reading (km)</Label>
              <Input 
                id="odometerReading" 
                type="number" 
                placeholder="12345"
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fuelType">Fuel Type</Label>
              <Select required>
                <SelectTrigger id="fuelType">
                  <SelectValue placeholder="Select fuel type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="petrol">Petrol</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="receiptNumber">Receipt Number</Label>
              <Input 
                id="receiptNumber" 
                placeholder="R-123456"
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fillingStation">Filling Station</Label>
              <Input 
                id="fillingStation" 
                placeholder="Station name"
                required 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea 
              id="notes" 
              placeholder="Any additional information"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Fuel Record"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
