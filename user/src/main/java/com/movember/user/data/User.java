package com.movember.user.data;

import java.util.UUID;

public class User {
  private String id;  // auto-generated

  private String firstName;
  private String lastName;
  private String email;
  private Gender gender;

  private ContributionArea contributionArea;
  private long totalRaised;
  private long totalScore;

  public String getId() {
    return id;
  }

  private void setId(final String id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(final String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(final String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(final String email) {
    this.email = email;
  }

  public Gender getGender() {
    return gender;
  }

  public void setGender(final Gender gender) {
    this.gender = gender;
  }

  public ContributionArea getContributionArea() {
    return contributionArea;
  }

  public void setContributionArea(final ContributionArea contributionArea) {
    this.contributionArea = contributionArea;
  }

  public long getTotalRaised() {
    return totalRaised;
  }

  public void setTotalRaised(final long totalRaised) {
    this.totalRaised = totalRaised;
  }

  public long getTotalScore() {
    return totalScore;
  }

  public void setTotalScore(final long totalScore) {
    this.totalScore = totalScore;
  }

  public static Builder newBuilder() {
    return new Builder();
  }

  static Builder newBuilder(final String id) {
    return new Builder(id);
  }

  public enum Gender {
    MALE,
    FEMALE
  }

  public static class Builder {
    private final User prototype = new User();

    private Builder() {
      prototype.setId(UUID.randomUUID().toString());
    }

    private Builder(final String id) {
      prototype.setId(id);
    }

    public Builder firstName(final String firstName) {
      prototype.firstName = firstName;
      return this;
    }

    public Builder lastName(final String lastName) {
      prototype.lastName = lastName;
      return this;
    }

    public Builder email(final String email) {
      prototype.email = email;
      return this;
    }

    public Builder gender(final Gender gender) {
      prototype.gender = gender;
      return this;
    }

    public Builder contributionArea(final ContributionArea contributionArea) {
      prototype.contributionArea = contributionArea;
      return this;
    }

    public Builder totalRaised(final long totalRaised) {
      prototype.totalRaised = totalRaised;
      return this;
    }

    public Builder totalScore(final long totalScore) {
      prototype.totalScore = totalScore;
      return this;
    }

    public User build() {
      return prototype;
    }
  }
}
