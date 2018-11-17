package com.movember.contribution.data;

import java.util.List;

public interface ContributionDataSource {
  List<Contribution> getUserContributions(final String userId);
  long getContributionAreaTotal(final ContributionArea contributionArea);
}
