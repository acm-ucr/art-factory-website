import React from "react";
import Button from "../Button";
import Title from "../Title";

const AboutSection = () => {
  return (
    <div className="w-9/12 flex flex-col items-center text-center gap-10 mb-0">
      <Title text="About Us" />
      <p className="text-lg">
        ArtFactory at UCR is a vibrant community of artists established in
        spring 2023. Our mission? <br></br>
        <b>
          To cultivate creativity and exploration across various art forms.
        </b>{" "}
        <br></br>
        We believe that everyone, regardless of experience, should have a space
        to express themselves artistically. <br></br>
        Whether you&apos;re a seasoned artist or just starting out, you&apos;re
        welcome here!
      </p>
      <Button text="LEARN MORE" link="/about" />
      <Title text="What We Do" />
      <p className="text-lg">
        Here at ArtFactory, we use our time to explore different artistic
        mediums. <br></br>
        We come together as a community to explore different artistic mediums.{" "}
        <br></br>
        It doesn&apos;t matter how artistic (or unartistic) you are. Simply
        express yourself!
      </p>
    </div>
  );
};

export default AboutSection;
