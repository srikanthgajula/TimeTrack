package com.track.time.service;
import org.springframework.stereotype.Service;

import com.track.time.model.UserDetails;


public interface UserService {

	public boolean saveUserDetails(UserDetails userDetails);
}
