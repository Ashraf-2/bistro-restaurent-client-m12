import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";

import './featured.css';


const Featured = () => {
    return (
        <div className="featured_item bg-fixed text-white mt-10">
            <div className="bg-slate-900 bg-opacity-30 pt-5">
                <SectionTitle subHeading={"Check it out"} heading={"Featured Item"}></SectionTitle>
            </div>
            <div className="md:flex justify-center items-center pb-16 pt-10 px-20  bg-slate-900 bg-opacity-30">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, explicabo numquam vel aspernatur accusantium dolorum alias quidem, maiores eum est tempore tempora quae reprehenderit deleniti debitis impedit, dolorem quaerat quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis corporis accusamus, cum impedit aliquid quia deserunt incidunt illo tempore?</p>
                    <button className="btn btn-outline mt-5 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;