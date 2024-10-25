package com.capus.controller;



import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.capus.dto.AccountDto;
import com.capus.service.AccountService;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
	
	private final AccountService accountService;

	public AccountController(AccountService accountService) {
		this.accountService = accountService;
	}
	
	//ADD REST API POST add account
	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@PostMapping
	public ResponseEntity<AccountDto> addAccount(@RequestBody AccountDto accountDto){
		System.out.println(accountDto);
		return new ResponseEntity<>(accountService.createAccount(accountDto), HttpStatus.CREATED);
	}
	
	//ADD REST API GET account get By Id
	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@GetMapping("/{id}")
	public ResponseEntity<AccountDto> getAccountById(@PathVariable Long id){
		System.out.println("Get account by ID request");
		AccountDto accountDto = accountService.getAccountById(id);
		return ResponseEntity.ok(accountDto);
	}
	
	// ADD REST API POST deposit	
	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@PutMapping("/{id}/deposit")
	public ResponseEntity<AccountDto> deposit(@PathVariable Long id,@RequestBody Map<String,Double> request){
		System.out.println("deposit: "+request);
		Double amount = request.get("amount");
		System.out.println("amount: "+amount);
		AccountDto accountDto = accountService.deposit(id,amount);
		return ResponseEntity.ok(accountDto);
		
	}

	// ADD REST API POST withdraw
	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@PutMapping("/{id}/withdraw")
	public ResponseEntity<AccountDto> withdraw(@PathVariable Long id,@RequestBody Map<String,Double> request){
		System.out.println("withdraw: "+request);
		Double amount = request.get("amount");
		System.out.println("amount: "+amount);
		AccountDto accountDto = accountService.withdraw(id,amount);
		return ResponseEntity.ok(accountDto);

	}

	//GET ALL ACCOUNTS REST API
	@CrossOrigin()
	@GetMapping("/all")
	public ResponseEntity<List<AccountDto>> getAllAccounts(){
		List<AccountDto> accountDtos = accountService.getAllAccounts();
		return ResponseEntity.ok(accountDtos);
	}

	//DELETE ACCOUNT BY ID REST API
	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteAccount(@PathVariable Long id){
		System.out.println("Delete by ID request");
		accountService.deleteAccount(id);
		return ResponseEntity.ok(id+" Deleted");
	}

	
}
