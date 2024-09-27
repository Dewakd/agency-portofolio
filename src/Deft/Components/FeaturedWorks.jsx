import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link
import worksData from "../../WorksData"; // Assuming this is where your works data is

export default function FeaturedWorks(props) {
  const { CTA } = props
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Website", "UI/UX", "App", "Graphic Design"];

  const filteredWorks = selectedCategory === "All"
    ? worksData
    : worksData.filter(work => work.category === selectedCategory);

  return (
    <div className="bg-darkBold md:pt-[150px] pt-[75px]">
      <div className="flex flex-col items-center px-[12px] max-w-2xl mx-auto">
        <div className="flex items-center gap-4  mb-[13px]">
          <span className="w-[20px] h-[3px] bg-red"></span>
          <h2 className="font-semibold font-poppins uppercase text-[14px] text-text ">Featured Works</h2>
          <span className="w-[20px] h-[3px] bg-red"></span>
        </div>
        <h1 className="text-white text-center text-[22px] md:leading-10 font-poppins font-bold leading-7 md:text-[30px] mb-[38px]">
          Our mission is to deliver remarkable experiences and superior results for our clients
        </h1>
      </div>

      {/* Navbar for categories */}
      <div className="flex flex-wrap justify-center gap-2 px-[12px] pb-[50px] items-center">
        {categories.map((category, index) => (
          <React.Fragment key={category}>
            <button
              onClick={() => setSelectedCategory(category)}
              className={` font-roboto px-[5px] flex items-end -mb-[6px] font-light text-[18px]
                ${selectedCategory === category ? " text-red" : " text-text"}`}
            >
              {category}
            </button>
            {index < categories.length - 1 && <span className="text-[18px] font-semibold text-gray-700">/</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Works grid */}
      <div className="z-0 grid grid-cols-1 gap-0 px-0 sm:grid-cols-2 lg:grid-cols-4">
        {filteredWorks.map(work => (
          <Link to={`/works/${work.id}`} key={work.id} className="relative z-0 group bg-cover bg-center h-[300px] w-full overflow-hidden bg-zoom-rotate" style={{ backgroundImage: `url(${work.img})` }}>
            <div className="absolute z-0 inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-0 m-auto group-hover:bg-opacity-80 w-[90%] h-[90%]">
              <div className="text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white font-poppins">{work.title}</h3>
                <p className="text-gray-300 font-roboto">{work.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {CTA ?
        <div className="flex md:flex-row md:justify-between flex-col items-center justify-center bg-darkGray py-[60px] md:px-[400px]">
          <h1 className="font-poppins text-[22px] text-white text-center md:mb-0 mb-[20px] md:text-[30px]">Want to see our more creative work?</h1>
          <Link className="uppercase bg-red " to="/work">
            <p className="text-[14px] font-poppins text-white font-bold px-[20px] py-[10px] md:py-[13px] md:px-[30px]">See all work</p>
          </Link>
        </div>
        : null}

    </div>
  );
}
