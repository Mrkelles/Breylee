import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Many users report seeing a noticeable difference in as little as one week of consistent use. For deeper stains, optimal results are typically achieved within 2-3 weeks.",
  },
  {
    question: "Is it safe for sensitive teeth and gums?",
    answer: "Yes! Our formula is made with natural ingredients and designed to be gentle. It whitens without causing sensitivity, unlike many harsh chemical treatments.",
  },
  {
    question: "How do I use the powder?",
    answer: "Slightly wet your toothbrush, dip it into the powder, and brush your teeth gently for 2 minutes. Rinse thoroughly. Use once per day, preferably in the evening.",
  },
  {
    question: "Can I use it with an electric toothbrush?",
    answer: "Absolutely. The powder works effectively with both manual and electric toothbrushes. Just ensure you use gentle pressure.",
  },
  {
    question: "How long will one jar last?",
    answer: "With daily use, one jar of our teeth whitening powder typically lasts for about 1-2 months, making it a very cost-effective solution for a brighter smile.",
  },
];

export function Faq() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We have answers. Here are some of the most common inquiries about our product.
          </p>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
