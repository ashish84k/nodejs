/** @format */
import React from "react";
import styles from "./styles";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
    
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-red-500 to-yellow-500 animate-spin opacity-70"></div>
      <div className="absolute top-[60%] left-[15%] w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-sky-500 to-purple-500 animate-ping opacity-50"></div>
      <div className="absolute top-[40%] right-[15%] w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-blue-500 to-green-500 animate-bounce opacity-60"></div>
      <div className="absolute bottom-[10%] right-[25%] w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 animate-pulse opacity-50"></div>

      
      <section className={styles.section}>
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 w-100 sm:w-4xl drop-shadow-lg">
          Real Time Online Compress Platform
        </h1>
        <p className={`${styles.para} text-lg max-w-2xl`}>
          Upload and compress your images, videos, or entire folders quickly and efficiently — all in your browser.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/compress" className={styles.btn}>Get Started</a>
          <a href="/about" className={styles.btn}>Learn More</a>
        </div>
        <img
          src="https://i.pinimg.com/736x/3a/00/09/3a0009d7aa49eef491fe5e9276c064f5.jpg"
          alt="Compression Illustration"
          className={styles.imgBase}
        />
      </section>

    
      <section className={`flex-col-reverse sm:flex-row gap-10 ${styles.section}`}>
        <div className="w-full text-center md:text-left place-items-center">
          <h1 className={styles.heading}>Video Compress Tool</h1>
          <p className={`${styles.para} max-w-md`}>
            Easily upload and compress videos directly in your browser without losing quality. Supports multiple formats and fast processing.
          </p>
          <div className="mt-10">
            <button className={styles.btn}>Compress Video</button>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="border-2 rounded-2xl max-w-sm">
            <div className={styles.cardContainer}>
              <br /><br />
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/90/d4/d2/90d4d237c2f6b7acb1e744a8f2914f24.jpg"
                  alt="Video Thumbnail"
                  className={styles.cardImage}
                />
              </div>
              <div className="mt-4 space-y-3">
                <h1 className="text-2xl font-bold text-gray-800">Video Upload Card</h1>
                <p className={`${styles.para} text-sm`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repellendus officiis modi repudiandae, ipsam soluta minus vel.
                </p>
                <div className="flex gap-3">
                  <button className={styles.btn}>Hello</button>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.cardContainer}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tempore porro ipsa repellat aliquam magnam dolore labore inventore harum debitis nobis architecto earum, neque, atque veritatis odit facilis veniam cupiditate.
        </div>
        <div className={styles.cardContainer}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tempore porro ipsa repellat aliquam magnam dolore labore inventore harum debitis nobis architecto earum, neque, atque veritatis odit facilis veniam cupiditate.
        </div>
      </section>

    </div>
  );
};

export default Home;
