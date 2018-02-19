package com.track.time.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.track.time.model.UserDetails;
import com.track.time.service.UserService;

@RestController
@RequestMapping("/register")
public class RegisterController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/saveUserDetails", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Boolean> saveUserDetailes(@RequestBody UserDetails userDetails)  {
		Boolean result = userService.saveUserDetails(userDetails);
		return new ResponseEntity<>(result, HttpStatus.OK);
	}
}
