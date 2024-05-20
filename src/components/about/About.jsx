import React from "react";
import Title from "../Title";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Title text="Who We Are" />
      <p className="text-lg mb-2 mt-8 mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80 text-center">
        {" "}
        Welcome to Art Factory at UCR! We were established in the spring quarter
        of 2023{","} and our name{","} {'"'}Art Factory{","} {'"'} embodies our
        commitment to being a vibrant community of artists with a vision to
        cultivate creativity and exploration across various art genres. We aim
        to provide a space where members can freely experiment{","} collaborate
        {","} and express themselves artistically.{" "}
      </p>
      <p className="text-lg mb-8 mt-2 mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80 text-center">
        {" "}
        As college students ourselves{","} we recognize the importance of
        balancing academic demands with creative pursuits{","} which is why we
        strive to offer a casual and enjoyable environment for artists to thrive
        on campus. Whether you{"'"}re a seasoned artist or just beginning your
        creative journey{","} Art Factory at UCR welcomes all individuals who
        share a passion for art and a desire to foster a supportive community of
        like-minded creatives. Join us as we continue to inspire{","} create
        {","} and explore the boundless possibilities of artistic expression
        together.{" "}
      </p>
      <Title text="What We Do" />
      <p className="text-lg my-8 mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80 text-center">
        {" "}
        At ArtFactory we do a variety of fun and interactive activities. We do
        painting{","} drawing{","} crafting{","} clay making{","} DIY where you
        get to use different kinds of material and make something. Oh! One more
        important thing that we have is{","} Studio Time. At that time you get
        to do whatever you want to do with the supplies while watching a movie
        or listening to music. It{"'"} s designed to make you all feel relaxed.
        If you come to our meeting{","} I can guarantee that you are bound to
        like at least one thing.{" "}
      </p>

      <Title text="Why Join Art Factory" />
      <p className="text-lg mt-8 mb-11 mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80 text-center">
        {" "}
        Here at ArtFactory{","} our mission is to create fun{","} easy-to-create
        {","} and unique art events for all UCR students. Each meeting is unique
        as we plan a new arts & crafts event every time{","} and we provide all
        the necessary supplies to our members! Our priority is to create an
        inclusive and homely environment for all artists{","} so we welcome all
        students regardless of skill level. If you are looking for a safe space
        to meet other artists or partake in our arts & crafts events{","} then
        come stop by our meetings! We hope to see you there!{" "}
      </p>
    </div>
  );
};

export default About;
