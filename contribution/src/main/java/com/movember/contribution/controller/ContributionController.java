package com.movember.contribution.controller;

import com.movember.contribution.dto.UserContributionPerArea;
import com.movember.contribution.service.ContributionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ContributionController {

  private final ContributionService contributionService;

  @Autowired
  public ContributionController(final ContributionService contributionService) {
    this.contributionService = contributionService;
  }

  @GetMapping("/userContributionPerArea")
  public List<UserContributionPerArea> getUserContributionPerArea(@RequestParam("userId") String userId) {
    return contributionService.getUserContributionsForAllAreas(userId);
  }
}
