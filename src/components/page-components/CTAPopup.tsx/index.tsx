"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface CTAPopupProps {
  delayInSeconds?: number;
  videoLink?: string;
}

export const CTAPopup: React.FC<CTAPopupProps> = ({
  delayInSeconds = 4,
  videoLink,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!isShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setIsShown(true);
      }, delayInSeconds * 1000);

      return () => clearTimeout(timer);
    }
  }, [delayInSeconds, isShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRedirect = () => {
    window.open("https://ep365-ui.vercel.app/", "_blank");
    handleClose();
  };

  const getEmbedLink = (url: string) => {
    const match = url.match(/[-\w]{25,}/);
    return match
      ? `https://drive.google.com/file/d/${match[0]}/preview`
      : url;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
        <div className="absolute top-0 right-0 p-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-3xl text-center font-bold">
              Explore EP365
            </DialogTitle>
            <DialogDescription className="text-center mt-2">
              Join forward-thinking teams using EP365 to automate approvals,
              track spending, and optimize supplier relationships.
            </DialogDescription>
          </DialogHeader>

          {videoLink && (
            <div className="relative rounded-lg overflow-hidden border mb-6">
              <iframe
                src={getEmbedLink(videoLink)}
                width="100%"
                height="250"
                allow="autoplay"
                className="rounded-lg"
              ></iframe>
            </div>
          )}

            <div className="flex flex-col items-center justify-center gap-4 relative">
              <Button
                onClick={handleRedirect}
                type="submit"
                className="w-fit rounded-full cursor-pointer"
              >
                Book A Demo
              </Button>
            </div>
          </div>
      </DialogContent>
    </Dialog>
  );
};
