
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitOrder, type OrderState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, Check, Loader2, ShieldCheck, Truck } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const nigerianStates = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
    "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
    "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT"
];

const quantityOptions = [
  { value: "1", label: "1 Pack (Trial)", price: "₦12,000", originalPrice: "₦15,000" },
  { value: "2", label: "2 Packs (Recommended)", price: "₦20,000", originalPrice: "₦30,000" },
  { value: "3", label: "3 Packs (Best Value)", price: "₦28,000", originalPrice: "₦45,000" },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full text-lg font-bold py-6" size="lg" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Placing Your Order...
        </>
      ) : (
        "Rush My Order Now!"
      )}
    </Button>
  );
}

export default function OrderForm() {
  const initialState: OrderState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(submitOrder, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.errors && Object.keys(state.errors).length > 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <Card className="shadow-2xl">
        <CardHeader className="text-center bg-accent text-accent-foreground p-8 rounded-t-lg">
        <CardTitle className="text-3xl md:text-4xl font-bold">
            Yes, I Want a Whiter Smile!
        </CardTitle>
        <CardDescription className="text-accent-foreground/80 text-lg">
            Fill the form below to place your order. Payment is on delivery.
        </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 lg:p-12">
        <form action={dispatch} className="space-y-8">
            {/* Quantity Selection */}
            <div className="space-y-4">
            <Label className="text-lg font-semibold">Choose Your Package</Label>
            <RadioGroup name="quantity" defaultValue="1" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quantityOptions.map((option) => (
                <Label
                    key={option.value}
                    htmlFor={`quantity-${option.value}`}
                    className="flex flex-col p-4 border-2 rounded-lg has-[:checked]:border-primary has-[:checked]:bg-primary/5 cursor-pointer transition-all"
                >
                    <RadioGroupItem value={option.value} id={`quantity-${option.value}`} className="sr-only" />
                    <span className="font-bold text-lg">{option.label}</span>
                    <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">{option.price}</span>
                    <span className="line-through text-muted-foreground">{option.originalPrice}</span>
                    </div>
                </Label>
                ))}
            </RadioGroup>
            {state.errors?.quantity && (
                <div className="flex items-center text-sm text-destructive mt-2">
                <AlertCircle className="h-4 w-4 mr-2" />
                {state.errors.quantity[0]}
                </div>
            )}
            </div>
            
            {/* Customer Details */}
            <div className="space-y-2">
                <Label htmlFor="fullName" className="text-lg">Full Name</Label>
                <Input id="fullName" name="fullName" placeholder="e.g., John Doe" required />
                {state.errors?.fullName && <p className="text-sm text-destructive">{state.errors.fullName[0]}</p>}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-lg">Phone Number</Label>
                    <Input id="phoneNumber" name="phoneNumber" type="tel" placeholder="e.g., 08012345678" required />
                    {state.errors?.phoneNumber && <p className="text-sm text-destructive">{state.errors.phoneNumber[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="whatsappNumber" className="text-lg">Whatsapp Number <span className="text-muted-foreground">(Optional)</span></Label>
                    <Input id="whatsappNumber" name="whatsappNumber" type="tel" placeholder="e.g., 08012345678" />
                    {state.errors?.whatsappNumber && <p className="text-sm text-destructive">{state.errors.whatsappNumber[0]}</p>}
                </div>
            </div>

            <div className="space-y-2">
            <Label htmlFor="address" className="text-lg">Full Delivery Address</Label>
            <Input id="address" name="address" placeholder="Your House Number, Street, and Area" required />
            {state.errors?.address && <p className="text-sm text-destructive">{state.errors.address[0]}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="state" className="text-lg">State</Label>
                <Select name="state" required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                        {nigerianStates.map(state => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {state.errors?.state && <p className="text-sm text-destructive">{state.errors.state[0]}</p>}
            </div>
            
            <SubmitButton />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-muted-foreground pt-4">
                <div className="flex items-center justify-center gap-2">
                <Truck className="h-5 w-5 text-primary"/>
                <span>Free Nationwide Delivery</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                <Check className="h-5 w-5 text-primary"/>
                <span>Pay on Delivery</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary"/>
                <span>100% Secure Order</span>
                </div>
            </div>
        </form>
        </CardContent>
    </Card>
  );
}
