package com.movember.contribution.data;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class MockContributionDatabase implements ContributionDataSource {

  private static final String TEST_USER_ID = "1234abcd";

  private static final List<Contribution> contributions = new ArrayList<>();

  static {
    contributions.add(
        Contribution.newBuilder()
            .userId("other_user_01")
            .amount(1000)
            .contributionArea(ContributionArea.PROSTATE_CANCER)
            .build()
    );
    contributions.add(
        Contribution.newBuilder()
            .userId(TEST_USER_ID)
            .amount(50)
            .contributionArea(ContributionArea.TESTICULAR_CANCER)
            .build()
    );
    contributions.add(
        Contribution.newBuilder()
            .userId("other_user_02")
            .amount(1500)
            .contributionArea(ContributionArea.TESTICULAR_CANCER)
            .build()
    );
    contributions.add(
        Contribution.newBuilder()
            .userId(TEST_USER_ID)
            .amount(450)
            .contributionArea(ContributionArea.MENTAL_HEALTH_AND_SUICIDE_PREVENTION)
            .build()
    );
    contributions.add(
        Contribution.newBuilder()
            .userId("other_user_03")
            .amount(100)
            .contributionArea(ContributionArea.MENTAL_HEALTH_AND_SUICIDE_PREVENTION)
            .build()
    );
  }

  @Override
  public long getContributionAreaUser(final String userId, final ContributionArea contributionArea) {
    return contributions
        .stream()
        .filter(contribution -> userId.equals(contribution.getUserId()) && contributionArea == contribution.getContributionArea())
        .map(Contribution::getAmount)
        .reduce(Long::sum)
        .orElse(0L);
  }

  @Override
  public long getContributionAreaTotal(final ContributionArea contributionArea) {
    return contributions
        .stream()
        .filter(contribution -> contributionArea == contribution.getContributionArea())
        .map(Contribution::getAmount)
        .reduce(Long::sum)
        .orElse(0L);
  }

  @Override
  public void createContribution(final Contribution contribution) {
    contributions.add(contribution);
  }
}
