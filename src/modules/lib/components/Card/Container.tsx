import React from "react";

interface CardContainerProps {
  isCentered?: boolean;
  children: React.ReactNode;
  className?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({
  isCentered,
  children,
  className = "",
}) => (
  <div className={`card ${isCentered ? "card--centered" : ""} ${className}`}>
    {children}
  </div>
);

export default CardContainer;
