package com.movember.contribution.service;

import com.movember.contribution.data.Contribution;
import com.movember.contribution.data.ContributionArea;
import com.movember.contribution.data.ContributionDataSource;
import com.movember.contribution.dto.ContributionRequest;
import com.movember.contribution.dto.UserContributionPerAreaResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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

    RestTemplate restTemplate = new RestTemplate();
    String url = "http://localhost:9001/user-raised";
    url += "?userId=" + contributionRequest.getUserId();
    url += "&raised=" + contributionRequest.getAmount();
    System.out.println(restTemplate.getForEntity(url, Void.class));

    url = "http://localhost:9001/user-points";
    url += "?userId=" + contributionRequest.getUserId();
    url += "&points=" + contributionRequest.getAmount() * 2;
    System.out.println(restTemplate.getForEntity(url, Void.class));
  }
}
