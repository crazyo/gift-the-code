package com.movember.contribution.data;

import java.util.UUID;

public class Contribution {
  private String id;
  private String userId;
  private long amount;
  private ContributionArea contributionArea;

  public String getId() {
    return id;
  }

  private void setId(final String id) {
    this.id = id;
  }

  public String getUserId() {
    return userId;
  }

  public void setUserId(final String userId) {
    this.userId = userId;
  }

  public long getAmount() {
    return amount;
  }

  public void setAmount(final long amount) {
    this.amount = amount;
  }

  public ContributionArea getContributionArea() {
    return contributionArea;
  }

  public void setContributionArea(final ContributionArea contributionArea) {
    this.contributionArea = contributionArea;
  }

  public static Builder newBuilder() {
    return new Builder();
  }

  public static class Builder {
    private final Contribution prototype = new Contribution();

    private Builder() {
      prototype.setId(UUID.randomUUID().toString());
    }

    public Builder userId(final String userId) {
      prototype.userId = userId;
      return this;
    }

    public Builder amount(final long amount) {
      prototype.amount = amount;
      return this;
    }

    public Builder contributionArea(final ContributionArea contributionArea) {
      prototype.contributionArea = contributionArea;
      return this;
    }

    public Contribution build() {
      return prototype;
    }
  }
}
