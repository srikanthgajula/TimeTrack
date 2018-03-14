package com.track.time.service;

import java.util.List;

import com.track.time.model.Projects;
import com.track.time.model.UserDetails;
import com.track.time.model.UserLogin;

public interface UserService {

	public boolean saveUserDetails(UserDetails userDetails);

	public UserDetails validateLogin(UserLogin userLogin);

	public UserDetails profile(String emailid);

	public List<Projects> getProjects();
	
	public List<UserDetails> getEmployeeDetails();


}
