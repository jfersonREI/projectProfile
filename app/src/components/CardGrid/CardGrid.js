import React from "react";

const CardGrid = (props) => {
  return (
    <section className="grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {props.children}
    </section>
  );
};

export default CardGrid;
