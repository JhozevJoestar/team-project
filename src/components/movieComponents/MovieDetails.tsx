import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import films from "../../../public/data/example.json";
import styles from "../../styles/components/movieComponents/MovieDetails.module.scss";

const MovieDetails = ({ children },{id}) => {
    const [isVisible, setIsVisible] = useState("person");
    const film = films;
    const items = [
        { id: 1, name: "Создатели", href: "person" },
        { id: 2, name: "Комментарии", href: "comments" },
        { id: 3, name: "Трейлеры", href: "trailers" },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link href={`/movies/${id}`} className={styles.content_back}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <p>К фильму</p>
                </Link>
                <div className={styles.movie_container}>
                    <div className={styles.movie_content}>
                        <p className={styles.movie_content_title}>
                            {film.name} (Фильм {film.year})
                        </p>
                        <ul
                            className={styles.movie_content_list}
                            id="personList"
                        >
                            {items.map((el) => (
                                <li
                                    onClick={() => setIsVisible(el.href)}
                                    key={el.id}
                                    className={
                                        isVisible === el.href
                                            ? styles.active
                                            : null
                                    }
                                >
                                    <Link href={`/movies/${id}/${el.href}`}>
                                        {el.name}
                                        
                                       
                                    </Link>
                                           {/* <sup>{3}</sup>  */}
                                </li>
                            ))}
                        </ul>
                        <hr />
                        <div>{children}</div>
                    </div>
                    <div className={styles.movie_poster}>
                        <img src={film.poster.previewUrl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;

 export const getServerSideProps = (context) => {
    return {
        props: {
            id: context.query.id,
        },
    };
};
