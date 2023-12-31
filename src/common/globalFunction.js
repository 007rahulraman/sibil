import { instance as axios } from "../axios/axios";

export async function fetchProductList(setProductList, setLoading) {
  // making an api call to fetch the product list from the provided api
  try {
    //wrapping the api call with try catch block , as some time the api might fail and might cause the app to crash , to avoid crashing of app and managing the routes as well
    axios
      .get("/products.json")
      .then((response) => {
        if (response.data) {
          const jsonResponseWithRegularSpaces = response.data.replace(
            /\u00A0/g,
            " "
          );
          const jsonObject = JSON.parse(jsonResponseWithRegularSpaces);
          setProductList(jsonObject.products);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}
// making an api call to fetch the product details based on the id of the product
export async function fetchProductDetails(
  id,
  setProductDetails,
  setLoading,
  navigate
) {
  try {
    axios
      .get(`/products/${id}.json`)
      .then((response) => {
        if (response.data) {
          const jsonResponseWithRegularSpaces = response.data.replace(
            /\u00A0/g,
            " "
          );
          const jsonObject = JSON.parse(jsonResponseWithRegularSpaces);
          setProductDetails(jsonObject);
          setLoading(false);
        }
      })
      .catch((error) => {
        navigate("*");
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}
