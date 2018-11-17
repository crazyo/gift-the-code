package com.movember.user.service;

import com.movember.user.data.User;
import com.movember.user.data.UserDataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private UserDataSource userDataSource;

  @Autowired
  public UserService(final UserDataSource userDataSource) {
    this.userDataSource = userDataSource;
  }

  public User getUser(final String id) {
    return userDataSource.getUser(id);
  }
}
