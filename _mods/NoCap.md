---
layout: main

authors: "stelmo" # Authors of the mod
title: NoCap # Title of the mod
version: "0.1.1" # Version of the mod
supported: "BL2" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Adjust team and player limits" # A short description of the mod itself.
description: "Adjust team and player limits" # This is set in order to keep the SEO proper
longDescription: "Extends team limits and functionality.\nAllows up to 8 teams (32 players) by default." # Description of what the mod can do
categories: ['Gameplay'] # Category of the type of mod

requirements: ['UserFeedback >= 1.5'] # Requirements for the given mod
requirementTitles: ['UserFeedback'] # The link-friendly name of the requirements

issues: "https://github.com/stealmyhousekey/bl2-sdk-mods/issues"
download: "https://github.com/stealmyhousekey/bl2-sdk-mods/raw/main/NoCap/NoCap.zip"
source: "https://github.com/stealmyhousekey/bl2-sdk-mods" # Link to source code
license: ['MIT', 'https://choosealicense.com/licenses/mit'] # License name, link about the license from https://choosealicense.com/

---
**Contents**
* TOC
{:toc}

## {{page.title}}

Mod by: {{page.authors}}
Current Version: {{page.version}}

<p></p>
### Description

{{page.longDescription | markdownify }}

Currently Supports: `{{page.supported}}`

{% if page.categories.size > 0 %}
Categories:
{% for category in page.categories %}
  * [{{category}}](/types/{{category}})
{% endfor %}
<p></p>
{% endif %}

{% if page.requirements.size > 0 %}
### Requirements

{% for requirement in page.requirements %}

{% assign reqName = page.requirementTitles[forloop.index0] %}

{% for mod in site.mods %}

{% assign modName = mod.path | remove_first: '_mods/' %}
{% assign xz = reqName | append: '.md' %}

{% if modName == xz %}
* [{{ requirement }}]( {{ reqName | relative_url | prepend: '/mods'}} ) <sup>[(Direct Download)]({{mod.download}})</sup>
{% endif %}
{% endfor %}

{% endfor %}
<p></p>
{% endif %}

### Links

{% if page.download != "" %}
You can download {{page.title}} here: [Download Link]({{page.download}})
{% endif %}

{% if page.issues != "" %}
Report issues here: [Issue Tracker]({{page.issues}})
{% endif %}

{% if page.source != "" %}
View the source code here: [Source Code]({{page.source}})
{% endif %}

{% if page.license.size > 0 %}
This mod is licensed using {{page.license[0]}} <sup>[?]({{page.license[1]}})</sup>
{% endif %}
