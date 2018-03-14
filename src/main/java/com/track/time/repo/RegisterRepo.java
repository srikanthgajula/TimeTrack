package com.track.time.repo;
import java.util.List;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.track.time.model.UserDetails;

public interface RegisterRepo extends MongoRepository<UserDetails, String> {

	UserDetails findByEmailId(String emailId);

}
