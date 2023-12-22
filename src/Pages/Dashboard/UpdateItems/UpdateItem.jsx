import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMGAE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const { _id, price, recipe, name, image, category } = useLoaderData();
    const axiosPublic = useAxiosPublic();
    // console.log(item);
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = { image: data.image[0] }
        const response = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': "multipart/form-data"
            }
        })
        // console.log(response.data)
        console.log("image url: ",response.data.data.display_url)

        if (response.data.success) {
            const UpdateItem = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category,
                recipe: data.recipe,
                image: response.data.data.display_url
            }
            console.log(UpdateItem);
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, UpdateItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                //show twist
                Swal.fire({
                    position: 'top-right',
                    icon: "success",
                    title: "food item updated successfully",
                    timer: 1500,
                })
            }
        }

    }
    return (
        <div>
            <SectionTitle heading="Update Item" subHeading="Reshape your food item"></SectionTitle>
            <div className="p-5 bg-gray-200">
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* recipe name */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Update Recipe Name*</span>
                        </label>
                        <input {...register("name")} defaultValue={name} type="text" className="w-full px-2 input input-bordered" placeholder="Recipe Name " />
                    </div>

                    {/* category and price */}
                    <div className="flex flex-row gap-8">
                        {/* category */}
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Update Category</span>
                            </label>
                            <select defaultValue={category} {...register("category")} className="select select-bordered w-full ">
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
                                <span className="label-text">Update Price</span>
                            </label>
                            <input defaultValue={price} type="number" {...register("price")} placeholder="price" className="input input-bordered px-2 w-full" />
                        </div>
                    </div>
                    {/* recipe detail */}
                    <div>
                        <label className="label">
                            <span className="label-text">Update Recipe Details</span>
                        </label>
                        {/* <input type="text" className="input input-bordered px-2 w-full" placeholder="Recipe Details" /> */}
                        <textarea defaultValue={recipe} {...register('recipe')}
                            className="textarea textarea-bordered w-full"
                            placeholder="Recipe Detail"
                        ></textarea>
                    </div>
                    {/* file input */}
                    <div className="my-3">
                        <input {...register("image")} type="file" className="file-input file-input-bordered" />
                    </div>
                    {/* submit button */}
                    <div className="mt-4">

                        <input type="submit" value="Add Item" className="btn btn-outline border-none px-10 text-base bg-orange-300 " />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;