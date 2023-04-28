import React from 'react'
import MovieDetails from "../../../components/movieComponents/MovieDetails";
import film from '../../../../public/data/example.json'
import styles from '../../../styles/pages/trailers.module.scss'
import Player from '../../../components/movieComponents/Player';
import Link from 'next/link';

const Trailers = ({id}) => {
  const trailers = film.videos.trailers;
  return (
    <MovieDetails  >
   <ul className={styles.trailers}>
    {
      trailers.map((el)=>(
        <li>
          <Link href={el.url} target={'_blank'}>{el.name}</Link>
        </li>
      ))
    }
   </ul>
</MovieDetails>
  )
}

export default Trailers
export const getServerSideProps = (context) => {
    return {
        props: {
            id: context.query.id,
        },
    };
};