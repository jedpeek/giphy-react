// Use Dummy Data to not run out of request on the rate limited API key
// Contains 100 gifs from giphy trending API call
const dummy_data = {
  data: [
  {
  type: "gif",
  id: "1X7sp16ijFtHMUdQgD",
  slug: "cbbc-dancing-the-next-step-1X7sp16ijFtHMUdQgD",
  url: "https://giphy.com/gifs/cbbc-dancing-the-next-step-1X7sp16ijFtHMUdQgD",
  bitly_gif_url: "https://gph.is/2ByujHW",
  bitly_url: "https://gph.is/2ByujHW",
  embed_url: "https://giphy.com/embed/1X7sp16ijFtHMUdQgD",
  username: "cbbc",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-11-26 14:06:49",
  trending_datetime: "2018-12-21 16:17:00",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/cbbc/BWXtNup1UW6A.png",
  banner_url: "",
  profile_url: "https://giphy.com/cbbc/",
  username: "cbbc",
  display_name: "CBBC",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200_s.gif",
  width: "200",
  height: "200",
  size: "21599"
  },
  original_still: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy_s.gif",
  width: "480",
  height: "480",
  size: "97302"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200w.gif",
  width: "200",
  height: "200",
  size: "1418670",
  mp4: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200w.mp4",
  mp4_size: "264200",
  webp: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200w.webp",
  webp_size: "353522"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/100_s.gif",
  width: "100",
  height: "100",
  size: "7554"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200_d.gif",
  width: "200",
  height: "200",
  size: "149277",
  webp: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200_d.webp",
  webp_size: "44422"
  },
  preview: {
  width: "216",
  height: "216",
  mp4: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy-preview.mp4",
  mp4_size: "43452"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/100.gif",
  width: "100",
  height: "100",
  size: "448862",
  mp4: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/100.mp4",
  mp4_size: "97748",
  webp: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/100.webp",
  webp_size: "147848"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy-downsized_s.gif",
  width: "205",
  height: "205",
  size: "24464"
  },
  downsized: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy-downsized.gif",
  width: "205",
  height: "205",
  size: "1495409"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy.gif",
  width: "480",
  height: "480",
  size: "6779617"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/100w_s.gif",
  width: "100",
  height: "100",
  size: "7554"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy-preview.webp",
  width: "136",
  height: "136",
  size: "36056"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200w_s.gif",
  width: "200",
  height: "200",
  size: "21599"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/100w.gif",
  width: "100",
  height: "100",
  size: "448862",
  mp4: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/100w.mp4",
  mp4_size: "48398",
  webp: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/100w.webp",
  webp_size: "147848"
  },
  downsized_small: {
  width: "216",
  height: "216",
  mp4: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy-downsized-small.mp4",
  mp4_size: "166933"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200w_d.gif",
  width: "200",
  height: "200",
  size: "149277",
  webp: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200w_d.webp",
  webp_size: "44422"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy-downsized-medium.gif",
  width: "384",
  height: "384",
  size: "4806199"
  },
  original: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy.gif",
  width: "480",
  height: "480",
  size: "6779617",
  frames: "58",
  mp4: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy.mp4",
  mp4_size: "986852",
  webp: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy.webp",
  webp_size: "941526",
  hash: "61e290f738b1606fad43b80085682ba7"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200.gif",
  width: "200",
  height: "200",
  size: "1418670",
  mp4: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200.mp4",
  mp4_size: "264200",
  webp: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/200.webp",
  webp_size: "353522"
  },
  hd: {
  width: "720",
  height: "720",
  mp4: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy-hd.mp4",
  mp4_size: "1926785"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy-loop.mp4",
  mp4_size: "3500300"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy.mp4",
  mp4_size: "986852"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/1X7sp16ijFtHMUdQgD/giphy-preview.gif",
  width: "75",
  height: "75",
  size: "47577"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/1X7sp16ijFtHMUdQgD/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "happy the next step GIF by CBBC",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1X7sp16ijFtHMUdQgD&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1X7sp16ijFtHMUdQgD&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1X7sp16ijFtHMUdQgD&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "1inNqcQ4gJTp7iicq0",
  slug: "gifregistry-netflix-kat-graham-holiday-calendar-1inNqcQ4gJTp7iicq0",
  url: "https://giphy.com/gifs/gifregistry-netflix-kat-graham-holiday-calendar-1inNqcQ4gJTp7iicq0",
  bitly_gif_url: "https://gph.is/2PHMBze",
  bitly_url: "https://gph.is/2PHMBze",
  embed_url: "https://giphy.com/embed/1inNqcQ4gJTp7iicq0",
  username: "gifregistry",
  source: "https://www.netflix.com/title/80242446",
  rating: "g",
  content_url: "",
  source_tld: "www.netflix.com",
  source_post_url: "https://www.netflix.com/title/80242446",
  is_sticker: 0,
  import_datetime: "2018-11-22 02:53:03",
  trending_datetime: "2018-12-21 16:16:42",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/gifregistry/YQKnypIqsuUm.jpg",
  banner_url: "https://media2.giphy.com/headers/gifregistry/Xw10TyHLY8j1.png",
  banner_image: "https://media2.giphy.com/headers/gifregistry/Xw10TyHLY8j1.png",
  profile_url: "https://giphy.com/gifregistry/",
  username: "gifregistry",
  display_name: "GIF Registry",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200_s.gif",
  width: "200",
  height: "200",
  size: "27326"
  },
  original_still: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy_s.gif",
  width: "540",
  height: "540",
  size: "118646"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200w.gif",
  width: "200",
  height: "200",
  size: "687576",
  mp4: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200w.mp4",
  mp4_size: "66503",
  webp: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200w.webp",
  webp_size: "86570"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/100_s.gif",
  width: "100",
  height: "100",
  size: "8309"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200_d.gif",
  width: "200",
  height: "200",
  size: "160971",
  webp: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200_d.webp",
  webp_size: "31688"
  },
  preview: {
  width: "216",
  height: "216",
  mp4: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy-preview.mp4",
  mp4_size: "36301"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/100.gif",
  width: "100",
  height: "100",
  size: "202556",
  mp4: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/100.mp4",
  mp4_size: "24189",
  webp: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/100.webp",
  webp_size: "33144"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy-downsized_s.gif",
  width: "337",
  height: "337",
  size: "77680"
  },
  downsized: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy-downsized.gif",
  width: "337",
  height: "337",
  size: "1953111"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy.gif",
  width: "540",
  height: "540",
  size: "2867505"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/100w_s.gif",
  width: "100",
  height: "100",
  size: "8309"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy-preview.webp",
  width: "160",
  height: "160",
  size: "38830"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200w_s.gif",
  width: "200",
  height: "200",
  size: "27326"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/100w.gif",
  width: "100",
  height: "100",
  size: "202556",
  mp4: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/100w.mp4",
  mp4_size: "24189",
  webp: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/100w.webp",
  webp_size: "33144"
  },
  downsized_small: {
  width: "346",
  height: "346",
  mp4: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy-downsized-small.mp4",
  mp4_size: "81922"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200w_d.gif",
  width: "200",
  height: "200",
  size: "160971",
  webp: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200w_d.webp",
  webp_size: "31688"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy.gif",
  width: "540",
  height: "540",
  size: "2867505"
  },
  original: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy.gif",
  width: "540",
  height: "540",
  size: "2867505",
  frames: "26",
  mp4: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy.mp4",
  mp4_size: "246134",
  webp: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy.webp",
  webp_size: "457142",
  hash: "6ff3010d1ea3637396a36c6a6d747fe5"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200.gif",
  width: "200",
  height: "200",
  size: "687576",
  mp4: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200.mp4",
  mp4_size: "66503",
  webp: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/200.webp",
  webp_size: "86570"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy-loop.mp4",
  mp4_size: "3006858"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy.mp4",
  mp4_size: "246134"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/1inNqcQ4gJTp7iicq0/giphy-preview.gif",
  width: "77",
  height: "77",
  size: "49618"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/1inNqcQ4gJTp7iicq0/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "naughty kat graham by GIF Registry",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1inNqcQ4gJTp7iicq0&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1inNqcQ4gJTp7iicq0&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1inNqcQ4gJTp7iicq0&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l1tvYls9f3v7FVrJwF",
  slug: "gwenstefani-christmas-xmas-you-make-it-feel-like-l1tvYls9f3v7FVrJwF",
  url: "https://giphy.com/gifs/gwenstefani-christmas-xmas-you-make-it-feel-like-l1tvYls9f3v7FVrJwF",
  bitly_gif_url: "https://gph.is/2A7sMa1",
  bitly_url: "https://gph.is/2A7sMa1",
  embed_url: "https://giphy.com/embed/l1tvYls9f3v7FVrJwF",
  username: "gwenstefani",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-11-21 00:19:58",
  trending_datetime: "2018-12-21 21:00:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/gwenstefani/vq0Mqmbk08eT.jpg",
  banner_url: "https://media0.giphy.com/headers/gwenstefani/bY0tq8HXu7gg.jpg",
  banner_image: "https://media0.giphy.com/headers/gwenstefani/bY0tq8HXu7gg.jpg",
  profile_url: "https://giphy.com/gwenstefani/",
  username: "gwenstefani",
  display_name: "Gwen Stefani",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200_s.gif",
  width: "356",
  height: "200",
  size: "43312"
  },
  original_still: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy_s.gif",
  width: "480",
  height: "270",
  size: "72688"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200w.gif",
  width: "200",
  height: "113",
  size: "164146",
  mp4: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200w.mp4",
  mp4_size: "16763",
  webp: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200w.webp",
  webp_size: "34960"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/100_s.gif",
  width: "178",
  height: "100",
  size: "13727"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200_d.gif",
  width: "356",
  height: "200",
  size: "263633",
  webp: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200_d.webp",
  webp_size: "55174"
  },
  preview: {
  width: "430",
  height: "242",
  mp4: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy-preview.mp4",
  mp4_size: "26809"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/100.gif",
  width: "178",
  height: "100",
  size: "131038",
  mp4: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/100.mp4",
  mp4_size: "16170",
  webp: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/100.webp",
  webp_size: "31488"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "72688"
  },
  downsized: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy.gif",
  width: "480",
  height: "270",
  size: "760101"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy.gif",
  width: "480",
  height: "270",
  size: "760101"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/100w_s.gif",
  width: "100",
  height: "57",
  size: "5844"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy-preview.webp",
  width: "296",
  height: "166",
  size: "41768"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200w_s.gif",
  width: "200",
  height: "113",
  size: "16886"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/100w.gif",
  width: "100",
  height: "57",
  size: "51923",
  mp4: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/100w.mp4",
  mp4_size: "8177",
  webp: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/100w.webp",
  webp_size: "15862"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy-downsized-small.mp4",
  mp4_size: "60001"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200w_d.gif",
  width: "200",
  height: "113",
  size: "98218",
  webp: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200w_d.webp",
  webp_size: "24468"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy.gif",
  width: "480",
  height: "270",
  size: "760101"
  },
  original: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy.gif",
  width: "480",
  height: "270",
  size: "760101",
  frames: "10",
  mp4: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy.mp4",
  mp4_size: "60001",
  webp: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy.webp",
  webp_size: "100632",
  hash: "b9e87c99d2c880c200065133a928af68"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200.gif",
  width: "356",
  height: "200",
  size: "431440",
  mp4: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200.mp4",
  mp4_size: "38972",
  webp: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/200.webp",
  webp_size: "71948"
  },
  hd: {
  width: "1920",
  height: "1080",
  mp4: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy-hd.mp4",
  mp4_size: "591592"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy-loop.mp4",
  mp4_size: "1222304"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy.mp4",
  mp4_size: "60001"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/l1tvYls9f3v7FVrJwF/giphy-preview.gif",
  width: "121",
  height: "68",
  size: "49629"
  },
  "480w_still": {
  url: "l1tvYls9f3v7FVrJwF/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "blake shelton christmas GIF by Gwen Stefani",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1tvYls9f3v7FVrJwF&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1tvYls9f3v7FVrJwF&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1tvYls9f3v7FVrJwF&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "fxkvbDz0zhyFHFFbO6",
  slug: "nhl-hockey-ice-fxkvbDz0zhyFHFFbO6",
  url: "https://giphy.com/gifs/nhl-hockey-ice-fxkvbDz0zhyFHFFbO6",
  bitly_gif_url: "https://gph.is/2A1Urt4",
  bitly_url: "https://gph.is/2A1Urt4",
  embed_url: "https://giphy.com/embed/fxkvbDz0zhyFHFFbO6",
  username: "nhl",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-11-18 18:06:10",
  trending_datetime: "2018-12-21 20:45:01",
  user: {
  avatar_url: "https://media3.giphy.com/channel_assets/nhl/sCDQY3KHSisL.jpg",
  banner_url: "https://media3.giphy.com/channel_assets/nhl/6Ol4yITkVIFv.gif",
  banner_image: "https://media3.giphy.com/channel_assets/nhl/6Ol4yITkVIFv.gif",
  profile_url: "https://giphy.com/nhl/",
  username: "nhl",
  display_name: "NHL",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200_s.gif",
  width: "356",
  height: "200",
  size: "48004"
  },
  original_still: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy_s.gif",
  width: "500",
  height: "281",
  size: "70291"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200w.gif",
  width: "200",
  height: "112",
  size: "1965482",
  mp4: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200w.mp4",
  mp4_size: "287081",
  webp: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200w.webp",
  webp_size: "521744"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/100_s.gif",
  width: "178",
  height: "100",
  size: "15811"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200_d.gif",
  width: "356",
  height: "200",
  size: "276034",
  webp: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200_d.webp",
  webp_size: "70136"
  },
  preview: {
  width: "250",
  height: "140",
  mp4: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy-preview.mp4",
  mp4_size: "39273"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/100.gif",
  width: "178",
  height: "100",
  size: "1672154",
  mp4: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/100.mp4",
  mp4_size: "242779",
  webp: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/100.webp",
  webp_size: "444916"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy-downsized_s.gif",
  width: "238",
  height: "133",
  size: "26711"
  },
  downsized: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy-downsized.gif",
  width: "238",
  height: "133",
  size: "1436980"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy.gif",
  width: "500",
  height: "281",
  size: "7427020"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/100w_s.gif",
  width: "100",
  height: "56",
  size: "6181"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy-preview.webp",
  width: "188",
  height: "106",
  size: "49016"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200w_s.gif",
  width: "200",
  height: "112",
  size: "18449"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/100w.gif",
  width: "100",
  height: "56",
  size: "604699",
  mp4: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/100w.mp4",
  mp4_size: "46552",
  webp: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/100w.webp",
  webp_size: "183730"
  },
  downsized_small: {
  width: "200",
  height: "112",
  mp4: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy-downsized-small.mp4",
  mp4_size: "144089"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200w_d.gif",
  width: "200",
  height: "112",
  size: "104135",
  webp: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200w_d.webp",
  webp_size: "30532"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy-downsized-medium.gif",
  width: "500",
  height: "281",
  size: "4916286"
  },
  original: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy.gif",
  width: "500",
  height: "281",
  size: "7427020",
  frames: "117",
  mp4: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy.mp4",
  mp4_size: "1223173",
  webp: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy.webp",
  webp_size: "1775366",
  hash: "dffc616b428252648e258d6719a8331e"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200.gif",
  width: "356",
  height: "200",
  size: "5178530",
  mp4: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200.mp4",
  mp4_size: "733861",
  webp: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/200.webp",
  webp_size: "1182594"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy-loop.mp4",
  mp4_size: "2319607"
  },
  original_mp4: {
  width: "480",
  height: "268",
  mp4: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy.mp4",
  mp4_size: "1223173"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/fxkvbDz0zhyFHFFbO6/giphy-preview.gif",
  width: "94",
  height: "53",
  size: "49219"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/fxkvbDz0zhyFHFFbO6/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "gritty ice hockey GIF by NHL",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=fxkvbDz0zhyFHFFbO6&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=fxkvbDz0zhyFHFFbO6&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=fxkvbDz0zhyFHFFbO6&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xT0xeMgV8484jKozUA",
  slug: "wwe-wrestling-xT0xeMgV8484jKozUA",
  url: "https://giphy.com/gifs/wwe-wrestling-xT0xeMgV8484jKozUA",
  bitly_gif_url: "https://gph.is/2ytBmNn",
  bitly_url: "https://gph.is/2ytBmNn",
  embed_url: "https://giphy.com/embed/xT0xeMgV8484jKozUA",
  username: "wwe",
  source: "https://www.wwe.com/videos/the-rock-sends-a-holiday-message-raw-december-25-2000",
  rating: "g",
  content_url: "",
  source_tld: "www.wwe.com",
  source_post_url: "https://www.wwe.com/videos/the-rock-sends-a-holiday-message-raw-december-25-2000",
  is_sticker: 0,
  import_datetime: "2017-12-14 21:17:44",
  trending_datetime: "2017-12-25 15:45:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/wwe/kFThSppSrHym.jpg",
  banner_url: "",
  profile_url: "https://giphy.com/wwe/",
  username: "wwe",
  display_name: "WWE",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200_s.gif",
  width: "267",
  height: "200",
  size: "35090"
  },
  original_still: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy_s.gif",
  width: "350",
  height: "262",
  size: "55734"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200w.gif",
  width: "200",
  height: "150",
  size: "686277",
  mp4: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200w.mp4",
  mp4_size: "52274",
  webp: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200w.webp",
  webp_size: "216322"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/100_s.gif",
  width: "134",
  height: "100",
  size: "10865"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200_d.gif",
  width: "267",
  height: "200",
  size: "212372",
  webp: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200_d.webp",
  webp_size: "50874"
  },
  preview: {
  width: "165",
  height: "124",
  mp4: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy-preview.mp4",
  mp4_size: "19596"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/100.gif",
  width: "134",
  height: "100",
  size: "322431",
  mp4: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/100.mp4",
  mp4_size: "31317",
  webp: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/100.webp",
  webp_size: "121698"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy-downsized_s.gif",
  width: "250",
  height: "187",
  size: "31190"
  },
  downsized: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy-downsized.gif",
  width: "250",
  height: "187",
  size: "1076442"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy.gif",
  width: "350",
  height: "262",
  size: "2050103"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/100w_s.gif",
  width: "100",
  height: "75",
  size: "7048"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy-preview.webp",
  width: "175",
  height: "131",
  size: "49680"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200w_s.gif",
  width: "200",
  height: "150",
  size: "20858"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/100w.gif",
  width: "100",
  height: "75",
  size: "191214",
  mp4: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/100w.mp4",
  mp4_size: "20326",
  webp: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/100w.webp",
  webp_size: "82642"
  },
  downsized_small: {
  width: "312",
  height: "234",
  mp4: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy-downsized-small.mp4",
  mp4_size: "52764"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200w_d.gif",
  width: "200",
  height: "150",
  size: "123343",
  webp: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200w_d.webp",
  webp_size: "33444"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy.gif",
  width: "350",
  height: "262",
  size: "2050103"
  },
  original: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy.gif",
  width: "350",
  height: "262",
  size: "2050103",
  frames: "39",
  mp4: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy.mp4",
  mp4_size: "233608",
  webp: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy.webp",
  webp_size: "547220",
  hash: "318114229e094f26410c5f179d4498a8"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200.gif",
  width: "267",
  height: "200",
  size: "1223555",
  mp4: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200.mp4",
  mp4_size: "74696",
  webp: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/200.webp",
  webp_size: "328852"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy-loop.mp4",
  mp4_size: "2045982"
  },
  original_mp4: {
  width: "480",
  height: "358",
  mp4: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy.mp4",
  mp4_size: "233608"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/giphy-preview.gif",
  width: "107",
  height: "80",
  size: "48056"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/xT0xeMgV8484jKozUA/480w_s.jpg",
  width: "480",
  height: "359"
  }
  },
  title: "merry christmas GIF by WWE",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xT0xeMgV8484jKozUA&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xT0xeMgV8484jKozUA&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xT0xeMgV8484jKozUA&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "1lxQVlrmHYW44ViJNp",
  slug: "CMNHospitals-merry-christmas-childrens-miracle-network-hospitals-1lxQVlrmHYW44ViJNp",
  url: "https://giphy.com/gifs/CMNHospitals-merry-christmas-childrens-miracle-network-hospitals-1lxQVlrmHYW44ViJNp",
  bitly_gif_url: "https://gph.is/2BV0vpu",
  bitly_url: "https://gph.is/2BV0vpu",
  embed_url: "https://giphy.com/embed/1lxQVlrmHYW44ViJNp",
  username: "CMNHospitals",
  source: "cmnhospitals.org/donate",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "cmnhospitals.org/donate",
  is_sticker: 0,
  import_datetime: "2018-12-06 19:56:51",
  trending_datetime: "2018-12-21 20:15:02",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/CMNHospitals/rVArpf9OWR5h.gif",
  banner_url: "",
  profile_url: "https://giphy.com/CMNHospitals/",
  username: "CMNHospitals",
  display_name: "Children's Miracle Network Hospitals",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200_s.gif",
  width: "356",
  height: "200",
  size: "39822"
  },
  original_still: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy_s.gif",
  width: "480",
  height: "270",
  size: "64134"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200w.gif",
  width: "200",
  height: "113",
  size: "380816",
  mp4: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200w.mp4",
  mp4_size: "40207",
  webp: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200w.webp",
  webp_size: "109004"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/100_s.gif",
  width: "178",
  height: "100",
  size: "13175"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200_d.gif",
  width: "356",
  height: "200",
  size: "238872",
  webp: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200_d.webp",
  webp_size: "70582"
  },
  preview: {
  width: "280",
  height: "158",
  mp4: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy-preview.mp4",
  mp4_size: "39063"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/100.gif",
  width: "178",
  height: "100",
  size: "314776",
  mp4: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/100.mp4",
  mp4_size: "36200",
  webp: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/100.webp",
  webp_size: "95964"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "64134"
  },
  downsized: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy.gif",
  width: "480",
  height: "270",
  size: "1308878"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy.gif",
  width: "480",
  height: "270",
  size: "1308878"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/100w_s.gif",
  width: "100",
  height: "57",
  size: "5524"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy-preview.webp",
  width: "196",
  height: "110",
  size: "48964"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200w_s.gif",
  width: "200",
  height: "113",
  size: "15775"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/100w.gif",
  width: "100",
  height: "57",
  size: "120206",
  mp4: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/100w.mp4",
  mp4_size: "15084",
  webp: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/100w.webp",
  webp_size: "43066"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy-downsized-small.mp4",
  mp4_size: "141658"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200w_d.gif",
  width: "200",
  height: "113",
  size: "88711",
  webp: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200w_d.webp",
  webp_size: "32614"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy.gif",
  width: "480",
  height: "270",
  size: "1308878"
  },
  original: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy.gif",
  width: "480",
  height: "270",
  size: "1308878",
  frames: "24",
  mp4: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy.mp4",
  mp4_size: "141658",
  webp: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy.webp",
  webp_size: "292540",
  hash: "2f898d1a01b4e00fdc3af22640026a38"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200.gif",
  width: "356",
  height: "200",
  size: "997074",
  mp4: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200.mp4",
  mp4_size: "92515",
  webp: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/200.webp",
  webp_size: "224276"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy-loop.mp4",
  mp4_size: "1278302"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy.mp4",
  mp4_size: "141658"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/1lxQVlrmHYW44ViJNp/giphy-preview.gif",
  width: "96",
  height: "54",
  size: "35721"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/1lxQVlrmHYW44ViJNp/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "merry christmas kids GIF by Children's Miracle Network Hospitals",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1lxQVlrmHYW44ViJNp&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1lxQVlrmHYW44ViJNp&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1lxQVlrmHYW44ViJNp&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "dlbriPZSZynhDzbo2T",
  slug: "marshmello-together-dlbriPZSZynhDzbo2T",
  url: "https://giphy.com/gifs/marshmello-together-dlbriPZSZynhDzbo2T",
  bitly_gif_url: "https://gph.is/2BDLTKE",
  bitly_url: "https://gph.is/2BDLTKE",
  embed_url: "https://giphy.com/embed/dlbriPZSZynhDzbo2T",
  username: "marshmello",
  source: "https://www.youtube.com/watch?v=JePnQ1gSagc",
  rating: "pg",
  content_url: "",
  source_tld: "www.youtube.com",
  source_post_url: "https://www.youtube.com/watch?v=JePnQ1gSagc",
  is_sticker: 0,
  import_datetime: "2018-11-28 16:18:41",
  trending_datetime: "2018-12-21 20:00:01",
  user: {
  avatar_url: "https://media3.giphy.com/avatars/marshmello/8nPZY7YtuVY9.jpg",
  banner_url: "https://media3.giphy.com/headers/marshmello/GtXjfTPUIybf.png",
  banner_image: "https://media3.giphy.com/headers/marshmello/GtXjfTPUIybf.png",
  profile_url: "https://giphy.com/marshmello/",
  username: "marshmello",
  display_name: "Marshmello",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200_s.gif",
  width: "356",
  height: "200",
  size: "46736"
  },
  original_still: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy_s.gif",
  width: "480",
  height: "270",
  size: "73601"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200w.gif",
  width: "200",
  height: "113",
  size: "333952",
  mp4: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200w.mp4",
  mp4_size: "40227",
  webp: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200w.webp",
  webp_size: "76024"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/100_s.gif",
  width: "178",
  height: "100",
  size: "14908"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200_d.gif",
  width: "356",
  height: "200",
  size: "280543",
  webp: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200_d.webp",
  webp_size: "53000"
  },
  preview: {
  width: "305",
  height: "172",
  mp4: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy-preview.mp4",
  mp4_size: "33640"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/100.gif",
  width: "178",
  height: "100",
  size: "272103",
  mp4: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/100.mp4",
  mp4_size: "37388",
  webp: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/100.webp",
  webp_size: "67740"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "73601"
  },
  downsized: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy.gif",
  width: "480",
  height: "270",
  size: "1378177"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy.gif",
  width: "480",
  height: "270",
  size: "1378177"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/100w_s.gif",
  width: "100",
  height: "57",
  size: "6192"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy-preview.webp",
  width: "234",
  height: "132",
  size: "49370"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200w_s.gif",
  width: "200",
  height: "113",
  size: "18095"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/100w.gif",
  width: "100",
  height: "57",
  size: "103811",
  mp4: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/100w.mp4",
  mp4_size: "17989",
  webp: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/100w.webp",
  webp_size: "32086"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy-downsized-small.mp4",
  mp4_size: "121182"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200w_d.gif",
  width: "200",
  height: "113",
  size: "104237",
  webp: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200w_d.webp",
  webp_size: "25618"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy.gif",
  width: "480",
  height: "270",
  size: "1378177"
  },
  original: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy.gif",
  width: "480",
  height: "270",
  size: "1378177",
  frames: "19",
  mp4: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy.mp4",
  mp4_size: "121182",
  webp: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy.webp",
  webp_size: "203978",
  hash: "fbe70fc255c06a25940a6b56b4ff16e1"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200.gif",
  width: "356",
  height: "200",
  size: "888578",
  mp4: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200.mp4",
  mp4_size: "85016",
  webp: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/200.webp",
  webp_size: "150798"
  },
  hd: {
  width: "1920",
  height: "1080",
  mp4: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy-hd.mp4",
  mp4_size: "799120"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy-loop.mp4",
  mp4_size: "1294409"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy.mp4",
  mp4_size: "121182"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/dlbriPZSZynhDzbo2T/giphy-preview.gif",
  width: "96",
  height: "54",
  size: "41769"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/dlbriPZSZynhDzbo2T/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "cheers GIF by Marshmello",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=dlbriPZSZynhDzbo2T&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=dlbriPZSZynhDzbo2T&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=dlbriPZSZynhDzbo2T&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "PTb1XPLbnvGVO",
  slug: "ariana-grande-gif-gifs-PTb1XPLbnvGVO",
  url: "https://giphy.com/gifs/ariana-grande-gif-gifs-PTb1XPLbnvGVO",
  bitly_gif_url: "https://gph.is/1Mez0TW",
  bitly_url: "https://gph.is/1Mez0TW",
  embed_url: "https://giphy.com/embed/PTb1XPLbnvGVO",
  username: "",
  source: "https://weheartit.com/lifeofallybrooke/collections/131642904-ariana-grande-gifs",
  rating: "g",
  content_url: "",
  source_tld: "weheartit.com",
  source_post_url: "https://weheartit.com/lifeofallybrooke/collections/131642904-ariana-grande-gifs",
  is_sticker: 0,
  import_datetime: "2015-07-08 13:23:12",
  trending_datetime: "2018-12-21 19:45:01",
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200_s.gif",
  width: "350",
  height: "200"
  },
  original_still: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy_s.gif",
  width: "245",
  height: "140"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200w.gif",
  width: "200",
  height: "114",
  size: "967446",
  mp4: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200w.mp4",
  mp4_size: "114682",
  webp: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200w.webp",
  webp_size: "526150"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/100_s.gif",
  width: "175",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200_d.gif",
  width: "350",
  height: "200",
  size: "143841",
  webp: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200_d.webp",
  webp_size: "63830"
  },
  preview: {
  width: "194",
  height: "110",
  mp4: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy-preview.mp4",
  mp4_size: "38675"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/100.gif",
  width: "175",
  height: "100",
  size: "791680",
  mp4: "https://media3.giphy.com/media/PTb1XPLbnvGVO/100.mp4",
  mp4_size: "90497",
  webp: "https://media3.giphy.com/media/PTb1XPLbnvGVO/100.webp",
  webp_size: "440820"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy_s.gif",
  width: "245",
  height: "140"
  },
  downsized: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy.gif",
  width: "245",
  height: "140",
  size: "1095314"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy.gif",
  width: "245",
  height: "140",
  size: "1095314"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/100w_s.gif",
  width: "100",
  height: "57"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy-preview.webp",
  width: "196",
  height: "112",
  size: "46448"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200w_s.gif",
  width: "200",
  height: "114"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/100w.gif",
  width: "100",
  height: "57",
  size: "346446",
  mp4: "https://media3.giphy.com/media/PTb1XPLbnvGVO/100w.mp4",
  mp4_size: "42875",
  webp: "https://media3.giphy.com/media/PTb1XPLbnvGVO/100w.webp",
  webp_size: "215268"
  },
  downsized_small: {
  width: "244",
  height: "140",
  mp4: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy-downsized-small.mp4",
  mp4_size: "179636"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200w_d.gif",
  width: "200",
  height: "114",
  size: "56531",
  webp: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200w_d.webp",
  webp_size: "30926"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy.gif",
  width: "245",
  height: "140",
  size: "1095314"
  },
  original: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy.gif",
  width: "245",
  height: "140",
  size: "1095314",
  frames: "105",
  mp4: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy.mp4",
  mp4_size: "416378",
  webp: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy.webp",
  webp_size: "779492"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200.gif",
  width: "350",
  height: "200",
  size: "2480215",
  mp4: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200.mp4",
  mp4_size: "229609",
  webp: "https://media3.giphy.com/media/PTb1XPLbnvGVO/200.webp",
  webp_size: "1091990"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy-loop.mp4",
  mp4_size: "1512306"
  },
  original_mp4: {
  width: "480",
  height: "274",
  mp4: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy.mp4",
  mp4_size: "416378"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/giphy-preview.gif",
  width: "170",
  height: "97",
  size: "49994"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/PTb1XPLbnvGVO/480w_s.jpg",
  width: "480",
  height: "274"
  }
  },
  title: "ariana grande christmas GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=PTb1XPLbnvGVO&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=PTb1XPLbnvGVO&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=PTb1XPLbnvGVO&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "PNQZEi1nS99wtB7gAB",
  slug: "tessa-thompson-mib-men-in-black-international-PNQZEi1nS99wtB7gAB",
  url: "https://giphy.com/gifs/tessa-thompson-mib-men-in-black-international-PNQZEi1nS99wtB7gAB",
  bitly_gif_url: "https://gph.is/2rLvnTg",
  bitly_url: "https://gph.is/2rLvnTg",
  embed_url: "https://giphy.com/embed/PNQZEi1nS99wtB7gAB",
  username: "",
  source: "https://www.youtube.com/watch?v=BV-WEb2oxLk",
  rating: "g",
  content_url: "",
  source_tld: "www.youtube.com",
  source_post_url: "https://www.youtube.com/watch?v=BV-WEb2oxLk",
  is_sticker: 0,
  import_datetime: "2018-12-20 16:50:33",
  trending_datetime: "2018-12-21 19:30:02",
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200_s.gif",
  width: "368",
  height: "200",
  size: "40478"
  },
  original_still: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy_s.gif",
  width: "480",
  height: "261",
  size: "59691"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200w.gif",
  width: "200",
  height: "109",
  size: "261555",
  mp4: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200w.mp4",
  mp4_size: "23069",
  webp: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200w.webp",
  webp_size: "61210"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/100_s.gif",
  width: "184",
  height: "100",
  size: "13716"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200_d.gif",
  width: "368",
  height: "200",
  size: "265099",
  webp: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200_d.webp",
  webp_size: "48200"
  },
  preview: {
  width: "339",
  height: "184",
  mp4: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy-preview.mp4",
  mp4_size: "26386"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/100.gif",
  width: "184",
  height: "100",
  size: "228070",
  mp4: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/100.mp4",
  mp4_size: "20937",
  webp: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/100.webp",
  webp_size: "55486"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy-downsized_s.gif",
  width: "480",
  height: "261",
  size: "59691"
  },
  downsized: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy.gif",
  width: "480",
  height: "261",
  size: "1162287"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy.gif",
  width: "480",
  height: "261",
  size: "1162287"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/100w_s.gif",
  width: "100",
  height: "55",
  size: "5711"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy-preview.webp",
  width: "246",
  height: "134",
  size: "49180"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200w_s.gif",
  width: "200",
  height: "109",
  size: "15537"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/100w.gif",
  width: "100",
  height: "55",
  size: "82409",
  mp4: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/100w.mp4",
  mp4_size: "10130",
  webp: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/100w.webp",
  webp_size: "25824"
  },
  downsized_small: {
  width: "480",
  height: "260",
  mp4: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy-downsized-small.mp4",
  mp4_size: "99390"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200w_d.gif",
  width: "200",
  height: "109",
  size: "95321",
  webp: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200w_d.webp",
  webp_size: "22546"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy.gif",
  width: "480",
  height: "261",
  size: "1162287"
  },
  original: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy.gif",
  width: "480",
  height: "261",
  size: "1162287",
  frames: "16",
  mp4: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy.mp4",
  mp4_size: "89123",
  webp: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy.webp",
  webp_size: "188932",
  hash: "68d2c649cd855b0d61e69a16391b7535"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200.gif",
  width: "368",
  height: "200",
  size: "752330",
  mp4: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200.mp4",
  mp4_size: "54565",
  webp: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/200.webp",
  webp_size: "131992"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy-loop.mp4",
  mp4_size: "1184189"
  },
  original_mp4: {
  width: "480",
  height: "260",
  mp4: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy.mp4",
  mp4_size: "89123"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/PNQZEi1nS99wtB7gAB/giphy-preview.gif",
  width: "96",
  height: "52",
  size: "47292"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/PNQZEi1nS99wtB7gAB/480w_s.jpg",
  width: "480",
  height: "261"
  }
  },
  title: "chris hemsworth point GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=PNQZEi1nS99wtB7gAB&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=PNQZEi1nS99wtB7gAB&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=PNQZEi1nS99wtB7gAB&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "cAc3pileahilOk5qqh",
  slug: "statefarm-cAc3pileahilOk5qqh",
  url: "https://giphy.com/gifs/statefarm-cAc3pileahilOk5qqh",
  bitly_gif_url: "https://gph.is/2RQm6VO",
  bitly_url: "https://gph.is/2RQm6VO",
  embed_url: "https://giphy.com/embed/cAc3pileahilOk5qqh",
  username: "statefarm",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-10-16 01:25:33",
  trending_datetime: "2018-12-21 16:09:41",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/statefarm/zVLTgw0SaMMz.png",
  banner_url: "https://media0.giphy.com/headers/statefarm/7MQUT4wHMeV0.jpg",
  banner_image: "https://media0.giphy.com/headers/statefarm/7MQUT4wHMeV0.jpg",
  profile_url: "https://giphy.com/statefarm/",
  username: "statefarm",
  display_name: "State Farm",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200_s.gif",
  width: "356",
  height: "200",
  size: "40316"
  },
  original_still: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy_s.gif",
  width: "480",
  height: "270",
  size: "78758"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200w.gif",
  width: "200",
  height: "113",
  size: "448369",
  mp4: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200w.mp4",
  mp4_size: "29355",
  webp: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200w.webp",
  webp_size: "145070"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/100_s.gif",
  width: "178",
  height: "100",
  size: "11777"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200_d.gif",
  width: "356",
  height: "200",
  size: "251734",
  webp: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200_d.webp",
  webp_size: "45402"
  },
  preview: {
  width: "260",
  height: "146",
  mp4: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy-preview.mp4",
  mp4_size: "23109"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/100.gif",
  width: "178",
  height: "100",
  size: "382938",
  mp4: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/100.mp4",
  mp4_size: "27212",
  webp: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/100.webp",
  webp_size: "123012"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy-downsized_s.gif",
  width: "373",
  height: "210",
  size: "44716"
  },
  downsized: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy-downsized.gif",
  width: "373",
  height: "210",
  size: "1773824"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy.gif",
  width: "480",
  height: "270",
  size: "3261288"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/100w_s.gif",
  width: "100",
  height: "57",
  size: "4976"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy-preview.webp",
  width: "252",
  height: "142",
  size: "48564"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200w_s.gif",
  width: "200",
  height: "113",
  size: "13843"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/100w.gif",
  width: "100",
  height: "57",
  size: "113942",
  mp4: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/100w.mp4",
  mp4_size: "13220",
  webp: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/100w.webp",
  webp_size: "55988"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy-downsized-small.mp4",
  mp4_size: "170358"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200w_d.gif",
  width: "200",
  height: "113",
  size: "78932",
  webp: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200w_d.webp",
  webp_size: "21070"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy.gif",
  width: "480",
  height: "270",
  size: "3261288"
  },
  original: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy.gif",
  width: "480",
  height: "270",
  size: "3261288",
  frames: "49",
  mp4: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy.mp4",
  mp4_size: "96540",
  webp: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy.webp",
  webp_size: "513008",
  hash: "e598cd8c6ee74c6e0af070f421ce5ced"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200.gif",
  width: "356",
  height: "200",
  size: "1595998",
  mp4: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200.mp4",
  mp4_size: "66978",
  webp: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/200.webp",
  webp_size: "310908"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy-loop.mp4",
  mp4_size: "1733336"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy.mp4",
  mp4_size: "96540"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/cAc3pileahilOk5qqh/giphy-preview.gif",
  width: "137",
  height: "77",
  size: "42783"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/cAc3pileahilOk5qqh/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "what's up bro GIF by State Farm",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=cAc3pileahilOk5qqh&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=cAc3pileahilOk5qqh&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=cAc3pileahilOk5qqh&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "9w475hDWEPVlu",
  slug: "minions-illumination-entertainment-9w475hDWEPVlu",
  url: "https://giphy.com/gifs/minions-illumination-entertainment-9w475hDWEPVlu",
  bitly_gif_url: "https://gph.is/1Lbf4Ex",
  bitly_url: "https://gph.is/1Lbf4Ex",
  embed_url: "https://giphy.com/embed/9w475hDWEPVlu",
  username: "",
  source: "https://minionnation.tumblr.com/post/105658053247/everyone-loves-an-ugly-sweater-party",
  rating: "g",
  content_url: "",
  source_tld: "minionnation.tumblr.com",
  source_post_url: "https://minionnation.tumblr.com/post/105658053247/everyone-loves-an-ugly-sweater-party",
  is_sticker: 0,
  import_datetime: "2014-12-20 03:31:00",
  trending_datetime: "2018-12-21 19:00:01",
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/200_s.gif",
  width: "200",
  height: "200"
  },
  original_still: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy_s.gif",
  width: "540",
  height: "540"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/200w.gif",
  width: "200",
  height: "200",
  size: "326213",
  mp4: "https://media3.giphy.com/media/9w475hDWEPVlu/200w.mp4",
  mp4_size: "37539",
  webp: "https://media3.giphy.com/media/9w475hDWEPVlu/200w.webp",
  webp_size: "111410"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/100_s.gif",
  width: "100",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/200_d.gif",
  width: "200",
  height: "200",
  size: "178542",
  webp: "https://media3.giphy.com/media/9w475hDWEPVlu/200_d.webp",
  webp_size: "60888"
  },
  preview: {
  width: "154",
  height: "154",
  mp4: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy-preview.mp4",
  mp4_size: "48693"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/100.gif",
  width: "100",
  height: "100",
  size: "106108",
  mp4: "https://media3.giphy.com/media/9w475hDWEPVlu/100.mp4",
  mp4_size: "14159",
  webp: "https://media3.giphy.com/media/9w475hDWEPVlu/100.webp",
  webp_size: "38744"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy-downsized_s.gif",
  width: "540",
  height: "540",
  size: "141844"
  },
  downsized: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy-downsized.gif",
  width: "540",
  height: "540",
  size: "1505368"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy.gif",
  width: "540",
  height: "540",
  size: "1505368"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/100w_s.gif",
  width: "100",
  height: "100"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy-preview.webp",
  width: "142",
  height: "142",
  size: "49756"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/200w_s.gif",
  width: "200",
  height: "200"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/480w_s.jpg",
  width: "480",
  height: "480",
  size: "29859"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/100w.gif",
  width: "100",
  height: "100",
  size: "106108",
  mp4: "https://media3.giphy.com/media/9w475hDWEPVlu/100w.mp4",
  mp4_size: "14159",
  webp: "https://media3.giphy.com/media/9w475hDWEPVlu/100w.webp",
  webp_size: "38744"
  },
  downsized_small: {
  width: "486",
  height: "486",
  mp4: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy-downsized-small.mp4",
  mp4_size: "157198"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/200w_d.gif",
  width: "200",
  height: "200",
  size: "178542",
  webp: "https://media3.giphy.com/media/9w475hDWEPVlu/200w_d.webp",
  webp_size: "60888"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy.gif",
  width: "540",
  height: "540",
  size: "1505368"
  },
  original: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy.gif",
  width: "540",
  height: "540",
  size: "1505368",
  frames: "11",
  mp4: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy.mp4",
  mp4_size: "141400",
  webp: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy.webp",
  webp_size: "663084"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/200.gif",
  width: "200",
  height: "200",
  size: "326213",
  mp4: "https://media3.giphy.com/media/9w475hDWEPVlu/200.mp4",
  mp4_size: "37539",
  webp: "https://media3.giphy.com/media/9w475hDWEPVlu/200.webp",
  webp_size: "111410"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy-loop.mp4",
  mp4_size: "2402824"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy.mp4",
  mp4_size: "141400"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/9w475hDWEPVlu/giphy-preview.gif",
  width: "97",
  height: "97",
  size: "48769"
  }
  },
  title: "despicable me christmas GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=9w475hDWEPVlu&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=9w475hDWEPVlu&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=9w475hDWEPVlu&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "6c3ueEM2eN4fS",
  slug: "reaction-dog-christmas-6c3ueEM2eN4fS",
  url: "https://giphy.com/gifs/reaction-dog-christmas-6c3ueEM2eN4fS",
  bitly_gif_url: "https://gph.is/YZzgN6",
  bitly_url: "https://gph.is/YZzgN6",
  embed_url: "https://giphy.com/embed/6c3ueEM2eN4fS",
  username: "",
  source: "https://gifloop.tumblr.com/post/6570021956/this-fits-so-many-situations",
  rating: "g",
  content_url: "",
  source_tld: "gifloop.tumblr.com",
  source_post_url: "https://gifloop.tumblr.com/post/6570021956/this-fits-so-many-situations",
  is_sticker: 0,
  import_datetime: "2013-03-25 07:24:01",
  trending_datetime: "2018-12-20 16:49:23",
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200_s.gif",
  width: "300",
  height: "200"
  },
  original_still: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy_s.gif",
  width: "500",
  height: "333"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200w.gif",
  width: "200",
  height: "133",
  size: "65210",
  mp4: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200w.mp4",
  mp4_size: "25511",
  webp: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200w.webp",
  webp_size: "92280"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/100_s.gif",
  width: "150",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200_d.gif",
  width: "300",
  height: "200",
  size: "243027",
  webp: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200_d.webp",
  webp_size: "141646"
  },
  preview: {
  width: "220",
  height: "146",
  mp4: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy-preview.mp4",
  mp4_size: "29791"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/100.gif",
  width: "150",
  height: "100",
  size: "135138",
  mp4: "https://media3.giphy.com/media/6c3ueEM2eN4fS/100.mp4",
  mp4_size: "86714",
  webp: "https://media3.giphy.com/media/6c3ueEM2eN4fS/100.webp",
  webp_size: "48442"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy-downsized_s.gif",
  width: "500",
  height: "333",
  size: "49708"
  },
  downsized: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy-downsized.gif",
  width: "500",
  height: "333",
  size: "473854"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy.gif",
  width: "500",
  height: "333",
  size: "473854"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/100w_s.gif",
  width: "100",
  height: "67"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy-preview.webp",
  width: "150",
  height: "100",
  size: "45324"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200w_s.gif",
  width: "200",
  height: "133"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/100w.gif",
  width: "100",
  height: "67",
  size: "65210",
  mp4: "https://media3.giphy.com/media/6c3ueEM2eN4fS/100w.mp4",
  mp4_size: "45944",
  webp: "https://media3.giphy.com/media/6c3ueEM2eN4fS/100w.webp",
  webp_size: "25314"
  },
  downsized_small: {
  width: "439",
  height: "292",
  mp4: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy-downsized-small.mp4",
  mp4_size: "136586"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200w_d.gif",
  width: "200",
  height: "133",
  size: "130694",
  webp: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200w_d.webp",
  webp_size: "55742"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy.gif",
  width: "500",
  height: "333",
  size: "473854"
  },
  original: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy.gif",
  width: "500",
  height: "333",
  size: "473854",
  frames: "10",
  mp4: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy.mp4",
  mp4_size: "154390",
  webp: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy.webp",
  webp_size: "718870"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200.gif",
  width: "300",
  height: "200",
  size: "135138",
  mp4: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200.mp4",
  mp4_size: "26704",
  webp: "https://media3.giphy.com/media/6c3ueEM2eN4fS/200.webp",
  webp_size: "236382"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy-loop.mp4",
  mp4_size: "5833438"
  },
  original_mp4: {
  width: "480",
  height: "318",
  mp4: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy.mp4",
  mp4_size: "154390"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/6c3ueEM2eN4fS/giphy-preview.gif",
  width: "147",
  height: "98",
  size: "47828"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/6c3ueEM2eN4fS/480w_s.jpg",
  width: "480",
  height: "320"
  }
  },
  title: "no one cares GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=6c3ueEM2eN4fS&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=6c3ueEM2eN4fS&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=6c3ueEM2eN4fS&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "cO8S0SmVb4zQa2IxBG",
  slug: "nba-expression-james-harden-cO8S0SmVb4zQa2IxBG",
  url: "https://giphy.com/gifs/nba-expression-james-harden-cO8S0SmVb4zQa2IxBG",
  bitly_gif_url: "https://gph.is/2BwIHPP",
  bitly_url: "https://gph.is/2BwIHPP",
  embed_url: "https://giphy.com/embed/cO8S0SmVb4zQa2IxBG",
  username: "nba",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-12-21 01:16:49",
  trending_datetime: "2018-12-21 18:37:48",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/nba/GPeEGlo2uy2Z.jpg",
  banner_url: "https://media4.giphy.com/headers/nba/xyCOK3dpBrOH.gif",
  banner_image: "https://media4.giphy.com/headers/nba/xyCOK3dpBrOH.gif",
  profile_url: "https://giphy.com/nba/",
  username: "nba",
  display_name: "NBA",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200_s.gif",
  width: "355",
  height: "200",
  size: "49498"
  },
  original_still: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy_s.gif",
  width: "300",
  height: "169",
  size: "35734"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200w.gif",
  width: "200",
  height: "113",
  size: "888702",
  mp4: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200w.mp4",
  mp4_size: "62811",
  webp: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200w.webp",
  webp_size: "200860"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/100_s.gif",
  width: "178",
  height: "100",
  size: "16175"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200_d.gif",
  width: "355",
  height: "200",
  size: "307831",
  webp: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200_d.webp",
  webp_size: "53546"
  },
  preview: {
  width: "300",
  height: "168",
  mp4: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy-preview.mp4",
  mp4_size: "43176"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/100.gif",
  width: "178",
  height: "100",
  size: "731157",
  mp4: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/100.mp4",
  mp4_size: "60906",
  webp: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/100.webp",
  webp_size: "174554"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy-downsized_s.gif",
  width: "300",
  height: "169",
  size: "35734"
  },
  downsized: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy.gif",
  width: "300",
  height: "169",
  size: "1657216"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy.gif",
  width: "300",
  height: "169",
  size: "1657216"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/100w_s.gif",
  width: "100",
  height: "57",
  size: "6488"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy-preview.webp",
  width: "224",
  height: "126",
  size: "47544"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200w_s.gif",
  width: "200",
  height: "113",
  size: "19439"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/100w.gif",
  width: "100",
  height: "57",
  size: "271256",
  mp4: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/100w.mp4",
  mp4_size: "31039",
  webp: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/100w.webp",
  webp_size: "86198"
  },
  downsized_small: {
  width: "300",
  height: "168",
  mp4: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy-downsized-small.mp4",
  mp4_size: "136377"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200w_d.gif",
  width: "200",
  height: "113",
  size: "117822",
  webp: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200w_d.webp",
  webp_size: "26538"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy.gif",
  width: "300",
  height: "169",
  size: "1657216"
  },
  original: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy.gif",
  width: "300",
  height: "169",
  size: "1657216",
  frames: "46",
  mp4: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy.mp4",
  mp4_size: "268171",
  webp: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy.webp",
  webp_size: "320486",
  hash: "5a72a5430591c07d21ee2fcbfe9feb37"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200.gif",
  width: "355",
  height: "200",
  size: "2326429",
  mp4: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200.mp4",
  mp4_size: "150820",
  webp: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/200.webp",
  webp_size: "409618"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy-loop.mp4",
  mp4_size: "1060457"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy.mp4",
  mp4_size: "268171"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/giphy-preview.gif",
  width: "96",
  height: "54",
  size: "49724"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/cO8S0SmVb4zQa2IxBG/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "james harden basketball GIF by NBA",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=cO8S0SmVb4zQa2IxBG&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=cO8S0SmVb4zQa2IxBG&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=cO8S0SmVb4zQa2IxBG&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "KDH9hJ2mSEUYU",
  slug: "santa-christmas-wave-KDH9hJ2mSEUYU",
  url: "https://giphy.com/gifs/santa-christmas-wave-KDH9hJ2mSEUYU",
  bitly_gif_url: "https://gph.is/1gEQ5df",
  bitly_url: "https://gph.is/1gEQ5df",
  embed_url: "https://giphy.com/embed/KDH9hJ2mSEUYU",
  username: "",
  source: "https://www.reactiongifs.com/santa-waving/?utm_source=rss&utm_medium=rss&utm_campaign=santa-waving",
  rating: "g",
  content_url: "",
  source_tld: "www.reactiongifs.com",
  source_post_url: "https://www.reactiongifs.com/santa-waving/?utm_source=rss&utm_medium=rss&utm_campaign=santa-waving",
  is_sticker: 0,
  import_datetime: "2013-12-18 01:51:26",
  trending_datetime: "2018-12-21 18:30:01",
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200_s.gif",
  width: "267",
  height: "200"
  },
  original_still: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy_s.gif",
  width: "500",
  height: "375"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200w.gif",
  width: "200",
  height: "150",
  size: "46192",
  mp4: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200w.mp4",
  mp4_size: "14237",
  webp: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200w.webp",
  webp_size: "40656"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/100_s.gif",
  width: "133",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200_d.gif",
  width: "267",
  height: "200",
  size: "191729",
  webp: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200_d.webp",
  webp_size: "61008"
  },
  preview: {
  width: "450",
  height: "336",
  mp4: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy-preview.mp4",
  mp4_size: "45171"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/100.gif",
  width: "133",
  height: "100",
  size: "67387",
  mp4: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/100.mp4",
  mp4_size: "41718",
  webp: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/100.webp",
  webp_size: "20804"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy-downsized_s.gif",
  width: "500",
  height: "375",
  size: "67874"
  },
  downsized: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy-downsized.gif",
  width: "500",
  height: "375",
  size: "426670"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy.gif",
  width: "500",
  height: "375",
  size: "426670"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/100w_s.gif",
  width: "100",
  height: "75"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy-preview.webp",
  width: "252",
  height: "189",
  size: "48546"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200w_s.gif",
  width: "200",
  height: "150"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/480w_s.jpg",
  width: "480",
  height: "360",
  size: "18061"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/100w.gif",
  width: "100",
  height: "75",
  size: "46192",
  mp4: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/100w.mp4",
  mp4_size: "29881",
  webp: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/100w.webp",
  webp_size: "13744"
  },
  downsized_small: {
  width: "500",
  height: "374",
  mp4: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy-downsized-small.mp4",
  mp4_size: "61700"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200w_d.gif",
  width: "200",
  height: "150",
  size: "121179",
  webp: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200w_d.webp",
  webp_size: "40656"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy.gif",
  width: "500",
  height: "375",
  size: "426670"
  },
  original: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy.gif",
  width: "500",
  height: "375",
  size: "426670",
  frames: "6",
  mp4: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy.mp4",
  mp4_size: "43981",
  webp: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy.webp",
  webp_size: "150414"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200.gif",
  width: "267",
  height: "200",
  size: "67387",
  mp4: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200.mp4",
  mp4_size: "13773",
  webp: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/200.webp",
  webp_size: "61008"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy-loop.mp4",
  mp4_size: "4162083"
  },
  original_mp4: {
  width: "480",
  height: "360",
  mp4: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy.mp4",
  mp4_size: "43981"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/KDH9hJ2mSEUYU/giphy-preview.gif",
  width: "153",
  height: "115",
  size: "47835"
  }
  },
  title: "santa claus christmas GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=KDH9hJ2mSEUYU&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=KDH9hJ2mSEUYU&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=KDH9hJ2mSEUYU&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "8wz2omZEbVzSU",
  slug: "8wz2omZEbVzSU",
  url: "https://giphy.com/gifs/8wz2omZEbVzSU",
  bitly_gif_url: "https://gph.is/1Asm0DS",
  bitly_url: "https://gph.is/1Asm0DS",
  embed_url: "https://giphy.com/embed/8wz2omZEbVzSU",
  username: "",
  source: "https://reddit.com/r/reactiongifs/comments/2p1vs6/mrw_christmas_break_starts/",
  rating: "pg",
  content_url: "",
  source_tld: "reddit.com",
  source_post_url: "https://reddit.com/r/reactiongifs/comments/2p1vs6/mrw_christmas_break_starts/",
  is_sticker: 0,
  import_datetime: "2014-12-12 05:16:08",
  trending_datetime: "2018-12-21 18:15:02",
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/200_s.gif",
  width: "350",
  height: "200"
  },
  original_still: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy_s.gif",
  width: "245",
  height: "140"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/200w.gif",
  width: "200",
  height: "114",
  size: "813330",
  mp4: "https://media0.giphy.com/media/8wz2omZEbVzSU/200w.mp4",
  mp4_size: "112224",
  webp: "https://media0.giphy.com/media/8wz2omZEbVzSU/200w.webp",
  webp_size: "472472"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/100_s.gif",
  width: "175",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/200_d.gif",
  width: "350",
  height: "200",
  size: "326561",
  webp: "https://media0.giphy.com/media/8wz2omZEbVzSU/200_d.webp",
  webp_size: "170438"
  },
  preview: {
  width: "150",
  height: "86",
  mp4: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy-preview.mp4",
  mp4_size: "45706"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/100.gif",
  width: "175",
  height: "100",
  size: "637541",
  mp4: "https://media0.giphy.com/media/8wz2omZEbVzSU/100.mp4",
  mp4_size: "46225",
  webp: "https://media0.giphy.com/media/8wz2omZEbVzSU/100.webp",
  webp_size: "372118"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy-downsized_s.gif",
  width: "245",
  height: "140",
  size: "31428"
  },
  downsized: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy-downsized.gif",
  width: "245",
  height: "140",
  size: "1266730"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy.gif",
  width: "245",
  height: "140",
  size: "1266730"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/100w_s.gif",
  width: "100",
  height: "57"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy-preview.webp",
  width: "119",
  height: "68",
  size: "47416"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/200w_s.gif",
  width: "200",
  height: "114"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/100w.gif",
  width: "100",
  height: "57",
  size: "222344",
  mp4: "https://media0.giphy.com/media/8wz2omZEbVzSU/100w.mp4",
  mp4_size: "35449",
  webp: "https://media0.giphy.com/media/8wz2omZEbVzSU/100w.webp",
  webp_size: "147164"
  },
  downsized_small: {
  width: "216",
  height: "124",
  mp4: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy-downsized-small.mp4",
  mp4_size: "139175"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/200w_d.gif",
  width: "200",
  height: "114",
  size: "114748",
  webp: "https://media0.giphy.com/media/8wz2omZEbVzSU/200w_d.webp",
  webp_size: "64222"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy.gif",
  width: "245",
  height: "140",
  size: "1266730"
  },
  original: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy.gif",
  width: "245",
  height: "140",
  size: "1266730",
  frames: "45",
  mp4: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy.mp4",
  mp4_size: "504480",
  webp: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy.webp",
  webp_size: "718658"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/200.gif",
  width: "350",
  height: "200",
  size: "2322444",
  mp4: "https://media0.giphy.com/media/8wz2omZEbVzSU/200.mp4",
  mp4_size: "249227",
  webp: "https://media0.giphy.com/media/8wz2omZEbVzSU/200.webp",
  webp_size: "1268746"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy-loop.mp4",
  mp4_size: "2645580"
  },
  original_mp4: {
  width: "480",
  height: "274",
  mp4: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy.mp4",
  mp4_size: "504480"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/8wz2omZEbVzSU/giphy-preview.gif",
  width: "100",
  height: "57",
  size: "47055"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/8wz2omZEbVzSU/480w_s.jpg",
  width: "480",
  height: "274"
  }
  },
  title: "saturday night live christmas GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=8wz2omZEbVzSU&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=8wz2omZEbVzSU&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=8wz2omZEbVzSU&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "63D094RLUNExa",
  slug: "disney-animation-disney-dog-63D094RLUNExa",
  url: "https://giphy.com/gifs/disney-animation-disney-dog-63D094RLUNExa",
  bitly_gif_url: "https://gph.is/1mTWkZc",
  bitly_url: "https://gph.is/1mTWkZc",
  embed_url: "https://giphy.com/embed/63D094RLUNExa",
  username: "disney",
  source: "https://disney.tumblr.com/post/38735059793/disney-fact-the-gift-of-a-puppy-in-a-hatbox-from",
  rating: "g",
  content_url: "",
  source_tld: "disney.tumblr.com",
  source_post_url: "https://disney.tumblr.com/post/38735059793/disney-fact-the-gift-of-a-puppy-in-a-hatbox-from",
  is_sticker: 0,
  import_datetime: "2012-12-24 19:41:53",
  trending_datetime: "2018-12-21 18:00:02",
  user: {
  avatar_url: "https://media3.giphy.com/avatars/disney/aRixQQBo0bS2.jpg",
  banner_url: "https://media3.giphy.com/avatars/disney/pY6NEkJK7S2F.png",
  banner_image: "https://media3.giphy.com/avatars/disney/pY6NEkJK7S2F.png",
  profile_url: "https://giphy.com/disney/",
  username: "disney",
  display_name: "Disney",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/200_s.gif",
  width: "355",
  height: "200"
  },
  original_still: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/giphy_s.gif",
  width: "438",
  height: "247"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/200w.gif",
  width: "200",
  height: "113",
  size: "205730",
  mp4: "https://media1.giphy.com/media/63D094RLUNExa/200w.mp4",
  mp4_size: "44748",
  webp: "https://media1.giphy.com/media/63D094RLUNExa/200w.webp",
  webp_size: "136668"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/100_s.gif",
  width: "177",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/200_d.gif",
  width: "355",
  height: "200",
  size: "161469",
  webp: "https://media1.giphy.com/media/63D094RLUNExa/200_d.webp",
  webp_size: "68992"
  },
  preview: {
  width: "216",
  height: "120",
  mp4: "https://media1.giphy.com/media/63D094RLUNExa/giphy-preview.mp4",
  mp4_size: "37896"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/100.gif",
  width: "177",
  height: "100",
  size: "170470",
  mp4: "https://media1.giphy.com/media/63D094RLUNExa/100.mp4",
  mp4_size: "38519",
  webp: "https://media1.giphy.com/media/63D094RLUNExa/100.webp",
  webp_size: "115692"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/giphy-downsized_s.gif",
  width: "438",
  height: "247",
  size: "47844"
  },
  downsized: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/giphy-downsized.gif",
  width: "438",
  height: "247",
  size: "953970"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/giphy.gif",
  width: "438",
  height: "247",
  size: "953970"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/100w_s.gif",
  width: "100",
  height: "56"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/giphy-preview.webp",
  width: "261",
  height: "147",
  size: "49492"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/200w_s.gif",
  width: "200",
  height: "113"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/63D094RLUNExa/480w_s.jpg",
  width: "479",
  height: "270",
  size: "18124"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/100w.gif",
  width: "100",
  height: "56",
  size: "66036",
  mp4: "https://media1.giphy.com/media/63D094RLUNExa/100w.mp4",
  mp4_size: "18940",
  webp: "https://media1.giphy.com/media/63D094RLUNExa/100w.webp",
  webp_size: "51142"
  },
  downsized_small: {
  width: "438",
  height: "246",
  mp4: "https://media1.giphy.com/media/63D094RLUNExa/giphy-downsized-small.mp4",
  mp4_size: "163298"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/200w_d.gif",
  width: "200",
  height: "113",
  size: "63835",
  webp: "https://media1.giphy.com/media/63D094RLUNExa/200w_d.webp",
  webp_size: "32756"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/giphy.gif",
  width: "438",
  height: "247",
  size: "953970"
  },
  original: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/giphy.gif",
  width: "438",
  height: "247",
  size: "953970",
  frames: "26",
  mp4: "https://media1.giphy.com/media/63D094RLUNExa/giphy.mp4",
  mp4_size: "154546",
  webp: "https://media1.giphy.com/media/63D094RLUNExa/giphy.webp",
  webp_size: "388870"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/200.gif",
  width: "355",
  height: "200",
  size: "525614",
  mp4: "https://media1.giphy.com/media/63D094RLUNExa/200.mp4",
  mp4_size: "97384",
  webp: "https://media1.giphy.com/media/63D094RLUNExa/200.webp",
  webp_size: "281858"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/63D094RLUNExa/giphy-loop.mp4",
  mp4_size: "589494"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/63D094RLUNExa/giphy.mp4",
  mp4_size: "154546"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/63D094RLUNExa/giphy-preview.gif",
  width: "184",
  height: "104",
  size: "47984"
  }
  },
  title: "present lady and the tramp GIF by Disney",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=63D094RLUNExa&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=63D094RLUNExa&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=63D094RLUNExa&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xTk9ZLRMhW9wrSUf4c",
  slug: "christmas-xmas-santa-claus-xTk9ZLRMhW9wrSUf4c",
  url: "https://giphy.com/gifs/christmas-xmas-santa-claus-xTk9ZLRMhW9wrSUf4c",
  bitly_gif_url: "https://gph.is/1QFmYZu",
  bitly_url: "https://gph.is/1QFmYZu",
  embed_url: "https://giphy.com/embed/xTk9ZLRMhW9wrSUf4c",
  username: "maurogatti",
  source: "",
  rating: "pg",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2015-12-21 14:47:04",
  trending_datetime: "2018-12-21 17:45:01",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/maurogatti/bzDFvknmPp4f.gif",
  banner_url: "https://media2.giphy.com/headers/maurogatti/ndU2T7jFw3BP.gif",
  banner_image: "https://media2.giphy.com/headers/maurogatti/ndU2T7jFw3BP.gif",
  profile_url: "https://giphy.com/maurogatti/",
  username: "maurogatti",
  display_name: "Mauro Gatti",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200_s.gif",
  width: "200",
  height: "200"
  },
  original_still: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy_s.gif",
  width: "500",
  height: "500"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200w.gif",
  width: "200",
  height: "200",
  size: "101349",
  mp4: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200w.mp4",
  mp4_size: "32732",
  webp: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200w.webp",
  webp_size: "113418"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/100_s.gif",
  width: "100",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200_d.gif",
  width: "200",
  height: "200",
  size: "30681",
  webp: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200_d.webp",
  webp_size: "32160"
  },
  preview: {
  width: "362",
  height: "362",
  mp4: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy-preview.mp4",
  mp4_size: "37172"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/100.gif",
  width: "100",
  height: "100",
  size: "40471",
  mp4: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/100.mp4",
  mp4_size: "15258",
  webp: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/100.webp",
  webp_size: "52766"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy-downsized_s.gif",
  width: "500",
  height: "500",
  size: "24089"
  },
  downsized: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy-downsized.gif",
  width: "500",
  height: "500",
  size: "378961"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy.gif",
  width: "500",
  height: "500",
  size: "378961"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/100w_s.gif",
  width: "100",
  height: "100"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy-preview.webp",
  width: "223",
  height: "223",
  size: "48952"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200w_s.gif",
  width: "200",
  height: "200"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/480w_s.jpg",
  width: "480",
  height: "480",
  size: "18669"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/100w.gif",
  width: "100",
  height: "100",
  size: "40471",
  mp4: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/100w.mp4",
  mp4_size: "15258",
  webp: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/100w.webp",
  webp_size: "52766"
  },
  downsized_small: {
  width: "500",
  height: "500",
  mp4: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy-downsized-small.mp4",
  mp4_size: "94714"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200w_d.gif",
  width: "200",
  height: "200",
  size: "30681",
  webp: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200w_d.webp",
  webp_size: "32160"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy.gif",
  width: "500",
  height: "500",
  size: "378961"
  },
  original: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy.gif",
  width: "500",
  height: "500",
  size: "378961",
  frames: "27",
  mp4: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy.mp4",
  mp4_size: "85123",
  webp: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy.webp",
  webp_size: "325896"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200.gif",
  width: "200",
  height: "200",
  size: "101349",
  mp4: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200.mp4",
  mp4_size: "32732",
  webp: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/200.webp",
  webp_size: "113418"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy-loop.mp4",
  mp4_size: "1119937"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy.mp4",
  mp4_size: "85123"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/xTk9ZLRMhW9wrSUf4c/giphy-preview.gif",
  width: "192",
  height: "192",
  size: "49165"
  }
  },
  title: "santa claus christmas GIF by Mauro Gatti",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xTk9ZLRMhW9wrSUf4c&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xTk9ZLRMhW9wrSUf4c&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xTk9ZLRMhW9wrSUf4c&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l41YaWrBaLybnkQbm",
  slug: "christmas-santa-squeeze-l41YaWrBaLybnkQbm",
  url: "https://giphy.com/gifs/christmas-santa-squeeze-l41YaWrBaLybnkQbm",
  bitly_gif_url: "https://gph.is/1tdG0fW",
  bitly_url: "https://gph.is/1tdG0fW",
  embed_url: "https://giphy.com/embed/l41YaWrBaLybnkQbm",
  username: "mochimochiland",
  source: "https://www.mochimochiland.com/blogimages/santachimneyxmas.gif",
  rating: "g",
  content_url: "",
  source_tld: "www.mochimochiland.com",
  source_post_url: "https://www.mochimochiland.com/blogimages/santachimneyxmas.gif",
  is_sticker: 0,
  import_datetime: "2016-06-09 17:05:47",
  trending_datetime: "2018-12-20 16:49:23",
  user: {
  avatar_url: "https://media3.giphy.com/avatars/mochimochiland/jGFHn640qqEt.gif",
  banner_url: "https://media3.giphy.com/headers/mochimochiland/BLyv0LlJy14h.jpg",
  banner_image: "https://media3.giphy.com/headers/mochimochiland/BLyv0LlJy14h.jpg",
  profile_url: "https://giphy.com/mochimochiland/",
  username: "mochimochiland",
  display_name: "Mochimochiland",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200_s.gif",
  width: "271",
  height: "200"
  },
  original_still: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy_s.gif",
  width: "600",
  height: "443"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200w.gif",
  width: "200",
  height: "148",
  size: "269661",
  mp4: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200w.mp4",
  mp4_size: "35358",
  webp: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200w.webp",
  webp_size: "227008"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/100_s.gif",
  width: "135",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200_d.gif",
  width: "271",
  height: "200",
  size: "178843",
  webp: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200_d.webp",
  webp_size: "126936"
  },
  preview: {
  width: "188",
  height: "138",
  mp4: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy-preview.mp4",
  mp4_size: "33232"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/100.gif",
  width: "135",
  height: "100",
  size: "122639",
  mp4: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/100.mp4",
  mp4_size: "17545",
  webp: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/100.webp",
  webp_size: "99040"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy-downsized_s.gif",
  width: "500",
  height: "369",
  size: "107857"
  },
  downsized: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy-downsized.gif",
  width: "500",
  height: "369",
  size: "1704638"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy.gif",
  width: "600",
  height: "443",
  size: "2405233"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/100w_s.gif",
  width: "100",
  height: "74"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy-preview.webp",
  width: "177",
  height: "131",
  size: "47852"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200w_s.gif",
  width: "200",
  height: "148"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/480w_s.jpg",
  width: "479",
  height: "354",
  size: "34855"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/100w.gif",
  width: "100",
  height: "74",
  size: "69373",
  mp4: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/100w.mp4",
  mp4_size: "10884",
  webp: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/100w.webp",
  webp_size: "56550"
  },
  downsized_small: {
  width: "450",
  height: "332",
  mp4: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy-downsized-small.mp4",
  mp4_size: "168510"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200w_d.gif",
  width: "200",
  height: "148",
  size: "96956",
  webp: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200w_d.webp",
  webp_size: "74086"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy.gif",
  width: "600",
  height: "443",
  size: "2405233"
  },
  original: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy.gif",
  width: "600",
  height: "443",
  size: "2405233",
  frames: "18",
  mp4: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy.mp4",
  mp4_size: "153969",
  webp: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy.webp",
  webp_size: "1480634"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200.gif",
  width: "271",
  height: "200",
  size: "496680",
  mp4: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200.mp4",
  mp4_size: "62024",
  webp: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/200.webp",
  webp_size: "384520"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy-loop.mp4",
  mp4_size: "871345"
  },
  original_mp4: {
  width: "480",
  height: "354",
  mp4: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy.mp4",
  mp4_size: "153969"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/l41YaWrBaLybnkQbm/giphy-preview.gif",
  width: "163",
  height: "120",
  size: "45871"
  }
  },
  title: "stop-motion christmas GIF by Mochimochiland",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l41YaWrBaLybnkQbm&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l41YaWrBaLybnkQbm&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l41YaWrBaLybnkQbm&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "agYXQwSl5gGje",
  slug: "retrofunk-christmas-afv-snowman-agYXQwSl5gGje",
  url: "https://giphy.com/gifs/retrofunk-christmas-afv-snowman-agYXQwSl5gGje",
  bitly_gif_url: "https://gph.is/1GwpAQj",
  bitly_url: "https://gph.is/1GwpAQj",
  embed_url: "https://giphy.com/embed/agYXQwSl5gGje",
  username: "retrofunk",
  source: "afv.com",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "afv.com",
  is_sticker: 0,
  import_datetime: "2015-10-07 17:58:16",
  trending_datetime: "2018-12-21 17:15:01",
  user: {
  avatar_url: "https://media3.giphy.com/avatars/retrofunk/ssNUMZsbJX0A.jpg",
  banner_url: "https://media3.giphy.com/headers/retrofunk/zmgMcycBS0Ca.jpg",
  banner_image: "https://media3.giphy.com/headers/retrofunk/zmgMcycBS0Ca.jpg",
  profile_url: "https://giphy.com/retrofunk/",
  username: "retrofunk",
  display_name: "RETROFUNK",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/200_s.gif",
  width: "300",
  height: "200"
  },
  original_still: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy_s.gif",
  width: "480",
  height: "320"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/200w.gif",
  width: "200",
  height: "133",
  size: "944935",
  mp4: "https://media0.giphy.com/media/agYXQwSl5gGje/200w.mp4",
  mp4_size: "127126",
  webp: "https://media0.giphy.com/media/agYXQwSl5gGje/200w.webp",
  webp_size: "399006"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/100_s.gif",
  width: "150",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/200_d.gif",
  width: "300",
  height: "200",
  size: "163327",
  webp: "https://media0.giphy.com/media/agYXQwSl5gGje/200_d.webp",
  webp_size: "58810"
  },
  preview: {
  width: "272",
  height: "180",
  mp4: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy-preview.mp4",
  mp4_size: "38594"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/100.gif",
  width: "150",
  height: "100",
  size: "592352",
  mp4: "https://media0.giphy.com/media/agYXQwSl5gGje/100.mp4",
  mp4_size: "81599",
  webp: "https://media0.giphy.com/media/agYXQwSl5gGje/100.webp",
  webp_size: "269150"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy-downsized_s.gif",
  width: "250",
  height: "166",
  size: "15794"
  },
  downsized: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy-downsized.gif",
  width: "250",
  height: "166",
  size: "1162263"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy.gif",
  width: "480",
  height: "320",
  size: "4885312"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/100w_s.gif",
  width: "100",
  height: "67"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy-preview.webp",
  width: "240",
  height: "160",
  size: "48338"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/200w_s.gif",
  width: "200",
  height: "133"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/480w_s.jpg",
  width: "480",
  height: "320",
  size: "13545"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/100w.gif",
  width: "100",
  height: "67",
  size: "293791",
  mp4: "https://media0.giphy.com/media/agYXQwSl5gGje/100w.mp4",
  mp4_size: "45988",
  webp: "https://media0.giphy.com/media/agYXQwSl5gGje/100w.webp",
  webp_size: "151532"
  },
  downsized_small: {
  width: "150",
  height: "100",
  mp4: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy-downsized-small.mp4",
  mp4_size: "187884"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/200w_d.gif",
  width: "200",
  height: "133",
  size: "78970",
  webp: "https://media0.giphy.com/media/agYXQwSl5gGje/200w_d.webp",
  webp_size: "33190"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy.gif",
  width: "480",
  height: "320",
  size: "4885312"
  },
  original: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy.gif",
  width: "480",
  height: "320",
  size: "4885312",
  frames: "68",
  mp4: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy.mp4",
  mp4_size: "526367",
  webp: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy.webp",
  webp_size: "1494076"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/200.gif",
  width: "300",
  height: "200",
  size: "1954813",
  mp4: "https://media0.giphy.com/media/agYXQwSl5gGje/200.mp4",
  mp4_size: "218294",
  webp: "https://media0.giphy.com/media/agYXQwSl5gGje/200.webp",
  webp_size: "704222"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy-loop.mp4",
  mp4_size: "1684100"
  },
  original_mp4: {
  width: "480",
  height: "320",
  mp4: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy.mp4",
  mp4_size: "526367"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/agYXQwSl5gGje/giphy-preview.gif",
  width: "146",
  height: "97",
  size: "48836"
  }
  },
  title: "christmas oops GIF by RETROFUNK",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=agYXQwSl5gGje&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=agYXQwSl5gGje&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=agYXQwSl5gGje&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "VKwspRV2pafJu",
  slug: "animation-television-dancing-VKwspRV2pafJu",
  url: "https://giphy.com/gifs/animation-television-dancing-VKwspRV2pafJu",
  bitly_gif_url: "https://gph.is/22ZaUFi",
  bitly_url: "https://gph.is/22ZaUFi",
  embed_url: "https://giphy.com/embed/VKwspRV2pafJu",
  username: "",
  source: "https://randar.com/post/134518878719/its-christmastime-again-charlie-brown-1992",
  rating: "g",
  content_url: "",
  source_tld: "randar.com",
  source_post_url: "https://randar.com/post/134518878719/its-christmastime-again-charlie-brown-1992",
  is_sticker: 0,
  import_datetime: "2016-06-10 21:23:55",
  trending_datetime: "2018-12-20 16:49:23",
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/200_s.gif",
  width: "186",
  height: "200"
  },
  original_still: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy_s.gif",
  width: "500",
  height: "538"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/200w.gif",
  width: "200",
  height: "215",
  size: "252748",
  mp4: "https://media1.giphy.com/media/VKwspRV2pafJu/200w.mp4",
  mp4_size: "33041",
  webp: "https://media1.giphy.com/media/VKwspRV2pafJu/200w.webp",
  webp_size: "186584"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/100_s.gif",
  width: "93",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/200_d.gif",
  width: "186",
  height: "200",
  size: "79453",
  webp: "https://media1.giphy.com/media/VKwspRV2pafJu/200_d.webp",
  webp_size: "55306"
  },
  preview: {
  width: "212",
  height: "230",
  mp4: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy-preview.mp4",
  mp4_size: "33968"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/100.gif",
  width: "93",
  height: "100",
  size: "59642",
  mp4: "https://media1.giphy.com/media/VKwspRV2pafJu/100.mp4",
  mp4_size: "10997",
  webp: "https://media1.giphy.com/media/VKwspRV2pafJu/100.webp",
  webp_size: "55928"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy-downsized_s.gif",
  width: "500",
  height: "538",
  size: "100338"
  },
  downsized: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy-downsized.gif",
  width: "500",
  height: "538",
  size: "1861039"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy.gif",
  width: "500",
  height: "538",
  size: "1861039"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/100w_s.gif",
  width: "100",
  height: "108"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy-preview.webp",
  width: "131",
  height: "141",
  size: "49506"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/200w_s.gif",
  width: "200",
  height: "215"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/100w.gif",
  width: "100",
  height: "108",
  size: "68400",
  mp4: "https://media1.giphy.com/media/VKwspRV2pafJu/100w.mp4",
  mp4_size: "12515",
  webp: "https://media1.giphy.com/media/VKwspRV2pafJu/100w.webp",
  webp_size: "62984"
  },
  downsized_small: {
  width: "427",
  height: "460",
  mp4: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy-downsized-small.mp4",
  mp4_size: "123645"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/200w_d.gif",
  width: "200",
  height: "215",
  size: "91409",
  webp: "https://media1.giphy.com/media/VKwspRV2pafJu/200w_d.webp",
  webp_size: "61940"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy.gif",
  width: "500",
  height: "538",
  size: "1861039"
  },
  original: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy.gif",
  width: "500",
  height: "538",
  size: "1861039",
  frames: "18",
  mp4: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy.mp4",
  mp4_size: "153881",
  webp: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy.webp",
  webp_size: "868224"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/200.gif",
  width: "186",
  height: "200",
  size: "218278",
  mp4: "https://media1.giphy.com/media/VKwspRV2pafJu/200.mp4",
  mp4_size: "29247",
  webp: "https://media1.giphy.com/media/VKwspRV2pafJu/200.webp",
  webp_size: "166418"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy-loop.mp4",
  mp4_size: "1090757"
  },
  original_mp4: {
  width: "480",
  height: "516",
  mp4: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy.mp4",
  mp4_size: "153881"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/VKwspRV2pafJu/giphy-preview.gif",
  width: "114",
  height: "123",
  size: "44161"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/VKwspRV2pafJu/480w_s.jpg",
  width: "480",
  height: "516"
  }
  },
  title: "charlie brown dancing GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=VKwspRV2pafJu&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=VKwspRV2pafJu&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=VKwspRV2pafJu&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "wranrCRq3f90A",
  slug: "christmas-the-office-michael-scott-wranrCRq3f90A",
  url: "https://giphy.com/gifs/christmas-the-office-michael-scott-wranrCRq3f90A",
  bitly_gif_url: "https://gph.is/1cC3v6N",
  bitly_url: "https://gph.is/1cC3v6N",
  embed_url: "https://giphy.com/embed/wranrCRq3f90A",
  username: "",
  source: "https://jacks-sense-of-humor.tumblr.com/post/70868930692/when-im-explaining-the-downside-to-gift-giving",
  rating: "g",
  content_url: "",
  source_tld: "jacks-sense-of-humor.tumblr.com",
  source_post_url: "https://jacks-sense-of-humor.tumblr.com/post/70868930692/when-im-explaining-the-downside-to-gift-giving",
  is_sticker: 0,
  import_datetime: "2013-12-30 14:19:43",
  trending_datetime: "2018-12-21 16:45:01",
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/200_s.gif",
  width: "356",
  height: "200"
  },
  original_still: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/giphy_s.gif",
  width: "500",
  height: "281"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/200w.gif",
  width: "200",
  height: "112",
  size: "68864",
  mp4: "https://media1.giphy.com/media/wranrCRq3f90A/200w.mp4",
  mp4_size: "20170",
  webp: "https://media1.giphy.com/media/wranrCRq3f90A/200w.webp",
  webp_size: "139690"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/100_s.gif",
  width: "178",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/200_d.gif",
  width: "356",
  height: "200",
  size: "385729",
  webp: "https://media1.giphy.com/media/wranrCRq3f90A/200_d.webp",
  webp_size: "155620"
  },
  preview: {
  width: "290",
  height: "162",
  mp4: "https://media1.giphy.com/media/wranrCRq3f90A/giphy-preview.mp4",
  mp4_size: "27147"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/100.gif",
  width: "178",
  height: "100",
  size: "189827",
  mp4: "https://media1.giphy.com/media/wranrCRq3f90A/100.mp4",
  mp4_size: "79877",
  webp: "https://media1.giphy.com/media/wranrCRq3f90A/100.webp",
  webp_size: "92498"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/giphy-downsized_s.gif",
  width: "500",
  height: "281",
  size: "64675"
  },
  downsized: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/giphy-downsized.gif",
  width: "500",
  height: "281",
  size: "651933"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/giphy.gif",
  width: "500",
  height: "281",
  size: "651933"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/100w_s.gif",
  width: "100",
  height: "56"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/giphy-preview.webp",
  width: "165",
  height: "93",
  size: "49012"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/200w_s.gif",
  width: "200",
  height: "112"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/100w.gif",
  width: "100",
  height: "56",
  size: "68864",
  mp4: "https://media1.giphy.com/media/wranrCRq3f90A/100w.mp4",
  mp4_size: "34900",
  webp: "https://media1.giphy.com/media/wranrCRq3f90A/100w.webp",
  webp_size: "36976"
  },
  downsized_small: {
  width: "500",
  height: "280",
  mp4: "https://media1.giphy.com/media/wranrCRq3f90A/giphy-downsized-small.mp4",
  mp4_size: "148012"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/200w_d.gif",
  width: "200",
  height: "112",
  size: "126491",
  webp: "https://media1.giphy.com/media/wranrCRq3f90A/200w_d.webp",
  webp_size: "52134"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/giphy.gif",
  width: "500",
  height: "281",
  size: "651933"
  },
  original: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/giphy.gif",
  width: "500",
  height: "281",
  size: "651933",
  frames: "16",
  mp4: "https://media1.giphy.com/media/wranrCRq3f90A/giphy.mp4",
  mp4_size: "92803",
  webp: "https://media1.giphy.com/media/wranrCRq3f90A/giphy.webp",
  webp_size: "599778"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/200.gif",
  width: "356",
  height: "200",
  size: "189827",
  mp4: "https://media1.giphy.com/media/wranrCRq3f90A/200.mp4",
  mp4_size: "15446",
  webp: "https://media1.giphy.com/media/wranrCRq3f90A/200.webp",
  webp_size: "414618"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/wranrCRq3f90A/giphy-loop.mp4",
  mp4_size: "4276476"
  },
  original_mp4: {
  width: "480",
  height: "268",
  mp4: "https://media1.giphy.com/media/wranrCRq3f90A/giphy.mp4",
  mp4_size: "92803"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/giphy-preview.gif",
  width: "155",
  height: "87",
  size: "49380"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/wranrCRq3f90A/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "the office christmas GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=wranrCRq3f90A&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=wranrCRq3f90A&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=wranrCRq3f90A&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "tsSk22WwfWoFOAyLz0",
  slug: "liljon-lil-jon-tsSk22WwfWoFOAyLz0",
  url: "https://giphy.com/gifs/liljon-lil-jon-tsSk22WwfWoFOAyLz0",
  bitly_gif_url: "https://gph.is/2HILcRh",
  bitly_url: "https://gph.is/2HILcRh",
  embed_url: "https://giphy.com/embed/tsSk22WwfWoFOAyLz0",
  username: "liljon",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-02-23 20:35:06",
  trending_datetime: "2018-12-21 16:30:01",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/liljon/8EAXTBpPNA8s.jpg",
  banner_url: "https://media2.giphy.com/headers/liljon/3rbeLVLL7e3M.jpg",
  banner_image: "https://media2.giphy.com/headers/liljon/3rbeLVLL7e3M.jpg",
  profile_url: "https://giphy.com/liljon/",
  username: "liljon",
  display_name: "Lil Jon",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200_s.gif",
  width: "267",
  height: "200",
  size: "20640"
  },
  original_still: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy_s.gif",
  width: "480",
  height: "360",
  size: "59109"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200w.gif",
  width: "200",
  height: "150",
  size: "864188",
  mp4: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200w.mp4",
  mp4_size: "141344",
  webp: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200w.webp",
  webp_size: "399474"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/100_s.gif",
  width: "134",
  height: "100",
  size: "6770"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200_d.gif",
  width: "267",
  height: "200",
  size: "113102",
  webp: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200_d.webp",
  webp_size: "43276"
  },
  preview: {
  width: "290",
  height: "218",
  mp4: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy-preview.mp4",
  mp4_size: "36254"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/100.gif",
  width: "134",
  height: "100",
  size: "427966",
  mp4: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/100.mp4",
  mp4_size: "82342",
  webp: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/100.webp",
  webp_size: "237640"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy-downsized_s.gif",
  width: "379",
  height: "284",
  size: "45978"
  },
  downsized: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy-downsized.gif",
  width: "379",
  height: "284",
  size: "1960049"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy.gif",
  width: "480",
  height: "360",
  size: "4408596"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/100w_s.gif",
  width: "100",
  height: "75",
  size: "4419"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy-preview.webp",
  width: "189",
  height: "142",
  size: "48440"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200w_s.gif",
  width: "200",
  height: "150",
  size: "12670"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/100w.gif",
  width: "100",
  height: "75",
  size: "259111",
  mp4: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/100w.mp4",
  mp4_size: "45704",
  webp: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/100w.webp",
  webp_size: "169034"
  },
  downsized_small: {
  width: "304",
  height: "228",
  mp4: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy-downsized-small.mp4",
  mp4_size: "120619"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200w_d.gif",
  width: "200",
  height: "150",
  size: "68436",
  webp: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200w_d.webp",
  webp_size: "29954"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy.gif",
  width: "480",
  height: "360",
  size: "4408596"
  },
  original: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy.gif",
  width: "480",
  height: "360",
  size: "4408596",
  frames: "84",
  mp4: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy.mp4",
  mp4_size: "493228",
  webp: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy.webp",
  webp_size: "1263166",
  hash: "ca23a85cf8aebece7e1ad4b297df5f10"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200.gif",
  width: "267",
  height: "200",
  size: "1417290",
  mp4: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200.mp4",
  mp4_size: "199168",
  webp: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/200.webp",
  webp_size: "579942"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy-loop.mp4",
  mp4_size: "2625021"
  },
  original_mp4: {
  width: "480",
  height: "360",
  mp4: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy.mp4",
  mp4_size: "493228"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/giphy-preview.gif",
  width: "127",
  height: "95",
  size: "48889"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/tsSk22WwfWoFOAyLz0/480w_s.jpg",
  width: "480",
  height: "360"
  }
  },
  title: "its friday GIF by Lil Jon",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=tsSk22WwfWoFOAyLz0&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=tsSk22WwfWoFOAyLz0&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=tsSk22WwfWoFOAyLz0&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l1J3D78s4USLhASU8",
  slug: "lionsgatemovies-wink-l1J3D78s4USLhASU8",
  url: "https://giphy.com/gifs/lionsgatemovies-wink-l1J3D78s4USLhASU8",
  bitly_gif_url: "https://gph.is/2vxHzu2",
  bitly_url: "https://gph.is/2vxHzu2",
  embed_url: "https://giphy.com/embed/l1J3D78s4USLhASU8",
  username: "lionsgatemovies",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-08-04 18:41:35",
  trending_datetime: "2018-12-21 16:27:25",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/lionsgatemovies/C5oQVTRqTBkL.jpg",
  banner_url: "",
  profile_url: "https://giphy.com/lionsgatemovies/",
  username: "lionsgatemovies",
  display_name: "Lionsgate",
  is_verified: false
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200_s.gif",
  width: "318",
  height: "200",
  size: "46660"
  },
  original_still: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy_s.gif",
  width: "480",
  height: "302",
  size: "96178"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200w.gif",
  width: "200",
  height: "126",
  size: "206919",
  mp4: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200w.mp4",
  mp4_size: "24181",
  webp: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200w.webp",
  webp_size: "102508"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/100_s.gif",
  width: "159",
  height: "100",
  size: "14698"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200_d.gif",
  width: "318",
  height: "200",
  size: "241447",
  webp: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200_d.webp",
  webp_size: "90514"
  },
  preview: {
  width: "251",
  height: "158",
  mp4: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy-preview.mp4",
  mp4_size: "17725"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/100.gif",
  width: "159",
  height: "100",
  size: "142944",
  mp4: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/100.mp4",
  mp4_size: "26593",
  webp: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/100.webp",
  webp_size: "76378"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy-downsized_s.gif",
  width: "480",
  height: "302",
  size: "96178"
  },
  downsized: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy-downsized.gif",
  width: "480",
  height: "302",
  size: "1141369"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy.gif",
  width: "480",
  height: "302",
  size: "1141369"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/100w_s.gif",
  width: "100",
  height: "63",
  size: "7108"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy-preview.webp",
  width: "149",
  height: "94",
  size: "49406"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200w_s.gif",
  width: "200",
  height: "126",
  size: "21131"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/100w.gif",
  width: "100",
  height: "63",
  size: "64322",
  mp4: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/100w.mp4",
  mp4_size: "8953",
  webp: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/100w.webp",
  webp_size: "39976"
  },
  downsized_small: {
  width: "480",
  height: "302",
  mp4: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy-downsized-small.mp4",
  mp4_size: "179743"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200w_d.gif",
  width: "200",
  height: "126",
  size: "98487",
  webp: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200w_d.webp",
  webp_size: "46266"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy.gif",
  width: "480",
  height: "302",
  size: "1141369"
  },
  original: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy.gif",
  width: "480",
  height: "302",
  size: "1141369",
  frames: "15",
  mp4: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy.mp4",
  mp4_size: "179743",
  webp: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy.webp",
  webp_size: "355948",
  hash: "64097c5876e91eb1e351c610b4cdc6a9"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200.gif",
  width: "318",
  height: "200",
  size: "504613",
  mp4: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200.mp4",
  mp4_size: "51399",
  webp: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/200.webp",
  webp_size: "186526"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy-loop.mp4",
  mp4_size: "2279872"
  },
  original_mp4: {
  width: "480",
  height: "302",
  mp4: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy.mp4",
  mp4_size: "179743"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/l1J3D78s4USLhASU8/giphy-preview.gif",
  width: "143",
  height: "90",
  size: "49441"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/l1J3D78s4USLhASU8/480w_s.jpg",
  width: "480",
  height: "302"
  }
  },
  title: "samuel l jackson wink GIF by Lionsgate",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1J3D78s4USLhASU8&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1J3D78s4USLhASU8&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1J3D78s4USLhASU8&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xULW8IsZcnJ4ouNPyw",
  slug: "happy-retro-friday-xULW8IsZcnJ4ouNPyw",
  url: "https://giphy.com/gifs/happy-retro-friday-xULW8IsZcnJ4ouNPyw",
  bitly_gif_url: "https://gph.is/2FxqaUL",
  bitly_url: "https://gph.is/2FxqaUL",
  embed_url: "https://giphy.com/embed/xULW8IsZcnJ4ouNPyw",
  username: "omerismos",
  source: "https://www.omerismos.com",
  rating: "g",
  content_url: "",
  source_tld: "www.omerismos.com",
  source_post_url: "https://www.omerismos.com",
  is_sticker: 0,
  import_datetime: "2018-01-12 12:21:37",
  trending_datetime: "2018-12-21 16:15:02",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/omerismos/Sk08jDlAQfDX.gif",
  banner_url: "https://media1.giphy.com/headers/omerismos/3gFzR5rNSEYu.gif",
  banner_image: "https://media1.giphy.com/headers/omerismos/3gFzR5rNSEYu.gif",
  profile_url: "https://giphy.com/omerismos/",
  username: "omerismos",
  display_name: "Omer",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200_s.gif",
  width: "200",
  height: "200",
  size: "19647"
  },
  original_still: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy_s.gif",
  width: "480",
  height: "480",
  size: "67101"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200w.gif",
  width: "200",
  height: "200",
  size: "238929",
  mp4: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200w.mp4",
  mp4_size: "101641",
  webp: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200w.webp",
  webp_size: "234496"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/100_s.gif",
  width: "100",
  height: "100",
  size: "7413"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200_d.gif",
  width: "200",
  height: "200",
  size: "100826",
  webp: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200_d.webp",
  webp_size: "95008"
  },
  preview: {
  width: "192",
  height: "192",
  mp4: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy-preview.mp4",
  mp4_size: "49385"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/100.gif",
  width: "100",
  height: "100",
  size: "82486",
  mp4: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/100.mp4",
  mp4_size: "35712",
  webp: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/100.webp",
  webp_size: "80274"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy-downsized_s.gif",
  width: "480",
  height: "480",
  size: "67101"
  },
  downsized: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy.gif",
  width: "480",
  height: "480",
  size: "892020"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy.gif",
  width: "480",
  height: "480",
  size: "892020"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/100w_s.gif",
  width: "100",
  height: "100",
  size: "7413"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy-preview.webp",
  width: "95",
  height: "95",
  size: "49626"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200w_s.gif",
  width: "200",
  height: "200",
  size: "19647"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/100w.gif",
  width: "100",
  height: "100",
  size: "82486",
  mp4: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/100w.mp4",
  mp4_size: "35712",
  webp: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/100w.webp",
  webp_size: "80274"
  },
  downsized_small: {
  width: "316",
  height: "316",
  mp4: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy-downsized-small.mp4",
  mp4_size: "110705"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200w_d.gif",
  width: "200",
  height: "200",
  size: "100826",
  webp: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200w_d.webp",
  webp_size: "95008"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy.gif",
  width: "480",
  height: "480",
  size: "892020"
  },
  original: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy.gif",
  width: "480",
  height: "480",
  size: "892020",
  frames: "15",
  mp4: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy.mp4",
  mp4_size: "456001",
  webp: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy.webp",
  webp_size: "905224",
  hash: "60514ba7d9224f3298631b66fe09df10"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200.gif",
  width: "200",
  height: "200",
  size: "238929",
  mp4: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200.mp4",
  mp4_size: "101641",
  webp: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/200.webp",
  webp_size: "234496"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy-loop.mp4",
  mp4_size: "4552613"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy.mp4",
  mp4_size: "456001"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/xULW8IsZcnJ4ouNPyw/giphy-preview.gif",
  width: "102",
  height: "102",
  size: "49767"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/xULW8IsZcnJ4ouNPyw/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "happy friday GIF by Omer",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xULW8IsZcnJ4ouNPyw&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xULW8IsZcnJ4ouNPyw&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xULW8IsZcnJ4ouNPyw&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l4JyJHAF8blvfplf2",
  slug: "funny-cute-lol-l4JyJHAF8blvfplf2",
  url: "https://giphy.com/gifs/funny-cute-lol-l4JyJHAF8blvfplf2",
  bitly_gif_url: "https://gph.is/2hWC1iE",
  bitly_url: "https://gph.is/2hWC1iE",
  embed_url: "https://giphy.com/embed/l4JyJHAF8blvfplf2",
  username: "slothilda",
  source: "https://bit.ly/Slothilda",
  rating: "g",
  content_url: "https://bit.ly/Slothilda",
  source_tld: "bit.ly",
  source_post_url: "https://bit.ly/Slothilda",
  is_sticker: 0,
  import_datetime: "2016-12-16 16:12:35",
  trending_datetime: "2018-12-21 16:00:02",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/slothilda/sgEiCkZ7AJNZ.jpg",
  banner_url: "https://media4.giphy.com/headers/slothilda/rogHwS7dGj3R.png",
  banner_image: "https://media4.giphy.com/headers/slothilda/rogHwS7dGj3R.png",
  profile_url: "https://giphy.com/slothilda/",
  username: "slothilda",
  display_name: "SLOTHILDA",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200_s.gif",
  width: "200",
  height: "200",
  size: "5095"
  },
  original_still: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy_s.gif",
  width: "640",
  height: "640",
  size: "22474"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200w.gif",
  width: "200",
  height: "200",
  size: "26210",
  mp4: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200w.mp4",
  mp4_size: "20016",
  webp: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200w.webp",
  webp_size: "31918"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/100_s.gif",
  width: "100",
  height: "100",
  size: "1982"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200_d.gif",
  width: "200",
  height: "200",
  size: "15000",
  webp: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200_d.webp",
  webp_size: "18612"
  },
  preview: {
  width: "398",
  height: "398",
  mp4: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy-preview.mp4",
  mp4_size: "24719"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/100.gif",
  width: "100",
  height: "100",
  size: "9718",
  mp4: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/100.mp4",
  mp4_size: "8377",
  webp: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/100.webp",
  webp_size: "11994"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy-downsized_s.gif",
  width: "640",
  height: "640",
  size: "22474"
  },
  downsized: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy-downsized.gif",
  width: "640",
  height: "640",
  size: "155372"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy.gif",
  width: "640",
  height: "640",
  size: "155372"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/100w_s.gif",
  width: "100",
  height: "100",
  size: "1982"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy-preview.webp",
  width: "390",
  height: "390",
  size: "48734"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200w_s.gif",
  width: "200",
  height: "200",
  size: "5095"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/480w_s.jpg",
  width: "480",
  height: "480",
  size: "18685"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/100w.gif",
  width: "100",
  height: "100",
  size: "9718",
  mp4: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/100w.mp4",
  mp4_size: "8377",
  webp: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/100w.webp",
  webp_size: "11994"
  },
  downsized_small: {
  width: "640",
  height: "640",
  mp4: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy-downsized-small.mp4",
  mp4_size: "82352"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200w_d.gif",
  width: "200",
  height: "200",
  size: "15000",
  webp: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200w_d.webp",
  webp_size: "18612"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy.gif",
  width: "640",
  height: "640",
  size: "155372"
  },
  original: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy.gif",
  width: "640",
  height: "640",
  size: "155372",
  frames: "9",
  mp4: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy.mp4",
  mp4_size: "56579",
  webp: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy.webp",
  webp_size: "144222",
  hash: "3877fdaa7526c28d64e41c78dc8dda74"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200.gif",
  width: "200",
  height: "200",
  size: "26210",
  mp4: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200.mp4",
  mp4_size: "20016",
  webp: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/200.webp",
  webp_size: "31918"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy-loop.mp4",
  mp4_size: "560153"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy.mp4",
  mp4_size: "56579"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/l4JyJHAF8blvfplf2/giphy-preview.gif",
  width: "405",
  height: "405",
  size: "48824"
  }
  },
  title: "it's friday lol GIF by SLOTHILDA",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4JyJHAF8blvfplf2&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4JyJHAF8blvfplf2&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4JyJHAF8blvfplf2&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "anCaU60aw8ld6",
  slug: "lifetimetelly-friday-anCaU60aw8ld6",
  url: "https://giphy.com/gifs/lifetimetelly-friday-anCaU60aw8ld6",
  bitly_gif_url: "https://gph.is/1ttgR0Y",
  bitly_url: "https://gph.is/1ttgR0Y",
  embed_url: "https://giphy.com/embed/anCaU60aw8ld6",
  username: "lifetimetelly",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-06-16 16:32:58",
  trending_datetime: "2018-12-21 15:45:01",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/lifetimetelly/M4qAzXfvur5S.jpg",
  banner_url: "https://media2.giphy.com/headers/lifetimetelly/dxkfKLzcmONM.png",
  banner_image: "https://media2.giphy.com/headers/lifetimetelly/dxkfKLzcmONM.png",
  profile_url: "https://giphy.com/lifetimetelly/",
  username: "lifetimetelly",
  display_name: "Lifetime Telly",
  is_verified: false
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/200_s.gif",
  width: "356",
  height: "200"
  },
  original_still: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy_s.gif",
  width: "480",
  height: "270"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/200w.gif",
  width: "200",
  height: "113",
  size: "423480",
  mp4: "https://media0.giphy.com/media/anCaU60aw8ld6/200w.mp4",
  mp4_size: "29823",
  webp: "https://media0.giphy.com/media/anCaU60aw8ld6/200w.webp",
  webp_size: "160606"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/100_s.gif",
  width: "178",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/200_d.gif",
  width: "356",
  height: "200",
  size: "253639",
  webp: "https://media0.giphy.com/media/anCaU60aw8ld6/200_d.webp",
  webp_size: "71616"
  },
  preview: {
  width: "256",
  height: "144",
  mp4: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy-preview.mp4",
  mp4_size: "29243"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/100.gif",
  width: "178",
  height: "100",
  size: "352619",
  mp4: "https://media0.giphy.com/media/anCaU60aw8ld6/100.mp4",
  mp4_size: "26695",
  webp: "https://media0.giphy.com/media/anCaU60aw8ld6/100.webp",
  webp_size: "140326"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy-tumblr_s.gif",
  width: "250",
  height: "140"
  },
  downsized: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy-tumblr.gif",
  width: "250",
  height: "140",
  size: "615104"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy.gif",
  width: "480",
  height: "270",
  size: "2169763"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/100w_s.gif",
  width: "100",
  height: "56"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy-preview.webp",
  width: "185",
  height: "104",
  size: "48354"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/200w_s.gif",
  width: "200",
  height: "113"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/100w.gif",
  width: "100",
  height: "56",
  size: "128613",
  mp4: "https://media0.giphy.com/media/anCaU60aw8ld6/100w.mp4",
  mp4_size: "14239",
  webp: "https://media0.giphy.com/media/anCaU60aw8ld6/100w.webp",
  webp_size: "63356"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy-downsized-small.mp4",
  mp4_size: "110588"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/200w_d.gif",
  width: "200",
  height: "113",
  size: "93086",
  webp: "https://media0.giphy.com/media/anCaU60aw8ld6/200w_d.webp",
  webp_size: "33366"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy.gif",
  width: "480",
  height: "270",
  size: "2169763"
  },
  original: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy.gif",
  width: "480",
  height: "270",
  size: "2169763",
  frames: "29",
  mp4: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy.mp4",
  mp4_size: "105760",
  webp: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy.webp",
  webp_size: "563862"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/200.gif",
  width: "356",
  height: "200",
  size: "1169019",
  mp4: "https://media0.giphy.com/media/anCaU60aw8ld6/200.mp4",
  mp4_size: "64135",
  webp: "https://media0.giphy.com/media/anCaU60aw8ld6/200.webp",
  webp_size: "344820"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy-loop.mp4",
  mp4_size: "830943"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy.mp4",
  mp4_size: "105760"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/anCaU60aw8ld6/giphy-preview.gif",
  width: "117",
  height: "66",
  size: "49386"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/anCaU60aw8ld6/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "friday viernes GIF by Lifetime Telly",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=anCaU60aw8ld6&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=anCaU60aw8ld6&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=anCaU60aw8ld6&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xUPN39xtlB15k469TW",
  slug: "nehumanesociety-dance-xUPN39xtlB15k469TW",
  url: "https://giphy.com/gifs/nehumanesociety-dance-xUPN39xtlB15k469TW",
  bitly_gif_url: "https://gph.is/2h1oDvd",
  bitly_url: "https://gph.is/2h1oDvd",
  embed_url: "https://giphy.com/embed/xUPN39xtlB15k469TW",
  username: "nehumanesociety",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-11-03 15:08:04",
  trending_datetime: "2018-12-21 15:30:02",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/nehumanesociety/iBvqY0g941A3.png",
  banner_url: "",
  profile_url: "https://giphy.com/nehumanesociety/",
  username: "nehumanesociety",
  display_name: "Nebraska Humane Society",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200_s.gif",
  width: "266",
  height: "200",
  size: "36004"
  },
  original_still: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy_s.gif",
  width: "480",
  height: "360",
  size: "100776"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200w.gif",
  width: "200",
  height: "150",
  size: "282548",
  mp4: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200w.mp4",
  mp4_size: "87077",
  webp: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200w.webp",
  webp_size: "321576"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/100_s.gif",
  width: "133",
  height: "100",
  size: "11073"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200_d.gif",
  width: "266",
  height: "200",
  size: "106217",
  webp: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200_d.webp",
  webp_size: "72332"
  },
  preview: {
  width: "285",
  height: "214",
  mp4: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy-preview.mp4",
  mp4_size: "42018"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/100.gif",
  width: "133",
  height: "100",
  size: "119357",
  mp4: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/100.mp4",
  mp4_size: "50804",
  webp: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/100.webp",
  webp_size: "167938"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy-downsized_s.gif",
  width: "480",
  height: "360",
  size: "100776"
  },
  downsized: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy-downsized.gif",
  width: "480",
  height: "360",
  size: "1092292"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy.gif",
  width: "480",
  height: "360",
  size: "1092292"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/100w_s.gif",
  width: "100",
  height: "75",
  size: "7130"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy-preview.webp",
  width: "164",
  height: "123",
  size: "49382"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200w_s.gif",
  width: "200",
  height: "150",
  size: "22309"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/100w.gif",
  width: "100",
  height: "75",
  size: "77701",
  mp4: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/100w.mp4",
  mp4_size: "35511",
  webp: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/100w.webp",
  webp_size: "118816"
  },
  downsized_small: {
  width: "389",
  height: "292",
  mp4: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy-downsized-small.mp4",
  mp4_size: "143159"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200w_d.gif",
  width: "200",
  height: "150",
  size: "65779",
  webp: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200w_d.webp",
  webp_size: "48062"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy.gif",
  width: "480",
  height: "360",
  size: "1092292"
  },
  original: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy.gif",
  width: "480",
  height: "360",
  size: "1092292",
  frames: "46",
  mp4: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy.mp4",
  mp4_size: "302898",
  webp: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy.webp",
  webp_size: "1026220",
  hash: "8c262d72284d051a80f57cfd13937802"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200.gif",
  width: "266",
  height: "200",
  size: "445147",
  mp4: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200.mp4",
  mp4_size: "130857",
  webp: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/200.webp",
  webp_size: "460780"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy-loop.mp4",
  mp4_size: "1456014"
  },
  original_mp4: {
  width: "480",
  height: "360",
  mp4: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy.mp4",
  mp4_size: "302898"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/xUPN39xtlB15k469TW/giphy-preview.gif",
  width: "197",
  height: "148",
  size: "48781"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/xUPN39xtlB15k469TW/480w_s.jpg",
  width: "480",
  height: "360"
  }
  },
  title: "friday deal with it GIF by Nebraska Humane Society",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xUPN39xtlB15k469TW&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xUPN39xtlB15k469TW&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xUPN39xtlB15k469TW&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xUA7aM7vpeS5PVwcCI",
  slug: "unclesego-masego-xUA7aM7vpeS5PVwcCI",
  url: "https://giphy.com/gifs/unclesego-masego-xUA7aM7vpeS5PVwcCI",
  bitly_gif_url: "https://gph.is/2o1dLOQ",
  bitly_url: "https://gph.is/2o1dLOQ",
  embed_url: "https://giphy.com/embed/xUA7aM7vpeS5PVwcCI",
  username: "unclesego",
  source: "https://masegomusic.com",
  rating: "g",
  content_url: "",
  source_tld: "masegomusic.com",
  source_post_url: "https://masegomusic.com",
  is_sticker: 0,
  import_datetime: "2017-04-11 19:02:31",
  trending_datetime: "2018-12-20 16:47:46",
  user: {
  avatar_url: "https://media3.giphy.com/avatars/unclesego/wwpMqfjpDTtR.jpeg",
  banner_url: "https://media3.giphy.com/headers/unclesego/qEnChmpm24kV.jpg",
  banner_image: "https://media3.giphy.com/headers/unclesego/qEnChmpm24kV.jpg",
  profile_url: "https://giphy.com/unclesego/",
  username: "unclesego",
  display_name: "Masego",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200_s.gif",
  width: "356",
  height: "200",
  size: "18383"
  },
  original_still: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy_s.gif",
  width: "480",
  height: "270",
  size: "32378"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200w.gif",
  width: "200",
  height: "113",
  size: "559855",
  mp4: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200w.mp4",
  mp4_size: "93291",
  webp: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200w.webp",
  webp_size: "232538"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/100_s.gif",
  width: "178",
  height: "100",
  size: "5918"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200_d.gif",
  width: "356",
  height: "200",
  size: "93075",
  webp: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200_d.webp",
  webp_size: "34804"
  },
  preview: {
  width: "338",
  height: "190",
  mp4: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy-preview.mp4",
  mp4_size: "32915"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/100.gif",
  width: "178",
  height: "100",
  size: "467551",
  mp4: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/100.mp4",
  mp4_size: "82343",
  webp: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/100.webp",
  webp_size: "194978"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "32428"
  },
  downsized: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy-downsized.gif",
  width: "480",
  height: "270",
  size: "1396708"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy.gif",
  width: "480",
  height: "270",
  size: "2600703"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/100w_s.gif",
  width: "100",
  height: "57",
  size: "2646"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy-preview.webp",
  width: "256",
  height: "144",
  size: "48170"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200w_s.gif",
  width: "200",
  height: "113",
  size: "7017"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/100w.gif",
  width: "100",
  height: "57",
  size: "204134",
  mp4: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/100w.mp4",
  mp4_size: "36306",
  webp: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/100w.webp",
  webp_size: "88448"
  },
  downsized_small: {
  width: "352",
  height: "198",
  mp4: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy-downsized-small.mp4",
  mp4_size: "127989"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200w_d.gif",
  width: "200",
  height: "113",
  size: "33319",
  webp: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200w_d.webp",
  webp_size: "15622"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy.gif",
  width: "480",
  height: "270",
  size: "2600703"
  },
  original: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy.gif",
  width: "480",
  height: "270",
  size: "2600703",
  frames: "90",
  mp4: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy.mp4",
  mp4_size: "369940",
  webp: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy.webp",
  webp_size: "830634",
  hash: "f7bff2e81f95513a1dc769365730a664"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200.gif",
  width: "356",
  height: "200",
  size: "1483788",
  mp4: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200.mp4",
  mp4_size: "223762",
  webp: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/200.webp",
  webp_size: "503462"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy-loop.mp4",
  mp4_size: "2045780"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy.mp4",
  mp4_size: "369940"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/xUA7aM7vpeS5PVwcCI/giphy-preview.gif",
  width: "212",
  height: "119",
  size: "48237"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/xUA7aM7vpeS5PVwcCI/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "very funny lol GIF by Masego",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xUA7aM7vpeS5PVwcCI&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xUA7aM7vpeS5PVwcCI&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xUA7aM7vpeS5PVwcCI&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "26Flt5dYLH6tymlVe",
  slug: "earwolf-lauren-lapkus-26Flt5dYLH6tymlVe",
  url: "https://giphy.com/gifs/earwolf-lauren-lapkus-26Flt5dYLH6tymlVe",
  bitly_gif_url: "https://gph.is/2wYgyAC",
  bitly_url: "https://gph.is/2wYgyAC",
  embed_url: "https://giphy.com/embed/26Flt5dYLH6tymlVe",
  username: "earwolf",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-08-29 01:17:55",
  trending_datetime: "2018-12-21 15:00:01",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/earwolf/XyTlvkiPA8yf.jpg",
  banner_url: "https://media2.giphy.com/headers/earwolf/YgdDEKvE3RF0.gif",
  banner_image: "https://media2.giphy.com/headers/earwolf/YgdDEKvE3RF0.gif",
  profile_url: "https://giphy.com/earwolf/",
  username: "earwolf",
  display_name: "Earwolf",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200_s.gif",
  width: "250",
  height: "200",
  size: "26747"
  },
  original_still: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy_s.gif",
  width: "480",
  height: "384",
  size: "93266"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200w.gif",
  width: "200",
  height: "160",
  size: "949229",
  mp4: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200w.mp4",
  mp4_size: "67190",
  webp: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200w.webp",
  webp_size: "278730"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/100_s.gif",
  width: "125",
  height: "100",
  size: "8170"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200_d.gif",
  width: "250",
  height: "200",
  size: "144949",
  webp: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200_d.webp",
  webp_size: "38466"
  },
  preview: {
  width: "307",
  height: "246",
  mp4: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy-preview.mp4",
  mp4_size: "31004"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/100.gif",
  width: "125",
  height: "100",
  size: "439098",
  mp4: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/100.mp4",
  mp4_size: "35178",
  webp: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/100.webp",
  webp_size: "156370"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy-downsized_s.gif",
  width: "250",
  height: "200",
  size: "29501"
  },
  downsized: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy-downsized.gif",
  width: "250",
  height: "200",
  size: "1294934"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy.gif",
  width: "480",
  height: "384",
  size: "5901133"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/100w_s.gif",
  width: "100",
  height: "80",
  size: "5817"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy-preview.webp",
  width: "201",
  height: "161",
  size: "48604"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200w_s.gif",
  width: "200",
  height: "160",
  size: "17807"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/100w.gif",
  width: "100",
  height: "80",
  size: "307744",
  mp4: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/100w.mp4",
  mp4_size: "24483",
  webp: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/100w.webp",
  webp_size: "113790"
  },
  downsized_small: {
  width: "385",
  height: "308",
  mp4: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy-downsized-small.mp4",
  mp4_size: "98868"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200w_d.gif",
  width: "200",
  height: "160",
  size: "95322",
  webp: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200w_d.webp",
  webp_size: "27460"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy-downsized-medium.gif",
  width: "384",
  height: "307",
  size: "3308011"
  },
  original: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy.gif",
  width: "480",
  height: "384",
  size: "5901133",
  frames: "64",
  mp4: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy.mp4",
  mp4_size: "307085",
  webp: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy.webp",
  webp_size: "933338",
  hash: "a803f58e8749a5a6895bcc60b607444a"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200.gif",
  width: "250",
  height: "200",
  size: "1445416",
  mp4: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200.mp4",
  mp4_size: "94692",
  webp: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/200.webp",
  webp_size: "381282"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy-loop.mp4",
  mp4_size: "2170478"
  },
  original_mp4: {
  width: "480",
  height: "384",
  mp4: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy.mp4",
  mp4_size: "307085"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/26Flt5dYLH6tymlVe/giphy-preview.gif",
  width: "110",
  height: "88",
  size: "47949"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/26Flt5dYLH6tymlVe/480w_s.jpg",
  width: "480",
  height: "384"
  }
  },
  title: "lauren lapkus tongue GIF by Earwolf",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26Flt5dYLH6tymlVe&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26Flt5dYLH6tymlVe&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26Flt5dYLH6tymlVe&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3o6ozh8U6nWCZvuyHK",
  slug: "originals-reaction-3o6ozh8U6nWCZvuyHK",
  url: "https://giphy.com/gifs/originals-reaction-3o6ozh8U6nWCZvuyHK",
  bitly_gif_url: "https://gph.is/1NUYNRc",
  bitly_url: "https://gph.is/1NUYNRc",
  embed_url: "https://giphy.com/embed/3o6ozh8U6nWCZvuyHK",
  username: "studiosoriginals",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-04-28 00:33:22",
  trending_datetime: "2018-12-21 14:45:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/studiosoriginals/j3JBzK5twdv8.jpg",
  banner_url: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  banner_image: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  profile_url: "https://giphy.com/studiosoriginals/",
  username: "studiosoriginals",
  display_name: "GIPHY Studios Originals",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200_s.gif",
  width: "200",
  height: "200"
  },
  original_still: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy_s.gif",
  width: "500",
  height: "500"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200w.gif",
  width: "200",
  height: "200",
  size: "21009",
  mp4: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200w.mp4",
  mp4_size: "6792",
  webp: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200w.webp",
  webp_size: "20120"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/100_s.gif",
  width: "100",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200_d.gif",
  width: "200",
  height: "200",
  size: "21009",
  webp: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200_d.webp",
  webp_size: "20120"
  },
  preview: {
  width: "500",
  height: "500",
  mp4: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy-preview.mp4",
  mp4_size: "18304"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/100.gif",
  width: "100",
  height: "100",
  size: "8797",
  mp4: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/100.mp4",
  mp4_size: "3420",
  webp: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/100.webp",
  webp_size: "9194"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy-downsized_s.gif",
  width: "500",
  height: "500",
  size: "18375"
  },
  downsized: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy-downsized.gif",
  width: "500",
  height: "500",
  size: "65765"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy.gif",
  width: "500",
  height: "500",
  size: "65765"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/100w_s.gif",
  width: "100",
  height: "100"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy-preview.webp",
  width: "500",
  height: "500",
  size: "28136"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200w_s.gif",
  width: "200",
  height: "200"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/100w.gif",
  width: "100",
  height: "100",
  size: "8797",
  mp4: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/100w.mp4",
  mp4_size: "3420",
  webp: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/100w.webp",
  webp_size: "9194"
  },
  downsized_small: {
  width: "500",
  height: "500",
  mp4: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy-downsized-small.mp4",
  mp4_size: "18304"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200w_d.gif",
  width: "200",
  height: "200",
  size: "21009",
  webp: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200w_d.webp",
  webp_size: "20120"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy.gif",
  width: "500",
  height: "500",
  size: "65765"
  },
  original: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy.gif",
  width: "500",
  height: "500",
  size: "65765",
  frames: "4",
  mp4: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy.mp4",
  mp4_size: "15752",
  webp: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy.webp",
  webp_size: "60702"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200.gif",
  width: "200",
  height: "200",
  size: "21009",
  mp4: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200.mp4",
  mp4_size: "6792",
  webp: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/200.webp",
  webp_size: "20120"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy-loop.mp4",
  mp4_size: "902922"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy.mp4",
  mp4_size: "15752"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/3o6ozh8U6nWCZvuyHK/giphy-preview.gif",
  width: "500",
  height: "500",
  size: "31660"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/3o6ozh8U6nWCZvuyHK/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "dislike thumbs down GIF by GIPHY Studios Originals",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o6ozh8U6nWCZvuyHK&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o6ozh8U6nWCZvuyHK&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o6ozh8U6nWCZvuyHK&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3otPoEWP8c9eaOnQFq",
  slug: "Filmeditor--halloween-ashley-olsen-3otPoEWP8c9eaOnQFq",
  url: "https://giphy.com/gifs/Filmeditor--halloween-ashley-olsen-3otPoEWP8c9eaOnQFq",
  bitly_gif_url: "https://gph.is/2dpKaws",
  bitly_url: "https://gph.is/2dpKaws",
  embed_url: "https://giphy.com/embed/3otPoEWP8c9eaOnQFq",
  username: "",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-10-14 18:37:12",
  trending_datetime: "2018-12-20 16:47:46",
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200_s.gif",
  width: "268",
  height: "200",
  size: "36137"
  },
  original_still: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy_s.gif",
  width: "480",
  height: "358",
  size: "95691"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200w.gif",
  width: "200",
  height: "150",
  size: "343426",
  mp4: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200w.mp4",
  mp4_size: "25730",
  webp: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200w.webp",
  webp_size: "98732"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/100_s.gif",
  width: "134",
  height: "100",
  size: "11652"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200_d.gif",
  width: "268",
  height: "200",
  size: "217141",
  webp: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200_d.webp",
  webp_size: "54754"
  },
  preview: {
  width: "186",
  height: "138",
  mp4: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy-preview.mp4",
  mp4_size: "48686"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/100.gif",
  width: "134",
  height: "100",
  size: "167953",
  mp4: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/100.mp4",
  mp4_size: "16157",
  webp: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/100.webp",
  webp_size: "56138"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy-downsized_s.gif",
  width: "480",
  height: "358",
  size: "95691"
  },
  downsized: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy-downsized.gif",
  width: "480",
  height: "358",
  size: "1613121"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy.gif",
  width: "480",
  height: "358",
  size: "1613121"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/100w_s.gif",
  width: "100",
  height: "75",
  size: "7469"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy-preview.webp",
  width: "192",
  height: "143",
  size: "47902"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200w_s.gif",
  width: "200",
  height: "150",
  size: "22475"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/100w.gif",
  width: "100",
  height: "75",
  size: "101689",
  mp4: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/100w.mp4",
  mp4_size: "10664",
  webp: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/100w.webp",
  webp_size: "37606"
  },
  downsized_small: {
  width: "480",
  height: "358",
  mp4: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy-downsized-small.mp4",
  mp4_size: "84153"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200w_d.gif",
  width: "200",
  height: "150",
  size: "133044",
  webp: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200w_d.webp",
  webp_size: "36392"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy.gif",
  width: "480",
  height: "358",
  size: "1613121"
  },
  original: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy.gif",
  width: "480",
  height: "358",
  size: "1613121",
  frames: "16",
  mp4: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy.mp4",
  mp4_size: "73683",
  webp: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy.webp",
  webp_size: "352778",
  hash: "996e29376b7f271dc756e3fe25005dfa"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200.gif",
  width: "268",
  height: "200",
  size: "570776",
  mp4: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200.mp4",
  mp4_size: "35617",
  webp: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/200.webp",
  webp_size: "147856"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy-loop.mp4",
  mp4_size: "1024698"
  },
  original_mp4: {
  width: "480",
  height: "358",
  mp4: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy.mp4",
  mp4_size: "73683"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/giphy-preview.gif",
  width: "99",
  height: "74",
  size: "49924"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/3otPoEWP8c9eaOnQFq/480w_s.jpg",
  width: "480",
  height: "358"
  }
  },
  title: "ashley olsen eye roll GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3otPoEWP8c9eaOnQFq&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3otPoEWP8c9eaOnQFq&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3otPoEWP8c9eaOnQFq&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3ohzdQEHTraotUObiE",
  slug: "goldlink-crew-3ohzdQEHTraotUObiE",
  url: "https://giphy.com/gifs/goldlink-crew-3ohzdQEHTraotUObiE",
  bitly_gif_url: "https://gph.is/2lihr2j",
  bitly_url: "https://gph.is/2lihr2j",
  embed_url: "https://giphy.com/embed/3ohzdQEHTraotUObiE",
  username: "goldlink",
  source: "https://www.goldlink.info",
  rating: "pg",
  content_url: "",
  source_tld: "www.goldlink.info",
  source_post_url: "https://www.goldlink.info",
  is_sticker: 0,
  import_datetime: "2017-03-02 16:48:28",
  trending_datetime: "2018-12-21 14:15:02",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/goldlink/s9nk6mg6qMIC.jpg",
  banner_url: "https://media4.giphy.com/headers/goldlink/cpKdI07doZC9.jpg",
  banner_image: "https://media4.giphy.com/headers/goldlink/cpKdI07doZC9.jpg",
  profile_url: "https://giphy.com/goldlink/",
  username: "goldlink",
  display_name: "GoldLink",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200_s.gif",
  width: "272",
  height: "200",
  size: "38007"
  },
  original_still: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy_s.gif",
  width: "480",
  height: "353",
  size: "109943"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200w.gif",
  width: "200",
  height: "147",
  size: "771754",
  mp4: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200w.mp4",
  mp4_size: "58711",
  webp: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200w.webp",
  webp_size: "282854"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/100_s.gif",
  width: "136",
  height: "100",
  size: "12462"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200_d.gif",
  width: "272",
  height: "200",
  size: "226898",
  webp: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200_d.webp",
  webp_size: "61946"
  },
  preview: {
  width: "192",
  height: "140",
  mp4: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy-preview.mp4",
  mp4_size: "44362"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/100.gif",
  width: "136",
  height: "100",
  size: "399526",
  mp4: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/100.mp4",
  mp4_size: "34249",
  webp: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/100.webp",
  webp_size: "172488"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy-downsized_s.gif",
  width: "250",
  height: "183",
  size: "32697"
  },
  downsized: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy-downsized.gif",
  width: "250",
  height: "183",
  size: "1164003"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy.gif",
  width: "480",
  height: "353",
  size: "4293892"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/100w_s.gif",
  width: "100",
  height: "74",
  size: "7712"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy-preview.webp",
  width: "145",
  height: "107",
  size: "48628"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200w_s.gif",
  width: "200",
  height: "147",
  size: "22603"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/100w.gif",
  width: "100",
  height: "74",
  size: "228826",
  mp4: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/100w.mp4",
  mp4_size: "22989",
  webp: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/100w.webp",
  webp_size: "112466"
  },
  downsized_small: {
  width: "480",
  height: "352",
  mp4: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy-downsized-small.mp4",
  mp4_size: "195094"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200w_d.gif",
  width: "200",
  height: "147",
  size: "132038",
  webp: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200w_d.webp",
  webp_size: "42402"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy.gif",
  width: "480",
  height: "353",
  size: "4293892"
  },
  original: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy.gif",
  width: "480",
  height: "353",
  size: "4293892",
  frames: "40",
  mp4: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy.mp4",
  mp4_size: "215104",
  webp: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy.webp",
  webp_size: "1106626",
  hash: "fa40261a708253025ce38c06aca9baa4"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200.gif",
  width: "272",
  height: "200",
  size: "1376991",
  mp4: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200.mp4",
  mp4_size: "83350",
  webp: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/200.webp",
  webp_size: "415804"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy-loop.mp4",
  mp4_size: "1741335"
  },
  original_mp4: {
  width: "480",
  height: "352",
  mp4: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy.mp4",
  mp4_size: "215104"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/3ohzdQEHTraotUObiE/giphy-preview.gif",
  width: "95",
  height: "70",
  size: "47853"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/3ohzdQEHTraotUObiE/480w_s.jpg",
  width: "480",
  height: "353"
  }
  },
  title: "crew dancing GIF by GoldLink",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohzdQEHTraotUObiE&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohzdQEHTraotUObiE&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohzdQEHTraotUObiE&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l0HlAnuooBUpOE1bi",
  slug: "nickelodeon-spongebob-squarepants-relaxing-l0HlAnuooBUpOE1bi",
  url: "https://giphy.com/gifs/nickelodeon-spongebob-squarepants-relaxing-l0HlAnuooBUpOE1bi",
  bitly_gif_url: "https://gph.is/2dSg0lB",
  bitly_url: "https://gph.is/2dSg0lB",
  embed_url: "https://giphy.com/embed/l0HlAnuooBUpOE1bi",
  username: "nickelodeon",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-10-12 18:41:48",
  trending_datetime: "2018-12-21 14:00:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/nickelodeon/oa2rI6pKE2un.png",
  banner_url: "https://media4.giphy.com/avatars/nickelodeon/xsjy36tB8oCX.gif",
  banner_image: "https://media4.giphy.com/avatars/nickelodeon/xsjy36tB8oCX.gif",
  profile_url: "https://giphy.com/nickelodeon/",
  username: "nickelodeon",
  display_name: "Nickelodeon",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200_s.gif",
  width: "356",
  height: "200",
  size: "51874"
  },
  original_still: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy_s.gif",
  width: "480",
  height: "270",
  size: "93247"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200w.gif",
  width: "200",
  height: "113",
  size: "327848",
  mp4: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200w.mp4",
  mp4_size: "35970",
  webp: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200w.webp",
  webp_size: "459972"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/100_s.gif",
  width: "178",
  height: "100",
  size: "15829"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200_d.gif",
  width: "356",
  height: "200",
  size: "199281",
  webp: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200_d.webp",
  webp_size: "167946"
  },
  preview: {
  width: "304",
  height: "170",
  mp4: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy-preview.mp4",
  mp4_size: "37495"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/100.gif",
  width: "178",
  height: "100",
  size: "300954",
  mp4: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/100.mp4",
  mp4_size: "29548",
  webp: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/100.webp",
  webp_size: "379718"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy-downsized_s.gif",
  width: "250",
  height: "140",
  size: "27268"
  },
  downsized: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy-downsized.gif",
  width: "250",
  height: "140",
  size: "535976"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy.gif",
  width: "500",
  height: "281",
  size: "2542398"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/100w_s.gif",
  width: "100",
  height: "57",
  size: "6717"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy-preview.webp",
  width: "162",
  height: "91",
  size: "49418"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200w_s.gif",
  width: "200",
  height: "113",
  size: "18884"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/480w_s.jpg",
  width: "480",
  height: "270",
  size: "33298"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/100w.gif",
  width: "100",
  height: "57",
  size: "87937",
  mp4: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/100w.mp4",
  mp4_size: "11916",
  webp: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/100w.webp",
  webp_size: "131924"
  },
  downsized_small: {
  width: "360",
  height: "202",
  mp4: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy-downsized-small.mp4",
  mp4_size: "120412"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200w_d.gif",
  width: "200",
  height: "113",
  size: "59438",
  webp: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200w_d.webp",
  webp_size: "62574"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy.gif",
  width: "500",
  height: "281",
  size: "2542398"
  },
  original: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy.gif",
  width: "480",
  height: "270",
  size: "2292812",
  frames: "45",
  mp4: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy.mp4",
  mp4_size: "397264",
  webp: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy.webp",
  webp_size: "2146528",
  hash: "8ca205380938fe302a69cb6780b9df61"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200.gif",
  width: "356",
  height: "200",
  size: "1190956",
  mp4: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200.mp4",
  mp4_size: "106929",
  webp: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/200.webp",
  webp_size: "1241346"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy-loop.mp4",
  mp4_size: "1348608"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy.mp4",
  mp4_size: "397264"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/l0HlAnuooBUpOE1bi/giphy-preview.gif",
  width: "196",
  height: "110",
  size: "48570"
  }
  },
  title: "relaxed spongebob squarepants GIF by Nickelodeon",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0HlAnuooBUpOE1bi&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0HlAnuooBUpOE1bi&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0HlAnuooBUpOE1bi&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xT0BKqhdlKCxCNsVTq",
  slug: "birthday-happy-birthday-cake-forever-yung-xT0BKqhdlKCxCNsVTq",
  url: "https://giphy.com/gifs/birthday-happy-birthday-cake-forever-yung-xT0BKqhdlKCxCNsVTq",
  bitly_gif_url: "https://gph.is/1QVAxiy",
  bitly_url: "https://gph.is/1QVAxiy",
  embed_url: "https://giphy.com/embed/xT0BKqhdlKCxCNsVTq",
  username: "birthday",
  source: "giphy.com",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "giphy.com",
  is_sticker: 0,
  import_datetime: "2016-02-22 17:02:09",
  trending_datetime: "2018-12-21 13:45:02",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/birthday/kwJOeGSDDUuR.gif",
  banner_url: "https://media1.giphy.com/headers/birthday/29JDUE2wgQK3.gif",
  banner_image: "https://media1.giphy.com/headers/birthday/29JDUE2wgQK3.gif",
  profile_url: "https://giphy.com/birthday/",
  username: "birthday",
  display_name: "Birthday Bot",
  is_verified: false
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200_s.gif",
  width: "283",
  height: "200"
  },
  original_still: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy_s.gif",
  width: "500",
  height: "353"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200w.gif",
  width: "200",
  height: "141",
  size: "677178",
  mp4: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200w.mp4",
  mp4_size: "25627",
  webp: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200w.webp",
  webp_size: "489642"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/100_s.gif",
  width: "142",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200_d.gif",
  width: "283",
  height: "200",
  size: "129011",
  webp: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200_d.webp",
  webp_size: "63776"
  },
  preview: {
  width: "344",
  height: "242",
  mp4: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy-preview.mp4",
  mp4_size: "21292"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/100.gif",
  width: "142",
  height: "100",
  size: "354097",
  mp4: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/100.mp4",
  mp4_size: "15674",
  webp: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/100.webp",
  webp_size: "276350"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy-downsized_s.gif",
  width: "250",
  height: "176",
  size: "18009"
  },
  downsized: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy-downsized.gif",
  width: "250",
  height: "176",
  size: "784676"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy.gif",
  width: "500",
  height: "353",
  size: "3353113"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/100w_s.gif",
  width: "100",
  height: "71"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy-preview.webp",
  width: "191",
  height: "135",
  size: "49612"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200w_s.gif",
  width: "200",
  height: "141"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/100w.gif",
  width: "100",
  height: "71",
  size: "176565",
  mp4: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/100w.mp4",
  mp4_size: "10687",
  webp: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/100w.webp",
  webp_size: "165750"
  },
  downsized_small: {
  width: "448",
  height: "316",
  mp4: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy-downsized-small.mp4",
  mp4_size: "139008"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200w_d.gif",
  width: "200",
  height: "141",
  size: "62694",
  webp: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200w_d.webp",
  webp_size: "35134"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy.gif",
  width: "500",
  height: "353",
  size: "3353113"
  },
  original: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy.gif",
  width: "500",
  height: "353",
  size: "3353113",
  frames: "84",
  mp4: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy.mp4",
  mp4_size: "125379",
  webp: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy.webp",
  webp_size: "2773574"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200.gif",
  width: "283",
  height: "200",
  size: "1360953",
  mp4: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200.mp4",
  mp4_size: "44555",
  webp: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/200.webp",
  webp_size: "887382"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy-loop.mp4",
  mp4_size: "699533"
  },
  original_mp4: {
  width: "480",
  height: "338",
  mp4: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy.mp4",
  mp4_size: "125379"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy-preview.gif",
  width: "150",
  height: "106",
  size: "46999"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/xT0BKqhdlKCxCNsVTq/480w_s.jpg",
  width: "480",
  height: "339"
  }
  },
  title: "happy birthday cake GIF by Birthday Bot",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xT0BKqhdlKCxCNsVTq&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xT0BKqhdlKCxCNsVTq&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xT0BKqhdlKCxCNsVTq&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "26BGJOJ1Ojou7vJte",
  slug: "cbc-yes-good-26BGJOJ1Ojou7vJte",
  url: "https://giphy.com/gifs/cbc-yes-good-26BGJOJ1Ojou7vJte",
  bitly_gif_url: "https://gph.is/2lPFVNr",
  bitly_url: "https://gph.is/2lPFVNr",
  embed_url: "https://giphy.com/embed/26BGJOJ1Ojou7vJte",
  username: "cbc",
  source: "https://www.cbc.ca/dragonsden/",
  rating: "g",
  content_url: "",
  source_tld: "www.cbc.ca",
  source_post_url: "https://www.cbc.ca/dragonsden/",
  is_sticker: 0,
  import_datetime: "2017-02-27 22:48:51",
  trending_datetime: "2018-12-21 13:30:01",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/cbc/IYEfAcyM0C0l.gif",
  banner_url: "https://media2.giphy.com/headers/cbc/WiVMrqazj148.png",
  banner_image: "https://media2.giphy.com/headers/cbc/WiVMrqazj148.png",
  profile_url: "https://giphy.com/cbc/",
  username: "cbc",
  display_name: "CBC",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200_s.gif",
  width: "356",
  height: "200",
  size: "43731"
  },
  original_still: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy_s.gif",
  width: "500",
  height: "281",
  size: "76016"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200w.gif",
  width: "200",
  height: "112",
  size: "194050",
  mp4: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200w.mp4",
  mp4_size: "16137",
  webp: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200w.webp",
  webp_size: "66088"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/100_s.gif",
  width: "178",
  height: "100",
  size: "13977"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200_d.gif",
  width: "356",
  height: "200",
  size: "240871",
  webp: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200_d.webp",
  webp_size: "58936"
  },
  preview: {
  width: "410",
  height: "228",
  mp4: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy-preview.mp4",
  mp4_size: "46988"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/100.gif",
  width: "178",
  height: "100",
  size: "160293",
  mp4: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/100.mp4",
  mp4_size: "15286",
  webp: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/100.webp",
  webp_size: "57702"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy-downsized_s.gif",
  width: "500",
  height: "281",
  size: "76016"
  },
  downsized: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy-downsized.gif",
  width: "500",
  height: "281",
  size: "1047655"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy.gif",
  width: "500",
  height: "281",
  size: "1047655"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/100w_s.gif",
  width: "100",
  height: "56",
  size: "5579"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy-preview.webp",
  width: "206",
  height: "116",
  size: "49152"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200w_s.gif",
  width: "200",
  height: "112",
  size: "16728"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/100w.gif",
  width: "100",
  height: "56",
  size: "55318",
  mp4: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/100w.mp4",
  mp4_size: "7905",
  webp: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/100w.webp",
  webp_size: "27214"
  },
  downsized_small: {
  width: "500",
  height: "280",
  mp4: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy-downsized-small.mp4",
  mp4_size: "73778"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200w_d.gif",
  width: "200",
  height: "112",
  size: "89138",
  webp: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200w_d.webp",
  webp_size: "26546"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy.gif",
  width: "500",
  height: "281",
  size: "1047655"
  },
  original: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy.gif",
  width: "500",
  height: "281",
  size: "1047655",
  frames: "15",
  mp4: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy.mp4",
  mp4_size: "61308",
  webp: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy.webp",
  webp_size: "245718",
  hash: "17fff5cd6f6f61fa98e8d02f16bf52eb"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200.gif",
  width: "356",
  height: "200",
  size: "547667",
  mp4: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200.mp4",
  mp4_size: "37721",
  webp: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/200.webp",
  webp_size: "144988"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy-loop.mp4",
  mp4_size: "603654"
  },
  original_mp4: {
  width: "480",
  height: "268",
  mp4: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy.mp4",
  mp4_size: "61308"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/26BGJOJ1Ojou7vJte/giphy-preview.gif",
  width: "125",
  height: "70",
  size: "48484"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/26BGJOJ1Ojou7vJte/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "dragons den yes GIF by CBC",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26BGJOJ1Ojou7vJte&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26BGJOJ1Ojou7vJte&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26BGJOJ1Ojou7vJte&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xT1XGEyW6Ra9TMA1vW",
  slug: "originals-reaction-xT1XGEyW6Ra9TMA1vW",
  url: "https://giphy.com/gifs/originals-reaction-xT1XGEyW6Ra9TMA1vW",
  bitly_gif_url: "https://gph.is/1NUYKoB",
  bitly_url: "https://gph.is/1NUYKoB",
  embed_url: "https://giphy.com/embed/xT1XGEyW6Ra9TMA1vW",
  username: "studiosoriginals",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-04-28 00:33:12",
  trending_datetime: "2018-12-21 13:15:02",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/studiosoriginals/j3JBzK5twdv8.jpg",
  banner_url: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  banner_image: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  profile_url: "https://giphy.com/studiosoriginals/",
  username: "studiosoriginals",
  display_name: "GIPHY Studios Originals",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200_s.gif",
  width: "200",
  height: "200"
  },
  original_still: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy_s.gif",
  width: "640",
  height: "640"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200w.gif",
  width: "200",
  height: "200",
  size: "56128",
  mp4: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200w.mp4",
  mp4_size: "17982",
  webp: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200w.webp",
  webp_size: "67702"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/100_s.gif",
  width: "100",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200_d.gif",
  width: "200",
  height: "200",
  size: "23800",
  webp: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200_d.webp",
  webp_size: "26010"
  },
  preview: {
  width: "446",
  height: "446",
  mp4: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy-preview.mp4",
  mp4_size: "45761"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/100.gif",
  width: "100",
  height: "100",
  size: "19611",
  mp4: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/100.mp4",
  mp4_size: "6512",
  webp: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/100.webp",
  webp_size: "27716"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy-downsized_s.gif",
  width: "640",
  height: "640",
  size: "49236"
  },
  downsized: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy-downsized.gif",
  width: "640",
  height: "640",
  size: "544189"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy.gif",
  width: "640",
  height: "640",
  size: "544189"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/100w_s.gif",
  width: "100",
  height: "100"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy-preview.webp",
  width: "253",
  height: "253",
  size: "48274"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200w_s.gif",
  width: "200",
  height: "200"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/100w.gif",
  width: "100",
  height: "100",
  size: "19611",
  mp4: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/100w.mp4",
  mp4_size: "6512",
  webp: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/100w.webp",
  webp_size: "27716"
  },
  downsized_small: {
  width: "640",
  height: "640",
  mp4: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy-downsized-small.mp4",
  mp4_size: "102726"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200w_d.gif",
  width: "200",
  height: "200",
  size: "23800",
  webp: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200w_d.webp",
  webp_size: "26010"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy.gif",
  width: "640",
  height: "640",
  size: "544189"
  },
  original: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy.gif",
  width: "640",
  height: "640",
  size: "544189",
  frames: "35",
  mp4: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy.mp4",
  mp4_size: "64197",
  webp: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy.webp",
  webp_size: "342846"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200.gif",
  width: "200",
  height: "200",
  size: "56128",
  mp4: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200.mp4",
  mp4_size: "17982",
  webp: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/200.webp",
  webp_size: "67702"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy-loop.mp4",
  mp4_size: "599587"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy.mp4",
  mp4_size: "64197"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/giphy-preview.gif",
  width: "258",
  height: "258",
  size: "49404"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/xT1XGEyW6Ra9TMA1vW/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "bad person no GIF by GIPHY Studios Originals",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xT1XGEyW6Ra9TMA1vW&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xT1XGEyW6Ra9TMA1vW&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xT1XGEyW6Ra9TMA1vW&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "1KoN1DMBnCMWk",
  slug: "reaction-1KoN1DMBnCMWk",
  url: "https://giphy.com/gifs/reaction-1KoN1DMBnCMWk",
  bitly_gif_url: "https://gph.is/1Kgd3pC",
  bitly_url: "https://gph.is/1Kgd3pC",
  embed_url: "https://giphy.com/embed/1KoN1DMBnCMWk",
  username: "sheepfilms",
  source: "https://sheepfilms.co.uk/2015/06/10/shifty-looking-cat/",
  rating: "g",
  content_url: "",
  source_tld: "sheepfilms.co.uk",
  source_post_url: "https://sheepfilms.co.uk/2015/06/10/shifty-looking-cat/",
  is_sticker: 0,
  import_datetime: "2015-05-18 17:39:28",
  trending_datetime: "2018-12-21 13:00:02",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/sheepfilms/IRZqFGsPKx8f.png",
  banner_url: "",
  profile_url: "https://giphy.com/sheepfilms/",
  username: "sheepfilms",
  display_name: "sheepfilms",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200_s.gif",
  width: "320",
  height: "200"
  },
  original_still: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy_s.gif",
  width: "400",
  height: "250"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200w.gif",
  width: "200",
  height: "125",
  size: "1136576",
  mp4: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200w.mp4",
  mp4_size: "50125",
  webp: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200w.webp",
  webp_size: "357736"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/100_s.gif",
  width: "160",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200_d.gif",
  width: "320",
  height: "200",
  size: "330270",
  webp: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200_d.webp",
  webp_size: "97402"
  },
  preview: {
  width: "196",
  height: "122",
  mp4: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy-preview.mp4",
  mp4_size: "40533"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/100.gif",
  width: "160",
  height: "100",
  size: "761477",
  mp4: "https://media3.giphy.com/media/1KoN1DMBnCMWk/100.mp4",
  mp4_size: "33991",
  webp: "https://media3.giphy.com/media/1KoN1DMBnCMWk/100.webp",
  webp_size: "260216"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy-downsized_s.gif",
  width: "250",
  height: "156",
  size: "32820"
  },
  downsized: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy-downsized.gif",
  width: "250",
  height: "156",
  size: "1683687"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy.gif",
  width: "400",
  height: "250",
  size: "2078528"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/100w_s.gif",
  width: "100",
  height: "63"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy-preview.webp",
  width: "152",
  height: "95",
  size: "49762"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200w_s.gif",
  width: "200",
  height: "125"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/100w.gif",
  width: "100",
  height: "63",
  size: "331229",
  mp4: "https://media3.giphy.com/media/1KoN1DMBnCMWk/100w.mp4",
  mp4_size: "18278",
  webp: "https://media3.giphy.com/media/1KoN1DMBnCMWk/100w.webp",
  webp_size: "123294"
  },
  downsized_small: {
  width: "275",
  height: "172",
  mp4: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy-downsized-small.mp4",
  mp4_size: "125999"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200w_d.gif",
  width: "200",
  height: "125",
  size: "135404",
  webp: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200w_d.webp",
  webp_size: "43130"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy.gif",
  width: "400",
  height: "250",
  size: "2078528"
  },
  original: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy.gif",
  width: "400",
  height: "250",
  size: "2078528",
  frames: "50",
  mp4: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy.mp4",
  mp4_size: "259055",
  webp: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy.webp",
  webp_size: "1426202"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200.gif",
  width: "320",
  height: "200",
  size: "2739377",
  mp4: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200.mp4",
  mp4_size: "101077",
  webp: "https://media3.giphy.com/media/1KoN1DMBnCMWk/200.webp",
  webp_size: "799476"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy-loop.mp4",
  mp4_size: "3628638"
  },
  original_mp4: {
  width: "480",
  height: "300",
  mp4: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy.mp4",
  mp4_size: "259055"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/1KoN1DMBnCMWk/giphy-preview.gif",
  width: "123",
  height: "77",
  size: "48422"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/1KoN1DMBnCMWk/480w_s.jpg",
  width: "480",
  height: "300"
  }
  },
  title: "nervous cat GIF by sheepfilms",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1KoN1DMBnCMWk&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1KoN1DMBnCMWk&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1KoN1DMBnCMWk&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3o7buiMZ5CbJ4imGnm",
  slug: "madelainepetsch-madelaine-petsch-3o7buiMZ5CbJ4imGnm",
  url: "https://giphy.com/gifs/madelainepetsch-madelaine-petsch-3o7buiMZ5CbJ4imGnm",
  bitly_gif_url: "https://gph.is/2mOz3Ag",
  bitly_url: "https://gph.is/2mOz3Ag",
  embed_url: "https://giphy.com/embed/3o7buiMZ5CbJ4imGnm",
  username: "madelainepetsch",
  source: "",
  rating: "pg",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-03-17 00:27:36",
  trending_datetime: "2018-12-21 12:45:01",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/madelainepetsch/jN0nANVBjYco.jpg",
  banner_url: "https://media1.giphy.com/headers/madelainepetsch/wPQG3bc326j2.jpg",
  banner_image: "https://media1.giphy.com/headers/madelainepetsch/wPQG3bc326j2.jpg",
  profile_url: "https://giphy.com/madelainepetsch/",
  username: "madelainepetsch",
  display_name: "Madelaine Petsch",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200_s.gif",
  width: "356",
  height: "200",
  size: "15944"
  },
  original_still: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy_s.gif",
  width: "480",
  height: "270",
  size: "27969"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200w.gif",
  width: "200",
  height: "113",
  size: "191014",
  mp4: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200w.mp4",
  mp4_size: "25612",
  webp: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200w.webp",
  webp_size: "69656"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/100_s.gif",
  width: "178",
  height: "100",
  size: "5072"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200_d.gif",
  width: "356",
  height: "200",
  size: "115955",
  webp: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200_d.webp",
  webp_size: "35102"
  },
  preview: {
  width: "330",
  height: "184",
  mp4: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy-preview.mp4",
  mp4_size: "24090"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/100.gif",
  width: "178",
  height: "100",
  size: "159857",
  mp4: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/100.mp4",
  mp4_size: "23099",
  webp: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/100.webp",
  webp_size: "59598"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "27969"
  },
  downsized: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy-downsized.gif",
  width: "480",
  height: "270",
  size: "987180"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy.gif",
  width: "480",
  height: "270",
  size: "987180"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/100w_s.gif",
  width: "100",
  height: "57",
  size: "2259"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy-preview.webp",
  width: "242",
  height: "136",
  size: "49074"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200w_s.gif",
  width: "200",
  height: "113",
  size: "5889"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/100w.gif",
  width: "100",
  height: "57",
  size: "67494",
  mp4: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/100w.mp4",
  mp4_size: "10758",
  webp: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/100w.webp",
  webp_size: "29970"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy-downsized-small.mp4",
  mp4_size: "104933"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200w_d.gif",
  width: "200",
  height: "113",
  size: "40280",
  webp: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200w_d.webp",
  webp_size: "15578"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy.gif",
  width: "480",
  height: "270",
  size: "987180"
  },
  original: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy.gif",
  width: "480",
  height: "270",
  size: "987180",
  frames: "27",
  mp4: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy.mp4",
  mp4_size: "104933",
  webp: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy.webp",
  webp_size: "252886",
  hash: "e81dd894ae73065df24e343c82c40ab7"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200.gif",
  width: "356",
  height: "200",
  size: "535907",
  mp4: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200.mp4",
  mp4_size: "59488",
  webp: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/200.webp",
  webp_size: "147622"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy-loop.mp4",
  mp4_size: "1942690"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy.mp4",
  mp4_size: "104933"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/3o7buiMZ5CbJ4imGnm/giphy-preview.gif",
  width: "188",
  height: "106",
  size: "47814"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/3o7buiMZ5CbJ4imGnm/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "i don't know shrug GIF by Madelaine Petsch",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7buiMZ5CbJ4imGnm&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7buiMZ5CbJ4imGnm&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7buiMZ5CbJ4imGnm&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xkmNi280NkrcY",
  slug: "realitytvgifs-reality-tv-xkmNi280NkrcY",
  url: "https://giphy.com/gifs/realitytvgifs-reality-tv-xkmNi280NkrcY",
  bitly_gif_url: "https://gph.is/16PPvC8",
  bitly_url: "https://gph.is/16PPvC8",
  embed_url: "https://giphy.com/embed/xkmNi280NkrcY",
  username: "realitytvgifs",
  source: "https://realitytvgifs.tumblr.com/post/50661954773/the-queen-of-this-blog",
  rating: "g",
  content_url: "",
  source_tld: "realitytvgifs.tumblr.com",
  source_post_url: "https://realitytvgifs.tumblr.com/post/50661954773/the-queen-of-this-blog",
  is_sticker: 0,
  import_datetime: "2013-05-17 17:27:43",
  trending_datetime: "2018-12-21 12:30:02",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/realitytvgifs/SlLXSKWVGTWj.jpg",
  banner_url: "",
  profile_url: "https://giphy.com/realitytvgifs/",
  username: "realitytvgifs",
  display_name: "T. Kyle",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/200_s.gif",
  width: "200",
  height: "200"
  },
  original_still: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy_s.gif",
  width: "203",
  height: "203"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/200w.gif",
  width: "200",
  height: "200",
  size: "949404",
  mp4: "https://media3.giphy.com/media/xkmNi280NkrcY/200w.mp4",
  mp4_size: "74403",
  webp: "https://media3.giphy.com/media/xkmNi280NkrcY/200w.webp",
  webp_size: "511242"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/100_s.gif",
  width: "100",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/200_d.gif",
  width: "200",
  height: "200",
  size: "123466",
  webp: "https://media3.giphy.com/media/xkmNi280NkrcY/200_d.webp",
  webp_size: "64566"
  },
  preview: {
  width: "202",
  height: "202",
  mp4: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy-preview.mp4",
  mp4_size: "47138"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/100.gif",
  width: "100",
  height: "100",
  size: "261776",
  mp4: "https://media3.giphy.com/media/xkmNi280NkrcY/100.mp4",
  mp4_size: "29646",
  webp: "https://media3.giphy.com/media/xkmNi280NkrcY/100.webp",
  webp_size: "173930"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy_s.gif",
  width: "203",
  height: "203"
  },
  downsized: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy.gif",
  width: "203",
  height: "203",
  size: "1032826"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy.gif",
  width: "203",
  height: "203",
  size: "1032826"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/100w_s.gif",
  width: "100",
  height: "100"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy-preview.webp",
  width: "128",
  height: "128",
  size: "46646"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/200w_s.gif",
  width: "200",
  height: "200"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/100w.gif",
  width: "100",
  height: "100",
  size: "261776",
  mp4: "https://media3.giphy.com/media/xkmNi280NkrcY/100w.mp4",
  mp4_size: "29646",
  webp: "https://media3.giphy.com/media/xkmNi280NkrcY/100w.webp",
  webp_size: "173930"
  },
  downsized_small: {
  width: "202",
  height: "202",
  mp4: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy-downsized-small.mp4",
  mp4_size: "90854"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/200w_d.gif",
  width: "200",
  height: "200",
  size: "123466",
  webp: "https://media3.giphy.com/media/xkmNi280NkrcY/200w_d.webp",
  webp_size: "64566"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy.gif",
  width: "203",
  height: "203",
  size: "1032826"
  },
  original: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy.gif",
  width: "203",
  height: "203",
  size: "1032826",
  frames: "47",
  mp4: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy.mp4",
  mp4_size: "351383",
  webp: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy.webp",
  webp_size: "530342"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/200.gif",
  width: "200",
  height: "200",
  size: "949404",
  mp4: "https://media3.giphy.com/media/xkmNi280NkrcY/200.mp4",
  mp4_size: "74403",
  webp: "https://media3.giphy.com/media/xkmNi280NkrcY/200.webp",
  webp_size: "511242"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy-loop.mp4",
  mp4_size: "1537349"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy.mp4",
  mp4_size: "351383"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/xkmNi280NkrcY/giphy-preview.gif",
  width: "94",
  height: "94",
  size: "48345"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/xkmNi280NkrcY/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "stressed tiffany pollard GIF by T. Kyle",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xkmNi280NkrcY&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xkmNi280NkrcY&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xkmNi280NkrcY&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l49JTFG87NOfY5ww8",
  slug: "studiosoriginals-valentine-valentines-l49JTFG87NOfY5ww8",
  url: "https://giphy.com/gifs/studiosoriginals-valentine-valentines-l49JTFG87NOfY5ww8",
  bitly_gif_url: "https://gph.is/2FF0gyA",
  bitly_url: "https://gph.is/2FF0gyA",
  embed_url: "https://giphy.com/embed/l49JTFG87NOfY5ww8",
  username: "studiosoriginals",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-01-15 20:40:03",
  trending_datetime: "2018-12-21 12:15:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/studiosoriginals/j3JBzK5twdv8.jpg",
  banner_url: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  banner_image: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  profile_url: "https://giphy.com/studiosoriginals/",
  username: "studiosoriginals",
  display_name: "GIPHY Studios Originals",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200_s.gif",
  width: "300",
  height: "200",
  size: "35228"
  },
  original_still: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy_s.gif",
  width: "480",
  height: "320",
  size: "85681"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200w.gif",
  width: "200",
  height: "133",
  size: "622815",
  mp4: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200w.mp4",
  mp4_size: "92659",
  webp: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200w.webp",
  webp_size: "682414"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/100_s.gif",
  width: "150",
  height: "100",
  size: "11891"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200_d.gif",
  width: "300",
  height: "200",
  size: "187934",
  webp: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200_d.webp",
  webp_size: "149706"
  },
  preview: {
  width: "192",
  height: "128",
  mp4: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy-preview.mp4",
  mp4_size: "27733"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/100.gif",
  width: "150",
  height: "100",
  size: "406473",
  mp4: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/100.mp4",
  mp4_size: "46397",
  webp: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/100.webp",
  webp_size: "426154"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy-downsized_s.gif",
  width: "328",
  height: "219",
  size: "41569"
  },
  downsized: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy-downsized.gif",
  width: "328",
  height: "219",
  size: "1837930"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy.gif",
  width: "480",
  height: "320",
  size: "4197921"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/100w_s.gif",
  width: "100",
  height: "67",
  size: "6920"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy-preview.webp",
  width: "114",
  height: "76",
  size: "47858"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200w_s.gif",
  width: "200",
  height: "133",
  size: "17825"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/100w.gif",
  width: "100",
  height: "67",
  size: "172641",
  mp4: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/100w.mp4",
  mp4_size: "20526",
  webp: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/100w.webp",
  webp_size: "213554"
  },
  downsized_small: {
  width: "192",
  height: "128",
  mp4: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy-downsized-small.mp4",
  mp4_size: "28823"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200w_d.gif",
  width: "200",
  height: "133",
  size: "82033",
  webp: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200w_d.webp",
  webp_size: "72678"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy.gif",
  width: "480",
  height: "320",
  size: "4197921"
  },
  original: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy.gif",
  width: "480",
  height: "320",
  size: "4197921",
  frames: "57",
  mp4: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy.mp4",
  mp4_size: "1548101",
  webp: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy.webp",
  webp_size: "3289722",
  hash: "22ab6f31ab5a8aeff8f7b04c929598d6"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200.gif",
  width: "300",
  height: "200",
  size: "1522656",
  mp4: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200.mp4",
  mp4_size: "271160",
  webp: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/200.webp",
  webp_size: "1414542"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy-loop.mp4",
  mp4_size: "13612186"
  },
  original_mp4: {
  width: "480",
  height: "320",
  mp4: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy.mp4",
  mp4_size: "1548101"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/l49JTFG87NOfY5ww8/giphy-preview.gif",
  width: "134",
  height: "89",
  size: "44998"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/l49JTFG87NOfY5ww8/480w_s.jpg",
  width: "480",
  height: "320"
  }
  },
  title: "i love you valentine GIF by GIPHY Studios Originals",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l49JTFG87NOfY5ww8&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l49JTFG87NOfY5ww8&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l49JTFG87NOfY5ww8&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3o7buimQCVB4ZOlwpq",
  slug: "iamrachelcrow-rachel-crow-3o7buimQCVB4ZOlwpq",
  url: "https://giphy.com/gifs/iamrachelcrow-rachel-crow-3o7buimQCVB4ZOlwpq",
  bitly_gif_url: "https://gph.is/2qYU8Zg",
  bitly_url: "https://gph.is/2qYU8Zg",
  embed_url: "https://giphy.com/embed/3o7buimQCVB4ZOlwpq",
  username: "iamrachelcrow",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-06-05 19:40:55",
  trending_datetime: "2018-12-21 12:00:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/iamrachelcrow/YG3BOj0iqlWy.png",
  banner_url: "",
  profile_url: "https://giphy.com/iamrachelcrow/",
  username: "iamrachelcrow",
  display_name: "Rachel Crow",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200_s.gif",
  width: "356",
  height: "200",
  size: "25380"
  },
  original_still: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy_s.gif",
  width: "480",
  height: "270",
  size: "43481"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200w.gif",
  width: "200",
  height: "113",
  size: "380142",
  mp4: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200w.mp4",
  mp4_size: "58320",
  webp: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200w.webp",
  webp_size: "143914"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/100_s.gif",
  width: "178",
  height: "100",
  size: "8025"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200_d.gif",
  width: "356",
  height: "200",
  size: "140808",
  webp: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200_d.webp",
  webp_size: "54658"
  },
  preview: {
  width: "213",
  height: "120",
  mp4: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy-preview.mp4",
  mp4_size: "32847"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/100.gif",
  width: "178",
  height: "100",
  size: "317260",
  mp4: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/100.mp4",
  mp4_size: "80577",
  webp: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/100.webp",
  webp_size: "124764"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "43481"
  },
  downsized: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy-downsized.gif",
  width: "480",
  height: "270",
  size: "1740701"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy.gif",
  width: "480",
  height: "270",
  size: "1740701"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/100w_s.gif",
  width: "100",
  height: "57",
  size: "3518"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy-preview.webp",
  width: "229",
  height: "129",
  size: "49372"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200w_s.gif",
  width: "200",
  height: "113",
  size: "9600"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/100w.gif",
  width: "100",
  height: "57",
  size: "134020",
  mp4: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/100w.mp4",
  mp4_size: "22952",
  webp: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/100w.webp",
  webp_size: "58708"
  },
  downsized_small: {
  width: "426",
  height: "240",
  mp4: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy-downsized-small.mp4",
  mp4_size: "100660"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200w_d.gif",
  width: "200",
  height: "113",
  size: "50740",
  webp: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200w_d.webp",
  webp_size: "24432"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy.gif",
  width: "480",
  height: "270",
  size: "1740701"
  },
  original: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy.gif",
  width: "480",
  height: "270",
  size: "1740701",
  frames: "41",
  mp4: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy.mp4",
  mp4_size: "250871",
  webp: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy.webp",
  webp_size: "467494",
  hash: "6ea21d6d140db7d3ea37e999537dca98"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200.gif",
  width: "356",
  height: "200",
  size: "1019855",
  mp4: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200.mp4",
  mp4_size: "138805",
  webp: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/200.webp",
  webp_size: "297436"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy-loop.mp4",
  mp4_size: "2292234"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy.mp4",
  mp4_size: "250871"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/3o7buimQCVB4ZOlwpq/giphy-preview.gif",
  width: "171",
  height: "96",
  size: "48678"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/3o7buimQCVB4ZOlwpq/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "blow kiss GIF by Rachel Crow",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7buimQCVB4ZOlwpq&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7buimQCVB4ZOlwpq&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7buimQCVB4ZOlwpq&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l0Exk3lvWTWWC1ezS",
  slug: "studiosoriginals-l0Exk3lvWTWWC1ezS",
  url: "https://giphy.com/gifs/studiosoriginals-l0Exk3lvWTWWC1ezS",
  bitly_gif_url: "https://gph.is/2kQz8EU",
  bitly_url: "https://gph.is/2kQz8EU",
  embed_url: "https://giphy.com/embed/l0Exk3lvWTWWC1ezS",
  username: "studiosoriginals",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-02-08 01:30:09",
  trending_datetime: "2018-12-21 11:45:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/studiosoriginals/j3JBzK5twdv8.jpg",
  banner_url: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  banner_image: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  profile_url: "https://giphy.com/studiosoriginals/",
  username: "studiosoriginals",
  display_name: "GIPHY Studios Originals",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200_s.gif",
  width: "300",
  height: "200",
  size: "24944"
  },
  original_still: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy_s.gif",
  width: "480",
  height: "320",
  size: "55338"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200w.gif",
  width: "200",
  height: "133",
  size: "2829241",
  mp4: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200w.mp4",
  mp4_size: "186152",
  webp: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200w.webp",
  webp_size: "3199158"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/100_s.gif",
  width: "150",
  height: "100",
  size: "8411"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200_d.gif",
  width: "300",
  height: "200",
  size: "145977",
  webp: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200_d.webp",
  webp_size: "148252"
  },
  preview: {
  width: "230",
  height: "152",
  mp4: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy-preview.mp4",
  mp4_size: "26569"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/100.gif",
  width: "150",
  height: "100",
  size: "1819668",
  mp4: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/100.mp4",
  mp4_size: "103599",
  webp: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/100.webp",
  webp_size: "1996522"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy-downsized_s.gif",
  width: "250",
  height: "166",
  size: "20228"
  },
  downsized: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy-downsized.gif",
  width: "250",
  height: "166",
  size: "975877"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy-downsized-large.gif",
  width: "480",
  height: "320",
  size: "4954289"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/100w_s.gif",
  width: "100",
  height: "67",
  size: "4631"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy-preview.webp",
  width: "146",
  height: "97",
  size: "49650"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200w_s.gif",
  width: "200",
  height: "133",
  size: "11974"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/100w.gif",
  width: "100",
  height: "67",
  size: "812135",
  mp4: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/100w.mp4",
  mp4_size: "49076",
  webp: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/100w.webp",
  webp_size: "924984"
  },
  downsized_small: {
  width: "192",
  height: "128",
  mp4: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy-downsized-small.mp4",
  mp4_size: "177462"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200w_d.gif",
  width: "200",
  height: "133",
  size: "68001",
  webp: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200w_d.webp",
  webp_size: "70846"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy-downsized-medium.gif",
  width: "480",
  height: "320",
  size: "4386950"
  },
  original: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy.gif",
  width: "480",
  height: "320",
  size: "14472627",
  frames: "271",
  mp4: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy.mp4",
  mp4_size: "1598202",
  webp: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy.webp",
  webp_size: "15512294",
  hash: "5cd0d4bdbabbd3b81fd69b35bf8aac4f"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200.gif",
  width: "300",
  height: "200",
  size: "6214726",
  mp4: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200.mp4",
  mp4_size: "389179",
  webp: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/200.webp",
  webp_size: "6718672"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy-loop.mp4",
  mp4_size: "2922947"
  },
  original_mp4: {
  width: "480",
  height: "320",
  mp4: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy.mp4",
  mp4_size: "1598202"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/giphy-preview.gif",
  width: "143",
  height: "95",
  size: "49465"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/l0Exk3lvWTWWC1ezS/480w_s.jpg",
  width: "480",
  height: "320"
  }
  },
  title: "magical cheer up GIF by GIPHY Studios Originals",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0Exk3lvWTWWC1ezS&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0Exk3lvWTWWC1ezS&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0Exk3lvWTWWC1ezS&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l0Iy2FVIiN0bAgRq0",
  slug: "hayleykiyoko-hayley-kiyoko-l0Iy2FVIiN0bAgRq0",
  url: "https://giphy.com/gifs/hayleykiyoko-hayley-kiyoko-l0Iy2FVIiN0bAgRq0",
  bitly_gif_url: "https://gph.is/2ndn3ZA",
  bitly_url: "https://gph.is/2ndn3ZA",
  embed_url: "https://giphy.com/embed/l0Iy2FVIiN0bAgRq0",
  username: "hayleykiyoko",
  source: "https://www.hayleykiyokoofficial.com",
  rating: "g",
  content_url: "",
  source_tld: "www.hayleykiyokoofficial.com",
  source_post_url: "https://www.hayleykiyokoofficial.com",
  is_sticker: 0,
  import_datetime: "2017-03-24 04:08:10",
  trending_datetime: "2018-12-21 11:30:02",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/hayleykiyoko/L0fll1KcN3hO.jpg",
  banner_url: "https://media0.giphy.com/headers/hayleykiyoko/dO7p6kHJxLgt.jpg",
  banner_image: "https://media0.giphy.com/headers/hayleykiyoko/dO7p6kHJxLgt.jpg",
  profile_url: "https://giphy.com/hayleykiyoko/",
  username: "hayleykiyoko",
  display_name: "Hayley Kiyoko",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200_s.gif",
  width: "356",
  height: "200",
  size: "42745"
  },
  original_still: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy_s.gif",
  width: "480",
  height: "270",
  size: "78810"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200w.gif",
  width: "200",
  height: "113",
  size: "429702",
  mp4: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200w.mp4",
  mp4_size: "29697",
  webp: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200w.webp",
  webp_size: "115978"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/100_s.gif",
  width: "178",
  height: "100",
  size: "11321"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200_d.gif",
  width: "356",
  height: "200",
  size: "246909",
  webp: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200_d.webp",
  webp_size: "48508"
  },
  preview: {
  width: "266",
  height: "148",
  mp4: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy-preview.mp4",
  mp4_size: "21816"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/100.gif",
  width: "178",
  height: "100",
  size: "346968",
  mp4: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/100.mp4",
  mp4_size: "28276",
  webp: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/100.webp",
  webp_size: "96490"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy-downsized_s.gif",
  width: "250",
  height: "140",
  size: "21345"
  },
  downsized: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy-downsized.gif",
  width: "250",
  height: "140",
  size: "680749"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy.gif",
  width: "480",
  height: "270",
  size: "2946440"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/100w_s.gif",
  width: "100",
  height: "57",
  size: "4242"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy-preview.webp",
  width: "256",
  height: "144",
  size: "47694"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200w_s.gif",
  width: "200",
  height: "113",
  size: "14053"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/100w.gif",
  width: "100",
  height: "57",
  size: "123276",
  mp4: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/100w.mp4",
  mp4_size: "12499",
  webp: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/100w.webp",
  webp_size: "43106"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy-downsized-small.mp4",
  mp4_size: "161867"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200w_d.gif",
  width: "200",
  height: "113",
  size: "76955",
  webp: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200w_d.webp",
  webp_size: "18990"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy.gif",
  width: "480",
  height: "270",
  size: "2946440"
  },
  original: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy.gif",
  width: "480",
  height: "270",
  size: "2946440",
  frames: "38",
  mp4: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy.mp4",
  mp4_size: "161867",
  webp: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy.webp",
  webp_size: "517742",
  hash: "b8204582589f018fd0cdd94eee4ead1f"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200.gif",
  width: "356",
  height: "200",
  size: "1430236",
  mp4: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200.mp4",
  mp4_size: "79936",
  webp: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/200.webp",
  webp_size: "274868"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy-loop.mp4",
  mp4_size: "2141758"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy.mp4",
  mp4_size: "161867"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/l0Iy2FVIiN0bAgRq0/giphy-preview.gif",
  width: "135",
  height: "76",
  size: "43042"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/l0Iy2FVIiN0bAgRq0/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "flirty GIF by Hayley Kiyoko",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0Iy2FVIiN0bAgRq0&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0Iy2FVIiN0bAgRq0&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0Iy2FVIiN0bAgRq0&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "26xBP13FAQL2mhc1W",
  slug: "schittscreek-pop-schittscreek-poptv-eugunelevy-26xBP13FAQL2mhc1W",
  url: "https://giphy.com/gifs/schittscreek-pop-schittscreek-poptv-eugunelevy-26xBP13FAQL2mhc1W",
  bitly_gif_url: "https://gph.is/2jyiGK3",
  bitly_url: "https://gph.is/2jyiGK3",
  embed_url: "https://giphy.com/embed/26xBP13FAQL2mhc1W",
  username: "schittscreek",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-02-02 01:56:39",
  trending_datetime: "2018-12-21 11:15:01",
  user: {
  avatar_url: "https://media3.giphy.com/channel_assets/schitts-creek/CpjFxteIg3e2.jpg",
  banner_url: "https://media3.giphy.com/channel_assets/schittscreek/gfmaIu9g7D1g.png",
  banner_image: "https://media3.giphy.com/channel_assets/schittscreek/gfmaIu9g7D1g.png",
  profile_url: "https://giphy.com/schittscreek/",
  username: "schittscreek",
  display_name: "Schitt's Creek",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200_s.gif",
  width: "200",
  height: "200",
  size: "23086"
  },
  original_still: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy_s.gif",
  width: "400",
  height: "400",
  size: "64528"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200w.gif",
  width: "200",
  height: "200",
  size: "825111",
  mp4: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200w.mp4",
  mp4_size: "20552",
  webp: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200w.webp",
  webp_size: "352930"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/100_s.gif",
  width: "100",
  height: "100",
  size: "7523"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200_d.gif",
  width: "200",
  height: "200",
  size: "140812",
  webp: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200_d.webp",
  webp_size: "42090"
  },
  preview: {
  width: "280",
  height: "280",
  mp4: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy-preview.mp4",
  mp4_size: "23133"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/100.gif",
  width: "100",
  height: "100",
  size: "230847",
  mp4: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/100.mp4",
  mp4_size: "9166",
  webp: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/100.webp",
  webp_size: "137376"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy-downsized_s.gif",
  width: "250",
  height: "250",
  size: "33381"
  },
  downsized: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy-downsized.gif",
  width: "250",
  height: "250",
  size: "1220783"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy.gif",
  width: "400",
  height: "400",
  size: "2603024"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/100w_s.gif",
  width: "100",
  height: "100",
  size: "7523"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy-preview.webp",
  width: "160",
  height: "160",
  size: "47156"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200w_s.gif",
  width: "200",
  height: "200",
  size: "23086"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/100w.gif",
  width: "100",
  height: "100",
  size: "230847",
  mp4: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/100w.mp4",
  mp4_size: "9166",
  webp: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/100w.webp",
  webp_size: "137376"
  },
  downsized_small: {
  width: "400",
  height: "400",
  mp4: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy-downsized-small.mp4",
  mp4_size: "64468"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200w_d.gif",
  width: "200",
  height: "200",
  size: "140812",
  webp: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200w_d.webp",
  webp_size: "42090"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy.gif",
  width: "400",
  height: "400",
  size: "2603024"
  },
  original: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy.gif",
  width: "400",
  height: "400",
  size: "2603024",
  frames: "54",
  mp4: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy.mp4",
  mp4_size: "63880",
  webp: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy.webp",
  webp_size: "1079802",
  hash: "72fc6f92167360f8c13bf083a1345609"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200.gif",
  width: "200",
  height: "200",
  size: "825111",
  mp4: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200.mp4",
  mp4_size: "20552",
  webp: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/200.webp",
  webp_size: "352930"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy-loop.mp4",
  mp4_size: "667485"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy.mp4",
  mp4_size: "63880"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/26xBP13FAQL2mhc1W/giphy-preview.gif",
  width: "106",
  height: "106",
  size: "49867"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/26xBP13FAQL2mhc1W/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "got it GIF by Schitt's Creek",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26xBP13FAQL2mhc1W&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26xBP13FAQL2mhc1W&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26xBP13FAQL2mhc1W&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "26ufc0OsEUTWhDw0E",
  slug: "aardman-confused-morph-slapstick-26ufc0OsEUTWhDw0E",
  url: "https://giphy.com/gifs/aardman-confused-morph-slapstick-26ufc0OsEUTWhDw0E",
  bitly_gif_url: "https://gph.is/2bn7DP7",
  bitly_url: "https://gph.is/2bn7DP7",
  embed_url: "https://giphy.com/embed/26ufc0OsEUTWhDw0E",
  username: "aardman",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-08-12 14:22:19",
  trending_datetime: "2018-12-21 11:00:02",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/aardman/N5QeCXrmsvB5.jpg",
  banner_url: "https://media0.giphy.com/headers/aardman/Oc2LTcbC9qSP.png",
  banner_image: "https://media0.giphy.com/headers/aardman/Oc2LTcbC9qSP.png",
  profile_url: "https://giphy.com/aardman/",
  username: "aardman",
  display_name: "Aardman Animations",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200_s.gif",
  width: "356",
  height: "200"
  },
  original_still: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy_s.gif",
  width: "500",
  height: "281"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200w.gif",
  width: "200",
  height: "112",
  size: "156377",
  mp4: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200w.mp4",
  mp4_size: "8571",
  webp: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200w.webp",
  webp_size: "107632"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/100_s.gif",
  width: "178",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200_d.gif",
  width: "356",
  height: "200",
  size: "170508",
  webp: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200_d.webp",
  webp_size: "56062"
  },
  preview: {
  width: "500",
  height: "280",
  mp4: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy-preview.mp4",
  mp4_size: "29358"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/100.gif",
  width: "178",
  height: "100",
  size: "144542",
  mp4: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/100.mp4",
  mp4_size: "7655",
  webp: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/100.webp",
  webp_size: "99226"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy-downsized_s.gif",
  width: "500",
  height: "281",
  size: "63167"
  },
  downsized: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy-downsized.gif",
  width: "500",
  height: "281",
  size: "1105926"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy.gif",
  width: "500",
  height: "281",
  size: "1105926"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/100w_s.gif",
  width: "100",
  height: "56"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy-preview.webp",
  width: "237",
  height: "133",
  size: "48760"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200w_s.gif",
  width: "200",
  height: "112"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/100w.gif",
  width: "100",
  height: "56",
  size: "46289",
  mp4: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/100w.mp4",
  mp4_size: "4433",
  webp: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/100w.webp",
  webp_size: "45266"
  },
  downsized_small: {
  width: "500",
  height: "280",
  mp4: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy-downsized-small.mp4",
  mp4_size: "29358"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200w_d.gif",
  width: "200",
  height: "112",
  size: "52292",
  webp: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200w_d.webp",
  webp_size: "24702"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy.gif",
  width: "500",
  height: "281",
  size: "1105926"
  },
  original: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy.gif",
  width: "500",
  height: "281",
  size: "1105926",
  frames: "31",
  mp4: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy.mp4",
  mp4_size: "22286",
  webp: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy.webp",
  webp_size: "419786"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200.gif",
  width: "356",
  height: "200",
  size: "558413",
  mp4: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200.mp4",
  mp4_size: "16335",
  webp: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/200.webp",
  webp_size: "244724"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy-loop.mp4",
  mp4_size: "287127"
  },
  original_mp4: {
  width: "480",
  height: "268",
  mp4: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy.mp4",
  mp4_size: "22286"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/26ufc0OsEUTWhDw0E/giphy-preview.gif",
  width: "171",
  height: "96",
  size: "45775"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/26ufc0OsEUTWhDw0E/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "who knows idk GIF by Aardman Animations",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26ufc0OsEUTWhDw0E&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26ufc0OsEUTWhDw0E&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26ufc0OsEUTWhDw0E&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "5UtgZvrwiqxPNooAvT",
  slug: "nba-fan-5UtgZvrwiqxPNooAvT",
  url: "https://giphy.com/gifs/nba-fan-5UtgZvrwiqxPNooAvT",
  bitly_gif_url: "https://gph.is/2I07s9G",
  bitly_url: "https://gph.is/2I07s9G",
  embed_url: "https://giphy.com/embed/5UtgZvrwiqxPNooAvT",
  username: "nba",
  source: "https://nba.com",
  rating: "g",
  content_url: "",
  source_tld: "nba.com",
  source_post_url: "https://nba.com",
  is_sticker: 0,
  import_datetime: "2018-03-03 23:58:21",
  trending_datetime: "2018-12-21 10:45:02",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/nba/GPeEGlo2uy2Z.jpg",
  banner_url: "https://media4.giphy.com/headers/nba/xyCOK3dpBrOH.gif",
  banner_image: "https://media4.giphy.com/headers/nba/xyCOK3dpBrOH.gif",
  profile_url: "https://giphy.com/nba/",
  username: "nba",
  display_name: "NBA",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200_s.gif",
  width: "355",
  height: "200",
  size: "35754"
  },
  original_still: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy_s.gif",
  width: "300",
  height: "169",
  size: "27401"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200w.gif",
  width: "200",
  height: "113",
  size: "850578",
  mp4: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200w.mp4",
  mp4_size: "97094",
  webp: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200w.webp",
  webp_size: "206858"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/100_s.gif",
  width: "178",
  height: "100",
  size: "12270"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200_d.gif",
  width: "355",
  height: "200",
  size: "215436",
  webp: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200_d.webp",
  webp_size: "39342"
  },
  preview: {
  width: "239",
  height: "134",
  mp4: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy-preview.mp4",
  mp4_size: "27829"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/100.gif",
  width: "178",
  height: "100",
  size: "693704",
  mp4: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/100.mp4",
  mp4_size: "143335",
  webp: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/100.webp",
  webp_size: "179738"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy-downsized_s.gif",
  width: "300",
  height: "169",
  size: "30739"
  },
  downsized: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy-downsized.gif",
  width: "300",
  height: "169",
  size: "1595592"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy.gif",
  width: "300",
  height: "169",
  size: "1729357"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/100w_s.gif",
  width: "100",
  height: "57",
  size: "5356"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy-preview.webp",
  width: "254",
  height: "143",
  size: "48786"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200w_s.gif",
  width: "200",
  height: "113",
  size: "14793"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/100w.gif",
  width: "100",
  height: "57",
  size: "273766",
  mp4: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/100w.mp4",
  mp4_size: "42842",
  webp: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/100w.webp",
  webp_size: "85928"
  },
  downsized_small: {
  width: "300",
  height: "168",
  mp4: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy-downsized-small.mp4",
  mp4_size: "196952"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200w_d.gif",
  width: "200",
  height: "113",
  size: "86576",
  webp: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200w_d.webp",
  webp_size: "20718"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy.gif",
  width: "300",
  height: "169",
  size: "1729357"
  },
  original: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy.gif",
  width: "300",
  height: "169",
  size: "1729357",
  frames: "61",
  mp4: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy.mp4",
  mp4_size: "360458",
  webp: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy.webp",
  webp_size: "336518",
  hash: "9538ad0530972fa4b9364846dfcd01bd"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200.gif",
  width: "355",
  height: "200",
  size: "2132699",
  mp4: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200.mp4",
  mp4_size: "226658",
  webp: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/200.webp",
  webp_size: "396642"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy-loop.mp4",
  mp4_size: "1325417"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy.mp4",
  mp4_size: "360458"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/5UtgZvrwiqxPNooAvT/giphy-preview.gif",
  width: "119",
  height: "67",
  size: "48207"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/5UtgZvrwiqxPNooAvT/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "excited nba fans GIF by NBA",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=5UtgZvrwiqxPNooAvT&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=5UtgZvrwiqxPNooAvT&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=5UtgZvrwiqxPNooAvT&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "M8xmO5ZcLPtAY",
  slug: "spongebob-squarepants-shut-up-M8xmO5ZcLPtAY",
  url: "https://giphy.com/gifs/spongebob-squarepants-shut-up-M8xmO5ZcLPtAY",
  bitly_gif_url: "https://gph.is/XKlP7R",
  bitly_url: "https://gph.is/XKlP7R",
  embed_url: "https://giphy.com/embed/M8xmO5ZcLPtAY",
  username: "spongebob",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2013-03-20 01:50:36",
  trending_datetime: "2018-12-21 10:30:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/spongebob/U4nimQFVGMqR.jpg",
  banner_url: "https://media4.giphy.com/avatars/spongebob/YHxcb1VlRUcI.gif",
  banner_image: "https://media4.giphy.com/avatars/spongebob/YHxcb1VlRUcI.gif",
  profile_url: "https://giphy.com/spongebob/",
  username: "spongebob",
  display_name: "SpongeBob SquarePants",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200_s.gif",
  width: "279",
  height: "200"
  },
  original_still: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy_s.gif",
  width: "500",
  height: "359"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200w.gif",
  width: "200",
  height: "144",
  size: "75878",
  mp4: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200w.mp4",
  mp4_size: "14394",
  webp: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200w.webp",
  webp_size: "105766"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/100_s.gif",
  width: "139",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200_d.gif",
  width: "279",
  height: "200",
  size: "278374",
  webp: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200_d.webp",
  webp_size: "117358"
  },
  preview: {
  width: "500",
  height: "358",
  mp4: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy-preview.mp4",
  mp4_size: "47194"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/100.gif",
  width: "139",
  height: "100",
  size: "115998",
  mp4: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/100.mp4",
  mp4_size: "13678",
  webp: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/100.webp",
  webp_size: "54024"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy-downsized_s.gif",
  width: "500",
  height: "359",
  size: "109385"
  },
  downsized: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy-downsized.gif",
  width: "500",
  height: "359",
  size: "465381"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy.gif",
  width: "500",
  height: "359",
  size: "465381"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/100w_s.gif",
  width: "100",
  height: "72"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy-preview.webp",
  width: "216",
  height: "155",
  size: "49050"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200w_s.gif",
  width: "200",
  height: "144"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/100w.gif",
  width: "100",
  height: "72",
  size: "75878",
  mp4: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/100w.mp4",
  mp4_size: "9473",
  webp: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/100w.webp",
  webp_size: "32782"
  },
  downsized_small: {
  width: "500",
  height: "358",
  mp4: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy-downsized-small.mp4",
  mp4_size: "47194"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200w_d.gif",
  width: "200",
  height: "144",
  size: "149687",
  webp: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200w_d.webp",
  webp_size: "63872"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy.gif",
  width: "500",
  height: "359",
  size: "465381"
  },
  original: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy.gif",
  width: "500",
  height: "359",
  size: "465381",
  frames: "10",
  mp4: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy.mp4",
  mp4_size: "40562",
  webp: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy.webp",
  webp_size: "481356"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200.gif",
  width: "279",
  height: "200",
  size: "115998",
  mp4: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200.mp4",
  mp4_size: "11045",
  webp: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/200.webp",
  webp_size: "195520"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy-loop.mp4",
  mp4_size: "3711044"
  },
  original_mp4: {
  width: "480",
  height: "344",
  mp4: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy.mp4",
  mp4_size: "40562"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/M8xmO5ZcLPtAY/giphy-preview.gif",
  width: "208",
  height: "149",
  size: "47904"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/M8xmO5ZcLPtAY/480w_s.jpg",
  width: "480",
  height: "345"
  }
  },
  title: "blah blah blah shut up GIF by SpongeBob SquarePants",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=M8xmO5ZcLPtAY&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=M8xmO5ZcLPtAY&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=M8xmO5ZcLPtAY&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3ohs83XlawLnyJU9Es",
  slug: "snow-winter-cold-3ohs83XlawLnyJU9Es",
  url: "https://giphy.com/gifs/snow-winter-cold-3ohs83XlawLnyJU9Es",
  bitly_gif_url: "https://gph.is/2imzRP8",
  bitly_url: "https://gph.is/2imzRP8",
  embed_url: "https://giphy.com/embed/3ohs83XlawLnyJU9Es",
  username: "makeitmove",
  source: "https://makeitmove.co.uk/design-animation-studio/animated-gifs/",
  rating: "g",
  content_url: "",
  source_tld: "makeitmove.co.uk",
  source_post_url: "https://makeitmove.co.uk/design-animation-studio/animated-gifs/",
  is_sticker: 0,
  import_datetime: "2017-11-29 15:37:44",
  trending_datetime: "2018-12-21 10:15:02",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/makeitmove/wVGy3PtrsGaF.jpg",
  banner_url: "",
  profile_url: "https://giphy.com/makeitmove/",
  username: "makeitmove",
  display_name: "Make it Move",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200_s.gif",
  width: "200",
  height: "200",
  size: "2892"
  },
  original_still: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy_s.gif",
  width: "1080",
  height: "1080",
  size: "15325"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200w.gif",
  width: "200",
  height: "200",
  size: "6352",
  mp4: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200w.mp4",
  mp4_size: "12677",
  webp: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200w.webp",
  webp_size: "5676"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/100_s.gif",
  width: "100",
  height: "100",
  size: "1779"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200_d.gif",
  width: "200",
  height: "200",
  size: "6352",
  webp: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200_d.webp",
  webp_size: "5676"
  },
  preview: {
  width: "730",
  height: "730",
  mp4: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy-preview.mp4",
  mp4_size: "40097"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/100.gif",
  width: "100",
  height: "100",
  size: "3158",
  mp4: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/100.mp4",
  mp4_size: "6279",
  webp: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/100.webp",
  webp_size: "2844"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy-downsized_s.gif",
  width: "1080",
  height: "1080",
  size: "15325"
  },
  downsized: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy-downsized.gif",
  width: "1080",
  height: "1080",
  size: "48000"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy.gif",
  width: "1080",
  height: "1080",
  size: "48000"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/100w_s.gif",
  width: "100",
  height: "100",
  size: "1779"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy-preview.webp",
  width: "1080",
  height: "1080",
  size: "35454"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200w_s.gif",
  width: "200",
  height: "200",
  size: "2892"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/100w.gif",
  width: "100",
  height: "100",
  size: "3158",
  mp4: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/100w.mp4",
  mp4_size: "6279",
  webp: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/100w.webp",
  webp_size: "2844"
  },
  downsized_small: {
  width: "1080",
  height: "1080",
  mp4: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy-downsized-small.mp4",
  mp4_size: "109189"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200w_d.gif",
  width: "200",
  height: "200",
  size: "6352",
  webp: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200w_d.webp",
  webp_size: "5676"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy.gif",
  width: "1080",
  height: "1080",
  size: "48000"
  },
  original: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy.gif",
  width: "1080",
  height: "1080",
  size: "48000",
  frames: "4",
  mp4: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy.mp4",
  mp4_size: "32017",
  webp: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy.webp",
  webp_size: "35454",
  hash: "f45e189dda2f4606994a05d31dd48b0b"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200.gif",
  width: "200",
  height: "200",
  size: "6352",
  mp4: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200.mp4",
  mp4_size: "12677",
  webp: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/200.webp",
  webp_size: "5676"
  },
  hd: {
  width: "1080",
  height: "1080",
  mp4: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy-hd.mp4",
  mp4_size: "109189"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy-loop.mp4",
  mp4_size: "1466681"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy.mp4",
  mp4_size: "32017"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/3ohs83XlawLnyJU9Es/giphy-preview.gif",
  width: "1080",
  height: "1080",
  size: "48000"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/3ohs83XlawLnyJU9Es/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "winter freezing GIF by Make it Move",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohs83XlawLnyJU9Es&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohs83XlawLnyJU9Es&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohs83XlawLnyJU9Es&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3o7TKoHNJTWWLgljYQ",
  slug: "studiosoriginals-3o7TKoHNJTWWLgljYQ",
  url: "https://giphy.com/gifs/studiosoriginals-3o7TKoHNJTWWLgljYQ",
  bitly_gif_url: "https://gph.is/2jaW0Ps",
  bitly_url: "https://gph.is/2jaW0Ps",
  embed_url: "https://giphy.com/embed/3o7TKoHNJTWWLgljYQ",
  username: "studiosoriginals",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-01-04 22:12:41",
  trending_datetime: "2018-12-21 10:00:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/studiosoriginals/j3JBzK5twdv8.jpg",
  banner_url: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  banner_image: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  profile_url: "https://giphy.com/studiosoriginals/",
  username: "studiosoriginals",
  display_name: "GIPHY Studios Originals",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200_s.gif",
  width: "300",
  height: "200",
  size: "14031"
  },
  original_still: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy_s.gif",
  width: "480",
  height: "320",
  size: "22597"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200w.gif",
  width: "200",
  height: "133",
  size: "24862",
  mp4: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200w.mp4",
  mp4_size: "8593",
  webp: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200w.webp",
  webp_size: "19542"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/100_s.gif",
  width: "150",
  height: "100",
  size: "6103"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200_d.gif",
  width: "300",
  height: "200",
  size: "44393",
  webp: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200_d.webp",
  webp_size: "32836"
  },
  preview: {
  width: "480",
  height: "320",
  mp4: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy-preview.mp4",
  mp4_size: "18954"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/100.gif",
  width: "150",
  height: "100",
  size: "16596",
  mp4: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/100.mp4",
  mp4_size: "6064",
  webp: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/100.webp",
  webp_size: "13194"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy-downsized_s.gif",
  width: "480",
  height: "320",
  size: "22597"
  },
  downsized: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy-downsized.gif",
  width: "480",
  height: "320",
  size: "74677"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy.gif",
  width: "480",
  height: "320",
  size: "74677"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/100w_s.gif",
  width: "100",
  height: "67",
  size: "4101"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy-preview.webp",
  width: "402",
  height: "268",
  size: "49828"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200w_s.gif",
  width: "200",
  height: "133",
  size: "8417"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/480w_s.jpg",
  width: "480",
  height: "320",
  size: "18927"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/100w.gif",
  width: "100",
  height: "67",
  size: "9641",
  mp4: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/100w.mp4",
  mp4_size: "3941",
  webp: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/100w.webp",
  webp_size: "7506"
  },
  downsized_small: {
  width: "480",
  height: "320",
  mp4: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy-downsized-small.mp4",
  mp4_size: "18954"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200w_d.gif",
  width: "200",
  height: "133",
  size: "24862",
  webp: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200w_d.webp",
  webp_size: "19542"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy.gif",
  width: "480",
  height: "320",
  size: "74677"
  },
  original: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy.gif",
  width: "480",
  height: "320",
  size: "74677",
  frames: "4",
  mp4: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy.mp4",
  mp4_size: "22239",
  webp: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy.webp",
  webp_size: "63938",
  hash: "12fb72ffc04fb92cb7e09a0336b436de"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200.gif",
  width: "300",
  height: "200",
  size: "44393",
  mp4: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200.mp4",
  mp4_size: "12415",
  webp: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/200.webp",
  webp_size: "32836"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy-loop.mp4",
  mp4_size: "853440"
  },
  original_mp4: {
  width: "480",
  height: "320",
  mp4: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy.mp4",
  mp4_size: "22239"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy-preview.gif",
  width: "357",
  height: "238",
  size: "48894"
  }
  },
  title: "cold winter GIF by GIPHY Studios Originals",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7TKoHNJTWWLgljYQ&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7TKoHNJTWWLgljYQ&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7TKoHNJTWWLgljYQ&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l4pT0zpKP6rv4JdgQ",
  slug: "reactionseditor-l4pT0zpKP6rv4JdgQ",
  url: "https://giphy.com/gifs/reactionseditor-l4pT0zpKP6rv4JdgQ",
  bitly_gif_url: "https://gph.is/2GpXWfj",
  bitly_url: "https://gph.is/2GpXWfj",
  embed_url: "https://giphy.com/embed/l4pT0zpKP6rv4JdgQ",
  username: "",
  source: "",
  rating: "pg",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-01-29 07:18:27",
  trending_datetime: "2018-12-21 09:45:01",
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200_s.gif",
  width: "350",
  height: "200",
  size: "34475"
  },
  original_still: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy_s.gif",
  width: "350",
  height: "200",
  size: "34475"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200w.gif",
  width: "200",
  height: "114",
  size: "541698",
  mp4: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200w.mp4",
  mp4_size: "66147",
  webp: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200w.webp",
  webp_size: "325610"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/100_s.gif",
  width: "175",
  height: "100",
  size: "9431"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200_d.gif",
  width: "350",
  height: "200",
  size: "184649",
  webp: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200_d.webp",
  webp_size: "69638"
  },
  preview: {
  width: "280",
  height: "160",
  mp4: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy-preview.mp4",
  mp4_size: "15984"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/100.gif",
  width: "175",
  height: "100",
  size: "435687",
  mp4: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/100.mp4",
  mp4_size: "53020",
  webp: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/100.webp",
  webp_size: "288338"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy-downsized_s.gif",
  width: "350",
  height: "200",
  size: "37896"
  },
  downsized: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy-downsized.gif",
  width: "350",
  height: "200",
  size: "1054021"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy.gif",
  width: "350",
  height: "200",
  size: "3009699"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/100w_s.gif",
  width: "100",
  height: "57",
  size: "3901"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy-preview.webp",
  width: "228",
  height: "130",
  size: "48194"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200w_s.gif",
  width: "200",
  height: "114",
  size: "11489"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/100w.gif",
  width: "100",
  height: "57",
  size: "144055",
  mp4: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/100w.mp4",
  mp4_size: "23835",
  webp: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/100w.webp",
  webp_size: "130202"
  },
  downsized_small: {
  width: "252",
  height: "144",
  mp4: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy-downsized-small.mp4",
  mp4_size: "45932"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200w_d.gif",
  width: "200",
  height: "114",
  size: "61268",
  webp: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200w_d.webp",
  webp_size: "22940"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy.gif",
  width: "350",
  height: "200",
  size: "3009699"
  },
  original: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy.gif",
  width: "350",
  height: "200",
  size: "3009699",
  frames: "90",
  mp4: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy.mp4",
  mp4_size: "360659",
  webp: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy.webp",
  webp_size: "930444",
  hash: "2ac9f27e2ab6e1ed0ee78e150d5e4f26"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200.gif",
  width: "350",
  height: "200",
  size: "1714138",
  mp4: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200.mp4",
  mp4_size: "164776",
  webp: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/200.webp",
  webp_size: "930444"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy-loop.mp4",
  mp4_size: "1498963"
  },
  original_mp4: {
  width: "480",
  height: "274",
  mp4: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy.mp4",
  mp4_size: "360659"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy-preview.gif",
  width: "177",
  height: "101",
  size: "47139"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/l4pT0zpKP6rv4JdgQ/480w_s.jpg",
  width: "480",
  height: "274"
  }
  },
  title: "cold minions GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4pT0zpKP6rv4JdgQ&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4pT0zpKP6rv4JdgQ&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4pT0zpKP6rv4JdgQ&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3ohzdUi5U8LBb4GD4s",
  slug: "prepareforwinter-game-of-thrones-snow-3ohzdUi5U8LBb4GD4s",
  url: "https://giphy.com/gifs/prepareforwinter-game-of-thrones-snow-3ohzdUi5U8LBb4GD4s",
  bitly_gif_url: "https://gph.is/2qMKlZw",
  bitly_url: "https://gph.is/2qMKlZw",
  embed_url: "https://giphy.com/embed/3ohzdUi5U8LBb4GD4s",
  username: "prepareforwinter",
  source: "",
  rating: "pg",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-05-23 20:14:20",
  trending_datetime: "2018-12-21 09:30:02",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/prepareforwinter/2K6yub4ByzLp.png",
  banner_url: "https://media1.giphy.com/headers/prepareforwinter/vj0au6BUstUG.png",
  banner_image: "https://media1.giphy.com/headers/prepareforwinter/vj0au6BUstUG.png",
  profile_url: "https://giphy.com/prepareforwinter/",
  username: "prepareforwinter",
  display_name: "Game of Thrones: #PrepareForWinter",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200_s.gif",
  width: "356",
  height: "200",
  size: "46220"
  },
  original_still: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy_s.gif",
  width: "400",
  height: "225",
  size: "59838"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200w.gif",
  width: "200",
  height: "113",
  size: "1061995",
  mp4: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200w.mp4",
  mp4_size: "104651",
  webp: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200w.webp",
  webp_size: "218794"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/100_s.gif",
  width: "178",
  height: "100",
  size: "14251"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200_d.gif",
  width: "356",
  height: "200",
  size: "265219",
  webp: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200_d.webp",
  webp_size: "40080"
  },
  preview: {
  width: "285",
  height: "160",
  mp4: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy-preview.mp4",
  mp4_size: "29815"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/100.gif",
  width: "178",
  height: "100",
  size: "858245",
  mp4: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/100.mp4",
  mp4_size: "156669",
  webp: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/100.webp",
  webp_size: "178262"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy-downsized_s.gif",
  width: "250",
  height: "140",
  size: "26023"
  },
  downsized: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy-downsized.gif",
  width: "250",
  height: "140",
  size: "1323341"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy.gif",
  width: "400",
  height: "225",
  size: "4094078"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/100w_s.gif",
  width: "100",
  height: "57",
  size: "6360"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy-preview.webp",
  width: "261",
  height: "147",
  size: "49710"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200w_s.gif",
  width: "200",
  height: "113",
  size: "17228"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/100w.gif",
  width: "100",
  height: "57",
  size: "300458",
  mp4: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/100w.mp4",
  mp4_size: "31767",
  webp: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/100w.webp",
  webp_size: "76796"
  },
  downsized_small: {
  width: "275",
  height: "154",
  mp4: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy-downsized-small.mp4",
  mp4_size: "92084"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200w_d.gif",
  width: "200",
  height: "113",
  size: "92172",
  webp: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200w_d.webp",
  webp_size: "18878"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy.gif",
  width: "400",
  height: "225",
  size: "4094078"
  },
  original: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy.gif",
  width: "400",
  height: "225",
  size: "4094078",
  frames: "72",
  mp4: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy.mp4",
  mp4_size: "518569",
  webp: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy.webp",
  webp_size: "673942",
  hash: "5a6102b795b4a0c645e4a329142badfa"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200.gif",
  width: "356",
  height: "200",
  size: "3131753",
  mp4: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200.mp4",
  mp4_size: "289963",
  webp: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/200.webp",
  webp_size: "478514"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy-loop.mp4",
  mp4_size: "2163787"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy.mp4",
  mp4_size: "518569"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy-preview.gif",
  width: "114",
  height: "64",
  size: "47978"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/3ohzdUi5U8LBb4GD4s/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "got GIF by Game of Thrones: #PrepareForWinter",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohzdUi5U8LBb4GD4s&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohzdUi5U8LBb4GD4s&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohzdUi5U8LBb4GD4s&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "2cehW2c5gNlQOYFndH",
  slug: "lancome-beauty-makeup-lancme-2cehW2c5gNlQOYFndH",
  url: "https://giphy.com/gifs/lancome-beauty-makeup-lancme-2cehW2c5gNlQOYFndH",
  bitly_gif_url: "https://gph.is/2BTOMHB",
  bitly_url: "https://gph.is/2BTOMHB",
  embed_url: "https://giphy.com/embed/2cehW2c5gNlQOYFndH",
  username: "lancome",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-12-05 23:10:12",
  trending_datetime: "2018-12-21 09:15:02",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/lancome/KzKvNB9v9ZVi.png",
  banner_url: "https://media4.giphy.com/headers/lancome/AooUuVuCPEaQ.png",
  banner_image: "https://media4.giphy.com/headers/lancome/AooUuVuCPEaQ.png",
  profile_url: "https://giphy.com/lancome/",
  username: "lancome",
  display_name: "LancÃ´me",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200_s.gif",
  width: "356",
  height: "200",
  size: "15775"
  },
  original_still: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy_s.gif",
  width: "480",
  height: "270",
  size: "28271"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200w.gif",
  width: "200",
  height: "113",
  size: "1695069",
  mp4: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200w.mp4",
  mp4_size: "84770",
  webp: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200w.webp",
  webp_size: "121312"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/100_s.gif",
  width: "178",
  height: "100",
  size: "5380"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200_d.gif",
  width: "356",
  height: "200",
  size: "235005",
  webp: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200_d.webp",
  webp_size: "30906"
  },
  preview: {
  width: "369",
  height: "208",
  mp4: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy-preview.mp4",
  mp4_size: "40259"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/100.gif",
  width: "178",
  height: "100",
  size: "1341601",
  mp4: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/100.mp4",
  mp4_size: "71847",
  webp: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/100.webp",
  webp_size: "103638"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy-downsized_s.gif",
  width: "307",
  height: "172",
  size: "12098"
  },
  downsized: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy-downsized.gif",
  width: "307",
  height: "172",
  size: "1895905"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy-downsized-large.gif",
  width: "480",
  height: "270",
  size: "7654757"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/100w_s.gif",
  width: "100",
  height: "57",
  size: "2469"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy-preview.webp",
  width: "440",
  height: "248",
  size: "45610"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200w_s.gif",
  width: "200",
  height: "113",
  size: "5962"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/100w.gif",
  width: "100",
  height: "57",
  size: "488000",
  mp4: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/100w.mp4",
  mp4_size: "28761",
  webp: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/100w.webp",
  webp_size: "47068"
  },
  downsized_small: {
  width: "284",
  height: "160",
  mp4: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy-downsized-small.mp4",
  mp4_size: "73858"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200w_d.gif",
  width: "200",
  height: "113",
  size: "75380",
  webp: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200w_d.webp",
  webp_size: "12596"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy-downsized-medium.gif",
  width: "480",
  height: "270",
  size: "4887759"
  },
  original: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy.gif",
  width: "480",
  height: "270",
  size: "9974310",
  frames: "121",
  mp4: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy.mp4",
  mp4_size: "495888",
  webp: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy.webp",
  webp_size: "498354",
  hash: "7dc40a52c471cca72d837ce129bb9a0e"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200.gif",
  width: "356",
  height: "200",
  size: "5339385",
  mp4: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200.mp4",
  mp4_size: "235134",
  webp: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/200.webp",
  webp_size: "299278"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy-loop.mp4",
  mp4_size: "2271121"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy.mp4",
  mp4_size: "495888"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/2cehW2c5gNlQOYFndH/giphy-preview.gif",
  width: "140",
  height: "79",
  size: "49009"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/2cehW2c5gNlQOYFndH/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "flawless new year GIF by Lancôme",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=2cehW2c5gNlQOYFndH&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=2cehW2c5gNlQOYFndH&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=2cehW2c5gNlQOYFndH&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "42D3CxaINsAFemFuId",
  slug: "netflix-pizza-lucy-liu-42D3CxaINsAFemFuId",
  url: "https://giphy.com/gifs/netflix-pizza-lucy-liu-42D3CxaINsAFemFuId",
  bitly_gif_url: "https://gph.is/2t8GHKr",
  bitly_url: "https://gph.is/2t8GHKr",
  embed_url: "https://giphy.com/embed/42D3CxaINsAFemFuId",
  username: "netflix",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-06-19 11:39:56",
  trending_datetime: "2018-12-21 09:00:01",
  user: {
  avatar_url: "https://media3.giphy.com/avatars/netflix/bAiLTTOSCowX.png",
  banner_url: "",
  profile_url: "https://giphy.com/netflix/",
  username: "netflix",
  display_name: "NETFLIX",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200_s.gif",
  width: "200",
  height: "200",
  size: "25594"
  },
  original_still: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy_s.gif",
  width: "480",
  height: "480",
  size: "116189"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200w.gif",
  width: "200",
  height: "200",
  size: "691885",
  mp4: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200w.mp4",
  mp4_size: "60746",
  webp: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200w.webp",
  webp_size: "154316"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/100_s.gif",
  width: "100",
  height: "100",
  size: "8024"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200_d.gif",
  width: "200",
  height: "200",
  size: "138957",
  webp: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200_d.webp",
  webp_size: "31192"
  },
  preview: {
  width: "316",
  height: "316",
  mp4: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy-preview.mp4",
  mp4_size: "33066"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/100.gif",
  width: "100",
  height: "100",
  size: "166425",
  mp4: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/100.mp4",
  mp4_size: "23369",
  webp: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/100.webp",
  webp_size: "61616"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy-downsized_s.gif",
  width: "384",
  height: "384",
  size: "77107"
  },
  downsized: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy-downsized.gif",
  width: "384",
  height: "384",
  size: "1762697"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy.gif",
  width: "480",
  height: "480",
  size: "2790926"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/100w_s.gif",
  width: "100",
  height: "100",
  size: "8024"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy-preview.webp",
  width: "190",
  height: "190",
  size: "49152"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200w_s.gif",
  width: "200",
  height: "200",
  size: "25594"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/100w.gif",
  width: "100",
  height: "100",
  size: "166425",
  mp4: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/100w.mp4",
  mp4_size: "23369",
  webp: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/100w.webp",
  webp_size: "61616"
  },
  downsized_small: {
  width: "432",
  height: "432",
  mp4: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy-downsized-small.mp4",
  mp4_size: "102765"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200w_d.gif",
  width: "200",
  height: "200",
  size: "138957",
  webp: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200w_d.webp",
  webp_size: "31192"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy.gif",
  width: "480",
  height: "480",
  size: "2790926"
  },
  original: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy.gif",
  width: "480",
  height: "480",
  size: "2790926",
  frames: "31",
  mp4: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy.mp4",
  mp4_size: "233864",
  webp: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy.webp",
  webp_size: "494872",
  hash: "b4a1f36c0cd6205347eb434334fb2801"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200.gif",
  width: "200",
  height: "200",
  size: "691885",
  mp4: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200.mp4",
  mp4_size: "60746",
  webp: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/200.webp",
  webp_size: "154316"
  },
  hd: {
  width: "1080",
  height: "1080",
  mp4: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy-hd.mp4",
  mp4_size: "1167239"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy-loop.mp4",
  mp4_size: "1578194"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy.mp4",
  mp4_size: "233864"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/42D3CxaINsAFemFuId/giphy-preview.gif",
  width: "101",
  height: "101",
  size: "49848"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/42D3CxaINsAFemFuId/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "lucy liu goodbye GIF by NETFLIX",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=42D3CxaINsAFemFuId&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=42D3CxaINsAFemFuId&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=42D3CxaINsAFemFuId&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "26FmQ6EOvLxp6cWyY",
  slug: "starwars-star-wars-yoda-26FmQ6EOvLxp6cWyY",
  url: "https://giphy.com/gifs/starwars-star-wars-yoda-26FmQ6EOvLxp6cWyY",
  bitly_gif_url: "https://gph.is/2qTECRG",
  bitly_url: "https://gph.is/2qTECRG",
  embed_url: "https://giphy.com/embed/26FmQ6EOvLxp6cWyY",
  username: "starwars",
  source: "",
  rating: "pg",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-05-24 22:58:04",
  trending_datetime: "2018-12-21 08:45:02",
  user: {
  avatar_url: "https://media2.giphy.com/channel_assets/star-wars/B6nyKdseGVRl.jpg",
  banner_url: "https://media2.giphy.com/channel_assets/star-wars/L0TVPU6cLCIB.gif",
  banner_image: "https://media2.giphy.com/channel_assets/star-wars/L0TVPU6cLCIB.gif",
  profile_url: "https://giphy.com/starwars/",
  username: "starwars",
  display_name: "Star Wars",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200_s.gif",
  width: "395",
  height: "200",
  size: "42487"
  },
  original_still: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy_s.gif",
  width: "435",
  height: "220",
  size: "42543"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200w.gif",
  width: "200",
  height: "101",
  size: "383249",
  mp4: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200w.mp4",
  mp4_size: "70436",
  webp: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200w.webp",
  webp_size: "227874"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/100_s.gif",
  width: "198",
  height: "100",
  size: "12971"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200_d.gif",
  width: "395",
  height: "200",
  size: "253747",
  webp: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200_d.webp",
  webp_size: "80398"
  },
  preview: {
  width: "343",
  height: "174",
  mp4: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy-preview.mp4",
  mp4_size: "36016"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/100.gif",
  width: "198",
  height: "100",
  size: "381156",
  mp4: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/100.mp4",
  mp4_size: "68820",
  webp: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/100.webp",
  webp_size: "222564"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy-downsized_s.gif",
  width: "435",
  height: "220",
  size: "42543"
  },
  downsized: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy-downsized.gif",
  width: "435",
  height: "220",
  size: "1904992"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy.gif",
  width: "435",
  height: "220",
  size: "1904992"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/100w_s.gif",
  width: "100",
  height: "51",
  size: "4330"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy-preview.webp",
  width: "190",
  height: "96",
  size: "48826"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200w_s.gif",
  width: "200",
  height: "101",
  size: "13253"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/100w.gif",
  width: "100",
  height: "51",
  size: "100245",
  mp4: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/100w.mp4",
  mp4_size: "25894",
  webp: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/100w.webp",
  webp_size: "83218"
  },
  downsized_small: {
  width: "311",
  height: "158",
  mp4: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy-downsized-small.mp4",
  mp4_size: "68289"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200w_d.gif",
  width: "200",
  height: "101",
  size: "77757",
  webp: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200w_d.webp",
  webp_size: "30784"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy.gif",
  width: "435",
  height: "220",
  size: "1904992"
  },
  original: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy.gif",
  width: "435",
  height: "220",
  size: "1904992",
  frames: "44",
  mp4: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy.mp4",
  mp4_size: "327117",
  webp: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy.webp",
  webp_size: "743888",
  hash: "89ae6eb9b736eb1a15c7c4b9d7b06a9d"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200.gif",
  width: "395",
  height: "200",
  size: "1392729",
  mp4: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200.mp4",
  mp4_size: "196392",
  webp: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/200.webp",
  webp_size: "594036"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy-loop.mp4",
  mp4_size: "1136995"
  },
  original_mp4: {
  width: "480",
  height: "242",
  mp4: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy.mp4",
  mp4_size: "327117"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/26FmQ6EOvLxp6cWyY/giphy-preview.gif",
  width: "148",
  height: "75",
  size: "49563"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/26FmQ6EOvLxp6cWyY/480w_s.jpg",
  width: "480",
  height: "243"
  }
  },
  title: "do it there is no try GIF by Star Wars",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26FmQ6EOvLxp6cWyY&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26FmQ6EOvLxp6cWyY&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26FmQ6EOvLxp6cWyY&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l4Ep0zgY6GKpsKAfu",
  slug: "soultrain-soul-train-episode-208-l4Ep0zgY6GKpsKAfu",
  url: "https://giphy.com/gifs/soultrain-soul-train-episode-208-l4Ep0zgY6GKpsKAfu",
  bitly_gif_url: "https://gph.is/2iE4mfp",
  bitly_url: "https://gph.is/2iE4mfp",
  embed_url: "https://giphy.com/embed/l4Ep0zgY6GKpsKAfu",
  username: "soultrain",
  source: "",
  rating: "pg",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-11-07 22:46:30",
  trending_datetime: "2018-12-21 08:30:01",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/soultrain/ecCLJsAQuXQC.gif",
  banner_url: "",
  profile_url: "https://giphy.com/soultrain/",
  username: "soultrain",
  display_name: "Soul Train",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200_s.gif",
  width: "266",
  height: "200",
  size: "35633"
  },
  original_still: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy_s.gif",
  width: "480",
  height: "360",
  size: "95540"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200w.gif",
  width: "200",
  height: "150",
  size: "1124588",
  mp4: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200w.mp4",
  mp4_size: "202468",
  webp: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200w.webp",
  webp_size: "348002"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/100_s.gif",
  width: "133",
  height: "100",
  size: "11124"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200_d.gif",
  width: "266",
  height: "200",
  size: "199869",
  webp: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200_d.webp",
  webp_size: "56420"
  },
  preview: {
  width: "248",
  height: "186",
  mp4: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy-preview.mp4",
  mp4_size: "46790"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/100.gif",
  width: "133",
  height: "100",
  size: "513087",
  mp4: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/100.mp4",
  mp4_size: "116881",
  webp: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/100.webp",
  webp_size: "177152"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy-downsized_s.gif",
  width: "250",
  height: "187",
  size: "29148"
  },
  downsized: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy-downsized.gif",
  width: "250",
  height: "187",
  size: "1388803"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy.gif",
  width: "480",
  height: "360",
  size: "5199356"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/100w_s.gif",
  width: "100",
  height: "75",
  size: "7116"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy-preview.webp",
  width: "169",
  height: "127",
  size: "49638"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200w_s.gif",
  width: "200",
  height: "150",
  size: "22150"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/100w.gif",
  width: "100",
  height: "75",
  size: "318543",
  mp4: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/100w.mp4",
  mp4_size: "47525",
  webp: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/100w.webp",
  webp_size: "124400"
  },
  downsized_small: {
  width: "250",
  height: "188",
  mp4: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy-downsized-small.mp4",
  mp4_size: "148294"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200w_d.gif",
  width: "200",
  height: "150",
  size: "122696",
  webp: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200w_d.webp",
  webp_size: "38234"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy-downsized-medium.gif",
  width: "384",
  height: "288",
  size: "3219122"
  },
  original: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy.gif",
  width: "480",
  height: "360",
  size: "5199356",
  frames: "57",
  mp4: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy.mp4",
  mp4_size: "714320",
  webp: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy.webp",
  webp_size: "1236778",
  hash: "6ff712103be520bc3e1b5c9385bdfa93"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200.gif",
  width: "266",
  height: "200",
  size: "1862220",
  mp4: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200.mp4",
  mp4_size: "295984",
  webp: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/200.webp",
  webp_size: "515632"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy-loop.mp4",
  mp4_size: "2599135"
  },
  original_mp4: {
  width: "480",
  height: "360",
  mp4: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy.mp4",
  mp4_size: "714320"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/l4Ep0zgY6GKpsKAfu/giphy-preview.gif",
  width: "103",
  height: "77",
  size: "48205"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/l4Ep0zgY6GKpsKAfu/480w_s.jpg",
  width: "480",
  height: "360"
  }
  },
  title: "richard pryor praise GIF by Soul Train",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4Ep0zgY6GKpsKAfu&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4Ep0zgY6GKpsKAfu&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4Ep0zgY6GKpsKAfu&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l2QDYGQQKKNGq6mhq",
  slug: "love-cute-heart-l2QDYGQQKKNGq6mhq",
  url: "https://giphy.com/gifs/love-cute-heart-l2QDYGQQKKNGq6mhq",
  bitly_gif_url: "https://gph.is/2A4ObjL",
  bitly_url: "https://gph.is/2A4ObjL",
  embed_url: "https://giphy.com/embed/l2QDYGQQKKNGq6mhq",
  username: "chibird",
  source: "https://chibird.com/post/167715075652",
  rating: "g",
  content_url: "",
  source_tld: "chibird.com",
  source_post_url: "https://chibird.com/post/167715075652",
  is_sticker: 0,
  import_datetime: "2017-11-23 00:28:54",
  trending_datetime: "2018-12-21 08:15:01",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/chibird/Y5Id1jkAgQmj.gif",
  banner_url: "https://media2.giphy.com/headers/chibird/DcKR6vFwkwto.gif",
  banner_image: "https://media2.giphy.com/headers/chibird/DcKR6vFwkwto.gif",
  profile_url: "https://giphy.com/chibird/",
  username: "chibird",
  display_name: "Chibird",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200_s.gif",
  width: "200",
  height: "200",
  size: "6189"
  },
  original_still: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy_s.gif",
  width: "480",
  height: "480",
  size: "21095"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200w.gif",
  width: "200",
  height: "200",
  size: "22997",
  mp4: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200w.mp4",
  mp4_size: "20407",
  webp: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200w.webp",
  webp_size: "59838"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/100_s.gif",
  width: "100",
  height: "100",
  size: "2608"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200_d.gif",
  width: "200",
  height: "200",
  size: "8154",
  webp: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200_d.webp",
  webp_size: "8930"
  },
  preview: {
  width: "480",
  height: "480",
  mp4: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy-preview.mp4",
  mp4_size: "49470"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/100.gif",
  width: "100",
  height: "100",
  size: "9009",
  mp4: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/100.mp4",
  mp4_size: "10884",
  webp: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/100.webp",
  webp_size: "26538"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy-downsized_s.gif",
  width: "480",
  height: "480",
  size: "21095"
  },
  downsized: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy-downsized.gif",
  width: "480",
  height: "480",
  size: "84361"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy.gif",
  width: "480",
  height: "480",
  size: "84361"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/100w_s.gif",
  width: "100",
  height: "100",
  size: "2608"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy-preview.webp",
  width: "480",
  height: "480",
  size: "24586"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200w_s.gif",
  width: "200",
  height: "200",
  size: "6189"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/100w.gif",
  width: "100",
  height: "100",
  size: "9009",
  mp4: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/100w.mp4",
  mp4_size: "10884",
  webp: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/100w.webp",
  webp_size: "26538"
  },
  downsized_small: {
  width: "480",
  height: "480",
  mp4: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy-downsized-small.mp4",
  mp4_size: "49470"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200w_d.gif",
  width: "200",
  height: "200",
  size: "8154",
  webp: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200w_d.webp",
  webp_size: "8930"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy.gif",
  width: "480",
  height: "480",
  size: "84361"
  },
  original: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy.gif",
  width: "480",
  height: "480",
  size: "84361",
  frames: "60",
  mp4: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy.mp4",
  mp4_size: "45941",
  webp: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy.webp",
  webp_size: "177538",
  hash: "75e9f719742906d7f09318b52cd0c556"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200.gif",
  width: "200",
  height: "200",
  size: "22997",
  mp4: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200.mp4",
  mp4_size: "20407",
  webp: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/200.webp",
  webp_size: "59838"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy-loop.mp4",
  mp4_size: "74578"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy.mp4",
  mp4_size: "45941"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/l2QDYGQQKKNGq6mhq/giphy-preview.gif",
  width: "480",
  height: "480",
  size: "24533"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/l2QDYGQQKKNGq6mhq/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "heart love GIF by Chibird",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2QDYGQQKKNGq6mhq&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2QDYGQQKKNGq6mhq&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2QDYGQQKKNGq6mhq&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3oEjI6SEda9CiPEYXm",
  slug: "musicchoice-love-and-hip-hop-cardi-b-3oEjI6SEda9CiPEYXm",
  url: "https://giphy.com/gifs/musicchoice-love-and-hip-hop-cardi-b-3oEjI6SEda9CiPEYXm",
  bitly_gif_url: "https://gph.is/1U4cbWb",
  bitly_url: "https://gph.is/1U4cbWb",
  embed_url: "https://giphy.com/embed/3oEjI6SEda9CiPEYXm",
  username: "musicchoice",
  source: "https://musicchoice.app.link/giphy",
  rating: "g",
  content_url: "",
  source_tld: "musicchoice.app.link",
  source_post_url: "https://musicchoice.app.link/giphy",
  is_sticker: 0,
  import_datetime: "2016-06-13 16:04:36",
  trending_datetime: "2018-12-21 08:00:02",
  user: {
  avatar_url: "https://media3.giphy.com/avatars/musicchoice/A5ruIs3aMlOF.jpg",
  banner_url: "https://media3.giphy.com/headers/musicchoice/QAs9n7woKqf4.jpg",
  banner_image: "https://media3.giphy.com/headers/musicchoice/QAs9n7woKqf4.jpg",
  profile_url: "https://giphy.com/musicchoice/",
  username: "musicchoice",
  display_name: "Music Choice",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200_s.gif",
  width: "356",
  height: "200"
  },
  original_still: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy_s.gif",
  width: "480",
  height: "270"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200w.gif",
  width: "200",
  height: "113",
  size: "446518",
  mp4: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200w.mp4",
  mp4_size: "34153",
  webp: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200w.webp",
  webp_size: "128158"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/100_s.gif",
  width: "178",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200_d.gif",
  width: "356",
  height: "200",
  size: "214324",
  webp: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200_d.webp",
  webp_size: "35592"
  },
  preview: {
  width: "354",
  height: "198",
  mp4: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy-preview.mp4",
  mp4_size: "31315"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/100.gif",
  width: "178",
  height: "100",
  size: "367036",
  mp4: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/100.mp4",
  mp4_size: "30097",
  webp: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/100.webp",
  webp_size: "109488"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy-downsized_s.gif",
  width: "250",
  height: "140",
  size: "18591"
  },
  downsized: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy-downsized.gif",
  width: "250",
  height: "140",
  size: "652353"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy.gif",
  width: "480",
  height: "270",
  size: "2058778"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/100w_s.gif",
  width: "100",
  height: "56"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy-preview.webp",
  width: "334",
  height: "188",
  size: "49842"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200w_s.gif",
  width: "200",
  height: "113"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/100w.gif",
  width: "100",
  height: "56",
  size: "131572",
  mp4: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/100w.mp4",
  mp4_size: "14372",
  webp: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/100w.webp",
  webp_size: "54234"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy-downsized-small.mp4",
  mp4_size: "135515"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200w_d.gif",
  width: "200",
  height: "113",
  size: "80598",
  webp: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200w_d.webp",
  webp_size: "17594"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy.gif",
  width: "480",
  height: "270",
  size: "2058778"
  },
  original: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy.gif",
  width: "480",
  height: "270",
  size: "2058778",
  frames: "43",
  mp4: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy.mp4",
  mp4_size: "133893",
  webp: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy.webp",
  webp_size: "422414"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200.gif",
  width: "356",
  height: "200",
  size: "1210883",
  mp4: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200.mp4",
  mp4_size: "78155",
  webp: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/200.webp",
  webp_size: "260424"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy-loop.mp4",
  mp4_size: "696659"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy.mp4",
  mp4_size: "133893"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/3oEjI6SEda9CiPEYXm/giphy-preview.gif",
  width: "140",
  height: "79",
  size: "48001"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/3oEjI6SEda9CiPEYXm/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "cardi b dancing GIF by Music Choice",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3oEjI6SEda9CiPEYXm&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3oEjI6SEda9CiPEYXm&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3oEjI6SEda9CiPEYXm&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xlzMTPMj4NI8qFzi8t",
  slug: "netflixph-netflix-riverdale-kj-xlzMTPMj4NI8qFzi8t",
  url: "https://giphy.com/gifs/netflixph-netflix-riverdale-kj-xlzMTPMj4NI8qFzi8t",
  bitly_gif_url: "https://gph.is/2NX3ssm",
  bitly_url: "https://gph.is/2NX3ssm",
  embed_url: "https://giphy.com/embed/xlzMTPMj4NI8qFzi8t",
  username: "netflixph",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-10-22 09:41:03",
  trending_datetime: "2018-12-21 07:45:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/netflixph/FbchOMupeaBK.png",
  banner_url: "",
  profile_url: "https://giphy.com/netflixph/",
  username: "netflixph",
  display_name: "Netflix Philippines",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200_s.gif",
  width: "267",
  height: "200",
  size: "21632"
  },
  original_still: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy_s.gif",
  width: "400",
  height: "300",
  size: "44413"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200w.gif",
  width: "200",
  height: "150",
  size: "388383",
  mp4: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200w.mp4",
  mp4_size: "39282",
  webp: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200w.webp",
  webp_size: "202956"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/100_s.gif",
  width: "134",
  height: "100",
  size: "7928"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200_d.gif",
  width: "267",
  height: "200",
  size: "124404",
  webp: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200_d.webp",
  webp_size: "49686"
  },
  preview: {
  width: "196",
  height: "146",
  mp4: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy-preview.mp4",
  mp4_size: "20710"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/100.gif",
  width: "134",
  height: "100",
  size: "177832",
  mp4: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/100.mp4",
  mp4_size: "23011",
  webp: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/100.webp",
  webp_size: "113316"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy-downsized_s.gif",
  width: "400",
  height: "300",
  size: "44413"
  },
  downsized: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy.gif",
  width: "400",
  height: "300",
  size: "1515381"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy.gif",
  width: "400",
  height: "300",
  size: "1515381"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/100w_s.gif",
  width: "100",
  height: "75",
  size: "5625"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy-preview.webp",
  width: "180",
  height: "135",
  size: "49882"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200w_s.gif",
  width: "200",
  height: "150",
  size: "14053"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/100w.gif",
  width: "100",
  height: "75",
  size: "104337",
  mp4: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/100w.mp4",
  mp4_size: "15477",
  webp: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/100w.webp",
  webp_size: "79114"
  },
  downsized_small: {
  width: "360",
  height: "270",
  mp4: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy-downsized-small.mp4",
  mp4_size: "52125"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200w_d.gif",
  width: "200",
  height: "150",
  size: "76870",
  webp: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200w_d.webp",
  webp_size: "34664"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy.gif",
  width: "400",
  height: "300",
  size: "1515381"
  },
  original: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy.gif",
  width: "400",
  height: "300",
  size: "1515381",
  frames: "34",
  mp4: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy.mp4",
  mp4_size: "175283",
  webp: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy.webp",
  webp_size: "555746",
  hash: "38d0e4afe410d80147c92b8dbf9aa67d"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200.gif",
  width: "267",
  height: "200",
  size: "650566",
  mp4: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200.mp4",
  mp4_size: "58402",
  webp: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/200.webp",
  webp_size: "292010"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy-loop.mp4",
  mp4_size: "1935542"
  },
  original_mp4: {
  width: "480",
  height: "360",
  mp4: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy.mp4",
  mp4_size: "175283"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy-preview.gif",
  width: "119",
  height: "89",
  size: "48464"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/xlzMTPMj4NI8qFzi8t/480w_s.jpg",
  width: "480",
  height: "360"
  }
  },
  title: "archie andrews no GIF by Netflix Philippines",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xlzMTPMj4NI8qFzi8t&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xlzMTPMj4NI8qFzi8t&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xlzMTPMj4NI8qFzi8t&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "1rNzYvuvLdZyBTh5X4",
  slug: "chicagobulls-sport-chicago-bulls-1rNzYvuvLdZyBTh5X4",
  url: "https://giphy.com/gifs/chicagobulls-sport-chicago-bulls-1rNzYvuvLdZyBTh5X4",
  bitly_gif_url: "https://gph.is/2F81whi",
  bitly_url: "https://gph.is/2F81whi",
  embed_url: "https://giphy.com/embed/1rNzYvuvLdZyBTh5X4",
  username: "chicagobulls",
  source: "https://www.nba.com/bulls/?splash=off",
  rating: "g",
  content_url: "",
  source_tld: "www.nba.com",
  source_post_url: "https://www.nba.com/bulls/?splash=off",
  is_sticker: 0,
  import_datetime: "2018-11-06 14:49:16",
  trending_datetime: "2018-12-21 07:30:01",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/chicagobulls/L2IZZTf4fiCc.jpg",
  banner_url: "",
  profile_url: "https://giphy.com/chicagobulls/",
  username: "chicagobulls",
  display_name: "Chicago Bulls",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200_s.gif",
  width: "356",
  height: "200",
  size: "49040"
  },
  original_still: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy_s.gif",
  width: "480",
  height: "270",
  size: "80589"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200w.gif",
  width: "200",
  height: "112",
  size: "1051092",
  mp4: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200w.mp4",
  mp4_size: "72289",
  webp: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200w.webp",
  webp_size: "306122"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/100_s.gif",
  width: "178",
  height: "100",
  size: "14677"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200_d.gif",
  width: "356",
  height: "200",
  size: "196149",
  webp: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200_d.webp",
  webp_size: "89538"
  },
  preview: {
  width: "384",
  height: "216",
  mp4: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy-preview.mp4",
  mp4_size: "36495"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/100.gif",
  width: "178",
  height: "100",
  size: "286489",
  mp4: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/100.mp4",
  mp4_size: "67221",
  webp: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/100.webp",
  webp_size: "262202"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "80589"
  },
  downsized: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy.gif",
  width: "480",
  height: "270",
  size: "1891857"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy.gif",
  width: "480",
  height: "270",
  size: "1891857"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/100w_s.gif",
  width: "100",
  height: "56",
  size: "6024"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy-preview.webp",
  width: "176",
  height: "99",
  size: "47656"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200w_s.gif",
  width: "200",
  height: "112",
  size: "18503"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/100w.gif",
  width: "100",
  height: "56",
  size: "94959",
  mp4: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/100w.mp4",
  mp4_size: "24834",
  webp: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/100w.webp",
  webp_size: "119428"
  },
  downsized_small: {
  width: "386",
  height: "216",
  mp4: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy-downsized-small.mp4",
  mp4_size: "106051"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200w_d.gif",
  width: "200",
  height: "112",
  size: "69119",
  webp: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200w_d.webp",
  webp_size: "37706"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy.gif",
  width: "480",
  height: "270",
  size: "1891857"
  },
  original: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy.gif",
  width: "480",
  height: "270",
  size: "1891857",
  frames: "59",
  mp4: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy.mp4",
  mp4_size: "307687",
  webp: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy.webp",
  webp_size: "1023236",
  hash: "4334d749ee15bf484d223e5696de96af"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200.gif",
  width: "356",
  height: "200",
  size: "2870482",
  mp4: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200.mp4",
  mp4_size: "189525",
  webp: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/200.webp",
  webp_size: "692638"
  },
  hd: {
  width: "1920",
  height: "1080",
  mp4: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy-hd.mp4",
  mp4_size: "3725496"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy-loop.mp4",
  mp4_size: "1084503"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy.mp4",
  mp4_size: "307687"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/1rNzYvuvLdZyBTh5X4/giphy-preview.gif",
  width: "204",
  height: "115",
  size: "49250"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/1rNzYvuvLdZyBTh5X4/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "wendell carter thumbs up GIF by Chicago Bulls",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1rNzYvuvLdZyBTh5X4&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1rNzYvuvLdZyBTh5X4&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=1rNzYvuvLdZyBTh5X4&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "8YHmeJfN0jWhZqqyBG",
  slug: "nba-funny-lebron-james-lal-8YHmeJfN0jWhZqqyBG",
  url: "https://giphy.com/gifs/nba-funny-lebron-james-lal-8YHmeJfN0jWhZqqyBG",
  bitly_gif_url: "https://gph.is/2NRTmIV",
  bitly_url: "https://gph.is/2NRTmIV",
  embed_url: "https://giphy.com/embed/8YHmeJfN0jWhZqqyBG",
  username: "nba",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-10-21 04:47:04",
  trending_datetime: "2018-12-21 07:15:02",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/nba/GPeEGlo2uy2Z.jpg",
  banner_url: "https://media4.giphy.com/headers/nba/xyCOK3dpBrOH.gif",
  banner_image: "https://media4.giphy.com/headers/nba/xyCOK3dpBrOH.gif",
  profile_url: "https://giphy.com/nba/",
  username: "nba",
  display_name: "NBA",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200_s.gif",
  width: "355",
  height: "200",
  size: "51113"
  },
  original_still: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy_s.gif",
  width: "300",
  height: "169",
  size: "38736"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200w.gif",
  width: "200",
  height: "113",
  size: "288890",
  mp4: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200w.mp4",
  mp4_size: "42936",
  webp: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200w.webp",
  webp_size: "102878"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/100_s.gif",
  width: "178",
  height: "100",
  size: "16186"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200_d.gif",
  width: "355",
  height: "200",
  size: "302329",
  webp: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200_d.webp",
  webp_size: "83664"
  },
  preview: {
  width: "220",
  height: "124",
  mp4: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy-preview.mp4",
  mp4_size: "28675"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/100.gif",
  width: "178",
  height: "100",
  size: "232122",
  mp4: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/100.mp4",
  mp4_size: "73489",
  webp: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/100.webp",
  webp_size: "85720"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy-downsized_s.gif",
  width: "300",
  height: "169",
  size: "38736"
  },
  downsized: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy.gif",
  width: "300",
  height: "169",
  size: "596944"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy.gif",
  width: "300",
  height: "169",
  size: "596944"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/100w_s.gif",
  width: "100",
  height: "57",
  size: "6479"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy-preview.webp",
  width: "160",
  height: "90",
  size: "49416"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200w_s.gif",
  width: "200",
  height: "113",
  size: "19918"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/100w.gif",
  width: "100",
  height: "57",
  size: "82234",
  mp4: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/100w.mp4",
  mp4_size: "18206",
  webp: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/100w.webp",
  webp_size: "37672"
  },
  downsized_small: {
  width: "298",
  height: "168",
  mp4: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy-downsized-small.mp4",
  mp4_size: "90731"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200w_d.gif",
  width: "200",
  height: "113",
  size: "114492",
  webp: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200w_d.webp",
  webp_size: "39186"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy.gif",
  width: "300",
  height: "169",
  size: "596944"
  },
  original: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy.gif",
  width: "300",
  height: "169",
  size: "596944",
  frames: "16",
  mp4: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy.mp4",
  mp4_size: "160127",
  webp: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy.webp",
  webp_size: "193764",
  hash: "7cce22be9f89a167ddfa937a001a9ca3"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200.gif",
  width: "355",
  height: "200",
  size: "772024",
  mp4: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200.mp4",
  mp4_size: "118176",
  webp: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/200.webp",
  webp_size: "220030"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy-loop.mp4",
  mp4_size: "2220090"
  },
  original_mp4: {
  width: "479",
  height: "270",
  mp4: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy.mp4",
  mp4_size: "160127"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/8YHmeJfN0jWhZqqyBG/giphy-preview.gif",
  width: "105",
  height: "59",
  size: "47722"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/8YHmeJfN0jWhZqqyBG/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "happy lebron james GIF by NBA",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=8YHmeJfN0jWhZqqyBG&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=8YHmeJfN0jWhZqqyBG&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=8YHmeJfN0jWhZqqyBG&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "2sdKZqyZ3BMy5m5BTc",
  slug: "thegoodplace-season-3-episode-9-the-good-place-2sdKZqyZ3BMy5m5BTc",
  url: "https://giphy.com/gifs/thegoodplace-season-3-episode-9-the-good-place-2sdKZqyZ3BMy5m5BTc",
  bitly_gif_url: "https://gph.is/2AQKrmW",
  bitly_url: "https://gph.is/2AQKrmW",
  embed_url: "https://giphy.com/embed/2sdKZqyZ3BMy5m5BTc",
  username: "thegoodplace",
  source: "https://nbc.com/the-good-place",
  rating: "pg",
  content_url: "",
  source_tld: "nbc.com",
  source_post_url: "https://nbc.com/the-good-place",
  is_sticker: 0,
  import_datetime: "2018-12-03 20:55:01",
  trending_datetime: "2018-12-21 07:00:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/thegoodplace/P78ulnfEeWCw.jpg",
  banner_url: "https://media0.giphy.com/headers/thegoodplace/4MLY1hfG7Utf.gif",
  banner_image: "https://media0.giphy.com/headers/thegoodplace/4MLY1hfG7Utf.gif",
  profile_url: "https://giphy.com/thegoodplace/",
  username: "thegoodplace",
  display_name: "The Good Place",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200_s.gif",
  width: "356",
  height: "200",
  size: "65990"
  },
  original_still: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy_s.gif",
  width: "500",
  height: "281",
  size: "85642"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200w.gif",
  width: "200",
  height: "112",
  size: "461792",
  mp4: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200w.mp4",
  mp4_size: "71577",
  webp: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200w.webp",
  webp_size: "143476"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/100_s.gif",
  width: "178",
  height: "100",
  size: "17978"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200_d.gif",
  width: "356",
  height: "200",
  size: "394563",
  webp: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200_d.webp",
  webp_size: "99506"
  },
  preview: {
  width: "253",
  height: "142",
  mp4: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy-preview.mp4",
  mp4_size: "41557"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/100.gif",
  width: "178",
  height: "100",
  size: "382077",
  mp4: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/100.mp4",
  mp4_size: "61168",
  webp: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/100.webp",
  webp_size: "119142"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy-downsized_s.gif",
  width: "500",
  height: "281",
  size: "85642"
  },
  downsized: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy.gif",
  width: "500",
  height: "281",
  size: "1752800"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy.gif",
  width: "500",
  height: "281",
  size: "1752800"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/100w_s.gif",
  width: "100",
  height: "56",
  size: "6802"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy-preview.webp",
  width: "132",
  height: "74",
  size: "33406"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200w_s.gif",
  width: "200",
  height: "112",
  size: "21719"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/100w.gif",
  width: "100",
  height: "56",
  size: "133975",
  mp4: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/100w.mp4",
  mp4_size: "25267",
  webp: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/100w.webp",
  webp_size: "47336"
  },
  downsized_small: {
  width: "296",
  height: "166",
  mp4: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy-downsized-small.mp4",
  mp4_size: "76604"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200w_d.gif",
  width: "200",
  height: "112",
  size: "126698",
  webp: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200w_d.webp",
  webp_size: "39350"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy.gif",
  width: "500",
  height: "281",
  size: "1752800"
  },
  original: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy.gif",
  width: "500",
  height: "281",
  size: "1752800",
  frames: "22",
  mp4: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy.mp4",
  mp4_size: "438152",
  webp: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy.webp",
  webp_size: "752490",
  hash: "6d8a1e8265eecc1c538bbfde12c7b999"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200.gif",
  width: "356",
  height: "200",
  size: "1440755",
  mp4: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200.mp4",
  mp4_size: "189052",
  webp: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/200.webp",
  webp_size: "364478"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy-loop.mp4",
  mp4_size: "2212995"
  },
  original_mp4: {
  width: "480",
  height: "268",
  mp4: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy.mp4",
  mp4_size: "438152"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/2sdKZqyZ3BMy5m5BTc/giphy-preview.gif",
  width: "89",
  height: "50",
  size: "49644"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/2sdKZqyZ3BMy5m5BTc/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "season 3 jacksonville style baby GIF by The Good Place",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=2sdKZqyZ3BMy5m5BTc&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=2sdKZqyZ3BMy5m5BTc&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=2sdKZqyZ3BMy5m5BTc&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "fjyGsdRkYqb3j1WODz",
  slug: "macys-fjyGsdRkYqb3j1WODz",
  url: "https://giphy.com/gifs/macys-fjyGsdRkYqb3j1WODz",
  bitly_gif_url: "https://gph.is/2A8QDpF",
  bitly_url: "https://gph.is/2A8QDpF",
  embed_url: "https://giphy.com/embed/fjyGsdRkYqb3j1WODz",
  username: "macys",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-11-19 21:31:27",
  trending_datetime: "2018-12-21 06:45:02",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/macys/dLdWqR0j8wSD.jpg",
  banner_url: "https://media1.giphy.com/headers/macys/M4Rf9HaHclCL.jpg",
  banner_image: "https://media1.giphy.com/headers/macys/M4Rf9HaHclCL.jpg",
  profile_url: "https://giphy.com/macys/",
  username: "macys",
  display_name: "Macy's",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200_s.gif",
  width: "200",
  height: "200",
  size: "28297"
  },
  original_still: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy_s.gif",
  width: "480",
  height: "480",
  size: "113483"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200w.gif",
  width: "200",
  height: "200",
  size: "907016",
  mp4: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200w.mp4",
  mp4_size: "94419",
  webp: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200w.webp",
  webp_size: "211342"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/100_s.gif",
  width: "100",
  height: "100",
  size: "8788"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200_d.gif",
  width: "200",
  height: "200",
  size: "152461",
  webp: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200_d.webp",
  webp_size: "44906"
  },
  preview: {
  width: "288",
  height: "288",
  mp4: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy-preview.mp4",
  mp4_size: "34201"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/100.gif",
  width: "100",
  height: "100",
  size: "256736",
  mp4: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/100.mp4",
  mp4_size: "35288",
  webp: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/100.webp",
  webp_size: "82356"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy-downsized_s.gif",
  width: "384",
  height: "384",
  size: "78648"
  },
  downsized: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy-downsized.gif",
  width: "384",
  height: "384",
  size: "1973899"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy.gif",
  width: "480",
  height: "480",
  size: "2845864"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/100w_s.gif",
  width: "100",
  height: "100",
  size: "8788"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy-preview.webp",
  width: "160",
  height: "160",
  size: "49486"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200w_s.gif",
  width: "200",
  height: "200",
  size: "28297"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/100w.gif",
  width: "100",
  height: "100",
  size: "256736",
  mp4: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/100w.mp4",
  mp4_size: "35288",
  webp: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/100w.webp",
  webp_size: "82356"
  },
  downsized_small: {
  width: "380",
  height: "380",
  mp4: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy-downsized-small.mp4",
  mp4_size: "112686"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200w_d.gif",
  width: "200",
  height: "200",
  size: "152461",
  webp: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200w_d.webp",
  webp_size: "44906"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy.gif",
  width: "480",
  height: "480",
  size: "2845864"
  },
  original: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy.gif",
  width: "480",
  height: "480",
  size: "2845864",
  frames: "32",
  mp4: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy.mp4",
  mp4_size: "318393",
  webp: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy.webp",
  webp_size: "576024",
  hash: "9a631c0dc2eafc2519c1dafcf3bb32f2"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200.gif",
  width: "200",
  height: "200",
  size: "907016",
  mp4: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200.mp4",
  mp4_size: "94419",
  webp: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/200.webp",
  webp_size: "211342"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy-loop.mp4",
  mp4_size: "2036283"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy.mp4",
  mp4_size: "318393"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/fjyGsdRkYqb3j1WODz/giphy-preview.gif",
  width: "75",
  height: "75",
  size: "47793"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/fjyGsdRkYqb3j1WODz/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "santa claus thank you GIF by Macy's",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=fjyGsdRkYqb3j1WODz&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=fjyGsdRkYqb3j1WODz&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=fjyGsdRkYqb3j1WODz&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "2tL9sSdgiMNuNgBfdy",
  slug: "quintab-quinta-brunson-b-2tL9sSdgiMNuNgBfdy",
  url: "https://giphy.com/gifs/quintab-quinta-brunson-b-2tL9sSdgiMNuNgBfdy",
  bitly_gif_url: "https://gph.is/2Sohea3",
  bitly_url: "https://gph.is/2Sohea3",
  embed_url: "https://giphy.com/embed/2tL9sSdgiMNuNgBfdy",
  username: "quintab",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-11-30 18:38:45",
  trending_datetime: "2018-12-21 06:30:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/quintab/H3B8RWBrw4n4.gif",
  banner_url: "https://media0.giphy.com/headers/quintab/F2sX5ad4k8Xy.png",
  banner_image: "https://media0.giphy.com/headers/quintab/F2sX5ad4k8Xy.png",
  profile_url: "https://giphy.com/quintab/",
  username: "quintab",
  display_name: "Quinta B",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200_s.gif",
  width: "356",
  height: "200",
  size: "27810"
  },
  original_still: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy_s.gif",
  width: "480",
  height: "270",
  size: "43872"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200w.gif",
  width: "200",
  height: "113",
  size: "1906168",
  mp4: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200w.mp4",
  mp4_size: "127303",
  webp: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200w.webp",
  webp_size: "358462"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/100_s.gif",
  width: "178",
  height: "100",
  size: "10241"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200_d.gif",
  width: "356",
  height: "200",
  size: "121047",
  webp: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200_d.webp",
  webp_size: "66602"
  },
  preview: {
  width: "341",
  height: "192",
  mp4: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy-preview.mp4",
  mp4_size: "38305"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/100.gif",
  width: "178",
  height: "100",
  size: "1614975",
  mp4: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/100.mp4",
  mp4_size: "116378",
  webp: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/100.webp",
  webp_size: "305252"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "46974"
  },
  downsized: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy-downsized.gif",
  width: "480",
  height: "270",
  size: "1552321"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy.gif",
  width: "480",
  height: "270",
  size: "4346994"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/100w_s.gif",
  width: "100",
  height: "57",
  size: "4823"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy-preview.webp",
  width: "210",
  height: "118",
  size: "41300"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200w_s.gif",
  width: "200",
  height: "113",
  size: "12050"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/100w.gif",
  width: "100",
  height: "57",
  size: "700972",
  mp4: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/100w.mp4",
  mp4_size: "48984",
  webp: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/100w.webp",
  webp_size: "133554"
  },
  downsized_small: {
  width: "295",
  height: "166",
  mp4: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy-downsized-small.mp4",
  mp4_size: "131477"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200w_d.gif",
  width: "200",
  height: "113",
  size: "44983",
  webp: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200w_d.webp",
  webp_size: "30310"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy.gif",
  width: "480",
  height: "270",
  size: "4346994"
  },
  original: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy.gif",
  width: "480",
  height: "270",
  size: "4346994",
  frames: "180",
  mp4: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy.mp4",
  mp4_size: "450625",
  webp: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy.webp",
  webp_size: "1156894",
  hash: "942a022250b94ff07f7bf5db9f146b5d"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200.gif",
  width: "356",
  height: "200",
  size: "4460959",
  mp4: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200.mp4",
  mp4_size: "280409",
  webp: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/200.webp",
  webp_size: "798504"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy-loop.mp4",
  mp4_size: "1511365"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy.mp4",
  mp4_size: "450625"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/2tL9sSdgiMNuNgBfdy/giphy-preview.gif",
  width: "114",
  height: "64",
  size: "48314"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/2tL9sSdgiMNuNgBfdy/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "stressed work GIF by Quinta B",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=2tL9sSdgiMNuNgBfdy&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=2tL9sSdgiMNuNgBfdy&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=2tL9sSdgiMNuNgBfdy&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "piTBuMVRLEr3q8h147",
  slug: "taylorbisciotti-piTBuMVRLEr3q8h147",
  url: "https://giphy.com/gifs/taylorbisciotti-piTBuMVRLEr3q8h147",
  bitly_gif_url: "https://gph.is/2yW0vna",
  bitly_url: "https://gph.is/2yW0vna",
  embed_url: "https://giphy.com/embed/piTBuMVRLEr3q8h147",
  username: "taylorbisciotti",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-11-07 19:11:58",
  trending_datetime: "2018-12-21 06:15:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/TaylorBisciotti/2RX3Bfeykn4N.png",
  banner_url: "https://media0.giphy.com/headers/TaylorBisciotti/SXaLTsvdoXSa.png",
  banner_image: "https://media0.giphy.com/headers/TaylorBisciotti/SXaLTsvdoXSa.png",
  profile_url: "https://giphy.com/TaylorBisciotti/",
  username: "TaylorBisciotti",
  display_name: "Taylor Bisciotti",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200_s.gif",
  width: "232",
  height: "200",
  size: "9577"
  },
  original_still: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy_s.gif",
  width: "480",
  height: "413",
  size: "34571"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200w.gif",
  width: "200",
  height: "172",
  size: "250463",
  mp4: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200w.mp4",
  mp4_size: "34665",
  webp: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200w.webp",
  webp_size: "100342"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/100_s.gif",
  width: "116",
  height: "100",
  size: "3334"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200_d.gif",
  width: "232",
  height: "200",
  size: "55615",
  webp: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200_d.webp",
  webp_size: "19680"
  },
  preview: {
  width: "302",
  height: "258",
  mp4: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy-preview.mp4",
  mp4_size: "28387"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/100.gif",
  width: "116",
  height: "100",
  size: "94422",
  mp4: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/100.mp4",
  mp4_size: "16566",
  webp: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/100.webp",
  webp_size: "47026"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy-downsized_s.gif",
  width: "480",
  height: "413",
  size: "34571"
  },
  downsized: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy.gif",
  width: "480",
  height: "413",
  size: "1310493"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy.gif",
  width: "480",
  height: "413",
  size: "1310493"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/100w_s.gif",
  width: "100",
  height: "86",
  size: "2746"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy-preview.webp",
  width: "293",
  height: "252",
  size: "49936"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200w_s.gif",
  width: "200",
  height: "172",
  size: "7536"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/100w.gif",
  width: "100",
  height: "86",
  size: "71889",
  mp4: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/100w.mp4",
  mp4_size: "13091",
  webp: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/100w.webp",
  webp_size: "39270"
  },
  downsized_small: {
  width: "480",
  height: "412",
  mp4: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy-downsized-small.mp4",
  mp4_size: "124908"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200w_d.gif",
  width: "200",
  height: "172",
  size: "42197",
  webp: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200w_d.webp",
  webp_size: "15726"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy.gif",
  width: "480",
  height: "413",
  size: "1310493"
  },
  original: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy.gif",
  width: "480",
  height: "413",
  size: "1310493",
  frames: "38",
  mp4: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy.mp4",
  mp4_size: "116260",
  webp: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy.webp",
  webp_size: "381364",
  hash: "b37c0adca2bc5092e636a97bf9c6c58b"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200.gif",
  width: "232",
  height: "200",
  size: "330360",
  mp4: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200.mp4",
  mp4_size: "44245",
  webp: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/200.webp",
  webp_size: "124394"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy-loop.mp4",
  mp4_size: "1640541"
  },
  original_mp4: {
  width: "480",
  height: "412",
  mp4: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy.mp4",
  mp4_size: "116260"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/piTBuMVRLEr3q8h147/giphy-preview.gif",
  width: "174",
  height: "150",
  size: "49966"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/piTBuMVRLEr3q8h147/480w_s.jpg",
  width: "480",
  height: "413"
  }
  },
  title: "nfl network juggling GIF by Taylor Bisciotti",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=piTBuMVRLEr3q8h147&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=piTBuMVRLEr3q8h147&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=piTBuMVRLEr3q8h147&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l2RnGkkfr5frJAFMI",
  slug: "dram-l2RnGkkfr5frJAFMI",
  url: "https://giphy.com/gifs/dram-l2RnGkkfr5frJAFMI",
  bitly_gif_url: "https://gph.is/2izuooj",
  bitly_url: "https://gph.is/2izuooj",
  embed_url: "https://giphy.com/embed/l2RnGkkfr5frJAFMI",
  username: "dram",
  source: "https://bigbabydram.com",
  rating: "pg",
  content_url: "",
  source_tld: "bigbabydram.com",
  source_post_url: "https://bigbabydram.com",
  is_sticker: 0,
  import_datetime: "2017-12-01 20:00:49",
  trending_datetime: "2018-12-21 06:00:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/dram/XsDZMHmbEbXP.gif",
  banner_url: "",
  profile_url: "https://giphy.com/dram/",
  username: "dram",
  display_name: "DRAM",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200_s.gif",
  width: "378",
  height: "200",
  size: "55769"
  },
  original_still: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy_s.gif",
  width: "480",
  height: "254",
  size: "93901"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200w.gif",
  width: "200",
  height: "106",
  size: "850847",
  mp4: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200w.mp4",
  mp4_size: "82438",
  webp: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200w.webp",
  webp_size: "308060"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/100_s.gif",
  width: "189",
  height: "100",
  size: "15480"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200_d.gif",
  width: "378",
  height: "200",
  size: "324385",
  webp: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200_d.webp",
  webp_size: "71982"
  },
  preview: {
  width: "188",
  height: "100",
  mp4: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy-preview.mp4",
  mp4_size: "34497"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/100.gif",
  width: "189",
  height: "100",
  size: "800074",
  mp4: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/100.mp4",
  mp4_size: "75529",
  webp: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/100.webp",
  webp_size: "284924"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy-downsized_s.gif",
  width: "250",
  height: "132",
  size: "26883"
  },
  downsized: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy-downsized.gif",
  width: "250",
  height: "132",
  size: "1249812"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy.gif",
  width: "480",
  height: "254",
  size: "5095113"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/100w_s.gif",
  width: "100",
  height: "53",
  size: "5422"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy-preview.webp",
  width: "193",
  height: "102",
  size: "48890"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200w_s.gif",
  width: "200",
  height: "106",
  size: "16691"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/100w.gif",
  width: "100",
  height: "53",
  size: "229645",
  mp4: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/100w.mp4",
  mp4_size: "32326",
  webp: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/100w.webp",
  webp_size: "115114"
  },
  downsized_small: {
  width: "332",
  height: "176",
  mp4: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy-downsized-small.mp4",
  mp4_size: "102000"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200w_d.gif",
  width: "200",
  height: "106",
  size: "92027",
  webp: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200w_d.webp",
  webp_size: "28830"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy-downsized-medium.gif",
  width: "384",
  height: "203",
  size: "3166805"
  },
  original: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy.gif",
  width: "480",
  height: "254",
  size: "5095113",
  frames: "64",
  mp4: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy.mp4",
  mp4_size: "304608",
  webp: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy.webp",
  webp_size: "1256698",
  hash: "fd8f3ce91429db0339a2b003b8bedcac"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200.gif",
  width: "378",
  height: "200",
  size: "3060070",
  mp4: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200.mp4",
  mp4_size: "203288",
  webp: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/200.webp",
  webp_size: "772006"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy-loop.mp4",
  mp4_size: "3221620"
  },
  original_mp4: {
  width: "480",
  height: "252",
  mp4: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy.mp4",
  mp4_size: "304608"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/l2RnGkkfr5frJAFMI/giphy-preview.gif",
  width: "129",
  height: "68",
  size: "48187"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/l2RnGkkfr5frJAFMI/480w_s.jpg",
  width: "480",
  height: "254"
  }
  },
  title: "big baby d.r.a.m. no GIF by DRAM",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2RnGkkfr5frJAFMI&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2RnGkkfr5frJAFMI&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2RnGkkfr5frJAFMI&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l4Jz9KfwxdBQ5YHaU",
  slug: "chordoverstreet-chord-overstreet-l4Jz9KfwxdBQ5YHaU",
  url: "https://giphy.com/gifs/chordoverstreet-chord-overstreet-l4Jz9KfwxdBQ5YHaU",
  bitly_gif_url: "https://gph.is/2hTBsGa",
  bitly_url: "https://gph.is/2hTBsGa",
  embed_url: "https://giphy.com/embed/l4Jz9KfwxdBQ5YHaU",
  username: "chordoverstreet",
  source: "https://chordoverstreet.com",
  rating: "pg",
  content_url: "",
  source_tld: "chordoverstreet.com",
  source_post_url: "https://chordoverstreet.com",
  is_sticker: 0,
  import_datetime: "2016-12-15 23:42:24",
  trending_datetime: "2018-12-21 05:45:01",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/chordoverstreet/JOZ9h6MaNqt6.jpeg",
  banner_url: "https://media2.giphy.com/headers/chordoverstreet/JmxzONSBgv9u.jpg",
  banner_image: "https://media2.giphy.com/headers/chordoverstreet/JmxzONSBgv9u.jpg",
  profile_url: "https://giphy.com/chordoverstreet/",
  username: "chordoverstreet",
  display_name: "Chord Overstreet",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200_s.gif",
  width: "333",
  height: "200",
  size: "23153"
  },
  original_still: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy_s.gif",
  width: "600",
  height: "360",
  size: "53212"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200w.gif",
  width: "200",
  height: "120",
  size: "203484",
  mp4: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200w.mp4",
  mp4_size: "83573",
  webp: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200w.webp",
  webp_size: "195870"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/100_s.gif",
  width: "167",
  height: "100",
  size: "7889"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200_d.gif",
  width: "333",
  height: "200",
  size: "129663",
  webp: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200_d.webp",
  webp_size: "82714"
  },
  preview: {
  width: "168",
  height: "100",
  mp4: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy-preview.mp4",
  mp4_size: "46264"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/100.gif",
  width: "167",
  height: "100",
  size: "153515",
  mp4: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/100.mp4",
  mp4_size: "67243",
  webp: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/100.webp",
  webp_size: "154444"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy-downsized_s.gif",
  width: "600",
  height: "360",
  size: "53212"
  },
  downsized: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy-downsized.gif",
  width: "600",
  height: "360",
  size: "1257344"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy.gif",
  width: "600",
  height: "360",
  size: "1257344"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/100w_s.gif",
  width: "100",
  height: "60",
  size: "3943"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy-preview.webp",
  width: "132",
  height: "79",
  size: "48940"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200w_s.gif",
  width: "200",
  height: "120",
  size: "10073"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/100w.gif",
  width: "100",
  height: "60",
  size: "67486",
  mp4: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/100w.mp4",
  mp4_size: "31681",
  webp: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/100w.webp",
  webp_size: "80760"
  },
  downsized_small: {
  width: "483",
  height: "290",
  mp4: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy-downsized-small.mp4",
  mp4_size: "195586"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200w_d.gif",
  width: "200",
  height: "120",
  size: "52138",
  webp: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200w_d.webp",
  webp_size: "44470"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy.gif",
  width: "600",
  height: "360",
  size: "1257344"
  },
  original: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy.gif",
  width: "600",
  height: "360",
  size: "1257344",
  frames: "27",
  mp4: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy.mp4",
  mp4_size: "211995",
  webp: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy.webp",
  webp_size: "853392",
  hash: "bd159ae2e106dff20185a6018cc88b3b"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200.gif",
  width: "333",
  height: "200",
  size: "500977",
  mp4: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200.mp4",
  mp4_size: "139417",
  webp: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/200.webp",
  webp_size: "363894"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy-loop.mp4",
  mp4_size: "1283620"
  },
  original_mp4: {
  width: "480",
  height: "288",
  mp4: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy.mp4",
  mp4_size: "211995"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/l4Jz9KfwxdBQ5YHaU/giphy-preview.gif",
  width: "130",
  height: "78",
  size: "49803"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/l4Jz9KfwxdBQ5YHaU/480w_s.jpg",
  width: "480",
  height: "288"
  }
  },
  title: "happy holidays GIF by Chord Overstreet",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4Jz9KfwxdBQ5YHaU&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4Jz9KfwxdBQ5YHaU&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l4Jz9KfwxdBQ5YHaU&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3oz8xt8o8ze2JTnwkg",
  slug: "red-fang-3oz8xt8o8ze2JTnwkg",
  url: "https://giphy.com/gifs/red-fang-3oz8xt8o8ze2JTnwkg",
  bitly_gif_url: "https://gph.is/2hPcXtT",
  bitly_url: "https://gph.is/2hPcXtT",
  embed_url: "https://giphy.com/embed/3oz8xt8o8ze2JTnwkg",
  username: "redfang",
  source: "https://www.redfang.net",
  rating: "pg",
  content_url: "",
  source_tld: "www.redfang.net",
  source_post_url: "https://www.redfang.net",
  is_sticker: 0,
  import_datetime: "2016-12-14 23:15:15",
  trending_datetime: "2018-12-21 05:30:01",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/redfang/H9KWyZCht7EM.jpg",
  banner_url: "https://media1.giphy.com/headers/redfang/bC1QRIecCvGJ.jpg",
  banner_image: "https://media1.giphy.com/headers/redfang/bC1QRIecCvGJ.jpg",
  profile_url: "https://giphy.com/redfang/",
  username: "redfang",
  display_name: "Red Fang",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200_s.gif",
  width: "323",
  height: "200",
  size: "39008"
  },
  original_still: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy_s.gif",
  width: "500",
  height: "310",
  size: "88641"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200w.gif",
  width: "200",
  height: "124",
  size: "336974",
  mp4: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200w.mp4",
  mp4_size: "70697",
  webp: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200w.webp",
  webp_size: "299858"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/100_s.gif",
  width: "162",
  height: "100",
  size: "11977"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200_d.gif",
  width: "323",
  height: "200",
  size: "223079",
  webp: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200_d.webp",
  webp_size: "139116"
  },
  preview: {
  width: "150",
  height: "92",
  mp4: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy-preview.mp4",
  mp4_size: "49007"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/100.gif",
  width: "162",
  height: "100",
  size: "232496",
  mp4: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/100.mp4",
  mp4_size: "53596",
  webp: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/100.webp",
  webp_size: "217790"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy-tumblr_s.gif",
  width: "500",
  height: "310",
  size: "88641"
  },
  downsized: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy-tumblr.gif",
  width: "500",
  height: "310",
  size: "1896160"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy.gif",
  width: "500",
  height: "310",
  size: "1896160"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/100w_s.gif",
  width: "100",
  height: "62",
  size: "5657"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy-preview.webp",
  width: "115",
  height: "71",
  size: "48388"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200w_s.gif",
  width: "200",
  height: "124",
  size: "16658"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/100w.gif",
  width: "100",
  height: "62",
  size: "97940",
  mp4: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/100w.mp4",
  mp4_size: "24325",
  webp: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/100w.webp",
  webp_size: "100722"
  },
  downsized_small: {
  width: "419",
  height: "260",
  mp4: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy-downsized-small.mp4",
  mp4_size: "179416"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200w_d.gif",
  width: "200",
  height: "124",
  size: "90577",
  webp: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200w_d.webp",
  webp_size: "64206"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy.gif",
  width: "500",
  height: "310",
  size: "1896160"
  },
  original: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy.gif",
  width: "500",
  height: "310",
  size: "1896160",
  frames: "28",
  mp4: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy.mp4",
  mp4_size: "216436",
  webp: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy.webp",
  webp_size: "1408238",
  hash: "bb274b03acd4712b25bfcd3a5d40c631"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200.gif",
  width: "323",
  height: "200",
  size: "836807",
  mp4: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200.mp4",
  mp4_size: "125385",
  webp: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/200.webp",
  webp_size: "642838"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy-loop.mp4",
  mp4_size: "2695158"
  },
  original_mp4: {
  width: "480",
  height: "296",
  mp4: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy.mp4",
  mp4_size: "216436"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/3oz8xt8o8ze2JTnwkg/giphy-preview.gif",
  width: "115",
  height: "71",
  size: "49228"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/3oz8xt8o8ze2JTnwkg/480w_s.jpg",
  width: "480",
  height: "298"
  }
  },
  title: "happy holidays GIF by Red Fang",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3oz8xt8o8ze2JTnwkg&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3oz8xt8o8ze2JTnwkg&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3oz8xt8o8ze2JTnwkg&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3oz8xu0ZxvPZuoNTOg",
  slug: "bretteldredge-brett-eldredge-3oz8xu0ZxvPZuoNTOg",
  url: "https://giphy.com/gifs/bretteldredge-brett-eldredge-3oz8xu0ZxvPZuoNTOg",
  bitly_gif_url: "https://gph.is/2fcF35O",
  bitly_url: "https://gph.is/2fcF35O",
  embed_url: "https://giphy.com/embed/3oz8xu0ZxvPZuoNTOg",
  username: "bretteldredge",
  source: "",
  rating: "pg",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-10-28 02:54:55",
  trending_datetime: "2018-12-21 05:15:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/bretteldredge/uOyvH3rqzqcu.jpg",
  banner_url: "https://media0.giphy.com/headers/bretteldredge/VdaT0Jc2c70S.png",
  banner_image: "https://media0.giphy.com/headers/bretteldredge/VdaT0Jc2c70S.png",
  profile_url: "https://giphy.com/bretteldredge/",
  username: "bretteldredge",
  display_name: "Brett Eldredge",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200_s.gif",
  width: "356",
  height: "200",
  size: "22986"
  },
  original_still: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy_s.gif",
  width: "480",
  height: "270",
  size: "38861"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200w.gif",
  width: "200",
  height: "113",
  size: "423329",
  mp4: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200w.mp4",
  mp4_size: "19611",
  webp: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200w.webp",
  webp_size: "138708"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/100_s.gif",
  width: "178",
  height: "100",
  size: "7384"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200_d.gif",
  width: "356",
  height: "200",
  size: "127602",
  webp: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200_d.webp",
  webp_size: "38678"
  },
  preview: {
  width: "402",
  height: "226",
  mp4: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy-preview.mp4",
  mp4_size: "43992"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/100.gif",
  width: "178",
  height: "100",
  size: "353679",
  mp4: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/100.mp4",
  mp4_size: "17901",
  webp: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/100.webp",
  webp_size: "115832"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "38861"
  },
  downsized: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy-downsized.gif",
  width: "480",
  height: "270",
  size: "1937913"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy.gif",
  width: "480",
  height: "270",
  size: "1937913"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/100w_s.gif",
  width: "100",
  height: "57",
  size: "3184"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy-preview.webp",
  width: "272",
  height: "153",
  size: "48080"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200w_s.gif",
  width: "200",
  height: "113",
  size: "8814"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/480w_s.jpg",
  width: "480",
  height: "270",
  size: "9213"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/100w.gif",
  width: "100",
  height: "57",
  size: "149546",
  mp4: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/100w.mp4",
  mp4_size: "9235",
  webp: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/100w.webp",
  webp_size: "57564"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy-downsized-small.mp4",
  mp4_size: "70865"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200w_d.gif",
  width: "200",
  height: "113",
  size: "46076",
  webp: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200w_d.webp",
  webp_size: "17894"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy.gif",
  width: "480",
  height: "270",
  size: "1937913"
  },
  original: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy.gif",
  width: "480",
  height: "270",
  size: "1937913",
  frames: "50",
  mp4: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy.mp4",
  mp4_size: "69438",
  webp: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy.webp",
  webp_size: "466918",
  hash: "80f8569c8b4b7d2b58116feeba1cb9f9"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200.gif",
  width: "356",
  height: "200",
  size: "1111708",
  mp4: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200.mp4",
  mp4_size: "42560",
  webp: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/200.webp",
  webp_size: "284874"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy-loop.mp4",
  mp4_size: "701406"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy.mp4",
  mp4_size: "69438"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/3oz8xu0ZxvPZuoNTOg/giphy-preview.gif",
  width: "169",
  height: "95",
  size: "49718"
  }
  },
  title: "baby it's cold outside GIF by Brett Eldredge",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3oz8xu0ZxvPZuoNTOg&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3oz8xu0ZxvPZuoNTOg&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3oz8xu0ZxvPZuoNTOg&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3ohs7TqlF2KvFJ5huM",
  slug: "dram-3ohs7TqlF2KvFJ5huM",
  url: "https://giphy.com/gifs/dram-3ohs7TqlF2KvFJ5huM",
  bitly_gif_url: "https://gph.is/2zRG8GW",
  bitly_url: "https://gph.is/2zRG8GW",
  embed_url: "https://giphy.com/embed/3ohs7TqlF2KvFJ5huM",
  username: "dram",
  source: " https://bigbabydram.com",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: " https://bigbabydram.com",
  is_sticker: 0,
  import_datetime: "2017-11-18 01:57:00",
  trending_datetime: "2018-12-21 05:00:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/dram/XsDZMHmbEbXP.gif",
  banner_url: "",
  profile_url: "https://giphy.com/dram/",
  username: "dram",
  display_name: "DRAM",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200_s.gif",
  width: "379",
  height: "200",
  size: "52239"
  },
  original_still: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy_s.gif",
  width: "720",
  height: "380",
  size: "72506"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200w.gif",
  width: "200",
  height: "106",
  size: "665826",
  mp4: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200w.mp4",
  mp4_size: "53989",
  webp: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200w.webp",
  webp_size: "254898"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/100_s.gif",
  width: "190",
  height: "100",
  size: "14326"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200_d.gif",
  width: "379",
  height: "200",
  size: "296275",
  webp: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200_d.webp",
  webp_size: "103798"
  },
  preview: {
  width: "288",
  height: "152",
  mp4: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy-preview.mp4",
  mp4_size: "41206"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/100.gif",
  width: "190",
  height: "100",
  size: "587065",
  mp4: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/100.mp4",
  mp4_size: "48563",
  webp: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/100.webp",
  webp_size: "231174"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy-downsized_s.gif",
  width: "250",
  height: "131",
  size: "23024"
  },
  downsized: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy-downsized.gif",
  width: "250",
  height: "131",
  size: "966416"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy.gif",
  width: "720",
  height: "380",
  size: "3157861"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/100w_s.gif",
  width: "100",
  height: "53",
  size: "5185"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy-preview.webp",
  width: "172",
  height: "91",
  size: "49238"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200w_s.gif",
  width: "200",
  height: "106",
  size: "15785"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/100w.gif",
  width: "100",
  height: "53",
  size: "189912",
  mp4: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/100w.mp4",
  mp4_size: "20480",
  webp: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/100w.webp",
  webp_size: "92002"
  },
  downsized_small: {
  width: "288",
  height: "152",
  mp4: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy-downsized-small.mp4",
  mp4_size: "45595"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200w_d.gif",
  width: "200",
  height: "106",
  size: "86542",
  webp: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200w_d.webp",
  webp_size: "36970"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy.gif",
  width: "720",
  height: "380",
  size: "3157861"
  },
  original: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy.gif",
  width: "720",
  height: "380",
  size: "3157861",
  frames: "43",
  mp4: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy.mp4",
  mp4_size: "233589",
  webp: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy.webp",
  webp_size: "2678150",
  hash: "9d5bedaa42c4048009c5ad4d87891f5e"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200.gif",
  width: "379",
  height: "200",
  size: "2201784",
  mp4: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200.mp4",
  mp4_size: "132819",
  webp: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/200.webp",
  webp_size: "689486"
  },
  hd: {
  width: "720",
  height: "380",
  mp4: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy-hd.mp4",
  mp4_size: "1392595"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy-loop.mp4",
  mp4_size: "2697083"
  },
  original_mp4: {
  width: "480",
  height: "252",
  mp4: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy.mp4",
  mp4_size: "233589"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/3ohs7TqlF2KvFJ5huM/giphy-preview.gif",
  width: "125",
  height: "66",
  size: "47526"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/3ohs7TqlF2KvFJ5huM/480w_s.jpg",
  width: "480",
  height: "253"
  }
  },
  title: "merry christmas happy holidays GIF by DRAM",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohs7TqlF2KvFJ5huM&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohs7TqlF2KvFJ5huM&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohs7TqlF2KvFJ5huM&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l3vRdYenGYybAeakg",
  slug: "debbyryan-happy-holidays-debby-ryan-l3vRdYenGYybAeakg",
  url: "https://giphy.com/gifs/debbyryan-happy-holidays-debby-ryan-l3vRdYenGYybAeakg",
  bitly_gif_url: "https://gph.is/2hEiBC7",
  bitly_url: "https://gph.is/2hEiBC7",
  embed_url: "https://giphy.com/embed/l3vRdYenGYybAeakg",
  username: "debbyryan",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-12-20 16:11:14",
  trending_datetime: "2018-12-21 04:45:01",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/debbyryan/ifIAlgI38w7Q.gif",
  banner_url: "https://media1.giphy.com/headers/debbyryan/uGHN4dT0wbFA.gif",
  banner_image: "https://media1.giphy.com/headers/debbyryan/uGHN4dT0wbFA.gif",
  profile_url: "https://giphy.com/debbyryan/",
  username: "debbyryan",
  display_name: "Debby Ryan",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200_s.gif",
  width: "356",
  height: "200",
  size: "47988"
  },
  original_still: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy_s.gif",
  width: "480",
  height: "270",
  size: "95809"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200w.gif",
  width: "200",
  height: "113",
  size: "1695985",
  mp4: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200w.mp4",
  mp4_size: "104169",
  webp: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200w.webp",
  webp_size: "584142"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/100_s.gif",
  width: "178",
  height: "100",
  size: "13228"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200_d.gif",
  width: "356",
  height: "200",
  size: "299000",
  webp: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200_d.webp",
  webp_size: "94610"
  },
  preview: {
  width: "196",
  height: "110",
  mp4: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy-preview.mp4",
  mp4_size: "41304"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/100.gif",
  width: "178",
  height: "100",
  size: "1412039",
  mp4: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/100.mp4",
  mp4_size: "87321",
  webp: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/100.webp",
  webp_size: "486666"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy-downsized_s.gif",
  width: "250",
  height: "140",
  size: "25838"
  },
  downsized: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy-downsized.gif",
  width: "250",
  height: "140",
  size: "1390948"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy-downsized-large.gif",
  width: "384",
  height: "216",
  size: "6006189"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/100w_s.gif",
  width: "100",
  height: "57",
  size: "5064"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy-preview.webp",
  width: "172",
  height: "97",
  size: "48194"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200w_s.gif",
  width: "200",
  height: "113",
  size: "15871"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/100w.gif",
  width: "100",
  height: "57",
  size: "527579",
  mp4: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/100w.mp4",
  mp4_size: "38284",
  webp: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/100w.webp",
  webp_size: "211844"
  },
  downsized_small: {
  width: "263",
  height: "148",
  mp4: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy-downsized-small.mp4",
  mp4_size: "142391"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200w_d.gif",
  width: "200",
  height: "113",
  size: "97519",
  webp: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200w_d.webp",
  webp_size: "37596"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy-downsized-medium.gif",
  width: "384",
  height: "216",
  size: "4778098"
  },
  original: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy.gif",
  width: "480",
  height: "270",
  size: "10387698",
  frames: "105",
  mp4: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy.mp4",
  mp4_size: "421951",
  webp: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy.webp",
  webp_size: "2462668",
  hash: "a280f7100c89c5c161f5c86849567a98"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200.gif",
  width: "356",
  height: "200",
  size: "5251558",
  mp4: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200.mp4",
  mp4_size: "246662",
  webp: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/200.webp",
  webp_size: "1331984"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy-loop.mp4",
  mp4_size: "2021163"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy.mp4",
  mp4_size: "421951"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/l3vRdYenGYybAeakg/giphy-preview.gif",
  width: "123",
  height: "69",
  size: "49076"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/l3vRdYenGYybAeakg/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "happy holidays christmas lights GIF by Debby Ryan",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l3vRdYenGYybAeakg&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l3vRdYenGYybAeakg&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l3vRdYenGYybAeakg&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l2QEgnwtWU4VwIARq",
  slug: "hanson-christmas-l2QEgnwtWU4VwIARq",
  url: "https://giphy.com/gifs/hanson-christmas-l2QEgnwtWU4VwIARq",
  bitly_gif_url: "https://gph.is/2zSWb7u",
  bitly_url: "https://gph.is/2zSWb7u",
  embed_url: "https://giphy.com/embed/l2QEgnwtWU4VwIARq",
  username: "hanson",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-11-18 00:45:20",
  trending_datetime: "2018-12-21 04:30:01",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/hanson/VnARfDhNPIAN.jpg",
  banner_url: "https://media1.giphy.com/headers/hanson/UoQH29nY7SSY.jpeg",
  banner_image: "https://media1.giphy.com/headers/hanson/UoQH29nY7SSY.jpeg",
  profile_url: "https://giphy.com/hanson/",
  username: "hanson",
  display_name: "Hanson",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200_s.gif",
  width: "356",
  height: "200",
  size: "43327"
  },
  original_still: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy_s.gif",
  width: "480",
  height: "270",
  size: "72351"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200w.gif",
  width: "200",
  height: "113",
  size: "638347",
  mp4: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200w.mp4",
  mp4_size: "150721",
  webp: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200w.webp",
  webp_size: "615144"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/100_s.gif",
  width: "178",
  height: "100",
  size: "13258"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200_d.gif",
  width: "356",
  height: "200",
  size: "208675",
  webp: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200_d.webp",
  webp_size: "122960"
  },
  preview: {
  width: "177",
  height: "100",
  mp4: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy-preview.mp4",
  mp4_size: "39995"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/100.gif",
  width: "178",
  height: "100",
  size: "519209",
  mp4: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/100.mp4",
  mp4_size: "215072",
  webp: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/100.webp",
  webp_size: "522466"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy-downsized_s.gif",
  width: "250",
  height: "140",
  size: "25028"
  },
  downsized: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy-downsized.gif",
  width: "250",
  height: "140",
  size: "740441"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy.gif",
  width: "480",
  height: "270",
  size: "3278517"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/100w_s.gif",
  width: "100",
  height: "57",
  size: "5612"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy-preview.webp",
  width: "132",
  height: "74",
  size: "49954"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200w_s.gif",
  width: "200",
  height: "113",
  size: "16387"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/100w.gif",
  width: "100",
  height: "57",
  size: "174788",
  mp4: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/100w.mp4",
  mp4_size: "47070",
  webp: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/100w.webp",
  webp_size: "217956"
  },
  downsized_small: {
  width: "252",
  height: "142",
  mp4: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy-downsized-small.mp4",
  mp4_size: "134403"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200w_d.gif",
  width: "200",
  height: "113",
  size: "76458",
  webp: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200w_d.webp",
  webp_size: "54426"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy.gif",
  width: "480",
  height: "270",
  size: "3278517"
  },
  original: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy.gif",
  width: "480",
  height: "270",
  size: "3278517",
  frames: "79",
  mp4: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy.mp4",
  mp4_size: "533133",
  webp: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy.webp",
  webp_size: "2153274",
  hash: "72604585ba17b471ceb9295c0b8577ce"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200.gif",
  width: "356",
  height: "200",
  size: "1874144",
  mp4: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200.mp4",
  mp4_size: "352279",
  webp: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/200.webp",
  webp_size: "1370188"
  },
  hd: {
  width: "960",
  height: "540",
  mp4: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy-hd.mp4",
  mp4_size: "1806035"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy-loop.mp4",
  mp4_size: "4063103"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy.mp4",
  mp4_size: "533133"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/l2QEgnwtWU4VwIARq/giphy-preview.gif",
  width: "137",
  height: "77",
  size: "48151"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/l2QEgnwtWU4VwIARq/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "merry christmas GIF by Hanson",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2QEgnwtWU4VwIARq&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2QEgnwtWU4VwIARq&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2QEgnwtWU4VwIARq&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "NT239BZIrr2W3TdSin",
  slug: "lauvsongs-lauv-NT239BZIrr2W3TdSin",
  url: "https://giphy.com/gifs/lauvsongs-lauv-NT239BZIrr2W3TdSin",
  bitly_gif_url: "https://gph.is/2yFpHxX",
  bitly_url: "https://gph.is/2yFpHxX",
  embed_url: "https://giphy.com/embed/NT239BZIrr2W3TdSin",
  username: "lauvsongs",
  source: "https://www.lauvsongs.com",
  rating: "g",
  content_url: "",
  source_tld: "www.lauvsongs.com",
  source_post_url: "https://www.lauvsongs.com",
  is_sticker: 0,
  import_datetime: "2018-10-29 19:17:43",
  trending_datetime: "2018-12-21 04:15:01",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/lauvsongs/2Wdj3nV5FNxC.jpg",
  banner_url: "https://media2.giphy.com/headers/lauvsongs/n8rYhxVT3QaG.jpg",
  banner_image: "https://media2.giphy.com/headers/lauvsongs/n8rYhxVT3QaG.jpg",
  profile_url: "https://giphy.com/lauvsongs/",
  username: "lauvsongs",
  display_name: "Lauv",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200_s.gif",
  width: "355",
  height: "200",
  size: "39152"
  },
  original_still: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy_s.gif",
  width: "700",
  height: "394",
  size: "49866"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200w.gif",
  width: "200",
  height: "113",
  size: "370401",
  mp4: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200w.mp4",
  mp4_size: "80809",
  webp: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200w.webp",
  webp_size: "168788"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/100_s.gif",
  width: "178",
  height: "100",
  size: "12219"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200_d.gif",
  width: "355",
  height: "200",
  size: "249216",
  webp: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200_d.webp",
  webp_size: "94132"
  },
  preview: {
  width: "186",
  height: "104",
  mp4: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy-preview.mp4",
  mp4_size: "45055"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/100.gif",
  width: "178",
  height: "100",
  size: "300167",
  mp4: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/100.mp4",
  mp4_size: "70636",
  webp: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/100.webp",
  webp_size: "136848"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy-downsized_s.gif",
  width: "448",
  height: "252",
  size: "60306"
  },
  downsized: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy-downsized.gif",
  width: "448",
  height: "252",
  size: "1742633"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy.gif",
  width: "700",
  height: "394",
  size: "2061015"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/100w_s.gif",
  width: "100",
  height: "57",
  size: "5705"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy-preview.webp",
  width: "181",
  height: "102",
  size: "48918"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200w_s.gif",
  width: "200",
  height: "113",
  size: "14511"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/100w.gif",
  width: "100",
  height: "57",
  size: "104139",
  mp4: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/100w.mp4",
  mp4_size: "28146",
  webp: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/100w.webp",
  webp_size: "55042"
  },
  downsized_small: {
  width: "280",
  height: "156",
  mp4: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy-downsized-small.mp4",
  mp4_size: "84789"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200w_d.gif",
  width: "200",
  height: "113",
  size: "83584",
  webp: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200w_d.webp",
  webp_size: "36106"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy.gif",
  width: "700",
  height: "394",
  size: "2061015"
  },
  original: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy.gif",
  width: "700",
  height: "394",
  size: "2061015",
  frames: "28",
  mp4: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy.mp4",
  mp4_size: "425533",
  webp: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy.webp",
  webp_size: "1995426",
  hash: "208284df1685b1ca11b5f7866f16793e"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200.gif",
  width: "355",
  height: "200",
  size: "1122866",
  mp4: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200.mp4",
  mp4_size: "206460",
  webp: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/200.webp",
  webp_size: "445020"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy-loop.mp4",
  mp4_size: "2855805"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy.mp4",
  mp4_size: "425533"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/NT239BZIrr2W3TdSin/giphy-preview.gif",
  width: "131",
  height: "74",
  size: "49606"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/NT239BZIrr2W3TdSin/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "present christmas morning GIF by Lauv",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=NT239BZIrr2W3TdSin&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=NT239BZIrr2W3TdSin&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=NT239BZIrr2W3TdSin&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "26tP7Prccr6Ho4Mdq",
  slug: "christmasclassics-matthias-brown-universal-christmas-classics-26tP7Prccr6Ho4Mdq",
  url: "https://giphy.com/gifs/christmasclassics-matthias-brown-universal-christmas-classics-26tP7Prccr6Ho4Mdq",
  bitly_gif_url: "https://gph.is/1PrGyrL",
  bitly_url: "https://gph.is/1PrGyrL",
  embed_url: "https://giphy.com/embed/26tP7Prccr6Ho4Mdq",
  username: "christmasclassics",
  source: "",
  rating: "pg",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2015-12-01 14:54:45",
  trending_datetime: "2018-12-21 04:00:01",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/christmasclassics/ikbZV8GmCYmB.JPG",
  banner_url: "https://media1.giphy.com/headers/christmasclassics/EnjiIjtlopHx.jpg",
  banner_image: "https://media1.giphy.com/headers/christmasclassics/EnjiIjtlopHx.jpg",
  profile_url: "https://giphy.com/christmasclassics/",
  username: "christmasclassics",
  display_name: "Christmas Classics",
  is_verified: false
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200_s.gif",
  width: "200",
  height: "200"
  },
  original_still: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy_s.gif",
  width: "500",
  height: "500"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200w.gif",
  width: "200",
  height: "200",
  size: "28309",
  mp4: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200w.mp4",
  mp4_size: "10376",
  webp: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200w.webp",
  webp_size: "23730"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/100_s.gif",
  width: "100",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200_d.gif",
  width: "200",
  height: "200",
  size: "28309",
  webp: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200_d.webp",
  webp_size: "23730"
  },
  preview: {
  width: "500",
  height: "500",
  mp4: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy-preview.mp4",
  mp4_size: "46807"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/100.gif",
  width: "100",
  height: "100",
  size: "9221",
  mp4: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/100.mp4",
  mp4_size: "4429",
  webp: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/100.webp",
  webp_size: "9004"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy-downsized_s.gif",
  width: "500",
  height: "500",
  size: "93222"
  },
  downsized: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy-downsized.gif",
  width: "500",
  height: "500",
  size: "152658"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy.gif",
  width: "500",
  height: "500",
  size: "152658"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/100w_s.gif",
  width: "100",
  height: "100"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy-preview.webp",
  width: "333",
  height: "333",
  size: "49878"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200w_s.gif",
  width: "200",
  height: "200"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/100w.gif",
  width: "100",
  height: "100",
  size: "9221",
  mp4: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/100w.mp4",
  mp4_size: "4429",
  webp: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/100w.webp",
  webp_size: "9004"
  },
  downsized_small: {
  width: "500",
  height: "500",
  mp4: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy-downsized-small.mp4",
  mp4_size: "46807"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200w_d.gif",
  width: "200",
  height: "200",
  size: "28309",
  webp: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200w_d.webp",
  webp_size: "23730"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy.gif",
  width: "500",
  height: "500",
  size: "152658"
  },
  original: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy.gif",
  width: "500",
  height: "500",
  size: "152658",
  frames: "2",
  mp4: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy.mp4",
  mp4_size: "32226",
  webp: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy.webp",
  webp_size: "99782"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200.gif",
  width: "200",
  height: "200",
  size: "28309",
  mp4: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200.mp4",
  mp4_size: "10376",
  webp: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/200.webp",
  webp_size: "23730"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy-loop.mp4",
  mp4_size: "1894032"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy.mp4",
  mp4_size: "32226"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/26tP7Prccr6Ho4Mdq/giphy-preview.gif",
  width: "286",
  height: "286",
  size: "49997"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/26tP7Prccr6Ho4Mdq/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "record player matthias brown GIF by Christmas Classics",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26tP7Prccr6Ho4Mdq&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26tP7Prccr6Ho4Mdq&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26tP7Prccr6Ho4Mdq&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "26FLdaDQ5f72FPbEI",
  slug: "girl-fashion-snow-26FLdaDQ5f72FPbEI",
  url: "https://giphy.com/gifs/girl-fashion-snow-26FLdaDQ5f72FPbEI",
  bitly_gif_url: "https://gph.is/2hSEASI",
  bitly_url: "https://gph.is/2hSEASI",
  embed_url: "https://giphy.com/embed/26FLdaDQ5f72FPbEI",
  username: "libbyvanderploeg",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-12-15 18:11:52",
  trending_datetime: "2018-12-21 03:45:01",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/libbyvanderploeg/F4K2UPKQVgrm.gif",
  banner_url: "https://media1.giphy.com/headers/libbyvanderploeg/XvB4hjBVbkTR.gif",
  banner_image: "https://media1.giphy.com/headers/libbyvanderploeg/XvB4hjBVbkTR.gif",
  profile_url: "https://giphy.com/libbyvanderploeg/",
  username: "libbyvanderploeg",
  display_name: "Libby VanderPloeg",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200_s.gif",
  width: "200",
  height: "200",
  size: "13206"
  },
  original_still: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy_s.gif",
  width: "480",
  height: "480",
  size: "71529"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200w.gif",
  width: "200",
  height: "200",
  size: "357782",
  mp4: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200w.mp4",
  mp4_size: "58205",
  webp: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200w.webp",
  webp_size: "111324"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/100_s.gif",
  width: "100",
  height: "100",
  size: "3691"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200_d.gif",
  width: "200",
  height: "200",
  size: "66153",
  webp: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200_d.webp",
  webp_size: "14218"
  },
  preview: {
  width: "384",
  height: "384",
  mp4: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy-preview.mp4",
  mp4_size: "23008"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/100.gif",
  width: "100",
  height: "100",
  size: "124452",
  mp4: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/100.mp4",
  mp4_size: "25511",
  webp: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/100.webp",
  webp_size: "49760"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy-downsized_s.gif",
  width: "480",
  height: "480",
  size: "71529"
  },
  downsized: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy-downsized.gif",
  width: "480",
  height: "480",
  size: "1369385"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy.gif",
  width: "480",
  height: "480",
  size: "1369385"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/100w_s.gif",
  width: "100",
  height: "100",
  size: "3691"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy-preview.webp",
  width: "480",
  height: "480",
  size: "35618"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200w_s.gif",
  width: "200",
  height: "200",
  size: "13206"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/100w.gif",
  width: "100",
  height: "100",
  size: "124452",
  mp4: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/100w.mp4",
  mp4_size: "25511",
  webp: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/100w.webp",
  webp_size: "49760"
  },
  downsized_small: {
  width: "432",
  height: "432",
  mp4: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy-downsized-small.mp4",
  mp4_size: "170517"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200w_d.gif",
  width: "200",
  height: "200",
  size: "66153",
  webp: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200w_d.webp",
  webp_size: "14218"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy.gif",
  width: "480",
  height: "480",
  size: "1369385"
  },
  original: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy.gif",
  width: "480",
  height: "480",
  size: "1369385",
  frames: "58",
  mp4: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy.mp4",
  mp4_size: "239497",
  webp: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy.webp",
  webp_size: "300668",
  hash: "e6a11ec754527393dcec729435e24aa3"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200.gif",
  width: "200",
  height: "200",
  size: "357782",
  mp4: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200.mp4",
  mp4_size: "58205",
  webp: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/200.webp",
  webp_size: "111324"
  },
  hd: {
  width: "800",
  height: "800",
  mp4: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy-hd.mp4",
  mp4_size: "542379"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy-loop.mp4",
  mp4_size: "438386"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy.mp4",
  mp4_size: "239497"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/26FLdaDQ5f72FPbEI/giphy-preview.gif",
  width: "229",
  height: "229",
  size: "48856"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/26FLdaDQ5f72FPbEI/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "cold winter GIF by Libby VanderPloeg",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26FLdaDQ5f72FPbEI&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26FLdaDQ5f72FPbEI&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26FLdaDQ5f72FPbEI&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3o752mljORwKcngR0Y",
  slug: "animation-art-christmas-3o752mljORwKcngR0Y",
  url: "https://giphy.com/gifs/animation-art-christmas-3o752mljORwKcngR0Y",
  bitly_gif_url: "https://gph.is/2zhl2zI",
  bitly_url: "https://gph.is/2zhl2zI",
  embed_url: "https://giphy.com/embed/3o752mljORwKcngR0Y",
  username: "happy-motion",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-12-23 01:03:19",
  trending_datetime: "2018-12-21 03:30:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/happy-motion/kegZNwzsttpV.gif",
  banner_url: "https://media0.giphy.com/headers/happy-motion/ulnCH1JaD9Uj.gif",
  banner_image: "https://media0.giphy.com/headers/happy-motion/ulnCH1JaD9Uj.gif",
  profile_url: "https://giphy.com/happy-motion/",
  username: "happy-motion",
  display_name: "Happy Motion",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200_s.gif",
  width: "200",
  height: "200",
  size: "14089"
  },
  original_still: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy_s.gif",
  width: "480",
  height: "480",
  size: "70428"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200w.gif",
  width: "200",
  height: "200",
  size: "2269319",
  mp4: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200w.mp4",
  mp4_size: "257917",
  webp: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200w.webp",
  webp_size: "888968"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/100_s.gif",
  width: "100",
  height: "100",
  size: "5000"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200_d.gif",
  width: "200",
  height: "200",
  size: "79472",
  webp: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200_d.webp",
  webp_size: "25370"
  },
  preview: {
  width: "358",
  height: "358",
  mp4: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy-preview.mp4",
  mp4_size: "23006"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/100.gif",
  width: "100",
  height: "100",
  size: "704793",
  mp4: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/100.mp4",
  mp4_size: "102005",
  webp: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/100.webp",
  webp_size: "391098"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy-downsized_s.gif",
  width: "250",
  height: "249",
  size: "22643"
  },
  downsized: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy-downsized.gif",
  width: "250",
  height: "249",
  size: "1088366"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy-downsized-large.gif",
  width: "480",
  height: "480",
  size: "5822320"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/100w_s.gif",
  width: "100",
  height: "100",
  size: "5000"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy-preview.webp",
  width: "224",
  height: "224",
  size: "48256"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200w_s.gif",
  width: "200",
  height: "200",
  size: "14089"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/100w.gif",
  width: "100",
  height: "100",
  size: "704793",
  mp4: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/100w.mp4",
  mp4_size: "44640",
  webp: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/100w.webp",
  webp_size: "391098"
  },
  downsized_small: {
  width: "210",
  height: "210",
  mp4: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy-downsized-small.mp4",
  mp4_size: "145498"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200w_d.gif",
  width: "200",
  height: "200",
  size: "79472",
  webp: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200w_d.webp",
  webp_size: "25370"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy-downsized-medium.gif",
  width: "480",
  height: "480",
  size: "4325432"
  },
  original: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy.gif",
  width: "480",
  height: "480",
  size: "11412388",
  frames: "217",
  mp4: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy.mp4",
  mp4_size: "787168",
  webp: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy.webp",
  webp_size: "2780550",
  hash: "35db6f1cd061cd6307183224ca32b67e"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200.gif",
  width: "200",
  height: "200",
  size: "2269319",
  mp4: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200.mp4",
  mp4_size: "257917",
  webp: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/200.webp",
  webp_size: "888968"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy-loop.mp4",
  mp4_size: "1727243"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy.mp4",
  mp4_size: "787168"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/3o752mljORwKcngR0Y/giphy-preview.gif",
  width: "117",
  height: "117",
  size: "48021"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/3o752mljORwKcngR0Y/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "merry christmas animation GIF by Happy Motion",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o752mljORwKcngR0Y&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o752mljORwKcngR0Y&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o752mljORwKcngR0Y&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3ohs7ZBhG4X2V9esDu",
  slug: "mariahcarey-mariah-carey-3ohs7ZBhG4X2V9esDu",
  url: "https://giphy.com/gifs/mariahcarey-mariah-carey-3ohs7ZBhG4X2V9esDu",
  bitly_gif_url: "https://gph.is/2zO2JE8",
  bitly_url: "https://gph.is/2zO2JE8",
  embed_url: "https://giphy.com/embed/3ohs7ZBhG4X2V9esDu",
  username: "mariahcarey",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-11-16 23:55:00",
  trending_datetime: "2018-12-21 03:15:02",
  user: {
  avatar_url: "https://media3.giphy.com/avatars/mariahcarey/4ss0x6GW17dE.jpg",
  banner_url: "",
  profile_url: "https://giphy.com/mariahcarey/",
  username: "mariahcarey",
  display_name: "Mariah Carey",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200_s.gif",
  width: "356",
  height: "200",
  size: "29693"
  },
  original_still: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy_s.gif",
  width: "480",
  height: "270",
  size: "43734"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200w.gif",
  width: "200",
  height: "113",
  size: "206892",
  mp4: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200w.mp4",
  mp4_size: "15748",
  webp: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200w.webp",
  webp_size: "165488"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/100_s.gif",
  width: "178",
  height: "100",
  size: "8610"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200_d.gif",
  width: "356",
  height: "200",
  size: "117165",
  webp: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200_d.webp",
  webp_size: "39082"
  },
  preview: {
  width: "376",
  height: "212",
  mp4: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy-preview.mp4",
  mp4_size: "22598"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/100.gif",
  width: "178",
  height: "100",
  size: "175213",
  mp4: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/100.mp4",
  mp4_size: "21784",
  webp: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/100.webp",
  webp_size: "147116"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "43734"
  },
  downsized: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy-downsized.gif",
  width: "480",
  height: "270",
  size: "1223533"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy.gif",
  width: "480",
  height: "270",
  size: "1223533"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/100w_s.gif",
  width: "100",
  height: "57",
  size: "3741"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy-preview.webp",
  width: "279",
  height: "157",
  size: "49650"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200w_s.gif",
  width: "200",
  height: "113",
  size: "10152"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/100w.gif",
  width: "100",
  height: "57",
  size: "52227",
  mp4: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/100w.mp4",
  mp4_size: "6257",
  webp: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/100w.webp",
  webp_size: "73072"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy-downsized-small.mp4",
  mp4_size: "79862"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200w_d.gif",
  width: "200",
  height: "113",
  size: "39166",
  webp: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200w_d.webp",
  webp_size: "19306"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy.gif",
  width: "480",
  height: "270",
  size: "1223533"
  },
  original: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy.gif",
  width: "480",
  height: "270",
  size: "1223533",
  frames: "55",
  mp4: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy.mp4",
  mp4_size: "56180",
  webp: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy.webp",
  webp_size: "510266",
  hash: "9fd116864ee11869b471e7d1a16631a3"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200.gif",
  width: "356",
  height: "200",
  size: "668398",
  mp4: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200.mp4",
  mp4_size: "35360",
  webp: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/200.webp",
  webp_size: "328296"
  },
  hd: {
  width: "960",
  height: "540",
  mp4: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy-hd.mp4",
  mp4_size: "359012"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy-loop.mp4",
  mp4_size: "664521"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy.mp4",
  mp4_size: "56180"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/giphy-preview.gif",
  width: "212",
  height: "119",
  size: "49297"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/3ohs7ZBhG4X2V9esDu/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "merry christmas GIF by Mariah Carey",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohs7ZBhG4X2V9esDu&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohs7ZBhG4X2V9esDu&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohs7ZBhG4X2V9esDu&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3o6fJ9cQXux6wfA2BO",
  slug: "bestfriends-3o6fJ9cQXux6wfA2BO",
  url: "https://giphy.com/gifs/bestfriends-3o6fJ9cQXux6wfA2BO",
  bitly_gif_url: "https://gph.is/2iTpzXg",
  bitly_url: "https://gph.is/2iTpzXg",
  embed_url: "https://giphy.com/embed/3o6fJ9cQXux6wfA2BO",
  username: "bestfriends",
  source: "https://www.bestfriends.org/",
  rating: "g",
  content_url: "",
  source_tld: "www.bestfriends.org",
  source_post_url: "https://www.bestfriends.org/",
  is_sticker: 0,
  import_datetime: "2017-12-05 16:41:32",
  trending_datetime: "2018-12-21 03:00:01",
  user: {
  avatar_url: "https://media3.giphy.com/avatars/bestfriends/4Ja63d50vmML.gif",
  banner_url: "https://media3.giphy.com/headers/bestfriends/TJ1HcVW7lGKA.jpg",
  banner_image: "https://media3.giphy.com/headers/bestfriends/TJ1HcVW7lGKA.jpg",
  profile_url: "https://giphy.com/bestfriends/",
  username: "bestfriends",
  display_name: "Best Friends Animal Society",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200_s.gif",
  width: "362",
  height: "200",
  size: "50817"
  },
  original_still: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy_s.gif",
  width: "480",
  height: "264",
  size: "82367"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200w.gif",
  width: "200",
  height: "110",
  size: "878997",
  mp4: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200w.mp4",
  mp4_size: "270953",
  webp: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200w.webp",
  webp_size: "352250"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/100_s.gif",
  width: "181",
  height: "100",
  size: "15368"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200_d.gif",
  width: "362",
  height: "200",
  size: "319775",
  webp: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200_d.webp",
  webp_size: "108572"
  },
  preview: {
  width: "290",
  height: "160",
  mp4: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy-preview.mp4",
  mp4_size: "49856"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/100.gif",
  width: "181",
  height: "100",
  size: "727836",
  mp4: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/100.mp4",
  mp4_size: "150542",
  webp: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/100.webp",
  webp_size: "297092"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy-downsized_s.gif",
  width: "250",
  height: "137",
  size: "25025"
  },
  downsized: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy-downsized.gif",
  width: "250",
  height: "137",
  size: "1229702"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy.gif",
  width: "480",
  height: "264",
  size: "4367723"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/100w_s.gif",
  width: "100",
  height: "55",
  size: "5974"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy-preview.webp",
  width: "158",
  height: "87",
  size: "48630"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200w_s.gif",
  width: "200",
  height: "110",
  size: "18333"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/100w.gif",
  width: "100",
  height: "55",
  size: "248188",
  mp4: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/100w.mp4",
  mp4_size: "47537",
  webp: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/100w.webp",
  webp_size: "118990"
  },
  downsized_small: {
  width: "319",
  height: "176",
  mp4: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy-downsized-small.mp4",
  mp4_size: "174402"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200w_d.gif",
  width: "200",
  height: "110",
  size: "111583",
  webp: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200w_d.webp",
  webp_size: "43422"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy.gif",
  width: "480",
  height: "264",
  size: "4367723"
  },
  original: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy.gif",
  width: "480",
  height: "264",
  size: "4367723",
  frames: "48",
  mp4: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy.mp4",
  mp4_size: "950321",
  webp: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy.webp",
  webp_size: "1328222",
  hash: "36209b74d6ce2c44e8a2f864afd6d58f"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200.gif",
  width: "362",
  height: "200",
  size: "2620297",
  mp4: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200.mp4",
  mp4_size: "372757",
  webp: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/200.webp",
  webp_size: "880588"
  },
  hd: {
  width: "1278",
  height: "704",
  mp4: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy-hd.mp4",
  mp4_size: "2287796"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy-loop.mp4",
  mp4_size: "2421588"
  },
  original_mp4: {
  width: "701",
  height: "386",
  mp4: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy.mp4",
  mp4_size: "950321"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/3o6fJ9cQXux6wfA2BO/giphy-preview.gif",
  width: "107",
  height: "59",
  size: "48690"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/3o6fJ9cQXux6wfA2BO/480w_s.jpg",
  width: "480",
  height: "264"
  }
  },
  title: "cute christmas cookies GIF by Best Friends Animal Society",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o6fJ9cQXux6wfA2BO&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o6fJ9cQXux6wfA2BO&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o6fJ9cQXux6wfA2BO&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l2YWAC4zYseVWIh8I",
  slug: "filmeditor-movie-christmas-movies-l2YWAC4zYseVWIh8I",
  url: "https://giphy.com/gifs/filmeditor-movie-christmas-movies-l2YWAC4zYseVWIh8I",
  bitly_gif_url: "https://gph.is/2hdlbQK",
  bitly_url: "https://gph.is/2hdlbQK",
  embed_url: "https://giphy.com/embed/l2YWAC4zYseVWIh8I",
  username: "",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-12-21 18:21:01",
  trending_datetime: "2018-12-21 02:45:02",
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200_s.gif",
  width: "356",
  height: "200",
  size: "36067"
  },
  original_still: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy_s.gif",
  width: "480",
  height: "270",
  size: "55560"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200w.gif",
  width: "200",
  height: "112",
  size: "271035",
  mp4: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200w.mp4",
  mp4_size: "14094",
  webp: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200w.webp",
  webp_size: "66760"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/100_s.gif",
  width: "178",
  height: "100",
  size: "12449"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200_d.gif",
  width: "356",
  height: "200",
  size: "207405",
  webp: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200_d.webp",
  webp_size: "32554"
  },
  preview: {
  width: "480",
  height: "270",
  mp4: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy-preview.mp4",
  mp4_size: "42297"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/100.gif",
  width: "178",
  height: "100",
  size: "224017",
  mp4: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/100.mp4",
  mp4_size: "13524",
  webp: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/100.webp",
  webp_size: "59584"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy-tumblr_s.gif",
  width: "480",
  height: "270",
  size: "55560"
  },
  downsized: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy-tumblr.gif",
  width: "480",
  height: "270",
  size: "1175365"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy.gif",
  width: "480",
  height: "270",
  size: "1175365"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/100w_s.gif",
  width: "100",
  height: "56",
  size: "5385"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy-preview.webp",
  width: "356",
  height: "200",
  size: "49422"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200w_s.gif",
  width: "200",
  height: "112",
  size: "15050"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/100w.gif",
  width: "100",
  height: "56",
  size: "83129",
  mp4: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/100w.mp4",
  mp4_size: "7357",
  webp: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/100w.webp",
  webp_size: "32030"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy-downsized-small.mp4",
  mp4_size: "42297"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200w_d.gif",
  width: "200",
  height: "112",
  size: "81241",
  webp: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200w_d.webp",
  webp_size: "17146"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy.gif",
  width: "480",
  height: "270",
  size: "1175365"
  },
  original: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy.gif",
  width: "480",
  height: "270",
  size: "1175365",
  frames: "25",
  mp4: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy.mp4",
  mp4_size: "42297",
  webp: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy.webp",
  webp_size: "169122",
  hash: "c15e935df8cb6217216e5672c67a4169"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200.gif",
  width: "356",
  height: "200",
  size: "732567",
  mp4: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200.mp4",
  mp4_size: "28635",
  webp: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/200.webp",
  webp_size: "124556"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy-loop.mp4",
  mp4_size: "381105"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy.mp4",
  mp4_size: "42297"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/l2YWAC4zYseVWIh8I/giphy-preview.gif",
  width: "133",
  height: "75",
  size: "48196"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/l2YWAC4zYseVWIh8I/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "i care bill murray GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2YWAC4zYseVWIh8I&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2YWAC4zYseVWIh8I&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2YWAC4zYseVWIh8I&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3o7TKvKQ2DuCGRti0g",
  slug: "studiosoriginals-christmas-merry-3o7TKvKQ2DuCGRti0g",
  url: "https://giphy.com/gifs/studiosoriginals-christmas-merry-3o7TKvKQ2DuCGRti0g",
  bitly_gif_url: "https://gph.is/2glKz4L",
  bitly_url: "https://gph.is/2glKz4L",
  embed_url: "https://giphy.com/embed/3o7TKvKQ2DuCGRti0g",
  username: "studiosoriginals",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-12-07 23:35:25",
  trending_datetime: "2018-12-21 02:30:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/studiosoriginals/j3JBzK5twdv8.jpg",
  banner_url: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  banner_image: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  profile_url: "https://giphy.com/studiosoriginals/",
  username: "studiosoriginals",
  display_name: "GIPHY Studios Originals",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200_s.gif",
  width: "300",
  height: "200",
  size: "47779"
  },
  original_still: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy_s.gif",
  width: "480",
  height: "320",
  size: "128091"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200w.gif",
  width: "200",
  height: "133",
  size: "607519",
  mp4: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200w.mp4",
  mp4_size: "93680",
  webp: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200w.webp",
  webp_size: "700550"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/100_s.gif",
  width: "150",
  height: "100",
  size: "13882"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200_d.gif",
  width: "300",
  height: "200",
  size: "153077",
  webp: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200_d.webp",
  webp_size: "135132"
  },
  preview: {
  width: "154",
  height: "102",
  mp4: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy-preview.mp4",
  mp4_size: "38519"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/100.gif",
  width: "150",
  height: "100",
  size: "376182",
  mp4: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/100.mp4",
  mp4_size: "58302",
  webp: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/100.webp",
  webp_size: "449758"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy-downsized_s.gif",
  width: "250",
  height: "166",
  size: "34632"
  },
  downsized: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy-downsized.gif",
  width: "250",
  height: "166",
  size: "700695"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy.gif",
  width: "480",
  height: "320",
  size: "3497808"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/100w_s.gif",
  width: "100",
  height: "67",
  size: "7227"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy-preview.webp",
  width: "116",
  height: "77",
  size: "48346"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200w_s.gif",
  width: "200",
  height: "133",
  size: "22181"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/100w.gif",
  width: "100",
  height: "67",
  size: "175079",
  mp4: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/100w.mp4",
  mp4_size: "32358",
  webp: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/100w.webp",
  webp_size: "227266"
  },
  downsized_small: {
  width: "312",
  height: "208",
  mp4: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy-downsized-small.mp4",
  mp4_size: "170278"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200w_d.gif",
  width: "200",
  height: "133",
  size: "70759",
  webp: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200w_d.webp",
  webp_size: "66824"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy.gif",
  width: "480",
  height: "320",
  size: "3497808"
  },
  original: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy.gif",
  width: "480",
  height: "320",
  size: "3497808",
  frames: "80",
  mp4: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy.mp4",
  mp4_size: "530364",
  webp: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy.webp",
  webp_size: "3560744",
  hash: "a12f71c9d608045a2cc6748e1805743e"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200.gif",
  width: "300",
  height: "200",
  size: "1344949",
  mp4: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200.mp4",
  mp4_size: "170549",
  webp: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/200.webp",
  webp_size: "1382256"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy-loop.mp4",
  mp4_size: "2939122"
  },
  original_mp4: {
  width: "480",
  height: "320",
  mp4: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy.mp4",
  mp4_size: "530364"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/3o7TKvKQ2DuCGRti0g/giphy-preview.gif",
  width: "132",
  height: "88",
  size: "47834"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/3o7TKvKQ2DuCGRti0g/480w_s.jpg",
  width: "480",
  height: "320"
  }
  },
  title: "merry christmas GIF by GIPHY Studios Originals",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7TKvKQ2DuCGRti0g&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7TKvKQ2DuCGRti0g&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3o7TKvKQ2DuCGRti0g&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l2QDUps7eqbqvZ2yQ",
  slug: "hanson-christmas-l2QDUps7eqbqvZ2yQ",
  url: "https://giphy.com/gifs/hanson-christmas-l2QDUps7eqbqvZ2yQ",
  bitly_gif_url: "https://gph.is/2j3Fkqm",
  bitly_url: "https://gph.is/2j3Fkqm",
  embed_url: "https://giphy.com/embed/l2QDUps7eqbqvZ2yQ",
  username: "hanson",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-11-18 00:43:08",
  trending_datetime: "2018-12-21 02:15:02",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/hanson/VnARfDhNPIAN.jpg",
  banner_url: "https://media1.giphy.com/headers/hanson/UoQH29nY7SSY.jpeg",
  banner_image: "https://media1.giphy.com/headers/hanson/UoQH29nY7SSY.jpeg",
  profile_url: "https://giphy.com/hanson/",
  username: "hanson",
  display_name: "Hanson",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200_s.gif",
  width: "356",
  height: "200",
  size: "34540"
  },
  original_still: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy_s.gif",
  width: "480",
  height: "270",
  size: "60245"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200w.gif",
  width: "200",
  height: "113",
  size: "298476",
  mp4: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200w.mp4",
  mp4_size: "60684",
  webp: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200w.webp",
  webp_size: "427776"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/100_s.gif",
  width: "178",
  height: "100",
  size: "11013"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200_d.gif",
  width: "356",
  height: "200",
  size: "132687",
  webp: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200_d.webp",
  webp_size: "87512"
  },
  preview: {
  width: "316",
  height: "178",
  mp4: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy-preview.mp4",
  mp4_size: "34436"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/100.gif",
  width: "178",
  height: "100",
  size: "250916",
  mp4: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/100.mp4",
  mp4_size: "77447",
  webp: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/100.webp",
  webp_size: "357816"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "60245"
  },
  downsized: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy-downsized.gif",
  width: "480",
  height: "270",
  size: "1777099"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy.gif",
  width: "480",
  height: "270",
  size: "1777099"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/100w_s.gif",
  width: "100",
  height: "57",
  size: "4651"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy-preview.webp",
  width: "153",
  height: "86",
  size: "49338"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200w_s.gif",
  width: "200",
  height: "113",
  size: "13156"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/100w.gif",
  width: "100",
  height: "57",
  size: "79578",
  mp4: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/100w.mp4",
  mp4_size: "22329",
  webp: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/100w.webp",
  webp_size: "154882"
  },
  downsized_small: {
  width: "384",
  height: "216",
  mp4: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy-downsized-small.mp4",
  mp4_size: "87495"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200w_d.gif",
  width: "200",
  height: "113",
  size: "48302",
  webp: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200w_d.webp",
  webp_size: "40972"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy.gif",
  width: "480",
  height: "270",
  size: "1777099"
  },
  original: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy.gif",
  width: "480",
  height: "270",
  size: "1777099",
  frames: "65",
  mp4: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy.mp4",
  mp4_size: "184784",
  webp: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy.webp",
  webp_size: "1491308",
  hash: "acc08aa698709b4905109a731f811b0f"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200.gif",
  width: "356",
  height: "200",
  size: "953905",
  mp4: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200.mp4",
  mp4_size: "124149",
  webp: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/200.webp",
  webp_size: "905320"
  },
  hd: {
  width: "960",
  height: "540",
  mp4: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy-hd.mp4",
  mp4_size: "838124"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy-loop.mp4",
  mp4_size: "2137883"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy.mp4",
  mp4_size: "184784"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/l2QDUps7eqbqvZ2yQ/giphy-preview.gif",
  width: "174",
  height: "98",
  size: "48333"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/l2QDUps7eqbqvZ2yQ/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "merry christmas GIF by Hanson",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2QDUps7eqbqvZ2yQ&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2QDUps7eqbqvZ2yQ&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2QDUps7eqbqvZ2yQ&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3ohA2Yh1puinrd2dzO",
  slug: "filmeditor-home-alone-christmas-movies-3ohA2Yh1puinrd2dzO",
  url: "https://giphy.com/gifs/filmeditor-home-alone-christmas-movies-3ohA2Yh1puinrd2dzO",
  bitly_gif_url: "https://gph.is/2glFSaR",
  bitly_url: "https://gph.is/2glFSaR",
  embed_url: "https://giphy.com/embed/3ohA2Yh1puinrd2dzO",
  username: "",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-12-07 22:30:09",
  trending_datetime: "2018-12-21 02:00:01",
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200_s.gif",
  width: "370",
  height: "200",
  size: "49317"
  },
  original_still: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy_s.gif",
  width: "480",
  height: "260",
  size: "74338"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200w.gif",
  width: "200",
  height: "108",
  size: "200518",
  mp4: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200w.mp4",
  mp4_size: "12168",
  webp: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200w.webp",
  webp_size: "137680"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/100_s.gif",
  width: "185",
  height: "100",
  size: "15390"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200_d.gif",
  width: "370",
  height: "200",
  size: "220008",
  webp: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200_d.webp",
  webp_size: "60456"
  },
  preview: {
  width: "480",
  height: "260",
  mp4: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy-preview.mp4",
  mp4_size: "41335"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/100.gif",
  width: "185",
  height: "100",
  size: "179592",
  mp4: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/100.mp4",
  mp4_size: "11377",
  webp: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/100.webp",
  webp_size: "126844"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy-downsized_s.gif",
  width: "480",
  height: "260",
  size: "74338"
  },
  downsized: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy-downsized.gif",
  width: "480",
  height: "260",
  size: "937919"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy.gif",
  width: "480",
  height: "260",
  size: "937919"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/100w_s.gif",
  width: "100",
  height: "54",
  size: "6091"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy-preview.webp",
  width: "214",
  height: "116",
  size: "49128"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200w_s.gif",
  width: "200",
  height: "108",
  size: "17842"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/100w.gif",
  width: "100",
  height: "54",
  size: "56962",
  mp4: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/100w.mp4",
  mp4_size: "5706",
  webp: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/100w.webp",
  webp_size: "68650"
  },
  downsized_small: {
  width: "480",
  height: "260",
  mp4: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy-downsized-small.mp4",
  mp4_size: "41335"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200w_d.gif",
  width: "200",
  height: "108",
  size: "73235",
  webp: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200w_d.webp",
  webp_size: "28556"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy.gif",
  width: "480",
  height: "260",
  size: "937919"
  },
  original: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy.gif",
  width: "480",
  height: "260",
  size: "937919",
  frames: "35",
  mp4: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy.mp4",
  mp4_size: "41335",
  webp: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy.webp",
  webp_size: "325708",
  hash: "878a9ef7fa4896fc10c956f9b5dc5230"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200.gif",
  width: "370",
  height: "200",
  size: "619354",
  mp4: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200.mp4",
  mp4_size: "27376",
  webp: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/200.webp",
  webp_size: "266552"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy-loop.mp4",
  mp4_size: "264268"
  },
  original_mp4: {
  width: "480",
  height: "260",
  mp4: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy.mp4",
  mp4_size: "41335"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/3ohA2Yh1puinrd2dzO/giphy-preview.gif",
  width: "190",
  height: "103",
  size: "47732"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/3ohA2Yh1puinrd2dzO/480w_s.jpg",
  width: "480",
  height: "260"
  }
  },
  title: "excellent home alone GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohA2Yh1puinrd2dzO&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohA2Yh1puinrd2dzO&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ohA2Yh1puinrd2dzO&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3osBLcKOrK2jpNQB9K",
  slug: "franksinatra-christmas-happy-holidays-3osBLcKOrK2jpNQB9K",
  url: "https://giphy.com/gifs/franksinatra-christmas-happy-holidays-3osBLcKOrK2jpNQB9K",
  bitly_gif_url: "https://gph.is/2itJtYu",
  bitly_url: "https://gph.is/2itJtYu",
  embed_url: "https://giphy.com/embed/3osBLcKOrK2jpNQB9K",
  username: "franksinatra",
  source: "https://www.sinatra.com/",
  rating: "g",
  content_url: "",
  source_tld: "www.sinatra.com",
  source_post_url: "https://www.sinatra.com/",
  is_sticker: 0,
  import_datetime: "2017-12-01 00:03:08",
  trending_datetime: "2018-12-21 01:45:01",
  user: {
  avatar_url: "https://media2.giphy.com/avatars/franksinatra/8VCD9DcGUeiN.jpg",
  banner_url: "https://media2.giphy.com/headers/franksinatra/igWgPCbmu0Ql.jpg",
  banner_image: "https://media2.giphy.com/headers/franksinatra/igWgPCbmu0Ql.jpg",
  profile_url: "https://giphy.com/franksinatra/",
  username: "franksinatra",
  display_name: "Frank Sinatra",
  is_verified: false
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200_s.gif",
  width: "270",
  height: "200",
  size: "43236"
  },
  original_still: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy_s.gif",
  width: "478",
  height: "354",
  size: "125672"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200w.gif",
  width: "200",
  height: "148",
  size: "1077474",
  mp4: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200w.mp4",
  mp4_size: "111812",
  webp: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200w.webp",
  webp_size: "448894"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/100_s.gif",
  width: "135",
  height: "100",
  size: "13338"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200_d.gif",
  width: "270",
  height: "200",
  size: "262486",
  webp: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200_d.webp",
  webp_size: "68716"
  },
  preview: {
  width: "253",
  height: "188",
  mp4: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy-preview.mp4",
  mp4_size: "35182"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/100.gif",
  width: "135",
  height: "100",
  size: "526161",
  mp4: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/100.mp4",
  mp4_size: "95040",
  webp: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/100.webp",
  webp_size: "252918"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy-downsized_s.gif",
  width: "250",
  height: "185",
  size: "37877"
  },
  downsized: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy-downsized.gif",
  width: "250",
  height: "185",
  size: "1717329"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy.gif",
  width: "478",
  height: "354",
  size: "6514530"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/100w_s.gif",
  width: "100",
  height: "74",
  size: "8123"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy-preview.webp",
  width: "142",
  height: "105",
  size: "48308"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200w_s.gif",
  width: "200",
  height: "148",
  size: "25509"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/100w.gif",
  width: "100",
  height: "74",
  size: "282145",
  mp4: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/100w.mp4",
  mp4_size: "34803",
  webp: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/100w.webp",
  webp_size: "162934"
  },
  downsized_small: {
  width: "256",
  height: "190",
  mp4: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy-downsized-small.mp4",
  mp4_size: "84337"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200w_d.gif",
  width: "200",
  height: "148",
  size: "151121",
  webp: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200w_d.webp",
  webp_size: "44904"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy-downsized-medium.gif",
  width: "382",
  height: "283",
  size: "4162511"
  },
  original: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy.gif",
  width: "478",
  height: "354",
  size: "6514530",
  frames: "60",
  mp4: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy.mp4",
  mp4_size: "455033",
  webp: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy.webp",
  webp_size: "1736156",
  hash: "5dd9a9d2742b0791987567cf06e4272e"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200.gif",
  width: "270",
  height: "200",
  size: "2024678",
  mp4: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200.mp4",
  mp4_size: "167180",
  webp: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/200.webp",
  webp_size: "685588"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy-loop.mp4",
  mp4_size: "2678773"
  },
  original_mp4: {
  width: "480",
  height: "354",
  mp4: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy.mp4",
  mp4_size: "455033"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/3osBLcKOrK2jpNQB9K/giphy-preview.gif",
  width: "105",
  height: "78",
  size: "49458"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/3osBLcKOrK2jpNQB9K/480w_s.jpg",
  width: "480",
  height: "355"
  }
  },
  title: "christmas happy holidays GIF by Frank Sinatra",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3osBLcKOrK2jpNQB9K&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3osBLcKOrK2jpNQB9K&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3osBLcKOrK2jpNQB9K&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "4K1rnQzBhevSmyNyRb",
  slug: "gwenstefani-christmas-xmas-you-make-it-feel-like-4K1rnQzBhevSmyNyRb",
  url: "https://giphy.com/gifs/gwenstefani-christmas-xmas-you-make-it-feel-like-4K1rnQzBhevSmyNyRb",
  bitly_gif_url: "https://gph.is/2S1O9Rx",
  bitly_url: "https://gph.is/2S1O9Rx",
  embed_url: "https://giphy.com/embed/4K1rnQzBhevSmyNyRb",
  username: "gwenstefani",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-11-21 00:20:18",
  trending_datetime: "2018-12-21 01:30:02",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/gwenstefani/vq0Mqmbk08eT.jpg",
  banner_url: "https://media0.giphy.com/headers/gwenstefani/bY0tq8HXu7gg.jpg",
  banner_image: "https://media0.giphy.com/headers/gwenstefani/bY0tq8HXu7gg.jpg",
  profile_url: "https://giphy.com/gwenstefani/",
  username: "gwenstefani",
  display_name: "Gwen Stefani",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200_s.gif",
  width: "356",
  height: "200",
  size: "48644"
  },
  original_still: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy_s.gif",
  width: "480",
  height: "270",
  size: "80538"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200w.gif",
  width: "200",
  height: "113",
  size: "201040",
  mp4: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200w.mp4",
  mp4_size: "29623",
  webp: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200w.webp",
  webp_size: "55204"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/100_s.gif",
  width: "178",
  height: "100",
  size: "14896"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200_d.gif",
  width: "356",
  height: "200",
  size: "297660",
  webp: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200_d.webp",
  webp_size: "79066"
  },
  preview: {
  width: "344",
  height: "194",
  mp4: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy-preview.mp4",
  mp4_size: "33195"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/100.gif",
  width: "178",
  height: "100",
  size: "160437",
  mp4: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/100.mp4",
  mp4_size: "28036",
  webp: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/100.webp",
  webp_size: "49648"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "80538"
  },
  downsized: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy.gif",
  width: "480",
  height: "270",
  size: "949178"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy.gif",
  width: "480",
  height: "270",
  size: "949178"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/100w_s.gif",
  width: "100",
  height: "57",
  size: "6024"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy-preview.webp",
  width: "200",
  height: "112",
  size: "39856"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200w_s.gif",
  width: "200",
  height: "113",
  size: "18570"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/100w.gif",
  width: "100",
  height: "57",
  size: "60089",
  mp4: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/100w.mp4",
  mp4_size: "14276",
  webp: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/100w.webp",
  webp_size: "24076"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy-downsized-small.mp4",
  mp4_size: "94564"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200w_d.gif",
  width: "200",
  height: "113",
  size: "110022",
  webp: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200w_d.webp",
  webp_size: "34250"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy.gif",
  width: "480",
  height: "270",
  size: "949178"
  },
  original: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy.gif",
  width: "480",
  height: "270",
  size: "949178",
  frames: "11",
  mp4: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy.mp4",
  mp4_size: "94564",
  webp: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy.webp",
  webp_size: "149508",
  hash: "e1902335130c3e9ac806308be9d0f03a"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200.gif",
  width: "356",
  height: "200",
  size: "543024",
  mp4: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200.mp4",
  mp4_size: "64482",
  webp: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/200.webp",
  webp_size: "110146"
  },
  hd: {
  width: "1920",
  height: "1080",
  mp4: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy-hd.mp4",
  mp4_size: "743475"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy-loop.mp4",
  mp4_size: "1855397"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy.mp4",
  mp4_size: "94564"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/4K1rnQzBhevSmyNyRb/giphy-preview.gif",
  width: "108",
  height: "61",
  size: "49258"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/4K1rnQzBhevSmyNyRb/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "shocked blake shelton GIF by Gwen Stefani",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=4K1rnQzBhevSmyNyRb&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=4K1rnQzBhevSmyNyRb&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=4K1rnQzBhevSmyNyRb&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xUySTNfFds1K3phXmo",
  slug: "filmeditor-will-ferrell-elf-xUySTNfFds1K3phXmo",
  url: "https://giphy.com/gifs/filmeditor-will-ferrell-elf-xUySTNfFds1K3phXmo",
  bitly_gif_url: "https://gph.is/2gdt7iz",
  bitly_url: "https://gph.is/2gdt7iz",
  embed_url: "https://giphy.com/embed/xUySTNfFds1K3phXmo",
  username: "",
  source: "",
  rating: "pg",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-12-05 21:55:22",
  trending_datetime: "2018-12-21 01:15:01",
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200_s.gif",
  width: "356",
  height: "200",
  size: "52922"
  },
  original_still: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy_s.gif",
  width: "480",
  height: "270",
  size: "87643"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200w.gif",
  width: "200",
  height: "112",
  size: "230058",
  mp4: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200w.mp4",
  mp4_size: "13500",
  webp: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200w.webp",
  webp_size: "192180"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/100_s.gif",
  width: "178",
  height: "100",
  size: "16306"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200_d.gif",
  width: "356",
  height: "200",
  size: "240336",
  webp: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200_d.webp",
  webp_size: "87190"
  },
  preview: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy-preview.mp4",
  mp4_size: "47166"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/100.gif",
  width: "178",
  height: "100",
  size: "186758",
  mp4: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/100.mp4",
  mp4_size: "12283",
  webp: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/100.webp",
  webp_size: "171584"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy-tumblr_s.gif",
  width: "480",
  height: "270",
  size: "87643"
  },
  downsized: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy-tumblr.gif",
  width: "480",
  height: "270",
  size: "1128769"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy.gif",
  width: "480",
  height: "270",
  size: "1128769"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/100w_s.gif",
  width: "100",
  height: "56",
  size: "6624"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy-preview.webp",
  width: "158",
  height: "89",
  size: "49296"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200w_s.gif",
  width: "200",
  height: "112",
  size: "20161"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/100w.gif",
  width: "100",
  height: "56",
  size: "64442",
  mp4: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/100w.mp4",
  mp4_size: "6356",
  webp: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/100w.webp",
  webp_size: "82442"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy-downsized-small.mp4",
  mp4_size: "47166"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200w_d.gif",
  width: "200",
  height: "112",
  size: "84563",
  webp: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200w_d.webp",
  webp_size: "42518"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy.gif",
  width: "480",
  height: "270",
  size: "1128769"
  },
  original: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy.gif",
  width: "480",
  height: "270",
  size: "1128769",
  frames: "33",
  mp4: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy.mp4",
  mp4_size: "47166",
  webp: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy.webp",
  webp_size: "499264",
  hash: "df493a63d1af9139ac59d006cfc1b0b1"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200.gif",
  width: "356",
  height: "200",
  size: "675471",
  mp4: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200.mp4",
  mp4_size: "30342",
  webp: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/200.webp",
  webp_size: "377270"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy-loop.mp4",
  mp4_size: "327059"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy.mp4",
  mp4_size: "47166"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/giphy-preview.gif",
  width: "169",
  height: "95",
  size: "49561"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/xUySTNfFds1K3phXmo/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "will ferrell elf GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xUySTNfFds1K3phXmo&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xUySTNfFds1K3phXmo&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xUySTNfFds1K3phXmo&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l0MYsMbNnuHkbAk7K",
  slug: "studiosoriginals-l0MYsMbNnuHkbAk7K",
  url: "https://giphy.com/gifs/studiosoriginals-l0MYsMbNnuHkbAk7K",
  bitly_gif_url: "https://gph.is/2fvAhPm",
  bitly_url: "https://gph.is/2fvAhPm",
  embed_url: "https://giphy.com/embed/l0MYsMbNnuHkbAk7K",
  username: "studiosoriginals",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-11-16 01:24:28",
  trending_datetime: "2018-12-21 01:00:02",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/studiosoriginals/j3JBzK5twdv8.jpg",
  banner_url: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  banner_image: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  profile_url: "https://giphy.com/studiosoriginals/",
  username: "studiosoriginals",
  display_name: "GIPHY Studios Originals",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200_s.gif",
  width: "300",
  height: "200",
  size: "3356"
  },
  original_still: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy_s.gif",
  width: "480",
  height: "320",
  size: "5251"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200w.gif",
  width: "200",
  height: "133",
  size: "4631",
  mp4: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200w.mp4",
  mp4_size: "6039",
  webp: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200w.webp",
  webp_size: "11684"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/100_s.gif",
  width: "150",
  height: "100",
  size: "1947"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200_d.gif",
  width: "300",
  height: "200",
  size: "7507",
  webp: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200_d.webp",
  webp_size: "19064"
  },
  preview: {
  width: "480",
  height: "320",
  mp4: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy-preview.mp4",
  mp4_size: "18540"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/100.gif",
  width: "150",
  height: "100",
  size: "3482",
  mp4: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/100.mp4",
  mp4_size: "4402",
  webp: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/100.webp",
  webp_size: "8520"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy-downsized_s.gif",
  width: "480",
  height: "320",
  size: "5251"
  },
  downsized: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy-downsized.gif",
  width: "480",
  height: "320",
  size: "12818"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy.gif",
  width: "480",
  height: "320",
  size: "12818"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/100w_s.gif",
  width: "100",
  height: "67",
  size: "1579"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy-preview.webp",
  width: "480",
  height: "320",
  size: "11174"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200w_s.gif",
  width: "200",
  height: "133",
  size: "2359"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/480w_s.jpg",
  width: "480",
  height: "320",
  size: "11697"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/100w.gif",
  width: "100",
  height: "67",
  size: "2384",
  mp4: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/100w.mp4",
  mp4_size: "3094",
  webp: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/100w.webp",
  webp_size: "5214"
  },
  downsized_small: {
  width: "480",
  height: "320",
  mp4: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy-downsized-small.mp4",
  mp4_size: "18540"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200w_d.gif",
  width: "200",
  height: "133",
  size: "4631",
  webp: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200w_d.webp",
  webp_size: "11684"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy.gif",
  width: "480",
  height: "320",
  size: "12818"
  },
  original: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy.gif",
  width: "480",
  height: "320",
  size: "12818",
  frames: "3",
  mp4: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy.mp4",
  mp4_size: "18078",
  webp: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy.webp",
  webp_size: "35208",
  hash: "50baf2f3b1fd6a67898031cda64430ae"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200.gif",
  width: "300",
  height: "200",
  size: "7507",
  mp4: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200.mp4",
  mp4_size: "9109",
  webp: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/200.webp",
  webp_size: "19064"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy-loop.mp4",
  mp4_size: "887163"
  },
  original_mp4: {
  width: "480",
  height: "320",
  mp4: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy.mp4",
  mp4_size: "18078"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/l0MYsMbNnuHkbAk7K/giphy-preview.gif",
  width: "480",
  height: "320",
  size: "12818"
  }
  },
  title: "merry christmas GIF by GIPHY Studios Originals",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0MYsMbNnuHkbAk7K&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0MYsMbNnuHkbAk7K&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l0MYsMbNnuHkbAk7K&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l2JhArT3Jls2QOwPS",
  slug: "studiosoriginals-happy-holidays-l2JhArT3Jls2QOwPS",
  url: "https://giphy.com/gifs/studiosoriginals-happy-holidays-l2JhArT3Jls2QOwPS",
  bitly_gif_url: "https://gph.is/2eGtWjb",
  bitly_url: "https://gph.is/2eGtWjb",
  embed_url: "https://giphy.com/embed/l2JhArT3Jls2QOwPS",
  username: "studiosoriginals",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-11-07 21:08:28",
  trending_datetime: "2018-12-21 00:45:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/studiosoriginals/j3JBzK5twdv8.jpg",
  banner_url: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  banner_image: "https://media4.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  profile_url: "https://giphy.com/studiosoriginals/",
  username: "studiosoriginals",
  display_name: "GIPHY Studios Originals",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200_s.gif",
  width: "300",
  height: "200",
  size: "20423"
  },
  original_still: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy_s.gif",
  width: "480",
  height: "320",
  size: "35393"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200w.gif",
  width: "200",
  height: "133",
  size: "35565",
  mp4: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200w.mp4",
  mp4_size: "14668",
  webp: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200w.webp",
  webp_size: "29990"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/100_s.gif",
  width: "150",
  height: "100",
  size: "7626"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200_d.gif",
  width: "300",
  height: "200",
  size: "66450",
  webp: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200_d.webp",
  webp_size: "51472"
  },
  preview: {
  width: "480",
  height: "320",
  mp4: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy-preview.mp4",
  mp4_size: "36409"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/100.gif",
  width: "150",
  height: "100",
  size: "22841",
  mp4: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/100.mp4",
  mp4_size: "9967",
  webp: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/100.webp",
  webp_size: "20000"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy-downsized_s.gif",
  width: "480",
  height: "320",
  size: "35393"
  },
  downsized: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy-downsized.gif",
  width: "480",
  height: "320",
  size: "129302"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy.gif",
  width: "480",
  height: "320",
  size: "129302"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/100w_s.gif",
  width: "100",
  height: "67",
  size: "4916"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy-preview.webp",
  width: "306",
  height: "204",
  size: "49520"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200w_s.gif",
  width: "200",
  height: "133",
  size: "11399"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/100w.gif",
  width: "100",
  height: "67",
  size: "13078",
  mp4: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/100w.mp4",
  mp4_size: "6057",
  webp: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/100w.webp",
  webp_size: "11336"
  },
  downsized_small: {
  width: "480",
  height: "320",
  mp4: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy-downsized-small.mp4",
  mp4_size: "36409"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200w_d.gif",
  width: "200",
  height: "133",
  size: "35565",
  webp: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200w_d.webp",
  webp_size: "29990"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy.gif",
  width: "480",
  height: "320",
  size: "129302"
  },
  original: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy.gif",
  width: "480",
  height: "320",
  size: "129302",
  frames: "4",
  mp4: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy.mp4",
  mp4_size: "42761",
  webp: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy.webp",
  webp_size: "97922",
  hash: "dd9a4f79eb01d69b462e1fe98f77489d"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200.gif",
  width: "300",
  height: "200",
  size: "66450",
  mp4: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200.mp4",
  mp4_size: "22669",
  webp: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/200.webp",
  webp_size: "51472"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy-loop.mp4",
  mp4_size: "1673841"
  },
  original_mp4: {
  width: "480",
  height: "320",
  mp4: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy.mp4",
  mp4_size: "42761"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/l2JhArT3Jls2QOwPS/giphy-preview.gif",
  width: "275",
  height: "183",
  size: "49627"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/l2JhArT3Jls2QOwPS/480w_s.jpg",
  width: "480",
  height: "320"
  }
  },
  title: "ugly sweater GIF by GIPHY Studios Originals",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2JhArT3Jls2QOwPS&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2JhArT3Jls2QOwPS&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2JhArT3Jls2QOwPS&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "xULW8y99naprLOu3qo",
  slug: "hyperrpg-christmas-holiday-xULW8y99naprLOu3qo",
  url: "https://giphy.com/gifs/hyperrpg-christmas-holiday-xULW8y99naprLOu3qo",
  bitly_gif_url: "https://gph.is/2A880Fj",
  bitly_url: "https://gph.is/2A880Fj",
  embed_url: "https://giphy.com/embed/xULW8y99naprLOu3qo",
  username: "hyperrpg",
  source: "https://go.twitch.tv/hyperrpg",
  rating: "g",
  content_url: "",
  source_tld: "go.twitch.tv",
  source_post_url: "https://go.twitch.tv/hyperrpg",
  is_sticker: 0,
  import_datetime: "2018-01-02 23:19:40",
  trending_datetime: "2018-12-21 00:30:02",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/hyperrpg/XAPQtnN0Mzvp.gif",
  banner_url: "https://media4.giphy.com/headers/hyperrpg/xSkkVvnYleEw.png",
  banner_image: "https://media4.giphy.com/headers/hyperrpg/xSkkVvnYleEw.png",
  profile_url: "https://giphy.com/hyperrpg/",
  username: "hyperrpg",
  display_name: "Hyper RPG",
  is_verified: false
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200_s.gif",
  width: "200",
  height: "200",
  size: "25911"
  },
  original_still: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy_s.gif",
  width: "800",
  height: "800",
  size: "136214"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200w.gif",
  width: "200",
  height: "200",
  size: "649363",
  mp4: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200w.mp4",
  mp4_size: "83728",
  webp: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200w.webp",
  webp_size: "206398"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/100_s.gif",
  width: "100",
  height: "100",
  size: "8797"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200_d.gif",
  width: "200",
  height: "200",
  size: "151266",
  webp: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200_d.webp",
  webp_size: "46410"
  },
  preview: {
  width: "176",
  height: "176",
  mp4: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy-preview.mp4",
  mp4_size: "34631"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/100.gif",
  width: "100",
  height: "100",
  size: "193494",
  mp4: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/100.mp4",
  mp4_size: "34140",
  webp: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/100.webp",
  webp_size: "83606"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy-downsized_s.gif",
  width: "362",
  height: "362",
  size: "73144"
  },
  downsized: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy-downsized.gif",
  width: "362",
  height: "362",
  size: "1941165"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy.gif",
  width: "800",
  height: "800",
  size: "3628647"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/100w_s.gif",
  width: "100",
  height: "100",
  size: "8797"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy-preview.webp",
  width: "143",
  height: "143",
  size: "48068"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200w_s.gif",
  width: "200",
  height: "200",
  size: "25911"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/100w.gif",
  width: "100",
  height: "100",
  size: "193494",
  mp4: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/100w.mp4",
  mp4_size: "34140",
  webp: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/100w.webp",
  webp_size: "83606"
  },
  downsized_small: {
  width: "320",
  height: "320",
  mp4: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy-downsized-small.mp4",
  mp4_size: "88826"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200w_d.gif",
  width: "200",
  height: "200",
  size: "151266",
  webp: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200w_d.webp",
  webp_size: "46410"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy.gif",
  width: "800",
  height: "800",
  size: "3628647"
  },
  original: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy.gif",
  width: "800",
  height: "800",
  size: "3628647",
  frames: "27",
  mp4: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy.mp4",
  mp4_size: "461494",
  webp: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy.webp",
  webp_size: "3027464",
  hash: "d71ab27edfa8254ee7096802a789d22d"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200.gif",
  width: "200",
  height: "200",
  size: "649363",
  mp4: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200.mp4",
  mp4_size: "83728",
  webp: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/200.webp",
  webp_size: "206398"
  },
  hd: {
  width: "800",
  height: "800",
  mp4: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy-hd.mp4",
  mp4_size: "4116105"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy-loop.mp4",
  mp4_size: "2572605"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy.mp4",
  mp4_size: "461494"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/xULW8y99naprLOu3qo/giphy-preview.gif",
  width: "91",
  height: "91",
  size: "49305"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/xULW8y99naprLOu3qo/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "morph youtube GIF by Hyper RPG",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xULW8y99naprLOu3qo&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xULW8y99naprLOu3qo&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=xULW8y99naprLOu3qo&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "14nJpITpJAtNjG",
  slug: "merry-christmas-14nJpITpJAtNjG",
  url: "https://giphy.com/gifs/merry-christmas-14nJpITpJAtNjG",
  bitly_gif_url: "https://gph.is/2c7muKr",
  bitly_url: "https://gph.is/2c7muKr",
  embed_url: "https://giphy.com/embed/14nJpITpJAtNjG",
  username: "greetings",
  source: "https://gif-finder.com/merry-christmas/",
  rating: "pg",
  content_url: "",
  source_tld: "gif-finder.com",
  source_post_url: "https://gif-finder.com/merry-christmas/",
  is_sticker: 0,
  import_datetime: "2016-09-07 15:20:59",
  trending_datetime: "2018-12-21 00:15:02",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/greetings/C4IXTORVJDmw.gif",
  banner_url: "",
  profile_url: "https://giphy.com/greetings/",
  username: "greetings",
  display_name: "Greetings",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/200_s.gif",
  width: "330",
  height: "200"
  },
  original_still: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy_s.gif",
  width: "350",
  height: "212"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/200w.gif",
  width: "200",
  height: "121",
  size: "377657",
  mp4: "https://media3.giphy.com/media/14nJpITpJAtNjG/200w.mp4",
  mp4_size: "41483",
  webp: "https://media3.giphy.com/media/14nJpITpJAtNjG/200w.webp",
  webp_size: "337714"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/100_s.gif",
  width: "165",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/200_d.gif",
  width: "330",
  height: "200",
  size: "172654",
  webp: "https://media3.giphy.com/media/14nJpITpJAtNjG/200_d.webp",
  webp_size: "110634"
  },
  preview: {
  width: "206",
  height: "124",
  mp4: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy-preview.mp4",
  mp4_size: "42216"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/100.gif",
  width: "165",
  height: "100",
  size: "274562",
  mp4: "https://media3.giphy.com/media/14nJpITpJAtNjG/100.mp4",
  mp4_size: "31866",
  webp: "https://media3.giphy.com/media/14nJpITpJAtNjG/100.webp",
  webp_size: "245876"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy-downsized_s.gif",
  width: "350",
  height: "212",
  size: "34170"
  },
  downsized: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy-downsized.gif",
  width: "350",
  height: "212",
  size: "1162356"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy.gif",
  width: "350",
  height: "212",
  size: "1162356"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/100w_s.gif",
  width: "100",
  height: "61"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy-preview.webp",
  width: "158",
  height: "96",
  size: "46404"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/200w_s.gif",
  width: "200",
  height: "121"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/100w.gif",
  width: "100",
  height: "61",
  size: "107069",
  mp4: "https://media3.giphy.com/media/14nJpITpJAtNjG/100w.mp4",
  mp4_size: "14917",
  webp: "https://media3.giphy.com/media/14nJpITpJAtNjG/100w.webp",
  webp_size: "112050"
  },
  downsized_small: {
  width: "350",
  height: "212",
  mp4: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy-downsized-small.mp4",
  mp4_size: "143429"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/200w_d.gif",
  width: "200",
  height: "121",
  size: "64571",
  webp: "https://media3.giphy.com/media/14nJpITpJAtNjG/200w_d.webp",
  webp_size: "48638"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy.gif",
  width: "350",
  height: "212",
  size: "1162356"
  },
  original: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy.gif",
  width: "350",
  height: "212",
  size: "1162356",
  frames: "42",
  mp4: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy.mp4",
  mp4_size: "163820",
  webp: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy.webp",
  webp_size: "906250"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/200.gif",
  width: "330",
  height: "200",
  size: "1005543",
  mp4: "https://media3.giphy.com/media/14nJpITpJAtNjG/200.mp4",
  mp4_size: "81976",
  webp: "https://media3.giphy.com/media/14nJpITpJAtNjG/200.webp",
  webp_size: "757168"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy-loop.mp4",
  mp4_size: "1542278"
  },
  original_mp4: {
  width: "480",
  height: "290",
  mp4: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy.mp4",
  mp4_size: "163820"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/14nJpITpJAtNjG/giphy-preview.gif",
  width: "142",
  height: "86",
  size: "49597"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/14nJpITpJAtNjG/480w_s.jpg",
  width: "480",
  height: "291"
  }
  },
  title: "merry christmas GIF by Greetings",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=14nJpITpJAtNjG&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=14nJpITpJAtNjG&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=14nJpITpJAtNjG&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "DkZzS4Jgvx2Za",
  slug: "spongebob-squarepants-christmas-santa-DkZzS4Jgvx2Za",
  url: "https://giphy.com/gifs/spongebob-squarepants-christmas-santa-DkZzS4Jgvx2Za",
  bitly_gif_url: "https://gph.is/Vx0KLA",
  bitly_url: "https://gph.is/Vx0KLA",
  embed_url: "https://giphy.com/embed/DkZzS4Jgvx2Za",
  username: "spongebob",
  source: "https://1dimaginesin3d.tumblr.com/post/38759545947/to-those-of-you-whole-celebrate-it-merry-christmas",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "https://1dimaginesin3d.tumblr.com/post/38759545947/to-those-of-you-whole-celebrate-it-merry-christmas",
  is_sticker: 0,
  import_datetime: "1970-01-01 00:00:00",
  trending_datetime: "2018-12-21 00:00:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/spongebob/U4nimQFVGMqR.jpg",
  banner_url: "https://media4.giphy.com/avatars/spongebob/YHxcb1VlRUcI.gif",
  banner_image: "https://media4.giphy.com/avatars/spongebob/YHxcb1VlRUcI.gif",
  profile_url: "https://giphy.com/spongebob/",
  username: "spongebob",
  display_name: "SpongeBob SquarePants",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200_s.gif",
  width: "326",
  height: "200"
  },
  original_still: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy_s.gif",
  width: "375",
  height: "230"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200w.gif",
  width: "200",
  height: "123",
  size: "68106",
  mp4: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200w.mp4",
  mp4_size: "32225",
  webp: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200w.webp",
  webp_size: "113454"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/100_s.gif",
  width: "163",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200_d.gif",
  width: "326",
  height: "200",
  size: "185156",
  webp: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200_d.webp",
  webp_size: "125678"
  },
  preview: {
  width: "260",
  height: "158",
  mp4: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy-preview.mp4",
  mp4_size: "49881"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/100.gif",
  width: "163",
  height: "100",
  size: "145677",
  mp4: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/100.mp4",
  mp4_size: "97368",
  webp: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/100.webp",
  webp_size: "73964"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy-downsized_s.gif",
  width: "375",
  height: "230",
  size: "20346"
  },
  downsized: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy-downsized.gif",
  width: "375",
  height: "230",
  size: "204168"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy.gif",
  width: "375",
  height: "230",
  size: "204168"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/100w_s.gif",
  width: "100",
  height: "61"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy-preview.webp",
  width: "205",
  height: "126",
  size: "47838"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200w_s.gif",
  width: "200",
  height: "123"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/100w.gif",
  width: "100",
  height: "61",
  size: "68106",
  mp4: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/100w.mp4",
  mp4_size: "43753",
  webp: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/100w.webp",
  webp_size: "31620"
  },
  downsized_small: {
  width: "374",
  height: "230",
  mp4: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy-downsized-small.mp4",
  mp4_size: "114034"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200w_d.gif",
  width: "200",
  height: "123",
  size: "105017",
  webp: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200w_d.webp",
  webp_size: "51652"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy.gif",
  width: "375",
  height: "230",
  size: "204168"
  },
  original: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy.gif",
  width: "375",
  height: "230",
  size: "204168",
  frames: "13",
  mp4: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy.mp4",
  mp4_size: "133832",
  webp: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy.webp",
  webp_size: "343828"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200.gif",
  width: "326",
  height: "200",
  size: "145677",
  mp4: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200.mp4",
  mp4_size: "28658",
  webp: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/200.webp",
  webp_size: "275738"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy-loop.mp4",
  mp4_size: "3993627"
  },
  original_mp4: {
  width: "480",
  height: "294",
  mp4: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy.mp4",
  mp4_size: "133832"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/DkZzS4Jgvx2Za/giphy-preview.gif",
  width: "201",
  height: "123",
  size: "49700"
  },
  "480w_still": {
  url: "https://media2.giphy.com/media/DkZzS4Jgvx2Za/480w_s.jpg",
  width: "480",
  height: "294"
  }
  },
  title: "santa chimney GIF by SpongeBob SquarePants",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=DkZzS4Jgvx2Za&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=DkZzS4Jgvx2Za&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=DkZzS4Jgvx2Za&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l2RnEqBAvS5tCwYNO",
  slug: "dram-l2RnEqBAvS5tCwYNO",
  url: "https://giphy.com/gifs/dram-l2RnEqBAvS5tCwYNO",
  bitly_gif_url: "https://gph.is/2izM3MN",
  bitly_url: "https://gph.is/2izM3MN",
  embed_url: "https://giphy.com/embed/l2RnEqBAvS5tCwYNO",
  username: "dram",
  source: "https://bigbabydram.com",
  rating: "pg",
  content_url: "",
  source_tld: "bigbabydram.com",
  source_post_url: "https://bigbabydram.com",
  is_sticker: 0,
  import_datetime: "2017-12-01 20:01:38",
  trending_datetime: "2018-12-20 23:45:01",
  user: {
  avatar_url: "https://media4.giphy.com/avatars/dram/XsDZMHmbEbXP.gif",
  banner_url: "",
  profile_url: "https://giphy.com/dram/",
  username: "dram",
  display_name: "DRAM",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200_s.gif",
  width: "378",
  height: "200",
  size: "52750"
  },
  original_still: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy_s.gif",
  width: "480",
  height: "254",
  size: "89186"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200w.gif",
  width: "200",
  height: "106",
  size: "922021",
  mp4: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200w.mp4",
  mp4_size: "127308",
  webp: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200w.webp",
  webp_size: "528980"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/100_s.gif",
  width: "189",
  height: "100",
  size: "14615"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200_d.gif",
  width: "378",
  height: "200",
  size: "311573",
  webp: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200_d.webp",
  webp_size: "102454"
  },
  preview: {
  width: "230",
  height: "122",
  mp4: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy-preview.mp4",
  mp4_size: "47686"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/100.gif",
  width: "189",
  height: "100",
  size: "869886",
  mp4: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/100.mp4",
  mp4_size: "114454",
  webp: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/100.webp",
  webp_size: "480312"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy-downsized_s.gif",
  width: "250",
  height: "132",
  size: "25169"
  },
  downsized: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy-downsized.gif",
  width: "250",
  height: "132",
  size: "1094801"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy.gif",
  width: "480",
  height: "254",
  size: "5863019"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/100w_s.gif",
  width: "100",
  height: "53",
  size: "5185"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy-preview.webp",
  width: "170",
  height: "90",
  size: "49328"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200w_s.gif",
  width: "200",
  height: "106",
  size: "15889"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/100w.gif",
  width: "100",
  height: "53",
  size: "237736",
  mp4: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/100w.mp4",
  mp4_size: "44305",
  webp: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/100w.webp",
  webp_size: "188578"
  },
  downsized_small: {
  width: "249",
  height: "132",
  mp4: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy-downsized-small.mp4",
  mp4_size: "109665"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200w_d.gif",
  width: "200",
  height: "106",
  size: "90315",
  webp: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200w_d.webp",
  webp_size: "38196"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy-downsized-medium.gif",
  width: "384",
  height: "203",
  size: "3544689"
  },
  original: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy.gif",
  width: "480",
  height: "254",
  size: "5863019",
  frames: "81",
  mp4: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy.mp4",
  mp4_size: "506055",
  webp: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy.webp",
  webp_size: "2325838",
  hash: "bb13b22146188439dd86bc39728c58e2"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200.gif",
  width: "378",
  height: "200",
  size: "3469621",
  mp4: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200.mp4",
  mp4_size: "330807",
  webp: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/200.webp",
  webp_size: "1419166"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy-loop.mp4",
  mp4_size: "4498080"
  },
  original_mp4: {
  width: "480",
  height: "252",
  mp4: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy.mp4",
  mp4_size: "506055"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/l2RnEqBAvS5tCwYNO/giphy-preview.gif",
  width: "130",
  height: "69",
  size: "48511"
  },
  "480w_still": {
  url: "https://media4.giphy.com/media/l2RnEqBAvS5tCwYNO/480w_s.jpg",
  width: "480",
  height: "254"
  }
  },
  title: "merry christmas big baby dram GIF by DRAM",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2RnEqBAvS5tCwYNO&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2RnEqBAvS5tCwYNO&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l2RnEqBAvS5tCwYNO&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "3ofT5CK1kD7GaV6WJi",
  slug: "filmeditor-sun-christmas-movies-3ofT5CK1kD7GaV6WJi",
  url: "https://giphy.com/gifs/filmeditor-sun-christmas-movies-3ofT5CK1kD7GaV6WJi",
  bitly_gif_url: "https://gph.is/2iv4Jr7",
  bitly_url: "https://gph.is/2iv4Jr7",
  embed_url: "https://giphy.com/embed/3ofT5CK1kD7GaV6WJi",
  username: "",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-12-26 01:32:26",
  trending_datetime: "2018-12-20 23:30:02",
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200_s.gif",
  width: "272",
  height: "200",
  size: "38008"
  },
  original_still: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy_s.gif",
  width: "480",
  height: "352",
  size: "99499"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200w.gif",
  width: "200",
  height: "146",
  size: "540608",
  mp4: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200w.mp4",
  mp4_size: "44656",
  webp: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200w.webp",
  webp_size: "229642"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/100_s.gif",
  width: "136",
  height: "100",
  size: "11957"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200_d.gif",
  width: "272",
  height: "200",
  size: "224284",
  webp: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200_d.webp",
  webp_size: "70322"
  },
  preview: {
  width: "272",
  height: "198",
  mp4: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy-preview.mp4",
  mp4_size: "41419"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/100.gif",
  width: "136",
  height: "100",
  size: "273738",
  mp4: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/100.mp4",
  mp4_size: "25379",
  webp: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/100.webp",
  webp_size: "131282"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy-downsized_s.gif",
  width: "250",
  height: "183",
  size: "30663"
  },
  downsized: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy-downsized.gif",
  width: "250",
  height: "183",
  size: "754684"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy.gif",
  width: "480",
  height: "352",
  size: "2674306"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/100w_s.gif",
  width: "100",
  height: "73",
  size: "7494"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy-preview.webp",
  width: "157",
  height: "115",
  size: "48518"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200w_s.gif",
  width: "200",
  height: "146",
  size: "22844"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/100w.gif",
  width: "100",
  height: "73",
  size: "160196",
  mp4: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/100w.mp4",
  mp4_size: "15789",
  webp: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/100w.webp",
  webp_size: "81674"
  },
  downsized_small: {
  width: "480",
  height: "352",
  mp4: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy-downsized-small.mp4",
  mp4_size: "185144"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200w_d.gif",
  width: "200",
  height: "146",
  size: "131348",
  webp: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200w_d.webp",
  webp_size: "44316"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy.gif",
  width: "480",
  height: "352",
  size: "2674306"
  },
  original: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy.gif",
  width: "480",
  height: "352",
  size: "2674306",
  frames: "31",
  mp4: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy.mp4",
  mp4_size: "185144",
  webp: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy.webp",
  webp_size: "840498",
  hash: "420284f5a9fa173df90c155bbe932bb9"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200.gif",
  width: "272",
  height: "200",
  size: "950261",
  mp4: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200.mp4",
  mp4_size: "70718",
  webp: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/200.webp",
  webp_size: "361412"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy-loop.mp4",
  mp4_size: "1266519"
  },
  original_mp4: {
  width: "480",
  height: "352",
  mp4: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy.mp4",
  mp4_size: "185144"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/3ofT5CK1kD7GaV6WJi/giphy-preview.gif",
  width: "108",
  height: "79",
  size: "48714"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/3ofT5CK1kD7GaV6WJi/480w_s.jpg",
  width: "480",
  height: "352"
  }
  },
  title: "im too much heat miser GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ofT5CK1kD7GaV6WJi&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ofT5CK1kD7GaV6WJi&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=3ofT5CK1kD7GaV6WJi&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "Y6J3n0t4In4li",
  slug: "peanuts-charlie-brown-a-christmas-Y6J3n0t4In4li",
  url: "https://giphy.com/gifs/peanuts-charlie-brown-a-christmas-Y6J3n0t4In4li",
  bitly_gif_url: "https://gph.is/1FI4w8i",
  bitly_url: "https://gph.is/1FI4w8i",
  embed_url: "https://giphy.com/embed/Y6J3n0t4In4li",
  username: "peanuts",
  source: "https://www.peanuts.com",
  rating: "g",
  content_url: "",
  source_tld: "www.peanuts.com",
  source_post_url: "https://www.peanuts.com",
  is_sticker: 0,
  import_datetime: "2014-12-01 21:05:32",
  trending_datetime: "2018-12-20 23:15:01",
  user: {
  avatar_url: "https://media1.giphy.com/avatars/peanuts/mnr8aQKMO748.jpg",
  banner_url: "https://media1.giphy.com/headers/peanuts/FgILIAMkBM0u.png",
  banner_image: "https://media1.giphy.com/headers/peanuts/FgILIAMkBM0u.png",
  profile_url: "https://giphy.com/peanuts/",
  username: "peanuts",
  display_name: "Peanuts",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/200_s.gif",
  width: "267",
  height: "200"
  },
  original_still: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy_s.gif",
  width: "480",
  height: "360"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/200w.gif",
  width: "200",
  height: "150",
  size: "325020",
  mp4: "https://media1.giphy.com/media/Y6J3n0t4In4li/200w.mp4",
  mp4_size: "46903",
  webp: "https://media1.giphy.com/media/Y6J3n0t4In4li/200w.webp",
  webp_size: "180616"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/100_s.gif",
  width: "133",
  height: "100"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/200_d.gif",
  width: "267",
  height: "200",
  size: "214383",
  webp: "https://media1.giphy.com/media/Y6J3n0t4In4li/200_d.webp",
  webp_size: "100100"
  },
  preview: {
  width: "192",
  height: "144",
  mp4: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy-preview.mp4",
  mp4_size: "46115"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/100.gif",
  width: "133",
  height: "100",
  size: "163523",
  mp4: "https://media1.giphy.com/media/Y6J3n0t4In4li/100.mp4",
  mp4_size: "23063",
  webp: "https://media1.giphy.com/media/Y6J3n0t4In4li/100.webp",
  webp_size: "96272"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy_s.gif",
  width: "480",
  height: "360"
  },
  downsized: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy.gif",
  width: "480",
  height: "360",
  size: "1410194"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy.gif",
  width: "480",
  height: "360",
  size: "1410194"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/100w_s.gif",
  width: "100",
  height: "75"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy-preview.webp",
  width: "137",
  height: "103",
  size: "49412"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/200w_s.gif",
  width: "200",
  height: "150"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/100w.gif",
  width: "100",
  height: "75",
  size: "103537",
  mp4: "https://media1.giphy.com/media/Y6J3n0t4In4li/100w.mp4",
  mp4_size: "14259",
  webp: "https://media1.giphy.com/media/Y6J3n0t4In4li/100w.webp",
  webp_size: "62030"
  },
  downsized_small: {
  width: "480",
  height: "360",
  mp4: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy-downsized-small.mp4",
  mp4_size: "196737"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/200w_d.gif",
  width: "200",
  height: "150",
  size: "123255",
  webp: "https://media1.giphy.com/media/Y6J3n0t4In4li/200w_d.webp",
  webp_size: "64784"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy.gif",
  width: "480",
  height: "360",
  size: "1410194"
  },
  original: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy.gif",
  width: "480",
  height: "360",
  size: "1410194",
  frames: "20",
  mp4: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy.mp4",
  mp4_size: "192432",
  webp: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy.webp",
  webp_size: "565216"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/200.gif",
  width: "267",
  height: "200",
  size: "552879",
  mp4: "https://media1.giphy.com/media/Y6J3n0t4In4li/200.mp4",
  mp4_size: "73345",
  webp: "https://media1.giphy.com/media/Y6J3n0t4In4li/200.webp",
  webp_size: "273656"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy-loop.mp4",
  mp4_size: "1790606"
  },
  original_mp4: {
  width: "480",
  height: "360",
  mp4: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy.mp4",
  mp4_size: "192432"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/Y6J3n0t4In4li/giphy-preview.gif",
  width: "127",
  height: "95",
  size: "48882"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/Y6J3n0t4In4li/480w_s.jpg",
  width: "480",
  height: "360"
  }
  },
  title: "charlie brown dance GIF by Peanuts",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=Y6J3n0t4In4li&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=Y6J3n0t4In4li&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=Y6J3n0t4In4li&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "26u4k1n5j3O2DOzwk",
  slug: "hallmarkecards-christmas-26u4k1n5j3O2DOzwk",
  url: "https://giphy.com/gifs/hallmarkecards-christmas-26u4k1n5j3O2DOzwk",
  bitly_gif_url: "https://gph.is/2j0xNZr",
  bitly_url: "https://gph.is/2j0xNZr",
  embed_url: "https://giphy.com/embed/26u4k1n5j3O2DOzwk",
  username: "hallmarkecards",
  source: "https://www.hallmarkecards.com/ecards/warmest-holiday-wishes-npz5507/personalize",
  rating: "g",
  content_url: "",
  source_tld: "www.hallmarkecards.com",
  source_post_url: "https://www.hallmarkecards.com/ecards/warmest-holiday-wishes-npz5507/personalize",
  is_sticker: 0,
  import_datetime: "2017-11-17 00:25:14",
  trending_datetime: "2018-12-20 23:00:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/hallmarkecards/W8ln0QjAtfUQ.gif",
  banner_url: "https://media0.giphy.com/headers/hallmarkecards/9v2ae0uZWnAb.gif",
  banner_image: "https://media0.giphy.com/headers/hallmarkecards/9v2ae0uZWnAb.gif",
  profile_url: "https://giphy.com/hallmarkecards/",
  username: "hallmarkecards",
  display_name: "Hallmark eCards",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200_s.gif",
  width: "355",
  height: "200",
  size: "44981"
  },
  original_still: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy_s.gif",
  width: "460",
  height: "259",
  size: "75426"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200w.gif",
  width: "200",
  height: "113",
  size: "93814",
  mp4: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200w.mp4",
  mp4_size: "22015",
  webp: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200w.webp",
  webp_size: "97356"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/100_s.gif",
  width: "178",
  height: "100",
  size: "12573"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200_d.gif",
  width: "355",
  height: "200",
  size: "198559",
  webp: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200_d.webp",
  webp_size: "119918"
  },
  preview: {
  width: "281",
  height: "158",
  mp4: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy-preview.mp4",
  mp4_size: "23212"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/100.gif",
  width: "178",
  height: "100",
  size: "77723",
  mp4: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/100.mp4",
  mp4_size: "31261",
  webp: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/100.webp",
  webp_size: "79252"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy-downsized_s.gif",
  width: "460",
  height: "259",
  size: "75426"
  },
  downsized: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy-downsized.gif",
  width: "460",
  height: "259",
  size: "968703"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy.gif",
  width: "460",
  height: "259",
  size: "968703"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/100w_s.gif",
  width: "100",
  height: "57",
  size: "5230"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy-preview.webp",
  width: "149",
  height: "84",
  size: "49094"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200w_s.gif",
  width: "200",
  height: "113",
  size: "15276"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/100w.gif",
  width: "100",
  height: "57",
  size: "25433",
  mp4: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/100w.mp4",
  mp4_size: "6650",
  webp: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/100w.webp",
  webp_size: "30856"
  },
  downsized_small: {
  width: "460",
  height: "258",
  mp4: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy-downsized-small.mp4",
  mp4_size: "131862"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200w_d.gif",
  width: "200",
  height: "113",
  size: "63342",
  webp: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200w_d.webp",
  webp_size: "46018"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy.gif",
  width: "460",
  height: "259",
  size: "968703"
  },
  original: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy.gif",
  width: "460",
  height: "259",
  size: "968703",
  frames: "13",
  mp4: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy.mp4",
  mp4_size: "111419",
  webp: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy.webp",
  webp_size: "412954",
  hash: "2caeb297a1c40ac5f5e181ac3064f7f0"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200.gif",
  width: "355",
  height: "200",
  size: "297701",
  mp4: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200.mp4",
  mp4_size: "61072",
  webp: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/200.webp",
  webp_size: "250574"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy-loop.mp4",
  mp4_size: "1856883"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy.mp4",
  mp4_size: "111419"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/26u4k1n5j3O2DOzwk/giphy-preview.gif",
  width: "165",
  height: "93",
  size: "48571"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/26u4k1n5j3O2DOzwk/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "happy birthday christmas GIF by Hallmark eCards",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26u4k1n5j3O2DOzwk&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26u4k1n5j3O2DOzwk&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26u4k1n5j3O2DOzwk&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l1Kdd3YKekfcyp1GU",
  slug: "buzzfeed-christmas-buzzfeed-animation-l1Kdd3YKekfcyp1GU",
  url: "https://giphy.com/gifs/buzzfeed-christmas-buzzfeed-animation-l1Kdd3YKekfcyp1GU",
  bitly_gif_url: "https://gph.is/2AyeWzH",
  bitly_url: "https://gph.is/2AyeWzH",
  embed_url: "https://giphy.com/embed/l1Kdd3YKekfcyp1GU",
  username: "buzzfeed",
  source: "",
  rating: "pg",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2017-12-01 18:54:27",
  trending_datetime: "2018-12-20 22:45:01",
  user: {
  avatar_url: "https://media0.giphy.com/avatars/buzzfeed/7FY6Nc0QS1kn.gif",
  banner_url: "",
  profile_url: "https://giphy.com/buzzfeed/",
  username: "buzzfeed",
  display_name: "BuzzFeed",
  is_verified: true
  },
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200_s.gif",
  width: "200",
  height: "200",
  size: "3023"
  },
  original_still: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy_s.gif",
  width: "480",
  height: "480",
  size: "9396"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200w.gif",
  width: "200",
  height: "200",
  size: "636000",
  mp4: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200w.mp4",
  mp4_size: "99684",
  webp: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200w.webp",
  webp_size: "404306"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/100_s.gif",
  width: "100",
  height: "100",
  size: "1166"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200_d.gif",
  width: "200",
  height: "200",
  size: "41593",
  webp: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200_d.webp",
  webp_size: "21494"
  },
  preview: {
  width: "480",
  height: "480",
  mp4: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy-preview.mp4",
  mp4_size: "20600"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/100.gif",
  width: "100",
  height: "100",
  size: "191187",
  mp4: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/100.mp4",
  mp4_size: "51599",
  webp: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/100.webp",
  webp_size: "158016"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy-downsized_s.gif",
  width: "480",
  height: "480",
  size: "10354"
  },
  downsized: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy-downsized.gif",
  width: "480",
  height: "480",
  size: "1182944"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy.gif",
  width: "480",
  height: "480",
  size: "2445042"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/100w_s.gif",
  width: "100",
  height: "100",
  size: "1166"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy-preview.webp",
  width: "480",
  height: "480",
  size: "2390"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200w_s.gif",
  width: "200",
  height: "200",
  size: "3023"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/100w.gif",
  width: "100",
  height: "100",
  size: "191187",
  mp4: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/100w.mp4",
  mp4_size: "46208",
  webp: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/100w.webp",
  webp_size: "158016"
  },
  downsized_small: {
  width: "426",
  height: "426",
  mp4: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy-downsized-small.mp4",
  mp4_size: "131456"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200w_d.gif",
  width: "200",
  height: "200",
  size: "41593",
  webp: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200w_d.webp",
  webp_size: "21494"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy.gif",
  width: "480",
  height: "480",
  size: "2445042"
  },
  original: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy.gif",
  width: "480",
  height: "480",
  size: "2445042",
  frames: "151",
  mp4: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy.mp4",
  mp4_size: "252819",
  webp: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy.webp",
  webp_size: "919110",
  hash: "de8558ce0f43573c78f88133ad2c5012"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200.gif",
  width: "200",
  height: "200",
  size: "636000",
  mp4: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200.mp4",
  mp4_size: "99684",
  webp: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/200.webp",
  webp_size: "404306"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy-loop.mp4",
  mp4_size: "376202"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy.mp4",
  mp4_size: "252819"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/giphy-preview.gif",
  width: "480",
  height: "480",
  size: "12446"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/l1Kdd3YKekfcyp1GU/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "elf on a shelf christmas GIF by BuzzFeed",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1Kdd3YKekfcyp1GU&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1Kdd3YKekfcyp1GU&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1Kdd3YKekfcyp1GU&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l1IYdJ3iFy4p9FzX2",
  slug: "filmeditor-eating-bored-l1IYdJ3iFy4p9FzX2",
  url: "https://giphy.com/gifs/filmeditor-eating-bored-l1IYdJ3iFy4p9FzX2",
  bitly_gif_url: "https://gph.is/2itM5zV",
  bitly_url: "https://gph.is/2itM5zV",
  embed_url: "https://giphy.com/embed/l1IYdJ3iFy4p9FzX2",
  username: "",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-12-25 15:45:56",
  trending_datetime: "2018-12-20 22:30:01",
  images: {
  fixed_height_still: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200_s.gif",
  width: "372",
  height: "200",
  size: "42882"
  },
  original_still: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy_s.gif",
  width: "480",
  height: "258",
  size: "62074"
  },
  fixed_width: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200w.gif",
  width: "200",
  height: "108",
  size: "630658",
  mp4: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200w.mp4",
  mp4_size: "27913",
  webp: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200w.webp",
  webp_size: "283666"
  },
  fixed_height_small_still: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/100_s.gif",
  width: "186",
  height: "100",
  size: "13981"
  },
  fixed_height_downsampled: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200_d.gif",
  width: "372",
  height: "200",
  size: "251486",
  webp: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200_d.webp",
  webp_size: "47504"
  },
  preview: {
  width: "480",
  height: "258",
  mp4: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy-preview.mp4",
  mp4_size: "44757"
  },
  fixed_height_small: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/100.gif",
  width: "186",
  height: "100",
  size: "566279",
  mp4: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/100.mp4",
  mp4_size: "25878",
  webp: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/100.webp",
  webp_size: "255002"
  },
  downsized_still: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy-downsized_s.gif",
  width: "250",
  height: "134",
  size: "23508"
  },
  downsized: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy-downsized.gif",
  width: "250",
  height: "134",
  size: "618904"
  },
  downsized_large: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy.gif",
  width: "480",
  height: "258",
  size: "2821499"
  },
  fixed_width_small_still: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/100w_s.gif",
  width: "100",
  height: "54",
  size: "5702"
  },
  preview_webp: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy-preview.webp",
  width: "290",
  height: "156",
  size: "48058"
  },
  fixed_width_still: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200w_s.gif",
  width: "200",
  height: "108",
  size: "16501"
  },
  fixed_width_small: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/100w.gif",
  width: "100",
  height: "54",
  size: "186736",
  mp4: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/100w.mp4",
  mp4_size: "12659",
  webp: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/100w.webp",
  webp_size: "133584"
  },
  downsized_small: {
  width: "480",
  height: "258",
  mp4: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy-downsized-small.mp4",
  mp4_size: "108400"
  },
  fixed_width_downsampled: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200w_d.gif",
  width: "200",
  height: "108",
  size: "90016",
  webp: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200w_d.webp",
  webp_size: "22606"
  },
  downsized_medium: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy.gif",
  width: "480",
  height: "258",
  size: "2821499"
  },
  original: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy.gif",
  width: "480",
  height: "258",
  size: "2821499",
  frames: "84",
  mp4: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy.mp4",
  mp4_size: "108400",
  webp: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy.webp",
  webp_size: "704840",
  hash: "1665bc0c3f3053beeb3158a1e419b7f9"
  },
  fixed_height: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200.gif",
  width: "372",
  height: "200",
  size: "1922544",
  mp4: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200.mp4",
  mp4_size: "67879",
  webp: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/200.webp",
  webp_size: "546442"
  },
  looping: {
  mp4: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy-loop.mp4",
  mp4_size: "294368"
  },
  original_mp4: {
  width: "480",
  height: "258",
  mp4: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy.mp4",
  mp4_size: "108400"
  },
  preview_gif: {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/giphy-preview.gif",
  width: "175",
  height: "94",
  size: "49516"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/l1IYdJ3iFy4p9FzX2/480w_s.jpg",
  width: "480",
  height: "258"
  }
  },
  title: "jim carrey eating GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1IYdJ3iFy4p9FzX2&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1IYdJ3iFy4p9FzX2&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1IYdJ3iFy4p9FzX2&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "26niCRAVxVn2BPP20",
  slug: "filmeditor-christmas-movies-a-story-26niCRAVxVn2BPP20",
  url: "https://giphy.com/gifs/filmeditor-christmas-movies-a-story-26niCRAVxVn2BPP20",
  bitly_gif_url: "https://gph.is/2gMsOMd",
  bitly_url: "https://gph.is/2gMsOMd",
  embed_url: "https://giphy.com/embed/26niCRAVxVn2BPP20",
  username: "",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-12-14 22:23:52",
  trending_datetime: "2018-12-20 22:15:02",
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200_s.gif",
  width: "356",
  height: "200",
  size: "51782"
  },
  original_still: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy_s.gif",
  width: "480",
  height: "270",
  size: "85255"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200w.gif",
  width: "200",
  height: "112",
  size: "360260",
  mp4: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200w.mp4",
  mp4_size: "31201",
  webp: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200w.webp",
  webp_size: "185714"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/100_s.gif",
  width: "178",
  height: "100",
  size: "16122"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200_d.gif",
  width: "356",
  height: "200",
  size: "291100",
  webp: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200_d.webp",
  webp_size: "85662"
  },
  preview: {
  width: "270",
  height: "150",
  mp4: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy-preview.mp4",
  mp4_size: "29195"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/100.gif",
  width: "178",
  height: "100",
  size: "288518",
  mp4: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/100.mp4",
  mp4_size: "29129",
  webp: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/100.webp",
  webp_size: "159644"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy-downsized_s.gif",
  width: "480",
  height: "270",
  size: "85255"
  },
  downsized: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy-downsized.gif",
  width: "480",
  height: "270",
  size: "1724011"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy.gif",
  width: "480",
  height: "270",
  size: "1724011"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/100w_s.gif",
  width: "100",
  height: "56",
  size: "6576"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy-preview.webp",
  width: "160",
  height: "90",
  size: "48320"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200w_s.gif",
  width: "200",
  height: "112",
  size: "19972"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/100w.gif",
  width: "100",
  height: "56",
  size: "103209",
  mp4: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/100w.mp4",
  mp4_size: "13117",
  webp: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/100w.webp",
  webp_size: "72416"
  },
  downsized_small: {
  width: "480",
  height: "270",
  mp4: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy-downsized-small.mp4",
  mp4_size: "100511"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200w_d.gif",
  width: "200",
  height: "112",
  size: "106565",
  webp: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200w_d.webp",
  webp_size: "39600"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy.gif",
  width: "480",
  height: "270",
  size: "1724011"
  },
  original: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy.gif",
  width: "480",
  height: "270",
  size: "1724011",
  frames: "30",
  mp4: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy.mp4",
  mp4_size: "100511",
  webp: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy.webp",
  webp_size: "517572",
  hash: "940656af55f727a90f96f8300385d3ed"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200.gif",
  width: "356",
  height: "200",
  size: "1021703",
  mp4: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200.mp4",
  mp4_size: "66348",
  webp: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/200.webp",
  webp_size: "390640"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy-loop.mp4",
  mp4_size: "699866"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy.mp4",
  mp4_size: "100511"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/26niCRAVxVn2BPP20/giphy-preview.gif",
  width: "124",
  height: "70",
  size: "47907"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/26niCRAVxVn2BPP20/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "a christmas story triple dog dare GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26niCRAVxVn2BPP20&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26niCRAVxVn2BPP20&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=26niCRAVxVn2BPP20&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "l1IYbqyLSloejiLok",
  slug: "filmeditor-happy-lol-l1IYbqyLSloejiLok",
  url: "https://giphy.com/gifs/filmeditor-happy-lol-l1IYbqyLSloejiLok",
  bitly_gif_url: "https://gph.is/2ipGJFO",
  bitly_url: "https://gph.is/2ipGJFO",
  embed_url: "https://giphy.com/embed/l1IYbqyLSloejiLok",
  username: "",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2016-12-24 04:23:49",
  trending_datetime: "2018-12-20 22:00:01",
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200_s.gif",
  width: "366",
  height: "200",
  size: "41658"
  },
  original_still: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy_s.gif",
  width: "480",
  height: "262",
  size: "59884"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200w.gif",
  width: "200",
  height: "110",
  size: "320552",
  mp4: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200w.mp4",
  mp4_size: "15960",
  webp: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200w.webp",
  webp_size: "67728"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/100_s.gif",
  width: "183",
  height: "100",
  size: "13831"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200_d.gif",
  width: "366",
  height: "200",
  size: "264684",
  webp: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200_d.webp",
  webp_size: "30582"
  },
  preview: {
  width: "432",
  height: "234",
  mp4: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy-preview.mp4",
  mp4_size: "43696"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/100.gif",
  width: "183",
  height: "100",
  size: "276145",
  mp4: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/100.mp4",
  mp4_size: "15642",
  webp: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/100.webp",
  webp_size: "60872"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy-tumblr_s.gif",
  width: "480",
  height: "262",
  size: "59884"
  },
  downsized: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy-tumblr.gif",
  width: "480",
  height: "262",
  size: "1407425"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy.gif",
  width: "480",
  height: "262",
  size: "1407425"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/100w_s.gif",
  width: "100",
  height: "55",
  size: "5831"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy-preview.webp",
  width: "376",
  height: "205",
  size: "47676"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200w_s.gif",
  width: "200",
  height: "110",
  size: "16383"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/100w.gif",
  width: "100",
  height: "55",
  size: "98288",
  mp4: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/100w.mp4",
  mp4_size: "8164",
  webp: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/100w.webp",
  webp_size: "31204"
  },
  downsized_small: {
  width: "481",
  height: "262",
  mp4: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy-downsized-small.mp4",
  mp4_size: "51708"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200w_d.gif",
  width: "200",
  height: "110",
  size: "97040",
  webp: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200w_d.webp",
  webp_size: "14984"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy.gif",
  width: "480",
  height: "262",
  size: "1407425"
  },
  original: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy.gif",
  width: "480",
  height: "262",
  size: "1407425",
  frames: "27",
  mp4: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy.mp4",
  mp4_size: "51708",
  webp: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy.webp",
  webp_size: "193344",
  hash: "24821808b3680d134c01a9e417aeb017"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200.gif",
  width: "366",
  height: "200",
  size: "929194",
  mp4: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200.mp4",
  mp4_size: "34441",
  webp: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/200.webp",
  webp_size: "138182"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy-loop.mp4",
  mp4_size: "430372"
  },
  original_mp4: {
  width: "480",
  height: "262",
  mp4: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy.mp4",
  mp4_size: "51708"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/l1IYbqyLSloejiLok/giphy-preview.gif",
  width: "137",
  height: "75",
  size: "49246"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/l1IYbqyLSloejiLok/480w_s.jpg",
  width: "480",
  height: "262"
  }
  },
  title: "happy richard attenborough GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1IYbqyLSloejiLok&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1IYbqyLSloejiLok&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=l1IYbqyLSloejiLok&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "5t3RY0RHLUV3RHKFkj",
  slug: "cute-animal-mood-5t3RY0RHLUV3RHKFkj",
  url: "https://giphy.com/gifs/cute-animal-mood-5t3RY0RHLUV3RHKFkj",
  bitly_gif_url: "https://gph.is/2ABxInN",
  bitly_url: "https://gph.is/2ABxInN",
  embed_url: "https://giphy.com/embed/5t3RY0RHLUV3RHKFkj",
  username: "",
  source: "",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2018-11-30 08:12:35",
  trending_datetime: "2018-12-20 21:45:02",
  images: {
  fixed_height_still: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200_s.gif",
  width: "200",
  height: "200",
  size: "28254"
  },
  original_still: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy_s.gif",
  width: "480",
  height: "480",
  size: "104864"
  },
  fixed_width: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200w.gif",
  width: "200",
  height: "200",
  size: "2191057",
  mp4: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200w.mp4",
  mp4_size: "171967",
  webp: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200w.webp",
  webp_size: "331940"
  },
  fixed_height_small_still: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/100_s.gif",
  width: "100",
  height: "100",
  size: "9881"
  },
  fixed_height_downsampled: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200_d.gif",
  width: "200",
  height: "200",
  size: "178247",
  webp: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200_d.webp",
  webp_size: "27352"
  },
  preview: {
  width: "318",
  height: "318",
  mp4: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy-preview.mp4",
  mp4_size: "30857"
  },
  fixed_height_small: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/100.gif",
  width: "100",
  height: "100",
  size: "703304",
  mp4: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/100.mp4",
  mp4_size: "61442",
  webp: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/100.webp",
  webp_size: "128396"
  },
  downsized_still: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy-downsized_s.gif",
  width: "171",
  height: "171",
  size: "23740"
  },
  downsized: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy-downsized.gif",
  width: "171",
  height: "171",
  size: "1421921"
  },
  downsized_large: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy.gif",
  width: "480",
  height: "480",
  size: "7938123"
  },
  fixed_width_small_still: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/100w_s.gif",
  width: "100",
  height: "100",
  size: "9881"
  },
  preview_webp: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy-preview.webp",
  width: "220",
  height: "220",
  size: "48650"
  },
  fixed_width_still: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200w_s.gif",
  width: "200",
  height: "200",
  size: "28254"
  },
  fixed_width_small: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/100w.gif",
  width: "100",
  height: "100",
  size: "703304",
  mp4: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/100w.mp4",
  mp4_size: "48927",
  webp: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/100w.webp",
  webp_size: "128396"
  },
  downsized_small: {
  width: "272",
  height: "272",
  mp4: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy-downsized-small.mp4",
  mp4_size: "112289"
  },
  fixed_width_downsampled: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200w_d.gif",
  width: "200",
  height: "200",
  size: "178247",
  webp: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200w_d.webp",
  webp_size: "27352"
  },
  downsized_medium: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy-downsized-medium.gif",
  width: "301",
  height: "301",
  size: "4466119"
  },
  original: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy.gif",
  width: "480",
  height: "480",
  size: "7938123",
  frames: "75",
  mp4: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy.mp4",
  mp4_size: "620363",
  webp: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy.webp",
  webp_size: "899922",
  hash: "254794cf9ab3ca5e6aa4256cf5d0803b"
  },
  fixed_height: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200.gif",
  width: "200",
  height: "200",
  size: "2191057",
  mp4: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200.mp4",
  mp4_size: "171967",
  webp: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/200.webp",
  webp_size: "331940"
  },
  hd: {
  width: "960",
  height: "960",
  mp4: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy-hd.mp4",
  mp4_size: "1369680"
  },
  looping: {
  mp4: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy-loop.mp4",
  mp4_size: "1707551"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy.mp4",
  mp4_size: "620363"
  },
  preview_gif: {
  url: "https://media0.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy-preview.gif",
  width: "68",
  height: "68",
  size: "48165"
  },
  "480w_still": {
  url: "https://media1.giphy.com/media/5t3RY0RHLUV3RHKFkj/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "dog mood GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=5t3RY0RHLUV3RHKFkj&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=5t3RY0RHLUV3RHKFkj&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=5t3RY0RHLUV3RHKFkj&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "33IuTLxqRETHkZUaH4",
  slug: "reaction-33IuTLxqRETHkZUaH4",
  url: "https://giphy.com/gifs/reaction-33IuTLxqRETHkZUaH4",
  bitly_gif_url: "https://gph.is/2S2qn7V",
  bitly_url: "https://gph.is/2S2qn7V",
  embed_url: "https://giphy.com/embed/33IuTLxqRETHkZUaH4",
  username: "",
  source: "https://www.reddit.com/r/reactiongifs/comments/9yz0rm/mrw_i_hear_that_the_band_pronounces_their_name/",
  rating: "g",
  content_url: "",
  source_tld: "www.reddit.com",
  source_post_url: "https://www.reddit.com/r/reactiongifs/comments/9yz0rm/mrw_i_hear_that_the_band_pronounces_their_name/",
  is_sticker: 0,
  import_datetime: "2018-11-21 06:02:38",
  trending_datetime: "2018-12-20 21:30:01",
  images: {
  fixed_height_still: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200_s.gif",
  width: "200",
  height: "200",
  size: "32486"
  },
  original_still: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy_s.gif",
  width: "260",
  height: "260",
  size: "38703"
  },
  fixed_width: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200w.gif",
  width: "200",
  height: "200",
  size: "3509908",
  mp4: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200w.mp4",
  mp4_size: "127554",
  webp: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200w.webp",
  webp_size: "386478"
  },
  fixed_height_small_still: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/100_s.gif",
  width: "100",
  height: "100",
  size: "9613"
  },
  fixed_height_downsampled: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200_d.gif",
  width: "200",
  height: "200",
  size: "191440",
  webp: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200_d.webp",
  webp_size: "34214"
  },
  preview: {
  width: "208",
  height: "208",
  mp4: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy-preview.mp4",
  mp4_size: "35086"
  },
  fixed_height_small: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/100.gif",
  width: "100",
  height: "100",
  size: "977386",
  mp4: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/100.mp4",
  mp4_size: "41591",
  webp: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/100.webp",
  webp_size: "139932"
  },
  downsized_still: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy-downsized_s.gif",
  width: "208",
  height: "208",
  size: "34665"
  },
  downsized: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy-downsized.gif",
  width: "208",
  height: "208",
  size: "1882684"
  },
  downsized_large: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy.gif",
  width: "260",
  height: "260",
  size: "3714184"
  },
  fixed_width_small_still: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/100w_s.gif",
  width: "100",
  height: "100",
  size: "9613"
  },
  preview_webp: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy-preview.webp",
  width: "158",
  height: "158",
  size: "36942"
  },
  fixed_width_still: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200w_s.gif",
  width: "200",
  height: "200",
  size: "32486"
  },
  fixed_width_small: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/100w.gif",
  width: "100",
  height: "100",
  size: "977386",
  mp4: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/100w.mp4",
  mp4_size: "41591",
  webp: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/100w.webp",
  webp_size: "139932"
  },
  downsized_small: {
  width: "166",
  height: "166",
  mp4: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy-downsized-small.mp4",
  mp4_size: "39910"
  },
  fixed_width_downsampled: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200w_d.gif",
  width: "200",
  height: "200",
  size: "191440",
  webp: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200w_d.webp",
  webp_size: "34214"
  },
  downsized_medium: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy.gif",
  width: "260",
  height: "260",
  size: "3714184"
  },
  original: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy.gif",
  width: "260",
  height: "260",
  size: "3714184",
  frames: "112",
  mp4: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy.mp4",
  mp4_size: "1143415",
  webp: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy.webp",
  webp_size: "674972",
  hash: "0b0efb55d2856532ef58e333b791b359"
  },
  fixed_height: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200.gif",
  width: "200",
  height: "200",
  size: "3509908",
  mp4: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200.mp4",
  mp4_size: "127554",
  webp: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/200.webp",
  webp_size: "386478"
  },
  looping: {
  mp4: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy-loop.mp4",
  mp4_size: "2526814"
  },
  original_mp4: {
  width: "480",
  height: "480",
  mp4: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy.mp4",
  mp4_size: "1143415"
  },
  preview_gif: {
  url: "https://media2.giphy.com/media/33IuTLxqRETHkZUaH4/giphy-preview.gif",
  width: "70",
  height: "70",
  size: "47745"
  },
  "480w_still": {
  url: "https://media0.giphy.com/media/33IuTLxqRETHkZUaH4/480w_s.jpg",
  width: "480",
  height: "480"
  }
  },
  title: "perplexed jack nicholson GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=33IuTLxqRETHkZUaH4&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=33IuTLxqRETHkZUaH4&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=33IuTLxqRETHkZUaH4&action_type=SENT"
  }
  }
  },
  {
  type: "gif",
  id: "9FW6lAAOwS0j1vwS1P",
  slug: "listening-cardi-b-blank-stare-9FW6lAAOwS0j1vwS1P",
  url: "https://giphy.com/gifs/listening-cardi-b-blank-stare-9FW6lAAOwS0j1vwS1P",
  bitly_gif_url: "https://gph.is/2ScihJQ",
  bitly_url: "https://gph.is/2ScihJQ",
  embed_url: "https://giphy.com/embed/9FW6lAAOwS0j1vwS1P",
  username: "",
  source: "https://twitter.com/stephenossola/status/1065666207364407302",
  rating: "g",
  content_url: "",
  source_tld: "twitter.com",
  source_post_url: "https://twitter.com/stephenossola/status/1065666207364407302",
  is_sticker: 0,
  import_datetime: "2018-11-25 08:32:25",
  trending_datetime: "2018-12-20 21:15:01",
  images: {
  fixed_height_still: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200_s.gif",
  width: "356",
  height: "200",
  size: "52188"
  },
  original_still: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy_s.gif",
  width: "480",
  height: "270",
  size: "90320"
  },
  fixed_width: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200w.gif",
  width: "200",
  height: "113",
  size: "777666",
  mp4: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200w.mp4",
  mp4_size: "124458",
  webp: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200w.webp",
  webp_size: "226682"
  },
  fixed_height_small_still: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/100_s.gif",
  width: "178",
  height: "100",
  size: "15893"
  },
  fixed_height_downsampled: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200_d.gif",
  width: "356",
  height: "200",
  size: "318025",
  webp: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200_d.webp",
  webp_size: "87812"
  },
  preview: {
  width: "312",
  height: "176",
  mp4: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy-preview.mp4",
  mp4_size: "45736"
  },
  fixed_height_small: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/100.gif",
  width: "178",
  height: "100",
  size: "630470",
  mp4: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/100.mp4",
  mp4_size: "111262",
  webp: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/100.webp",
  webp_size: "198752"
  },
  downsized_still: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy-downsized_s.gif",
  width: "281",
  height: "158",
  size: "36032"
  },
  downsized: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy-downsized.gif",
  width: "281",
  height: "158",
  size: "1444380"
  },
  downsized_large: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy.gif",
  width: "480",
  height: "270",
  size: "3659296"
  },
  fixed_width_small_still: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/100w_s.gif",
  width: "100",
  height: "57",
  size: "6338"
  },
  preview_webp: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy-preview.webp",
  width: "156",
  height: "88",
  size: "44492"
  },
  fixed_width_still: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200w_s.gif",
  width: "200",
  height: "113",
  size: "19225"
  },
  fixed_width_small: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/100w.gif",
  width: "100",
  height: "57",
  size: "235238",
  mp4: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/100w.mp4",
  mp4_size: "47470",
  webp: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/100w.webp",
  webp_size: "91724"
  },
  downsized_small: {
  width: "362",
  height: "204",
  mp4: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy-downsized-small.mp4",
  mp4_size: "175086"
  },
  fixed_width_downsampled: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200w_d.gif",
  width: "200",
  height: "113",
  size: "116184",
  webp: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200w_d.webp",
  webp_size: "37276"
  },
  downsized_medium: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy.gif",
  width: "480",
  height: "270",
  size: "3659296"
  },
  original: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy.gif",
  width: "480",
  height: "270",
  size: "3659296",
  frames: "41",
  mp4: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy.mp4",
  mp4_size: "342162",
  webp: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy.webp",
  webp_size: "751536",
  hash: "b6054711643e10991a6be4c921394ac7"
  },
  fixed_height: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200.gif",
  width: "356",
  height: "200",
  size: "2123407",
  mp4: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200.mp4",
  mp4_size: "310547",
  webp: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/200.webp",
  webp_size: "503992"
  },
  looping: {
  mp4: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy-loop.mp4",
  mp4_size: "1227703"
  },
  original_mp4: {
  width: "480",
  height: "270",
  mp4: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy.mp4",
  mp4_size: "342162"
  },
  preview_gif: {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/giphy-preview.gif",
  width: "91",
  height: "51",
  size: "49904"
  },
  "480w_still": {
  url: "https://media3.giphy.com/media/9FW6lAAOwS0j1vwS1P/480w_s.jpg",
  width: "480",
  height: "270"
  }
  },
  title: "confused cardi b GIF",
  _score: 0,
  analytics: {
  onload: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=9FW6lAAOwS0j1vwS1P&action_type=SEEN"
  },
  onclick: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=9FW6lAAOwS0j1vwS1P&action_type=CLICK"
  },
  onsent: {
  url: "https://giphy_analytics.giphy.com/simple_analytics?response_id=5c1d5d2c353850666b7846c5&event_type=GIF_TRENDING&gif_id=9FW6lAAOwS0j1vwS1P&action_type=SENT"
  }
  }
  }
  ],
  pagination: {
  total_count: 103137,
  count: 100,
  offset: 0
  },
  meta: {
  status: 200,
  msg: "OK",
  response_id: "5c1d5d2c353850666b7846c5"
  }
}

module.exports = dummy_data
