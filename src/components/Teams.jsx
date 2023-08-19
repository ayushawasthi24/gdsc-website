import "./Teams.css";
import {TeamMembers} from "../data/TeamMembers";
import {motion, Variants} from "framer-motion";

const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{x:0,
        opacity:1,
    rotate:[0,10,0]},
    transition : {type:"spring",
     bounce:0.4,
    duration:1}
}

const textAnimate= {
      offscreen : {y:100, opacity:0},
      onscreen:{y:0, 
        opacity:1,
      transition: { type:"spring",
      bounce:0.4, 
      duration:1  }}
    }

function Card({ image_url, name, description, id}) {
    return (
        <motion.div className="card" id={id} 
        initial= {"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.1}}
        transition= {{staggerChildren:0.5}}
        >
            <motion.div className="image-container"
           
            variants={imageAnimate}
            >
                {image_url}</motion.div>
            <motion.h2
            
            variants={textAnimate}>{name}</motion.h2>
            <motion.p
            variants={textAnimate}>{description}</motion.p>
        </motion.div>
    );
}

export default function Teams() {
    return TeamMembers.map((item,index) => (
        <div className="card-wrapper" key={index}>
            <Card image={item.image_url} name={item.name} description={item.description} />
        </div>
    ));
}