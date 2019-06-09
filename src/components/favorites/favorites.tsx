import React from 'react';
import {connect} from 'react-redux';

import {offerType} from '@/types';
import {getFavorites} from '@/reducer/data/selectors';
import FavoritesEmpty from '@/components/favorites-empty/favorites-empty';
import FavoritesList from '@/components/favorites-list/favorites-list';
import Footer from '@/components/footer/footer';

const sortFavList = (list) => {
  const HEADERS = {};

  // get city names as HEADER'S keys
  list.forEach((item) => {
    if (HEADERS[item.city.name]) return;
    HEADERS[item.city.name] = [];
  });

  // fill HEADERS'S values
  list.forEach((it) => {
    const key = it.city.name;
    if (HEADERS[key]) HEADERS[key].push(it);
  });

  return HEADERS;
};

interface Props {
  favorites?: offerType[]
}

const Favorites = (props: Props) => {
  const {favorites} = props;
  const hasFavorites: boolean = favorites && favorites.length > 0;
  const pageClass: string = hasFavorites ? `` : `page--favorites-empty`;
  const mainClass: string = hasFavorites ? `` : `page__main--favorites-empty`;
  const sectionClass: string = hasFavorites ? `` : `favorites--empty`;
  const items = sortFavList(props.favorites);

  return (
    <div className={`page ${pageClass}`}>
      <main className={`page__main page__main--favorites ${mainClass}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${sectionClass}`}>
            {hasFavorites ? <FavoritesList items={items} /> : <FavoritesEmpty />}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: object, ownProps: object | {}) => (
  Object.assign({}, ownProps, {
    favorites: getFavorites(state)
  })
);

export {Favorites};
export default connect(mapStateToProps)(Favorites);
