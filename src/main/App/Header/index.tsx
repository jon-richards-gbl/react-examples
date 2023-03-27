import React from "react";

import LoginButton from "../../../modules/auth/components/LoginButton";

const AppHeader: React.FC = () => {
  return (
    <nav>
      <h3>Vite + React</h3>
      <ul>
        <li>Links...</li>
        <li><LoginButton /></li>
      </ul>
    </nav>
  );
};

export default AppHeader;
