package com.movember.contribution.dto;

import com.movember.contribution.data.ContributionArea;

public class ContributionRequest {
  private String userId;
  private long amount;
  private ContributionArea contributionArea;

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
}
