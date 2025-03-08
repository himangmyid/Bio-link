const links = {
    website: "https://s.id/himang",
    mycoffee: "https://trakteer.id/himang/tip",
    facebook: "https://www.facebook.com/himangbd181021/",
    instagram: "https://instagram.com/himang_dg",
    twitter: "https://x.com/himangmyid",
    youtube: "https://www.youtube.com/channel/UCX8aSUkYR0tAW3md1JFmhnQ?sub_confirmation=1",
    github: "https://github.com/himangmyid",
    tiktok: "https://tiktok.com/@himang_dg",
    telegram: "/",
    pinterest: "/",
    linkedin: "https://s.id/linkedin-himang",
    spotify: "/",
    discord: "https://discord.gg/MP2pSKjXSB",
    dribbble: "/",
    medium: "/",
    paypal: "https://paypal.me/DogGhozt",
    twitch: "https://www.twitch.tv/himanghub",
    whatsapp: "/",
    threads: "https://www.threads.net/@himang_dg",
    marketplace: "/",
  };
  // Auto-inject links ke dalam HTML
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-link]").forEach((el) => {
      const key = el.getAttribute("data-link");
      if (links[key]) {
        el.href = links[key]; 
      }
    });
  });