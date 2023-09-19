import { instance as axios } from "../axios/axios";

export async function fetchProductList(setProductList) {
  try {
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
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProductDetails(id, setProductDetails) {
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
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}
