package com.track.time.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.track.time.model.UserDetails;
import com.track.time.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/register/saveUserDetails", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Boolean> saveUserDetails(@RequestBody UserDetails userDetails) {
		Boolean result = userService.saveUserDetails(userDetails);
		return new ResponseEntity<>(result, HttpStatus.OK);
	}

	@RequestMapping(value = "/profile/getUserProfile", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserDetails> getprofile(@RequestParam("emailId") String emailId) throws Exception {
		UserDetails result = userService.profile(emailId);
		return new ResponseEntity<>(result, HttpStatus.OK);

	}
}