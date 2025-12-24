"use client";
import { useState } from "react";
import ModalContactForm from "./ModalContactForm";

export default function ClientModalWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <ModalContactForm
      isOpen={open}
      onClose={() => setOpen(false)}
    />
  );
}
