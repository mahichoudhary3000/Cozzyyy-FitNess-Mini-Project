const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const token = localStorage.getItem("token");
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}

export const api = {
  signup: (data) => request("/auth/signup", { method: "POST", body: JSON.stringify(data) }),
  login: (data) => request("/auth/login", { method: "POST", body: JSON.stringify(data) }),
  me: () => request("/auth/me"),
  updateUser: (id, data) => request(`/users/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  bmi: (data) => request("/bmi", { method: "POST", body: JSON.stringify(data) }),
  bmiHistory: (userId) => request(`/bmi/${userId}`),
  meals: () => request("/meals"),
  mealRecords: (userId) => request(`/meal-records/${userId}`),
  saveMealRecord: (data) => request("/meal-records", { method: "POST", body: JSON.stringify(data) }),
  updateMealRecord: (id, completed) => request(`/meal-records/${id}`, { method: "PUT", body: JSON.stringify({ completed }) }),
  adminStats: () => request("/admin/stats"),
  adminUsers: () => request("/users"),
  deleteUser: (id) => request(`/users/${id}`, { method: "DELETE" }),
  adminBmi: () => request("/admin/bmi"),
  adminMeals: () => request("/admin/meal-records"),
  aggregation: () => request("/admin/aggregation")
};
