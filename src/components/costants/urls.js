const API_URL = process.env.REACT_APP_API_URL
export const REGISTER_NEW_PROBLEMS = `${API_URL}/client/register-problems`;
export const GET_ID_SUGGESTIONS = `${API_URL}/client/client-suggestions`;
export const GET_ID_CLIENT_TRACING = `${API_URL}/client/client-tracing`;
export const GET_MECHANICAL_PROBLEMS = `${API_URL}/mechanic/view-problems-open`;
export const REGISTER_SUGGEST = `${API_URL}/mechanic/register-suggest`;
export const GET_MY_SUGGEST = `${API_URL}/mechanic/view-my-suggestions`;
export const REGISTER_START_JOB = `${API_URL}/mechanic/job-start`;

export const GET_MY_ALL_JOBS = `${API_URL}/mechanic/view-my-all-jobs`;
