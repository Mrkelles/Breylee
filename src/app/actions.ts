
"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { Resend } from "resend";
import OrderConfirmationEmail from "@/components/emails/OrderConfirmationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const OrderSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required." }),
  phoneNumber: z
    .string()
    .min(10, { message: "A valid phone number is required." }),
  whatsappNumber: z.string().optional(),
  address: z.string().min(10, { message: "A detailed address is required." }),
  state: z.string({ required_error: "State is required." }).min(2, { message: "State is required." }),
  quantity: z.string({ required_error: "Please select a quantity." }),
});

export type OrderState = {
  errors?: {
    fullName?: string[];
    phoneNumber?: string[];
    whatsappNumber?: string[];
    address?: string[];
    state?: string[];
    quantity?: string[];
  };
  message?: string | null;
};

const quantityOptions = [
  { value: "1", label: "1 Pack (Trial)" },
  { value: "2", label: "2 Packs (Recommended)" },
  { value: "3", label: "3 Packs (Best Value)" },
];

export async function submitOrder(prevState: OrderState, formData: FormData) {
  const validatedFields = OrderSchema.safeParse({
    fullName: formData.get("fullName"),
    phoneNumber: formData.get("phoneNumber"),
    whatsappNumber: formData.get("whatsappNumber"),
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

  const { fullName, phoneNumber, whatsappNumber, address, state, quantity } =
    validatedFields.data;

  const quantityLabel =
    quantityOptions.find((o) => o.value === quantity)?.label ??
    "Unknown Quantity";

  try {
    const { data, error } = await resend.emails.send({
      from: "Oello Shop <onboarding@resend.dev>",
      to: ["cckelles@gmail.com"],
      subject: "New Order from Oello Shop!",
      react: OrderConfirmationEmail({
        fullName,
        phoneNumber,
        whatsappNumber: whatsappNumber || "Not provided",
        address,
        state,
        quantity: quantityLabel,
      }),
    });

    if (error) {
      console.error({ error });
      return {
        errors: {},
        message: `Error sending email: ${error.message}. Please try again.`,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      errors: {},
      message:
        "An unexpected error occurred while sending the email. Please try again.",
    };
  }

  redirect("/thank-you");
}
