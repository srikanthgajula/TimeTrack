package com.track.time.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.track.time.model.UserDetails;
import com.track.time.model.UserLogin;
import com.track.time.repo.RegisterRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private RegisterRepo registerRepo;

	@Override
	public boolean saveUserDetails(UserDetails userDetails) {
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
		// TODO Auto-generated method stub
		UserDetails userDetails2 = registerRepo.findByEmailId(emailId);
		return userDetails2;

	}
}
