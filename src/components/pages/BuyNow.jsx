import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BuyNow = () => {
    const ecommerce = useSelector((state) => state.ecommerce);
    const isPresentInCart = (id) => {
        for (let i = 0; i < ecommerce.cart.length; i++) {
            if (ecommerce.cart[i] === id) return true;
        }
        return false;
    };
    return (
        <div className="w-full flex flex-col gap-2  ">
            <p className="box bg-slate-300 h-14 w-full flex items-center mt-4">ONLINE PAYMENT OPTIONS</p>
            <div className="mt-2 flex flex-col justify-center" >


                <button className=" cursor-pointer box border-y-[0.25px] border-black h-12 flex items-center">UPI (Pay via any App)</button>
                <button className=" cursor-pointer box border-y-[0.25px] border-black h-12 flex items-center">Credit/Debit Card</button>
                <button className=" cursor-pointer box border-y-[0.25px] border-black h-12 flex items-center">Wallets</button>
                <button className=" cursor-pointer box border-y-[0.25px] border-black h-12 flex items-center">Pay Later</button>
                <button className=" cursor-pointer box border-y-[0.25px] border-black h-12 flex items-center">EMI</button>
                <button className=" cursor-pointer box border-y-[0.25px] border-black h-12 flex items-center">Net Banking</button>

            </div>
            <div className="mt-2box bg-slate-300 h-10 w-full flex items-center mt-4">PAY ON DELIVERY OPTION</div>
            <div className="box border-y-[0.25px] h-12 flex items-center"><input type="radio" />Cash on Delivery (Cash/UPI)</div>

            <div className="box bg-slate-300 border-y-[0.25px] h-12 flex justify-between items-center">
                <div className=""><button>Have a Gift Card?</button></div>
                <div className="text-red-600">APPLY</div>
            </div>
            
            <div><div>PRICE DETAILS</div></div>
            <div className="flex justify-between items-center">
                
                <div>
                    <div>Total MRP</div>
                    <div>Platform Fee</div>
                    <div>Shipping Fee</div>
                </div>
                <div>
                    <div>${ecommerce.totalPrice}
                    </div>
                    <div>$0</div>
                    <div className="text-green-600">FREE</div>
                </div>

            </div>


            <div className="flex justify-around">
                <div><div className="flex justify-center items-center text-2xl font-semibold">
                    ${ecommerce.totalPrice}
                </div>
                <p className="text-red-600 text-sm font-bold">VIEW DETAILS</p>
                </div>

                <div className="flex justify-center">
                    <button className="bg-red-600 text-white cursor-pointer rounded-md mt-1 h-12 w-56">
                        PAY NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;
