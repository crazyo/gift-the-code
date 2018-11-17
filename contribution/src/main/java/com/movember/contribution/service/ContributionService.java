package com.movember.contribution.service;

import com.movember.contribution.data.Contribution;
import com.movember.contribution.data.ContributionDataSource;
import com.movember.contribution.dto.UserContributionPerArea;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ContributionService {

  private final ContributionDataSource contributionDataSource;

  @Autowired
  public ContributionService(final ContributionDataSource contributionDataSource) {
    this.contributionDataSource = contributionDataSource;
  }

  public List<UserContributionPerArea> getUserContributionsForAllAreas(String userId) {
    List<UserContributionPerArea> result = new ArrayList<>();

    List<Contribution> userContributions = contributionDataSource.getUserContributions(userId);
    userContributions
        .stream()
        .map(Contribution::getContributionArea)
        .distinct()
        .forEach(userContributionArea -> {
          UserContributionPerArea item = new UserContributionPerArea();
          item.setContributionArea(userContributionArea);
          item.setTotalAmount(contributionDataSource.getContributionAreaTotal(userContributionArea));
          item.setUserAmount(
              userContributions
                  .stream()
                  .filter(contribution -> userContributionArea.equals(contribution.getContributionArea()))
                  .map(Contribution::getAmount)
                  .reduce(Long::sum)
                  .orElse(0L)
          );
          result.add(item);
        });

    return result;
  }
}
