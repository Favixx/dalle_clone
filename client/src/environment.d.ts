declare global {
    namespace NodeJs {
        interface ProcessEnv {
            REACT_APP_IMAGEAPI_KEY: string
            NODE_ENV: "development" | "production"
        }
    }
}

export {};