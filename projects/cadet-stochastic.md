---
layout: default
title: CADET Stochastic
parent: Projects
nav_order: 2
description: "Multi-stage stochastic optimization for distribution networks"
permalink: /projects/cadet-stochastic
---

# CADET Stochastic
{: .no_toc }

Multi-stage stochastic optimization for distribution networks
{: .fs-6 .fw-300 }

[View on GitHub](https://github.com/NLR-CADET/cadet-stochastic){: .btn .btn-primary }

---

## Quick Info

- **Repository:** [NLR-CADET/cadet-stochastic](https://github.com/NLR-CADET/cadet-stochastic)
- **Language:** Python (100%)
- **Python Version:** 3.11 or 3.12
- **Status:** Under active development

---

## Overview

CADET Stochastic extends the CADET framework with multi-stage stochastic optimization capabilities, enabling decision-making under uncertainty. This is particularly valuable for resilience and restoration planning where future conditions are uncertain.

---

## Key Features

### 📊 Multi-Stage Stochastic Optimization
Model and solve problems with:
- Multiple decision stages
- Uncertain future scenarios
- Risk-aware optimization
- Scenario tree representation

### 🎯 Uncertainty Modeling
Handle various sources of uncertainty:
- Damage scenarios (storms, earthquakes, etc.)
- Load forecasts
- DER deployment patterns
- Equipment failure probabilities

### 🛡️ Resilience Planning
Optimize for resilience with:
- Restoration-investment-prioritization modeling
- Infrastructure hardening analysis
- Risk-based scenario planning
- Cost-benefit analysis under uncertainty

### 🔄 Integration with PySP and mpi-sppy
Leverage robust stochastic programming frameworks:
- PySP (Pyomo Stochastic Programming)
- mpi-sppy (parallel solver for stochastic programs)
- Extensive form problem solving

---

## Use Cases

1. **Restoration Investment Prioritization**
   - Identify critical infrastructure for hardening
   - Optimize investment under uncertain damage scenarios
   - Balance cost and resilience

2. **Infrastructure Hardening**
   - Evaluate hardening strategies
   - Risk-based scenario analysis
   - Multi-objective optimization under uncertainty

3. **Capacity Expansion with Uncertainty**
   - Plan investments considering uncertain future conditions
   - Hedge against various scenarios
   - Flexible adaptation strategies

4. **Resilience Enhancement**
   - Improve network resilience to disruptions
   - Optimize restoration capabilities
   - Minimize expected outage costs

---

## Installation

```bash
git clone https://github.com/NLR-CADET/cadet-stochastic.git
cd cadet-stochastic
pip install -e .[gdmloader]
```

**Note:** `gdmloader` is optional but provides access to sample test cases.

---

## Quick Start

```python
# Update outage scenarios and assumptions
# Then run the extensive form model
python investment_model_ef.py
```

The EF (Extensive Form) approach solves the entire optimization problem combining all scenarios at once.

---

## Architecture

CADET Stochastic follows 90% of the cadet-opt structure with additions for:

### Scenario Management
- Scenario generation and analysis
- Trial creation for stochastic experiments
- Scenario tree construction using networkx

### Stochastic Modeling Approaches

**1. PySP Integration:**
```python
from mpisppy.utils.pysp_model import PySPModel

# Create scenario tree model
def pysp_scenario_tree_model_callback():
    # Build scenario tree with networkx
    pass

# Create instance for each scenario
def pysp_instance_creation_callback(scenario_name, node_names):
    # Clone model with scenario-specific parameters
    pass
```

**2. mpi-sppy Native:**
```python
# Use mpi-sppy scenario creator function
def scenario_creator(scenario_name):
    # Create model instance for scenario
    pass
```

**3. Restoration Model:**
Uses mutable parameters for scenario-specific updates within the optimization model.

---

## Dependencies

- **CADET OPT:** Core optimization framework
- **Pyomo:** Optimization modeling
- **PySP:** Stochastic programming support
- **mpi-sppy:** Parallel stochastic solvers
- **networkx:** Scenario tree representation
- **Grid Data Models:** Network representation
- **gdmloader (optional):** Sample test cases

---

## Technology Stack

- **Python:** 3.11 or 3.12
- **Optimization:** Pyomo, PySP, mpi-sppy
- **Solvers:** HiGHS, GLPK, Gurobi, CPLEX
- **Data:** Grid Data Models (GDM)

---

## Development Team

Developed at NREL by:
- **Abodh Poudyal** (Primary contributor)
- CADET core team

---

## Getting Help

- **GitHub Issues:** [Report bugs or request features](https://github.com/NLR-CADET/cadet-stochastic/issues)
- **CADET Discussions:** [Ask questions](https://github.com/NLR-CADET/cadet-opt/discussions)
- **Email:** [jeremy.keen@nrel.gov](mailto:jeremy.keen@nrel.gov)

---

## Related Projects

- [CADET OPT](/cadet_webpage/projects/cadet-opt) - Core optimization framework
- [CADET Examples](/cadet_webpage/projects/cadet-examples) - Example implementations
- [PySP Documentation](https://pyomo.readthedocs.io/en/stable/modeling_extensions/pysp.html)
- [mpi-sppy](https://github.com/Pyomo/mpi-sppy)

---

<div id="readme-content">
  <h2>Full README</h2>
  <p>Loading README from GitHub...</p>
</div>

<script src="/cadet_webpage/assets/js/fetch-readme.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    fetchReadme('NLR-CADET', 'cadet-stochastic', 'readme-content');
  });
</script>
