import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad','pizza','dessert','soups','drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    // console.log(category);
    // filter food item by category.
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food" subTitle="Would you like to try a dish?"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;