import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import ProductImage from './components/productDetails/ProductImage'
import { products } from '../../data/products'
import { useRoute } from '@react-navigation/native'
import MiddleCard from './components/productDetails/MiddleCard'
import { ShoppingCart } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { getProductById } from '../../api/services/product.service'

export default function ProductDetail() {
    const route = useRoute()
    const { productId } = route.params
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setError(null)
                const data = await getProductById(productId)
                setProduct(data)
            } catch(err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchProduct()
    }, [productId])

    if(isLoading) {
        return (
            <View className='flex-1 items-center justify-center'>
                <ActivityIndicator size={"large"} />
            </View>
        )
    }

    if(error || !product) {
        return (
            <View className='flex-1 items-center justify-center px-6'>
                <Text className='text-red-500 text-center'>{Error || "Product not found"}</Text>
            </View>
        )
    }
    return (
        <View className="flex-1">
            <ProductImage product={product}/>
            <MiddleCard product={product} />
            <Text numberOfLines={3} className='text-gray-400 mx-10 mt-10 text-xl'>
                {product.description}
            </Text>
            <Text className='text-2xl mx-10 mt-20'>Price: ₹{product.price}</Text>
            <TouchableOpacity className='flex-row items-center justify-center h-16 bg-black mx-8 rounded-full mt-5 gap-5'>
                <ShoppingCart size={24} color={"white"} strokeWidth={2.6}/>
                <Text className='text-white text-lg font-bold'>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    )
}