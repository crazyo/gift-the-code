package com.movember.contribution.controller;

import com.movember.contribution.data.ContributionArea;
import com.movember.contribution.dto.ContributionRequest;
import com.movember.contribution.dto.UserContributionPerAreaResponse;
import com.movember.contribution.service.ContributionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin
@RestController
public class ContributionController {

  private final ContributionService contributionService;

  @Autowired
  public ContributionController(final ContributionService contributionService) {
    this.contributionService = contributionService;
  }

  @GetMapping("/user_contributions_per_area")
  public Map<ContributionArea, UserContributionPerAreaResponse> getUserContributionPerArea(@RequestParam("userId") String userId) {
    return contributionService.getUserContributionsForAllAreas(userId);
  }

  @PostMapping("/contribution")
  public void createContribution(@RequestBody ContributionRequest contributionRequest) {
    contributionService.createContribution(contributionRequest);
  }
}
