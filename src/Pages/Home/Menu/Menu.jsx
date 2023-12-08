import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import menuImg from "../../../assets/menu/menu-bg-img.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
    // console.log("menuImg", menuImg);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* cover picture of the page */}
            <Cover img={menuImg} title="our menu" subTitle="Would you like to try a dish?"></Cover>
            {/* section "offer" */}
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            
            {/* section "dessert" */}
            <Cover img={dessertImg} title="DESSERTS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <MenuCategory title="dessert" items={dessert}></MenuCategory>
            
            {/* section "pizza" */}
            <Cover img={pizzaImg} title="PIZZA" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <MenuCategory title="pizza" items={pizza}></MenuCategory>
            
            {/* section "salad" */}
            <Cover img={saladImg} title="SALADS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <MenuCategory title="salad" items={salad}></MenuCategory>

            {/* section "soup" */}
            <Cover img={soupImg} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="SOUPS"> </Cover>
            <MenuCategory title="soups" items={soup}></MenuCategory>


        </div>
    );
};

export default Menu;