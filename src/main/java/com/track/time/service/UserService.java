package com.track.time.service;

import com.track.time.model.UserDetails;
import com.track.time.model.UserLogin;
import com.track.time.model.UserProfile;

public interface UserService {

	public boolean saveUserDetails(UserDetails userDetails);

	public Boolean validateLogin(UserLogin userLogin);
	
	public UserProfile profile(String emailid);
}
