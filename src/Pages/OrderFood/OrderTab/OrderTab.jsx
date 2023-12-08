/* eslint-disable react/prop-types */
import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                // items.map(foodItem => <FoodCard key={foodItem._id} foodItem={foodItem}></FoodCard>)
                items.map(foodItem => <FoodCard key={foodItem._id} foodItem={foodItem}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;