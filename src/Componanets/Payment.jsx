import React, { useContext, useState } from "react";
import { ProductContext } from "../ContextProvider/ContexProvider";
import axios from "axios";

export const Payment = () => {
  const { totalPrice, email,cartProduct } = useContext(ProductContext);
  const [selectType, setSelectType] = useState("debitcard");
  const [storeDetails,setStoreDetails] = useState({
    useremail: email,
    productName: cartProduct.map(item=> item.name),
  });
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    holderName: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
  });

const SaveDatatoTheDataBash = async (data) =>{
    await axios.post("http://localhost:8080/payment/history",data).then((res) =>{
        alert(res.data.message);
    })
}


  const handleChange = (e) => {
    let { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const MakePayment = async (paymentData) =>{
    console.log({paymentData});
    await axios.post("http://localhost:8080/payment",paymentData).then(res=>{
     if(res?.statusText=="OK"){
        const {id,amount} = res.data.paymentIntent;
        const addedData = {...storeDetails,transaction_id:id,amount}
        
        SaveDatatoTheDataBash(addedData)
     }

   });
  }

  const handlePament = (e) => {
    const { name } = e.target;

    if (name == "upi") {
       
    } else {
        if (cardDetails.holderName && cardDetails.cardNumber && cardDetails.cvv && cardDetails.expiryDate) {
          
            let sharedData = {...cardDetails,amount:totalPrice}
            MakePayment(sharedData)
        }else{
            alert("Please fill all the details")
        } 
       
    }
  };

  return (
    <div>
      <div className="select-method">
        <select
          style={{ border: "1px solid black", borderRadius: "4px" }}
          name=""
          id=""
          value={selectType}
          onChange={(e) => setSelectType(e.target.value)}
        >
          <option value="">Select payment method</option>
          <option value="debitcard">Through Debit card</option>
          <option value="upi">Through UPI</option>
          <option value="scanner">Through QR Scaner</option>
        </select>
      </div>
      <div className="show-method">
        {selectType == "scanner" ? (
          <>
            <div>
              <img src="" alt="qr scanner" />
            </div>
          </>
        ) : selectType == "upi" ? (
          <>
            <div className="flex flex-col gap-2 w-[40%] m-auto mt-4">
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="Enter UPI ID"
                style={{ border: "1px solid black", borderRadius: "4px" }}
              />
              <button
                onClick={handlePament}
                name="upi"
                style={{ border: "1px solid black", borderRadius: "4px" }}
              >
                Pay {totalPrice}
              </button>
            </div>
          </>
        ) : selectType == "debitcard" ? (
          <>
            <div className="flex flex-col gap-2 w-[40%] m-auto mt-4">
              <input
                onChange={handleChange}
                value={cardDetails.cardNumber}
                name="cardNumber"
                type="text"
                placeholder="Enter Card Number"
                style={{ border: "1px solid black", borderRadius: "4px" }}
              />
              <input
                onChange={handleChange}
                value={cardDetails.holderName}
                name="holderName"
                type="text"
                placeholder="Enter Holder Name"
                style={{ border: "1px solid black", borderRadius: "4px" }}
              />
              <input
                onChange={handleChange}
                value={cardDetails.cvv}
                name="cvv"
                type="text"
                placeholder="Enter CVV"
                style={{ border: "1px solid black", borderRadius: "4px" }}
              />
              <input
                onChange={handleChange}
                value={cardDetails.expiryDate}
                name="expiryDate"
                type="text"
                placeholder="Enter Expiry Date 24/04/2030"
                style={{ border: "1px solid black", borderRadius: "4px" }}
              />
              <button
                onClick={handlePament}
                name="card"
                style={{ border: "1px solid black", borderRadius: "4px" }}
              >
                Pay {totalPrice}
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>Please select a valid payment method</h1>
          </>
        )}
      </div>
    </div>
  );
};
