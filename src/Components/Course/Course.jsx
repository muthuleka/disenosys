import React from "react";
import surface from "../../Assets/fjjyrl15vghegw236ugd.jpg";
import close from "../../Assets/ohrijn914mpxwgqe7wp9.jpg";
import plastic from "../../Assets/fflbophltwwtismhajgf.png";
import pillar from "../../Assets/u6f18qw8prgcugaidoss.jpg";
import bracket from "../../Assets/wxcouyxbkxt5hn8cnh0a.jpg";
import biw from "../../Assets/aftdr5paalbdtzpxe9gy.jpg";
import solid from "../../Assets/ojxm8dt7t4isorykr8wa.jpg";
import advancedsurface from "../../Assets/xsbx3byy0mvoseysmw8z.webp";
import catia from "../../Assets/g4djetr8qmrq0n7oxnap.jpg";

const Course = () => {
  let course = [
    {
      image: surface,
      title: "Surface Remastering for Automotive Designers",
      description:
        "Reverse engineering definition: Reverse engineering is the process of analyzing and disassembling a product or system to create a detailed digital model of it.",
    },
    {
      image: close,
      title: "Automotive Close Volume & Feature Creation",
      description:
        "Close volume refers to the space within a vehicle that is enclosed by its exterior surfaces.",
    },
    {
      image: plastic,
      title: "Fundamentals of Plastic Trims",
      description:
        "Plastic trims are an essential component of automotive design as they serve both functional and aesthetic purposes.",
    },
    {
      image: pillar,
      title: "Automotive B-Pillar Assembly",
      description:
        "In automotive design, the “B-pillar assembly” refers to the collection of components that make up the B-pillar of a vehicle.",
    },
    {
      image: bracket,
      title: "Bracket And Reinforcement",
      description:
        "Brackets are typically flat metal pieces that are used to connect two or more components together, such as attaching a bumper to a vehicle frame or securing a suspension system to the chassis.",
    },
    {
      image: biw,
      title: "Fundamentals Of BIW in Automotive Design",
      description:
        "Automotive BIW stands for “Body-in-White” in the automotive industry.",
    },
    {
      image: solid,
      title: "Solid Model Remastering",
      description:
        "Solid Model Remastering is a process in automotive design and engineering where an existing 3D CAD model is updated or revised to incorporate new changes or improvements.",
    },
    {
      image: advancedsurface,
      title: "Advanced CATIA Surface",
      description:
        "CATIA stands for Computer Aided Three-dimensional Interactive Application. CATIA is a powerful 3D software and it is used in a wide range of industries",
    },
    {
      image: catia,
      title: "CATIA Foundations for Automative Designers",
      description:
        "CATIA stands for Computer Aided Three-dimensional Interactive Application. CATIA is a powerful 3D software and it is used in a wide range of industries",
    },
  ];
  return (
    <>
      <div className="w-full h-auto  flex flex-col mb-6">
        <div className="w-[100%] h-[130px]">
          <p className="text-5xl font-semibold flex items-center justify-center text-custom-blue">
            All Online Course
          </p>
        </div>
        <div className="w-[100%] h-[100%]  flex items-start justify-between p-[20px] gap-6">
          <div className="w-[100%] h-[90%] mr-[30px] ">
            <div className=" check w-[100%] h-[80vh] grid grid-cols-3 gap-6 overflow-scroll ">
              {course.map(function (data) {
                return (<div className="w-[100%] h-[100%] flex flex-col rounded-2xl rounded-r-2xl  p-[20px] border-2 border-gray-300">
                    <div className="w-[100%] h-[200px]">
                      <img src={data.image} className="w-[100%] h-[100%] object-fit:contain; " alt=""/>
                    </div>
                    <div className=" w-[100%] h-[100%] flex flex-col items-center justify-between ">
                    <p className=" w-[100%] text-lg text-center font-bold flex p-3 ">{data.title}</p>
                    <p className=" w-[100%] flex items-center justify-between flex-col text-medium font-medium text-gray-700">
                      {data.description}
                    </p>
                    <div className=" w-[100%] flex items-center justify-between mt-[20px]">
                      <button className="px-6 py-2 bg-custom-blue rounded-lg text-white hover:bg-blue-300 transition-all duration-700">Add to Cart</button>
                      <button className="text-custom-blue text-lg ">More Info</button>
                    </div>
                    </div>
                  </div>)
              })}
             
            </div>
          </div>
          <div className="w-[31%] h-[85%]">
            <div className="w-[100%]  ">
                <button className="w-[100%] px-5 py-2 mb-6 bg-custom-blue rounded-lg text-2xl text-white font-bold hover:bg-blue-500 transition-all duration-700 ">All Courses</button>
            </div>
            <div className="w-[100%] "> 
                <button className="w-[100%] px-5 py-2 mb-6  text-custom-blue rounded-lg text-xl bg-white font-semibold border-2 border-gray-300 hover:bg-blue-200 transition-all duration-700">Plastic Trims</button>
            </div>
            <div className="w-[100%]  ">
                <button className="w-[100%] px-5 py-2 mb-6 text-custom-blue rounded-lg text-xl bg-white font-semibold border-2 border-gray-300 hover:bg-blue-200 transition-all duration-700">Mechatronics Engneering</button>
            </div>
            <div className="w-[100%] ">
                <button className="w-[100%] px-5 py-2 mb-6 text-custom-blue rounded-lg text-xl bg-white font-semibold border-2 border-gray-300 hover:bg-blue-200 transition-all duration-700">Mechanical Engineering</button>
            </div>
            <div className="w-[100%]">
                <button className="w-[100%] px-5 py-2 mb-6 text-custom-blue rounded-lg text-xl bg-white font-semibold border-2 border-gray-300 hover:bg-blue-200 transition-all duration-700">BIW</button>
            </div>
            <div className="w-[100%] ">
                <button className="w-[100%] px-5 py-2 mb-6 text-custom-blue rounded-lg text-xl bg-white font-semibold border-2 border-gray-300 hover:bg-blue-200 transition-all duration-700">Automobile Engineering</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
