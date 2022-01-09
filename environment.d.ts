declare global {
    namespace NodeJS {
        interface ProcessEnv {
            botToken: string;
            clientId: string;
            guildId: string;
            mongoURI: string;
        }
    }
}

export {};
