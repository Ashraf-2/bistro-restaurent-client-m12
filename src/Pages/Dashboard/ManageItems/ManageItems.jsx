import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu,isLoading,refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleEdit = (item) => {
        console.log(item);
    }
    const handleDeleteItem = (item) => {
        console.log(item)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: `${item.name} is Deleted` ,
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }
    // loading spinner load
    if (isLoading) {
        return (
            <div className="min-h-screen text-center flex items-center justify-center ">
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span>
            </div>
        )
    }
    return (
        <div>
            {/* <h2 className="text-xl text-center">Mange Food Items</h2> */}
            <SectionTitle heading="manage all items" subHeading="Hurry Up"></SectionTitle>
            {/* table */}
            <div className="overflow-x-auto my-5 p-2 bg-pink-200 rounded-md">
                <table className="table table-zebra-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>Index</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr key={item._id} className="bg-base-100 text-center border-b-2">
                                <td>{index + 1}</td>
                                <td>
                                    <img className="w-24 rounded-lg" src={item.image} alt="food image" />
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => handleEdit(item)} className="btn btn-outline bg-emerald-400 border-none ">Update <FaEdit></FaEdit>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)} className="btn btn-outline bg-orange-300 border-none">Delete</button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;