import React from 'react';

interface Props {
  items: string[],
  current: string,
  onClick: (city: string) => any
}

const CitiesList = (props: Props) => {
  const {items, current, onClick} = props;
  const preventEvent = (evt, it: string) => {
    evt.preventDefault();
    onClick(it);
  }

  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {items.map((it) =>
            <li className="locations__item" key={`${it}`}>
              <a
                className={`locations__item-link tabs__item ${it === current ? `tabs__item--active` : ``}`}
                href=""
                onClick={(e) => preventEvent(e, it)}>
                <span>{it}</span>
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default CitiesList;
