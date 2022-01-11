import axios from "axios";

// A mock function to mimic making an async request for data
export async function getData(pageNumber: string, rowPerpage: string, search: string) {
  try {
    const response = await axios.post("http://45.15.25.142:8822/get-list-product", {
      bannerCode: "",
      categoryCode: "",
      typeId: "0",
      pageNumber: pageNumber,
      rowPerpage: rowPerpage,
      search: search
    }, {
      headers: {
        "API-Key": process.env.REACT_APP_APIKEY ? process.env.REACT_APP_APIKEY : "",
        "Content-Type": "application/json"
      }
    })

    return response
  } catch (err) {
    return err
  }

}
