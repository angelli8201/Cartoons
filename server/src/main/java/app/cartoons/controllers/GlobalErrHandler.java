package app.cartoons.controllers;

import org.springframework.beans.TypeMismatchException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConversionException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalErrHandler {

    @ExceptionHandler(HttpMessageConversionException.class)
    public ResponseEntity<String> handleHttpMessageConversionException(HttpMessageConversionException ex) {
        return new ResponseEntity<String>("Http Message Conversion: " + ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(TypeMismatchException.class)
    public ResponseEntity<String> handleTypeMismatchException(TypeMismatchException ex) {
        return new ResponseEntity<String>("Mismatch: " + ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<String> handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException ex) {
        return new ResponseEntity<String>("HTTP Request Not Supported: " + ex.getMessage(), HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ResponseEntity<String> handleHttpMediaTypeNotSupportedException(HttpMediaTypeNotSupportedException ex) {
        return new ResponseEntity<String>("Unsupported Media Type: " + ex.getMessage(), HttpStatus.UNSUPPORTED_MEDIA_TYPE);
    }
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> handleDataIntegrityViolation(DataIntegrityViolationException ex) {
        return new ResponseEntity<>("Data integrity violation: " +ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception ex) {
        return new ResponseEntity<String>("Something went wrong on our end :(", HttpStatus.INTERNAL_SERVER_ERROR);
    }


}