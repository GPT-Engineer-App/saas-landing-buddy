import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaDesktop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Flex align="center" justify="space-between" wrap="wrap" py={20} px={[5, 10, 15]}>
        <VStack spacing={5} align="flex-start" w="full" maxW="lg">
          <Heading as="h1" size="2xl" fontWeight="bold">
            Revolutionize Your Business with Our SaaS Solution
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Elevate your workflow with our easy-to-use platform designed to increase productivity and streamline your operations.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
        <Box w="full" maxW="md" mt={[10, 0]}>
          <Image src="https://images.unsplash.com/photo-1630673348540-f48385105436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTYWFTJTIwcHJvZHVjdHxlbnwwfHx8fDE3MDk5NzMwMjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="SaaS Product" />
        </Box>
      </Flex>

      {/* Features Section */}
      <Box py={20} bg="gray.50">
        <Stack spacing={10} align="center" justify="center" textAlign="center">
          <Heading as="h2" size="xl">
            Features That Set Us Apart
          </Heading>
          <Flex wrap="wrap" justify="center" gap={10}>
            <FeatureBox icon={FaCloud} title="Cloud-Based" description="Access from anywhere, at any time, on any device." />
            <FeatureBox icon={FaDesktop} title="Desktop App" description="Native applications for Windows and MacOS platforms." />
            <FeatureBox icon={FaMobileAlt} title="Mobile Friendly" description="Seamless experience on smartphones and tablets." />
            <FeatureBox icon={FaTabletAlt} title="Optimized for Tablets" description="Customized layouts for larger touch screens." />
          </Flex>
        </Stack>
      </Box>
    </Container>
  );
};

const FeatureBox = ({ icon: Icon, title, description }) => {
  return (
    <VStack p={5} bg="white" shadow="md" borderRadius="lg" w={["full", "full", "sm"]} h="100%" spacing={5} align="center">
      <Icon size="3em" />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text color="gray.600" textAlign="center">
        {description}
      </Text>
    </VStack>
  );
};

export default Index;
