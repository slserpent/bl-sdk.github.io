---
layout: main

authors: "Pyrex" # Authors of the mod
title: Roguelands Gamemode # Title of the mod
version: "1.0.8" # Version of the mod
supported: "BL2" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Roguelike gamemode for Borderlands 2 full of custom content." # A short description of the mod itself.
description: "Roguelike gamemode for Borderlands 2 full of custom content." # This is set in order to keep the SEO proper
longDescription: "Roguelike gamemode for Borderlands 2 full of custom content. Installation: ![yt](https://youtu.be/mOd01whwkiY) \nDISABLE DXVK WHILE USING THIS MOD IF YOU HAVE IT, it will cause a memory leak.\nWould also recommend disabling other mods while running this. They have not been tested and may cause problems.\nThese DLCS are required for the mod to function properly: (basically all story, headhunter and level increase dlcs)\n\nCaptain Scarlett and Her Pirate's Booty\nMr. Torgue's Campaign of Carnage\nSir Hammerlock's Big Game Hunt\nTiny Tina's Assault on Dragon Keep\nUltimate Vault Hunter Upgrade Pack\nUltimate Vault Hunter Upgrade Pack Two: Digistruct Peak Challenge\nT.K. Baha's Bloody Harvest\nThe Horrible Hunger of the Ravenous Wattle Gobbler\nHow Marcus Saved Mercenary Day\nMad Moxxi and the Wedding Day Massacre\nSir Hammerlock vs. the Son of Crawmerax\nCommander Lilith &amp; the Fight for Sanctuary" # Description of what the mod can do
categories: ['Gameplay'] # Category of the type of mod

requirements: ['MapLoader >= 1.4.3', 'UserFeedback >= 1.6'] # Requirements for the given mod
requirementTitles: ['MapLoader', 'UserFeedback'] # The link-friendly name of the requirements

issues: "https://github.com/PyrexBLJ/blsdk-mods/issues"
download: "https://github.com/PyrexBLJ/blsdk-mods/blob/main/RoguelandsGamemode/RoguelandsGamemode.zip"
source: "https://github.com/PyrexBLJ/blsdk-mods" # Link to source code
license: ['GNU GPLv3', 'https://choosealicense.com/licenses/gpl-3.0'] # License name, link about the license from https://choosealicense.com/

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
