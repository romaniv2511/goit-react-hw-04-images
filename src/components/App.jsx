import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { SearchBar } from './SearchBar/SearchBar';

const BASE_URL = 'https://pixabay.com';
const searchParams = new URLSearchParams({
  key: '30455130-0aca0478341a7e36a6d0ca3c2',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export class App extends Component {
  state = {
    gallery: [],
  };
  fetchImages = value => {
    // const images = fetch(`${BASE_URL}/api/?${searchParams}$q=cat&page=1`).then(
    //   response => {
    //     if (!response.ok) {
    //       throw new Error(response.status);
    //     }

    //     return response.json();
    //   }
    // );
    console.log(value);
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <SearchBar onSubmit={this.fetchImages} />
      </>
    );
  }
}
