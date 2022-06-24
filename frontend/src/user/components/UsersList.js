import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.users.length === 0) {
    return (
      <div className="center">
        <Card className="user-item__content" style={{ padding: "1rem" }}>
          <h2>No Users Found!!</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.users.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places.length}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
