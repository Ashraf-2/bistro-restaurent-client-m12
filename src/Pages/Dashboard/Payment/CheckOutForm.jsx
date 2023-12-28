import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();

    const [error,setError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transectionId, setTransectionId] = useState('');

    const [cart] = useCart();
    const TotalPrice = cart.reduce((total, item) => total + item.price, 0);

    const axiosSecure = useAxiosSecure();
    //fetch / load data from the backend server.
    useEffect(()=> {
        axiosSecure.post('/create-payment-intent', {price: TotalPrice})
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
        .catch(error => {
            console.log(error) 
        })
    }, [axiosSecure, TotalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return; //get back
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }

        //create a payment method with stripe.js API
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setError('')
            setSuccess(`Your payment successfull and payment id: "${paymentMethod.id}"`)
        }

        //confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'unknown',

                }
            }
        })
        if(confirmError){
            console.log("confirm Error",confirmError);  
        }
        else{
            // console.log("payment Intent: ",paymentIntent)
            if(paymentIntent.status === "succeeded"){
                // console.log('payment successfull and the transection id : ', paymentIntent.id)
                setTransectionId(paymentIntent.id)

                //now save the payment info in the database.
                const payment = {
                    email: user.email,
                    price: TotalPrice,
                    date: new Date(),    //utc date convert, "use moment.js"
                    cartIds: cart.map(item => item._id),
                    menuItemIds:cart.map(item => item.menuId),
                    status: 'pending',
                    transectionId: paymentIntent.id,

                }
                const res = axiosSecure.post('/payment', payment)
                console.log('payment saved: ',res)
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}>
                </CardElement>
                <button className="btn btn-primary my-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {
                    error?<p>
                        {error}
                    </p>:
                    <p>{success}</p>

                }
                {
                    transectionId && <p className="text-center text-xl my-5 font-semibold">Your transection Id: <span className="italic text-red-500">  {transectionId}</span></p>
                }
            </form>
        </div>
    );
};

export default CheckOutForm;