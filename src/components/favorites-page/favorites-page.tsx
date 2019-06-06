import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Favorites from '@/api/favorites';
import {getFavorites} from '@/reducer/data/selectors';
import {userActionCreator} from '@/reducer/user/user';
import FavoritesEmpty from '@/components/favorites-empty/favorites-empty';
import FavoritesList from '@/components/favorites-list/favorites-list';
import Footer from '@/components/footer/footer';

interface Props {
  favorites: [],
  fetchFavorites: () => []
}

class FavoritesPage extends PureComponent<Props> {
  componentDidMount() {
    this.props.fetchFavorites();
  }

  render(): React.ReactElement {
    const {favorites} = this.props;
    const hasFavorites: boolean = favorites && favorites.length > 0;
    const pageClass: string = hasFavorites ? `page--favorites-empty` : ``;

    return (
      <div className={`page ${pageClass}`}>
        {hasFavorites ? <FavoritesList /> : <FavoritesEmpty />}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: object, ownProps: object | {}) => (
  Object.assign({}, ownProps, {
    favorites: getFavorites(state)
  })
);

const mapDispatchToProps = (dispatch: Function) => ({
  fetchFavorites: () => {
    Favorites.get().then((response) => {
      dispatch(userActionCreator.fetchFavorites(response.data));
    }).catch((error) => console.log(error));
  }
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
