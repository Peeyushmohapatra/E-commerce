import React, { memo } from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="leftSection">
        <h1>
          <b>About Us</b>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sed
          rerum molestias cumque, quisquam sapiente cupiditate repellat
          blanditiis ex minus dolor incidunt saepe dicta deserunt modi corrupti
          nulla expedita autem excepturi nobis. Consequatur sed, eaque dolorum
          cum modi minus officiis repudiandae sit assumenda itaque at ullam
          inventore id reiciendis rerum natus libero voluptatibus qui, sint
          eveniet nemo vero. Ratione corporis asperiores consectetur optio hic
          facilis qui nam suscipit sit a repudiandae dignissimos adipisci nihil
          quia culpa, rem ipsa. Nisi veniam est id quo fugiat, quidem
          praesentium commodi corporis tenetur reiciendis sint ipsa nam dicta?
          Accusamus fugit enim quas ducimus ipsa?
        </p>
        <Link to="/contact">
         <button>Contact Us</button>
        </Link>

      </div>
      <div className="rightSection">
        <img
          src="https://e-mart-sooty.vercel.app/assets/images/about.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default memo(About);
