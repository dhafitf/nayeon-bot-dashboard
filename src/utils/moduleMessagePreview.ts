export const instagramMessagePreview = (id: number | string, name: string) => {
  return [
    {
      name: "Nayeon",
      icon_url: "https://cdn.discordapp.com/attachments/902795352363655209/1016745293959680153/293024524_329700882578840_122881402094170011_n.jpg",
      isBot: true,
      color: "#4791ff",
      content: id === 0 ? "" : name === "@everyone" ? "@everyone" : "<@&998521415034744833>",
      embeds: [
        {
          color: "#EA00FF",
          author: {
            name: "TWICE Instagram update",
            icon_url: "https://cdn.discordapp.com/attachments/946644664134533161/992087715711565844/channels4_profile.jpg",
          },
          description: "힐링 \n \\n\\nLink:\\n https://www.instagram.com/p/CDomKI1jvYu/",
          timestamp: "August 8, 2020",
        },
      ],
      attachment: [
        "https://cdn.discordapp.com/attachments/946644664134533161/992091578225152020/117534505_113703233626902_3281974805927365228_n.jpg",
        "https://cdn.discordapp.com/attachments/946644664134533161/992092679515160647/117309397_1684684131682914_7691563183807373715_n.jpg",
      ],
    },
  ];
};

export const youtubeMessagePreview = (id: number | string, name: string) => {
  return [
    {
      name: "Nayeon",
      icon_url: "https://cdn.discordapp.com/attachments/946950887480369154/991575129572257862/25cdd9a7f2eb3f8cee43fefcfc0d6100f09c704d.jpg",
      isBot: true,
      color: "#4791ff",
      content: (id === 0 ? "" : name === "@everyone" ? "@everyone  \\n " : "<@&998521415034744833>  \\n ") + "https://www.youtube.com/watch?v=lvcNztFK2iE",
      embeds: [
        {
          color: "#e1306c",
          title: 'TWICE "Talk that Talk" Dance Practice Behind the Scenes',
          url: "https://www.youtube.com/watch?v=lvcNztFK2iE",
          author: {
            name: "TWICE YouTube update",
            icon_url: "https://cdn.discordapp.com/attachments/902795352363655209/1016745293959680153/293024524_329700882578840_122881402094170011_n.jpg",
          },
          image: {
            url: "https://i.ytimg.com/vi/lvcNztFK2iE/hqdefault.jpg",
          },
          description: 'TWICE "Talk that Talk" Dance Practice Behind the Scenes TWICE 11TH MINI ALBUM "BETWEEN 1&2" ❣Listen "BETWEEN 1&2" HERE👇...',
          timestamp: "September 04, 2022",
        },
      ],
    },
  ];
};

export const tiktokMessagePreview = (id: number | string, name: string) => {
  return [
    {
      name: "Nayeon",
      icon_url: "https://cdn.discordapp.com/attachments/946950887480369154/991575129572257862/25cdd9a7f2eb3f8cee43fefcfc0d6100f09c704d.jpg",
      isBot: true,
      color: "#4791ff",
      content: id === 0 ? "" : name === "@everyone" ? "@everyone" : "<@&998521415034744833>",
      embeds: [
        {
          color: "#fbceb1",
          title: "#TalkthatTalk Challenge✌ TWICE💕 #TWICE #트와이스 #BETWEEN1and2",
          url: "https://www.tiktok.com/@twice_tiktok_official/video/7136037925887790337",
          author: {
            name: "TWICE Tiktok update",
            icon_url: "https://cdn.discordapp.com/attachments/925024594119778347/1017018444287324300/1662216470860802.jpeg",
          },
          image: {
            url: "https://cdn.discordapp.com/attachments/925024594119778347/1017016543143538729/e99a46d66d1048b29ecfb41dbc92cd18_1661488320.jpg",
          },

          timestamp: "August 26, 2022",
        },
      ],
    },
  ];
};

export const vliveMessagePreview = (id: number | string, name: string) => {
  return [
    {
      name: "Nayeon",
      icon_url: "https://cdn.discordapp.com/attachments/946950887480369154/991575129572257862/25cdd9a7f2eb3f8cee43fefcfc0d6100f09c704d.jpg",
      isBot: true,
      color: "#4791ff",
      content: id === 0 ? "" : name === "@everyone" ? "@everyone" : "<@&998521415034744833>",
      embeds: [
        {
          color: "#55f8ff",
          title: "🤡",
          url: "https://www.vlive.tv/video/284848/",
          author: {
            name: "TWICE just went live!",
            icon_url: "https://cdn.discordapp.com/attachments/902795352363655209/1016745293959680153/293024524_329700882578840_122881402094170011_n.jpg",
          },
          image: {
            url: "https://cdn.discordapp.com/attachments/925024594119778347/1016965795584159784/thumb.jpg",
          },
          description: "Link: \\n https://www.vlive.tv/video/284848/",
          timestamp: "May 02, 2022",
        },
      ],
    },
  ];
};
