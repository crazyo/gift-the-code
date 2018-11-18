package com.movember.user.controller;

import com.movember.user.data.User;
import com.movember.user.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
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

  @GetMapping("/user-points")
  public void addUserPoints(@RequestParam("userId") String userId, @RequestParam("points") long points) {
    userService.addUserPoints(userId, points);
  }

  @GetMapping("/user-raised")
  public void addUserRaised(@RequestParam("userId") String userId, @RequestParam("raised") long raised) {
    userService.addUserRaised(userId, raised);
  }
}
