"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: "Please select a customer.",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  status: z.enum(["pending", "paid"], {
    invalid_type_error: "Please select an invoice status.",
  }),
  date: z.string(),
});

const UpdateInvoice = InvoiceSchema.omit({ id: true, date: true });

const CreateInvoice = InvoiceSchema.omit({ id: true, date: true });

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  // Revalidate the cache for the invoices component and redirect the user.
  revalidatePath("/page/invoices");
  redirect("/dashboard/invoices");
}

export async function updateInvoice(id: string, formData: FormData) {
  console.log(
    "app/lib/actions.ts",
    "updateInvoice",
    formData.get("customerId"),
  );
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  const amountInCents = amount * 100;

  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;

  revalidatePath("/page/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath("/page/invoices");
}

export async function createCustomerInquiry(prevState: any, formData: any) {
  // Simple validation (as an example, expand according to needs)
  const { name, email, subject, message } = formData;

  console.log(name, email, subject, message);

  // Check required fields
  if (!name || !email || !subject || !message) {
    return {
      errors: {
        name: !name ? ["Please enter your full name."] : undefined,
        email: !email ? ["Please enter your email address."] : undefined,
        subject: !subject ? ["Please enter the subject."] : undefined,
        message: !message ? ["Please enter your inquiry message."] : undefined,
      },
      message: "Missing Fields. Failed to Create Inquiry.",
    };
  }

  // Insert data into the database
  try {
    await sql`
      INSERT INTO customer_inquiries (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Inquiry.",
    };
  }

  revalidatePath("/page/customer-inquiries");
  redirect("/dashboard/customer-inquiries");
}

export async function createAssessment(prevState: any, formData: any) {
  // Simple validation (as an example, expand according to needs)
  const {
    firstName,
    lastName,
    company,
    email,
    mainPhone,
    cellPhone,
    agreeToTerms,
  } = formData;

  console.log(
    firstName,
    lastName,
    company,
    email,
    mainPhone,
    cellPhone,
    agreeToTerms,
  );

  // Insert data into the database
  try {
    await sql`
      INSERT INTO assessments (first_name, last_name, company, email, main_phone, cell_phone)
      VALUES (${firstName}, ${lastName}, ${company}, ${email}, ${mainPhone}, ${cellPhone})
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Assessment.",
    };
  }

  redirect("/assessment/1");
}
