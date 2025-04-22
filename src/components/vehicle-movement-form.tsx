
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

interface VehicleMovementFormProps {
  type: "departure" | "return";
}

export function VehicleMovementForm({ type }: VehicleMovementFormProps) {
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
        <CardTitle>{type === "departure" ? "Departure Details" : "Return Details"}</CardTitle>
        <CardDescription>
          {type === "departure" 
            ? "Record vehicle information before departure" 
            : "Record vehicle information after return"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {type === "departure" ? (
            <>
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
                  <Label htmlFor="destination">Destination</Label>
                  <Input id="destination" placeholder="Enter destination" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="departureTime">Departure Time</Label>
                  <Input id="departureTime" type="time" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startOdometer">Start Odometer (km)</Label>
                  <Input id="startOdometer" type="number" placeholder="12345" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fuelLevel">Fuel Level (%)</Label>
                <Input id="fuelLevel" type="number" placeholder="85" min="0" max="100" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="purpose">Purpose of Trip</Label>
                <Select required>
                  <SelectTrigger id="purpose">
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delivery">Delivery</SelectItem>
                    <SelectItem value="field-visit">Field Visit</SelectItem>
                    <SelectItem value="pick-up">Pick-up</SelectItem>
                    <SelectItem value="official-meeting">Official Meeting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          ) : (
            <>
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
                  <Label htmlFor="returnTime">Return Time</Label>
                  <Input id="returnTime" type="time" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="endOdometer">End Odometer (km)</Label>
                  <Input id="endOdometer" type="number" placeholder="12385" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="distanceTravelled">Distance Travelled (km)</Label>
                  <Input id="distanceTravelled" type="number" placeholder="40" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fuelConsumed">Fuel Consumed (liters)</Label>
                  <Input id="fuelConsumed" type="number" placeholder="5.2" step="0.1" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fuelReceipt">Fuel Receipt No. (if applicable)</Label>
                  <Input id="fuelReceipt" placeholder="R-123456" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="vehicleCondition">Vehicle Condition</Label>
                <Select required>
                  <SelectTrigger id="vehicleCondition">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair (Minor Issues)</SelectItem>
                    <SelectItem value="poor">Poor (Requires Attention)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Enter any additional information about the trip or vehicle condition"
                />
              </div>
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Report"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
