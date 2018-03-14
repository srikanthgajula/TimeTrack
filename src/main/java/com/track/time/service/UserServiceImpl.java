package com.track.time.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.track.time.model.Projects;
import com.track.time.model.UserDetails;
import com.track.time.model.UserLogin;
import com.track.time.repo.ProjectRepo;
import com.track.time.repo.RegisterRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private RegisterRepo registerRepo;
	@Autowired
	private ProjectRepo projectRepo;

	@Override
	public boolean saveUserDetails(UserDetails userDetails) {
		userDetails.setRole("Employee");
		userDetails.setStatus("inactive");
		UserDetails userDetails2 = registerRepo.save(userDetails);
		if (null != userDetails2) {
			return true;
		}
		return false;
	}

	@Override
	public UserDetails validateLogin(UserLogin userLogin) {
		UserDetails userDetails2 = registerRepo.findByEmailId(userLogin.getEmailId());
		if (null != userDetails2 && userDetails2.getPassword().equalsIgnoreCase(userLogin.getPassword())) {
			return userDetails2;
		}
		return null;
	}

	@Override
	public UserDetails profile(String emailId) {
		UserDetails userDetails2 = registerRepo.findByEmailId(emailId);
		return userDetails2;

	}

	@Override
	public List<Projects> getProjects() {
		return projectRepo.findAll();

	}

@Override
public List<UserDetails> getEmployeeDetails() {
	return registerRepo.findAll();

}
}



