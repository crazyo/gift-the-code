package com.movember.user.controller;

import com.movember.user.data.User;
import com.movember.user.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(final UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/user")
  public User getUser(@RequestParam("id") String id) {
    return userService.getUser(id);
  }
}
