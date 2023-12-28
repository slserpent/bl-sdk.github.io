---
layout: main

authors: "Cael" # Authors of the mod
title: Skin Randomizer # Title of the mod
version: "1.2" # Version of the mod
supported: "BL2" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Press a button to randomly select a customization." # A short description of the mod itself.
description: "Press a button to randomly select a customization." # This is set in order to keep the SEO proper
longDescription: "Features: \n-Press a button to select a random customization combination \n---This selects a random head/skin for characters and random skin for both vehicles\n-Adds an option to unlock customization eligibility\n---This allows maya heads to be used on zer0, vehicle skins can be character skins, etc.\nver 1.1: added in the function to allow the ranomize key to be rebound\nver 1.2: renamed hooked function for compatibility" # Description of what the mod can do
categories: ['Gameplay'] # Category of the type of mod

requirements: [] # Requirements for the given mod
requirementTitles: [] # The link-friendly name of the requirements

issues: ""
download: "https://github.com/Cae-l/bl-sdk-mods/raw/master/SkinRandomizer/SkinRandomizer.zip"
source: "https://github.com/Cae-l/bl-sdk-mods" # Link to source code
license: [] # License name, link about the license from https://choosealicense.com/

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
