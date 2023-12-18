import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',{
                headers:{
                    authorization: `Bearer: ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })
    const handleDelete = (user) => {
        console.log(user._id);
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            console.log("user deleted successfuuly.")
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

    const handleMakeAdmin = (user) => {
        console.log(user._id);
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        title: `${user.name} is an Admin now`,
                        text: "User roll has been updated as admin.",
                        icon: "success",
                        timer: 1500,
                    });
                    refetch();
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-2xl">All users: { }</h2>
                <h2 className="text-2xl">Total users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td onClick={() => handleMakeAdmin(user)}>
                                    {
                                        user.role === "admin" ? "Admin" : <button className="btn btn-ghost">Make Admin</button>
                                    }
                                </td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-outline bg-orange-400 text-white">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;