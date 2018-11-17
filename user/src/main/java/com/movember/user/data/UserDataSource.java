package com.movember.user.data;

public interface UserDataSource {
  User getUser(final String id);
}
