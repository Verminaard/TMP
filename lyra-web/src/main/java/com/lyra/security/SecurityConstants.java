package com.lyra.security;

public class SecurityConstants {
    public static final String SECRET = "LyraSecretJWTKey";
    public static final long EXPIRATION_TIME = 86_400_000; // 1 day
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/sign-up";

    public static final String ENTRY_LIST_URL = "/entry/list";
}