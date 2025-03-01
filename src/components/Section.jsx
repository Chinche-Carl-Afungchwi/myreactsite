import React from "react";

const Section = ({ id, title, content }) => {
    return (
        <section id={id}>
            <h1>{title}</h1>
            <p>{content}</p>
        </section>
    );
};

export default Section;
