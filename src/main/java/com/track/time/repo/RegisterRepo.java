package com.track.time.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.track.time.model.UserDetails;


public interface RegisterRepo extends MongoRepository<UserDetails, Integer> {
	

}
