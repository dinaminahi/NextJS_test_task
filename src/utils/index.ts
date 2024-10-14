const API_URL = process.env.REACT_APP_API_URL;

export const getBlogListData = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getBlogData = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getBlogCommentsData = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}/comments`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
