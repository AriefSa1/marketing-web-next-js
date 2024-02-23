import React from 'react'
import { UserProfile } from "@clerk/nextjs";

function page() {
  return (
    <div className='flex mt-6 mx-auto items-center justify-center'>
        <UserProfile path="/profile" routing="path" />
    </div>
  )
}

export default page