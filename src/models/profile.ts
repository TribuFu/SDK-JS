// Copyright (c) Tribufu. All Rights Reserved.
// SPDX-License-Identifier: MIT AND Apache-2.0

export type ProfileType = "user" | "bot" | "org";

export type Profile = any;

export interface MiniProfile {
    id: string,
    uuid: string,
    name: string,
    displayName: string,
    type: ProfileType,
    verified: boolean,
    photoUrl: string | null
}
