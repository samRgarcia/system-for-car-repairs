const API_URL = process.env.REACT_APP_API_URL
export const REGISTER_NEW_PROBLEMS = `${API_URL}/client/register-problems`;
export const GET_ID_SUGGESTIONS = `${API_URL}/client/client-suggestions`;
export const GET_ID_CLIENT_TRACING = `${API_URL}/client/client-tracing`;
export const GET_ID_CLIENT_TRACING_HISTORY = `${API_URL}/client/client-tracing-history`;
export const UPDATE_ACCEPTED_SUGGESTION = `${API_URL}/client/accepted-solution`;

export const UPDATE_ACCEPTED_JOB = `${API_URL}/client/update-accepted-job`;
export const UPDATE_DENY_JOB = `${API_URL}/client/update-deny-job`;



export const GET_MECHANICAL_PROBLEMS = `${API_URL}/mechanic/view-problems-open`;
export const REGISTER_SUGGEST = `${API_URL}/mechanic/register-suggest`;
export const GET_MY_SUGGEST = `${API_URL}/mechanic/view-my-suggestions`;
export const REGISTER_START_JOB = `${API_URL}/mechanic/job-start`;
export const UPDATE_FINISH_JOB = `${API_URL}/mechanic/job-finish`;
export const GET_MY_ALL_JOBS = `${API_URL}/mechanic/view-my-all-jobs`;
export const GET_ITEM_PROBLEMS = `${API_URL}/mechanic/view-item-problems`;
export const GET_DATE_RANKS = `${API_URL}/mechanic/view-date-end-start`;

export const POST_SIGN_UP = `${API_URL}/login/register-user`;
export const POST_SIGN = `${API_URL}/login/login`;

