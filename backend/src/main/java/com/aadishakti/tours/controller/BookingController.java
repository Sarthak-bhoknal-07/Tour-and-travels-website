package com.aadishakti.tours.controller;

import com.aadishakti.tours.model.Booking;
import com.aadishakti.tours.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        try {
            Booking savedBooking = bookingRepository.save(booking);
            return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        try {
            List<Booking> bookings = bookingRepository.findAll();
            if (bookings.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(bookings, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
