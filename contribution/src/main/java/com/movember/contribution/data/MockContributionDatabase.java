package com.movember.contribution.data;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class MockContributionDatabase implements ContributionDataSource {

  private static final String TEST_USER_ID = "1234abcd";

  private static final List<Contribution> contributions = new ArrayList<>();

  static {
    contributions.add(
        Contribution.newBuilder()
            .userId(TEST_USER_ID)
            .amount(50)
            .programName("TEST TEST TESTICULAR!")
            .contributionArea(ContributionArea.TESTICULAR_CANCER)
            .build()
    );
    contributions.add(
        Contribution.newBuilder()
            .userId(TEST_USER_ID)
            .amount(400)
            .programName("MENtal HELP")
            .contributionArea(ContributionArea.MENTAL_HEALTH_AND_SUICIDE_PREVENTION)
            .build());
  }

  @Override
  public List<Contribution> getUserContributions(final String userId) {
    return contributions
        .stream()
        .filter(contribution -> userId.equals(contribution.getUserId()))
        .collect(Collectors.toList());
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
}
