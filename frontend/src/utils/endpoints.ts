const endpoints = {
  base: `${import.meta.env.VITE_API_URL}`,
  getById: (id: number) => `${import.meta.env.API_URL}/${id}`,
  setComplete: (id: number) => `${import.meta.env.API_URL}/${id}/complete`
};

export default endpoints;
