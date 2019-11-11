import {fetchProductPending, fetchProductSucess, fetchProductsFailure} from '../actions/production-action';

export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductPending());
      return fetch("https://randomuser.me/api/")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductSucess(json.results));
          return json.results;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  // Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }