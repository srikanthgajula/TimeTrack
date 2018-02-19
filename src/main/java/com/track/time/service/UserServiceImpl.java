package com.track.time.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.track.time.model.UserDetails;
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

}