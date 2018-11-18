package com.movember.contribution.dto;

import com.movember.contribution.data.ContributionArea;

public class UserContributionPerAreaResponse {
  private ContributionArea contributionArea;
  private long userAmount;
  private long totalAmount;

  public ContributionArea getContributionArea() {
    return contributionArea;
  }

  public void setContributionArea(final ContributionArea contributionArea) {
    this.contributionArea = contributionArea;
  }

  public long getUserAmount() {
    return userAmount;
  }

  public void setUserAmount(final long userAmount) {
    this.userAmount = userAmount;
  }

  public long getTotalAmount() {
    return totalAmount;
  }

  public void setTotalAmount(final long totalAmount) {
    this.totalAmount = totalAmount;
  }
}
