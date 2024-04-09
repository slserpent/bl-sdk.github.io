---
layout: main

authors: "LaryIsland" # Authors of the mod
title: Spare Parts # Title of the mod
version: "1.0" # Version of the mod
supported: "BL2" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Salvage parts from items and attach them to other items." # A short description of the mod itself.
description: "Salvage parts from items and attach them to other items." # This is set in order to keep the SEO proper
longDescription: "Allows you to salvage parts from items and attach them to other items.\nJust select an item from your backpack, hover over another item and press the 'salvage' hotkey. Default is [C]\nNote: the item you salvage parts from will be destroyed in the process." # Description of what the mod can do
categories: ['Utility'] # Category of the type of mod

requirements: ['UserFeedback >= 1.5', 'Python Part Notifier >= 1.9'] # Requirements for the given mod
requirementTitles: ['UserFeedback', 'PythonPartNotifier'] # The link-friendly name of the requirements

issues: "https://github.com/LaryIsland/bl-sdk-mods/issues"
download: "https://github.com/LaryIsland/bl-sdk-mods/raw/main/SpareParts/SpareParts.zip"
source: "https://github.com/LaryIsland/bl-sdk-mods/tree/main/SpareParts" # Link to source code
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
