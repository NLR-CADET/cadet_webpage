---
layout: default
title: Home
nav_order: 1
description: "CADET - Multi-objective optimization framework for distribution network planning"
permalink: /
---

# CADET - Distribution Network Planning Framework
{: .fs-9 }

A flexible optimization framework for making capacity-related decisions in electric distribution networks based on multiple objectives including cost, reliability, resilience, air quality, carbon reductions, and hosting capacity.
{: .fs-6 .fw-300 }

[Get Started](/cadet_webpage/pages/getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[View on GitHub](https://github.com/NLR-CADET){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## The CADET Suite

The CADET project consists of three interconnected repositories that provide a comprehensive solution for distribution network planning and optimization:

<div class="project-cards" markdown="1">

### 🔌 CADET OPT

The core optimization framework with comprehensive documentation, modular architecture, and support for various distribution planning scenarios.

**Key capabilities:**
- Multi-objective optimization for distribution network planning
- DER sizing and siting (solar PV, battery storage)
- Infrastructure upgrade planning (reconductoring, transformer replacements)
- Network reconfiguration and switching optimization
- Hosting capacity analysis

[Learn More](/cadet_webpage/projects/cadet-opt){: .btn .btn-outline }
[Documentation](https://nlr-cadet.github.io/cadet-opt/){: .btn .btn-outline }

---

### 📊 CADET Stochastic
{: .text-purple-200 }
Extends CADET with stochastic optimization capabilities for decision-making under uncertainty, particularly for resilience and restoration planning.

**Key capabilities:**
- Multi-stage stochastic optimization modeling
- Scenario-based decision making under uncertainty
- Restoration-investment-prioritization modeling
- Infrastructure hardening analysis with risk-based scenarios

[Learn More](/cadet_webpage/projects/cadet-stochastic){: .btn .btn-outline }

---

### 💡 CADET Examples
{: .text-green-200 }
Practical example implementations and test cases for CADET OPT, helping users understand how to apply the framework to real distribution network planning problems.

**Key features:**
- Working examples of cadet-opt applications
- Hosting capacity analysis examples
- Integration with Grid Data Models
- Test suite for validation

[Learn More](/cadet_webpage/projects/cadet-examples){: .btn .btn-outline }

</div>

---

## Recent News

{% for post in site.posts limit:3 %}
<div class="post-preview">
<h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
<p><em>{{ post.date | date: "%B %d, %Y" }}</em></p>
{{ post.excerpt }}
<p><a href="{{ post.url | relative_url }}" class="btn btn-outline">Read more</a></p>
</div>
{% endfor %}

<p><a href="/cadet_webpage/blog/" class="btn btn-primary">View All News</a></p>

---

## Quick Links

- [Installation Guide](/cadet_webpage/pages/getting-started)
- [Documentation](https://nlr-cadet.github.io/cadet-opt/)
- [GitHub Organization](https://github.com/NLR-CADET)
- [NREL CADET Info](https://www.nrel.gov/grid/cadet)
- [GitHub Discussions](https://github.com/NLR-CADET/cadet-opt/discussions)

---

## About

CADET is developed by the National Renewable Energy Laboratory (NREL) to help utilities and planners evaluate and recommend solutions for distribution network planning. The framework leverages Pyomo for optimization modeling and integrates with NREL's Grid Data Models ecosystem.

**Technical Stack:** Python 3.11/3.12, Pyomo, HiGHS/GLPK/Gurobi/CPLEX solvers

**License:** BSD 3-Clause

[Learn More About CADET](/cadet_webpage/pages/about){: .btn .btn-outline }
