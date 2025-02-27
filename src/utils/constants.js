export const backgroundImg =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg 959w";

export const netflixLogo =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const apiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const apiOptionsWithKey = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};


export const CORS_PROXY_URL = "https://api.allorigins.win/raw?url=";
export const CORS_PROXY_URL_BACKUP = "https://api.codetabs.com/v1/proxy?quest=";
export const CORS_PROXY_URL_BACKUP2 = "https://corsproxy.io/?";
export const CORS_PROXY_URL_BACKUP3 = "https://cors-anywhere.herokuapp.com/";
export const CORS_PROXY_URL_BACKUP4 = "https://crossorigin.me/";
export const CORS_PROXY_URL_BACKUP5 = "https://thingproxy.freeboard.io/fetch/";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const TMDB_PROXY_BASE_URL =
  CORS_PROXY_URL + encodeURIComponent(TMDB_BASE_URL);

export const TMDB_PROXY_BASE_URL_BACKUP =
  CORS_PROXY_URL_BACKUP + encodeURIComponent(TMDB_BASE_URL);

export const TMDB_PROXY_BASE_URL_BACKUP2 =
  CORS_PROXY_URL_BACKUP2 + encodeURIComponent(TMDB_BASE_URL);

export const TMDB_PROXY_BASE_URL_BACKUP3 =
  CORS_PROXY_URL_BACKUP3 + TMDB_BASE_URL;

export const TMDB_PROXY_BASE_URL_BACKUP4 =
  CORS_PROXY_URL_BACKUP4 + TMDB_BASE_URL;

export const TMDB_PROXY_BASE_URL_BACKUP5 =
  CORS_PROXY_URL_BACKUP5 + TMDB_BASE_URL;

export const TMDB_API_KEY = "5026630f744ffb0dc5346055e6df79f3";

export const BG_URL_Netflix =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg 959w";

export const Supported_Language = [
  { indentifier: "en", name: "English" },
  { indentifier: "tamil", name: "Tamil" },
  { indentifier: "hindi", name: "Hindi" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
