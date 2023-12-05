import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populerItems = data.filter(item => item.category === "popular")
                setMenu(populerItems)
                // console.log(data);
            })
    }, [])
    return (
        <section className="my-6">
            <div className="my-5">
                <SectionTitle
                    heading={"From Our Menu"}
                    subHeading={"From our items"}>
                </SectionTitle>
            </div>
            {/* <h2>hello</h2> */}
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;