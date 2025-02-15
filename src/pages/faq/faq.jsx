import { FAQ } from "../../layout";
import { useState } from "react";
import { Button, Form, Input } from "@heroui/react";

export const FAQPage = () => {
  const [submitted, setSubmitted] = useState(null);

  const onSubmit = (e) => {
    // Prevent default browser page refresh.
    e.preventDefault();

    // Get form data as an object.
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Submit data to your backend API.
    setSubmitted(data);
  };

  return (
    <main className="max-w-[1920px] m-auto min-h-screen">
      {/* <FAQ /> */}
      <div className="ask-question-text-area">
        <Form onSubmit={onSubmit} validationBehavior="native">
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <Button type="submit">Submit</Button>
          {submitted && (
            <div className="text-small text-default-500">
              You submitted: <code>{JSON.stringify(submitted)}</code>
            </div>
          )}
        </Form>
      </div>
    </main>
  );
};
