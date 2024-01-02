import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AdminHome = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            console.log(res.data)
            return res.data;
        }
    })
    if(isLoading)
    {
        return <span className="loading loading-spinner"></span>
    }
    return (
        <div>
            <h2 className="text-3xl text-center font-bold">Hi Welcome to your Admin panel</h2>
            <div className="stats shadow">

                <div className="stat place-items-center">
                    <div className="stat-title">Reveneu</div>
                    <div className="stat-value">{stats.revenue}</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">{stats.users}</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats.menuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;