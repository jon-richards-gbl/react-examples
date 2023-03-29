import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  imageSrc: string;
  name: string;
  link: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ imageSrc, link, name, children }) => (
  <div className="rounded-md bg-white shadow-md m-2">
    <Link
      to={link}
      className="flex justify-center p-2 border-b-2 border-neutral-200"
    >
      <img className="h-36" src={imageSrc} alt={`Image of ${name}`} />
    </Link>
    <div className="p-6 prose">{children}</div>
  </div>
);

export default Card;
