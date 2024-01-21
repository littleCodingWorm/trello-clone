import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

const FormSubmit = ({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending || disabled} type="submit">
      {children}
    </Button>
  );
};

export default FormSubmit;
