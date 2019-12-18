import Axios from '../../api/axios'
import convertToRupiah from '../../user/helpers/convertToRupiah'
import Swal from 'sweetalert2'

export const AfetchCart = () => async dispatch => {
  try{
    const { data } = await Axios({
      method: 'get',
      url: '/carts',
      headers: {
        token: localStorage.getItem('token')
      }
    })
    let temp = []
    for (let i = 0; i < data.length; i++) {
      data[i].priceToDisplay = convertToRupiah(data[i].idBook.price)
      temp.push(data[i])
    }
    console.log(temp)
    await dispatch({
      type:'CHANGE_CART_DATA', payload: temp
    })
  }
  catch(err){
    console.log(err.response)
  }
}

export const AplusCart = (id, qtyNow) => async dispatch => {
  Swal.showLoading()
  try{
    const { data } = await Axios({
      method: 'patch',
      url: `/carts/${id}/update`,
      headers: {
        token: localStorage.getItem('token')
      },
      data: {
        qty: Number(qtyNow) + 1
      }
    })
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      data[i].priceToDisplay = convertToRupiah(data[i].idBook.price)
    }
    dispatch({
      type:'CHANGE_CART_DATA', payload: data
    })
    Swal.close()
  }
  catch(err){
    console.log(err.response)
  }
}

export const AminusCart = (id, qtyNow) => async dispatch => {
  if(qtyNow === 1){
    console.log('1')
  }
  else{
    Swal.showLoading()
    try{
      const { data } = await Axios({
        method: 'patch',
        url: `/carts/${id}/update`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          qty: Number(qtyNow) - 1
        }
      })
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        data[i].priceToDisplay = convertToRupiah(data[i].idBook.price)
      }
      dispatch({
        type:'CHANGE_CART_DATA', payload: data
      })
      Swal.close()
    }
    catch(err){
      console.log(err.response)
    }
  }
}

export const AdeleteCartData = (id) => async dispatch => {
  Swal.showLoading()
  try{
    const { data } = await Axios({
      method: 'delete',
      url: `/carts/${id}/delete`,
      headers: {
        token: localStorage.getItem('token')
      }
    })
    console.log(data)
    // dispatch({
    //   type:'CHANGE_CART_DATA', payload: data
    // })
    dispatch(AfetchCart())
    Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Delete cart success!',
      showConfirmButton: false,
      position: 'top',
      timer: 2000
    })
  }
  catch(err){
    console.log(err.response)
  }
}

export const Acheckout = (history) => async dispatch => {
  Swal.showLoading()
  try{
    const { data } = await Axios({
      method: 'get',
      url: '/transactions/new',
      headers: {
        token: localStorage.getItem('token')
      }
    })
    console.log(data)
    history.push('/home/history')
    Swal.fire({
      icon: 'success',
      title: 'Checkout success!',
      text: 'The book wil sent in your house soon.'
    })
  }
  catch(err){
    console.log(err.response)
  }
}