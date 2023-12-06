import React from 'react'
import Header from '../assets/Components/Header'
import FooterHead from '../assets/Components/FooterHead'
import NewFooter from '../assets/Components/NewFooter'
import ContactBanner from '../assets/Components/Contact/ContactBanner'
import ContactBody from '../assets/Components/Contact/ContactBody'

const Contact = () => {
  return (
    <>
      <Header/>

        {/* <ContactBody/> */}
      <ContactBanner/>
      

      <FooterHead/>
      <NewFooter/>
      <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide whitespace-nowrap justify-center bg-neutral-50 self-stretch w-full px-16 py-6 items-start max-md:max-w-full max-md:pl-8 max-md:pr-5">
          Made With Love By Finland All Right Reserved{" "}
        </div>
    </>
  )
}

export default Contact
