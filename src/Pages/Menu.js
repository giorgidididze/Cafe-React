import React, {useState} from 'react';
import BreadBasket from '../image/Bread Basket.jpg';
import HoneywithFruits from '../image/Honey Almond Granola with Fruits.avif';
import BelgianWaffle from '../image/Belgian Waffle.jpg';
import Scrambledeggs from '../image/Scrambled eggs.jpg';
import BlueberryPancakes from '../image/Blueberry Pancakes.jpg';

import Coffee from '../image/Coffee.png';
import Chocolato from '../image/Chocolato.jpg';
import Corretto from '../image/Corretto.jpg';
import Icedtea from '../image/Iced tea.jpg';
import Soda from '../image/Soda.jpg';

function Menu () {
  const [show, setShow]=useState(false)


  const eatHandler=(e)=>{
      setShow(false)
   }
  
   const drinkHandler=(e)=>{
    setShow(true)
   }


  
    const initialNum = 0;
    const [num, setNum] = React.useState(initialNum);
  
    const IncrementByFive = () => {
      for (let i = 0; i < 5; i++) {
        setNum((prevNum) => prevNum + 1);
      }
    }
  <button onClick={IncrementByFive}></button>
 

  return (
    <div>
        
      <div className="menu">
    <div className="menus">THE MENU</div>
    <p>The amount to be paid is: {num} <button type='button' className='menubut' onClick={() => setNum(initialNum)}>Reset</button></p>
    <div className="menu-card">
      <button onClick={()=>eatHandler()}>
        <div class="eat-card">Eat</div>
      </button>
      <button onClick={()=>drinkHandler()} >
        <div className="drink-card">Drink</div>
      </button>
    </div>
    {
            show===false ? (
    <div className="Eats">
    <div className='boxes'>
      <h5>Bread Basket</h5>
      <div className='twoin'><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum - 5.50)}>-</button><img src={BreadBasket} alt='foto'/><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum + 5.50)}>+</button></div>
      <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
    </div>
    <div className='boxes'>
      <h5>Honey Almond Granola with Fruits</h5>
      <div className='twoin'><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum - 7.00)}>-</button><img src={HoneywithFruits} alt='foto1'/><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum + 7.00)}>+</button></div>
      <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
    </div>
    <div className='boxes'>
      <h5>Belgian Waffle</h5>
      <div className='twoin'><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum - 7.50)}>-</button><img src={BelgianWaffle} alt='foto2'/><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum + 7.50)}>+</button></div>
      <p>Vanilla flavored batter with malted flour 7.50</p>
    </div>
    <div className='boxes'>
      <h5>Scrambled eggs</h5>
      <div className='twoin'><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum - 7.50)}>-</button><img src={Scrambledeggs} alt='foto3'/><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum + 7.50)}>+</button></div>
      <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
    </div>
    <div className='boxes'>
      <h5>Blueberry Pancakes</h5>
      <div className='twoin'><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum - 8.50)}>-</button><img src={BlueberryPancakes} alt='foto4'/><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum + 8.50)}>+</button></div>
      <p>With syrup, butter and lots of berries 8.50</p>
      </div>
    </div>
            ):
    <div className="Drinks">
    <div className='boxes'>
      <h5>Coffee</h5>
      <div className='twoin'><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum - 2.50)}>-</button><img src={Coffee} alt='foto'/><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum + 2.50)}>+</button></div>
      <p>Regular coffee 2.50</p><br/>
    </div>
    <div className='boxes'>
      <h5>Chocolato</h5>
      <div className='twoin'><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum - 4.50)}>-</button><img src={Chocolato} alt='foto1'/><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum + 4.50)}>+</button></div>
      <p>Chocolate espresso with milk 4.50</p><br/>
    </div>
    <div className='boxes'>
      <h5>Corretto</h5>
      <div className='twoin'><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum - 5.00)}>-</button><img src={Corretto} alt='foto2'/><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum + 5.00)}>+</button></div>
      <p>Whiskey and coffee 5.00</p><br/>
    </div>
    <div className='boxes'>
      <h5>Iced tea</h5>
      <div className='twoin'><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum - 3.00)}>-</button><img src={Icedtea} alt='foto3'/><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum + 3.00)}>+</button></div>
      <p>Hot tea, except not hot 3.00</p><br/>
    </div>
    <div className='boxes'>
      <h5>Soda</h5>
      <div className='twoin'><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum - 2.50)}>-</button><img src={Soda} alt='foto4'/><button className='menu-button' type='button' onClick={() => setNum((prevNum) => prevNum + 2.50)}>+</button></div>
      <p>Coke, Sprite, Fanta, etc. 2.50</p>
    </div>  
    </div>
}
 
</div>
    </div>
  );
 }


export default Menu
