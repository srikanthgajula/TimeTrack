package com.track.time.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ApplicationController {

	@RequestMapping("/")
    public String login() {
		System.out.println("ApplicationController");
        return "views/index";
    }

@RequestMapping("/login/userprofile")
public String userProfile() {
	System.out.println("userprofile");
    return "views/profile";
}
}

