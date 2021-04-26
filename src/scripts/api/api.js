axios.defaults.baseURL = "http://localhost:8888";
axios.defaults.withCredentials = false;

const getAllPosts = async () => {
  const { data } = await axios.get("/api/posts");

  return data;
};

const addNewPost = async ( {title, text, img, authorName, authorImg} ) => {
  const {data} = await axios.post("/api/posts")

  return data;
}

const createNewUser = (data) => {
  //there will be logic for send to server
  console.log(data);
};

const loginUser = (data) => {
  //there will be logic for send to server
  console.log(data);
};

export { createNewUser, loginUser, getAllPosts };
