import React from 'react'

const TopBanner = () => {
  return (
      <div className="z-30 bg-gradient-to-r from-white/70 via-white/50 backdrop-blur-2xl to-white dark:via-[#44BCFF]/10 dark:to-transparent dark:from-transparent flex gap-2.5 justify-center items-center text-muted-foreground text-center p-2.5 w-full text-sm font-medium border-b border-border">
        Check Out our Complete Guide{" "}
        <a
          href="/download-gude"
          className="text-primary underline"
        >
          <span>Download Now</span>
        </a>
      </div>
  )
}

export default TopBanner
