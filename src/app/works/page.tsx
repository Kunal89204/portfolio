"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
const Works = () => {
  const projects = [
    // The following projects must be kept on top in the given order
    {
      title: "Admatrica",
      category: "Freelance",
      image: "/images/works/admatrica.png",
      url: "https://admatrica.at/",
    },
    {
      title: "Codefolder",
      category: "Personal",
      image: "/images/works/codefolder.png",
      url: "https://codefolder.vercel.app/",
    },
    {
      title: "Envesty",
      category: "Freelance",
      image: "/images/works/envesty.png",
      url: "https://www.envesty.in/",
    },
    {
      title: "Rent for Reel",
      category: "Freelance",
      image: "/images/works/r4r.png",
      url: "https://www.rentforreel.in/",
    },
    {
      title: "Tvideo",
      category: "Personal",
      image: "/images/works/tvideo.png",
      url: "https://tvideo.kunalkhandelwal.dev/",
    },
    {
      title: "StudyByU",
      category: "Freelance",
      image: "/images/works/studybyu.png",
      url: "https://studybyu.com/",
    },
    {
      title: "QuantumWhale",
      category: "Freelance",
      image: "/images/works/qw.png",
      url: "https://thequantumwhale.com/",
    },
    // Rest of the projects (order does not matter, keeping original order below, minus the ones just listed)
    {
      title: "AraBazaar",
      category: "Freelance",
      image: "/images/works/arabazaar.png",
      url: "https://arabazaar.com/",
    },
    {
      title: "Gymverse Assignment",
      category: "Personal",
      image: "/images/works/gymverse.png",
      url: "https://gymverseassignment.vercel.app/",
    },
    {
      title: "Camio PPF",
      category: "Freelance",
      image: "/images/works/camio.png",
      url: "https://camioppf.com/",
    },
    {
      title: "Quiro",
      category: "Freelance",
      image: "/images/works/quiro.png",
      url: "https://quiro-prod.vercel.app/",
    },
    {
      title: "MACH Visuals",
      category: "Freelance",
      image: "/images/works/mach.png",
      url: "https://machvisuals.com/",
    },
    {
      title: "Tatsat Yoga School",
      category: "Freelance",
      image: "/images/works/tatsat.png",
      url: "https://www.tatsatyogaschool.org/",
    },
    {
      title: "VisionSphere",
      category: "Freelance",
      image: "/images/works/vs.png",
      url: "https://www.visionsphere361.com/",
    },
    // {
    //   title: "Dot-com",
    //   category: "Personal",
    //   image: "/images/works/dot-com.png",
    //   url: "https://dot-com.vercel.app/",
    // },
    {
      title: "MLAH",
      category: "Freelance",
      image: "/images/works/mulah.png",
      url: "https://www.xn--mlah-0ra.com/",
    },
    {
      title: "CAA Beige",
      category: "Freelance",
      image: "/images/works/caa.png",
      url: "https://caa-beige.vercel.app/",
    },
    {
      title: "Markzenip",
      category: "Freelance",
      image: "/images/works/markzenip.png",
      url: "https://markzenip.com/",
    },
    {
      title: "TextureMaps",
      category: "Freelance",
      image: "/images/works/texturemaps.png",
      url: "https://www.texturemaps.co.in/",
    },
    {
      title: "Altique Silk",
      category: "Freelance",
      image: "/images/works/altique.png",
      url: "https://altique.in/",
    },
    {
      title: "Conscious India",
      category: "Freelance",
      image: "/images/works/mvp.png",
      url: "https://conscious-india.vercel.app/",
    },
    {
      title: "Bhashabandhu",
      category: "Freelance",
      image: "/images/works/bhashabandhu.png",
      url: "https://www.bhashabandhu.com/",
    },
  ];

  // Divide into 3 nearly equal columns using slice (one per col)
  const colSize = Math.ceil(projects.length / 3);
  const col1Projects = projects.slice(0, colSize);
  const col2Projects = projects.slice(colSize, 2 * colSize);
  const col3Projects = projects.slice(2 * colSize);

  return (
    <div className="min-h-screen max-w-[1150px] mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center gap-2 mb-6"
        >
          <Image
            src={
              "https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
            }
            alt="star"
            width={1000}
            height={1000}
            className="w-8 h-8"
          />
          <p className="text-4xl mb-4 text-center font-bold">ALL PROJECTS</p>
          <Image
            src={
              "https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
            }
            alt="star"
            width={1000}
            height={1000}
            className="w-8 h-8"
          />
        </motion.div>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="gray-gradient-2 border rounded-[30px] p-4 relative group cursor-pointer"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className="rounded-[24px] aspect-[1/0.7] object-cover"
              />
              <div className="flex flex-col gap-1 py-2">
                <p className="text-[#a0a0a0] text-md font-semibold">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              {/* Absolute Arrow image */}
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                  alt=""
                  className="absolute bottom-5 right-5 w-8 h-8 opacity-40 group-hover:opacity-100 transition-all duration-300"
                  width={1000}
                  height={1000}
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 col-span-1">
          {col1Projects.map((project, i) => (
            <motion.div
              key={i}
              className="gray-gradient-2 border rounded-[30px] p-4 relative group cursor-pointer"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className="rounded-[24px] aspect-[1/0.7] object-cover"
              />
              <div className="flex flex-col gap-1 py-2">
                <p className="text-[#a0a0a0] text-md font-semibold">
                  {project.category}
                </p>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
              {/* Absolute Arrow image */}
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                  alt=""
                  className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300"
                  width={1000}
                  height={1000}
                />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="col-span-2">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
          >
            <Image
              src={
                "https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
              }
              alt="star"
              width={1000}
              height={1000}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
            />
            <p className="text-3xl sm:text-5xl lg:text-7xl text-center font-bold ">
              ALL PROJECTS
            </p>
            <Image
              src={
                "https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
              }
              alt="star"
              width={1000}
              height={1000}
              className="w-10 h-10 sm:w-12 sm:h-12  lg:w-14 lg:h-14"
            />
          </motion.div>

          <div className="grid grid-cols-2 mt-4 gap-4">
            {col2Projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="gray-gradient-2 border rounded-[30px] p-4 relative group cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="rounded-[24px] aspect-[1/0.8] object-cover"
                />
                <div className="flex flex-col gap-1 py-2">
                  <p className="text-[#a0a0a0] text-md font-semibold">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
                {/* Absolute Arrow image */}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              </motion.div>
            ))}
            {col3Projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="gray-gradient-2 border rounded-[30px] p-4 relative group cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="rounded-[24px] aspect-[1/0.8] object-cover"
                />
                <div className="flex flex-col gap-1 py-2">
                  <p className="text-[#a0a0a0] text-md font-semibold">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
                {/* Absolute Arrow image */}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
