/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items,title }) => {
    // console.log("items: ", items);
    return (
        <div className="my-16 w-9/12 mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-7">
                <Link to={`/orderFood/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;