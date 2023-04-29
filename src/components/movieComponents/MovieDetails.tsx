import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import films from "../../../public/data/example.json";
import styles from "../../styles/components/movieComponents/MovieDetails.module.scss";
import ProgressBar from "../posterComponents/ProgressBar";

const MovieDetails = ({ children, id }) => {
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
                                    /* className={
                                        isVisible === el.href
                                            ? styles.active
                                            : null
                                    } */
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
                        <Link href={`/movies/${id}`}>
                        <img src={film.poster.previewUrl} alt="" />
                        </Link>
                        <div className={styles.movie_info}>
                            <div className={styles.rating}>
                                <div className={styles.number}>
                                    <span className={styles.number__integer}>
                                        {film.rating.imdb}
                                    </span>
                                </div>
                                <div className={styles.rating_charts}>
                                    {Object.values(film.rating).map((value,ind) => (
                                       <div className={styles.bar} key={ind}>
                                       <div
                                           className={styles.progress}
                                           style={{ width: Number(value) * 10 + "%" }}
                                       ></div>
                                   </div>
                                    
                                    ))}
                                </div>
                            </div>
                            <div className={styles.text}>{`${film.year}, ${film.countries.map((el)=>(` ${el.name}`))}`}</div>
                            <div className={styles.text}>{film.genres.map((el)=>(` ${el.name}`))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
