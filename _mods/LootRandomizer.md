---
layout: main

authors: "mopioid" # Authors of the mod
title: Loot Randomizer # Title of the mod
version: "1.0.7" # Version of the mod
supported: "BL2" # Supported games; currently can only display as "BL2", "BL2 + TPS", or "TPS"

tagline: "Create seeds to shuffle every item into new farm locations." # A short description of the mod itself.
description: "Create seeds to shuffle every item into new farm locations." # This is set in order to keep the SEO proper
longDescription: "Loot Randomizer is a mod for Borderlands 2 that provides repeated new playthrough experiences, by means of shuffling every item in the game into new drop locations.\n\nWhen playing Loot Randomizer, you create a seed, and your game's loot sources are assigned all new drops based on that seed. Your Knuckle Dragger may drop the Norfleet, while your Hyperius drops The Cradle.\n\nIn addition to enemies, missions are also assigned new quest rewards, and made to be infinitely repeatable such that they can be farmed without resetting your playthrough. Your 'Shoot This Guy In The Face' mission may reward a purple Jakobs sniper each turn-in, while your 'Beard Makes The Man' mission gives Lucrative Opportunity relics.\n\nEach loot source had been hand-tuned to provide fair loot generosity. Longer missions give multiple instances of their quest reward, for example, and raid bosses drop multiple of their assigned drop guaranteed. If you don't get a drop from an enemy on the first try, they will drop a 'hint' item instead, giving you the option to decide whether to keep farming them.\n\nSeeds can be configured with different options regarding what types of content to include, such as the ability to disable rare enemies or enable raid bosses. They can also be shared with friends (for fun competitive scenarios), and can accomodate any DLCs being owned or unowned.\n\nLoot Randomizer works in co-op, with the best experience if all players run the mod (however this is not strictly necessary). The host player's seed will be the one which is in effect in co-op. Loot Randomizer is also compatible with most other mods, including major overhauls (e.g. UCP, BL2fix, Reborn). However, others which increase the number of items or enemies in the game will not fully integrate with it (e.g. Exodus).\n\nAll loot sources in Loot Randomizer:\nhttps://github.com/mopioid/Borderlands-Loot-Randomizer/wiki/Locations\nAll items in Loot Randomizer:\nhttps://github.com/mopioid/Borderlands-Loot-Randomizer/wiki/Items" # Description of what the mod can do
categories: ['Gameplay'] # Category of the type of mod

requirements: [] # Requirements for the given mod
requirementTitles: [] # The link-friendly name of the requirements

issues: "https://github.com/mopioid/Borderlands-Loot-Randomizer/issues"
download: "https://github.com/mopioid/Borderlands-Loot-Randomizer/releases/tag/1.0.7"
source: "https://github.com/mopioid/Borderlands-Loot-Randomizer/tree/master" # Link to source code
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
