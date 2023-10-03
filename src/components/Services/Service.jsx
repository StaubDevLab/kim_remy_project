import classes from "./Service.module.css";
import Badge from "../UI/Badge.jsx";
import price from "../../assets/UI/badge_price.png";
import sablier from "../../assets/UI/badge_sablier.png";
import people from "../../assets/UI/badge_people.png";

const Service = (props) => {
    return <div className={classes.card}>

        <a onClick={()=>props.onShowServiceModal(props.id)}>
            <img src={props.imgURL} alt={props.imgDescription}/>
        </a>

        <div>
            <Badge element={props.price} img={price} imgDescription={"Etiquette de prix"}/>
            <Badge element={props.duration} img={sablier} imgDescription={"Sablier"}/>
            <Badge element={props.people} img={people} imgDescription={"Personnage pour illustrer le public cible"}/>
        </div>

        <div className={classes["card__content"]}>
            <a onClick={()=>props.onShowServiceModal(props.id)} className={classes['card__content__title']}>
                <h4>
                    {props.title}
                </h4>
            </a>
            <div>
                {props.shortDescription}
            </div>
        </div>
    </div>
}
export default Service;