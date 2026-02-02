---
layout: default
title: Getting Started
nav_order: 2
description: "Installation and quick start guide for CADET"
permalink: /pages/getting-started
---

# Getting Started with CADET
{: .no_toc }

Get up and running with CADET in minutes.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Prerequisites

Before installing CADET, ensure you have the following:

- **Python 3.11 or 3.12** (required)
- **Git** (for cloning repositories)
- **Optimization solver** (HiGHS is included, but you can also use GLPK, Gurobi, or CPLEX)

### Check Your Python Version

```bash
python --version
```

If you need to install Python, visit [python.org](https://www.python.org/downloads/).

---

## Installing CADET OPT

### Basic Installation

For standard usage, install CADET OPT with:

```bash
git clone https://github.com/NLR-CADET/cadet-opt.git
cd cadet-opt
pip install -e .
```

### Development Installation

If you plan to contribute or modify the code:

```bash
git clone https://github.com/NLR-CADET/cadet-opt.git
cd cadet-opt
pip install -e ".[dev,doc]"
pre-commit install
```

The development installation includes:
- Code formatting tools (Ruff)
- Documentation building tools
- Testing frameworks
- Pre-commit hooks for code quality

---

## Installing CADET Stochastic

For stochastic optimization capabilities:

```bash
git clone https://github.com/NLR-CADET/cadet-stochastic.git
cd cadet-stochastic
pip install -e .[gdmloader]
```

**Note:** `gdmloader` is an optional dependency for accessing sample test cases.

---

## Installing CADET Examples

To get example problems and test cases:

```bash
git clone https://github.com/NLR-CADET/cadet-examples.git
cd cadet-examples
pip install -e ".[dev]"
```

---

## Quick Start

### 1. Verify Installation

Test your installation by running a simple Python import:

```python
python -c "import cadet_opt; print('CADET OPT installed successfully!')"
```

### 2. Run an Example

Navigate to the examples repository and run a sample problem:

```bash
cd cadet-examples
# Run your first example
python examples/hosting_capacity.py
```

### 3. Explore Tutorials

Visit the [CADET OPT tutorials](https://nlr-cadet.github.io/cadet-opt/tutorial/index.html) to learn:
- Linearized power flow analysis
- DER sizing and siting
- Infrastructure upgrade planning
- Network reconfiguration
- Hosting capacity analysis

---

## Setting Up Optimization Solvers

CADET uses Pyomo and requires an optimization solver. HiGHS is included by default, but you can use other solvers for better performance.

### HiGHS (Default)
Already included with CADET installation. No additional setup required.

### GLPK (Free, Open Source)

**macOS:**
```bash
brew install glpk
```

**Ubuntu/Debian:**
```bash
sudo apt-get install glpk-utils
```

### Gurobi (Commercial, Free Academic License)

1. Download from [gurobi.com](https://www.gurobi.com/downloads/)
2. Install the Gurobi Python package:
```bash
pip install gurobipy
```
3. Activate your license (see Gurobi documentation)

### CPLEX (Commercial, Free Academic License)

1. Download IBM ILOG CPLEX from [IBM](https://www.ibm.com/products/ilog-cplex-optimization-studio)
2. Follow IBM's installation instructions
3. Install the Python interface

---

## Working with Grid Data Models

CADET depends on Grid Data Models (GDM) for representing distribution networks.

### Using Pre-loaded Test Cases

Install `gdmloader` to access pre-loaded test cases:

```bash
pip install gdmloader
```

### Converting OpenDSS Models

To use your own OpenDSS models, convert them to GDM using NREL's ditto:

```bash
pip install git+https://github.com/NREL-Distribution-Suites/ditto.git
```

See the [ditto documentation](https://github.com/NREL-Distribution-Suites/ditto) for conversion examples.

---

## Next Steps

Now that CADET is installed, explore:

- **[Documentation](https://nlr-cadet.github.io/cadet-opt/)** - Comprehensive guides and API reference
- **[Tutorials](https://nlr-cadet.github.io/cadet-opt/tutorial/index.html)** - Step-by-step learning
- **[How-To Guides](https://nlr-cadet.github.io/cadet-opt/howtos/index.html)** - Specific task instructions
- **[Projects](/cadet_webpage/projects/cadet-opt)** - Detailed information about each CADET component
- **[GitHub Discussions](https://github.com/NLR-CADET/cadet-opt/discussions)** - Ask questions and share ideas

---

## Getting Help

If you encounter issues:

1. Check the [documentation](https://nlr-cadet.github.io/cadet-opt/)
2. Search [GitHub Issues](https://github.com/NLR-CADET/cadet-opt/issues)
3. Ask in [GitHub Discussions](https://github.com/NLR-CADET/cadet-opt/discussions)
4. Contact the team: Jeremy Keen ([jeremy.keen@nrel.gov](mailto:jeremy.keen@nrel.gov))

---

## Development Status

CADET is under active development. Features and APIs may change. We welcome feedback and contributions from early adopters!

[View Contributing Guide](https://github.com/NLR-CADET/cadet-opt/blob/main/CONTRIBUTING.md){: .btn .btn-primary }
