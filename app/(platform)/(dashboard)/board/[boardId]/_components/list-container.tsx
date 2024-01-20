import React from "react";
import ListItem from "./list-item";

const ListContainer = () => {
  return (
    <div>
      <ul className="flex gap-4">
        <li>
          <ListItem />
        </li>
        <li>
          <ListItem />
        </li>
        <li>
          <ListItem />
        </li>
      </ul>
    </div>
  );
};

export default ListContainer;
