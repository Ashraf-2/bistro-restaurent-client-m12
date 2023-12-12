
const FoodCard = ({ foodItem }) => {
    const { _id,image, price, name, recipe } = foodItem;
    const handleAddToCart = (food) => {
        console.log(food)
    }
    return (
        <div className="card card-compact w-96 bg-slate-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 p-1 rounded-md">${price}</p>
            <div className="card-body flex flex-col justify-center items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=> {handleAddToCart(foodItem)}} className="btn btn-outline bg-slate-200 text-yellow-600 focus:text-red-500 mt-5 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;