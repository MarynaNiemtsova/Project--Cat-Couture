const api = {
  getProducts: async (page) =>
    await fetch(
      `${process.env.REACT_APP_API_URL}/products?limit=10&page=${page}`
    ),
  getReports: async (accessToken) =>
    await fetch(`${process.env.REACT_APP_API_URL}/reports`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }),
};

export default api;
