import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL_CARD } from "../Api";
import { NextPrevious } from "./MovieFilter";
import Poster from "../img/ProfileDrawer.png";

const Card = ({ showType = "initial", type, search, cast = [] }) => {
  const [MoviInfo, setMoviInfo] = useState([]);
  const [total_pages, settotal_pages] = useState([]);
  const [next, setNext] = useState(1);

  let showUrl = `${search ? showType : showType + next}`;
  // console.log(showUrl);

  // const GetMovies = async (urlMovie) => {
  //   let response = await axios.get(urlMovie);
  //   if (response.status === 200) {
  //     setMoviInfo(response.data.results);
  //     settotal_pages(response.data.total_pages);
  //   } else {
  //     console.log("error");
  //   }
  //   return;
  // };

  function fetchData(Url) {
    fetch(Url)
      .then((res) => res.json())
      .then((data) => {
        if (cast.length > 1) {
          setMoviInfo(cast);
        } else {
          setMoviInfo(data.results);
        }
        settotal_pages(data.total_pages);
      });
  }

  useEffect(() => {
    fetchData(showUrl);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showUrl]);

  const Loading = () => {
    return (
      <div className="h-52 relative m-2 my-3 sha dow-lg  rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse border-4  min-w-[200px]"></div>
    );
  };
  console.log(MoviInfo);
  console.log(cast);

  if (MoviInfo.length === 0 || MoviInfo === "undefined") {
    return (
      <>
        <div
          className={`${
            showType.length === 0 ? "hidden" : "flex overflow-x-scroll"
          }`}
        >
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      </>
    );
  }
  const size = 2;
  let data = [];
  for (let i = 0; i < MoviInfo.length; i += size) {
    data.push(MoviInfo.slice(i, i + size));
  }

  console.log(data, "single_card");

  return (
    <>
      <div className="flexCB z-10 w-[90%] mx-auto  overflow-scroll overflow-y-hidden ">
        {data.map((item, index) => {
          return <SingleCard data={item} key={index} type={type} />;
        })}
      </div>
      <NextPrevious
        search={search}
        page={total_pages}
        next={next}
        setNext={setNext}
      />
    </>
  );
};

const SingleCard = ({ data, type }) => {
  if (data.length !== 2) {
    return <div></div>;
  }
  return (
    <div className="pb-8" onClick={() => window.scrollTo(0, 0)}>
      <div className="m-3 my-5">
        <Link
          to={`/MoviesExple/${data[0].media_type ? data[0].media_type : type}/${
            data[0].id
          }`}
        >
          <SingleCard01 data={data[0]} />
        </Link>
      </div>
      <div className="m-3 my-5">
        <Link
          to={`/MoviesExple/${data[1].media_type ? data[1].media_type : type}/${
            data[1].id
          } `}
        >
          <SingleCard02 data={data[1]} />
        </Link>
      </div>
    </div>
  );
};

const SingleCard01 = ({ data }) => {
  const [imageError, setImageError] = useState(false);
  const cardImg = `${IMAGE_BASE_URL_CARD}${data.poster_path}`;
  const defaultImage = Poster; // Assuming Poster is defined somewhere in your code
  console.log(cardImg);
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="relative">
      <img
        src={imageError ? defaultImage : cardImg}
        alt=""
        onError={handleImageError}
        className="mdx:min-w-[100px] h-auto min-w-[160px] rounded-md shadow-lg transition duration-500"
      />
      <div className="w-8 h-8 text-xs rounded-full bg-gray-900 flexCC text-white font-bold border-gray-50 border-2 absolute -bottom-3 -right-3">
        {data.vote_average.toString().slice(0, 3)}
      </div>
    </div>
  );
};
const SingleCard02 = ({ data }) => {
  const cardImg = `${IMAGE_BASE_URL_CARD}${data.poster_path}`;

  return (
    <div className="relative">
      <img
        className="mdx:min-w-[100px]  h-auto min-w-[160px]   rounded-md shadow-lg transition duration-500"
        loading="lazy"
        src={cardImg}
        alt=""
      />
      <div className=" w-8 h-8 text-xs rounded-full bg-gray-900 flexCC text-white font-bold border-gray-50 border-2 absolute     -bottom-3 -right-3 ">
        {data.vote_average.toString().slice(0, 3)}
      </div>
    </div>
  );
};
export default Card;
