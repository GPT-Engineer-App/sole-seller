import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    description: "Comfortable and lightweight running shoes.",
    price: "$120",
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXN8ZW58MHx8fHwxNzE1NjQ2MjQ1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Basketball Shoes",
    description: "High-performance shoes for basketball players.",
    price: "$150",
    image: "https://images.unsplash.com/photo-1533681018184-68bd1d883b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwc2hvZXN8ZW58MHx8fHwxNzE1NjQ2MjQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    description: "Stylish and comfortable sneakers for everyday wear.",
    price: "$100",
    image: "https://images.unsplash.com/photo-1512640122685-e77ab16ad8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzbmVha2Vyc3xlbnwwfHx8fDE3MTU2NDYyNDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const ProductCard = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
    <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
    <VStack spacing={2} mt={4} align="start">
      <Heading size="md">{product.name}</Heading>
      <Text>{product.description}</Text>
      <Text fontWeight="bold">{product.price}</Text>
      <HStack spacing={2}>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
          Add to Cart
        </Button>
        <IconButton aria-label="Add to Wishlist" icon={<FaHeart />} colorScheme="pink" />
      </HStack>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={8} textAlign="center">
        Shoe Store
      </Heading>
      <VStack spacing={8}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
