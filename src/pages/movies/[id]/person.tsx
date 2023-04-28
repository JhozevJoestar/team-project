import React from "react";
import MovieDetails from "../../../components/movieComponents/MovieDetails";
import film from '../../../../public/data/example.json'

import styles from "../../../styles/pages/person.module.scss";
import PersonCard from "../../../components/movieComponents/PersonCard";
let [director] = film.persons.filter((value)=>value.enProfession=='director')
console.log(director);

const Person = ({ id }) => {
    
    return (
       <MovieDetails  >
       <div className={styles.container}>
        <p className={styles.container_title}>Режиссёр</p>
        <PersonCard  name={director.name}
                       // profession={el.profession.slice(0, -1)}
                        photo={director.photo}
                        id='personCard'
                        persons={'persons'}/>
       
       </div>
        </MovieDetails>
       
      
    );
};

export default Person;

export const getServerSideProps = (context) => {
    return {
        props: {
            id: context.query.id,
        },
    };
};
