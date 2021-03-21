---
layout: mod

authors: "apple1417" # Authors of the mod
title: Alt Use Vendors # Title of the mod
version: "1.5" # Version of the mod
supported: "BL2 + TPS" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Adds alt use binds to quickly refill health and ammo at their vendors, like in BL3." # A short description of the mod itself.
description: "Adds alt use binds to quickly refill health and ammo at their vendors, like in BL3." # This is set in order to keep the SEO proper
longDescription: "Adds alt use binds to quickly refill health and ammo at their vendors, like in BL3." # Description of what the mod can do
categories: ['Utility'] # Category of the type of mod

requirements: ['AsyncUtil >= 1.0'] # Requirements for the given mod
requirementTitles: ['AsyncUtil'] # The link-friendly name of the requirements

issues: ""
download: "https://github.com/apple1417/bl-sdk-mods/raw/master/AltUseVendors/AltUseVendors.zip"
license: ['GNU GPLv3', 'gpl-3.0'] # License name, link about the license from https://choosealicense.com/

date: 2021-03-21T22:23:28.208447Z # Date of when the generation happened (?)
---
**Contents**
* TOC
{:toc}

## {{page.title}}

Mod by: {{page.authors}}
Current Version: {{page.version}}
  - Mod Page Updated: {{ page.date | date: "%-d %B %Y"}}

<p></p>
### Description

{{page.longDescription | markdownify }}

Currently Supports: `{{page.supported}}`

{% if page.categories.size > 0 %}
Categories:
{% for category in page.categories %}
  * {{category}}
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
Report issues here: [{{page.issues}}]({{page.issues}})
{% endif %}

{% if page.license.size > 0 %}
This mod is licensed using {{page.license[0]}} <sup>[?](https://choosealicense.com/licenses/{{page.license[1]}})
{% endif %}