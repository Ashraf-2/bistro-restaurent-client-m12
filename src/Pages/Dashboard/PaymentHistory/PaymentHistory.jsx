import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        //payments = []; means default value is 0, untill we recieve the data from the server.
        queryKey: ['pay', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user?.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-center font-bold text-3xl">Payment History</h2>
            <h2 className="text-center font-bold text-xl my-5">total Payment: {payments.length}</h2>

            <div className="overflow-x-auto max-w-2xl mx-auto my-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            payments.map((payment,index) =><tr key={payment._id}>
                            <th>{index+1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.transectionId}</td>
                            <td>{payment.status}</td>
                        </tr> )
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;