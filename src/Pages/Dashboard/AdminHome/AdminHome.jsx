import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {

    const {user} = useAuth();

    return (
        <div>
            <h2 className="text-3xl text-center font-bold">Hi Welcome to your Admin panel</h2>

            
        </div>
    );
};

export default AdminHome;