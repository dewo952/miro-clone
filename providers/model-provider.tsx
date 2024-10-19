"use client";
import { useState, useEffect } from "react";
import { RenameModal } from "@/components/modals/rename-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) { 
    return null;
  }
  return (
    <>
      <RenameModal />
    </>
  );
};
