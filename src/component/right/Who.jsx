import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { TiGlobeOutline } from "react-icons/ti";
import { GoDatabase } from "react-icons/go";
import { BsPhone } from "react-icons/bs";

function Who() {
  const cards = [
    { type: 'Graphic Design', icon: <FaRegLightbulb />, color: 'textblue', code: "#2c98f0" },
    { type: 'Web Design', icon: <TiGlobeOutline />, color: 'textred', code: "#ec5453" },
    { type: 'Software', icon: <GoDatabase />, color: 'textyellow', code: "#f9bf3f" },
    { type: 'Application', icon: <BsPhone />, color: 'textbri', code: "#a84cb8" },
  ];

  return (
    <div>
      <p className="text-xs font-medium textp tracking-[5px] my-10">ABOUT US</p>
      <h1 className="font-bold text-[#000] text-xl tracking-[5px]">WHO AM I?</h1>
      <p className="my-20 textp">
        <strong>Hi, I'm Jackson Ford</strong>
        On her way, she met a copy. The copy warned the Little Blind Text, that
        where it came from, it would have been rewritten a thousand times and
        everything that was left from its origin would be the word "and," and
        the Little Blind Text should turn around and return to its own, safe
        country.
      </p>
      <p className="textp my-5">Even the all-powerful Pointing has no control over the blind texts; it is an almost unorthographic life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

      <div className="grid grid-cols-4 gap-10 py-5 justify-center items-center">
        {cards.map((val, i) => (
          <div key={i} className={`h-40 shadowsss flex justify-center items-center flex-col gap-2`} style={{ borderBottom: `2px solid ${val.code}` }}>

            <div className={`text-4xl ${val.color}`}>{val.icon}</div>
            <h1 className="font-medium text-normal text-[#000]">{val.type}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Who;
