import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
   
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');
    
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
                    popularMenu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;