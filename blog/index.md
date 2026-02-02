---
layout: default
title: News
nav_order: 5
description: "Latest news and announcements about CADET"
permalink: /blog/
---

# News & Updates

Stay informed about the latest developments, releases, and announcements from the CADET project.

---

{% if site.posts.size > 0 %}
  {% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})
{: .mb-1 }

*Posted on {{ post.date | date: "%B %d, %Y" }}*
{: .text-grey-dk-000 .mb-2 }

{{ post.excerpt }}

[Read full post]({{ post.url | relative_url }}){: .btn .btn-outline .btn-sm }

---

  {% endfor %}
{% else %}
  <div class="no-posts" style="text-align: center; padding: 3rem 0;">
    <p style="font-size: 1.2rem; color: #999;">No announcements yet. Check back soon!</p>
  </div>
{% endif %}

---

## Stay Connected

- **[GitHub Discussions](https://github.com/NLR-CADET/cadet-opt/discussions)** - Join conversations
- **[GitHub Repository](https://github.com/NLR-CADET)** - Watch for updates
- **[NREL CADET Page](https://www.nrel.gov/grid/cadet)** - Official project information

For direct inquiries, contact: [jeremy.keen@nrel.gov](mailto:jeremy.keen@nrel.gov)
