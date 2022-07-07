import { Fragment, useContext, useEffect} from "react";
import carrouselContext from "../context/carrouselContext";


const Carrousel = () => {

     ////STATE DEL CARROUSEL
     const state = useContext(carrouselContext);
     const {add_sliders_fn,btn_controllers_next_fn,btn_controllers_before_fn,valueSlider,sliderItems} = state;


   ///FUNCION PARA LOS BOTONES
   const funcion_before = (e)=>{
           btn_controllers_before_fn(-1);
   }

   const funcion_after = (e)=>{
        btn_controllers_next_fn(1);
   }


    return ( 

    <Fragment>
        <h1 className="title">Carrousel</h1> 
    
       <div className="slider">
           <div className="ctr__slider">
               <div className="arrow__button" id="before" onClick={funcion_before}>
                   <i className='bx bx-left-arrow-alt'></i>
                </div> 
             
                <section className={valueSlider === 1 ?  "slider__item  slider__item--show" : "slider__item" } data-id="1">
                     <div className="slider__texts">
                            <h1 className="slider__user">!hola! me llamo azahel</h1>
                            <p className="slider__view">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem animi eligendi ea odit facere sapiente neque tempora necessitatibus libero quod, harum illo voluptatibus ducimus. Delectus ea sapiente eveniet natus obcaecati!</p>
                     </div>
                      <figure className="slider__image">
                            <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="slider__img" />
                      </figure>
                </section>
                <section className={valueSlider === 2 ? "slider__item  slider__item--show" : "slider__item"} data-id="2">
                     <div className="slider__texts">
                            <h1 className="slider__user">!hola! me llamo wanda</h1>
                            <p className="slider__view">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem animi eligendi ea odit facere sapiente neque tempora necessitatibus libero quod, harum illo voluptatibus ducimus. Delectus ea sapiente eveniet natus obcaecati!</p>
                     </div>
                      <figure className="slider__image">
                            <img src="https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="slider__img" />
                      </figure>
                </section>
                <section className={valueSlider === 3 ? "slider__item  slider__item--show" : "slider__item"} data-id="3">
                     <div className="slider__texts">
                            <h1 className="slider__user">!hola! me llamo isacc</h1>
                            <p className="slider__view">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem animi eligendi ea odit facere sapiente neque tempora necessitatibus libero quod, harum illo voluptatibus ducimus. Delectus ea sapiente eveniet natus obcaecati!</p>
                     </div>
                      <figure className="slider__image">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="slider__img" />
                      </figure>
                </section>
                <div className="arrow__button" id="after" onClick={funcion_after}>
                   <i className='bx bx-right-arrow-alt' ></i>
                </div> 
           </div> 
       </div>
    </Fragment>

    );
}
 
export default Carrousel;