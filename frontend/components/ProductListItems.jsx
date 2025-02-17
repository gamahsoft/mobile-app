import {Text} from 'react-native'

export default function ProductListItem({product}) {
    return <Text className='text-red-700 text-3xl'>{product.name}</Text>

}