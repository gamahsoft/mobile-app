// import {Text} from 'react-native'
import {Link} from 'expo-router'
import { Card } from '@/components/ui/card'
import { Image } from '@/components/ui/image'
import { Heading } from '@/components/ui/heading'
import { VStack } from '@/components/ui/vstack'
import { Text } from '@/components/ui/text'
import { Box } from '@/components/ui/box'
import { Button,ButtonText } from '@/components/ui/button'
import { Pressable } from 'react-native'

export default function ProductListItem({product}) {
    // return <Text className='text-red-700 text-3xl'>{product.name}</Text>
    return (
    <Link href={`/product/${product.id}`} asChild>
    <Pressable className='flex-1'>
    <Card className="p-5 rounded-lg max-w-[360px] flex-1">
        
    <Image
      source={{
        uri: product.image,
      }}
      className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
      alt= {`${product.name} image`}
      resizeMode="contain"
    />
    <Text className="text-sm font-normal mb-2 text-typography-700">
      {product.name}
    </Text>
    {/* <VStack className="mb-6"> */}
      <Heading size="md" className="mb-4">
        ${product.price}
      </Heading>
      {/* <Text size="sm">
       {product.description}
      </Text> */}
    {/* </VStack> */}
    {/* <Box className="flex-col sm:flex-row">
      <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
        <ButtonText size="sm">Add to cart</ButtonText>
      </Button>
      <Button
        variant="outline"
        className="px-4 py-2 border-outline-300 sm:flex-1"
      >
        <ButtonText size="sm" className="text-typography-600">
          Wishlist
        </ButtonText>
      </Button>
    </Box> */}
  </Card>
  </Pressable>
  </Link>
)}