import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "How does Bottleyx's AI meal planning work?",
      answer:
        "Our AI analyzes your dietary preferences, ingredient availability, nutritional goals, and cooking skill level to generate personalized meal plans. The system learns from your feedback, continuously improving its recommendations based on your ratings and adjustments.",
    },
    {
      id: "item-2",
      question: "Can I use Bottleyx if I have dietary restrictions?",
      answer:
        "Absolutely! Bottleyx supports numerous dietary preferences and restrictions including vegetarian, vegan, keto, paleo, gluten-free, dairy-free, nut-free, and many more. You can set these preferences in your profile, and all recipes and meal plans will automatically adjust accordingly.",
    },
    {
      id: "item-3",
      question: "Does Bottleyx work without an internet connection?",
      answer:
        "While the full AI-powered experience requires an internet connection, Bottleyx does offer an offline mode that gives you access to your saved recipes, current meal plan, and shopping lists. Any changes made while offline will sync once you reconnect.",
    },
    {
      id: "item-4",
      question: "How does Bottleyx protect my data and privacy?",
      answer:
        "We take data privacy seriously. Your personal information and food preferences are encrypted and never sold to third parties. Our AI uses your data solely to improve your Bottleyx experience. You can review and delete your data at any time through your account settings.",
    },
    {
      id: "item-5",
      question: "Can I share my meal plans with family members?",
      answer:
        "Yes! Our Family Sharing feature allows you to share meal plans, recipes, and shopping lists with household members. Premium plans support multiple user profiles with individual preference settings, ideal for families with diverse dietary needs.",
    },
    {
      id: "item-6",
      question: "Will there be a subscription fee after the beta period?",
      answer:
        "Following our beta period, we plan to introduce tiered subscription options including a free basic plan and premium features. Beta users will receive special early-adopter pricing and additional benefits as a thank you for your support during our development phase.",
    },
  ];

  return (
    <div
      className="py-24 bg-gradient-to-b from-background to-kitchen-cream/20"
      id="faq"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to the most common questions about Bottleyx
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
