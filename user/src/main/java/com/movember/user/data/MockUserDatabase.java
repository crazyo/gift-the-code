package com.movember.user.data;

import com.movember.user.data.User.Gender;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class MockUserDatabase implements UserDataSource {

  private static final String TEST_USER_ID = "1234abcd";

  private static final Map<String, User> users = new HashMap<>();

  static {
    users.put(
        TEST_USER_ID,
        User.newBuilder(TEST_USER_ID)
            .firstName("John")
            .lastName("Smith")
            .email("john.smith@gmail.com")
            .gender(Gender.MALE)
            .contributionArea(ContributionArea.MENTAL_HEALTH_AND_SUICIDE_PREVENTION)
            .totalRaised(500)
            .totalScore(1000)
            .build()
    );
  }

  public User getUser(final String id) {
    return users.get(id);
  }
}
