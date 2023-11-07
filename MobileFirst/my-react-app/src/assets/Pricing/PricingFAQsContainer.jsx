import ContainerRow from "./ContainerRow";

const PricingFAQsContainer = () => {
  const faqData = [
    {
      title: "Work better together",
      content: [
        "Met minim Mollie non desert",
        "Alamo est sit cliquey dolor do met sent.",
        "RELIT official consequent door ENIM RELIT",
        "Mollie. Excitation venial consequent",
        "sent nostrum met.",
      ],
    },
    {
      title: "OpenType features and Variable fonts",
      content: ["Met minim Mollie non desert", "Alamo est sit cliquey dolor do met sent."],
    },
    // Add more FAQ data here...
  ];

  return (
    <div className="relative bg-light-text-color w-[90rem] h-[64.81rem] overflow-hidden shrink-0 text-left text-[2.5rem] text-text-color font-h6">
      <div className="absolute top-[0rem] left-[calc(50% - 528px)] flex flex-col items-center justify-start py-[5rem] px-[0rem] gap-[3.13rem]">
        <div className="w-[65.63rem] overflow-hidden flex flex-col items-center justify-start py-[2.81rem] px-[0rem] box-border">
          <div className="w-[40.69rem] overflow-hidden flex flex-col items-center justify-start">
            <div className="w-[37.94rem] overflow-hidden flex flex-col items-center justify-start gap-[0.63rem]">
              <b className="relative tracking-[0.2px] leading-[3.13rem]">
                Pricing FAQs
              </b>
              <div className="relative text-[1.25rem] tracking-[0.2px] leading-[1.88rem] text-second-text-color text-center inline-block w-[34.5rem]">
                <p className="m-0">{`Problems trying to resolve the conflict between `}</p>
                <p className="m-0">the two major realms of Classical physics</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center justify-start gap-[1.88rem] text-[1rem]">
          {faqData.map((item, index) => (
            <ContainerRow key={index} title={item.title} content={item.content} />
          ))}
        </div>

        <div className="md:hidden flex flex-col items-center justify-start gap-[1.88rem] text-[1rem]">
          {faqData.map((item, index) => (
            <ContainerRow key={index} title={item.title} content={item.content} />
          ))}
        </div>

        <div className="relative text-[1.25rem] tracking-[0.2px] leading-[1.88rem] text-second-text-color text-center inline-block w-[34.5rem]">
          Haven’t got your answer? Contact our support
        </div>
      </div>
    </div>
  );
};

export default PricingFAQsContainer;
