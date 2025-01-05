{/* faq type */}
type FAQType = {
    id: number,
    question: string,
    answer: string,
  }
  
  export const FaqData: FAQType[] = [
    {
      id: 0,
      question: "How do i book a vehicle?",
      answer: "Booking is simple! Select your vehicle, choose your dates, and complete the reservation online."
    },
    {
      id: 1,
      question: "What is the cancellation policy?",
      answer: "You can cancel up to 24 hours before your rental without any charge."
    },
    {
      id: 2,
      question: "Are there any additional fees?",
      answer: "All fees are included in the price displayed. No hidden costs."
    },
    {
      id: 3,
      question: "What if I do total damage to the car??",
      answer: "In case of total damage to the car, the client will be charged 10% of the current market value of the car if the damage is caused by his fault."
    },
    {
      id: 4,
      question: "Do You offer automatic cars?",
      answer: "Yes we have in all categories."
    },
  ];

  export default FaqData;