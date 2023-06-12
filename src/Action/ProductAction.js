import axios from 'axios'

export const ProductListAction = () => async (dispatch) =>
 {
     try {
         dispatch({ type: 'PRODUCT-LIST-REQUEST'})
        const { data } = await axios.get('http://localhost:8000/api/products')

         dispatch({
              type: 'PRODUCT-LIST-SUCCESS' ,
              payload: data
            })
     }
     catch(error) {
         console.log(error)
     }

}

export const ProductDetailAction = (id) => async (dispatch) =>
 {
     try {
         dispatch({ type: 'PRODUCT-DETAIL-REQUEST'})
        const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)

         dispatch({
              type: 'PRODUCT-DETAIL-SUCCESS' ,
              payload: data
            })
     }
     catch(error) {
         console.log(error)
     }

}