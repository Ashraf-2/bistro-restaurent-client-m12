import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMGAE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit } = useForm();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        //1. upload the image to imagbb and then get the link and send it to server
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': "multipart/form-data"
            }
        })
        console.log(res.data)
        console.log("image url: ",res.data.data.display_url)
        if(res.data.success){
            //now send the image url to the database
            const menuItem = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category,
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // now use axiosSecure 
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                //show succeess alert
                console.log("your item added successfully");
                Swal.fire({
                    position: "top-right",
                    title: "Food Added successfull!",
                    icon: "success",
                })
            }
        }
    }
    return (
        <div>
            <h2 className="text-3xl">Add Items Page</h2>
            <SectionTitle heading="Add an item" subHeading="What's new?"></SectionTitle>
            <div className="p-5 bg-gray-200">
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register("name")} type="text" className="w-full px-2 input input-bordered" placeholder="Recipe Name " />
                    </div>
                    <div className="flex flex-row">
                        {/* category */}
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue="default" {...register("category")} className="select select-bordered w-full ">
                                <option disabled value="default">Cateogry</option>
                                <option value="salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" {...register("price")} placeholder="price" className="input input-bordered px-2 w-full" />
                        </div>
                    </div>
                    {/* recipe detail */}
                    <div>
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        {/* <input type="text" className="input input-bordered px-2 w-full" placeholder="Recipe Details" /> */}
                        <textarea {...register('recipe')}
                            className="textarea textarea-bordered w-full"
                            placeholder="Recipe Detail"
                        ></textarea>
                    </div>
                    {/* file input */}
                    <div className="my-3">
                        <input {...register("image")} type="file" className="file-input file-input-bordered" />
                    </div>
                    <div className="mt-4">

                        <input type="submit" value="Add Item" className="btn btn-outline border-none px-10 text-base bg-orange-300 " />

                    </div>
                </form>
            </div>

        </div>

    );
};

export default AddItems;