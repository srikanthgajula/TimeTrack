package com.track.time.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.track.time.model.UserDetails;
import com.track.time.model.UserLogin;
import com.track.time.model.UserProfile;
import com.track.time.repo.RegisterRepo;
import com.track.time.repo.UserProfileRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private RegisterRepo registerRepo;
	@Autowired
	private UserProfileRepo userProfileRepo;


	@Override
	public boolean saveUserDetails(UserDetails userDetails) {
		UserDetails userDetails2 = registerRepo.save(userDetails);
		if (null != userDetails2) {
			return true;
		}
		return false;
	}

	@Override
	public Boolean validateLogin(UserLogin userLogin) {
		UserDetails userDetails2 = registerRepo.findByEmailId(userLogin.getEmailId());
		if (null != userDetails2 && userDetails2.getPassword().equalsIgnoreCase(userLogin.getPassword())) {
			return true;
		}
		return false;
	}

	@Override
	public UserProfile profile(String emailId) {
		// TODO Auto-generated method stub
		return userProfileRepo.findByEmailId(emailId);
		
		
		}
	}
		
		
