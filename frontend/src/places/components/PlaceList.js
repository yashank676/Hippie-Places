import React, { useContext } from "react";
import Button from "../../shared/components/FormElements/Button";

import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  const auth = useContext(AuthContext);
  if (props.items.length === 0) {
      if (auth.userId === props.userId) {
        return (
        <div className="place-list center">
          <Card style={{ padding: "1rem" }}>
            <h2 style={{ padding: "1rem" }}>
              No Places Found...Maybe Add One?
            </h2>
            <Button to="/places/new" disabled={!(props.userId === auth.userId)}>
              Share Place
            </Button>
          </Card>
        </div>
      );
    }
    return (
      <div className="place-list center">
        <Card style={{ padding: "1rem" }}>
          <h2 style={{ padding: "1rem" }}>No Places Found For This User!</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            title={place.title}
            description={place.description}
            image={place.image}
            address={place.address}
            coordinates={place.location}
            creatorId={place.creator}
            onDelete={props.onDeletePlace}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
