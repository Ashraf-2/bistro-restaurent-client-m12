import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMenu(data);
                setIsLoading(false);
            })
    }, [])
    return [menu,isLoading];
};

export default useMenu;