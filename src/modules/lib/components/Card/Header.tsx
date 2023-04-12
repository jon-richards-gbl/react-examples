import React from "react";

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => (
  <header className="card-header">{children}</header>
);

export default CardHeader;
