import { ScrollView } from "react-native";
import CategoryPill from "./CategoryPill";
import { categories } from "../../../data/products";

export default function CategoryList() {
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='mx-3 mt-5'>
            {
                categories.map((category)=>(
                    <CategoryPill category={category} key={category.id}/>
                ))
            }
        </ScrollView>
    )
} 