package com.track.time.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.track.time.model.UserProfile;
import com.track.time.service.UserService;

@RestController
@RequestMapping("/profile")
public class ProfileController{
	
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/getUserProfile", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserProfile>getprofile(@RequestParam("emailId") String emailId)throws Exception{
		UserProfile result = userService.profile(emailId);
		return new ResponseEntity<>(result, HttpStatus.OK);
	}
}