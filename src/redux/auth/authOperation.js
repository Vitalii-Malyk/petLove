import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  BASE_URL,
  CURRENT_USER_FULL_URL,
  CURRENT_USER_URL,
  LOGIN_URL,
  LOGOT_URL,
  REGISTER_URL,
} from "../../helpers/api";

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(REGISTER_URL, credentials);
      token.set(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(LOGIN_URL, credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/currentUser',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get(CURRENT_USER_URL);
//       token.set(res.data.token);
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchCurrentUserFull = createAsyncThunk(
  "auth/currentUserFull",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(CURRENT_USER_FULL_URL);
      token.set(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post(LOGOT_URL);
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      token.set(persistedToken);
      const res = await axios.get(CURRENT_USER_URL);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
