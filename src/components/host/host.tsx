import React from "react";
import {HostType} from "@/types";

interface Props {
  host: HostType;
}

const Host = (props: Props) => {
  const {
    host: {isPro, name, description, avatarUrl}
  } = props;

  const avatarClass = isPro ? "property__avatar-wrapper--pro" : "";
  const hostStatus = isPro ? <span className="property__user-status">Pro</span> : null;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>

      <div className="property__host-user user">
        <div className={`property__avatar-wrapper ${avatarClass} user__avatar-wrapper`}>
          <img
            className="property__avatar user__avatar"
            src={avatarUrl} width="74" height="74"
            alt="Host avatar"/>
        </div>

        <span className="property__user-name">
          {name}
        </span>

        {hostStatus}
      </div>

      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Host;
