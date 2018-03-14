package com.track.time.repo;


	import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.track.time.model.Projects;

	public interface ProjectRepo extends MongoRepository<Projects, String> {

		

	}


