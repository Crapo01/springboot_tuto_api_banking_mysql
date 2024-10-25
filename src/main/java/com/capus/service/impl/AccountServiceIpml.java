package com.capus.service.impl;

import org.springframework.stereotype.Service;

import com.capus.dto.AccountDto;
import com.capus.entity.Account;
import com.capus.mapper.AccountMapper;
import com.capus.repository.AccountRepository;
import com.capus.service.AccountService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccountServiceIpml implements AccountService{
	
	private AccountRepository accountRepository;

	
	public AccountServiceIpml(AccountRepository accountRepository) {
		this.accountRepository = accountRepository;
	}

	@Override
	public AccountDto createAccount(AccountDto accountDto) {
		Account account = AccountMapper.mapToAccount(accountDto);
		Account savedAccount = accountRepository.save(account);
		return AccountMapper.mapToAccountDto(savedAccount);
	}

	@Override
	public AccountDto getAccountById(Long id) {
		Account account = accountRepository
				.findById(id)
				.orElseThrow(()->new RuntimeException(id+" No account found"));
		return AccountMapper.mapToAccountDto(account);
	}

	@Override
	public AccountDto deposit(Long id, double amount) {
		Account account = accountRepository
				.findById(id)
				.orElseThrow(()->new RuntimeException(id+" No account found"));
		double total = account.getBalance()+amount;
		account.setBalance(total);
		Account savedAccount = accountRepository.save(account);
		return AccountMapper.mapToAccountDto(savedAccount);
	}

	@Override
	public AccountDto withdraw(Long id, double amount) {
		Account account = accountRepository
				.findById(id)
				.orElseThrow(()->new RuntimeException(" No account found"));
		if (account.getBalance()<amount) {
			throw new RuntimeException("Insufficient balance");
		}

		double total = account.getBalance()-amount;
		account.setBalance(total);
		Account savedAccount = accountRepository.save(account);
		return AccountMapper.mapToAccountDto(savedAccount);
	}

	@Override
	public List<AccountDto> getAllAccounts() {
		List<Account> accounts = accountRepository.findAll();
		return accounts.stream().map(AccountMapper::mapToAccountDto).collect(Collectors.toList());
	}

	@Override
	public void deleteAccount(Long id) {
		Account account = accountRepository
				.findById(id)
				.orElseThrow(()->new RuntimeException(" No account found"));
		accountRepository.deleteById(id);
	}


}
