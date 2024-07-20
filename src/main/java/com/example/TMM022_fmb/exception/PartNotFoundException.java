package com.example.TMM022_fmb.exception;

public class PartNotFoundException extends RuntimeException {
    private String message;

    public PartNotFoundException(String message) {
        super(message);
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}