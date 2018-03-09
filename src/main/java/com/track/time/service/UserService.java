package com.track.time.service;

import com.track.time.model.UserDetails;
import com.track.time.model.UserLogin;

public interface UserService {

	public boolean saveUserDetails(UserDetails userDetails);

	public  UserDetails validateLogin(UserLogin userLogin);
	
	public UserDetails profile(String emailid);
}
