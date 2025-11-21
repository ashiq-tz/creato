import { StreamChat } from "stream-chat";

const getApiKey = () => {
    const key = process.env.STREAM_API_KEY;
    if (!key) {
        throw new Error("Missing required environment variable: STREAM_API_KEY");
    }
    return key;
};

const getApiSecret = () => {
    const secret = process.env.STREAM_API_SECRET;
    if (!secret) {
        throw new Error("Missing required environment variable: STREAM_API_SECRET");
    }
    return secret;
};

export const apikey = getApiKey();
export const apiSecret = getApiSecret();

export const serverClient = new StreamChat(apikey, apiSecret);