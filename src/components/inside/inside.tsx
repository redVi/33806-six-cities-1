import React from 'react';

interface Props {
  title: string,
  items: string[]
}

const Inside = (props: Props) => (
  <div className="property__inside">
    <h2 className="property__inside-title">{props.title}</h2>
    <ul className="property__inside-list">
      {props.items.map((good, idx) => (
        <li className="property__inside-item" key={`good-${idx}`}>
          {good}
        </li>
      ))}
    </ul>
  </div>
);

export default Inside;
