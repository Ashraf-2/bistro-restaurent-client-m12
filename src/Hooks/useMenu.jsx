import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    // useEffect(() => {
    //     fetch('https://bistro-boss-server-three-nu.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setMenu(data);
    //             setIsLoading(false);
    //         })
    //         // fetch('')
    // }, [])

    const {refetch,isLoading,data: menu = []} = useQuery({
        queryKey: ["menu"],
        queryFn: async() => {
            const res = await axiosSecure.get('/menu')
            return res.data;
        }
    });
    return [menu,isLoading,refetch];
};

export default useMenu;