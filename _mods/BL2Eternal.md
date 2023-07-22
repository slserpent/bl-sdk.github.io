---
layout: main

authors: "juso" # Authors of the mod
title: BL2 Eternal # Title of the mod
version: "1.6" # Version of the mod
supported: "BL2 + TPS + AoDK" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Glory Kills and Dashing in BL2." # A short description of the mod itself.
description: "Glory Kills and Dashing in BL2." # This is set in order to keep the SEO proper
longDescription: "Doom Eternal, but it's BL2.\nAdds the dash and glory kill mechanics from Doom Eternal to BL2.\nDash: Press sprint + direction while in air to dash.\nGlory Kill: Meleeing injured enemies causes them to instantly die and drop additional loot and restore your health. Enemies enter the glory kill state when below 15% health and injured. Enemies will stay only 5 seconds in the Glory Kill state.10 seconds after leaving the Glory Kill state the enemies can enter the state again by getting damaged while under 15% health.Glory killable enemies are marked by shock + fire particles around their feet.\n" # Description of what the mod can do
categories: ['Gameplay'] # Category of the type of mod

requirements: ['Coroutines >= 1.0'] # Requirements for the given mod
requirementTitles: ['Coroutines'] # The link-friendly name of the requirements

issues: "https://github.com/juso40/bl2sdk_Mods/issues"
download: "https://github.com/juso40/bl2sdk_Mods/raw/master/BL2Eternal/BL2Eternal.zip"
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
