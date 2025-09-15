declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_API_URL?: string;
    readonly REACT_APP_FEATURE_FLAG?: "true" | "false";
  }
}
