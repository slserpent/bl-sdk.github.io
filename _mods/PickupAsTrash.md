---
layout: main

authors: "Tominator" # Authors of the mod
title: PickupAsTrash # Title of the mod
version: "1.0.1" # Version of the mod
supported: "BL2 + TPS" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Adds an option to pickup items from the ground as trash" # A short description of the mod itself.
description: "Adds an option to pickup items from the ground as trash" # This is set in order to keep the SEO proper
longDescription: "Adds an option to pickup items from the ground as trash.\nYou can use your Secondary Use (default Q) on item on the ground to pick it up. Such items will be automatically marked as trash, so you can sell it at a vendor faster.\nThere is a built-in setting to disable the tooltip." # Description of what the mod can do
categories: ['Utility'] # Category of the type of mod

requirements: ['Enums >= 1.0', 'Structs >= 1.0'] # Requirements for the given mod
requirementTitles: ['Enums', 'Structs'] # The link-friendly name of the requirements

issues: "https://github.com/tominator1pl/bl-sdk-mods/issues"
download: "https://github.com/tominator1pl/bl-sdk-mods/raw/main/PickupAsTrash/PickupAsTrash.zip"
source: "https://github.com/tominator1pl/bl-sdk-mods" # Link to source code
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
