import { GoLocation } from "react-icons/go";
import { Box, Flex, Text, Spacer,Tag, Button  } from '@chakra-ui/react'
import { Link } from "react-router-dom";
export function ProductItems (product){
    return (
        <Box 
        pd={4} 
        m={4} 
        borderRadius='lg' 
        bg='gray.100'>
        <Flex >
          <Text fontSize='2x1'>
            Nombre: <strong>{product.name}</strong>
          
          </Text>
          <Spacer/>
          <Tag value='outline' p={4}  colorScheme={product.stock ? "green" : "red"}>
            {product.stock ? "En stock": "Sin stock"}
            </Tag>
        </Flex>
         <Flex align={"center"}>
          <GoLocation/>
          <Text fontSize="sm" ml={1} color="black" fontWeight="bold">
            {product.city}
          </Text>
         </Flex>
         <Link to={'/details'}> 
         <Button mt={4} m={1} colorScheme='purple'>Ver Detalles</Button>
         </Link>
        </Box>
    )
}