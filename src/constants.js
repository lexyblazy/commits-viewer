export const USER = "user";
export const BASE_URL = "https://api.github.com";

export const colors = {
  color_primary: "#eb2f64",
  color_primary_light: "#ff3366",
  color_primary_dark: "#ba265d",
  color_grey_light_1: "#faf9f9",
  color_grey_light_2: "#f4f2f2",
  color_grey_light_3: "#f0eeee",

  color_grey_dark_1: "#333",
  color_grey_dark_2: "#777",
  color_grey_dark_3: "#999",
  color_dark: "#24292e",
  color_white: "#fff"
};

export const SAMPLE = {
  sha: "3a8b988cb2a0ae30365b5901c82ce819792d4155",
  node_id:
    "MDY6Q29tbWl0MjkwMjg3NzU6M2E4Yjk4OGNiMmEwYWUzMDM2NWI1OTAxYzgyY2U4MTk3OTJkNDE1NQ==",
  commit: {
    author: {
      name: "Oleksandr Melnykov",
      email: "omelnykov@fb.com",
      date: "2019-06-20T09:42:10Z"
    },
    committer: {
      name: "Facebook Github Bot",
      email: "facebook-github-bot@users.noreply.github.com",
      date: "2019-06-20T09:49:19Z"
    },
    message:
      "Release underlying resources when JS instance is GC'ed on Android\n\nSummary:\n[Android] [Added] - Release underlying resources when JS instance is GC'ed on Android\n\nD15279651 introduced a crash for Oculus Twilight on Android (T45199437), so it was reverted by D15611385.\n\nThis diff fixes the crash and re-applies D15279651. The problem was that ProGuard renamed BlobModule.remove() to BlobModule.release(), but the C++ code in `BlobCollector.cpp` still expected the old name. I confirmed this by looking at the Extracted Symbols file for the build which introduces the crash (https://fburl.com/mobile/ud40od3i):\n\n```\ncom.facebook.react.modules.blob.BlobModule -> com.facebook.react.modules.blob.BlobModule:\n...\n8190:8193:void remove(java.lang.String):190:193 -> release\n...\n```\n\nSee the full log file here: https://fburl.com/pn02bwkb.\n\nThe solution is to annotate the method with `DoNotStrip` so that ProGuard doesn't rename it.\n\nReviewed By: mdvacca, cpojer\n\nDifferential Revision: D15826082\n\nfbshipit-source-id: f7470d394666cd34c1acae5c6ffaecc84d5ca5a3",
    tree: {
      sha: "000cc4c26ccf20b9ab1f8a41c2dc209b4239f54e",
      url:
        "https://api.github.com/repos/facebook/react-native/git/trees/000cc4c26ccf20b9ab1f8a41c2dc209b4239f54e"
    },
    url:
      "https://api.github.com/repos/facebook/react-native/git/commits/3a8b988cb2a0ae30365b5901c82ce819792d4155",
    comment_count: 0,
    verification: {
      verified: false,
      reason: "unsigned",
      signature: null,
      payload: null
    }
  },
  url:
    "https://api.github.com/repos/facebook/react-native/commits/3a8b988cb2a0ae30365b5901c82ce819792d4155",
  html_url:
    "https://github.com/facebook/react-native/commit/3a8b988cb2a0ae30365b5901c82ce819792d4155",
  comments_url:
    "https://api.github.com/repos/facebook/react-native/commits/3a8b988cb2a0ae30365b5901c82ce819792d4155/comments",
  author: {
    login: "makovkastar",
    id: 1076309,
    node_id: "MDQ6VXNlcjEwNzYzMDk=",
    avatar_url: "https://avatars1.githubusercontent.com/u/1076309?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/makovkastar",
    html_url: "https://github.com/makovkastar",
    followers_url: "https://api.github.com/users/makovkastar/followers",
    following_url:
      "https://api.github.com/users/makovkastar/following{/other_user}",
    gists_url: "https://api.github.com/users/makovkastar/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/makovkastar/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/makovkastar/subscriptions",
    organizations_url: "https://api.github.com/users/makovkastar/orgs",
    repos_url: "https://api.github.com/users/makovkastar/repos",
    events_url: "https://api.github.com/users/makovkastar/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/makovkastar/received_events",
    type: "User",
    site_admin: false
  },
  committer: {
    login: "facebook-github-bot",
    id: 6422482,
    node_id: "MDQ6VXNlcjY0MjI0ODI=",
    avatar_url: "https://avatars3.githubusercontent.com/u/6422482?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/facebook-github-bot",
    html_url: "https://github.com/facebook-github-bot",
    followers_url: "https://api.github.com/users/facebook-github-bot/followers",
    following_url:
      "https://api.github.com/users/facebook-github-bot/following{/other_user}",
    gists_url:
      "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}"
  }
};
