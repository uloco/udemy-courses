import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID d492474b1c511d1c85ef4be89a12fb2e10a97390707e44537611569b83634e6f"
  }
});
