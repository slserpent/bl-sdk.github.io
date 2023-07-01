---
layout: main

authors: "juso" # Authors of the mod
title: mateditor # Title of the mod
version: "1.3" # Version of the mod
supported: "BL2 + TPS + AoDK" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Edit Materials in realtime." # A short description of the mod itself.
description: "Edit Materials in realtime." # This is set in order to keep the SEO proper
longDescription: "This SDK mod is a Tool for modders. It allows the user to easily change any `MaterialInstanceConstant` in realtime.\nYou can filter all Materials and Textures using a search field.\nTo change the colors you have the choice between using a slider, inputting your own values (by CNRTL+Leftclick) or using a color wheel.All changes can easily be exported to a `.blcm` file to use as a standalone mod or for a modpack." # Description of what the mod can do
categories: ['Utility'] # Category of the type of mod

requirements: ['blimgui >= 2.0'] # Requirements for the given mod
requirementTitles: ['blimgui'] # The link-friendly name of the requirements

issues: "https://github.com/juso40/bl2sdk_Mods/issues"
download: "https://github.com/juso40/bl2sdk_Mods/raw/master/mateditor/mateditor.zip"
source: "https://github.com/juso40/bl2sdk_Mods/" # Link to source code
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
