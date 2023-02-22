import { BIOGRAPHIES } from "./artistBiographies";
import { RELEASES } from "./artistReleases";
import appleMusicLogo from "@/assets/socials/apple_music.webp";
import spotifyLogo from "@/assets/socials/spotify.webp";
import instagramLogo from "@/assets/socials/instagram.webp";
import youtubeLogo from "@/assets/socials/youtube.webp";
import tiktokLogo from "@/assets/socials/tiktok.webp";

const ARTISTS = [
  {
    name: "Veyster",
    href: "/veyster",
    imageUrl: "https://hqmusic-bucket.s3.us-east-2.amazonaws.com/veyster.webp",
    socials: [
      { name: "Apple Music", href: "", logo: appleMusicLogo },
      { name: "Spotify", href: "", logo: spotifyLogo },
      { name: "Instagram", href: "", logo: instagramLogo },
      { name: "YouTube", href: "", logo: youtubeLogo },
      { name: "TikTok", href: "", logo: tiktokLogo },
    ],
    biography: BIOGRAPHIES[0].artistBio,
    location: "Kansas City",
    releases: RELEASES[0].releases,
  },
  {
    name: "Brdwy Ev",
    href: "/brdwyev",
    imageUrl: "https://hqmusic-bucket.s3.us-east-2.amazonaws.com/kevin.webp",
    socials: [
      { name: "Apple Music", href: "", logo: appleMusicLogo },
      { name: "Spotify", href: "", logo: spotifyLogo },
      { name: "Instagram", href: "", logo: instagramLogo },
      { name: "YouTube", href: "", logo: youtubeLogo },
      { name: "TikTok", href: "", logo: tiktokLogo },
    ],
    location: "Kansas City",
    biography: BIOGRAPHIES[1].artistBio,
    releases: RELEASES[1].releases,
  },
  {
    name: "Odee-loh",
    href: "/odeeloh",
    imageUrl: "https://hqmusic-bucket.s3.us-east-2.amazonaws.com/odeeloh.webp",
    socials: [
      { name: "Apple Music", href: "", logo: appleMusicLogo },
      { name: "Spotify", href: "", logo: spotifyLogo },
      { name: "Instagram", href: "", logo: instagramLogo },
      { name: "YouTube", href: "", logo: youtubeLogo },
      { name: "TikTok", href: "", logo: tiktokLogo },
    ],
    location: "Kansas City",
    biography: BIOGRAPHIES[2].artistBio,
    releases: RELEASES[2].releases,
  },
  {
    name: "Quan LLP!!",
    href: "/quanllp",
    imageUrl: "https://hqmusic-bucket.s3.us-east-2.amazonaws.com/quanllp.webp",
    socials: [
      { name: "Apple Music", href: "", logo: appleMusicLogo },
      { name: "Spotify", href: "", logo: spotifyLogo },
      { name: "Instagram", href: "", logo: instagramLogo },
      { name: "YouTube", href: "", logo: youtubeLogo },
      { name: "TikTok", href: "", logo: tiktokLogo },
    ],
    location: "Kansas City",
    biography: BIOGRAPHIES[3].artistBio,
    releases: RELEASES[3].releases,
  },
  {
    name: "Brdwy Seffy Smoove",
    href: "/brdwyseffy",
    altName: "BrdwySeffySmoove",
    imageUrl: "https://hqmusic-bucket.s3.us-east-2.amazonaws.com/seffy.webp",
    socials: [
      { name: "Apple Music", href: "", logo: appleMusicLogo },
      { name: "Spotify", href: "", logo: spotifyLogo },
      { name: "Instagram", href: "", logo: instagramLogo },
      { name: "YouTube", href: "", logo: youtubeLogo },
      { name: "TikTok", href: "", logo: tiktokLogo },
    ],
    location: "Kansas City",
    biography: BIOGRAPHIES[4].artistBio,
    releases: RELEASES[4].releases,
  },
  {
    name: "Dreskii",
    href: "/dreskii",
    imageUrl: "https://hqmusic-bucket.s3.us-east-2.amazonaws.com/dreskii.webp",
    socials: [
      { name: "Apple Music", href: "", logo: appleMusicLogo },
      { name: "Spotify", href: "", logo: spotifyLogo },
      { name: "Instagram", href: "", logo: instagramLogo },
      { name: "YouTube", href: "", logo: youtubeLogo },
      { name: "TikTok", href: "", logo: tiktokLogo },
    ],
    location: "Kansas City",
    biography: BIOGRAPHIES[5].artistBio,
    releases: RELEASES[0].releases,
  },
  {
    name: "Lil Myron",
    href: "/lilmyron",
    imageUrl: "https://hqmusic-bucket.s3.us-east-2.amazonaws.com/myron.webp",
    socials: [
      { name: "Apple Music", href: "", logo: appleMusicLogo },
      { name: "Spotify", href: "", logo: spotifyLogo },
      { name: "Instagram", href: "", logo: instagramLogo },
      { name: "YouTube", href: "", logo: youtubeLogo },
      { name: "TikTok", href: "", logo: tiktokLogo },
    ],
    location: "Kansas City",
    biography: BIOGRAPHIES[6].artistBio,
    releases: RELEASES[0].releases,
  },
];

export default ARTISTS;
