package com.track.time.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.track.time.model.UserProfile;

public interface UserProfileRepo extends MongoRepository<UserProfile, String>{

	UserProfile findByEmailId(String emailId);

}
