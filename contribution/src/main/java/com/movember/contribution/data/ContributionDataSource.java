package com.movember.contribution.data;

public interface ContributionDataSource {
  long getContributionAreaUser(final String userId, final ContributionArea contributionArea);
  long getContributionAreaTotal(final ContributionArea contributionArea);
  void createContribution(final Contribution contribution);
}
