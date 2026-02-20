
"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const OrderSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required." }),
  phoneNumber: z.string().min(10, { message: "A valid phone number is required." }),
  address: z.string().min(10, { message: "A detailed address is required." }),
  state: z.string().min(2, { message: "State is required." }),
  quantity: z.string({ required_error: "Please select a quantity." }),
});

export type OrderState = {
  errors?: {
    fullName?: string[];
    phoneNumber?: string[];
    address?: string[];
    state?: string[];
    quantity?: string[];
  };
  message?: string | null;
};

export async function submitOrder(prevState: OrderState, formData: FormData) {
  const validatedFields = OrderSchema.safeParse({
    fullName: formData.get("fullName"),
    phoneNumber: formData.get("phoneNumber"),
    address: formData.get("address"),
    state: formData.get("state"),
    quantity: formData.get("quantity"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Submit Order.",
    };
  }

  // Here you would typically process the order, e.g.,
  // save to a database, call an API, etc.
  console.log("New Order Submitted:", validatedFields.data);

  redirect("/thank-you");
}
