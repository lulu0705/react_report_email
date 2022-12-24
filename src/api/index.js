import axios from "axios"

const URL = "http://127.0.0.1:5000/api/v1"
// const URL = "http://127.0.0.1:5000"

export const getProductById = async ({ queryKey }) => {
  const [productId] = queryKey;
  let data = await axios.get(`${URL}/products/id/${productId}`);
  return data.data;
}

export const getProducts = async ({ queryKey }) => {
  const [url] = queryKey;
  let data;
  if (url === "")
    data = await axios.get(`${URL}/products/all`);
    // data = await axios.get(`${URL}/products`);
  else
    data = await axios.get(`${URL}/products/${url}`);
  return data;
}
    // data = await axios.get(`${URL}/products/${url}`);

export const getReserves = async ({ name, phone, email, county, addr, area, time, reserve_date, product_id }) => {
  const data =  await axios.post(`${URL}/reserve`, {
    name, 
    phone, 
    email, 
    county, 
    addr, 
    area, 
    time, 
    reserve_date, 
    product_id
  });
  console.log('Reserve response = ')
  console.log(data)
  return data;
};


export const getFeedbacks = async ({ typename, name, email, comment}) => {
  const data =  await axios.post(`${URL}/comment`, {
    typename,
    name, 
    email, 
    comment, 
  });
  console.log('Reserve response = ')
  console.log(data)
  return data;
};


export const getNewposts = async ({ queryKey }) => {
  const [url] = queryKey;
  let data;
  if (url === "")
    data = await axios.get(`${URL}/newpost/all/topthree`);
  return data;
}

export const getProductThree = async ({ queryKey }) => {
  const [url] = queryKey;
  let data;
  if (url === "")
    data = await axios.get(`${URL}/products/all/topthree`);
  return data;
}