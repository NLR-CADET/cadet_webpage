# cadet_webpage
# CADET Website

Official website for the CADET (Capacity Expansion Decision Support Tool) project.

## About CADET

CADET is a flexible optimization framework for distribution network planning developed by the National Renewable Energy Laboratory (NREL). It helps utilities and planners make capacity-related decisions based on multiple objectives including cost, reliability, resilience, air quality, carbon reductions, and hosting capacity.

## Website Structure

This is a Jekyll-based website using the Just the Docs theme, featuring:

- **Homepage** - Overview of the CADET suite
- **Getting Started** - Installation and quick start guide
- **Projects** - Detailed information about cadet-opt, cadet-stochastic, and cadet-examples
- **Documentation** - Links to comprehensive guides and API references
- **News** - Latest announcements and updates
- **About** - Project background and team information

## Local Development

### Prerequisites

- Ruby 3.1 or higher
- Bundler
- Jekyll

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/NLR-CADET/cadet_webpage.git
   cd cadet_webpage
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the local server:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit http://localhost:4000/cadet_webpage/ in your browser

### Building for Production

```bash
bundle exec jekyll build
```

The site will be generated in the `_site` directory.

## Project Structure

```
cadet_webpage/
├── _config.yml              # Jekyll configuration
├── _posts/                  # Blog posts and announcements
├── assets/
│   └── js/
│       └── fetch-readme.js  # GitHub README fetcher
├── blog/                    # Blog index page
├── pages/                   # Main content pages
│   ├── about.md
│   ├── documentation.md
│   └── getting-started.md
├── projects/                # Project showcase pages
│   ├── cadet-opt.md
│   ├── cadet-stochastic.md
│   └── cadet-examples.md
└── index.md                 # Homepage
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

BSD 3-Clause License - see LICENSE file for details.

## Contact

- **Project Lead:** Jeremy Keen ([jeremy.keen@nrel.gov](mailto:jeremy.keen@nrel.gov))
- **GitHub:** [https://github.com/NLR-CADET](https://github.com/NLR-CADET)
- **Discussions:** [https://github.com/NLR-CADET/cadet-opt/discussions](https://github.com/NLR-CADET/cadet-opt/discussions)

## Acknowledgments

CADET is developed at the National Renewable Energy Laboratory with support from the U.S. Department of Energy. 
