// Copyright (c) Tribufu. All Rights Reserved.

import { TribufuApi } from "./api";

/**
 * **Tribufu Bot**
 *
 * To authenticate a bot you need to use the bot token obtained from the Tribufu Developer Portal.
 *
 * - A bot is a special type of user account.
 * - A bot give you read and write access to the Tribufu API.
 */
export class TribufuBot extends TribufuApi {
    constructor(token: string) {
        super({ accessToken: token });
    }

    /**
     * Try to create a TribufuBot from environment variables.
     *
     * - This will only work if the environment variables are set.
     *
     * @param prefix A prefix for the environment variables.
     * @returns TribufuBot | null
     * @example
     * ```ts
     * // process.env.TRIBUFU_BOT_TOKEN
     * const bot = TribufuBot.fromEnv("TRIBUFU_");
     * ```
     */
    public static override fromEnv(prefix: string = ""): TribufuBot | null {
        const token = process.env[`${prefix}BOT_TOKEN`];

        if (token) {
            return TribufuApi.withBot(token);
        }

        return null;
    }
}
