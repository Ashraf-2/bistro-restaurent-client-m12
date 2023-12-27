import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

//provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Make Your Payment" subHeading="Payment Gate Way"></SectionTitle>
            <div>
                <h2 className="text-2xl font-bold"> Payment </h2>
                <div className=" max-w-lg mx-auto my-10">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm></CheckOutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;