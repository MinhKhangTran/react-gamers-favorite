import React from "react";
import { useFetch } from "../hook/useFetch";
import { useGlobalContext } from "../context";
import { useParams, useHistory } from "react-router-dom";
import { smallImage } from "../assets";
import { Loader } from "./Loader";
import { Screenshot } from "./Screenshot";
import {
  FaXbox,
  FaPlaystation,
  FaLaptop,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";
const defaultImg =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

export const GameDetail = () => {
  const { API_ENDPOINT, showModal, closeModal } = useGlobalContext();
  const { id } = useParams();
  const { loading, games } = useFetch(`${API_ENDPOINT}games/${id}`);
  const history = useHistory();
  const {
    name,
    description,
    released,
    background_image,
    rating,
    platforms,
  } = games;

  // console.log(platforms);

  const fileIcons = {
    PlayStation: <FaPlaystation />,
    Xbox: <FaXbox />,
    PC: <FaLaptop />,
    Nintendo: <SiNintendoswitch />,
    macOS: <FaApple />,
    iOS: <FaApple />,
    Android: <FaAndroid />,
  };
  if (loading) {
    return <Loader />;
  }

  const modalClose = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      closeModal();
      history.push("/");
    }
  };

  const convertToStars = (rating) => {
    const abegrundeteSterne = Math.floor(rating);
    const sternBehälter = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= abegrundeteSterne) {
        sternBehälter.push(<AiFillStar key={i}></AiFillStar>);
      } else {
        sternBehälter.push(<AiOutlineStar key={i}></AiOutlineStar>);
      }
    }
    // console.log(sternBehälter);

    return sternBehälter;
  };

  return (
    showModal &&
    !loading && (
      <motion.div
        className="fixed top-0 left-0 right-0 h-screen w-screen shadow grid place-items-center overflow-y-scroll"
        style={{ background: "rgba(0,0,0,0.3)" }}
        onClick={modalClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <motion.article
          className="bg-red-300 w-11/12 md:w-4/5 mx-auto py-6 rounded-lg my-8 p-4"
          initial={{ y: "-250vh" }}
          animate={{ y: "0vh" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <header className="flex w-full justify-around mb-4 text-red-600 md:font-semibold md:text-xl">
            <h1>{name}</h1>
            <h1>Release Date: {released}</h1>
            <h1 className="flex items-center">
              {convertToStars(rating)} &nbsp; {rating} out of 5
            </h1>
          </header>
          <div>
            {background_image ? (
              <img
                className="h-full w-full object-cover"
                src={smallImage(background_image, 640)}
                alt={name}
              />
            ) : (
              <img
                className="h-full w-full  object-center"
                src={defaultImg}
                alt={name}
              />
            )}
          </div>
          <h1 className="text-red-500 font-bold text-lg md:text-xl my-4">
            Description:
          </h1>
          <p
            className="w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <h1 className="text-red-500 font-bold text-lg md:text-xl my-4">
            Gallery:
          </h1>
          <Screenshot id={id} />

          <h1 className="text-red-500 font-bold text-lg md:text-xl my-4">
            Available for:
          </h1>
          <div className="flex justify-around">
            {platforms.map((platform) => {
              const { id, name } = platform.platform;
              return (
                <div
                  className="flex justify-between items-center text-red-700 md:text-xl"
                  key={id}
                >
                  <h1 className="md:mr-2">{fileIcons[name.split(" ")[0]]}</h1>
                  <h1 className="md:ml-2">{name}</h1>
                </div>
              );
            })}
          </div>
        </motion.article>
      </motion.div>
    )
  );
};
