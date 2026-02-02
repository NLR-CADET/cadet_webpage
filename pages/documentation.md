---
layout: default
title: Documentation
nav_order: 4
description: "External documentation resources for CADET"
permalink: /pages/documentation
---

# Documentation
{: .no_toc }

Comprehensive guides, tutorials, and references for CADET
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Official Documentation

### CADET OPT Documentation
The main documentation site for CADET OPT with comprehensive guides and API references.

[Visit CADET OPT Docs](https://nlr-cadet.github.io/cadet-opt/){: .btn .btn-primary .mb-4 }

**Key sections:**
- **[Installation Guide](https://nlr-cadet.github.io/cadet-opt/install.html)** - Setup and configuration
- **[Tutorials](https://nlr-cadet.github.io/cadet-opt/tutorial/index.html)** - Step-by-step learning
- **[How-To Guides](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Task-specific instructions
- **[API Reference](https://nlr-cadet.github.io/cadet-opt/references/index.html)** - Detailed API documentation

---

## Tutorials

### Getting Started
Learn the basics of CADET:
- **[Installation Guide](/cadet_webpage/pages/getting-started)** - Local installation instructions
- **[Quick Start Tutorial](https://nlr-cadet.github.io/cadet-opt/tutorial/index.html)** - Your first CADET project
- **Grid Data Models Basics** - Understanding network representation

### Core Tutorials

1. **[Linearized Power Flow Analysis](https://nlr-cadet.github.io/cadet-opt/tutorial/index.html)**
   - Balanced systems
   - Unbalanced systems
   - Comparison with full AC power flow

2. **[DER Sizing and Siting](https://nlr-cadet.github.io/cadet-opt/tutorial/index.html)**
   - Solar PV optimization
   - Battery storage placement
   - Multi-resource coordination

3. **[Infrastructure Upgrade Planning](https://nlr-cadet.github.io/cadet-opt/tutorial/index.html)**
   - Reconductoring analysis
   - Transformer replacement
   - Cost-benefit evaluation

4. **[Network Reconfiguration](https://nlr-cadet.github.io/cadet-opt/tutorial/index.html)**
   - Loss minimization
   - Voltage optimization
   - Switching strategy development

5. **[Hosting Capacity Analysis](https://nlr-cadet.github.io/cadet-opt/tutorial/index.html)**
   - Capacity limit determination
   - Mitigation strategy evaluation
   - Scenario analysis

---

## How-To Guides

Task-specific guides for common operations:

### Modeling
- **[Define Custom Objectives](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Create your own optimization objectives
- **[Add Constraints](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Implement custom constraints
- **[Work with Grid Data Models](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Load and manipulate network data

### Analysis
- **[Interpret Results](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Understanding optimization outputs
- **[Visualize Networks](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Plot network topologies and results
- **[Export Data](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Save results for further analysis

### Advanced
- **[Configure Solvers](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Solver selection and tuning
- **[Parallel Computing](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Run large-scale problems
- **[Debugging Models](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Troubleshooting optimization issues

---

## API Reference

### CADET OPT API
Complete API documentation with detailed class and function references:

[View API Reference](https://nlr-cadet.github.io/cadet-opt/references/index.html){: .btn .btn-outline }

**Key modules:**
- **Managers** - Data management (power, impedance, capacity, upgrades)
- **Constraints** - Optimization constraints (voltage, thermal, power balance)
- **Objectives** - Optimization objectives (cost, loss, reliability)
- **Tools** - Pre-built optimization problems
- **Models** - Core optimization model interfaces

---

## Related Documentation

### Grid Data Models (GDM)
Standardized data representation for distribution networks:
- [GDM GitHub Repository](https://github.com/NREL-Distribution-Suites/grid-data-models)
- [GDM Specification](https://github.com/NREL-Distribution-Suites/grid-data-models#readme)

### Supporting Tools

#### gdmloader
Pre-loaded test cases and data loading utilities:
- [gdmloader Repository](https://github.com/NREL-Distribution-Suites/gdmloader)
- Access standard test feeders
- Quick start examples

#### ditto (Distribution Transformation Tool)
Model conversion tool for OpenDSS and other formats:
- [ditto Repository](https://github.com/NREL-Distribution-Suites/ditto)
- [Conversion Examples](https://github.com/NREL-Distribution-Suites/ditto#readme)
- [OpenDSS Reader Tutorial](https://github.com/NREL-Distribution-Suites/ditto/blob/4f4823f9bdff9639aac94f8b8794a3f24611b0e2/tests/test_opendss/test_opendss_reader.py#L22)

---

## External Resources

### Pyomo Documentation
CADET uses Pyomo for optimization modeling:
- [Pyomo Main Documentation](https://pyomo.readthedocs.io/)
- [Pyomo Tutorial](https://pyomo.readthedocs.io/en/stable/tutorial.html)
- [Pyomo Examples](https://github.com/Pyomo/PyomoGallery)

### Stochastic Programming
For CADET Stochastic users:
- [PySP Documentation](https://pyomo.readthedocs.io/en/stable/modeling_extensions/pysp.html)
- [mpi-sppy Repository](https://github.com/Pyomo/mpi-sppy)
- [Stochastic Programming Tutorial](https://mpi-sppy.readthedocs.io/)

### Solvers
Information about optimization solvers:
- [HiGHS Documentation](https://highs.dev/) - Default solver
- [GLPK Documentation](https://www.gnu.org/software/glpk/)
- [Gurobi Documentation](https://www.gurobi.com/documentation/)
- [CPLEX Documentation](https://www.ibm.com/docs/en/icos)

---

## Publications & Research

### NREL Resources
- [NREL CADET Project Page](https://www.nrel.gov/grid/cadet) - Official project information
- NREL Technical Reports - Coming soon

### Academic Papers
Research publications using CADET will be listed here as they become available.

---

## Videos & Presentations

Coming soon! Check back for:
- Tutorial videos
- Webinar recordings
- Conference presentations
- Demo videos

---

## Community Resources

### GitHub Discussions
Ask questions and share knowledge:
- [CADET OPT Discussions](https://github.com/NLR-CADET/cadet-opt/discussions)

### GitHub Issues
Report bugs and request features:
- [CADET OPT Issues](https://github.com/NLR-CADET/cadet-opt/issues)
- [CADET Stochastic Issues](https://github.com/NLR-CADET/cadet-stochastic/issues)
- [CADET Examples Issues](https://github.com/NLR-CADET/cadet-examples/issues)

### Contributing
Help improve CADET:
- [Contributing Guide](https://github.com/NLR-CADET/cadet-opt/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/NLR-CADET/.github/blob/main/CODE_OF_CONDUCT.md)

---

## Getting Help

Can't find what you're looking for?

1. **Search the documentation** using the search bar above
2. **Check GitHub Discussions** for similar questions
3. **Browse GitHub Issues** for known problems
4. **Contact the team** at [jeremy.keen@nrel.gov](mailto:jeremy.keen@nrel.gov)

[Ask a Question](https://github.com/NLR-CADET/cadet-opt/discussions/new){: .btn .btn-primary }

---

## Documentation Updates

The documentation is continuously updated. To stay informed:
- Watch the [CADET OPT repository](https://github.com/NLR-CADET/cadet-opt) for updates
- Check the [changelog](https://github.com/NLR-CADET/cadet-opt/releases)
- Subscribe to [GitHub releases](https://github.com/NLR-CADET/cadet-opt/releases.atom)

Last updated: February 2, 2026
