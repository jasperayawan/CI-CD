import React from 'react'

const PageContainer = ({ children }) => {
  return (
    <div className='px-[15px] mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]'>{children}</div>
  )
}

export default PageContainer