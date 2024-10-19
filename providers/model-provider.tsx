"use client";
import { useState, useEffect } from "react";
import { RenameModal } from "@/components/modals/rename-modal";
import { ProModal } from "@/components/modals/pro-modal";

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
      <ProModal/>
    </>
  );
};
