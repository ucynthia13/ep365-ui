import React from 'react'

const TopBanner = () => {
  return (
      <div className="bg-gradient-to-r from-transparent to-gray-50 via-[#44BCFF]/10 dark:via-[#44BCFF]/10 dark:to-transparent dark:from-transparent flex gap-2.5 justify-center items-center text-center p-2.5 border w-full text-sm">
        Check Out our Complete Guide{" "}
        <a
          href="/download-gude"
          className="text-[#44BCFF] dark:text-blue-500 underline"
        >
          <span>Download Now</span>
        </a>
      </div>
  )
}

export default TopBanner
