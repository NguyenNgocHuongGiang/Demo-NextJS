export const getProductById = async (id: number) => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`,
      {
        next: {
          revalidate: 10, // cache thoi gian 10s: tu about qua news thi se khong fetch lai neu du lieu khong thay doi
        },
      }
    );
    const data = await response.json();
    return data.content;
  } catch (error) {
    console.log("Error fetching product:", error);
  }
};

export const fetchShoes = async () => {
    try {
      const response = await fetch(
        "https://apistore.cybersoft.edu.vn/api/Product"
      );
      const data = await response.json();
      return data.content.slice(0, 18);
    } catch (error) {
      console.error("Error fetching shoes:", error);
    }
  };
  

export const searchProduct = async (keyword: string) => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`
    );
    const data = await response.json();
    return data.content;
  } catch (error) {
    console.log("Error fetching product:", error);
  }
};
