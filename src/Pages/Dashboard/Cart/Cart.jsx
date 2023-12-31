import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCart();
    // console.log(cart);
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate();

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data.deletedCount > 0)
                        {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
                    .catch(error => console.log(error))
            }
        });
    }
    return (
        <div>
            <div className="text-4xl font-bold text-left text-orange-300 my-5"><span className="mr-4 border-l-4 border-orange-300"></span>My Cart </div>
            <div className="flex justify-evenly items-center my-2">
                <h2 className="text-3xl font-bold">Total Items: {cart.length}</h2>
                <h2 className="text-3xl font-bold">Total Price: {totalPrice}</h2>


                <button onClick={() => {
                    if (cart.length > 0) {
                        navigate('/dashboard/payment')
                    }
                }} disabled={cart.length == 0} className="btn btn-outline bg-orange-300 text-2xl border-none font-bold">Pay </button>

            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-200 text-xl text-black">
                            <tr>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td><img src={item.image} className="w-20 rounded-lg" alt="item-image" /> </td>
                                    <td><p className="text-base">{item.name}</p></td>
                                    <td><p className="text-base">${item.price}</p></td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-red-400">
                                            <MdDeleteOutline className="text-3xl"></MdDeleteOutline>
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;