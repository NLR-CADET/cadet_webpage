---
layout: default
title: CADET OPT
parent: Projects
nav_order: 1
description: "Core optimization framework for distribution network planning"
permalink: /projects/cadet-opt
---

# CADET OPT
{: .no_toc }

Core optimization framework for distribution network planning
{: .fs-6 .fw-300 }

[View on GitHub](https://github.com/NLR-CADET/cadet-opt){: .btn .btn-primary }
[Documentation](https://nlr-cadet.github.io/cadet-opt/){: .btn .btn-outline }
[Discussions](https://github.com/NLR-CADET/cadet-opt/discussions){: .btn .btn-outline }

---

## Quick Info

- **Repository:** [NLR-CADET/cadet-opt](https://github.com/NLR-CADET/cadet-opt)
- **Language:** Python (100%)
- **License:** BSD 3-Clause
- **Python Version:** 3.11 or 3.12
- **Status:** Under active development

---

## Overview

CADET OPT is a flexible optimization framework for making capacity-related decisions in electric distribution networks. It helps utilities and planners evaluate and recommend solutions based on multiple objectives including cost, reliability, resilience, air quality, equity, carbon reductions, and hosting capacity.

---

## Key Features

### 🔌 Multi-Objective Optimization
Optimize distribution network planning based on various criteria:
- Cost minimization (capital and operational)
- Reliability improvement
- Resilience enhancement
- Air quality and emissions reduction
- Equitable distribution of benefits
- Carbon footprint reduction
- Hosting capacity maximization

### ⚡ Flexible Problem Formulation
Support for various planning scenarios:
- Linearized power flow analysis (balanced and unbalanced systems)
- DER sizing and siting (solar PV, battery storage, other distributed resources)
- Infrastructure upgrade planning (reconductoring, transformer replacements)
- Network reconfiguration and switching optimization
- Capacity expansion planning (multi-year investment optimization)
- Hosting capacity analysis

### 🔄 Integration with Grid Data Models
Seamless data handling through:
- Integration with NREL's Grid Data Models (GDM)
- Support for standard distribution system data formats
- OpenDSS model conversion via ditto tool

### 🛠️ Modular Architecture
Reusable components for customization:
- **Managers:** Handle data for power, impedance, capacity, and upgrade options
- **Constraints:** Modular constraint definitions (voltage, loading, power balance, etc.)
- **Objectives:** Cost minimization, loss reduction, voltage deviation, and more
- **Tools:** Pre-built optimization problems for common planning scenarios

---

## Use Cases

1. **Linearized Power Flow Analysis**
   - Balanced and unbalanced distribution systems
   - Fast approximation for planning studies

2. **DER Sizing and Siting**
   - Optimal placement of solar PV systems
   - Battery energy storage system optimization
   - Other distributed energy resources

3. **Infrastructure Upgrades**
   - Reconductoring analysis
   - Transformer replacement planning
   - Equipment upgrade optimization

4. **Network Reconfiguration**
   - Optimal switching for loss reduction
   - Load balancing optimization
   - Reliability improvement through reconfiguration

5. **Capacity Expansion Planning**
   - Multi-year investment optimization
   - Staged deployment strategies
   - Cost-benefit analysis

6. **Hosting Capacity Analysis**
   - Maximum DER integration studies
   - Voltage and thermal limit analysis
   - Mitigation strategy evaluation

---

## Installation

### Basic Installation

```bash
git clone https://github.com/NLR-CADET/cadet-opt.git
cd cadet-opt
pip install -e .
```

### Development Installation

```bash
git clone https://github.com/NLR-CADET/cadet-opt.git
cd cadet-opt
pip install -e ".[dev,doc]"
pre-commit install
```

---

## Quick Start

```python
from cadet_opt import OptimizationModel
from gdm import GridDataModel

# Load your distribution network
network = GridDataModel.from_file("my_network.json")

# Create optimization model
model = OptimizationModel(network)

# Add objectives and constraints
model.add_objective("minimize_cost")
model.add_constraint("voltage_limits")
model.add_constraint("thermal_limits")

# Solve
results = model.solve(solver="highs")

# Analyze results
print(results.summary())
```

---

## Documentation

- **[Main Documentation](https://nlr-cadet.github.io/cadet-opt/)** - Comprehensive guides
- **[Installation Guide](https://nlr-cadet.github.io/cadet-opt/install.html)** - Setup instructions
- **[Tutorials](https://nlr-cadet.github.io/cadet-opt/tutorial/index.html)** - Step-by-step learning
- **[API Reference](https://nlr-cadet.github.io/cadet-opt/references/index.html)** - Detailed API docs
- **[How-To Guides](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Specific tasks
- **[Contributing Guide](https://github.com/NLR-CADET/cadet-opt/blob/main/CONTRIBUTING.md)** - Join development

---

## Technology Stack

- **Python:** 3.11 or 3.12 required
- **Optimization Framework:** Pyomo
- **Solvers:** HiGHS (included), GLPK, Gurobi, CPLEX
- **Data Models:** Grid Data Models (GDM)
- **Code Quality:** Ruff formatter, pre-commit hooks

---

## Development Team

- **Project Lead:** Jeremy Keen ([jeremy.keen@nrel.gov](mailto:jeremy.keen@nrel.gov))
- **Core Developers:** Aadil Latif, Abodh Poudyal, Bryan Palmintier, Daniel Thom, Kapil Duwadi

---

## Getting Help

- **[GitHub Discussions](https://github.com/NLR-CADET/cadet-opt/discussions)** - Ask questions, share ideas
- **[GitHub Issues](https://github.com/NLR-CADET/cadet-opt/issues)** - Report bugs, request features
- **Email:** Jeremy Keen - [jeremy.keen@nrel.gov](mailto:jeremy.keen@nrel.gov)

---

## Related Projects

- [CADET Stochastic](/cadet_webpage/projects/cadet-stochastic) - Stochastic optimization extension
- [CADET Examples](/cadet_webpage/projects/cadet-examples) - Example implementations
- [Grid Data Models](https://github.com/NREL-Distribution-Suites/grid-data-models) - Data representation

---

<div id="readme-content">
  <h2>Full README</h2>
  <p>Loading README from GitHub...</p>
</div>

<script src="/cadet_webpage/assets/js/fetch-readme.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    fetchReadme('NLR-CADET', 'cadet-opt', 'readme-content');
  });
</script>
