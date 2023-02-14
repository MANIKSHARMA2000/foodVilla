import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Utilities/CartSlice";
import { addToCart, decrement } from "../Utilities/helpers";
import Store from "../Utilities/Store";

const CartItem = ({ cartItem, updateParent }) => {
  const[count,setCount] = useState(1)
  const dispatch = useDispatch()
  console.log(cartItem);
  return (
    <div className="Item-info flex justify-between h-fit  items-center  mt-3">
      <div className="name w-1/2  ">
        <span className="text-[14px] text-[#282c3f]">{cartItem?.info?.name}</span>
        <p className="text-[10px] after:text-[10px]  after:font-[900] after:ml-[3px] after:text-[#fc8019] after:content-['>']">
          Customize
        </p>
      </div>
      <div className="btns flex  w-1/5 border-[#d4d5d9] border-[.5px]">
        <button
          className=" w-1/3 text-[20px] text-[#bebfc5]"
          onClick={() => {
           dispatch(removeFromCart(cartItem))
          }}
        >
          -
        </button>
        <div className="w-1/3 text-[#60b246] text-[12px] flex justify-center items-center ">
          {count}
        </div>
        <button
          className="w-1/3 text-[20px] text-[#60b246]"
          // onClick={() => {

          //   setCount((n) => n + 1);
          //   addToCart({
          //     dish: cartItem?.dish,
          //     restaurant: cartItem?.restaurant,
          //     qty: cartItem?.qty + 1,
          //   });
          //   updateParent();
          // }}
          onClick={()=>{
            setCount(n=>n+1)
            // dispatch(addToCart(cartItem))
          }}
        >
          +
        </button>
      </div>
      <div className="price w-1/5 flex justify-end  ">
        <p className="text-[#535665] text-[13px]">
          ₹{(cartItem?.info?.price / 100) * count}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
