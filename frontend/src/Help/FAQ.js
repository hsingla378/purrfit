import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function FAQ() {
  const faqList = [
    {
      question: "Can I use PurrFit for free?",
      answer: "Yes, all our current features are free!",
    },
    {
      question: "Can I change bot’s prefix?",
      answer:
        "Unfortunately, the bot now uses Discord slash commands instead of prefixes. But you can set aliases for your favorite commands as an alternative.",
    },
    {
      question: "How do I change my notification preference?",
      answer:
        "You can enter /preferences in server or visit your Dashboard to change your notification preferences.",
    },
    {
      question: "How can I find out my current rank and activity history?",
      answer:
        "You can enter /profile @username in server or visit your Dashboard to view them.",
    },
  ];

  return (
    <Box
      mt={16}
      color={"gray.400"}
      fontSize={{ base: "sm", sm: "lg" }}
      lineHeight={"1.8em"}
    >
      <Accordion allowToggle>
        {faqList.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              my={4}
              border={"none"}
              bg={"#303130"}
              rounded={"2xl"}
              p={3}
              style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
            >
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={"gray.200"}
                    fontSize={"lg"}
                    fontWeight={500}
                  >
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
}
