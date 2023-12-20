import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <h2 className="text-3xl">Add Items Page</h2>
            <SectionTitle heading="Add an item" subHeading="What's new?"></SectionTitle>
            <div>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />
                    <select {...register("category")} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>What is the food cateogry</option>
                        <option value="salad">Salad</option>
                        <option value="Pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    <input type="submit"  className="btn btn-outline bg-orange-300"/>
                </form>
            </div>

        </div>

    );
};

export default AddItems;