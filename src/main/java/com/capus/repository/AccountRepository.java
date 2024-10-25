package com.capus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capus.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

	Account save(Iterable<Object> o);
	

}
