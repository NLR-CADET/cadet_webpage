---
layout: default
title: CADET Examples
parent: Projects
nav_order: 3
description: "Example problems and test cases for CADET"
permalink: /projects/cadet-examples
---

# CADET Examples
{: .no_toc }

Example problems demonstrating the use of cadet-opt
{: .fs-6 .fw-300 }

[View on GitHub](https://github.com/NLR-CADET/cadet-examples){: .btn .btn-primary }

---

## Quick Info

- **Repository:** [NLR-CADET/cadet-examples](https://github.com/NLR-CADET/cadet-examples)
- **Language:** Python (100%)
- **Python Version:** 3.11 or 3.12
- **Status:** Under active development

---

## Overview

CADET Examples provides practical example implementations and test cases for CADET OPT, helping users understand how to apply the framework to real distribution network planning problems. The repository includes working examples, hosting capacity analysis, and integration demonstrations with Grid Data Models.

---

## Key Features

### 💡 Working Examples
Production-ready examples of:
- Hosting capacity analysis
- DER sizing and siting
- Infrastructure upgrade planning
- Network reconfiguration
- Capacity expansion studies

### 📊 Test Cases
Comprehensive test suite for:
- Validation of optimization results
- Performance benchmarking
- Regression testing
- Model verification

### 🔄 GDM Integration
Demonstrations of:
- Loading test cases with gdmloader
- Working with Grid Data Models
- Converting OpenDSS models to GDM
- Custom network representation

### 📚 Learning Resources
Examples help users:
- Understand CADET architecture
- Learn best practices
- See real-world applications
- Debug their own implementations

---

## Installation

```bash
git clone https://github.com/NLR-CADET/cadet-examples.git
cd cadet-examples
pip install -e ".[dev]"
```

---

## Getting Started

### Prerequisites

1. **Install CADET OPT:**
   ```bash
   pip install cadet-opt
   ```

2. **Grid Data Models:**
   CADET depends on Grid Data Models (GDM) representation. You can either:
   
   - Use gdmloader for pre-loaded test cases:
     ```bash
     pip install gdmloader
     ```
   
   - Provide your own GDM
   
   - Convert OpenDSS models using ditto:
     ```bash
     pip install git+https://github.com/NREL-Distribution-Suites/ditto.git
     ```

### Running Examples

```bash
# Navigate to examples directory
cd examples

# Run a hosting capacity example
python hosting_capacity.py

# Run a DER siting example
python der_siting.py
```

---

## Example Categories

### 1. Hosting Capacity Analysis
Determine maximum DER integration limits:
- Voltage constraint analysis
- Thermal limit evaluation
- Mitigation strategy identification

### 2. DER Optimization
Optimize distributed energy resources:
- Solar PV sizing and placement
- Battery storage optimization
- Multi-resource coordination

### 3. Infrastructure Planning
Plan network upgrades:
- Reconductoring analysis
- Transformer replacement
- Substation expansion

### 4. Network Reconfiguration
Optimize switching:
- Loss minimization
- Load balancing
- Reliability improvement

### 5. Integration Examples
Demonstrate framework integration:
- GDM data loading
- Custom objective functions
- Constraint customization
- Results post-processing

---

## Using Grid Data Models

### Option 1: Pre-loaded Test Cases

```python
from gdmloader import load_test_case

# Load a standard test case
network = load_test_case("ieee_13node")
```

### Option 2: Convert OpenDSS Models

```python
from ditto.readers.opendss.read import Reader

# Read OpenDSS model
reader = Reader(master_file="Master.dss")
model = reader.parse()

# Convert to GDM
gdm = model.to_gdm()
```

### Option 3: Custom GDM

Create your own Grid Data Model following the [GDM specification](https://github.com/NREL-Distribution-Suites/grid-data-models).

---

## Related Tools

### Grid Data Models (GDM)
Standardized data representation for distribution networks:
- [GitHub Repository](https://github.com/NREL-Distribution-Suites/grid-data-models)
- Common interface for various model formats
- Supports multiple analysis tools

### gdmloader
Pre-loaded test cases and utilities:
- [GitHub Repository](https://github.com/NREL-Distribution-Suites/gdmloader)
- Standard test feeders
- Quick start examples
- Data loading utilities

### ditto (Distribution Transformation Tool)
Model conversion tool:
- [GitHub Repository](https://github.com/NREL-Distribution-Suites/ditto)
- Convert OpenDSS to GDM
- Support multiple formats
- [Example Usage](https://github.com/NREL-Distribution-Suites/ditto/blob/4f4823f9bdff9639aac94f8b8794a3f24611b0e2/tests/test_opendss/test_opendss_reader.py#L22)

---

## Results Analysis

Results are provided in database form. Scripts for results analysis and visualization are forthcoming.

---

## Contributing

We welcome contributions of:
- New example problems
- Test cases
- Documentation improvements
- Bug fixes

See the [CADET Contributing Guide](https://github.com/NLR-CADET/cadet-opt/blob/main/CONTRIBUTING.md) for details.

---

## Development Status

**Note:** CADET is under active development. Features and APIs may change significantly. The examples repository is updated to reflect changes in cadet-opt.

---

## Getting Help

- **GitHub Issues:** [Report issues](https://github.com/NLR-CADET/cadet-examples/issues)
- **CADET Discussions:** [Ask questions](https://github.com/NLR-CADET/cadet-opt/discussions)
- **Email:** Jeremy Keen - [jeremy.keen@nrel.gov](mailto:jeremy.keen@nrel.gov)

---

## Related Projects

- [CADET OPT](/cadet_webpage/projects/cadet-opt) - Core optimization framework
- [CADET Stochastic](/cadet_webpage/projects/cadet-stochastic) - Stochastic optimization extension
- [NREL CADET Info](https://www.nrel.gov/grid/cadet) - Official project page

---

## Contributors

- Jesse Dugan
- Aadil Latif
- CADET team at NREL

---

<div id="readme-content">
  <h2>Full README</h2>
  <p>Loading README from GitHub...</p>
</div>

<script src="/cadet_webpage/assets/js/fetch-readme.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    fetchReadme('NLR-CADET', 'cadet-examples', 'readme-content');
  });
</script>
