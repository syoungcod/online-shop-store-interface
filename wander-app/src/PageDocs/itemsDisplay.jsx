import style from './styleSheets/Items.module.css'
import { useState } from 'react'

function ItemsDisplay(props){
    const [BtnState,newBtnState] = useState({display:"none"});
    const [Qvalue, newQvalue] = useState("");
    const [cartContent, newContent] = useState([]);

    //handling add to cart button pop up
    function btnPopUp(){
        newBtnState(f=>f={display:"flex"})
    }

    //getting value
    const HandleChange = event => {
        newQvalue(event.target.value);
    };

    //add cart functionality 
    function btnfunction(){
        newBtnState(n=>n={display:"none"})//button hide
        //
        const price = Number(props.price);
        const Quantity = Number(Qvalue);
        const TotalPrice = price * Quantity;
        const OrderInfo = `You ordered: ${props.name} Quantity:${Quantity} Price: Mwk${TotalPrice}`;
        newContent(n=>n=OrderInfo); 
        if(Quantity == 0){
                props.conts(c=>c=`Quantity was not chosen for:${props.name}`)
            }
            else if(Quantity != 0){
                props.conts(c=>c=cartContent)
                console.log(cartContent);
            }
      
    }

    return(
        <>
            <div className={style.mainContainer}>
                <div className={style.itemContainer}>
                    <img className={style.picture} onClick={btnPopUp} src={props.image1} alt={`item number ${props.itemNum}`} width="250px" height="200px" />
                    <p className={style.itemName}>{props.name}</p>
                    <p className={style.itemDescription}>{props.currency} {props.price}</p>
                    <div style={BtnState} className={style.btnContainer}>
                        <input onChange={HandleChange} value={Qvalue} type='number' min={0} max={1000}  className={style.cartInput} />
                        <button onClick={btnfunction} className={style.cartAddBtn}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}




export default ItemsDisplay