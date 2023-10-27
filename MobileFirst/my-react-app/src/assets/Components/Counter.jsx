// import React from 'react'

const Counter = () => {
  return (
      <section className="counter-section">
          {counts.map((count)=>(
          <div key={count.text} className="counter">
              <h2>
                  {count.amount}
                  {count.suffix}
              </h2>
              <h4>{count.text}</h4>
          </div>
        ))}
              </section>
  )
}

export default Counter
const counts = [
    { amount: 15, text: 'Happy Customers', suffix: "K" },
    { amount: 150, text: 'Monthly Visitors', suffix: "K" },
    { amount: 15, text: 'Countries Worldwide', suffix: "" },
    { amount: 100, text: 'Top Partners', suffix: "+" },
];
