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
import { ExternalLink, X } from "lucide-react";

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
            <div className="flex items-center justify-center mb-4 text-primary font-medium">
              Smarter Procurement Starts Here 🚀
            </div>
            <DialogTitle className="text-3xl text-center font-bold">
              Unlock Efficiency with EP365
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

          <div className="relative py-4">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 bg-primary/5 rounded-full filter blur-2xl"></div>

            <div className="flex flex-col gap-4 relative">
              <div className="bg-accent/30 p-4 rounded-lg border border-accent">
                <h4 className="font-medium mb-1">✨ With EP365 you get:</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Automated purchase approvals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Real-time budget tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>AI-driven supplier insights</span>
                  </li>
                </ul>
              </div>
              <Button
                onClick={handleRedirect}
                type="submit"
                className="btn-primary rounded-full"
              >
                Book My Demo
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
