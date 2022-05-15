Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      hero: {
        title: "Retno Ayu Wulandari",
        description: "Mahasiswa Universitas Ahmad Dahlan",
        social: {
          ig: {
            url: "https://www.instagram.com/retnoayuwulndri/",
            title: "retnoayuwulndri",
          },
          github: {
            url: "https://github.com/Retnoayuwulandari",
            title: "Retnoayuwulandari",
          },
          yt: {
            url: "https://www.youtube.com/channel/UCK8nEwdTjBad5AmVvqdGFcg",
            title: "RETNO AYU WULANDARI",
          },
        },
      },
      about: {
        description:
          " I am a student of Ahmad Dahlan University, Information Systems Study Program. here's a bit of my personal data:",
      },
      article: {
        title: "Article",
        description: "Beberapa article yang dapat membantu anda",
        box: {
          img: "",
          content: {
            cushion: {
              title: "Cushion Looke",
              description:
                "Cushion adalah istilah yang digunakan untuk menggambarkan base makeup portabel yang bentuknya mirip dengan bedak. Namun, cushion berisi dasar makeup, seperti foundation, BB Cream, tinted moisturizer, atau CC Cream.",
            },
            liptint: {
              title: "Emina Glossy Stain",
              description:
                "lip tint adalah produk pewarna bibir yang dipopulerkan Korean beauty ke seluruh dunia. Anda yang menyukai pewarna bibir dengan sensasi ringan di bibir mungkin sudah akrab dengan produk yang satu ini. liptint banyak jenisnya.",
            },
            eyebrow: {
              title: "Eyebrow Focallure",
              description:
                "Peralatan kosmetik yang satu ini memiliki fungsi sama seperti pensil alis, yaitu untuk menggambar dan menegaskan bentuk alis. Anda pasti sudah sangat familiar dengan pensil alis, tapi mungkin masih asing dengan eyebrow powder dan gel.",
            },
          },
        },
      },
    };
  },
}).mount("#app");
