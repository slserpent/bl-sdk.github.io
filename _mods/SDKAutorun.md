---
layout: mod

authors: "apple1417" # Authors of the mod
title: SDK Autorun # Title of the mod
version: "1.5" # Version of the mod
supported: "BL2 + TPS" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Automatically runs console commands/SDK mods for you when you reach the main menu." # A short description of the mod itself.
description: "Automatically runs console commands/SDK mods for you when you reach the main menu." # This is set in order to keep the SEO proper
longDescription: "Automatically runs console commands/SDK mods for you when you reach the main menu. Configurable entirely through an in game menu.\n\nNote that if you get stuck in a crash loop, you can disable this by deleting the `settings.json` that gets created in the mod directory." # Description of what the mod can do
categories: ['Utility'] # Category of the type of mod

requirements: ['AsyncUtil >= 1.0', 'UserFeedback >= 1.3'] # Requirements for the given mod
requirementTitles: ['AsyncUtil', 'UserFeedback'] # The link-friendly name of the requirements

issues: ""
download: "https://github.com/apple1417/bl-sdk-mods/raw/master/SDKAutorun/SDKAutorun.zip"
license: ['GNU GPLv3', 'gpl-3.0'] # License name, link about the license from https://choosealicense.com/

date: 2021-03-21T21:10:58.159961Z # Date of when the generation happened (?)
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