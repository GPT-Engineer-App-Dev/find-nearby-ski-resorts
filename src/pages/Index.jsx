import { Container, VStack, Input, Button, Text, Box, Heading, List, ListItem, ListIcon, useMediaQuery } from "@chakra-ui/react";
import { FaSnowflake } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [search, setSearch] = useState("");
  const [resorts, setResorts] = useState([]);

  const handleSearch = () => {
    // Placeholder for search functionality
    setResorts(["Ski Resort 1", "Ski Resort 2", "Ski Resort 3"]);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box w="full" p={4} bg="blue.500" color="white">
          <Heading size={isLargerThan768 ? "2xl" : "lg"}>Discover Ski Resorts in Sweden</Heading>
        </Box>
        <Input
          placeholder="Enter a location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="lg"
        />
        <Button colorScheme="blue" onClick={handleSearch}>Search</Button>
        <List spacing={3}>
          {resorts.map((resort, index) => (
            <ListItem key={index}>
              <ListIcon as={FaSnowflake} color="blue.500" />
              {resort}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;