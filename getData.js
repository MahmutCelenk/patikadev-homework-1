import axios from 'axios';

const getData = async (userId) => {
  try {
    // Kullanıcı bilgilerini çekme
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;

    // Kullanıcının post'larını çekme
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = postsResponse.data;

    // Kullanıcı ve post bilgilerini birleştirme
    const result = {
      ...userData,
      posts: postsData,
    };

    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getData;