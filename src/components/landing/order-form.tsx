"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const nigerianStates = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
    "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
    "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT"
];

const quantityOptions = [
  { id: "1", label: "1 Pack", price: 15000, oldPrice: 30000 },
  { id: "2", label: "2 Packs (Buy 1, Get 1 Free)", price: 25000, oldPrice: 60000 },
  { id: "3", label: "3 Packs (Best Value)", price: 35000, oldPrice: 90000 },
];

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phone: z.string().regex(/^\d{11}$/, "Please enter a valid 11-digit phone number."),
  altPhone: z.string().optional(),
  address: z.string().min(10, "Please enter a detailed address."),
  state: z.string({ required_error: "Please select a state." }),
  quantity: z.string({ required_error: "Please select a quantity." }),
});

export function OrderForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      altPhone: "",
      address: "",
      quantity: "1",
    },
  });

  const selectedQuantityId = form.watch("quantity");
  const selectedOption = quantityOptions.find(opt => opt.id === selectedQuantityId);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values);
    router.push("/thank-you");
  }

  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-lg font-bold">Choose Your Package (50% OFF TODAY)</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-1 gap-4"
                    >
                      {quantityOptions.map((option) => (
                        <FormItem key={option.id}>
                          <FormControl>
                            <RadioGroupItem value={option.id} className="sr-only" />
                          </FormControl>
                          <FormLabel className={`flex flex-col items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${field.value === option.id ? 'border-primary bg-primary/5' : 'border-border'}`}>
                            <span className="font-bold text-md">{option.label}</span>
                            <div className="flex items-baseline gap-2 mt-1">
                              <span className="text-xl font-bold text-primary">₦{option.price.toLocaleString()}</span>
                              <span className="text-sm text-muted-foreground line-through">₦{option.oldPrice.toLocaleString()}</span>
                            </div>
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="08012345678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="altPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alternative Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Optional" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full house or office address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {nigerianStates.map(state => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
              <p>✅ <strong>Pay on Delivery.</strong> No need to pay now.</p>
              <p>✅ <strong>Free & Fast Delivery.</strong> We'll call you to confirm your order.</p>
            </div>
            
            <Button type="submit" className="w-full text-lg h-12" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Placing Order...
                </>
              ) : (
                `Complete Order - ₦${selectedOption?.price.toLocaleString() || '0'}`
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
