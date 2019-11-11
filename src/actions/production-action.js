export const FETCH_PRODUCTS_PENDING = "FETCH_PRODUCTS_PENDING";
export const FETCH_PRODCUTS_SUCCESS = "FETCH_PRODCUTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE"; 

export const fetchProductPending = () => {
   const type = FETCH_PRODUCTS_PENDING;
   return {type}
}

export const fetchProductSucess = products => {
    const type = FETCH_PRODCUTS_SUCCESS;
    return {
         type,
         payloads : { products }   
    }
}

export const fetchProductsFailure = error => {
    const type = FETCH_PRODUCTS_FAILURE;
    return {
        type,
        payload : { error }
    }
}

