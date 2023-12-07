/* eslint-disable react/prop-types */
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
    console.log("items: ", items);
    return (
        <div className="my-16 w-9/12 mx-auto">
            <div className="grid md:grid-cols-2 gap-10 ">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-7">
                <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;