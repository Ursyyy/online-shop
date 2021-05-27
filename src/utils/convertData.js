export const getPrice = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
export const getImage = image => `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/${image}`