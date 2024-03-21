"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Form, { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/app/dashboard/inquire/ADSC-Main-Logo.png";
import TailwindForm from "@/components/rjsf";
import { RJSFSchema } from "@rjsf/utils";
import { useFormState } from "react-dom";
import { createAssessment, createCustomerInquiry } from "@/app/lib/actions";

const schema: RJSFSchema = {
  type: "object",
  title: "AI Customer Inquiry Form",
  properties: {
    firstName: {
      type: "string",
      title: "First Name",
    },
    lastName: {
      type: "string",
      title: "Last Name",
    },
    company: {
      type: "string",
      title: "Company",
    },
    email: {
      type: "string",
      format: "email",
      title: "Email Address",
    },
    mainPhone: {
      type: "string",
      title: "Main Phone",
    },
    cellPhone: {
      type: "string",
      title: "Cell Phone",
    },
    agreeToTerms: {
      type: "boolean",
      title:
        "The user of this service agrees that they understand that this is\n" +
        "provided for information purposes only. It is the responsibility of\n" +
        "the user to use any information from this service at their own risk.\n" +
        "This service is provided under the laws of the Province of Ontario,\n" +
        "Canada",
    },
  },
  required: [
    "firstName",
    "lastName",
    "company",
    "email",
    "mainPhone",
    "cellPhone",
    "agreeToTerms",
  ],
  dependencies: {
    agreeToTerms: {
      properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        company: { type: "string" },
        email: { type: "string" },
        mainPhone: { type: "string" },
        cellPhone: { type: "string" },
      },
    },
  },
};

export default function Page() {
  const [state, dispatch] = useFormState(createAssessment, {});

  const router = useRouter();

  const handleSubmit = (data) => {
    showConfirmationPopup(data.formData);
  };

  const submitForm = (formData) => {
    dispatch(formData);
    // Add any additional logic for submitting the form here
    router.push(`/assessment/1`); // Adjusted to use dynamic routing
  };

  const showConfirmationPopup = (formData) => {
    if (confirm("Are you sure you want to submit the form?")) {
      for (let step = 1; step <= 5; step++) {
        localStorage.removeItem(`formDataStep${step}`); // Optionally, clear saved form data from local storage
      }

      submitForm(formData);
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6 flex-initial bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-full mx-auto">
        <TailwindForm
          schema={schema}
          formData={state}
          onSubmit={handleSubmit}
          validator={validator}
        />
        <p></p>
      </div>
    </main>
  );
}
