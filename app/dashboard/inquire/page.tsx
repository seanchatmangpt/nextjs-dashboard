"use client";
import Image from "next/image";
import logo from "./ADSC-Main-Logo.png";

import { useFormState } from "react-dom";

const log = (type) => console.log.bind(console, type);
import validator from "@rjsf/validator-ajv8";
import TailwindForm from "@/components/rjsf";

import { RJSFSchema } from "@rjsf/utils";
import { createCustomerInquiry } from "@/app/lib/actions";
import { FormProps } from "@rjsf/core";

const schema: RJSFSchema = {
  type: "object",
  title: "AI Customer Inquiry Form",
  properties: {
    name: {
      type: "string",
      title: "Full Name",
    },
    email: {
      type: "string",
      format: "email",
      title: "Email Address",
    },
    subject: {
      type: "string",
      title: "Subject",
    },
    message: {
      type: "string",
      title: "Inquiry Message",
    },
  },
  required: ["name", "email", "subject", "message"],
};

const initialState = {
  // name: "Sean Chatman",
  // email: "xpointsh@gmail.com",
  // subject: "AI",
  // message: "How much?",
};

export default function Page() {
  const [state, dispatch] = useFormState(createCustomerInquiry, initialState);

  const handleSubmit = (data) => {
    dispatch(data.formData);
  };

  return (
    <main className="flex min-h-screen flex-col p-6 flex-initial bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <Image className="mx-auto p-8" src={logo} alt="Company Logo" />
        <TailwindForm
          schema={schema}
          validator={validator}
          onSubmit={handleSubmit}
          formData={state}
        />
      </div>
    </main>
  );
}
