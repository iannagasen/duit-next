import Demo from '@/modules/Demo/Demo'
import { BASE_URL } from '@/modules/common/constants/base-url';
import React from 'react'

const page = async () => {

  return (
    <div>
      DEMO
      <Demo name="Jonas" />
    </div>
  )
}

export default page
