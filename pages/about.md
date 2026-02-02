---
layout: default
title: About
nav_order: 6
description: "About the CADET project and team"
permalink: /pages/about
---

# About CADET
{: .no_toc }

Learn about the Capacity Expansion Decision Support Tool and the team behind it.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What is CADET?

CADET (Capacity Expansion Decision Support Tool) is a flexible optimization framework designed to help utilities and planners make capacity-related decisions for electric distribution networks. The framework supports multi-objective optimization based on various criteria including:

- 💰 **Cost** - Minimize capital and operational expenses
- ⚡ **Reliability** - Improve system reliability metrics
- 🛡️ **Resilience** - Enhance network resilience to disruptions
- 🌍 **Air Quality** - Reduce emissions and environmental impact
- 📊 **Equity** - Ensure equitable distribution of benefits
- 🌱 **Carbon Reductions** - Support decarbonization goals
- 🔌 **Hosting Capacity** - Maximize distributed energy resource integration

---

## The CADET Suite

The CADET project consists of three main components:

### CADET OPT
The core optimization framework providing:
- Modular architecture with reusable managers, constraints, and objectives
- Support for balanced and unbalanced power flow analysis
- Infrastructure upgrade planning capabilities
- Network reconfiguration optimization
- DER sizing and siting tools

### CADET Stochastic
An extension enabling:
- Multi-stage stochastic optimization
- Decision-making under uncertainty
- Resilience and restoration investment analysis
- Scenario-based planning

### CADET Examples
A collection of:
- Working example implementations
- Test cases and validation suites
- Demonstration of various planning scenarios
- Integration examples with Grid Data Models

---

## Technology Stack

CADET is built on robust, industry-standard technologies:

- **Language:** Python 3.11 and 3.12
- **Optimization Framework:** [Pyomo](http://www.pyomo.org/) - Open-source optimization modeling
- **Solvers:** HiGHS (included), GLPK, Gurobi, CPLEX
- **Data Models:** [Grid Data Models (GDM)](https://github.com/NREL-Distribution-Suites/grid-data-models)
- **Code Quality:** Ruff formatter, pre-commit hooks, comprehensive testing

---

## Development Team

CADET is developed by the National Renewable Energy Laboratory (NREL) with contributions from a dedicated team of researchers and engineers:

### Core Team

**Project Lead:**
- **Jeremy Keen** - [jeremy.keen@nrel.gov](mailto:jeremy.keen@nrel.gov)

**Development Team:**
- **Aadil Latif** - [Aadil.Latif@nrel.gov](mailto:Aadil.Latif@nrel.gov)
- **Abodh Poudyal** - [Abodh.Poudyal@nrel.gov](mailto:Abodh.Poudyal@nrel.gov)
- **Bryan Palmintier**
- **Daniel Thom** - [Daniel.Thom@nrel.gov](mailto:Daniel.Thom@nrel.gov)
- **Kapil Duwadi** - [Kapil.Duwadi@nrel.gov](mailto:Kapil.Duwadi@nrel.gov)

### Contributors
- **Jesse Dugan** (cadet-examples)
- And growing community contributors!

---

## Related Projects

CADET integrates with NREL's Distribution Suites ecosystem:

- **[Grid Data Models](https://github.com/NREL-Distribution-Suites/grid-data-models)** - Standardized data representation for distribution networks
- **[gdmloader](https://github.com/NREL-Distribution-Suites/gdmloader)** - Pre-loaded test cases and data loading utilities
- **[ditto](https://github.com/NREL-Distribution-Suites/ditto)** - Distribution Transformation Tool for model conversion

---

## License

CADET is open-source software distributed under the **BSD 3-Clause License**, promoting:
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

See the [LICENSE](https://github.com/NLR-CADET/cadet-opt/blob/main/LICENSE) file for full details.

---

## Development Status

CADET is under active development. We welcome:
- 🐛 Bug reports
- 💡 Feature requests
- 🤝 Code contributions
- 📝 Documentation improvements
- 💬 Questions and discussions

[Contribute on GitHub](https://github.com/NLR-CADET/cadet-opt/blob/main/CONTRIBUTING.md){: .btn .btn-primary }

---

## Acknowledgments

CADET is developed at the National Renewable Energy Laboratory with support from the U.S. Department of Energy.

### National Renewable Energy Laboratory

NREL is the U.S. Department of Energy's primary national laboratory for renewable energy and energy efficiency research and development. NREL develops renewable energy and energy efficiency technologies and practices, advances related science and engineering, and transfers knowledge and innovations to address the nation's energy and environmental goals.

[Visit NREL CADET Page](https://www.nrel.gov/grid/cadet){: .btn .btn-outline }

---

## Contact

For questions, collaboration opportunities, or support:

- **Email:** Jeremy Keen - [jeremy.keen@nrel.gov](mailto:jeremy.keen@nrel.gov)
- **GitHub Discussions:** [Join the conversation](https://github.com/NLR-CADET/cadet-opt/discussions)
- **GitHub Issues:** [Report bugs or request features](https://github.com/NLR-CADET/cadet-opt/issues)

---

## Citation

If you use CADET in your research, please cite:

```
CADET: Capacity Expansion Decision Support Tool
National Renewable Energy Laboratory
https://github.com/NLR-CADET
```

For academic publications, please check the individual repositories for specific citation information.
