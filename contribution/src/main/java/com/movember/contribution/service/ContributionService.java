package com.movember.contribution.service;

import com.movember.contribution.data.Contribution;
import com.movember.contribution.data.ContributionArea;
import com.movember.contribution.data.ContributionDataSource;
import com.movember.contribution.dto.ContributionRequest;
import com.movember.contribution.dto.UserContributionPerAreaResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ContributionService {

  private final ContributionDataSource contributionDataSource;

  @Autowired
  public ContributionService(final ContributionDataSource contributionDataSource) {
    this.contributionDataSource = contributionDataSource;
  }

  public Map<ContributionArea, UserContributionPerAreaResponse> getUserContributionsForAllAreas(String userId) {
    Map<ContributionArea, UserContributionPerAreaResponse> result = new HashMap<>();

    for (ContributionArea contributionArea : ContributionArea.values()) {
      UserContributionPerAreaResponse item = new UserContributionPerAreaResponse();
      item.setContributionArea(contributionArea);
      item.setUserAmount(contributionDataSource.getContributionAreaUser(userId, contributionArea));
      item.setTotalAmount(contributionDataSource.getContributionAreaTotal(contributionArea));
      result.put(contributionArea, item);
    }

    return result;
  }

  public void createContribution(final ContributionRequest contributionRequest) {
    contributionDataSource.createContribution(
        Contribution.newBuilder()
            .userId(contributionRequest.getUserId())
            .amount(contributionRequest.getAmount())
            .contributionArea(contributionRequest.getContributionArea())
            .build()
    );
  }
}
