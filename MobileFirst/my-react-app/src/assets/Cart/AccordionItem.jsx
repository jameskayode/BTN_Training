import React from 'react'

const AccordionItem = ({title, children}) => {
    const [active, setActive] = useState(false)
  return (
    <div>

  <div className="flex- w-80 h-16">
    <div className="flex flex-col flex-shrink-0 justify-center w-80 h-8 text-black font-['Montserrat'] text-xs font-semibold leading-[210%]">Country</div>
    <div className="flex-shrink-0 w-80 h-9 rounded border border-[#a2a6b0] bg-white" />
    <div className="flex flex-col flex-shrink-0 justify-center w-72 h-10 text-black font-['Montserrat'] text-xs font-light leading-5">Australia</div>
    <svg width={13} height={15} viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.99365 5.76929L4.99365 7.76929L2.99365 5.76929" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </div>
  <div className="flex flex-col flex-shrink-0 justify-center items-start w-80 h-16">
    <div className="flex flex-col flex-shrink-0 justify-center w-80 h-8 text-black font-['Montserrat'] text-xs font-semibold leading-[210%]">State/Province</div>
    <div className="flex-shrink-0 w-80 h-9 rounded border border-[#a2a6b0] bg-white" />
  </div>
  <div className="flex flex-col flex-shrink-0 justify-center items-start w-80 h-16">
    <div className="flex flex-col flex-shrink-0 justify-center w-80 h-8 text-black font-['Montserrat'] text-xs font-semibold leading-[210%]">Zip/Postal Code</div>
    <div className="flex-shrink-0 w-80 h-9 rounded border border-[#a2a6b0] bg-white" />
  </div>
  <div className="flex-shrink-0 w-80 h-20">
    <div className="flex flex-col flex-shrink-0 justify-center w-80 h-3.5 text-black font-['Montserrat'] text-xs font-semibold leading-[210%]">Standard Rate</div>
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={9} cy={9} r={8} fill="white" stroke="#0156FF" strokeWidth={2} />
      <circle cx={9} cy={9} r={5} fill="#0156FF"/>
    </svg>

    <button type='radio' className="flex-shrink-0 w-72 h-14 text-black font-['Montserrat'] text-xs leading-5">Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</button>
  </div>
  <div className="flex-shrink-0 w-80 h-20">
    <div className="flex flex-col flex-shrink-0 justify-center w-80 h-3.5 text-black font-['Montserrat'] text-xs font-semibold leading-[210%]">Pickup from store</div>
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={9} cy={9} r={8} fill="white" stroke="#0156FF" strokeWidth={2} />
    </svg>
    <div className="flex-shrink-0 w-72 h-14 text-black font-['Poppins'] text-xs leading-5">1234 Street Adress, City Address, 1234</div>
  </div>
    </div>
  )
}

export default AccordionItem
