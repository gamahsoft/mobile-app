import { FlatList, useWindowDimensions } from "react-native";
import { useQuery } from "@tanstack/react-query";

// import products from "../assets/products.json";
import ProductListItem from "@/components/ProductListItems";
import { Button, ButtonText } from "@/components/ui/button";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
// import { useEffect } from "react";
import { listProducts } from "@/api/products";
import { ActivityIndicator } from "react-native-paper";

export default function HomeScreen() {
  //old way of retrieving data on page load
  // const [products, setProducts] = useState()

  // useEffect(() =>{
  //   const fetchProducts = async() => {
  //     const data = await listProducts()
  //     setProducts(data);
  //   }
  // })

  // Tanstack way of retrieving and loading data on page load
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: listProducts,
  });
  //   const { width } = useWindowDimensions();
  //   const numColumns = width > 700 ? 3 : 2;
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error fetching products</Text>;
  }

  return (
    <FlatList
      key={numColumns}
      data={data}
      numColumns={numColumns}
      contentContainerClassName="gap-2 bg-red-300 max-w[960px] mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
