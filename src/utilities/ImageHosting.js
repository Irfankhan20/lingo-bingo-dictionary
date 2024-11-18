import axios from "axios";

export const UsePhoto = async (imageUrl) => {
  console.log(imageUrl);
  const formData = new FormData();
  formData.append("image", imageUrl);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=b3d672f04ed1260ce3027f917c898465`,
    formData
  );
  return data.data.display_url;
};
