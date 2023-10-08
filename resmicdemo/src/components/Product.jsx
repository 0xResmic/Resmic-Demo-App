import React, { useState } from 'react'
import '../css/Product.css'
import {EVMConnect, Tokens, Chains} from 'resmic'
import shoe from '../assets/shoe.png'

export default function Product() {
    const [paymentStatus, setPaymentStatus] = useState(false);
  return (
    
    <div className='product'>
        <div className="header">
            <div className="product-name">
                <span>RobloX Runners</span>
            </div>
            <div className="product-img">
                <img src={shoe} alt="" />
            </div>
            <div className="product-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
            <div className="product-info">
                <span>Men's Sneakers, Casual Red Shoes for Men's & Boys</span>
            </div>
            <div className="product-price">
                <span>$100.00</span>
            </div>
        </div>
        <div className="footer">
        <EVMConnect  Address={"0x056397760b973BfB921Bc10Be9DA5034B1e921d7"} //Wallet address to receive funds
                Chains={[ Chains.Ethereum, Chains.Polygon, Chains.Goerli]} //Choose the blockchains to allow payments from
        	Tokens ={[Tokens.USDT,Tokens.ETH,Tokens.DAI]} //Choose the Tokens to accept payments from
                Amount={100} //Amount you want to receive in USD($)
                setPaymentStatus = {setPaymentStatus}
                noOfBlockConformation={5} //No. of blocks to wait for the payment conformation (Optional)
                Style = {{displayName: "Buy Now",
                    backgroundColor: "rgb(209,99,180)",
                    color: "#fff",
                    border: "none",
                    width:'50%',
                    boxSizing:'border-box',
                    padding: "1rem",
                    borderRadius: "8px",
                    fontSize: "1.2rem",
                    fontWeight:'400'
                }}
            />
        </div>
    </div>
  )
}
