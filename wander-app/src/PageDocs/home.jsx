import { useState } from 'react'
import style from './styleSheets/home.module.css'
import ItemsDisplay from './itemsDisplay'
import NavPanel from './NavPanel'
//images import
import cloth1 from './PhotoMedia/blue-t-shirt.png';
import cloth2 from './PhotoMedia/black-front-sweater.png';
import cloth3 from './PhotoMedia/blue-dress-sleeve-boy-clothing.png'
import cloth4 from './PhotoMedia/top-long-casual-beautiful-sleeve.jpg'
import cloth5 from './PhotoMedia/still-life-rendering-jackets-display (1).png'
import cloth6 from './PhotoMedia/trendy-top-design-mockup-presented-wooden-hanger.png'
import cloth7 from './PhotoMedia/top-long-casual-beautiful-sleeve.jpg'
import cloth8 from './PhotoMedia/still-life-rendering-jackets-display.png'

function Home(){

    //home toggle
    const[cartClosed,cartOpened] = useState({display:"none"});
    const[panelClosed,panelOpened] = useState({display:"none"});
    const [cartContents, newCartContents] = useState(<p className={style.cartMessage}>No Items In Here</p>);
    //functions to handle opening and closing of the cart section
    function openCart(){
       cartOpened(c=>c={display:"flex"})
    }
    function closeCart(){
        cartOpened(c=>c={display:"none"})
    }
    //pannel toggle
    function openPanel(){
        panelOpened(p=>p={display:"flex"})
    }
    function closePanel(){
        panelOpened(p=>p={display:"none"})
    }
   
 
    return(
        <>
            <div className={style.mainDiv}>
                <div className={style.header}>

                   <p className={style.navigation} onClick={openPanel}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                   </p>
                    <p className={style.panelClose} style={panelClosed}  onClick={closePanel}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </p>

                    <h2>SHOP STORE</h2>
                    <p onClick={openCart} className={style.SVG}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>
                    </p>
                </div>
               
                <div style={panelClosed} className={style.navPanel}>{<NavPanel/>} </div>

                <div className={style.homeContainer}>
                {/*<ItemsDisplay itemNum={1} image1={cloth1} currency="Mwk" name="Breeze shirt" price={27000} />*/}
                    {<ItemsDisplay conts={newCartContents} itemNum={1} image1={cloth1} currency="Mwk" name="Blue ocean t-shirt" price={27000} />}
                    {<ItemsDisplay conts={newCartContents} itemNum={8} image1={cloth5} currency="Mwk" name="divion leather Jacket" price={22000} />}
                    {<ItemsDisplay conts={newCartContents} itemNum={3} image1={cloth8} currency="Mwk" name="Still life Jacket" price={31000} />}
                    {<ItemsDisplay conts={newCartContents} itemNum={2} image1={cloth2} currency="Mwk" name="Black sweater" price={28000} />}
                    {<ItemsDisplay conts={newCartContents} itemNum={4} image1={cloth3} currency="Mwk" name="Spirit of design" price={25000} />}
                    {<ItemsDisplay conts={newCartContents} itemNum={5} image1={cloth6} currency="Mwk" name="Trendy Top" price={26000} />}
                    {<ItemsDisplay conts={newCartContents} itemNum={7} image1={cloth4} currency="Mwk" name="Divon cloth" price={21000} />}
                </div>
                <div className={style.cartMainContainer} style={cartClosed}>
                    <p className={style.cart}>CART</p>
                    <div className={style.closer} onClick={closeCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </div>
                    <div className={style.cartContainer}>
                        <p className={style.cartCont}>{cartContents}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home