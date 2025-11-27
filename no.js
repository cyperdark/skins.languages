/* renaming

contests.0  =>  header.contests
title.ideas.0  =>  header.ideas
title.tools  =>  header.tools
title.home  =>  header.home
skins.14  =>  header.popular
skins.6  =>  header.all_skins
tags.0  =>  header.tags
header.0  =>  notifications.0
header.1  =>  notifications.1
contribute.0  =>  header.contribute
title.login  =>  header.login
footer.1  =>  footer.0
home.5  =>  plural.skins
meta.title.17  =>  home.title.1
meta.title.0  =>  home.title.0
meta.description.0  =>  home.description
home.5  =>  plural.skins
credits.7  =>  credits.1
credits.8  =>  credits.2
credits.3  =>  credits.4
sorting  =>  order
meta.title.15  =>  contests.title
meta.description.11  =>  contests.description
  =>
  =>
  =>
  =>
  =>
  =>
  =>
  =>
  =>





*/
export default {
  header: {
    home: 'Home',
    contests: 'Contests',
    ideas: 'Inspiration',
    tools: 'Tools',
    popular: 'Popular skins',
    all_skins: 'All skins',
    tags: 'Tags',
    new: 'New',
    contribute: 'Contribute',
    login: 'Log in',
    0: 'Views',
    1: 'Downloads',
    2: 'Likes'
  },
  notifications: {
    0: 'Notifications',
    1: 'Follow us on these platforms to receive notifications about new skins'
  },
  user_menu: {
    0: 'profile',
    1: 'my skin queue',
    2: 'refresh token',
    3: 'log out'
  },
  status: {
    0: 'Nothing was found',
    1: 'Not found',
    2: `Couldn't load image`,
    3: 'No image to load'
  },
  settings: {
    0: 'Settings',
    1: 'Mouse scroll',
    2: 'Enables easy image navigation when hovering over a skin preview card.',
    3: 'Card zoom in',
    4: 'Enables automatic image zoom when hovering over a skin preview card..',
    5: 'Automatic comment translation',
    6: 'Enables automatic translation of comments to English.'
  },
  footer: { 0: 'Credits' },
  home: {
    title: [
      'Discover osu! skins',
      'Random osu! skins'
    ],
    description: 'Find the best osu! skins on our site! Our huge library has skins for all gamemodes, aspect ratios and even top players. Plus, we have a special section for anime fans. Improve your gameplay with the perfect skin. #osuskins #osugame #anime',
    0: 'Available for download',
    1: 'Most [viewed], [liked], [downloaded] skins',
    2: [
      'viewed',
      'liked',
      'downloaded'
    ],
    3: [
      'Recent',
      'New releases',
      'Random'
    ],
    4: 'aspect ratios',
    5: 'more'
  },
  credits: {
    title: [
      'Artwork credits',
      'Used assets',
      'Localization helpers'
    ],
    0: 'Credits',
    1: 'Anyone? [{lang}]',
    2: 'Seems like cyperdark forgot to add them. {text}',
    3: [
      'Artworks',
      'Localization',
      'Assets'
    ],
    4: 'All icons are taken from {name}',
    5: 'Alle flagg bilder er fra {name}'
  },
  tools: {
    title: 'Skinning tools for osu! (by me :) )',
    description: 'Useful skinning tools for osu!, made by cyperdark',
    0: 'More skinning tools'
  },
  skin_ini: {
    title: 'Visual skin.ini editor - osu! tools',
    description: '',
    prepare: [
      'loading beatmap',
      'loading skin',
      'preparing skin',
      'loading viewer'
    ],
    0: 'Welcome to the visual skin.ini editor!',
    1: 'Here you can preview your skin gameplay with changes in real-time, such as combo colors, slider colors, and font offsets. Standard mode only for now',
    2: 'Beatmap:',
    3: 'Paste beatmap link',
    4: 'Import .osk / .zip',
    5: 'Import skin folder',
    6: '.osu file not found',
    7: 'Incorrect gamemode, only osu beatmaps allowed',
    8: 'Skin.ini not found',
    9: 'Select at least 1 .osk / .zip file',
    10: 'Viewer settings',
    11: 'Reset skin.ini',
    12: 'Export skin.ini',
    13: 'Randomize colors (on current tab)',
    14: 'Switch tab',
    15: 'Rewind',
    16: 'Forward',
    17: 'Play/Pause viewer',
    18: 'Move to previous settings section',
    19: 'Move to next settings section',
    20: 'Open menu',
    21: 'Close menu',
    22: 'Shortcut',
    23: 'Description',
    24: 'Specify via comma',
    25: 'Randomize',
    26: 'Revert to default element',
    27: 'Reset to default',
    28: 'Replace file',
    29: 'issue',
    30: 'Drag and drop files or skin',
    31: 'loaded',
    32: 'Gameplay speed',
    33: 'Random beatmap',
    34: 'Beatmap folder'
  },
  contests: {
    title: 'Official osu! skinning contests',
    description: 'List of all active/finished osu! contests',
    submit: [
      'Submissions closed...',
      'Submissions in progress...',
      'Submit your entry'
    ],
    0: 'Official skinning contests',
    1: [
      'Submission',
      'Preparing',
      'Voting',
      'Finished'
    ],
    2: 'Announcement',
    3: 'Submissions ended',
    4: 'Voting started',
    5: 'Voting ended',
    6: 'Results out',
    7: 'Submission phase...',
    8: 'Preparing phase...',
    9: 'Voting phase...',
    10: 'Waiting results...',
    11: 'Vote here',
    12: 'announcement',
    13: 'submissions',
    14: 'contest page',
    15: 'results',
    16: 'wiki',
    17: 'Ends in',
    18: 'Skins not found for this contest',
    19: 'Expand description | Close description'
  },
  ideas: {
    title: 'Inspiration - osu! skins',
    description: 'Find inspiration for your next osu! skin on our site. Browse through a diverse collection of skins and discover new techniques and ideas. Get inspired and create your own unique skins.',
    0: 'Screenshots not found for this category'
  },
  search: {
    title: 'Search osu skins',
    description: 'Find the perfect osu! skin with our advanced search feature. Browse through our huge library, filtered by ruleset, aspect ratio, and more. Or check out skins used by top players.',
    0: 'Skin title, author, or tags',
    1: [
      'name',
      'tags',
      'creators'
    ],
    2: 'Select date range',
    3: 'Size range',
    4: 'View count range',
    5: 'Download count range',
    6: 'Like count range',
    7: 'Select cursor type',
    8: 'Nothing was found',
    9: 'Try using a different set of search filters',
    10: 'Pending query',
    11: 'Use the search filters or type the skin\'s title, author or tags',
    12: 'Select mania key',
    13: 'reset',
    14: 'Cursor color',
    15: 'Circle color',
    16: 'Slider border color',
    17: 'Slider track color',
    18: 'experimental filters'
  },
  tags: {
    title: 'Search tags',
    description: '',
    0: 'Nothing was found',
    1: 'Try searching something else'
  },
  tag: {
    title: '{name} osu skins',
    description: '',
    0: 'Nothing was found',
    1: 'No skins were found for this tag',
    2: 'Try changing gamemode'
  },
  users: {
    title: [
      'Profile - {name} uploads',
      'Profile - {name} skins'
    ],
    description: [
      'All osu! skins uploaded by {name}',
      'All osu! skins created by {name}'
    ],
    0: [
      'Created skins',
      'Uploaded skins'
    ],
    1: 'Incorrect url',
    2: 'Make sure link is correct. Example: {url}',
    3: 'Unsupported format',
    4: 'Link format incorrect, use {url} or {url_1}',
    5: `Change at least one setting before updating`,
    6: `Unable to update settings`,
    7: `Settings updated`,
    8: 'Unknown error',
    9: 'Settings',
    10: 'Discord username',
    11: 'Discord server link',
    12: 'Twitter profile link',
    13: 'Reddit profile link',
    14: 'YouTube channel link',
    15: 'Link to blog',
    16: 'Show your liked skins',
    17: 'Update settings',
    18: '{amount} uploads | {amount} upload | {amount} uploads',
    19: 'Blog',
    20: 'Skins Stats',
    21: 'Expand «about me» | Close «about me»',
    22: 'Nothing was found',
    23: 'No skins were found for this creator'
  },
  skins: {
    title: [
      '{amount} osu! skins',
      '{amount} {category} osu! skins',
      '{amount} universal aspect ratio osu! skins',
      '204 Most viewed {mode} osu! skins',
      '204 Most downloaded {mode} osu! skins',
      '204 Most liked {mode} osu! skins'
    ],
    description: ['{amount} skins for osu!, catch the beat, mania and taiko'],
    0: 'All',
    1: 'Populær',
    2: 'osu!',
    3: 'ctb',
    4: 'mania',
    5: 'taiko',
    6: 'universal ratio',
    7: 'Nothing was found',
    8: 'No skins were found for this category',
    9: [
      'downloads',
      'views',
      'likes'
    ],
    10: 'Submitted skins',
    11: 'Skins currently in queue: {amount}',
    12: 'No skins currently submitted for moderation'
  },
  skin: {
    title: [
      'Submit new skin',
      '{name} osu skin'
    ],
    description: '{size}MB osu skin for {modes}, created by {creators}. Supports {ratios}',
    rules: {
      0: `**Do not** post nonsense.`,
      1: `**Don't** post **low-quality** or **duplicate** submissions.`,
      2: `Make sure your skin has **not** already been **published**.`,
      3: `A skin is **protected from deletion** if it has been featured in a video by channels such as **cpol or osuck**, or if a **top player used** it in their public content. (twitch, youtube, twitter, tiktok, github, etc.)`,
      4: `Screenshots must be **relevant** and **accurately represent** the skin.`,
      5: `**Do not** upload skins that the original creator has set as **private** or does not wish to share. (Unless you have permission)`,
      6: `If **your skin** is based on someone else's work or **uses assets** from other creators, **credit them** in your post.`,
      7: `If your skin **includes** third-party assets (art, hitsounds, fonts, etc.), you **must** have permission and provide proper **credit** in the **Resources** tab of your submission.`,
      8: `All submissions **must use English** as the primary language.\n- Titles containing **non-Latin** characters must also **include a Romanized** version.`,
      9: `**Prohibited** content includes:\n- Religious or political content\n- Racism, hate speech, or harassment\n- Offensive or discriminatory imagery\n- Excessive gore or extreme violence\n- Explicit sexual content, including depictions of minors`,
      10: `Suggestive or borderline content **must be clearly labeled** with the **NSFW** tag.`
    },
    0: 'Clear everything?',
    1: 'Submit',
    2: 'Submission rules',
    3: 'Agree & Submit',
    4: 'Suggest changes',
    5: 'Update skin',
    6: 'Log in to rate skin',
    7: 'Suggested changes',
    8: 'Select which changes you want to be applied',
    9: 'Apply',
    10: 'Reject',
    11: 'Apply changes',
    12: [
      'About',
      'Screenshots',
      'Resources',
      'Downloads',
      'Comments'
    ],
    13: 'Banner added',
    14: 'Banner updated',
    15: 'Total size of all screenshots must not exceed 100 MB (currently {amount})',
    16: 'Variant: {name}',
    17: 'A resource with this link has already been added',
    18: `Link not supported. Only youtube links are allowed.`,
    19: 'Video already added',
    20: 'Tag already added',
    21: 'Unauthorized',
    22: 'Log in to an account',
    23: `Link not supported. Only mega, gdrive and mediafire links are allowed.`,
    24: 'Unsupported osu! forum link',
    25: 'Unsupported reddit link',
    26: 'Couldn\'t parse link',
    27: 'Unsupported twitter link',
    28: 'Unknown cloud service',
    29: 'Manage versions',
    30: 'new version',
    31: 'Type skin name',
    32: 'Has extras?',
    33: 'Select aspect ratios',
    34: '{amount} issues',
    35: 'Edit',
    36: 'Log in to report skin',
    37: 'Exit editing',
    38: 'Remove banner',
    39: 'Description',
    40: '**Animations** - has animated elements (back button / skip button / hp bar)',
    41: '**Extras** - has files for customization / additional gameplay elements',
    42: '**HD** - has files for resolutions **above** 1366x768',
    43: '**SD** - has files for resolutions **below** 1366x768',
    44: 'Released at {date}',
    45: 'Uploaded at {date}',
    46: 'Paste a YouTube video link',
    47: 'Quick select',
    48: 'Remove all screenshots?',
    49: 'Type variant name...',
    50: 'Select screenshot category',
    51: 'Compare versions',
    52: 'Show gameplay only',
    53: 'Type a description and an url. Format description:url',
    54: 'Description:',
    55: 'Url:',
    56: `Oops!`,
    57: 'No `.osk` files are attached to this skin',
    58: `Nothing was found`,
    59: 'Change query or try searching something else',
    60: 'Log in to report a file',
    61: 'Versions',
    62: 'Download link',
    63: 'osu! forum link',
    64: 'reddit link',
    65: 'twitter link',
    66: 'Creators',
    67: 'If a creator wants to be anonymous or a collaborator does not have a bancho account, you can add them as a ghost creator.',
    68: 'Creators not added',
    69: 'Tags',
    70: 'Tags not added',
    71: 'start typing to get suggestions',
    72: 'Show',
    73: [
      'Creator',
      'Mixer',
      'Animations',
      'Arts',
      'Collab',
      'Sounds',
      'Gameplay'
    ],
    74: 'All changes have been saved locally',
    75: 'Changes restored from cache',
    76: 'Released {date}',
    77: 'Select roles',
    checks: {
      0: 'Skin name not specified',
      1: 'Add at least one creator',
      2: 'Select at least one aspect ratio',
      3: 'No screenshots provided',
      4: 'Add at least one gameplay screenshot',
      5: 'Skin link not specified',
      6: 'Some creators do not have roles',
      7: 'Some creators do not have names',
      8: 'Skin release date not specified',
      9: 'Skin version not specified',
      10: 'Content rating not selected'
    }
  },
  skin_block: {
    0: 'Open skin page',
    1: 'Open in fullscreen',
    2: 'Switch to other gamemode',
    3: 'Change image category',
    4: 'Copy short link'
  },
  gallery: {
    0: 'Open in fullscreen',
    1: 'Exit fullscreen',
    2: 'Reset zoom',
    3: 'Close gallery'
  },
  screenshots_select: {
    0: 'Welcome',
    1: 'Main menu',
    2: 'Song select',
    3: 'Mode menu',
    4: 'Mods',
    5: 'Countdown',
    6: 'Gameplay',
    7: 'Spinner',
    8: 'Section Pass',
    9: 'Section Fail',
    10: 'Pause Screen',
    11: 'Fail Screen',
    12: 'Result screen (top)',
    13: 'Skip',
    14: 'Banner',
    15: 'Result screen (bottom)',
    16: 'Pinned image',
    17: 'osu!',
    18: 'catch the beat',
    19: 'mania',
    20: 'taiko'
  },
  report: {
    skin_ini: [
      'Describe bug, preferably with reproduction steps',
      'Describe what you want to see...'
    ],
    tag: {
      0: 'Missing skin',
      1: 'Link to a video of missing skin'
    },
    skin_file: [
      'Download link is missing',
      'Skin is broken',
      'Describe what exactly broken'
    ],
    skin: [
      'Wrong/Missing screenshots',
      'Which screenshots are missing',
      'Wrong/Missing creators',
      'Type text...',
      'Missing NSFW tag',
      'Metadata',
      'Describe what exactly wrong',
      'Copyright/Missing credits',
      'Type text...'
    ],
    0: 'Log in to report a issue',
    1: 'Type is not selected',
    2: `Id does not exist`,
    3: 'Category not selected',
    4: 'Report already submitted',
    5: 'Report submitted',
    6: 'Select report category',
    7: 'Submit report'
  },
  plural: {
    skins: '{amount} skins | {amount} skin | {amount} skins',
    tags_skins: '«{name}» {amount} skins | «{name}» {amount} skin | «{name}» {amount} skins',
    views: '{amount} views | {amount} view | {amount} views',
    votes: '{amount} votes | {amount} vote | {amount} votes'
  },
  placeholder: {
    0: 'Type text..',
    1: 'Type link..',
    2: 'Type hex/rgb color..'
  },
  sorting: {
    date: 'Date',
    release_date: 'Release date',
    upload_date: 'Upload date',
    view: 'Views',
    vote: 'Votes',
    name: 'Name',
    download: 'Downloads',
    like: 'Likes',
    size: 'Size',
    total: 'Total'
  },
  order: {
    0: 'Most | Least',
    1: 'Most | Least',
    2: 'Highest | Lowest',
    3: 'Largest | Smallest',
    4: 'Newest | Oldest',
    5: 'A-Z | Z-A'
  },
  tooltips: {
    0: [
      '[hl]{example}[/hl] - [b]equal[/b] to {amount}',
      '[hl]{example}[/hl] - [b]greater than[/b] {amount}',
      '[hl]{example}[/hl] - [b]less than[/b] {amount}',
      '[hl]{example}[/hl] - [b]between[/b] {amount} [b]and[/b] {amount_2}'
    ],
    1: 'Usage examples:',
    2: `Select screenshot category`,
    3: '{amount} downloads',
    4: '{amount} views',
    5: '{likes} likes / {dislikes} dislikes',
    6: '{amount} skins',
    7: '{amount} votes'
  },
  nsfw: {
    0: 'NSFW Warning!',
    1: 'This skin contains sensitive or adult content!',
    3: 'Furry Warning!'
  },
  drag: {
    0: 'Click to add images',
    1: 'or drag & drop here',
    2: `drop images here`
  },
  buttons: {
    source: 'Art Source',
    load_more: 'Last mer',
    close: 'Close',
    choose: [
      'Yes',
      'No'
    ],
    expand_more: 'Show more | Show less'
  },
  error: {
    0: 'home page',
    1: 'log in',
    2: 'Report issue'
  }
};