/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ foodItem }) => {
    const { _id,image, price, name, recipe } = foodItem;
    const {user} = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();

    const handleAddToCart = async (food) => {
        if(user && user.email){
            //TODO: send cart item to the database 
            console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }
            // axios.post('http://localhost:5000/carts',cartItem)  //previous version
            axiosSecure.post('/carts',cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId)
                {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "You cart this food item successfully!",
                        icon: "success"
                      });
                      refetch();
                }
            
            })
            .catch(error => console.log(error))
        }
        else{
            Swal.fire({
                title: "Unauthorized user",
                text: "Please Log in first!",
                icon: "error"
              });
            navigate('/login')
            
        }
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