'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is it safe for sensitive teeth?",
    answer: "Yes! Breylee Teeth Whitening Powder is formulated with gentle, natural ingredients, making it safe for most people with sensitive teeth and gums. We recommend starting with use every other day to see how your teeth react.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Many users report seeing a noticeable difference within the first week of consistent use. For deeper stains, optimal results are typically seen after 2-4 weeks.",
  },
  {
    question: "How often should I use it?",
    answer: "For best results, we recommend using the powder once per day, either in the morning or at night, as a replacement for your regular toothpaste. Once you achieve your desired shade, you can reduce use to 3-4 times a week for maintenance.",
  },
  {
    question: "Can this replace my regular toothpaste?",
    answer: "Absolutely. Our powder not only whitens but also cleans your teeth, protects your gums, and freshens your breath, providing all the benefits of regular toothpaste.",
  },
  {
    question: "What are the key ingredients?",
    answer: "The formula is powered by natural ingredients, including Pearl Essence for effective whitening and Angelica Dahurica Extract to help soothe and protect gums.",
  },
];

export default function Faq() {
  return (
    <section className="bg-secondary/50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Have questions? We have answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
