import React from "react";
import { Box, SimpleGrid, Text, Button, Heading, Stack, VStack, List, ListItem, ListIcon, Divider } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const PricingTier = ({ title, price, description, features, isAnnual, annualPrice }) => {
  return (
    <VStack p={4} shadow="md" borderWidth="1px" borderRadius="lg" align="stretch" minWidth="320px" maxWidth="400px">
      <Heading size="lg" fontWeight="bold" as="h3" textAlign="center">
        {title}
      </Heading>
      <Text textAlign="center" color="gray.500">
        {price}
      </Text>
      <Text textAlign="center" fontSize="sm" color="gray.500" mb={4}>
        {isAnnual && `Save when billed annually ${annualPrice}`}
      </Text>
      <Text textAlign="center" mb={4}>
        {description}
      </Text>
      <Divider />
      <List spacing={3} my={3}>
        {features.map((feature, index) => (
          <ListItem key={index}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {feature}
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

const Pricing = () => {
  const tiers = [
    {
      title: "Personal (Free)",
      price: "Ideal for individual users or small teams",
      description: "The Personal tier provides basic project management features, collaboration tools, and access to the mobile app.",
      features: ["Basic project management features", "Collaboration tools", "Mobile app access"],
    },
    {
      title: "Pro ($149.99/month)",
      price: "Tailored for growing teams and businesses",
      description: "The Pro tier offers advanced project management and collaboration features, including customizable workflows, automation tools, and in-depth analytics.",
      features: ["Advanced project management", "Customizable workflows", "Automation tools", "In-depth analytics"],
      isAnnual: true,
      annualPrice: "$1,614.99/year",
    },
    {
      title: "Pro Plus ($349.99/month)",
      price: "The ultimate choice for large enterprises",
      description: "Enjoy all the features of the Pro tier, plus exclusive benefits such as enhanced security measures, premium integrations with leading platforms, and dedicated account management.",
      features: ["All features of the Pro tier", "Enhanced security measures", "Premium integrations", "Dedicated account management"],
      isAnnual: true,
      annualPrice: "$3,779.99/year",
    },
  ];

  return (
    <Box p={4}>
      <Button colorScheme="blue" mb={4} onClick={() => (window.location.href = "/")}>
        Go Home
      </Button>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
        {tiers.map((tier, index) => (
          <PricingTier key={index} {...tier} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Pricing;
