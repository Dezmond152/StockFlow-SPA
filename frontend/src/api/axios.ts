import axios, { type CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: "http://localhost:3001/api",

  timeout: 5000,
};

const instance = axios.create(config);

export default instance;
